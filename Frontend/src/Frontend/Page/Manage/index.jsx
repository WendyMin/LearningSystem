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
import DataFormatConversion from 'UI/DataFormatConversion';
// import { actions as DataParseActions , view as DataParse } from 'Connected/DataParse';
// import WordsToString from 'Algorithm/WordsToString';
// import FinishedNote from 'UI/FinishedNote';

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
      choice
    } = this.props;
    console.log(`${this.state.varData}`)
    // console.log(content);
    // console.log(WordsToString(["basic", "luck", "basic", "cancel", "basic", "luck"]))

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
                      choice==0 ? <div>主页  > 课程信息</div> :
                      // choice==1 ? <div>主页  > 用户信息</div> :
                      choice==2 ? <div>主页  > 查看帮助</div> :
                                  <div>主页  > 问题反馈</div>
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
                <h5>{this.props.logined ? <div>{this.props.userid}</div>:null}</h5>

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
                       <span> 课程信息 </span>
                    </a>
                  </li>

                  {/*<li onClick={()=>this.props.setSubjectFunctionSelect(1)}>
                    <a href="javascript:void(0);" className="waves-effect" style={choice==1?{"color":"#71b6f9"}:null}>
                      <i className="zmdi zmdi-library"></i>
                      <span> 用户信息 </span>
                    </a>
                  </li>*/}

                  <li onClick={()=>this.props.setSubjectFunctionSelect(2)}>
                    <a className="waves-effect" style={choice==2?{"color":"#71b6f9"}:null}>
                      <i className="zmdi zmdi-book"></i>
                      <span> 查看帮助 </span>
                    </a>
                  </li>

                  <li onClick={()=>this.props.setSubjectFunctionSelect(3)}>
                    <a className="waves-effect" style={choice==3?{"color":"#71b6f9"}:null}>
                      <i className="zmdi zmdi-chart"></i>
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

              {/* <div className="row"> */}

              {
                choice==0 ?
                <div>
                  <div className="row">
                      <div className="col-lg-4">
                        {/* <a href="https://passport.doxue.com/login?redirect_url=39.96.40.166&stamp={Date.parse(new Date())}&secret_code={sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}"/> */}
                        {/* <Link to="/learning/english">  */}
                        <a href={this.props.logined?"/learning/english":"https://passport.doxue.com/login?redirect_url=39.96.40.166&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>
                          <div className="card-box project-box">
                              {/* <div className="label label-success">Uncompleted</div> */}
                              <h4 className="m-t-0 m-b-5">英语</h4>

                              <p className="text-success text-uppercase m-b-20 font-13">English</p>
                              <p className={style.text_muted1}>包含阅读、汉译英，以及中考、高考、四级、六级、考研词汇。阅读目前共有80篇。
                                  {/* <a href="#" className="font-600 text-muted">view more</a> */}
                              </p>

                              <p className="font-600 m-b-5">Progress <span className="text-success pull-right">
                                {
                                  progress.length==0 ? null : <div>{parseFloat(progress.data[0]*100).toFixed(0)}%</div>
                                }
                              </span></p>
                              <div className="progress progress-bar-success-alt progress-sm m-b-5">
                                  <div className="progress-bar progress-bar-success progress-animated wow animated animated"
                                       role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                       // style="width: 80%; visibility: visible; animation-name: animationProgress;"
                                       >
                                  </div>
                                  {/* <!-- /.progress-bar .progress-bar-danger --> */}
                              </div>
                              {/* <!-- /.progress .no-rounded --> */}

                          </div>
                        </a>
                      </div>
                      {/* <!-- end col--> */}

                      <div className="col-lg-4">
                        <a href={this.props.logined?"/learning/logic":"https://passport.doxue.com/login?redirect_url=39.96.40.166&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>
                        {/* <Link to="/learning/logic"> */}
                          <div className="card-box project-box">
                              {/* <div className="label label-primary">Uncompleted</div> */}
                              <h4 className="m-t-0 m-b-5">逻辑</h4>
                              <p className="text-primary text-uppercase m-b-20 font-13">Logic</p>
                              <p className={style.text_muted1}>包含形式逻辑和论证逻辑。其中形式逻辑包括词项逻辑、演绎推理、逻辑应用、命题逻辑、逻辑语言，论证逻辑包括归纳逻辑、假设、削弱、推论、比较、综合、支持、评价、解释、描述，共15章，1600道题。
                                   {/* <a href="#" className="font-600 text-muted">view more</a> */}
                              </p>


                              <p className="font-600 m-b-5">Progress <span className="text-primary pull-right">
                                {
                                  progress.length==0 ? null : <div>{parseFloat(progress.data[1]*100).toFixed(0)}%</div>
                                }
                              </span></p>
                              <div className="progress progress-bar-primary-alt progress-sm m-b-5">
                                  <div className="progress-bar progress-bar-primary progress-animated wow animated animated"
                                       role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
                                       // style="width: 45%;"
                                       >
                                  </div>
                                  {/* <!-- /.progress-bar .progress-bar-danger --> */}
                              </div>
                              {/* <!-- /.progress .no-rounded --> */}

                          </div>
                        </a>
                      </div>
                      {/* <!-- end col--> */}

                      <div className="col-lg-4">
                        {/* <Link to="/learning/writing"> */}
                        <a href={this.props.logined?"/learning/writing":"https://passport.doxue.com/login?redirect_url=39.96.40.166&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>
                          <div className="card-box project-box">
                              {/* <div className="label label-pink">Uncompleted</div> */}
                              <h4 className="m-t-0 m-b-5">写作</h4>
                              <p className="text-pink text-uppercase m-b-20 font-13">Writing</p>
                              <p className={style.text_muted1}>写作包括论证有效性分析和论说文两部分，含有近十来年真题，其中论证巩固22篇，论证真题8篇，论说巩固19篇，论说真题8篇。
                                  {/* <a href="#" className="font-600 text-muted">view more</a> */}
                              </p>


                              <p className="font-600 m-b-5">Progress <span className="text-pink pull-right">
                                {
                                  progress.length==0 ? null : <div>{parseFloat(progress.data[2]*100).toFixed(0)}%</div>
                                }
                              </span></p>
                              <div className="progress progress-bar-pink-alt progress-sm m-b-5">
                                  <div className="progress-bar progress-bar-pink progress-animated wow animated animated"
                                       role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"
                                       // style="width: 68%;"
                                       >
                                  </div>
                                  {/* <!-- /.progress-bar .progress-bar-danger --> */}
                              </div>
                              {/* <!-- /.progress .no-rounded --> */}

                          </div>
                        </a>
                        {/* </Link> */}
                      </div>
                      {/* <!-- end col--> */}



                  </div>
                  {/* <!-- end row --> */}


                  <div className="row">

                      <div className="col-lg-4">
                        {/* <Link to="/learning/math"> */}
                         <a href={this.props.logined?"/learning/math":"https://passport.doxue.com/login?redirect_url=39.96.40.166&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>
                          <div className="card-box project-box">
                              {/* <div className="label label-success">Uncompleted</div> */}
                              <h4 className="m-t-0 m-b-5">数学</h4>

                              <p className="text-custom text-uppercase m-b-20 font-13">Math</p>
                               <p className={style.text_muted1}>包含算术、代数、几何、数据分析。其中每一部分都划分为了若干章节，每一章节又细分成了各个知识点。
                                  {/*<a href="#" className="font-600 text-muted">view more</a>*/}
                              </p>
                              {/*<p className={style.text_muted1}>正在测试中，敬请期待...
                                   <a href="#" className="font-600 text-muted">view more</a>
                              </p>*/}

                              <p className="font-600 m-b-5">Progress <span className="text-custom pull-right">
                                 {
                                  progress.length==0 ? null : <div>{parseFloat(progress.data[3]*100).toFixed(0)}%</div>
                                }
                              </span></p>
                              <div className="progress progress-bar-custom-alt progress-sm m-b-5">
                                  <div className="progress-bar progress-bar-custom progress-animated wow animated animated"
                                       role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
                                       >
                                  </div>

                              </div>


                          </div>
                        {/* </Link> */}
                         </a>
                      </div>
                      {/* <!-- end col--> */}

                  </div>
                </div>



                :
                // choice==1 ? <p>用户信息</p> :
                choice==2 ? <div className="card-box"><SystemHelp /></div> :
                choice==3 ? <Feedback /> :
                null
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
      // data: state.DataParse.data
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
      // ...bindActionCreators( DataParseActions , dispatch)
    })
  )],
  Manage
);
