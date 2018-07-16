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
      testAgain: false,
      newEnterTest: false,
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
      newEnterTest,
    } = this.state;

    // console.log();

    return(
      <React.Fragment>

        <div>
          {
            enterLearning ?
            <EngLearningTypeSelect/>
            :

            ((enterTest && didTest) || (enterTest && testend) || (testAgain && testend)) ?
            <div class="panel panel-custom panel-border">
              <div class="panel-heading">
                  <h3 class="panel-title">Well Done !</h3>
              </div>
              <div class="panel-body">
                <div className={style.text}>恭喜！您已完成词汇测试！您的英语水平为：
                  <span style = {{"color":"#188ae2"}}>{levelConvert(didLevel)}水平</span>
                </div>
                <br/>
                 <div className={style.text}>请点击左侧的进入学习，开始英语学习吧</div>
                 <br/>
                 <div className={style.text}>如需要重新测试，请点击：
                   <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                    onClick = {() => {this.setState({enterTest: false , enterLearning: false , testAgain: true});this.props.forceEnd();this.loadTest()}}>
                    再测一次</button>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                    onClick = {() => {this.setState({enterTest: false , enterLearning: true , testAgain: false});this.props.forceEnd()}}>
                    进入学习</button> */}
                  </div>
              </div>
            </div>
            :

            newEnterTest || testAgain && !testend ?
            <div>
              <SlideRL play = {ined}>
                <EnglishWordTest
                    //submiter = { this.submitQuestions }
                    loader = {this.loadTest}
                />
              </SlideRL>
              {/* <div className={style.buttonright}>
                <button class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                  onClick = {forceNext}>
                  下一题</button>
              </div> */}
              <div className={style.textgrey}>测试时间约为2分钟</div>
            </div>
            :

            (enterTest && !didTest) ?
            <div class="panel panel-custom panel-border">
              <div class="panel-heading">
                  <h3 class="panel-title">Sorry</h3>
              </div>
              <div class="panel-body">
                <div className={style.text}>您为新用户，系统还没有您的数据，请点击开始水平测试，完成基础测评</div>
                <br/>
                <div className={style.text}>测试时间约为<span>2</span>分钟</div>
                <br/>
                <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                    onClick={() => this.setState({newEnterTest: true})} >开始测试</button>
              </div>
            </div>
            :

            null
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
