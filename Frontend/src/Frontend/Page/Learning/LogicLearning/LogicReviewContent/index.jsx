import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as PortTestActions } from 'Connected/PortTest';
import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';

import TextAndImag from 'UI/TextAndImag';
import Button from 'UI/Button';
import changeAlpToNum from 'Algorithm/changeAlpToNum';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LogicReviewContent extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      submit: false
    }
  }

  requestChapterContent = () => {
    this.props.loadPortContent({
      url: "/api/logicGetReviewZhishidian",
      body: {
        chapter_name: this.props.chapter_name
      }
    }); // 加载知识点
    this.props.loadQuestions({
      url: "/api/logicGetReviewCuoti",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },

      parser: response => {
        var all = [];
        response.content.map ( one => all.push(one) )
        //console.log(response.content.length)
        return all.map(one => ({
           questionId: one.id,
           options: one.options,
           rightKey: changeAlpToNum( one.answer ),
           question: one.question,
           analysis: one.analysis,
         }) )
      }
    }) // 加载错题
  }

  componentDidMount(){
    this.props.forceClearQuestions();
    this.requestChapterContent();
  }

  submitQuestions = () => {
    this.setState({submit: true})
    const {
      questions,
      lockAndShow
    } = this.props;

    var question_id = "";
    var RightOrWrong = "";
    for ( var i = 0 ; i < questions.length ; i++ ){
      question_id += `${questions[i].questionId}*`;
      if( questions[i].choosed !== undefined && questions[i].choosed.toString() === questions[i].rightKey ){
        RightOrWrong += `${0}*`;
      }
      else {
        RightOrWrong += `${1}*`;
      }
      // if( questions[i].choosed.toString() === questions[i].rightKey ){
      //   RightOrWrong += `${0}*`;
      // }
      // else {
      //   RightOrWrong += `${1}*`;
      // }
    }

    //console.log(username,content.chapter_name,question_id,RightOrWrong)
    this.props.submitQuestions({
      url: "/api/logicRecordReviewCuoti",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name,
        question_id: question_id,
        RightOrWrong: RightOrWrong
      }
    });

    for( var i = 0; i < questions.length ; i++ ){
      lockAndShow( questions[i].questionId );
    }
  }


  render(){
    const {
      total_content,
      setLearningType,
      chapter_name,
      questions
    } = this.props;
    //console.log(total_content.content)

    return (
      <React.Fragment>
        <div className="row">
            <h4 className = {style.dalei} style = {{"color":"#ff5b5b"}}> {chapter_name} </h4>
            <div className="col-lg-6">
              <div className="card-box" style={{"fontSize":"16px","lineHeight":"32px"}}>
                 <h4 align = "center" className="header-title m-t-0 m-b-30">知识点精要</h4>
                 {total_content.content == undefined ? null : <TextAndImag list = {total_content.content}/>}
                 {
                   total_content.shunxu == undefined ? null :
                   <div>{total_content.shunxu.map((onetype , key) =>
                   <div key = {key}>
                     <div className = {style.logic_knowledge_title}> {onetype} </div>
                     {total_content.xiaolei == undefined ? null:  <TextAndImag list = {total_content.xiaolei[key]} />}
                   </div>)}</div>
                 }
              </div>
            </div>
            {/* <!-- end col --> */}

            <div className="col-lg-6">
              <div className="card-box">
                <h4 align = "center" className="header-title m-t-0 m-b-30">错题集锦</h4>
                {
                  questions.length == 0 ? <div align="center" style = {{"fontSize":"18px","color":"#ff5b5b"}}>您在本章没有错题！</div> :
                  <div>
                    <SingleOptionQuestions loader = {this.requestChapterContent} layoutFormat="upDown" whetherHaveXuhao = {true}/>
                    <div align="center">
                      {this.state.submit ? null :
                      <Button text = {"提交"} onClick={this.submitQuestions}/>}
                    </div>
                  </div>
                }
              </div>
            </div>
            {/* <!-- end col --> */}

          </div>

      </React.Fragment>
    );
  }
};

export default applyHOCs([
  makePage,
  connect(
    state => ({
      username: state.UserManager.name,
      chapter_name: state.LogicReviewModel.choice,
      total_content: state.PortTest.content,
      questions: state.SingleOptionQuestions.content,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch )
    })
  )],
  LogicReviewContent
);
