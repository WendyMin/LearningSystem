import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import {
  view as EnglishWordTest,
  actions as EnglishWordTestActions
} from 'Connected/EnglishWordTest';

import UserManagerWindow from "Windows/UserManager";
import FinishedNote from 'UI/FinishedNote';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';
var sha1 = require('sha1');

sha1("message");

import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

class UITest extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      showButton:-1,
      showReviewList: true,
      showWordAndSentence: false,
      showArticle: false,
    };
  }

  componentDidMount(){
    this.getUserLevel();
  }

  getUserLevel = () => {
    this.props.getLevel({
      url:"/api/eng_getLevel",
      body:{
        username: this.props.username,
      }
    })
  }

  // getUserLevel = () => {
  //   this.props.loadPortContent({
  //     url:"/api/eng_getLevel",
  //     body:{
  //       username: this.props.username,
  //     }
  //   })
  // }

  text = () => {
    document.getElementById("popup").innerHTML = "<img src=\"/static/images/gallery/5.jpg\"/>";
    // var imgs = document.getElementById("dedecmsok").getElementsByTagName("img");
    // var lens = imgs.length;
    // console.log(lens);
    var popup = document.getElementById("popup");
    // var target = document.elementFromPoint(window.clientX, window.clientY);
    //         showBig(target.src);
    // popup.getElementsByTagName("img")[0].src = target.src;
    popup.style.display = "block";

    // for(var i = 0; i < lens; i++){
    //     imgs[i].onclick = function (event){
    //         event = event||window.event;
    //         var target = document.elementFromPoint(event.clientX, event.clientY);
    //         showBig(target.src);
    //     }
    // }
    popup.onclick = function (){
        popup.style.display = "none";
    }
    // var imgs = document.getElementById("dedecmsok").getElementsByTagName("img");
    // var lens = imgs.length;
    // // console.log(lens);
    // var popup = document.getElementById("popup");
    //
    // for(var i = 0; i < lens; i++){
    //     imgs[i].onclick = function (event){
    //         event = event||window.event;
    //         var target = document.elementFromPoint(event.clientX, event.clientY);
    //         showBig(target.src);
    //     }
    // }
    // popup.onclick = function (){
    //     popup.style.display = "none";
    // }
    // function showBig(src){
    //     popup.getElementsByTagName("img")[0].src = src;
    //     popup.style.display = "block";
    // }
  }

  render(){

    const {
      content,
      flagAndLevel,
    } = this.props;

    console.log(flagAndLevel);

    return(
      <React.Fragment>
        {/* <p>{"Hello\n\n\nHello\r\n"}</p>
        <img onClick={()=>this.text()} src="/static/images/gallery/3.jpg"/> */}
        {/* <div onClick={()=>this.text()}>点击向页面写入文字</div> */}
        {/* <br/><br/>
        <a href={"https://passport.doxue.com/login?redirect_url=59.110.23.212&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>登录测试</a> */}
         {/* sha1 一种密码加密算法 */}
         {/* <a href={"https://passport.doxue.com/login?redirect_url=localhost:8080&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>登录测试</a> */}
         {/* http://localhost:8080 */}
        {/* <a href={DATA.serverUrl+'service/apartment'+url+'?apartmentId='+urlID}>测试</a> */}
        {/* <div className="row" style={{"height":"80px"}}></div>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="card-box" align="center">
            <img src="/static/plugins/bootstrap-sweetalert/thumbs-up.jpg" style={{"height":"80px","width":"80px","margin": "20px"}} alt="work-thumbnail"/>
              <br/><br/><h2>本次测试结果</h2>
              <p className="lead text-muted">
                题目总数:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{"color":"#ff5b5b"}}> 30 </span>
              </p>
              <p className="lead text-muted">
                正确数量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{"color":"#ff5b5b"}}> 9 </span>
              </p>
              <p><button className="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-lg" onClick = {() => {this.loadQuestions();this.setState({tongjiShow: false,submit:false})}}>再测一次</button></p>
          </div>
        </div> */}
        <FinishedNote info="恭喜您完成了所有模拟测试的题目 ！"/>

           {/* <div className={style.icon}>
          <span className={style.lineshort}></span>
          <span className={style.linelong}></span>
        </div> */}
      </React.Fragment>
    )
  }




}


// export default EngReview
export default applyHOCs([
  asyncProcessControl({
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      articleId: state.EnglishArticle.articleId,
      content: state.PortTest.content,
      flagAndLevel: state.EnglishWordTest.recordFlagAndLevel,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishWordTestActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  UITest
);
