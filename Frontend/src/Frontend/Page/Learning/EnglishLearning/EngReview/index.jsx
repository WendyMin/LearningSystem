import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import ButtonControlPane from 'UI/ButtonControlPane';
import mergeArraysIntoOne from 'direct-core/Algorithm/mergeArraysIntoOne';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';
import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';
import {
  view as EnglishReviewPort,
  actions as EnglishReviewPortActions
} from 'Connected/EnglishReviewPort';
import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import EngLearningTypeSelect from 'Page/Learning/EnglishLearning/EngLearningTypeSelect';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';

class EngReview extends React.PureComponent {
  constructor( props ){
    super( props );
    this.actions =
    [
      [this.submitQuestions,
        () =>  this.setState({showReviewList: true , showWordAndSentence: false, showArticle: false})
      ],
      [ this.props.translateAll,
        () =>  this.setState({showReviewList: true , showWordAndSentence: false, showArticle: false})
      ]
    ];
    this.texts =
    [ ["提交答案", "返回列表页面"] ,  [ "翻译全文" , "返回列表页面" ] ];
    this.describes =
    ["阅读文章，并在右侧点击认为相对正确的题目答案",
    "请仔细阅读正确答案和解析，如需查看全文翻译，请点击翻译全文按钮"
    ];
    this.state = {
      showButton:-1,
      showReviewList: true,
      showWordAndSentence: false,
      showArticle: false,
      courseSelect: -1,
      processStep: 0,
    };
    const {
      setLearningType,
      learningType,
    } = this.props;
  }

  componentDidMount(){
    this.loadReviewList();
  }

