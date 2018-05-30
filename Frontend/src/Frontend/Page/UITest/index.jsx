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
    this.loadReviewList();
  }

  loadReviewList = () => {
    this.props.loadPortContent({
      url: "/api/eng_getReviewList",
      body: {
        username:  this.props.username,
      }
    })
  }

  changeButtonId = (showButton, key) => {
    if(showButton==-1) return key;
    else return -1;
  }

  getHardWord = (articleId) => {
    this.props.loadPortContent2({
      url: "/api/eng_getCoreWord",
      body: {
        articleId:  articleId,
      }
    })
  }

  getHardSentence = (articleId) => {
    this.props.loadPortContent3({
      url: "/api/eng_engToCh",
      body: {
        articleId:  articleId,
      }
    })
  }

  render(){

    const {
      reviewlist,
      hardword,
      hardsentence,
    } = this.props;

    const{
      showButton,
      showReviewList,
      showWordAndSentence,
      showArticle,
    } = this.state;

    console.log(hardsentence);

    return(
      <React.Fragment>
        <div>
          {
            showReviewList == true ?
            <div>

              <div className={style.pageTitle}>复习</div>
              <br/>

              {
                reviewlist == undefined?null:
                reviewlist.map((list, key)=>
                <div key = {key} className={style.chtoengall} >
                  <li
                    // style = {list == choice ? {"color":"blue"} : null}
                      onClick = {() => {this.setState({showButton: this.changeButtonId(showButton,key)})}}
                    >
                    Unit{list.unit} Course{list.course}
                  </li>
                  {
                    showButton != key ? null :
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Button text="查看核心词汇、重点句"
                        onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: true, showArticle: false});
                      this.getHardWord(list.articleid); this.getHardSentence(list.articleid) }} />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Button text="查看阅读文章"
                      onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: false, showArticle: true}) }}  />
                    </div>
                  }
                  <br/>
                </div>
                )
              }

            </div>


            :
            showWordAndSentence == true ?
            <div>
              <div className={style.pageTitle}>核心词汇</div>
                {
                  hardword.length==0?null:
                  hardword.map((word, key)=>
                  <div key = {key} className={style.chtoengall}>
                    单词：
                    { word.word }
                    <br/>
                    翻译：
                    { word.translate }
                  </div>
                  )
                }

              <br/>

              <div className={style.pageTitle}>重点句</div>
                {
                  hardsentence.length==0?null:
                  hardsentence.map((sentence, key)=>
                  <div key = {key} className={style.chtoengall}>
                    句子：
                    { sentence.english }
                    <br/>
                    中文：
                    { sentence.chinese }
                    <br/>
                    解析：
                    { sentence.analysis }
                  </div>
                  )
                }

              <div className={style.ShowEngAndReturn}>
                <Button text="返回列表页面"
                onClick = {() =>  {this.setState({showReviewList: true , showWordAndSentence: false, showArticle: false})}} />
              </div>
              
            </div>


            :
            showArticle == true ?
            <div>
              <div className={style.pageTitle}>英语文章</div>
              <div className={style.ShowEngAndReturn}>
                <Button text="返回列表页面"
                onClick = {() =>  {this.setState({showReviewList: true , showWordAndSentence: false, showArticle: false})}} />
              </div>
            </div>

            :
            null

          }

        </div>

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
      reviewlist: state.PortTest.content,
      hardword: state.PortTest.content2,
      hardsentence: state.PortTest.content3,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  UITest
);
