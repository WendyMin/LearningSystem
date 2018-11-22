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
  view as MathLevelTestTongji,
  actions as MathLevelTestTongjiActions
} from 'Connected/MathLevelTestTongji';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

import mathLevelTestRightRate from 'Algorithm/mathLevelTestRightRate';
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
    // this.props.forceClearQuestions();
    this.props.loadTestQuestions({
      url: "/api/mathLevelTest",
    })
  }
  loadTestResult = () => {
    this.props.loadMathLevelTestTongjiContent({
      url: "/api/mathGetLevelTestLatestResult",
      body: {
        username: this.props.username
      }
    });
    this.props.loadMathLevelTestMeanTongjiContent({
      url: "/api/mathGetLevelTestMeanResult",
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

    var right_rate = mathLevelTestRightRate(questions);
    var rightRate = "";
    // console.log(rightRate)
    for(var key in right_rate){
      rightRate += `${right_rate[key]}*`
    }
    console.log(rightRate)

   this.props.submitQuestions({
      url: "/api/mathRecordLevelTestResult",
      body: {
        username: username,
        rightRate: rightRate
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
             <MathLevelTestTongji loadTestResult = {() => this.loadTestResult()}/><br/>
             <div align="center">
               <Button text = "再测一次" onClick = {() => {this.setState({enterTest: false , testAgain: true , startTestNoteShow: true});this.props.forceEnd();this.loadQuestions()}}/>
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
      whetherDidTest: state.MathLevelTestTongji.flag
    }),
    dispatch => ({
      ...bindActionCreators( MathLevelTestActions , dispatch ),
      ...bindActionCreators( MathLevelTestTongjiActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  MathTest
);
