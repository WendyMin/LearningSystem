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

// import WriteGraph from 'UI/WriteGraph';
// import { actions as PortTestActions } from 'Connected/PortTest';
import {
  view as EnglishWordTest,
  actions as EnglishWordTestActions
 } from 'Connected/EnglishWordTest';
 // import {
 //   view as SingleSubjectTest,
 //   actions as SingleSubjectTestActions
 // } from 'Connected/SingleSubjectTest';

class EngTest extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  componentDidMount(){
    this.loadTest();
  }

  loadTest = () => {
    this.props.loadTestQuestions({
      url: "/api/eng_wordTest",
    })
  }

  render(){

    const {
      // test,
      questions,
      ined,
      forceNext,
    } = this.props;
    // console.log(questions["basic"]);

    return(
      <React.Fragment>
          <div>
            <p className={style.title}>水平测试</p>
            <SlideRL play = {ined}>
              <EnglishWordTest
                  //submiter = { this.submitQuestions }
                  loader = {this.loadTest}
              />
          </SlideRL>
          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success btn-lg m-b-5"
                  onClick = {forceNext}
          >下一题</button>
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
    }),
    dispatch => ({
      // ...bindActionCreators( PortTestActions , dispatch),
      // ...bindActionCreators( SingleSubjectTestActions , dispatch ),
      ...bindActionCreators( EnglishWordTestActions , dispatch ),
    })
  )],
  EngTest
);
