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

 import levelConvert from "Algorithm/EngLevelToCh";


class EngTest extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  componentDidMount(){
    this.loadTest();
  }

  componentWillReceiveProps( NextProps ){
    if(this.props.testend == false && NextProps.testend == true){
      this.recordWordTestLevel();
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
        username: "gyc",
        // username: this.props.username,
        level: this.props.level
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
    } = this.props;

    console.log(level);

    return(
      <React.Fragment>

        <div>
          {/* <p className={style.title}>水平测试</p> */}
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
              <p>您已完成词汇测试！您的英语水平为：{levelConvert(level)}水平</p>
            </div>
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
      // questions: state.SingleSubjectTest.content,
      questions: state.EnglishWordTest.content,
      testend: state.EnglishWordTest.testendState,
      level: state.EnglishWordTest.nowAt.level,
    }),
    dispatch => ({
      // ...bindActionCreators( PortTestActions , dispatch),
      // ...bindActionCreators( SingleSubjectTestActions , dispatch ),
      ...bindActionCreators( EnglishWordTestActions , dispatch ),
    })
  )],
  EngTest
);
