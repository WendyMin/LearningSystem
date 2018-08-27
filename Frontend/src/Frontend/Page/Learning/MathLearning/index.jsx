import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import MathHelp from 'UI/Help/MathHelp';
import Info from 'UI/Info';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as UserManagerActions } from 'Connected/UserManager';
import  { view as SubjectSelect } from 'Connected/SubjectSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';

var sha1 = require('sha1');

class MathLearning extends React.PureComponent {
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
                      {choice==0 ? <div>数学  > 入口测试</div> :
                       choice==1 ?
                        <div>
                         <span>数学  > 进入学习 </span>
                       </div> :
                       choice==2 ? <div>数学  > 开始复习</div> :
                       choice==3 ? <div>数学  > 数据统计</div> :
                       choice==4 ? <div>数学  > 科目帮助</div> :
                       <div>数学 > 问题反馈</div>
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
                   <img src="/static/images/users/avatar-1.jpg" alt="user-img" title={this.props.username} className="img-circle img-thumbnail img-responsive"/>
                   <div className="user-status offline"><i className="zmdi zmdi-dot-circle"></i></div>
                  </div>
                  <h5>{this.props.username}</h5>

                  <ul className="list-inline">
                   {/* <li>
                     <a href="#" >
                       <i className="zmdi zmdi-settings"></i>
                     </a>
                   </li> */}

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
                    <li className="text-muted menu-title">数学</li>
                    <li onClick={()=>this.props.setSubjectFunctionSelect(0)}>
                      <a className="waves-effect" style={choice==0?{"color":"#71b6f9"}:null}>
                        <i className="zmdi zmdi-layers"></i>
                        <span> 水平测试 </span>
                      </a>
                    </li>

                    {/* <li onClick={()=>this.props.setSubjectFunctionSelect(1)}>
                      <a className="waves-effect" style={choice==1?{"color":"#71b6f9"}:null}>
                        <i className="zmdi zmdi-library"></i>
                        <span> 进入学习 </span>
                      </a>
                    </li> */}

                    <li className="has_sub">
                        <a href="javascript:void(0);"
                           className={choice==1||choice==10||choice==11||choice==12||choice==13?"waves-effect subdrop":"waves-effect"}
                           onClick={()=>{choice==1||choice==10||choice==11||choice==12||choice==13?this.props.setSubjectFunctionSelect(""):this.props.setSubjectFunctionSelect(1)}}
                        >
                          <i className="zmdi zmdi-library"></i>
                          <span> 进入学习 </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <ul className="list-unstyled" style={choice==1||choice==10||choice==11||choice==12||choice==13?{"display":"block"}:null}>
                          {/* <li><a href="javascript:void(0);">算术</a></li>
                          <li><a href="javascript:void(0);">代数</a></li>
                          <li><a href="javascript:void(0);">几何</a></li>
                          <li><a href="javascript:void(0);">数据分析</a></li> */}
                            <li><a onClick={()=>this.props.setSubjectFunctionSelect(10)}>算术</a></li>
                            <li><a onClick={()=>this.props.setSubjectFunctionSelect(11)}>代数</a></li>
                            <li><a onClick={()=>this.props.setSubjectFunctionSelect(12)}>几何</a></li>
                            <li><a onClick={()=>this.props.setSubjectFunctionSelect(13)}>数据分析</a></li>
                        </ul>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(2)}>
                      <a className="waves-effect" style={choice==2?{"color":"#71b6f9"}:null}>
                        <i className="zmdi zmdi-book"></i>
                        <span> 开始复习 </span>
                      </a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(3)}>
                      <a className="waves-effect" style={choice==3?{"color":"#71b6f9"}:null}>
                        <i className="zmdi zmdi-chart"></i>
                        <span> 数据统计 </span>
                      </a>
                     </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(4)}>
                      <a className="waves-effect" style={choice==4?{"color":"#71b6f9"}:null}>
                        <i className="zmdi  zmdi-pin-help"></i>
                        <span> 查看帮助 </span>
                      </a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(5)}>
                      <a className="waves-effect" style={choice==4?{"color":"#71b6f9"}:null}>
                        <i className="zmdi  zmdi-pin-help"></i>
                        <span> 问题反馈 </span>
                      </a>
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
                    // choice==0 ? <EngTest/> :
                    // choice==1 ? <EngLearningTypeSelect/> :
                    // choice==2 ? <EngReview/> :
                    // choice==3 ? <EngChart/> :
                    // <div className="card-box"><EnglishHelp/></div>

                    choice==0 ? <p>入口测试</p> :
                    choice==1 ? <p>进入学习</p> :
                    choice==10 ? <p>算术</p> :
                    choice==11 ? <p>代数</p> :
                    choice==12 ? <p>几何</p> :
                    choice==13 ? <p>数据分析</p> :
                    choice==2 ? <p>开始复习</p> :
                    choice==3 ? <p>数据统计</p> :
                    choice==4 ? <div className="card-box"><MathHelp/></div> :
                    <p>问题反馈</p>
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
  MathLearning
);
