import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import Info from 'UI/Info';
// import ButtonControlPane from 'UI/ButtonControlPane';

import UserManagerWindow from "Windows/UserManager";

import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

import TextAndImag from 'UI/TextAndImag';
import SingleQuestion from 'UI/SingleQuestion';
import LogicChapterError from 'UI/LogicChapterError';
import changeAlpToNum from 'Algorithm/changeAlpToNum';

// import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class SimulationTest extends React.PureComponent {

  constructor( props ){
    super( props );

    this.numberOfRight = "";
    this.state = {
      submit: false,
      tongjiShow: false
    };
  }

  loadQuestions = ( ) => {
    this.props.loadPortContent({
      url: "/api/logicSimulationTest",
      body: {
        username: this.props.username
      },
    });
    this.props.loadQuestions({
      url: "/api/logicSimulationTest",
      body: {
        username: this.props.username
      },

      parser: response => {
        var all = [];
        all.push(response.luojiyuyan,response.mingtiluoji,response.cixiangluoji,response.luojiyingyong,response.yanyituili,response.guinaluoji,
          response.jiashe,response.zhichi,response.xueruo,response.pingjia,response.jieshi,response.tuilun,response.bijiao,response.miaoshu,response.zonghe
        )
        var all_questions = [];
        for(var i = 0 ; i < all.length ; i++ ){
          all[i].map((onetype,key) => all_questions.push(onetype))
        }
        // for(var i = 0 , j = 0 ; i < all.length ; i++ , j += 10000){
        //   all[i].map((onetype,key) => all_questions.push(
        //     {questionId: onetype.id + j,
        //     type: onetype.type,
        //     options: [onetype.op_one , onetype.op_two , onetype.op_three , onetype.op_four , onetype.op_five],
        //     rightKey: changeAlpToNum( onetype.answer ),
        //     question: onetype.question,
        //     analysis: onetype.analysis}))
        // }
        //console.log(all)
        // console.log(all_questions)
        //return all_questions
        return all_questions.map(one => ({
           questionId: one.id,
           type: one.type,
           options: [one.op_one , one.op_two , one.op_three , one.op_four , one.op_five],
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
    //console.log(questions)
    var submitTime = submitQuestionState.resolved;
    if( submiting ){
      return;
    }

    var question_id = "";
    var RightOrWrong = "";
    var num = 0;
    //var queId = [];
    //var typeNum = questions.length / 3;   // 每一类三道，求共几类
    // for(var k = 0 , j = 0 ; k < typeNum ; k++ , j += 10000){
    //   var queId = questions[i].questionId - j;
    //   console.log(queId);
    // }

    for ( var i = 0 ; i < questions.length ; i++ ){
      // for ( var k = 0 ; k < 3 ; k++){
      //   queId.push(questions[i].questionId - j);
      // }
      //question_id += `${queId}*`;
      question_id += `${questions[i].questionId}*`;
      if( questions[i].choosed !== undefined && questions[i].choosed.toString() === questions[i].rightKey ){
        RightOrWrong += `${0}*`;
        num += 1;
      }
      else {
        RightOrWrong += `${1}*`;
      }

    }
    this.numberOfRight = num
    // console.log(num , this.numberOfRight)


    // console.log(username,question_id,RightOrWrong)
    this.props.submitQuestions({
      url: "/api/logicSimulationTongJi",
      body: {
        username: username,
        question_id: question_id,
        RightOrWrong: RightOrWrong
        //time: submitTime + 1
      }
    });
    for( var i = 0; i < questions.length ; i++ ){
      lockAndShow( questions[i].questionId );
    }
  }
  loadSimulationTestTongji = () => {
    this.setState({tongjiShow: true});
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
      setChoice
    } = this.props;
  //  console.log(questions)
    var chapter_name = ["逻辑语言" , "命题逻辑" , "词项逻辑" , "逻辑应用" , "演绎推理" , "归纳逻辑" ,
                        "假设" , "支持" , "削弱" , "评价" , "解释" , "推论" , "比较" , "描述" , "综合"];

    return (
      <React.Fragment>
        {
          content.flag === 1 ?
          <div>
            {this.state.tongjiShow ?
            <div>
              <div style={{"fontSize":"16px"}}>本次模拟测试一共包含{Object.keys(questions).length}道题,您一共答对了{this.numberOfRight}道</div>
              <div align="center">
                <Button text = {"再测一次"} onClick = {() => {this.loadQuestions();this.setState({tongjiShow: false,submit:false})}}/>
              </div>
            </div>
            :
            <div>
              <div><br/>

               <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test" layoutFormat="leftRight"/>
               <div align = "center">
                 {this.state.submit ? <Button text = {"查看测试统计"} onClick = {() => this.loadSimulationTestTongji()}/>:
                 <Button className = {style.submitButton} text = {"提交"} onClick = {() => this.submitQuestions()}/>}

               </div>
          </div>
        </div>}


          </div>
          :
          <Info info = "您还没完成入口测试，请先完成入口测试!"/>

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
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
    })
  )],
  SimulationTest
);
