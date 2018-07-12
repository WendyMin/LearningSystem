import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import Button from 'UI/Button';
// import Info from 'UI/Info';
// import TextAndImag from 'UI/TextAndImag';
// import SingleQuestion from 'UI/SingleQuestion';
import changeAlpToNum from 'Algorithm/changeAlpToNum';
// import UserManagerWindow from "Windows/UserManager";
import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
// import { actions as LogicStateActions } from 'Connected/LogicState';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class QiangHua extends React.PureComponent {

  constructor( props ){
    super( props );

    // this.questions = [];
    this.state = {
      submit: false
      // end: false,
    //  learning: false
    };
  }

  loadQuestions = ( ) => {
    this.props.loadPortContent({
      url: "/api/logicQianghua",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },
    });
    this.props.loadQuestions({
      url: "/api/logicQianghua",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },

      parser: response => {
        var all = [];
        // for( var i = 0 ; i < response.timu.length ; i++ ){
        //   response.timu[i].map ( one => all.push(one) )
        // }
        //console.log(all)
        response.timu.map ( one =>
          one.per_timu.map( oneques => all.push(oneques))
        )
          // console.log(all)
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
      content,
      questions,
      submitQuestionState,
      submiting,
      lockAndShow
    } = this.props;
    // console.log(questions)
    // var submitTime = submitQuestionState.resolved;
    // if( submiting ){
    //   return;
    // }

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

    console.log(username,content.chapter_name,question_id,RightOrWrong)
    this.props.submitQuestions({
      url: "/api/logicQianghuaTongji",
      body: {
        username: username,
        dalei: content.chapter_name,
        question_id: question_id,
        RightOrWrong: RightOrWrong
      }
    });
    for( var i = 0; i < questions.length ; i++ ){
      lockAndShow( questions[i].questionId );
    }
  }

  // FinishTestNote_qianghua = () =>{
  //   alert("您还没有完成入口测试，请先完成入口测试!");
  // }
  // FinishZhongDianNote_qianghua = () =>{
  //   alert("您还没有完成重点习题，请先完成重点习题!");
  // }

 componentDidMount(){
   this.loadQuestions();
 }


  render(){
    const { end } = this.state;
    const {
      // submitQuestionState,
      // loadQuestionState,
      // loadContent,
      // loadContentState,
      // ined,
      // questions,
      content,
      // setChoice,
      setLearningType
    } = this.props;
    //console.log(questions,content)
    // console.log(this.props)

    return (
      <React.Fragment>
        <div className="card-box">
          <h4 className = {style.dalei}> {content.chapter_name} </h4>
          <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test" layoutFormat="leftRight"/>
          <div align = "center">
            {this.state.submit ? <Button text = {"进入单元测试"} onClick = {() => setLearningType("单元测试")}/>:
            <Button text = {"提交"} onClick={() => this.submitQuestions()}/>}
          </div>
        </div>

        {/* {content.flag === 1 ?
        <div className="card-box">
          <div className = {style.logic_knowledge}>
             <h4 className = {style.dalei}> {content.chapter_name} </h4>
             <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test" layoutFormat="leftRight"/>
             <div align = "center">
               <strong><div style = {{"color":"#ff5b5b"}}>请先确认提交，再做单元测试</div></strong>
               <Button text = {"确认提交"} onClick={() => {this.props.setSubmitQianghua(true);this.submitQuestions()}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Button text = {"进入单元测试"} onClick = {() => setLearningType("单元测试")}/>
             </div>
          </div>
        </div>
        :
        content.flag === 2 ?
        <div>
          <Info info = "您还没有完成入口测试，请先完成入口测试！"/>
        </div>
        :
        content.flag === 3 ?
        <div>
          <Info info = "您还没有完成重点习题，请先完成重点习题！"/>
        </div>
        :
        null
        } */}
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
      chapter_name: state.LearningTypeSelect.chapter_name
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      // ...bindActionCreators( LogicStateActions , dispatch )
    })
  )],
  QiangHua
);
