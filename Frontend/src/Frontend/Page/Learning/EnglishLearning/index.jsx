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
//import LearningTypeSelect from 'UI/LearningTypeSelect';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

//import UserManagerWindow from "Windows/UserManager";
import {
  // view as UserManager,
  actions as UserManagerActions
} from 'Connected/UserManager';
import Login from 'Page/Login';
import  {
  view as SubjectSelect
} from 'Connected/SubjectSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

class EnglishLearning extends React.PureComponent {
  constructor( props ){
    super( props );

    // this.type = ["词汇测试" , "进入学习" , "开始复习" , "统计图表", "查看帮助"];
  }

  render(){
    const{
      username,
      logined,
      newTo,
      choice
    } = this.props;

    console.log(choice);

    var user = sessionStorage.getItem("user");
    if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" ){
      <Login/>
    }
    else{
      this.props.setUser(user,true);
      sessionStorage.setItem("user",user);
    }

    return (
      // <React.Fragment>
      // {
      //   logined !== true ?
      //     <div>
      //       <Info info = "您还没有登录，请先登录，再进行学习!"/>
      //       {/* <Login/> */}
      //     </div> :
      //
      //   <div className = {style.wholePage}>
      //
      //     <div className = {style.pagetitle}>
      //       <div className = {style.title}> 学习系统 </div>
      //       <div className = {style.goback} onClick = {() => history.back()}> 返回 </div>
      //     </div>
      //
      //   <div className = {style.subjectText}>
      //       <br/><img className = {style.picture} src = "/static/images/admin.jpg"/>
      //       <br/><div className = {style.username}> {username} </div><br/>
      //       <SubjectSelect text = {this.type} normalStyle = {style.normalText} choosedStyle = {style.chosedText} />
      //     </div>
      //
      //     <div className = {style.mainContent}>
      //       {choice == 0 ?
      //         // newTo[0] == 1 ?
      //         <EngTest/> :
      //         // <Info info = {"您已经完成测试!"} /> :
      //        choice == 1 ? <EngLearningTypeSelect/> :
      //        choice == 2 ? <EngReview/> :
      //        choice == 3 ? <EngChart/>:
      //        <EnglishHelp/>
      //       }
      //     </div>
      //
      //
      //   </div>}
      // </React.Fragment>



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
                      {choice==0 ? <div>英语  > 词汇测试</div> :
                       choice==1 ? <div>英语  > 进入学习</div> :
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
                 <img src="/static/images/users/avatar-1.jpg" alt="user-img" title="Mat Helme" className="img-circle img-thumbnail img-responsive"/>
                 <div className="user-status offline"><i className="zmdi zmdi-dot-circle"></i></div>
                </div>
                <h5><a href="#">{this.props.username}</a> </h5>

                <ul className="list-inline">
                 <li>
                   <a href="#" >
                     <i className="zmdi zmdi-settings"></i>
                   </a>
                 </li>

                 <li>
                   <a href="#" className="text-custom">
                     <i className="zmdi zmdi-power"></i>
                   </a>
                 </li>
                </ul>
                </div>
               {/* userInfo end , include user imag , name and the two icons  */}

                <div id="sidebar-menu">
                  <ul>
                    <li>
                      <a //href="/login"
                        className="waves-effect" onClick={()=>this.props.setSubjectFunctionSelect(0)}><i className="zmdi zmdi-layers"></i> <span> 词汇测试 </span></a>
                    </li>

                    <li>
                      <a //href="javascript:void(0);"
                         className="waves-effect" onClick={()=>this.props.setSubjectFunctionSelect(1)}><i className="zmdi zmdi-library"></i> <span> 进入学习 </span> </a>
                    </li>

                    <li>
                      <a //href="javascript:void(0);"
                        className="waves-effect" onClick={()=>this.props.setSubjectFunctionSelect(2)}><i className="zmdi zmdi-book"></i> <span> 开始复习 </span> </a>
                    </li>

                    <li>
                      <a //href="javascript:void(0);"
                      className="waves-effect" onClick={()=>this.props.setSubjectFunctionSelect(3)}><i className="zmdi zmdi-chart"></i> <span> 统计图表 </span> </a>
                     </li>

                    <li>
                      <a //href="javascript:void(0);"
                      className="waves-effect" onClick={()=>this.props.setSubjectFunctionSelect(4)}><i className="zmdi  zmdi-pin-help"></i> <span> 查看帮助 </span> </a>
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
                    choice==3 ? <EngChart/> :
                    <EnglishHelp/>
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
      choice: state.SubjectFunctionSelect.choice
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
      ...bindActionCreators( UserManagerActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch )
    })
  )],
  EnglishLearning
);
