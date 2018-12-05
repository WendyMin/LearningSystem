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

class MathExercise extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  componentDidMount(){
    this.props.forceClearQuestions();
    this.loadQiangHuaQuestions();
  }

  loadQiangHuaQuestions = ( ) => {
    console.log(this.props.chapterCN , this.props.sectionCN)
    this.props.loadQuestions({
      url: "/api/mathGetQiangHuaQuestions",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapterCN,
        zhishidian: this.props.sectionCN
      },

      parser: response => {
        var all = [];
        response.timu.map ( one =>
          all.push(one)
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
    this.props.submitQuestions({
      url: "/api/mathRecordQiangHuaResult",
      body: {
        username: username,
        chapter_name: this.props.chapterCN,
        zhishidian: this.props.sectionCN,
        timu_id: question_id,
        rightOrWrong: RightOrWrong
      }
    });
    for( var i = 0; i < questions.length ; i++ ){
      lockAndShow( questions[i].questionId );
    }
  }


  render(){

    const {
      setLearningType,
      learningType,
      partCN,
      chapterCN,
      sectionCN,
    } = this.props;

    return(
      <React.Fragment>
        <div className="card-box">
          <div className={style.title}>{partCN}&nbsp;&nbsp;{chapterCN}&nbsp;&nbsp;{sectionCN}</div><br/>
          <SingleOptionQuestions loader = {this.loadQiangHuaQuestions} subject = "math" layoutFormat="leftRight" whetherHaveXuhao = {true}/>
          <div align = "center">
            <Button text = {"提交"} onClick={() => this.submitQuestions()}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <button  className="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                     onClick={() => {setLearningType("数学主页面")}} >
                返回学习主页面</button>
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
  MathExercise
);
