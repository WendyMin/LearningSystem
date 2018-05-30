import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import Info from 'UI/Info';
import ButtonControlPane from 'UI/ButtonControlPane';
import LogicTestChart from 'UI/LogicTestChart';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import UserManagerWindow from "Windows/UserManager";

import {
  view as SingleSubjectTest,
  actions as SingleSubjectTestActions
} from 'Connected/SingleSubjectTest';
import {
  view as LogicTestTongji,
  actions as LogicTestTongjiActions
} from 'Connected/LogicTestTongji';
import EnterLearning from 'Page/Learning/LogicLearning/EnterLearning';

import changeAlpToNum from 'Algorithm/changeAlpToNum';
import decideNextQuestion from 'Algorithm/decideNextQuestion';
import logicTestRightRate from 'Algorithm/logicTestRightRate';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LogicTest extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      enterTest: true,
      enterLearning: false,
      testAgain: false
    }
  }

  loadQuestions = () => {
    this.props.loadTestQuestions({
      url: "/api/logicTest",
    })
  }
  loadTestResult = () => {
    this.props.loadTestTongjiContent({
      url: "/api/logicTestTongji",
      body: {
        username: this.props.username
      }
    });
    this.props.loadTestMeanTongjiContent({
      url: "/api/logicTestMeanTongji",
      body: {
        username: this.props.username
      }
    });
  }

  submitQuestions = () => {
    const {
      username,
      questions,
      submitQuestionState,
      submiting,
    } = this.props;
    //console.log(questions)

    var submitTime = submitQuestionState.resolved;
    if( submiting ){
      return;
    }

    var right_rate0 = "";  var right_rate1 = ""; var right_rate2 = "";var right_rate3 = "";var right_rate4 = "";
    var right_rate5 = "";var right_rate6 = "";var right_rate7 = "";var right_rate8 = "";var right_rate9 = "";
    var right_rate10 = "";var right_rate11 = "";var right_rate12 = "";var right_rate13 = "";var right_rate14 = "";
    var right_rate = logicTestRightRate( questions );
    //console.log(right_rate)

    right_rate0 += right_rate[0];
    right_rate1 += right_rate[1];
    right_rate2 += right_rate[2];
    right_rate3 += right_rate[3];
    right_rate4 += right_rate[4];
    right_rate5 += right_rate[5];
    right_rate6 += right_rate[6];
    right_rate7 += right_rate[7];
    right_rate8 += right_rate[8];
    right_rate9 += right_rate[9];
    right_rate10 += right_rate[10];
    right_rate11 += right_rate[11];
    right_rate12 += right_rate[12];
    right_rate13 += right_rate[13];
    right_rate14 += right_rate[14];

   console.log(right_rate0,right_rate1,right_rate2,right_rate3,right_rate4,right_rate5,right_rate6,right_rate7,right_rate8,right_rate9,right_rate10,right_rate11,right_rate12,right_rate13,right_rate14)
   this.props.submitQuestions({
      url: "/api/logicTestRightRate",
      body: {
        username: username,
        right_rate0: right_rate0,
        right_rate1: right_rate1,
        right_rate2: right_rate2,
        right_rate3: right_rate3,
        right_rate4: right_rate4,
        right_rate5: right_rate5,
        right_rate6: right_rate6,
        right_rate7: right_rate7,
        right_rate8: right_rate8,
        right_rate9: right_rate9,
        right_rate10: right_rate10,
        right_rate11: right_rate11,
        right_rate12: right_rate12,
        right_rate13: right_rate13,
        right_rate14: right_rate14,
      }
    });

    this.props.loadTestTongjiContent({
      url: "/api/logicTestTongji",
      body: {
        username: this.props.username
      }
    });
    this.props.loadTestMeanTongjiContent({
      url: "/api/logicTestMeanTongji",
      body: {
        username: this.props.username
      }
    });

  }

  componentDidMount(){
    this.loadQuestions();
    this.loadTestResult();
  }
  componentWillReceiveProps( NextProps ){
    // if(this.props.testend !== NextProps.testend){
    if(this.props.testend == false && NextProps.testend == true){
      //alert("Submit")
      this.submitQuestions();
    }
  }


  render(){
    const {
      submitQuestionState,
      loadQuestionState,
      ined,
      questions,
      next,
      forceNext,
      forceEnd,
      testend,
      username,
      whetherDidTest
    } = this.props;
    //console.log(this.props)
    //this.setState({enterTest: !whetherDidTest});
    //console.log(this.state.enterTest);
    //console.log(this.state.enterLearning)
    //console.log(this.state.testAgain)
    //console.log(this.state.resetestend)
    //console.log(testend)
    return (
      <React.Fragment>
        <Prompt
          when = {(this.state.enterTest && !whetherDidTest || this.state.testAgain && !testend) !== true}
          message = "you need to do it again, are you sure to quit?"
        />

        <div className={style.wrapper}>
         {
           this.state.enterTest && whetherDidTest || this.state.enterTest && testend || this.state.testAgain && testend ?
           <div className = {style.tongji}>
             <LogicTestTongji loadTestResult = {() => this.loadTestResult()}/>
             <br/><br/><span style = {{"color":"blue"}}>&nbsp;&nbsp;&nbsp;&nbsp;请选择再次测试还是开始章节内容的学习：</span>
             <span><Button text = "再测一次" onClick = {() => {this.setState({enterTest: false , enterLearning: false , testAgain: true});this.props.forceEnd();this.loadQuestions()}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Button text = "开始学习" onClick = {() => {this.setState({enterTest: false , enterLearning: true , testAgain: false })}}/></span>
           </div> :
           this.state.enterTest && !whetherDidTest || this.state.testAgain && !testend ?
           <div className={style.question}>
              <Loading
                  loading = {loadQuestionState.pending}
                  wasLoaded = {loadQuestionState.resolved}
                  lastFailed = {loadQuestionState.lastFailed}
                  reloader = {this.loadQuestions}
                  center
              >
                <SlideRL play = {ined}>
                  <SingleSubjectTest
                      //submiter = { this.submitQuestions }
                      loader = {this.loadQuestions}
                  />
                </SlideRL>
              </Loading>

              <Button className = {style.nextQuestion}
                      text = {"下一题"}
                      onClick = {forceNext}
              />
           </div>
           : null
         }

         {this.state.enterLearning ? <EnterLearning/> :null}

        </div>
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
      questions: state.SingleSubjectTest.content,
      loadQuestionState: state.SingleSubjectTest.loadState,
      submitQuestionState: state.SingleSubjectTest.submitState,
      lock: state.SingleSubjectTest.lock,
      show: state.SingleSubjectTest.show,
      testend: state.SingleSubjectTest.testendState,
      whetherDidTest: state.LogicTestTongji.flag
    }),
    dispatch => ({
      ...bindActionCreators( SingleSubjectTestActions , dispatch ),
      ...bindActionCreators( LogicTestTongjiActions , dispatch )
    })
  )],
  LogicTest
);
