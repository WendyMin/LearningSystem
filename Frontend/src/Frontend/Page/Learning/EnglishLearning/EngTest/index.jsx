import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Note from 'UI/Note';
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
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

 import levelConvert from "Algorithm/EngLevelToCh";
 import WordsToString from "Algorithm/WordsToString";
 import TestStart from "UI/TestStart";

class EngTest extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      enterTest: true,
      enterLearning: false,
      testAgain: false,
      newEnterTest: false,
      enterTestSure: false,
    },
    this.submit =  false
  }

  componentDidMount(){
    this.loadTest();
  }

  componentWillReceiveProps( NextProps ){
    if( this.props.username == undefined && NextProps.username != undefined ){
      this.getUserLevel(NextProps.username);
      this.getUserRate(NextProps.username);
    }
    if(this.props.testend == false && NextProps.testend == true){
      // this.getUserLevel(this.props.username);
      //  this.getUserRate(this.props.username);
      this.recordTestLevel();
      this.recordTestWords()
    }
  }

  loadTest = () => {
    this.props.loadTestQuestions({
      url: "/api/eng_wordTest",
    })
  }

  recordTestLevel = () => {
    this.props.recordWordTestLevel({
      url:"/api/eng_recordWordTest",
      body:{
        username: this.props.username,
        level: this.props.level
      }
    })
  }

  recordTestWords = () => {
    if(this.props.rightwords==""){
      this.props.recordWordTestWords({
        url:"/api/eng_recordWordTestWords",
        body:{
          username: this.props.username,
          rightwords: "none",
          wrongwords: WordsToString(this.props.wrongwords)
        }
      })
    }
    else if(this.props.wrongwords==""){
      this.props.recordWordTestWords({
        url:"/api/eng_recordWordTestWords",
        body:{
          username: this.props.username,
          rightwords: WordsToString(this.props.rightwords),
          wrongwords: "none"
        }
      })
    }
    else{
      this.props.recordWordTestWords({
        url:"/api/eng_recordWordTestWords",
        body:{
          username: this.props.username,
          rightwords: WordsToString(this.props.rightwords),
          wrongwords: WordsToString(this.props.wrongwords)
        }
      })
    }
    this.submit = true;
    if(this.submit) {
      this.getUserLevel(this.props.username);
       this.getUserRate(this.props.username);
    }
  }

  getUserLevel = ( username ) => {
    this.props.getLevel({
      url:"/api/eng_getLevel",
      body:{
        username: username,
      }
    })
  }

  getUserRate = ( username ) => {
    this.props.getRate({
      url:"/api/eng_getWordTestRate",
      body:{
        username: username,
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
      rightwords,
      wrongword,
      rate,
    } = this.props;

    const {
      enterLearning,
      enterTest,
      testAgain,
      newEnterTest,
      enterTestSure,
    } = this.state;

    // console.log(rate);

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
                <div className={style.text}>平均各类型正确率统计如下：</div>
                <br/>
                {
                  rate == undefined ? null :
                  <table className="table table-bordered m-0" align = "center">
                    <thead>
                      <tr>
                        <th>中考</th>
                        <th>高考</th>
                        <th>四级</th>
                        <th>六级</th>
                        {/* <th>考研</th>
                        <th>超纲</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>{(parseFloat(rate.zhongkao)*100).toFixed(1)}%</th>
                        <th>{(parseFloat(rate.gaokao)*100).toFixed(1)}%</th>
                        <th>{(parseFloat(rate.siji)*100).toFixed(1)}%</th>
                        <th>{(parseFloat(rate.liuji)*100).toFixed(1)}%</th>
                        {/* <th>{(parseFloat(content.kaoyan)*100).toFixed(1)}%</th>
                        <th>{(parseFloat(content.chaogang)*100).toFixed(1)}%</th> */}
                      </tr>
                    </tbody>
                  </table>
                }
                <br/>
                 <div className={style.text}>请点击左侧的进入学习，开始英语学习吧</div>
                 <br/>
                 <div className={style.text}>如需要重新测试，请点击：
                   <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                    onClick = {() => {this.setState({enterTest: false , enterLearning: false , testAgain: true, enterTestSure: false});this.props.forceEnd();this.loadTest()}}>
                    再测一次</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                    onClick = {() => {this.setState({enterTest: false , enterLearning: true , testAgain: false, enterTestSure: false});this.props.setSubjectFunctionSelect(1);this.props.forceEnd()}}>
                    进入学习</button>
                  </div>
              </div>
            </div>
            :

            newEnterTest || testAgain && !testend ?
            <div>
            {
              enterTestSure ?
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
              <TestStart testnum="约30道" testtime="2  分钟" onClick={() => this.setState({enterTestSure: true})}/>

            }

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
                    onClick={() => this.setState({newEnterTest: true, enterTestSure: false})} >开始测试</button>
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
      rightwords: state.EnglishWordTest.rightwords,
      wrongwords: state.EnglishWordTest.wrongwords,
      rate: state.EnglishWordTest.rate,
    }),
    dispatch => ({
      // ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( EnglishWordTestActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
    })
  )],
  EngTest
);
