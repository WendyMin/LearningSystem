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

class EngReview extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      showButton:-1,
      showReviewList: true,
      showWordAndSentence: false,
      showArticle: false,
      courseSelect: -1,
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
      courseSelect,
    } = this.state;

    console.log(hardsentence);

    return(
      <React.Fragment>
        <div>
          {
            showReviewList == true ?
            <div>

              <div className={style.title}>复习</div>
              <br/>

              {
                reviewlist == undefined?null:
                reviewlist.map((list, key)=>

                <div key = {key} className="col-md-4" >
                  <div className="card-box kanban-box">
                    <div className="kanban-detail">
                        <span className="label label-primary pull-right">Finished</span>
                        <div className={style.title18}>
                          Unit{list.unit} Course{list.course}
                        </div>
                        <ul className="list-inline m-b-0">
                            <li>
                                {/* <a href="" data-toggle="tooltip" data-placement="top" title="" data-original-title="Username">
                                    <img src="/static/images/users/avatar-2.jpg" alt="img" className="thumb-sm img-circle"/>
                                </a> */}
                                <br/>
                                <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5"
                                        onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: true, showArticle: false});
                                      this.getHardWord(list.articleid); this.getHardSentence(list.articleid) }}
                                    >查看核心词汇、重点句</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                                     onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: false, showArticle: true}) }}
                                   >查看阅读文章</button>
                                 {/* <a href="javascript:void(0);">
                                   <div className="text-primary"
                                   onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: true, showArticle: false});
                                       this.getHardWord(list.articleid); this.getHardSentence(list.articleid) }}
                                     >查看核心词汇、重点句</div>
                                 </a>
                                 <br/>
                                 <a href="javascript:void(0);">
                                   <div className="text-primary"
                                    onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: false, showArticle: true}) }}
                                    >查看阅读文章</div>
                                 </a> */}
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>


                // <div key = {key} className={style.wordandsentence} >
                //   <li
                //     style = {courseSelect == key ? {"color":"orange"} : {"color":"blue"}}
                //       onClick = {() => {this.setState({showButton: this.changeButtonId(showButton,key),courseSelect:this.changeButtonId(courseSelect,key)})}}
                //     >
                //     <u>Unit{list.unit} Course{list.course}</u>
                //   </li>
                //   {
                //     showButton != key ? null :
                //     <div className={style.buttons}>
                //       &nbsp;&nbsp;&nbsp;&nbsp;
                //       <Button text="查看核心词汇、重点句"
                //         onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: true, showArticle: false});
                //       this.getHardWord(list.articleid); this.getHardSentence(list.articleid) }} />
                //       &nbsp;&nbsp;&nbsp;&nbsp;
                //       {/* <Button text="查看阅读文章"
                //       onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: false, showArticle: true}) }}  /> */}
                //     </div>
                //   }
                //   <br/>
                // </div>
                )
              }

            </div>


            :
            showWordAndSentence == true ?
            <div>
              <div className={style.title}>核心词汇</div>
                {
                  hardword.length==0?null:
                  hardword.map((word, key)=>
                  <div key = {key} className={style.wordandsentence}>
                    单词：
                    { word.word }
                    <br/>
                    翻译：
                    { word.translate }
                    <br/><br/>
                  </div>
                  )
                }

              <br/>

              <div className={style.title}>重点句</div>
                {
                  hardsentence.length==0?null:
                  hardsentence.map((sentence, key)=>
                  <div key = {key} className={style.wordandsentence}>
                    句子：
                    { sentence.english }
                    <br/>
                    中文：
                    { sentence.chinese }
                    <br/>
                    解析：
                    { sentence.analysis }
                    <br/><br/>
                  </div>
                  )
                }

              <br/>
              <div className={style.buttonright}>
                <Button text="返回列表页面"
                onClick = {() =>  {this.setState({showReviewList: true , showWordAndSentence: false, showArticle: false})}} />
              </div>

            </div>


            :
            showArticle == true ?
            <div>
              <div className={style.pageTitle}>英语文章</div>
              <div className={style.wordandsentence}>暂无</div>
              <div className={style.buttonright}>
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
  EngReview
);
