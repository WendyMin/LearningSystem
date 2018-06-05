import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as UserManagerActions } from 'Connected/UserManager';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import EnterLearning from 'Page/Learning/WritingLearning/EnterLearning';
import WriteHelp from 'UI/Help/WriteHelp';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class WritingPage extends React.PureComponent {

  constructor( props ){
    super( props );
    // this.type = ["入口测试" , "进入学习"  , "查看帮助"];
  }

  render(){
    const {
      username,
      logined,
      choice
    } = this.props;

    var user = sessionStorage.getItem("user");
    if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" || sessionStorage.getItem("user") == null){
      // <Login/>
    }
    else{
      this.props.setUser(user , true);
      sessionStorage.setItem("user",user);
      //console.log(sessionStorage.getItem("user"))
    }

    return (
      <React.Fragment>
        <div id="wrapper">
          <div className="topbar">

            <div className="topbar-left">
              <a href="/learning/logic" className="logo"><span>Learning<span>System</span></span><i className="zmdi zmdi-layers"></i></a>
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
                      {choice==0 ? <div>写作 > 进入学习</div> :
                       <div>写作 > 科目帮助</div>}
                    </h4>
                  </li>
                </ul>

                {/* <ul className="nav navbar-nav navbar-right">
                </ul> */}

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
                    <a //href="javascript:void(0);"
                       className="waves-effect"><i className="zmdi zmdi-library"></i> <span onClick={()=>this.props.setSubjectFunctionSelect(0)}> 进入学习 </span> </a>
                  </li>

                  <li>
                    <a //href="javascript:void(0);"
                    className="waves-effect" ><i className="zmdi  zmdi-pin-help"></i> <span onClick={()=>this.props.setSubjectFunctionSelect(1)}> 查看帮助 </span> </a>
                  </li>

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
                  {choice==0 ?
                  <EnterLearning/> :
                  <div className="card-box"><WriteHelp/></div>
                  }
                </div>

             </div>


            <footer className="footer text-right">
                2017 - 2018 © 都学网所有
            </footer>

         </div>
       </div>
     </div>
        {/* <div className = {style.wholePage}>
          {logined !== true ?
            <div>
              <Info info = "您还没有登录，请先登录，再进行学习!"/>
              <Login/>
            </div> :
          {sessionStorage.getItem("user") == "undefined" ?  <Login/> :
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

        </div> */}
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
      choice: state.SubjectFunctionSelect.choice
    }),
    dispatch => ({
      ...bindActionCreators( UserManagerActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch )
    })
  )],
  WritingPage
);
