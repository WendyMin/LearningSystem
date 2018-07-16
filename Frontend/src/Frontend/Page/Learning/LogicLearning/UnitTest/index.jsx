import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import Button from 'UI/Button';
import LogicChapterError from 'UI/LogicChapterError';
import changeAlpToNum from 'Algorithm/changeAlpToNum';
import EnterLearning from 'Page/Learning/LogicLearning/EnterLearning';

import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import { actions as ZhentiPerYearTongjiActions } from 'Connected/ZhentiPerYearTongji';
import { actions as ZhentiAllYearTongjiActions } from 'Connected/ZhentiAllYearTongji';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class UnitTest extends React.PureComponent {

  constructor( props ){
    super( props );

    this.state = {
      end: false,
      unitTongjiShow: false,
      thisOrNext: false
    };
  }

  loadQuestions = ( ) => {
    this.props.loadQuestions({
      url: "/api/logicCeshi",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },

      parser: response => {
        var all = [];
        response.timu.map ( one =>
          one.per_timu.map( oneques => all.push(oneques))
        )
        //console.log(all)
        return all.map(one => ({
           questionId: one.id,
           options: one.xuanxiang,
           rightKey: changeAlpToNum( one.answer ),
           question: one.question,
           analysis: one.analysis,
         }) )
      }
    })
  }

  submitQuestions = () => {
    this.setState({submit: true});
    const {
      username,
      questions,
      lockAndShow
    } = this.props;

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
    }

    // console.log(username,this.props.chapter_name,question_id,RightOrWrong)
    this.props.submitQuestions({
      url: "/api/logicCeShiTongJi",
      body: {
        username: username,
        dalei: this.props.chapter_name,
        question_id: question_id,
        RightOrWrong: RightOrWrong
      }
    });
    for( var i = 0; i < questions.length ; i++ ){
      lockAndShow( questions[i].questionId );
    }
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
    this.props.setLearningType("")
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
   this.props.forceClearQuestions();
   this.loadQuestions();
 }


  render(){
    const { end } = this.state;
    const {
      content,
      setChoice,
    } = this.props;
    // console.log(questions)

    return (
      <React.Fragment>
        { this.state.unitTongjiShow ?
          <LogicChapterError chapter_name = {this.props.chapter_name} ceshiData = {this.props.ceshiData} chapterData = {this.props.chapterData}
                             stayThisChapter = {() => this.finishedChapter(0)} enterNextChapter = {() => this.finishedChapter(1)} // 1 进入下一章 ， 0 不进入
          />
          :
          this.state.thisOrNext ? <EnterLearning xingshi={this.props.xingshiOrLunzheng}/> :
           <div className="card-box">
             <h4 className = {style.dalei}> {this.props.chapter_name} </h4>
             <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test" layoutFormat="leftRight" whetherHaveXuhao = {true}/>
             <div align = "center">
               {this.state.submit ? <Button text = {"查看本章数据统计"} onClick = {() => this.loadChapterError()}/>:
               <Button text = {"确认提交"} onClick = {() => this.submitQuestions()}/>}
             </div>
           </div>
        }
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  makePage,
  connect(
    state => ({
      // logined: state.UserManager.logined,
      username: state.UserManager.name,
      questions: state.SingleOptionQuestions.content,
      chapter_name: state.LearningTypeSelect.chapter_name,
      ceshiData: state.ZhentiPerYearTongji.tongji,
      chapterData: state.ZhentiAllYearTongji.tongji
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( ZhentiPerYearTongjiActions , dispatch ),
      ...bindActionCreators( ZhentiAllYearTongjiActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  UnitTest
);
