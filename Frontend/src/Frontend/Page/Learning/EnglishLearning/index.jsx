import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import EngTest from 'Page/Learning/EnglishLearning/EngTest';
import EngLearningTypeSelect from 'Page/Learning/EnglishLearning/EngLearningTypeSelect';
import EngReview from 'Page/Learning/EnglishLearning/EngReview';
import EngChart from 'Page/Learning/EnglishLearning/EngChart';
import EnglishHelp from 'UI/Help/EnglishHelp';
import Button from 'UI/Button';
import Info from 'UI/Info';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as UserManagerActions } from 'Connected/UserManager';
import Login from 'Page/Login';
import  { view as SubjectSelect } from 'Connected/SubjectSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';

var sha1 = require('sha1');

class EnglishLearning extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  render(){
    const{
      username,
      logined,
      newTo,
      choice,
      learningType,
    } = this.props;

    // console.log(username);

    var user = sessionStorage.getItem("user");
    if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" ){
      <Login/>
    }
    else{
      this.props.setUser(user,true);
      sessionStorage.setItem("user",user);
    }

    return (

      <React.Fragment>
        <div id="wrapper">
          <div className="topbar">

            <div className="topbar-left">
              <a href="/" className="logo"><span>Learning<span>System</span></span><i className="zmdi zmdi-layers"></i></a>

            </div>

            <div className="navbar navbar-default" role="navigation">
              <div className="container">

                <ul className="nav navbar-nav navbar-left">
                  <li>
                    <button className="button-menu-mobile open-left">
                      <i className="zmdi zmdi-menu"></i>
                    </button>
                  </li>
                  <li>
                    <h4 className="page-title">
                      {choice==0 ? <div>英语  > 水平测试</div> :
                       choice==1 ?
                        <div>
                         <span>英语  > </span>
                         <span onClick={()=>{this.props.setLearningType("英语主页面")}}>进入学习</span>
                         {
                           learningType == "" || learningType == "英语主页面" ? null :
                           learningType == "英语生词难句" ? <span onClick={()=>{this.props.setLearningType(learningType)}}> > 生词难句</span> :
                           learningType == "英语汉译英" ? <span onClick={()=>{this.props.setLearningType(learningType)}}> > 写作句型练习</span> :
                           learningType == "英语课后阅读材料" ? <span onClick={()=>{this.props.setLearningType(learningType)}}> > 课后阅读材料</span> :
                            <span onClick={()=>{this.props.setLearningType(learningType)}}> >  {learningType} </span>
                         }
                       </div> :
                       choice==2 ? <div>英语  > 开始复习</div> :
                       choice==3 ? <div>英语  > 统计图表</div> :
                       <div>英语  > 科目帮助</div>}
                    </h4>
                  </li>
                </ul>

              </div>
            </div>
          </div>

          {/* topbar end */}

          <div className="left side-menu">
            <div className="slimScrollDiv">
              <div className="sidebar-inner slimscrollleft">

                <div className="user-box">
                  <div className="user-img">
                   <img src="/static/images/users/avatar-1.jpg" alt="user-img" title={this.props.username} className="img-circle img-thumbnail img-responsive"/>
                   <div className="user-status offline"><i className="zmdi zmdi-dot-circle"></i></div>
                  </div>
                  <h5>{this.props.username}</h5>

                  <ul className="list-inline">
                   <li>
                     <a href="#" >
                       <i className="zmdi zmdi-settings"></i>
                     </a>
                   </li>

                   <li>
                     <a className="text-custom"
                        onClick={()=>{confirm('您确定要退出登录吗?')?location.href="https://passport.doxue.com/login?redirect_url=59.110.23.212&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date())):''}}
                        href="javascript:void(0);"
                        >
                       <i className="zmdi zmdi-power"></i>
                     </a>
                     {/* <a href="#" className="text-custom">
                       <i className="zmdi zmdi-power"></i>
                     </a> */}
                   </li>
                  </ul>
                </div>
               {/* userInfo end , include user imag , name and the two icons  */}

                <div id="sidebar-menu">
                  <ul>
                    <li className="text-muted menu-title">英语</li>
                    <li onClick={()=>this.props.setSubjectFunctionSelect(0)}>
                      <a //href="/login"
                        className="waves-effect"><i className="zmdi zmdi-layers"></i> <span> 水平测试 </span></a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(1)}>
                      <a //href="javascript:void(0);"
                         className="waves-effect"><i className="zmdi zmdi-library"></i> <span> 进入学习 </span> </a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(2)}>
                      <a //href="javascript:void(0);"
                        className="waves-effect"><i className="zmdi zmdi-book"></i> <span> 开始复习 </span> </a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(3)}>
                      <a //href="javascript:void(0);"
                      className="waves-effect"><i className="zmdi zmdi-chart"></i> <span> 统计图表 </span> </a>
                     </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(4)}>
                      <a //href="javascript:void(0);"
                      className="waves-effect"><i className="zmdi  zmdi-pin-help"></i> <span> 查看帮助 </span> </a>
                    </li>

                    {/* <li>
                      <a href="javascript:void(0);" className="waves-effect"><i className="zmdi zmdi-phone"></i><span onClick={()=>this.props.setSubjectFunctionSelect(6)}> 反馈信息 </span> </a>
                    </li> */}

                  </ul>
                 <div className="clearfix"></div>
                </div>


                <div className="clearfix">
                </div>

              </div>
            </div>
          </div>
          {/*left menu end*/}

          <div className="content-page">
            <div className="content">
              <div className="container">

                <div className="row">

                  {
                    choice==0 ? <EngTest/> :
                    choice==1 ? <EngLearningTypeSelect/> :
                    choice==2 ? <EngReview/> :
                    choice==3 ? <div className="card-box"><EngChart/></div> :
                    <div className="card-box"><EnglishHelp/></div>
                  }

                </div>

              </div>


              <footer className="footer text-right">
                  2017 - 2018 © 都学网所有
              </footer>

            </div>
          </div>

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
      newTo: state.UserManager.newTo,
      // choice: state.SubjectSelect.choice
      choice: state.SubjectFunctionSelect.choice,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
      ...bindActionCreators( UserManagerActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  EnglishLearning
);
