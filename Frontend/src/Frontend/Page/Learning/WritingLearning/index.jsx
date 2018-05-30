import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Info from 'UI/Info';
import Login from 'Page/Login';
import { actions as UserManagerActions } from 'Connected/UserManager';
import WriteHelp from 'UI/Help/WriteHelp';
import { view as PageDesign } from 'Connected/PageDesign';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class WritingPage extends React.PureComponent {

  constructor( props ){
    super( props );
    this.type = ["入口测试" , "进入学习"  , "查看帮助"];
  }

  render(){
    const {
      username,
      logined,
      choice
    } = this.props;
    // console.log(this.props);
    // console.log(sessionStorage.getItem("user"))
    // console.log(sessionStorage.getItem("user") == "")
    // console.log(sessionStorage.getItem("user") == "undefined")
    var user = sessionStorage.getItem("user");
    if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" || sessionStorage.getItem("user") == null){
      <Login/>
    }
    else{
      this.props.setUser(user , true);
      sessionStorage.setItem("user",user);
      console.log(sessionStorage.getItem("user"))
    }
    // var user = sessionStorage.getItem("user");
    // if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" ){
    // // if(sessionStorage.getItem("user") == "" ){
    //   <Login/>
    // }
    // else{
    //   this.props.setUser(user)
    // }

    return (
      <React.Fragment>
        <div className = {style.wholePage}>
          {logined !== true ?
            <div>
              <Info info = "您还没有登录，请先登录，再进行学习!"/>
              {/* <Login/> */}
            </div> :
          // {sessionStorage.getItem("user") == "undefined" ?  <Login/> :
          <div>

          <PageDesign subjectFunctions = {this.type}/>

          <div className = {style.mainContent}>
          {
            choice == 0 ? <div>入口测试</div> :
            choice == 1 ?
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<a href = "/learning/writing/lunzheng"> 论证有效性分析 </a><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<a href = "/learning/writing/lunshuo"> 论说文 </a>
            </div> :
            <WriteHelp/>
          }
          </div>
        </div>}

        </div>
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
  }),
  // protect({
  //   logined: {
  //     satisfy: l => l === true,
  //     block(){
  //       const { openWindow , history, closeMask , openMask } = this.props;
  //       openWindow( UserManagerWindow,
  //         {
  //           width: '380px',
  //           height: '300px',
  //           position: {
  //             top: 'calc( 50% - 190px)',
  //             left: 'calc( 50% - 150px)'
  //           },
  //           onCancel: () => history.goBack() || closeMask(),
  //           onSuccess: closeMask,
  //         }
  //       );
  //       openMask();
  //     }
  //   }
  // }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      choice: state.SubjectSelect.choice,
    }),
    dispatch => ({
      ...bindActionCreators( UserManagerActions , dispatch )
      //...bindActionCreators( ButtonExpandActions , dispatch),
    })
  )],
  WritingPage
);
