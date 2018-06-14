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

  getHardWord = (articleid) => {
    this.props.loadPortContent2({
      url: "/api/eng_getCoreWord",
      body: {
        articleId:  articleid,
      }
    })
  }

  getHardSentence = (articleid) => {
    this.props.loadPortContent3({
      url: "/api/eng_engToCh",
      body: {
        articleId:  articleid,
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
                                <br/>
                                <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5"
                                        onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: true, showArticle: false});
                                      this.getHardWord(list.articleid); this.getHardSentence(list.articleid) }}
                                    >查看核心词汇、重点句</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                                     onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: false, showArticle: true}) }}
                                   >查看阅读文章</button>
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>

                )
              }

            </div>

            :
            showWordAndSentence == true ?
            <div>
              <div className="row">
                <div className={style.title}>核心词汇</div>
                <br/>
                {
                  hardword.length==0?null:
                  hardword.map((word, key)=>
                  <div key={key} className="col-md-3" >
                    {/* <div className="card-box kanban-box"> */}
                    <div className={style.cardboxfix}>
                      <div className="kanban-detail">
                        <span className="label label-primary pull-right">Word</span>
                        <p className={style.title18}>{word.word}</p>
                        <ul className="list-inline m-b-0">
                          <li>
                            <p className={style.title16}>{word.translate}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  )
                }
              </div>

              <br/>

              <div className={style.title}>重点句</div>
              <br/>
                {
                  hardsentence.length==0?null:
                  hardsentence.map((sentence, key)=>
                  <div key={key} className="col-md-12" >
                    <div className="card-box kanban-box">
                      <div className="kanban-detail">
                        <span className="label label-primary pull-right">Sentence</span>
                        <p className={style.title18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sentence.english}</p>
                        <ul className="list-inline m-b-0">
                          <li>
                            <br/>
                            <p className={style.title16}><strong>翻译：</strong>{sentence.chinese}</p>
                            <br/>
                            <p className={style.title16}><strong>解析：</strong>{sentence.analysis}</p>
                            <br/>
                          </li>
                        </ul>
                      </div>
                    </div>
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
