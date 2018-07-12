import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import Button from 'UI/Button';
import changeAlpToNum from 'Algorithm/changeAlpToNum';
import UserManagerWindow from "Windows/UserManager";

import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class ZhongDian extends React.PureComponent {

  constructor( props ){
    super( props );

    this.state = {
      submit: false
    };
  }

  loadQuestions = ( ) => {
    // console.log(this.props.username,this.props.chapter_name)
    this.props.loadPortContent({
      url: "/api/logicZhongdian",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },
    });
    this.props.loadQuestions({
      url: "/api/logicZhongdian",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },

      parser: response => {
        var all = [];
        // for( var i = 0 ; i < response.timu.length ; i++ ){
        //   response.timu[i].map ( one => all.push(one) )
        // }
        //console.log(all)

        response.timu.map ( one => all.push(one) )

        return all.map(one => ({
           questionId: one.id,
           options: one.xuangxiang,
           rightKey: changeAlpToNum( one.answer ),
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
      content,
      questions,
      // submitQuestionState,
      // submiting,
      lockAndShow
    } = this.props;
    console.log(questions)
    // var submitTime = submitQuestionState.resolved;
    // if( submiting ){
    //   return;
    // }

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
      //console.log(RightOrWrong)
      //else {
      //else if( questions[i].choosed != questions[i].rightKey ){
      //  RightOrWrong += `${1}*`;
    //  }
      //if( questions[i].choosed !== questions[i].rightKey ){
        //RightOrWrong += `${1}*`;
      //}
      //else {
      //else if( questions[i].choosed == questions[i].rightKey ){
        //RightOrWrong += `${0}*`;
      //}
    }
    console.log(question_id,RightOrWrong)

    this.props.submitQuestions({
      url: "/api/logicZhongDianTongJi",
      body: {
        username: username,
        dalei: content.chapter_name,
        question_id: question_id,
        RightOrWrong: RightOrWrong
      }
    });
    for( var i = 0; i < questions.length ; i++ ){
      lockAndShow( questions[i].questionId );
    }
  }

 componentDidMount(){
   this.loadQuestions();
 }

  render(){
    const {
      content,
      setLearningType
    } = this.props;
    console.log(this.props)
    //console.log(questions)

    return (
      <React.Fragment>
        <div className="card-box">
          <h4 className = {style.dalei}> {content.chapter_name} </h4>
          <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test" layoutFormat="leftRight"/>
          <div align = "center">
            {this.state.submit ? <Button text = {"进入强化练习"} onClick = {() => setLearningType("强化练习")}/> :
            <Button text = {"提交"} onClick={() => this.submitQuestions()}/>}
          </div>
        </div>

        {/* {content.flag == 1 ?
        <div className="card-box">
          <div className = {style.logic_knowledge}>
            <h4 className = {style.dalei}> {content.chapter_name} </h4>
            <p>{content.shuxu}</p>
            <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test" layoutFormat="leftRight"/>
            <div align = "center">
            {  this.state.submit ? <Button text = {"进入强化练习"} onClick = {() => setLearningType("强化练习")}/> :


              <Button text = {"提交"} onClick={() => {this.props.setSubmitZhongdian(true);this.submitQuestions()}}/>
            }
               <strong><div style = {{"color":"#ff5b5b"}}>请先确认提交，再做强化练习</div></strong>
            </div>
          </div>
        </div>
        :
        <Info info = "您还没有完成入口测试，请先完成入口测试！"/>
        } */}
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      questions: state.SingleOptionQuestions.content,
      loadQuestionState: state.SingleOptionQuestions.loadState,
      submitQuestionState: state.SingleOptionQuestions.submitState,
      content: state.PortTest.content,
      loadContentState: state.PortTest.loadState,
      chapter_name: state.LearningTypeSelect.chapter_name,
      choice: state.SubjectSelect.choice
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      // ...bindActionCreators( LogicStateActions , dispatch )
    })
  )],
  ZhongDian
);
