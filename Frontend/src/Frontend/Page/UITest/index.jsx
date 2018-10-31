import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import UserManagerWindow from "Windows/UserManager";
import FinishedNote from 'UI/FinishedNote';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as PortTestActions } from 'Connected/PortTest';
import WordsToString from 'Algorithm/WordsToString';

// var sha1 = require('sha1');
// sha1("message");

class UITest extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
    };
  }

  componentDidMount(){
    this.function();
  }

  // function = () => {
  //   this.props.loadPortContent({
  //     url:"/api/eng_recordWordTestWords",
  //     body:{
  //       username: "testdzh",
  //       rightwords: "zhongkao*eat*zhongkao*meat*gaokao*fantastic",
  //       wrongwords: "zhongkao*vegetable*zhongkao*sacrifice"
  //     }
  //   })
  // }

  function = () => {
    this.props.loadPortContent({
      url:"/api/test",
      // body:{
      //   username: "testdzh",
      //   rightwords: "zhongkao*eat*zhongkao*meat*gaokao*fantastic",
      //   wrongwords: "zhongkao*vegetable*zhongkao*sacrifice"
      // }
    })
  }

  render(){

    const {
      content,
    } = this.props;

    console.log(content);
    // console.log(WordsToString(["basic", "luck", "basic", "cancel", "basic", "luck"]))

    return(
      <React.Fragment>
        {/* <a href={"https://passport.doxue.com/login?redirect_url=59.110.23.212&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>登录测试</a> */}

        <div>ui</div>
        <div>{"\"\\u7ec4\\u5408\\u4e0e\\u7ec4\\u5408\\u6570\""}</div>
        <div>{"\u7ec4\u5408\u4e0e\u7ec4\u5408\u6570","\u7ec4\u5408\u516c\u5f0f","\u5e38\u89c1\u7c7b\u578b","\u6478\u7403\u95ee\u9898","\u4e8b\u4ef6\u7684\u6982\u7387\u8fd0\u7b97","\u6982\u7387\u7684\u6027\u8d28"}</div>

      </React.Fragment>
    )
  }




}


// export default EngReview
export default applyHOCs([
  asyncProcessControl({
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      content: state.PortTest.content,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  UITest
);
