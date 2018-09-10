import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as UserManagerActions } from 'Connected/UserManager';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import { actions as ButtonExpandActions } from 'Connected/ButtonExpand';
import EnterLearning from 'Page/Learning/WritingLearning/EnterLearning';
import WriteHelp from 'UI/Help/WriteHelp';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';
var sha1 = require('sha1');

class WritingPage extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  componentDidMount(){
    this.props.getUserInfo();
  }

  render(){
    const {
      username,
      logined,
      choice
    } = this.props;

    // var user = sessionStorage.getItem("user");
    // if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" || sessionStorage.getItem("user") == null){
    //   // <Login/>
    // }
    // else{
    //   this.props.setUser(user , true);
    //   sessionStorage.setItem("user",user);
    //   //console.log(sessionStorage.getItem("user"))
    // }

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
                    <h4 className="page-title" id="expand-function">
                      <span onClick={()=>{this.props.setSubjectFunctionSelect(0);this.props.setLearningType("");this.props.setButtonChoice("")}}>写作 </span>
                      {choice==0 ?
                        <span>
                          <span onClick={()=>{this.props.setLearningType("");this.props.setButtonChoice("")}}> > 进入学习 </span>
                          {
                            this.props.learningType === "" ? null :
                            <span onClick={()=>{this.props.setLearningType(this.props.learningType);this.props.setButtonChoice("")}}> >  {this.props.learningType} </span>
                          }
                          {
                            this.props.type === "" ? null :
                            <span> > {this.props.type} </span>
                          }
                        </span> :
                       <span> > 科目帮助</span>}
                      {/* {choice==0 ?
                        <div>
                          写作 > 进入学习
                          <span>写作 </span>
                          <span onClick={()=>{this.props.setLearningType("");this.props.setButtonChoice("")}}><i className="ti-angle-double-right"></i> 进入学习 </span>
                          {
                            this.props.learningType === "" ? null :
                            <span onClick={()=>{this.props.setLearningType(this.props.learningType);this.props.setButtonChoice("")}}><i className="ti-angle-double-right"></i>  {this.props.learningType} </span>
                          }
                          {
                            this.props.type === "" ? null :
                            <span><i className="ti-angle-double-right"></i>  {this.props.type} </span>
                          }
                        </div> :
                       <div>写作 <i className="ti-angle-double-right"></i> 科目帮助</div>} */}
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
                    {/* <li>
                      <a href="#" >
                        <i className="zmdi zmdi-settings"></i>
                      </a>
                    </li> */}

                    <li>
                      <a className="text-custom"
                         onClick={()=>{confirm('您确定要退出登录吗?')?location.href="https://passport.doxue.com/login?redirect_url=39.106.175.128&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date())):''}}
                         href="javascript:void(0);"
                         >
                        <i className="zmdi zmdi-power"></i>
                      </a>
                    </li>
                  </ul>

              </div>
              {/* userInfo end , include user imag , name and the two icons  */}

              <div id="sidebar-menu">
                <ul>
                  <li className="text-muted menu-title">写作</li>

                  <li onClick={()=>{this.props.setSubjectFunctionSelect(0);this.props.setLearningType("");this.props.setButtonChoice("")}}>
                    <a className="waves-effect" style={choice==0?{"color":"#71b6f9"}:null}><i className="zmdi zmdi-library"></i> <span> 进入学习 </span> </a>
                  </li>

                  <li onClick={()=>this.props.setSubjectFunctionSelect(1)}>
                    <a className="waves-effect" style={choice==1?{"color":"#71b6f9"}:null}><i className="zmdi  zmdi-pin-help"></i> <span> 查看帮助 </span> </a>
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
                  {choice===0 || choice === 100 ?
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
      choice: state.SubjectFunctionSelect.choice,  // 代表用户选择的左侧导航栏的按钮，是选择了进入学习还是查看帮助
      learningType: state.LearningTypeSelect.learningType, // 代表用户选择的是论证或论说的哪一项功能，是写作技巧精讲还是巩固还是真题等
      type: state.ButtonExpand.choice // 代表用户具体选择的是哪一个小知识点或者具体哪一年的真题
    }),
    dispatch => ({
      ...bindActionCreators( UserManagerActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( ButtonExpandActions , dispatch )
    })
  )],
  WritingPage
);
