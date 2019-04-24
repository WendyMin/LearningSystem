import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import UserManagerWindow from "Windows/UserManager";
import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import DataFormatConversion from 'UI/DataFormatConversion';
// var sha1 = require('sha1');

class Manage extends React.PureComponent {
  constructor( props ){
    super( props );
    this.ifChanged = false;
    this.state = {
      id: 0,
      num : 0,
      varData : "$$2(x-4)+3(x+x-4)=100$$"
    };
  }

  componentWillMount(){
    this.function();
  }

  function = () => {
    // this.props.loadPortContent({
    //   url:"/api/test",
    // body:{
    //   username: "testdzh",
    //   rightwords: "zhongkao*eat*zhongkao*meat*gaokao*fantastic",
    //   wrongwords: "zhongkao*vegetable*zhongkao*sacrifice"
    // }

      var testEditor;
      testEditor = editormd.markdownToHTML("doc-content0", {//注意：这里是上面DIV的id
          htmlDecode : "style,script,iframe",
          emoji : true,
          taskList : true,
          tex : true, // 默认不解析
          flowChart : true, // 默认不解析
          sequenceDiagram : true, // 默认不解析
          codeFold : true
      });

  }
  render(){
    const {
      content,
      varData,
      choice,
      progress
    }
      = this.props;
    console.log(`${this.state.varData}`)

    return(
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
                    {
                      choice==0 ? <div>管理  > 用户数据 </div> :
                      <div>管理  > 反馈信息</div>
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
                {/*<h5>{this.props.logined ? <div>{this.props.userid}</div>:null}</h5>*/}
                <h5>Manage</h5>

                <ul className="list-inline">

                 <li>
                   <a className="text-custom"
                      onClick={()=>{confirm('您确定要退出登录吗?')?location.href="https://passport.doxue.com/login?redirect_url=39.96.40.166&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date())):''}}
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
                  <li onClick={()=>this.props.setSubjectFunctionSelect(0)}>
                    <a className="waves-effect" style={choice==0?{"color":"#71b6f9"}:null}>
                      <i className="zmdi zmdi-layers"></i>
                       <span> 用户数据 </span>
                    </a>
                  </li>

                  <li onClick={()=>this.props.setSubjectFunctionSelect(1)}>
                    <a href="javascript:void(0);" className="waves-effect" style={choice==1?{"color":"#71b6f9"}:null}>
                      <i className="zmdi zmdi-library"></i>
                      <span> 反馈信息 </span>
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

              {/* <div className="row"> */}

              {
                choice==0 ? <div>用户数据</div>
                :
                <div>反馈信息</div>
              }

            </div>


            <footer className="footer text-right">
                2017 - 2018 © 都学网所有
            </footer>

          </div>
        </div>

      </div>



      </React.Fragment>
    )
  }}


// export default EngReview
export default applyHOCs([
  asyncProcessControl({
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      content: state.PortTest.content,
      choice: state.SubjectFunctionSelect.choice,
      progress: state.PortTest.content,
      // data: state.DataParse.data
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      // ...bindActionCreators( DataParseActions , dispatch)
    })
  )],
  Manage
);
