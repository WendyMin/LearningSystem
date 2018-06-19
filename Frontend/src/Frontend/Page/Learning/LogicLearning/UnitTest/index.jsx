import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import Button from 'UI/Button';
import Info from 'UI/Info';
import TextAndImag from 'UI/TextAndImag';
import SingleQuestion from 'UI/SingleQuestion';
import LogicChapterError from 'UI/LogicChapterError';
import changeAlpToNum from 'Algorithm/changeAlpToNum';
// import UserManagerWindow from "Windows/UserManager";
import EnterLearning from 'Page/Learning/LogicLearning/EnterLearning';

import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as ZhentiPerYearTongjiActions } from 'Connected/ZhentiPerYearTongji';
import { actions as ZhentiAllYearTongjiActions } from 'Connected/ZhentiAllYearTongji';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import { actions as LogicStateActions } from 'Connected/LogicState';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class UnitTest extends React.PureComponent {

  constructor( props ){
    super( props );

    this.questions = [];
    this.state = {
      end: false,
      unitTongjiShow: false,
      thisOrNext: false
    };
  }

  loadQuestions = ( ) => {
    this.props.loadPortContent({
      url: "/api/logicCeshi",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },
    });
    this.props.loadQuestions({
      url: "/api/logicCeshi",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },

      parser: response => {
        var all = [];
        for( var i = 0 ; i < response.timu.length ; i++ ){
          response.timu[i].map ( one => all.push(one) )
        }
        //console.log(all)
        return all.map(one => ({
           questionId: one.id,
           options: one.xuanxiang,
           //options: [one.op_one , one.op_two , one.op_three , one.op_four , one.op_five],
           rightKey: changeAlpToNum( one.answer ),
           question: one.question,
           analysis: one.analysis,
         }) )

      }
    })
  }



  submitQuestions = () => {
    const {
      username,
      content,
      questions,
      submitQuestionState,
      submiting,
      lockAndShow
    } = this.props;
    //console.log(questions)
    var submitTime = submitQuestionState.resolved;
    if( submiting ){
      return;
    }

    var question_id = "";
    var RightOrWrong = "";
    for ( var i = 0 ; i < questions.length ; i++ ){
      question_id += `${questions[i].questionId}*`;
      if( questions[i].choosed !== undefined && questions[i].choosed.toString() === questions[i].rightKey ){
        RightOrWrong += `${0}*`;
      }
      else {
        RightOrWrong += `${1}*`;
      }
      //if( questions[i].choosed.toString() === questions[i].rightKey ){
      //  RightOrWrong += `${0}*`;
      //}
      //else {
      //  RightOrWrong += `${1}*`;
    //  }

    }

    //console.log(username,content.chapter_name,question_id,RightOrWrong)
    this.props.submitQuestions({
      url: "/api/logicCeShiTongJi",
      body: {
        username: username,
        dalei: content.chapter_name,
        question_id: question_id,
        RightOrWrong: RightOrWrong
        //time: submitTime + 1
      }
    });
    //if( ( ( submitTime + 1 ) & 1 ) === 0 ){
      for( var i = 0; i < questions.length ; i++ ){
        lockAndShow( questions[i].questionId );
      }
    //}
  }

  loadChapterError = () => {
    this.setState({unitTongjiShow: true , thisOrNext: false});
    this.props.loadZhentiTongji({
      url: "/api/logicCeshiResult",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },
    });
    this.props.loadAllZhentiTongji({
      url: "/api/logicResult",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },
    })
  }

  finishedChapter = (num) => {
    console.log(this.props.xingshiOrLunzheng);
    this.setState({thisOrNext: true , unitTongjiShow: false});
    this.props.getRecordWhetherNext({
      url: "/api/logicFinishedChapter",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name,
        whetherEnterNextChapter: num
      },
    });
    this.props.getChapterName({
      url: "/api/logicGetChapterName",
      body: {
        username: this.props.username,
        xingshi: this.props.xingshiOrLunzheng
      },
    })
  }

 componentDidMount(){
   this.loadQuestions();
 }


  render(){
    const { end } = this.state;
    const {
      submitQuestionState,
      loadQuestionState,
      loadContent,
      loadContentState,
      ined,
      questions,
      content,
      setChoice,
    } = this.props;
    console.log(questions)

    return (
      <React.Fragment>
        {/* <Prompt
          when={end==false}
          message="you need to do it again, are you sure to quit?"
        /> */}
        { this.state.unitTongjiShow ?
          <LogicChapterError chapter_name = {this.props.chapter_name} ceshiData = {this.props.ceshiData} chapterData = {this.props.chapterData}
                             stayThisChapter = {() => this.finishedChapter(0)} enterNextChapter = {() => this.finishedChapter(1)} // 1 进入下一章 ， 0 不进入
          />
          :
          this.state.thisOrNext ? <EnterLearning/> :
          content.flag == 1 ?
           <div className="card-box">
              {/* <div className = {style.pageTitle}> 单元测试 </div> */}
              <div className = {style.logic_knowledge}>
                 <h4 className = {style.dalei}> {content.chapter_name} </h4>
                 <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test" layoutFormat="leftRight"/>
                 <div align = "center">
                   <strong><div style = {{"color":"#ff5b5b"}}>请先确认提交，再查看章节数据统计，否则，统计数据将会是上次测试的统计结果</div></strong>
                   <Button text = {"确认提交"} onClick = {() => {this.props.setSubmitUnitTest(true);this.submitQuestions()}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <Button text = {"查看本章数据统计"} onClick = {() => this.loadChapterError()}/>
                 </div>
              </div>
           </div>
           :
           content.flag == 2 ? <Info info = "您还没有完成入口测试，请先完成入口测试！"/> :
           content.flag == 3 ? <Info info = "您还没有完成重点习题，请先完成重点习题！"/> :
           <Info info = "您还没有完成强化练习，请先完成强化练习！"/>

        }

      </React.Fragment>
    );
  }
};

export default applyHOCs([
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      questions: state.SingleOptionQuestions.content,
      loadQuestionState: state.SingleOptionQuestions.loadState,
      submitQuestionState: state.SingleOptionQuestions.submitState,
      content: state.PortTest.content,
      loadContentState: state.PortTest.loadState,
      chapter_name: state.LearningTypeSelect.chapter_name,
      ceshiData: state.ZhentiPerYearTongji.tongji,
      chapterData: state.ZhentiAllYearTongji.tongji
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( ZhentiPerYearTongjiActions , dispatch ),
      ...bindActionCreators( ZhentiAllYearTongjiActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( LogicStateActions , dispatch )
    })
  )],
  UnitTest
);
