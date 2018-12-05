import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import {  actions as MathReviewWrongQuestionsPortActions} from 'Connected/MathReviewWrongQuestionsPort';
import FinishedNote from 'UI/FinishedNote';
import Button from 'UI/Button';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class ReviewWrongQuestions extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  componentDidMount(){
    this.props.forceClearQuestions();
    this.loadReviewWrongQuestions();
  }

  loadReviewWrongQuestions = ( ) => {
    this.props.loadQuestions({
      url: "/api/mathGetReviewWrongQuestions",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapterCN,
        zhishidian: this.props.sectionCN
      },

      parser: response => {
        var all = [];
        response.map ( one =>
          all.push(one)
        )
        return all.map(one => ({
           questionId: one.id,
           options: one.option,
           rightKey: one.answer,
           question: one.question,
           analysis: one.analysis,
         }) )
      }
    })
  }

  submitQuestions = () => {
    this.setState({submit: true});
    const {
      username,
      questions,
      lockAndShow
    } = this.props;
    console.log(questions)

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
    }

    // console.log(username,this.props.chapter_name,question_id,RightOrWrong)
    // this.props.submitQuestions({
    //   url: "/api/mathRecordQiangHuaResult",
    //   body: {
    //     username: username,
    //     chapter_name: this.props.chapterCN,
    //     zhishidian: this.props.sectionCN,
    //     timu_id: question_id,
    //     rightOrWrong: RightOrWrong
    //   }
    // });
    for( var i = 0; i < questions.length ; i++ ){
      lockAndShow( questions[i].questionId );
    }
  }


  render(){

    const {
      chapterCN,
      sectionCN,
      questions,
      onClick,
      qs,
    } = this.props;

    return(
      <React.Fragment>

          {
            typeof(qs)=="string"? null
            :
            qs.length === 0 ?
            <div>
              <div className = {style.title}> {chapterCN}&nbsp;&nbsp;&nbsp;&nbsp;{sectionCN} </div>
              <FinishedNote info="您在本章节的没有错题 ！"/>
              <div className="col-lg-12" align="center">
                <Button text = {"返回列表"} onClick={onClick} />
              </div>
            </div>
            :
            questions.length != 0?
            <div className="card-box">
              <div className = {style.title}> {chapterCN}&nbsp;&nbsp;&nbsp;&nbsp;{sectionCN} </div>
              <SingleOptionQuestions loader = {this.loadReviewWrongQuestions} subject = "math" layoutFormat="leftRight" whetherHaveXuhao = {true}/>
              <div align = "center">
                <Button text = {"提交"} onClick={() => this.submitQuestions()}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button text = {"返回列表"} onClick={onClick} />
              </div>
            </div>
            :
            null
            }

      </React.Fragment>
    )
  }

}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      username: state.UserManager.name,
      questions: state.SingleOptionQuestions.content,
      qs: state.MathReviewWrongQuestionsPort.content,
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch),
      ...bindActionCreators( MathReviewWrongQuestionsPortActions , dispatch)
    })
  )],
  ReviewWrongQuestions
);
