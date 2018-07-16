import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as PortTestActions } from 'Connected/PortTest';

var sha1 = require('sha1');
sha1("message");

class UITest extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
    };
  }

  componentDidMount(){
    this.function();
  }

  function = () => {
    this.props.loadPortContent({
      url:"/api/all_getProgress",
      body:{
        username: this.props.username,
      }
    })
  }

  render(){

    const {
      content,
    } = this.props;

    console.log(content);

    return(
      <React.Fragment>
        <a href={"https://passport.doxue.com/login?redirect_url=59.110.23.212&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>登录测试</a>
         {/* sha1 一种密码加密算法 */}
         {/* <a href={"https://passport.doxue.com/login?redirect_url=localhost:8080&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>登录测试</a> */}
         {/* http://localhost:8080 */}
        {/* <a href={DATA.serverUrl+'service/apartment'+url+'?apartmentId='+urlID}>测试</a> */}
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
