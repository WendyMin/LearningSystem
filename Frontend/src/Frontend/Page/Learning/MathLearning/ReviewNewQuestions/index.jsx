import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import {  actions as LearningTypeSelectActions} from 'Connected/LearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import Button from 'UI/Button';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class ReviewNewQuestions extends React.PureComponent {
  constructor( props ){
    super( props );
    // this.state = {
      // typeselect: true,
    // }
  }

  componentDidMount(){
    this.props.forceClearQuestions();
    this.loadReviewNewQuestions();
  }

  loadReviewNewQuestions = ( ) => {
    // console.log(this.props.chapterCN , this.props.sectionCN)
    this.props.loadQuestions({
      url: "/api/mathGetReviewNewQuestions",
      body: {
        username: "202513",
        // username: this.props.username,
        chapter_name: this.props.chapterCN,
        zhishidian: this.props.sectionCN
      },

      parser: response => {
        var all = [];
        response.map ( one =>
          all.push(one)
          //one.per_timu.map( oneques => all.push(oneques))
        )
        // console.log(all)
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
      setLearningType,
      learningType,
      chapterCN,
      sectionCN,
      onClick
    } = this.props;

    return(
      <React.Fragment>
        <div className="card-box">
          <h4 className = {style.dalei}> {chapterCN}&nbsp;&nbsp;&nbsp;&nbsp;{sectionCN} </h4>
          <SingleOptionQuestions loader = {this.loadReviewNewQuestions} subject = "math" layoutFormat="leftRight" whetherHaveXuhao = {true}/>
          <div align = "center">
            <Button text = {"提交"} onClick={() => this.submitQuestions()}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <button  className="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                     onClick={onClick} >
                返回列表</button>
          </div>
        </div>
      </React.Fragment>
    )
  }




}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      username: state.UserManager.name,
      learningType: state.LearningTypeSelect.learningType,
      questions: state.SingleOptionQuestions.content,
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch)
    })
  )],
  ReviewNewQuestions
);
