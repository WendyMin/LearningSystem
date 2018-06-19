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

    // this.state = {
    //   login_Show: true,
    //   signup_Show: false
    // }
  }


  render(){
    const {username,logined} = this.props;
    //console.log(this.props);
    if(logined) {
      //console.log(username)
      sessionStorage.setItem("user",username);  //保存 用户名
      //console.log(sessionStorage.getItem("user"))
      // this.setState({loginShow: false , signupShow: false})
    }

    return (
      <div className="smallscreen">
      {/* // <React.Fragment> */}
        <div className="account-pages"></div>
      <div className="clearfix"></div>
      <div className="wrapper-page">
          <div className="text-center">
              <a href="index.html" className="logo"><span>Learning<span>System</span></span></a>
              <h5 className="text-muted m-t-0 font-600">Welcome to login</h5>
          </div>
        <div className="m-t-40 card-box">
              <div className="text-center">
                  <h4 className="text-uppercase font-bold m-b-0">Sign In</h4>
              </div>
              <div className="panel-body">
                  <form className="form-horizontal m-t-20" action="index.html">

                      <div className="form-group ">
                          <div className="col-xs-12">
                              <input className="form-control" type="text" required="" placeholder="Username"/>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className="col-xs-12">
                              <input className="form-control" type="password" required="" placeholder="Password"/>
                          </div>
                      </div>

                      <div className="form-group ">
                          <div className="col-xs-12">
                              <div className="checkbox checkbox-custom">
                                  <input id="checkbox-signup" type="checkbox"/>
                                  <label htmlFor="checkbox-signup">
                                      Remember me
                                  </label>
                              </div>

                          </div>
                      </div>

                      <div className="form-group text-center m-t-30">
                          <div className="col-xs-12">
                            <button className="btn btn-custom btn-bordred btn-block waves-effect waves-light" type="submit" onClick={()=>this.log()}>Log In</button>
                          </div>
                      </div>

                      <div className="form-group m-t-30 m-b-0">
                          <div className="col-sm-12">
                              <a href="page-recoverpw.html" className="text-muted"><i className="fa fa-lock m-r-5"></i> Forgot your password?</a>
                          </div>
                      </div>
                  </form>

              </div>
          </div>


          <div className="row">
              <div className="col-sm-12 text-center">
                  <p className="text-muted">Don't have an account? <a href="/signup" className="text-primary m-l-5"><b>Sign Up</b></a></p>
              </div>
          </div>

      </div>

      {/* // </React.Fragment> */}
    </div>


    );
  }
};

export default applyHOCs([
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
