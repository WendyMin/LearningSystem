import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import Button from 'UI/Button';
import changeAlpToNum from 'Algorithm/changeAlpToNum';
import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class ZhongDian extends React.PureComponent {

  constructor( props ){
    super( props );

    this.state = {
      submit: false
    };
  }

  loadQuestions = ( ) => {
    this.props.loadQuestions({
      url: "/api/logicZhongdian",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },

      parser: response => {
        var all = [];
        response.timu.map ( one => all.push(one) )
        return all.map(one => ({
           questionId: one.id,
           options: one.xuangxiang,
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
      // content,
      questions,
      lockAndShow
    } = this.props;
    // console.log(questions)
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
    console.log(username,this.props.chapter_name,question_id,RightOrWrong)

    this.props.submitQuestions({
      url: "/api/logicZhongDianTongJi",
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

 componentDidMount(){
   this.props.forceClearQuestions();
   this.loadQuestions();
 }

  render(){
    const {
      content,
      setLearningType
    } = this.props;
    // console.log(this.props)
    //console.log(questions)

    return (
      <React.Fragment>
        <div className="card-box">
          <h4 className = {style.dalei}> {this.props.chapter_name} </h4>
          <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test" layoutFormat="leftRight" whetherHaveXuhao = {true}/>
          <div align = "center">
            {this.state.submit ? <Button text = {"进入强化练习"} onClick = {() => setLearningType("强化练习")}/> :
            <Button text = {"提交"} onClick={() => this.submitQuestions()}/>}
          </div>
        </div>
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
      content: state.PortTest.content,
      chapter_name: state.LearningTypeSelect.chapter_name,
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  ZhongDian
);
