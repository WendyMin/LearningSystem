import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link , Route } from 'react-router-dom';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class IndexPage extends React.Component {
  constructor( props ){
    super( props );
  }

  render(){
    const { alert , openModal } = this.props;
    return (
      <React.Fragment>

        {/* <Link to="/learning/english">英语学习 </Link>
        <br/>
        <Link to="/learning/logic">逻辑学习</Link>
        <br/>
        <Link to="/learning/writing">写作学习</Link>
        <br/>
        <Link to="/ui">ui测试</Link>
        <br/>
        <Link to="/learningsystem">主页面</Link>
        <br/>
        <Link to="/login">登录页面</Link>
        <br/>
        <Link to="/nowhere">nowhere</Link> */}


        {/* <!-- Begin page --> */}
            <div id="wrapper">

                {/* <!-- Top Bar Start --> */}
                <div className="topbar">

                    {/* <!-- LOGO --> */}
                    <div className="topbar-left">
                        <a href="index.html" className="logo"><span>Learning<span>System</span></span><i className="zmdi zmdi-layers"></i></a>
                    </div>

                    {/* <!-- Button mobile view to collapse sidebar menu --> */}
                    <div className="navbar navbar-default" role="navigation">
                        <div className="container">

                            {/* <!-- Page title --> */}
                            <ul className="nav navbar-nav navbar-left">
                                <li>
                                    <button className="button-menu-mobile open-left">
                                        <i className="zmdi zmdi-menu"></i>
                                    </button>
                                </li>
                                <li>
                                    <h4 className="page-title">课程信息</h4>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- end container --> */}
                    </div>
                    {/* <!-- end navbar --> */}
                </div>
                {/* <!-- Top Bar End --> */}


                {/* <!-- ========== Left Sidebar Start ========== --> */}
                <div className="left side-menu">
                    <div className="sidebar-inner slimscrollleft">

                        {/* <!-- User --> */}
                        <div className="user-box">
                            <div className="user-img">
                                <img src="/static/images/users/avatar-1.jpg" alt="user-img" title="Mat Helme" className="img-circle img-thumbnail img-responsive"/>
                                <div className="user-status offline"><i className="zmdi zmdi-dot-circle"></i></div>
                            </div>
                            <h5><a href="#">用户名</a> </h5>
                        </div>
                        {/* <!-- End User --> */}

                        {/* <!--- Sidemenu --> */}
                        <div id="sidebar-menu">
                            <ul>
                                <li>
                                    <a href="javascript:void(0);" className="waves-effect"><i className="zmdi zmdi-local-library"></i> <span> 进入学习 </span></a>
                                </li>

                                <li>
                                    <a href="javascript:void(0);" className="waves-effect"><i className="zmdi zmdi-account"></i> <span> 用户信息 </span> </a>
                                </li>

                                <li className="has_sub">
                                    <a href="index-help.html" className="waves-effect"><i className="zmdi  zmdi-pin-help"></i> <span> 查看帮助 </span> </a>
                                </li>

                                <li className="has_sub">
                                    <a href="javascript:void(0);" className="waves-effect"><i className="zmdi zmdi-phone"></i><span> 反馈信息 </span> </a>
                                </li>


                            </ul>
                            <div className="clearfix"></div>
                        </div>
                        {/* <!-- Sidebar --> */}
                        <div className="clearfix"></div>

                    </div>

                </div>
                {/* <!-- Left Sidebar End --> */}



                {/* <!-- ============================================================== -->
                <!-- Start right Content here -->
                <!-- ============================================================== --> */}
                <div className="content-page">
                    {/* <!-- Start content --> */}
                    <div className="content">
                        <div className="container">




                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-box project-box">
                                        <div className="label label-success">Uncompleted</div>
                                  <h4 className="m-t-0 m-b-5"><Link to="/learning/english"><a href="" className="text-inverse">英语</a></Link></h4>

                                        <p className="text-success text-uppercase m-b-20 font-13">English</p>
                                        <p className="text-muted font-13">包含阅读、汉译英，以及中考、高考、四级、六级、考研词汇
                                            {/* <a href="#" className="font-600 text-muted">view more</a> */}
                                        </p>
                                        <br/><br/><br/><br/><br/>

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
                                </div>
                                {/* <!-- end col--> */}

                                <div className="col-lg-4">
                                    <div className="card-box project-box">
                                        <div className="label label-primary">Uncompleted</div>
                                  <h4 className="m-t-0 m-b-5"><Link to="/learning/logic"><a href="" className="text-inverse"> 逻辑</a></Link></h4>
                                        <p className="text-primary text-uppercase m-b-20 font-13">Logic</p>
                                        <p className="text-muted font-13">包含形式逻辑和论证逻辑。其中形式逻辑包括词项逻辑、演绎推理、逻辑应用、命题逻辑、逻辑语言，论证逻辑包括归纳逻辑、假设、削弱、推论、比较、综合、支持、评价、解释、描述
                                             {/* <a href="#" className="font-600 text-muted">view more</a> */}
                                        </p>
                                        <br/><br/>

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
                                </div>
                                {/* <!-- end col--> */}

                                <div className="col-lg-4">
                                    <div className="card-box project-box">
                                        <div className="label label-pink">Uncompleted</div>
                                  <h4 className="m-t-0 m-b-5"><Link to="/learning/writing"><a href="" className="text-inverse">写作</a></Link></h4>
                                        <p className="text-pink text-uppercase m-b-20 font-13">Writing</p>
                                        <p className="text-muted font-13">写作包括论证有效性分析和论说文两部分，其中含有近十来年真题
                                            {/* <a href="#" className="font-600 text-muted">view more</a> */}
                                        </p>
                                        <br/><br/><br/><br/>

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
                                        <p className="text-muted font-13">正在测试中，敬请期待
                                             {/* <a href="#" className="font-600 text-muted">view more</a> */}
                                        </p>
                                        <br/><br/><br/><br/><br/>

                                        <p className="font-600 m-b-5">Progress <span className="text-custom pull-right">45%</span></p>
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
                            {/* <!-- end row --> */}


                        </div>
                        {/* <!-- container --> */}

                    </div>
                    {/* <!-- content --> */}

                    <footer className="footer">
                        2017 - 2018 © 都学网所有
                    </footer>

                </div>



                {/* <!-- ============================================================== -->
                <!-- End Right content here -->
                <!-- ============================================================== --> */}


            </div>
            {/* <!-- END wrapper --> */}

      </React.Fragment>
    );
  }

};

export default makePage( IndexPage );
