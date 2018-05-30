import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import Info from 'UI/Info';
import ButtonControlPane from 'UI/ButtonControlPane';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import UserManagerWindow from "Windows/UserManager";

import {
  view as EnglishLearningSummary
} from 'Connected/EnglishLearningSummary';
import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';
import {
  view as TranslatedWords
} from 'Connected/TranslatedWords';
import {  actions as PortTestActions} from 'Connected/PortTest';
import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';

import mergeArraysIntoOne from 'direct-core/Algorithm/mergeArraysIntoOne';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class YueDu extends React.PureComponent {

  constructor( props ){
    super( props );
    this.actions =
    [ this.submitQuestions , props.translateWords ,
      () => { this.confirm(); this.setState({displayByWords:false})} ,
      () => { props.translateSentences(); this.confirm() } ,
      () => { props.hideTranslate();this.confirm() },
      this.submitQuestions ,
      [ this.confirm , props.translateAll ] ,
      [ this.quit , this.doMore ]
    ];
    this.texts =
    [ "提交答案" , "翻译生词" , "下一步" , "翻译难句" , "下一步" , "提交答案" , [ "查看统计" , "翻译全文" ] ,  [ "结束" , "进入生词难句" ] ];
    this.describes =
    ["阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案",
    "确认自己不明白的单词，确认全部点击后，提交系统，等待翻译",
    "请阅读生词解释",
    "选择自己不理解的句子，点击，提交系统，等待翻译" , "请阅读难句解释" ,
    "再次完成试题，如果觉得刚才选的有误，可修改答案，点击确认后，查看正确答案和解析" ,
    "请仔细阅读正确答案和解析，如需查看全文翻译，请点击翻译全文按钮，否则请点击查看统计" ,
    "想做更多吗？"];
    this.state = {
      processStep: 0,
      displayByWords: true
    };

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

  nextStep = () => {
    this.setState({
      processStep: this.state.processStep + 1
    });
  }

  confirm = () => {
    this.nextStep();
  }

  // quit = () => {
  //   for( var i = 0; i < questions.length ; i++ ){
  //     unlockAndHide( questions[i].questionId );
  //   }
  //   hideAllTranslate();
  //   this.props.history.goBack();
  // }

//  doMore = () => {
  //  const { unlockAndHide , loadContent , questions , hideAllTranslate } = this.props;
    //loadContent();
    //this.loadQuestions();
  //  for( var i = 0; i < questions.length ; i++ ){
    //  unlockAndHide( questions[i].questionId );
    //}
  //  hideAllTranslate();
    //this.setState({
    //  processStep: 0, // 0 ->
    //  displayByWords: true
  //  });
//  }

quit = () => {
  const { unlockAndHide  , questions , hideAllTranslate } = this.props;
  for( var i = 0; i < questions.length ; i++ ){
      unlockAndHide( questions[i].questionId );
    }
    hideAllTranslate();
  this.props.setLearningType("英语主页面");
}

   doMore = () => {
      const { unlockAndHide  , questions , hideAllTranslate } = this.props;
       for( var i = 0; i < questions.length ; i++ ){
         unlockAndHide( questions[i].questionId );
        }
       hideAllTranslate();
      this.setState({
       processStep: 0, // 0 ->
       displayByWords: true
      });
     this.props.setLearningType("英语生词难句");
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
    if( ( ( submitTime + 1 ) & 1 ) === 0 ){
      for( var i = 0; i < questions.length ; i++ ){
        lockAndShow( questions[i].questionId );
      }
    }
  }

  function = () => {
    this.props.loadPortContent({
      url: "/api/eng_getUnit",
      body:{
        username: this.props.username,
      }
    });
  }

  componentDidMount(){
    this.props.loadContent();
    this.loadQuestions();
    this.function();
  }

  render(){
    const { processStep } = this.state;
    const {
      translateWordsState,
      submitQuestionState,
      loadQuestionState,
      translateWords,
      translateSentences,
      loadArticleState,
      loadContent,
      UnitAndCourse,
      setLearningType,
      learningType,
      ined
    } = this.props;
    var { displayByWords } = this.state;
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

    // this.props.changeArticleId(this.props.getArticleId.artid);
    console.log(this.props.articleId)

    return (
      <React.Fragment>
        <Prompt
          when={processStep !== 0 && processStep !== this.actions.length - 1}
          message="你需要再做一遍，确定退出吗?"
        />

        <div className={style.HUD}>
          [Unit {UnitAndCourse.unit} Course {UnitAndCourse.course}] Step {processStep + 1}: {this.describes[processStep]}
        </div>
        <div className={style.wrapper}>
          <div className={style.leftPane}>
            <Loading
              loading={loadArticleState.pending}
              wasLoaded={loadArticleState.resolved}
              lastFailed={loadArticleState.lastFailed}
              reloader={loadContent}
              center
            >
              <SlideLR play={ined} >
                <EnglishArticle
                  displayByWords={displayByWords}
                />
              </SlideLR>
            </Loading>
            </div>

            <div className={style.rightPane}>
            {
              /*
              processStep:
              0 ->submit first
              1 -> choose words and submit
              2 -> confirm
              3 -> choose sentence and submit
              4 -> confirm
              5 -> submit second time
              6( no leading )  -> translateAll ( optional )
              6 -> go writing
              7 -> write english and confirm
              8 -> write chinese and confirm
              8( no leading ) -> check review ( optional )
              9 -> do more

              */
                (() => {
                  switch( processStep ){
                    case 0:
                    case 5:
                    case 6:
                      return (
                        <Loading
                          loading={loadQuestionState.pending}
                          wasLoaded={loadQuestionState.resolved}
                          lastFailed={loadQuestionState.lastFailed}
                          reloader={this.loadQuestions}
                          center
                        >
                          <SlideRL play={ined}>
                            <SingleOptionQuestions
                              submiter={this.submitQuestions}
                              loader={this.loadQuestions}
                            />
                          </SlideRL>
                        </Loading>
                      );
                    case 1:
                      return (
                        <div className="container">
                          <div className="makeLoadingCenter">
                            <Loading
                              center
                              loading={translateWordsState.pending}
                              lastFailed={translateWordsState.lastFailed}
                              wasLoaded={translateWordsState.resolved}
                              reloader={translateWords}
                              info="点击不认识的单词"
                            />
                          </div>
                        </div>
                      );
                    case 2:
                    case 4:
                      return (
                        <TranslatedWords />
                      );
                    case 3:
                      return (
                        <Info info="点击不理解的句子"/>
                      );
                    case 7:
                      return (
                          <EnglishLearningSummary />
                      );
                  }
                })()
            }
          </div>
        </div>
        <div className={style.controlPane}>
          <SlideDU play={ined}>
            <ButtonControlPane
              mainAction={mainAction}
              additionalActions={additionalActions}
            />
          </SlideDU>
        </div>
      </React.Fragment>
    );
  }
};

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
    translateWordsState: {
      onResolved: function(){
        this.nextStep()
      },
      onRejected: function(){
        this.props.alert("失败")
      }
    }
  }),
  // protect({
  //   logined: {
  //     satisfy: l => l === true,
  //     block(){
  //       const { openWindow , history, closeMask , openMask } = this.props;
  //       openWindow( UserManagerWindow,
  //         {
  //           width: '380px',
  //           height: '300px',
  //           position: {
  //             top: 'calc( 50% - 190px)',
  //             left: 'calc( 50% - 150px)'
  //           },
  //           onCancel: () => history.goBack() || closeMask(),
  //           onSuccess: closeMask,
  //         }
  //       );
  //       openMask();
  //     }
  //   }
  // }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      questions: state.SingleOptionQuestions.content,
      showSentencesTranslates: state.EnglishArticle.showSentencesTranslates,
      loadQuestionState: state.SingleOptionQuestions.loadState,
      submitQuestionState: state.SingleOptionQuestions.submitState,
      loadArticleState: state.EnglishArticle.loadState,
      translateWordsState: state.EnglishArticle.translateWordsState,
      articleId: state.EnglishArticle.articleId,
      UnitAndCourse: state.PortTest.content,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  YueDu
);
