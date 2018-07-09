import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import UserManagerWindow from "Windows/UserManager";
import SlideRL from 'Animation/SlideRL';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

// import { actions as PortTestActions } from 'Connected/PortTest';
import {
  view as EnglishWordTest,
  actions as EnglishWordTestActions
} from 'Connected/EnglishWordTest';
import EngLearningTypeSelect from 'Page/Learning/EnglishLearning/EngLearningTypeSelect';

 import levelConvert from "Algorithm/EngLevelToCh";


class EngTest extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      enterTest: true,
      enterLearning: false,
      testAgain: false
    }
  }

  componentDidMount(){
    this.getUserLevel();
    this.loadTest();
  }

  componentWillReceiveProps( NextProps ){
    if(this.props.testend == false && NextProps.testend == true){
      this.recordWordTestLevel();
      this.getUserLevel();
    }
  }

  loadTest = () => {
    this.props.loadTestQuestions({
      url: "/api/eng_wordTest",
    })
  }

  recordWordTestLevel = () => {
    this.props.recordWordTest({
      url:"/api/eng_recordWordTest",
      body:{
        username: this.props.username,
        level: this.props.level
      }
    })
  }

  getUserLevel = () => {
    this.props.getLevel({
      url:"/api/eng_getLevel",
      body:{
        username: this.props.username,
      }
    })
  }

  render(){

    const {
      questions,
      ined,
      forceNext,
      testend,
      level,
      didTest,
      didLevel,
    } = this.props;

    const {
      enterLearning,
      enterTest,
      testAgain,
    } = this.state;

    console.log(didLevel);

    return(
      <React.Fragment>

        {/* <div>
          {
            !testend ?
            <div>

              <SlideRL play = {ined}>
                <EnglishWordTest
                    //submiter = { this.submitQuestions }
                    loader = {this.loadTest}
                />
              </SlideRL>

              <div className={style.buttonright}>
                <button class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                  onClick = {forceNext}>
                  下一题</button>
              </div>

            </div>
            :
            <div className="card-box">
              <div className={style.text}>您已完成词汇测试！您的英语水平为：<span style = {{"color":"#188ae2"}}>{levelConvert(level)}水平</span></div>
            </div>
          }
        </div> */}


        <div>
          {
            enterTest && didTest || enterTest && testend || testAgain && testend ?
            <div class="panel panel-custom panel-border">
              <div class="panel-heading">
                  <h3 class="panel-title">Well Done !</h3>
              </div>
              <div class="panel-body">
                <div className={style.text}>恭喜！您已完成词汇测试！您的英语水平为：
                  <span style = {{"color":"#188ae2"}}>{levelConvert(didLevel)}水平</span>
                </div>
                <br/>
                <div className={style.text}>请选择再次测试，还是开启个性化学习：
                  <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                   onClick = {() => {this.setState({enterTest: false , enterLearning: false , testAgain: true});this.props.forceEnd();this.loadTest()}}>
                   再测一次</button>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                   onClick = {() => {this.setState({enterTest: false , enterLearning: true , testAgain: false});this.props.forceEnd()}}>
                   进入学习</button>
                 </div>
              </div>
            </div>
            :

            enterTest && !didTest || testAgain && !testend ?
            <div>
              <SlideRL play = {ined}>
                <EnglishWordTest
                    //submiter = { this.submitQuestions }
                    loader = {this.loadTest}
                />
              </SlideRL>
              <div className={style.buttonright}>
                <button class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                  onClick = {forceNext}>
                  下一题</button>
              </div>
            </div>
            :
            null
          }
          {
            enterLearning ?
            <EngLearningTypeSelect/>
            :null
          }
        </div>

      </React.Fragment>
    )
  }

}


export default applyHOCs([
  asyncProcessControl({
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      // test: state.PortTest.content,
      questions: state.EnglishWordTest.content,
      testend: state.EnglishWordTest.testendState,
      level: state.EnglishWordTest.nowAt.level,
      didTest: state.EnglishWordTest.recordFlagAndLevel.didTest,
      didLevel: state.EnglishWordTest.recordFlagAndLevel.level,
      choice: state.SubjectFunctionSelect.choice,
    }),
    dispatch => ({
      // ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( EnglishWordTestActions , dispatch ),
    })
  )],
  EngTest
);
