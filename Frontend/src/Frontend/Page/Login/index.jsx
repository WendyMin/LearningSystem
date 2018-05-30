import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import {
  view as UserManager
} from 'Connected/UserManager';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class Login extends React.PureComponent {

  constructor( props ){
    super( props );

    this.state = {
      login_Show: true,
      signup_Show: false
    }
  }


  render(){
    const {username,logined} = this.props;
    //console.log(this.props);
    if(logined) {
      console.log(username)
      sessionStorage.setItem("user",username);  //保存 用户名
      console.log(sessionStorage.getItem("user"))
      // this.setState({loginShow: false , signupShow: false})
    }

    return (
      <React.Fragment>
        { /*alert ("您还没有登录，请先登录!")*/}
        <div className = {style.wholePage}>

          <div className={style.HUD}>
            {/*<div className={style.loginOrSignup}>
              <a href = "/login"> 登录 </a> <a>&nbsp;&nbsp;&nbsp;</a>
              <a href = "/login"> 注册 </a>
            </div>*/}
          </div>


          {this.state.login_Show ?
          <div className = {style.login}>
            <UserManager loginOrSignup = "login"
                         onSuccess = { () => {this.setState({ login_Show: false});sessionStorage.setItem("user",username);alert("登录成功!")}}
                         signup = { () => this.setState({ signup_Show: true , login_Show: false })}
                         onCancel = { () => history.back()}
            />
          </div>
          :
          null
          }
          {this.state.signup_Show ?
          <div className = {style.login}>
            <UserManager loginOrSignup = "signup"
                         onCancel = { () => this.setState({ signup_Show: false , login_Show: true })}
            />
          </div>
          :
          null
          }


        </div>
      </React.Fragment>
    );
  }
};

export default applyHOCs([
/*  asyncProcessControl({
  }),
  protect({
    logined: {
      satisfy: l => l === true,
      block(){
        const { openWindow , history, closeMask , openMask } = this.props;
        openWindow( UserManagerWindow,
          {
            width: '380px',
            height: '300px',
            position: {
              top: 'calc( 50% - 190px)',
              left: 'calc( 50% - 150px)'
            },
            onCancel: () => history.goBack() || closeMask(),
            onSuccess: closeMask,
          }
        );
        openMask();
      }
    }
  }),*/
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
    })
  )],
  Login
);
