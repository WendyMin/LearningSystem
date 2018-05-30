import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';

import {
  actions as PortTestActions
} from 'Connected/PortTest';
import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';

import TextAndImag from 'UI/TextAndImag';
import Button from 'UI/Button';
import Info from 'UI/Info';
import changeAlpToNum from 'Algorithm/changeAlpToNum';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';
import UserManagerWindow from "Windows/UserManager";

class LogicReviewContent extends React.PureComponent {

  constructor( props ){
    super( props );
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
           //options: [one.op_one , one.op_two , one.op_three , one.op_four , one.op_five],
           rightKey: changeAlpToNum( one.answer ),
           question: one.question,
           analysis: one.analysis,
         }) )
      }
    }) // 加载错题
  }

  componentDidMount(){
    this.requestChapterContent();
  }

  submitQuestions = () => {
    const {
      questions,
      submitQuestionState,
      submiting,
      lockAndShow
    } = this.props;
    //console.log(questions)
    var submitTime = submitQuestionState.resolved;
    if( submiting ){
      return;
    }

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
        //time: submitTime + 1
      }
    });
    //if( ( ( submitTime + 1 ) & 1 ) === 0 ){
      for( var i = 0; i < questions.length ; i++ ){
        lockAndShow( questions[i].questionId );
      }
    //}
  }




  render(){
    const {
      submitQuestionState,
      loadQuestionState,
      loadContent,
      loadContentState,
      total_content,
      ined,
      setLearningType,
      chapter_name,
      questions
    } = this.props;
    //console.log(total_content.content)

    return (
      <React.Fragment>
        <h4 className = {style.dalei} style = {{"color":"red"}}> {chapter_name} </h4>
        <div className = {style.zhishidian}>
          <h4 className = {style.fuxibiaoti}>知识点精要</h4>
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

        <div className = {style.cuoti}>
          <h4 className = {style.fuxibiaoti}>错题集锦</h4>
          {
            questions.length == 0 ? <Info info = "您在本章没有错题！"/> :
            <div>
              <SingleOptionQuestions loader = {this.requestChapterContent} subject = "logic_review"/>
              <Button className = {style.submitButton} text = {"确认提交"} onClick={this.submitQuestions}/>
            </div>
          }

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
      submitQuestionState: state.SingleOptionQuestions.submitState,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch )
    })
  )],
  LogicReviewContent
);
