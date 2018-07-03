import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';

import UserManagerWindow from "Windows/UserManager";

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
    this.loadExtraArticle();
    this.recordWordTest();
  }

  loadExtraArticle = () => {
    this.props.loadPortContent({
      url: "/api/eng_getExtraArticle",
      body: {
        articleId:  1,
      }
    })
  }

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
    } = this.props;

    // console.log(flag);

    return(
      <React.Fragment>
        <p>{"Hello\n\n\nHello\r\n"}</p>
        <img onClick={()=>this.text()} src="/static/images/gallery/3.jpg"/>
        {/* <div onClick={()=>this.text()}>点击向页面写入文字</div> */}
        <br/><br/>
        <a href={"https://passport.doxue.com/login?redirect_url=59.110.23.212&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>登录测试</a>
         {/* sha1 一种密码加密算法 */}
         {/* <a href={"https://passport.doxue.com/login?redirect_url=localhost:8080&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>登录测试</a> */}
         {/* http://localhost:8080 */}
        {/* <a href={DATA.serverUrl+'service/apartment'+url+'?apartmentId='+urlID}>测试</a> */}
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
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  UITest
);
