import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as UserManagerActions } from 'Connected/UserManager';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import LogicTest from 'Page/Learning/LogicLearning/LogicTest';
import EnterLearning from 'Page/Learning/LogicLearning/EnterLearning';
import LogicReview from 'Page/Learning/LogicLearning/LogicReview';
import SimulationTest from 'Page/Learning/LogicLearning/SimulationTest';
import LogicStatistics from 'Page/Learning/LogicLearning/LogicStatistics';
import LogicHelp from 'UI/Help/LogicHelp';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class LogicLearning extends React.PureComponent {
  // constructor( props ){
  //   super( props );
  //   this.type = ["入口测试" , "进入学习" , "开始复习" , "模拟测试" , "数据统计" , "查看帮助"];
  // }

  render(){
    const{
      username,
      logined,
      choice,
    } = this.props;

    var user = sessionStorage.getItem("user");
    if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" ){
      <Login/>
    }
    else{
      this.props.setUser(user,true);
      sessionStorage.setItem("user",user);
    }
    return (
      <div id="wrapper" //className="enlarged"
        >
        <div className="topbar">

          <div className="topbar-left">
            <a href="/learning/logic" className="logo"><span>Learning<span>System</span></span><i className="zmdi zmdi-layers"></i></a>
            <div style={{"color":"orange"}}>Logic</div>
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
                    {choice==0 ? <div>入口测试</div> :
                     choice==1 ? <div>进入学习</div> :
                     choice==2 ? <div>开始复习</div> :
                     choice==3 ? <div>模拟测试</div> :
                     choice==4 ? <div>数据统计</div> :
                     <div>科目帮助</div>}
                  </h4>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <div className="notification-box">
                    <ul className="list-inline m-b-0">
                      <li>
                        <a href="javascript:void(0);" className="right-bar-toggle">
                          <i className="zmdi zmdi-notifications-none"></i>
                        </a>
                        <div className="noti-dot">
                          <span className="dot"></span>
                          <span className="pulse"></span>
                        </div>
                      </li>
                    </ul>
                  </div>

                </li>
                <li className="hidden-xs">
                  <form role="search" className="app-search">
                    <input type="text" placeholder="Search..." className="form-control"/>
                      <a href=""><i className="fa fa-search"></i></a>
                  </form>
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
                    className="waves-effect"><i className="zmdi zmdi-layers"></i> <span onClick={()=>this.props.setSubjectFunctionSelect(0)}> 入口测试 </span></a>
                </li>

                <li>
                  <a //href="javascript:void(0);"
                     className="waves-effect"><i className="zmdi zmdi-library"></i> <span onClick={()=>this.props.setSubjectFunctionSelect(1)}> 进入学习 </span> </a>
                </li>

                <li>
                  <a //href="javascript:void(0);"
                    className="waves-effect"><i className="zmdi zmdi-book"></i> <span onClick={()=>this.props.setSubjectFunctionSelect(2)}> 开始复习 </span> </a>
                </li>

                <li>
                  <a //href="javascript:void(0);"
                  className="waves-effect"><i className="zmdi zmdi-graduation-cap"></i> <span onClick={()=>this.props.setSubjectFunctionSelect(3)}> 模拟测试 </span> </a>
                </li>

                <li>
                  <a //href="javascript:void(0);"
                  className="waves-effect"><i className="zmdi zmdi-chart"></i> <span onClick={()=>this.props.setSubjectFunctionSelect(4)}> 数据统计 </span> </a>
                 </li>

                <li>
                  <a //href="javascript:void(0);"
                  className="waves-effect"><i className="zmdi  zmdi-pin-help"></i> <span onClick={()=>this.props.setSubjectFunctionSelect(5)}> 查看帮助 </span> </a>
                </li>

                {/* <li>
                  <a href="javascript:void(0);" className="waves-effect"><i className="zmdi zmdi-phone"></i><span onClick={()=>this.props.setSubjectFunctionSelect(6)}> 反馈信息 </span> </a>
                </li> */}

              </ul>
             <div className="clearfix"></div>
            </div>


            <div className="clearfix"></div>

         </div>
       </div>

        </div>
        {/*left menu end*/}

        <div className="content-page">
          <div className="content">
           <div className="container">

              <div className="row">

                       {/* <div className="col-lg-3 col-md-6"> */}

                       {/* <div className="card-box"> */}
         {choice==0 ? <div className="card-box"><LogicTest/></div> :
                         choice==1 ? <div className="card-box"><EnterLearning/></div> :
                         choice==2 ? <div className="card-box"><LogicReview/></div> :
                         choice==3 ? <div className="card-box"><SimulationTest/></div> :
                         choice==4 ? <div className="card-box"><LogicStatistics/></div> :
                          <div className="card-box"><LogicHelp/></div>
                        }
                      {/* </div> */}
                    </div>
                  {/* </div> */}
                </div>


          <footer className="footer text-right">
              2017 - 2018 © 都学网所有
          </footer>

       </div>
     </div>
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
      choice: state.SubjectFunctionSelect.choice
    }),
    dispatch => ({
      ...bindActionCreators( UserManagerActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch )
      // ...bindActionCreators( SubjectSelectActions , dispatch ),
      // ...bindActionCreators( LearningTypeSelectActions , dispatch )
    })
  )],
  LogicLearning
);
