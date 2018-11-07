import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import TestStart from 'UI/TestStart';
import Button from 'UI/Button';
import LogicTestChart from 'UI/LogicTestChart';

import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import {
  view as MathLevelTest,
  actions as MathLevelTestActions
} from 'Connected/MathLevelTest';
import {
  view as LogicTestTongji,
  actions as LogicTestTongjiActions
} from 'Connected/LogicTestTongji';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

import changeAlpToNum from 'Algorithm/changeAlpToNum';
import decideNextQuestion from 'Algorithm/decideNextQuestion';
import logicTestRightRate from 'Algorithm/logicTestRightRate';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class MathTest extends React.PureComponent {

  constructor( props ){
    super( props );
    this.submit = false,
    this.state = {
      enterTest: true,
      testAgain: false,
      startTestNoteShow: true
    }
  }

  loadQuestions = () => {
    this.props.loadTestQuestions({
      url: "/api/mathLevelTest",
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
    } = this.props;

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

    this.submit = true;
    if(this.submit) {
      this.loadTestResult();
    }

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
      questions, // 题目
      forceNext,  // 点击下一题，强制进入下一题
      forceEnd,  // 强制将测试完成的状态设为 false ,即未完成测试
      testend,  // 是否完成了测试
      whetherDidTest  // 之前是否已经做过水平测试
    } = this.props;
    // console.log(this.props)
    // console.log(this.state.enterTest && whetherDidTest,this.state.enterTest && !whetherDidTest)
      // console.log(typeof(this.state.enterTest && whetherDidTest),typeof(this.state.enterTest && !whetherDidTest))
    return (
      <React.Fragment>
        {typeof(this.state.enterTest && whetherDidTest)=="string" ? null :
        <div className={style.wrapper}>
         {
           this.state.enterTest && whetherDidTest || this.state.enterTest && testend || this.state.testAgain && testend ?
           <div className="card-box">
             <LogicTestTongji loadTestResult = {() => this.loadTestResult()}/><br/>
             <div align="center">
               <Button text = "再测一次" onClick = {() => {this.setState({enterTest: false , testAgain: true , startTestNoteShow: true});this.props.forceEnd();this.loadQuestions()}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Button text = "开始学习" onClick = {() => {this.props.setLearningType("");this.props.setSubjectFunctionSelect(1)}}/>
             </div>
           </div>
           :
           this.state.enterTest && !whetherDidTest || this.state.testAgain && !testend ?
           <div>
             {
               this.state.startTestNoteShow ? <TestStart testnum="共30题" testtime="7分钟" onClick={() => {this.setState({startTestNoteShow: false});this.loadQuestions()}}/> :
               <div>
                 {JSON.stringify(questions) == '{}' ? null : <MathLevelTest/>}
                 <div align="center">
                   <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success btn-lg m-b-5"
                           onClick = {forceNext}
                   >下一题</button>
                 </div>
               </div>
             }
           </div>
           : null
         }
       </div>
     }
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  makePage,
  connect(
    state => ({
      username: state.UserManager.name,
      questions: state.MathLevelTest.content,
      testend: state.MathLevelTest.testendState,
      whetherDidTest: state.LogicTestTongji.flag
    }),
    dispatch => ({
      ...bindActionCreators( MathLevelTestActions , dispatch ),
      ...bindActionCreators( LogicTestTongjiActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  MathTest
);
