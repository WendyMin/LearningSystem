import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link , Route } from 'react-router-dom';
import style from 'style';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as UserManagerActions } from 'Connected/UserManager';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

class IndexPage extends React.Component {
  constructor( props ){
    super( props );
  }

  render(){

    const{
      alert ,
      openModal,
      choice,
    } = this.props;

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
                      {
                        choice==0 ? <div>主页  > 课程信息</div> :
                        choice==1 ? <div>主页  > 用户信息</div> :
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
                     <a href="#" className="text-custom">
                       <i className="zmdi zmdi-power"></i>
                     </a>
                   </li>
                  </ul>
                </div>
               {/* userInfo end , include user imag , name and the two icons  */}

                <div id="sidebar-menu">
                  <ul>
                    <li onClick={()=>this.props.setSubjectFunctionSelect(0)}>
                      <a //href="/login"
                        className="waves-effect"><i className="zmdi zmdi-layers"></i> <span> 课程信息 </span></a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(1)}>
                      <a //href="javascript:void(0);"
                         className="waves-effect"><i className="zmdi zmdi-library"></i> <span> 用户信息 </span> </a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(2)}>
                      <a //href="javascript:void(0);"
                        className="waves-effect"><i className="zmdi zmdi-book"></i> <span> 查看帮助 </span> </a>
                    </li>

                    <li onClick={()=>this.props.setSubjectFunctionSelect(3)}>
                      <a //href="javascript:void(0);"
                      className="waves-effect"><i className="zmdi zmdi-chart"></i> <span> 问题反馈 </span> </a>
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
                          <Link to="/learning/english">
                            <div className="card-box project-box">
                                <div className="label label-success">Uncompleted</div>
                                <h4 className="m-t-0 m-b-5"><a href="" className="text-inverse">英语</a></h4>

                                <p className="text-success text-uppercase m-b-20 font-13">English</p>
                                <p className={style.text_muted1}>包含阅读、汉译英，以及中考、高考、四级、六级、考研词汇
                                    {/* <a href="#" className="font-600 text-muted">view more</a> */}
                                </p>

                                <p className="font-600 m-b-5">Progress <span className="text-success pull-right">80%</span></p>
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
                          </Link>
                        </div>
                        {/* <!-- end col--> */}

                        <div className="col-lg-4">
                          <Link to="/learning/logic">
                            <div className="card-box project-box">
                                <div className="label label-primary">Uncompleted</div>
                                <h4 className="m-t-0 m-b-5"><a href="" className="text-inverse"> 逻辑</a></h4>
                                <p className="text-primary text-uppercase m-b-20 font-13">Logic</p>
                                <p className={style.text_muted1}>包含形式逻辑和论证逻辑。其中形式逻辑包括词项逻辑、演绎推理、逻辑应用、命题逻辑、逻辑语言，论证逻辑包括归纳逻辑、假设、削弱、推论、比较、综合、支持、评价、解释、描述
                                     {/* <a href="#" className="font-600 text-muted">view more</a> */}
                                </p>


                                <p className="font-600 m-b-5">Progress <span className="text-primary pull-right">45%</span></p>
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
                          </Link>
                        </div>
                        {/* <!-- end col--> */}

                        <div className="col-lg-4">
                          <Link to="/learning/writing">
                            <div className="card-box project-box">
                                <div className="label label-pink">Uncompleted</div>
                                <h4 className="m-t-0 m-b-5"><a href="" className="text-inverse">写作</a></h4>
                                <p className="text-pink text-uppercase m-b-20 font-13">Writing</p>
                                <p className={style.text_muted1}>写作包括论证有效性分析和论说文两部分，其中含有近十来年真题
                                    {/* <a href="#" className="font-600 text-muted">view more</a> */}
                                </p>


                                <p className="font-600 m-b-5">Progress <span className="text-pink pull-right">68%</span></p>
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
                          </Link>
                        </div>
                        {/* <!-- end col--> */}
                    </div>
                    {/* <!-- end row --> */}


                    <div className="row">

                        <div className="col-lg-4">
                            <div className="card-box project-box">
                                <div className="label label-default">Uncompleted</div>
                                <h4 className="m-t-0 m-b-5"><a href="" className="text-inverse">数学</a></h4>
                                <p className="text-custom text-uppercase m-b-20 font-13">Math</p>
                                <p className={style.text_muted1}>正在测试中，敬请期待
                                     {/* <a href="#" className="font-600 text-muted">view more</a> */}
                                </p>


                                <p className="font-600 m-b-5">Progress <span className="text-custom pull-right">0%</span></p>
                                <div className="progress progress-bar-custom-alt progress-sm m-b-5">
                                    <div className="progress-bar progress-bar-custom progress-animated wow animated animated"
                                         role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
                                         // style="width: 45%;"
                                         >
                                    </div>
                                    {/* <!-- /.progress-bar .progress-bar-danger --> */}
                                </div>
                                {/* <!-- /.progress .no-rounded --> */}

                            </div>
                        </div>
                        {/* <!-- end col--> */}

                    </div>
                  </div>



                  :
                  choice==1 ? <p>用户信息</p> :
                  choice==2 ? <p>查看帮助</p> :
                  <p>问题反馈</p>
                }

                {/* </div> */}

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

// export default makePage( IndexPage );
export default applyHOCs([
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      choice: state.SubjectFunctionSelect.choice
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
      ...bindActionCreators( UserManagerActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch )
    })
  )],
  IndexPage
);
