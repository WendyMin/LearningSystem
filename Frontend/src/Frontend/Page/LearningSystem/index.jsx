import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  view as UserManager,
  actions as UserManagerActions
} from 'Connected/UserManager';
import  {view as SubjectSelect} from 'Connected/SubjectSelect';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class IndexPage extends React.PureComponent {
  constructor( props ){
    super( props );

    this.subject = ["英语科目" , "逻辑科目" , "写作科目" , "数学科目"];
    this.introduction = ["英语科目简介" , "逻辑科目简介" , "写作科目简介" , "数学科目简介"];
    this.useIntroduction = ["英语学习部分分为测试、学习、复习三个部分" , "逻辑学习部分分为测试、知识点精要、学习、复习四个部分" ,
                            "写作学习部分分为论证有效性分析和论说文两个部分,涵盖了做题技巧、巩固练习和真题演练" , "数学学习部分分为测试、学习、复习三个部分"];

    this.state = {
      loginShow: false,
      signupShow: false
    }

  }

  log = () => {
    const { logined } = this.props;
    console.log(logined)
    if( logined ){ alert("您已经登录!") ; this.setState({loginShow: false}) }
    else { this.setState({loginShow: true , signupShow: false}) }
  }

  sign = () => {
    this.setState({ signupShow: true , loginShow: false })
  }

  exit = () => {
    const { logined } = this.props;
    if(logined){
      alert("确定退出登录吗?");
    }
    else{
      alert("您还未登录!");
    }
    sessionStorage.setItem("user","");
    this.props.setUser(undefined,false)
  }

  // componentWillMount(){
  //   sessionStorage.setItem("user","");
  // }

  render(){
    const {
      logined,
      choice,
      username
     } = this.props;
     console.log(this.props);

    if(logined) {
      console.log(username);
      this.setState({loginShow: false});
      sessionStorage.setItem("user",username);  //保存 用户名
    }

    var user = sessionStorage.getItem("user");
    console.log(sessionStorage.getItem("user"))
    console.log(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" || sessionStorage.getItem("user") == null)
    if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" || sessionStorage.getItem("user") == null){

    }
    else{
      this.props.setUser(user,true);
    }

    return (
      <React.Fragment>
        <div className = {style.wholePage}>

          <div className = {style.HUD}>
            <div className = {style.sysTitle}> 学习系统 </div>
            <div className = {style.loginOrSignup}>
              <a onClick = {() => this.log()} ><u> 登录 </u></a> <a>&nbsp;&nbsp;&nbsp;</a>
              <a onClick = {() => this.sign()}><u> 注册 </u></a> <a>&nbsp;&nbsp;&nbsp;</a>
              <a onClick = {() => this.exit()}><u> 退出登录 </u></a>
            </div>
          </div>

          <div className = {style.subjectText} background-color="orange">
            <SubjectSelect text = {this.subject} normalStyle = {style.normalText} choosedStyle = {style.chosedText}/>
          </div>

          <div className = {style.subjectIntroduction}>
            <div className = {style.title}>{this.introduction[choice]}</div><br/>
            <div className = {style.brifIntroduction}>{this.useIntroduction[choice]}</div><br/>
            {choice == 0 ? <a href = "/learning/english"> 开始英语学习 </a> :
             choice == 1 ? <a href = "/learning/logic"> 开始逻辑学习 </a> :
             choice == 2 ? <a href = "/learning/writing"> 开始写作学习 </a> :
             choice == 3 ? <a href = "/learning/math"> 开始数学学习 </a> : null
            }
          </div>

          {this.state.loginShow ?
          <div className = {style.login}>
            <UserManager loginOrSignup = "login"
                         onSuccess = { () => {alert("登录成功!");this.setState({ loginShow: false})}}
                         signup = { () => this.setState({ signupShow: true , loginShow: false })}
                         onCancel = { () => this.setState({ loginShow: false , signupShow: false })}
            />
          </div>
          :
          null
          }
          {this.state.signupShow ?
          <div className = {style.login}>
            <UserManager loginOrSignup = "signup"
                         onCancel = { () => this.setState({ signupShow: false , loginShow: false })}
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
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      choice: state.SubjectSelect.choice
    }),
    dispatch => ({
      ...bindActionCreators( UserManagerActions , dispatch )
    })
  )],
  IndexPage
);
