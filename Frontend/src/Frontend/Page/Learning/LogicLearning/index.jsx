import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as UserManagerActions } from 'Connected/UserManager';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import { actions as ButtonExpandActions } from 'Connected/ButtonExpand';
import {
  view as Feedback,
  actions as FeedbackActions
} from 'Connected/Feedback';

import LogicTest from 'Page/Learning/LogicLearning/LogicTest';
import EnterLearning from 'Page/Learning/LogicLearning/EnterLearning';
import LogicReview from 'Page/Learning/LogicLearning/LogicReview';
import SimulationTest from 'Page/Learning/LogicLearning/SimulationTest';
import LogicStatistics from 'Page/Learning/LogicLearning/LogicStatistics';
import LogicHelp from 'UI/Help/LogicHelp';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';
var sha1 = require('sha1');

class LogicLearning extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  componentDidMount(){
    this.props.getUserInfo();
  }

  render(){
    const{
      username,
      logined,
      choice,
    } = this.props;
    console.log(username,logined)

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
                      <span onClick={()=>{this.props.setSubjectFunctionSelect(0);this.props.setLearningType("");this.props.setButtonChoice("")}}>逻辑</span>
                      {choice==0 ? <span> > 入口测试</span> :
                       choice==1 ?
                       <span>
                         <span onClick={()=>{this.props.setLearningType("");this.props.setButtonChoice("")}}> > 进入学习 </span>
                         {
                           this.props.learningType === "" ? null :
                           <span onClick={()=>{this.props.setLearningType(this.props.learningType);this.props.setButtonChoice("")}}> >  {this.props.learningType} </span>
                         }
                       </span> :
                       choice==2 ?
                       <span>
                         <span onClick={()=>{this.props.setLearningType("");this.props.setButtonChoice("")}}> > 开始复习 </span>
                         {
                           this.props.learningType === "" ? null :
                           <span onClick={()=>{this.props.setLearningType(this.props.learningType);this.props.setButtonChoice("")}}> >  {this.props.learningType} </span>
                         }
                      </span> :
                       choice==3 ? <span> > 模拟测试</span> :
                       choice==4 ? <span> > 数据统计</span> :
                       choice==5 ? <span> > 科目帮助</span> :
                       choice==6 ? <span> > 问题反馈</span> :
                       null
                     }
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
                 <img src="/static/images/users/avatar-1.jpg" alt="user-img" title={this.props.userid} className="img-circle img-thumbnail img-responsive"/>
                 <div className="user-status offline"><i className="zmdi zmdi-dot-circle"></i></div>
                </div>
                <h5>{this.props.userid}</h5>

                <ul className="list-inline">

                 <li>
                   <a className="text-custom"
                      onClick={()=>{confirm('您确定要退出登录吗?')?location.href="https://passport.doxue.com/login?redirect_url=39.106.175.128&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date())):''}}
                      href="javascript:void(0);"
                      >
                     {/*<i className="zmdi zmdi-power"></i>*/}
                     退出
                   </a>
                 </li>
                </ul>
                </div>
               {/* userInfo end , include user imag , name and the two icons  */}

                <div id="sidebar-menu">
                  <ul>
                    <li className="text-muted menu-title">逻辑</li>
                    <li onClick={()=>this.props.setSubjectFunctionSelect(0)}>
                      <a className="waves-effect" style={choice==0?{"color":"#71b6f9"}:null}><i className="zmdi zmdi-layers"></i> <span> 入口测试 </span></a>
                    </li>

                    <li onClick={()=>{this.props.setSubjectFunctionSelect(1);this.props.setLearningType("");this.props.setButtonChoice("")}}>
                      <a className="waves-effect" style={choice==1?{"color":"#71b6f9"}:null}><i className="zmdi zmdi-library"></i> <span> 进入学习 </span> </a>
                    </li>

                    <li onClick={()=>{this.props.setSubjectFunctionSelect(2);this.props.setLearningType("");this.props.setButtonChoice("")}}>
                      <a className="waves-effect" style={choice==2?{"color":"#71b6f9"}:null}><i className="zmdi zmdi-book"></i> <span> 开始复习 </span> </a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(3)}>
                      <a className="waves-effect" style={choice==3?{"color":"#71b6f9"}:null}><i className="zmdi zmdi-graduation-cap"></i> <span> 模拟测试 </span> </a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(4)}>
                      <a className="waves-effect" style={choice==4?{"color":"#71b6f9"}:null}><i className="zmdi zmdi-chart"></i> <span> 数据统计 </span> </a>
                     </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(5)}>
                      <a className="waves-effect" style={choice==5?{"color":"#71b6f9"}:null}><i className="zmdi  zmdi-pin-help"></i> <span> 查看帮助 </span> </a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(6)}>
                      <a className="waves-effect" style={choice==6?{"color":"#71b6f9"}:null}>
                        <i className="zmdi  zmdi-pin-help"></i>
                        <span> 问题反馈 </span>
                      </a>
                    </li>

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
                  {username !== "" && logined ?
                   <div>
                    {choice==0 ? <LogicTest/> :
                     choice==1 ? <EnterLearning/> :
                     choice==2 ? <LogicReview/> :
                     choice==3 ? <SimulationTest/> :
                     choice==4 ? <LogicStatistics/> :
                     choice==5 ? <div className="card-box"><LogicHelp/></div> :
                     choice==6 ? <Feedback /> :
                     null
                    }
                   </div>
                   :
                   null}

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
      username: state.UserManager.name,
      userid: state.UserManager.id,
      logined: state.UserManager.logined,
      choice: state.SubjectFunctionSelect.choice,  // 代表用户选择的左侧导航栏的按钮，是选择了入口测试、进入学习还是等
      learningType: state.LearningTypeSelect.learningType, // 三级按钮，代表具体某一章的类型，如是知识点精要还是重点，强化等
      type: state.ButtonExpand.choice, // 代表用户具体选择的是哪一个小知识点或者具体哪一年的真题
    }),
    dispatch => ({
      ...bindActionCreators( UserManagerActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( ButtonExpandActions , dispatch ),
    })
  )],
  LogicLearning
);