  loadReviewList = () => {
    this.props.loadReviewList({
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
    this.props.loadHardWord({
      url: "/api/eng_getCoreWord",
      body: {
        articleId:  articleid,
      }
    })
  }

  getHardSentence = (articleid) => {
    this.props.loadHardSentence({
      url: "/api/eng_engToCh",
      body: {
        articleId:  articleid,
      }
    })
  }

  // getArticle = (articleid) => {
  //   this.props.loadPortContent4({
  //     url: "/api/eng_getSentence",
  //     body: {
  //       username: this.props.username,
  //       lock: 1,
  //       articleId:  articleid,
  //     }
  //   })
  // }

  nextStep = () => {
    this.setState({
      processStep: this.state.processStep + 1
    });
  }

  getArticle = (articleid) => {
    this.props.loadContent({
      body: {
        username: this.props.username,
        articleId: articleid,
        lock: 1
      }
    })
  }

  loadQuestions = () => {
    // console.log(typeof(this.props.articleId))
    this.props.loadQuestions({
      url: "/api/eng_getQuestion",
      body: {
        username: this.props.username,
        lock: 0,
        article_id: this.props.articleId,
        //articleId: articleId+1
      },
      parser: questions => questions.map( q => ({
        questionId: q.questionid,
        options: q.choice,
        rightKey: q.key,
        question: q.question,
        analysis: q.analysis
      }))
    });
  }

  submitQuestions = () => {
    const {
      username,
      questions,
      articleId,
      submitQuestionState,
      submiting,
      lockAndShow
    } = this.props;

    var submitTime = submitQuestionState.resolved;

    if( submiting ){
      return;
    }
    var wrongList = "";
    for( var i = 0 ; i < questions.length ; i++ ){
      if( questions[i].choosed !== questions[i].rightKey ){
        wrongList += `${questions[i].questionId} `;
      }
    }
    this.props.submitQuestions({
      url: "/api/eng_recordWrongQuestion",
      body: {
        username: username,
        article_id: articleId.toString(),
        wrong_question_ids: wrongList,
        time: submitTime + 1
      }
    });
    // if( ( ( submitTime + 1 ) & 1 ) === 0 )
    // {
      for( var i = 0; i < questions.length ; i++ ){
        lockAndShow( questions[i].questionId );
      }
    // }
  }

  render(){



    const {
      reviewlist,
      hardword,
      hardsentence,
      setLearningType,
      learningType,
      // article,
    } = this.props;

    const{
      showButton,
      showReviewList,
      showWordAndSentence,
      showArticle,
      courseSelect,
      processStep
    } = this.state;

    var text = "";
    var mainAction;
    var additionalActions = [];
    var additionalTexts = [];

    if( Array.isArray( this.texts[processStep] ) ){
      [ mainAction , ...additionalActions ] = this.actions[processStep];
      [ text , ...additionalTexts ] = this.texts[processStep];
      mainAction = {
        action: mainAction,
        text: text
      };
      additionalActions = mergeArraysIntoOne({
        action: additionalActions,
        text: additionalTexts
      });
    }
    else {
      mainAction = {
        action: this.actions[processStep],
        text: this.texts[processStep]
      };
    }

    console.log(reviewlist);

    return(
      <React.Fragment>
        <div>
          {
            showReviewList == true ?
            <div>

              {/* <div className={style.title}>复习</div> */}
              {/* <br/> */}

              {
                learningType == "英语进入学习" ?
                <EngLearningTypeSelect/>
                :
                <div>
                  {
                  // reviewlist == undefined ? null :
                  reviewlist.length == 0 ?
                  <div class="panel panel-custom panel-border">
                    <div class="panel-heading">
                        <h3 class="panel-title">Sorry</h3>
                    </div>
                    <div class="panel-body">
                      <div>您尚未学习，没有需要复习的内容，请点击左侧的进入学习，开始英语学习吧</div>
                      <br/>
                      {/* <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                         onClick = {() => {setLearningType("英语进入学习");}}>
                         进入学习</button> */}
                    </div>
                  </div>

                  :
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
                                       onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: false, showArticle: true, processStep: 0});
                                       this.getArticle(list.articleid); this.loadQuestions();this.props.hideAllTranslate();
                                     }}
                                     >查看阅读文章</button>
                              </li>
                          </ul>
                      </div>
                    </div>
                  </div>

                  )
                }
                </div>


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
                        <p className={style.title18}>
                          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                          {sentence.english}</p>
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


              <div className="row">
                <div className={style.buttonright}>
                <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                    onClick = {() =>  {this.setState({showReviewList: true , showWordAndSentence: false, showArticle: false})}} >
                    返回列表页面</button>
                </div>
              </div>


            </div>


            :
            showArticle == true ?
            <div>
              <div className={style.title}>英语文章</div>
              <br/>

              <div className="col-md-12" >
                <div className="card-box kanban-box">
                  <div className={style.HUD}>
                   {this.describes[processStep]}
                  </div>
                </div>
              </div>

              <div className="col-md-12" >

                <div className="col-md-8" >
                  <div className="card-box kanban-box">
                    <EnglishArticle
                      displayByWords={true}
                    />
                  </div>
                </div>

                <div className="col-md-4" >
                  <div className="card-box kanban-box">
                    {
                      /*
                      processStep:
                      0 -> submit
                      1 -> translateAll ( optional )
                      */
                        (() => {
                          switch( processStep ){
                            case 0:
                            case 1:
                              return (
                                <SingleOptionQuestions
                                  submiter={this.submitQuestions}
                                  loader={this.loadQuestions}
                                  layoutFormat="upDown"
                                  questionLength = "single"
                                  paraLength = "single"
                                />
                              );
                          }
                        })()
                    }
                  </div>
                </div>

                <div className={style.controlPane}>
                  <ButtonControlPane
                    mainAction={mainAction}
                    additionalActions={additionalActions}
                  />
                </div>

              </div>

              <br/>
              {/* <div className="row">
                <div className={style.buttonright}>
                <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                    onClick = {() =>  {this.setState({showReviewList: true , showWordAndSentence: false, showArticle: false})}} >
                    返回列表页面</button>
                </div>
              </div> */}

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
    submitQuestionState: {
      onResolved: function(){
        this.nextStep()
      },
      onRejected: function(){
        this.props.alert( "失败" )
      }
    },
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      articleId: state.EnglishArticle.articleId,
      reviewlist: state.EnglishReviewPort.reviewlist,
      hardword: state.EnglishReviewPort.hardword,
      hardsentence: state.EnglishReviewPort.hardsentence,
      // article: state.PortTest.content4,
      questions: state.SingleOptionQuestions.content,
      loadQuestionState: state.SingleOptionQuestions.loadState,
      submitQuestionState: state.SingleOptionQuestions.submitState,
      showSentencesTranslates: state.EnglishArticle.showSentencesTranslates,
      loadArticleState: state.EnglishArticle.loadState,
      translateWordsState: state.EnglishArticle.translateWordsState,
      choice: state.SubjectFunctionSelect.choice,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( EnglishReviewPortActions , dispatch),
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  EngReview
);
