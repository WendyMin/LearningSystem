import React from 'react';
import { connect } from 'react-redux';
import style from 'style';

import {
  view as UserManager
} from 'Connected/UserManager';
import  {
  view as SubjectSelect
} from 'Connected/SubjectSelect';

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
    if( logined ){ alert("您已经登录!") ; this.setState({loginShow: false}) }
    else { this.setState({loginShow: true , signupShow: false}) }
  }

  sign = () => {
    this.setState({ signupShow: true , loginShow: false })
    console.log(this.state.signupShow)
    console.log(this.state.loginShow)
  //  const { logined } = this.props;
    //if( logined ){ alert("您已经登录!") ; this.setState({loginShow: false , signupShow: false}) }
    //else { this.setState({ loginShow: false , signupShow: true}) }
  }

  render(){
    const {
      logined,
      choice,
      username
     } = this.props;

    if(logined){this.setState({loginShow: false})}
     //if(logined) { //var customerId = username.attr.customerInfo.id;
       //sessionStorage.customerId = customerId;
       //console.log(username)
       //sessionStorage.setItem("user",username);  //保存 用户名
       //this.setState({loginShow: false , signupShow: false}) }
       //else {sessionStorage.setItem("user",undefined);}

    return (
      <React.Fragment>
        <div className = {style.wholePage}>

          <div className = {style.HUD}>
            <div className = {style.sysTitle}> 学习系统 </div>
            <div className = {style.loginOrSignup}>
              <a onClick = {() => this.log()} ><u> 登录 </u></a> <a>&nbsp;&nbsp;&nbsp;</a>
              <a onClick = {() => this.sign()}><u> 注册 </u></a>
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
                         onSuccess = { () => this.setState({ loginShow: false})}
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
    //dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
    //})
  )],
  IndexPage
);






/*import React from 'react';
import { connect } from 'react-redux';
//import { Prompt } from 'react-router';
import style from 'style';

//import LoginForm from 'UI/LoginForm';
//import SignUpForm from 'UI/SignUpForm';
import {
  view as UserManager
} from 'Connected/UserManager';

//import protect from 'HOC/protect';
import asyncProcessControl from 'HOC/asyncProcessControl';
import makePage from 'HOC/makePage';
import applyHOCs from 'HOC/applyHOCs';

//import UserManagerWindow from "Windows/UserManager";

class IndexPage extends React.PureComponent {

  constructor( props ){
    super( props );

    this.subject = ["英语科目" , "逻辑科目" , "写作科目" , "数学科目"];
    this.introduction = ["英语科目简介" , "逻辑科目简介" , "写作科目简介" , "数学科目简介"];
    this.useIntroduction = ["英语学习部分分为测试、学习、复习三个部分" , "逻辑学习部分分为测试、知识点精要、学习、复习四个部分" ,
                            "写作学习部分分为论证有效性分析和论说文两个个部分" , "数学学习部分分为测试、学习、复习三个部分"];

    this.state = {
      englishIntroShow: true,
      logicIntroShow: false,
      writeIntroShow: false,
      mathIntroShow: false,
      loginShow: false,
      signupShow: false
    }

  }

  showIntroduction = (num) => {
    num == 0 ? this.setState({englishIntroShow: true , logicIntroShow: false , writeIntroShow: false , mathIntroShow: false }) :
    num == 1 ? this.setState({englishIntroShow:false , logicIntroShow: true , writeIntroShow: false , mathIntroShow: false }) :
    num == 2 ? this.setState({englishIntroShow:false , logicIntroShow: false , writeIntroShow: true , mathIntroShow: false }) :
    this.setState({englishIntroShow: false , logicIntroShow: false , writeIntroShow: false ,  mathIntroShow: true})
  }

  render(){
    const { logined } = this.props;
    //console.log(logined)
    //if(logined) { alert("您已经登录!") ;this.setState({ loginShow: false }) };
    if(logined) { this.setState({ loginShow: false }) };

   var TextStyle = [];
   this.state.englishIntroShow ? TextStyle[0] = style.chosedText : TextStyle[0] = style.normalText;
   this.state.logicIntroShow ? TextStyle[1] = style.chosedText : TextStyle[1] = style.normalText;
   this.state.writeIntroShow ? TextStyle[2] = style.chosedText : TextStyle[2] = style.normalText;
   this.state.mathIntroShow ? TextStyle[3] = style.chosedText : TextStyle[3] = style.normalText;

    return (
      <React.Fragment>
        <div className = {style.wholePage}>

          <div className = {style.HUD}>
            <div className = {style.sysTitle}> 学习系统 </div>
            <div className = {style.loginOrSignup}>
              <a onClick = {() => this.setState({loginShow: true , signupShow: false})}
              ><u> 登录 </u></a> <a>&nbsp;&nbsp;&nbsp;</a>
              <a onClick = {() => this.setState({loginShow: false , signupShow: true})}
              ><u> 注册 </u></a>
            </div>
          </div>

          <div className = {style.subjectText}>
            <ul>
              {this.subject.map((sub , key) =>
                <li key = {key} className = {TextStyle[key]}
                    onMouseMove = { () => this.showIntroduction(key) }
                    onClick = { () => this.showIntroduction(key) }
                >{sub}</li>
              )}
            </ul>
          </div>

          {
            this.state.englishIntroShow ?
            <div className = {style.subjectIntroduction}>
              <div className = {style.title}>{this.introduction[0]}</div><br/>
              <div className = {style.brifIntroduction}>{this.useIntroduction[0]}</div><br/>
              <a href = "/learning/english">开始英语学习</a>
            </div>
           :
           this.state.logicIntroShow ?
           <div className = {style.subjectIntroduction}>
             <div className = {style.title}>{this.introduction[1]}</div><br/>
             <div className = {style.brifIntroduction}>{this.useIntroduction[1]}</div><br/>
             <a href = "/learning/logic">开始逻辑学习</a>
          </div>
          :
          this.state.writeIntroShow ?
          <div className = {style.subjectIntroduction}>
            <div className = {style.title}>{this.introduction[2]}</div><br/>
            <div className = {style.brifIntroduction}>{this.useIntroduction[2]}</div><br/>
            <a href = "/learning/writing">开始写作学习</a>
          </div>
          :
          <div className = {style.subjectIntroduction}>
            <div className = {style.title}>{this.introduction[3]}</div><br/>
            <div className = {style.brifIntroduction}>{this.useIntroduction[3]}</div><br/>
            <a href = "/learning/math">开始数学学习</a>
          </div>
          }


       {/*this.state.loginShow?
         <div className = {style.login}><LoginForm/></div>:
         null
       }
       {this.state.signupShow?
         <div className = {style.login}><SignUpForm/></div>:
         null
       *}
       {this.state.loginShow?
         <div className = {style.login}>
           <UserManager loginOrSignup = "login"
                        signup = { () => this.setState({ signupShow: true })}
                        onCancel = { () => this.setState({ loginShow: false })}
           />
         </div>
         :
         null
       }
       {this.state.signupShow?
         <div className = {style.login}>
           <UserManager loginOrSignup = "signup"
                        onCancel = { () => this.setState({ signupShow: false })}
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
  asyncProcessControl({
  }),
  /*protect({
    logined: {
      satisfy: l => l === true,
      block: ({ openWindow , history, closeMask , openMask }) => {
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
  /*makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
    })
  )],
  IndexPage
);*/
