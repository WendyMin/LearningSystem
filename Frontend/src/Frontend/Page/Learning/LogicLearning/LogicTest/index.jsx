import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import Button from 'UI/Button';
import Info from 'UI/Info';
import LogicTestChart from 'UI/LogicTestChart';

import SlideRL from 'Animation/SlideRL';

import UserManagerWindow from "Windows/UserManager";
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import {
  view as SingleSubjectTest,
  actions as SingleSubjectTestActions
} from 'Connected/SingleSubjectTest';
import {
  view as LogicTestTongji,
  actions as LogicTestTongjiActions
} from 'Connected/LogicTestTongji';
import EnterLearning from 'Page/Learning/LogicLearning/EnterLearning';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

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

   // console.log(right_rate0,right_rate1,right_rate2,right_rate3,right_rate4,right_rate5,right_rate6,right_rate7,right_rate8,right_rate9,right_rate10,right_rate11,right_rate12,right_rate13,right_rate14)
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

  endThisTest = () => {
	  var r=confirm("您确定要结束本次测试吗?");
	  if (r==true){
      this.setState({enterTest: true , enterLearning: false , testAgain: false})
		  // x="你按下了\"确定\"按钮!";
	  }
	  else{
		  // x="你按下了\"取消\"按钮!";
	  }
	  // document.getElementById("demo").innerHTML=x;
  }

  componentDidMount(){
    this.loadQuestions();
    this.loadTestResult();
  }
  componentWillReceiveProps( NextProps ){
    if(this.props.testend == false && NextProps.testend == true){
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
        <div className={style.wrapper}>
         {
           this.state.enterTest && whetherDidTest || this.state.enterTest && testend || this.state.testAgain && testend ?
           <div className="card-box">
             <div className = {style.tongji}>
               <LogicTestTongji loadTestResult = {() => this.loadTestResult()}/>
               <br/><br/><span>&nbsp;&nbsp;&nbsp;&nbsp;请选择再次测试还是开始章节内容的学习：&nbsp;&nbsp;</span>
               <span><Button text = "再测一次" onClick = {() => {this.setState({enterTest: false , enterLearning: false , testAgain: true});this.props.forceEnd();this.loadQuestions()}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Button text = "开始学习" onClick = {() => {this.props.setLearningType("");this.setState({enterTest: false , enterLearning: true , testAgain: false });this.props.setSubjectFunctionSelect(1)}}/></span>
             </div>
           </div>
            :
           this.state.enterTest && !whetherDidTest || this.state.testAgain && !testend ?
           <div>
                <SlideRL play = {ined}>
                  <SingleSubjectTest
                      //submiter = { this.submitQuestions }
                      loader = {this.loadQuestions}
                  />
                </SlideRL>
            <div align="center">
              <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success btn-lg m-b-5"
                      onClick = {forceNext}
              >下一题</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md btn-sm m-b-5"
                      onClick = {() => this.endThisTest()}
              >结束测试</button>
            </div>

              {/* <Button className = {style.nextQuestion}
                      text = {"下一题"}
                      onClick = {forceNext}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button className = {style.nextQuestion}
                      text = {"结束测试"}
                      onClick = {() => this.endThisTest()}
              /> */}

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
      ...bindActionCreators( LogicTestTongjiActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  LogicTest
);
