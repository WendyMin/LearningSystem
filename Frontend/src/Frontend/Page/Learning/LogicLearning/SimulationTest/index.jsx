import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

import Button from 'UI/Button';
import Note from 'UI/Note';
import FinishedNote from 'UI/FinishedNote';
import changeAlpToNum from 'Algorithm/changeAlpToNum';

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
    this.props.forceClearQuestions();
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
        // all.push(response.luojiyuyan,response.mingtiluoji,response.cixiangluoji,response.luojiyingyong,response.yanyituili,response.guinaluoji,
        //   response.jiashe,response.zhichi,response.xueruo,response.pingjia,response.jieshi,response.tuilun,response.bijiao,response.miaoshu,response.zonghe
        // )
        // var all_questions = [];
        // for(var i = 0 ; i < all.length ; i++ ){
        //   all[i].map((onetype,key) => all_questions.push(onetype))
        // }
        response.timu.map((onetype) => all.push(onetype.timu))
        var all_questions = [];
        for(var i = 0 ; i < all.length ; i++ ){
          all[i].map((onetype,key) => all_questions.push(onetype))
        }

        return all_questions.map(one => ({
           questionId: one.id,
           type: one.type,
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
      lockAndShow
    } = this.props;

    var question_id = "";
    var RightOrWrong = "";
    var num = 0;

    for ( var i = 0 ; i < questions.length ; i++ ){
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
    const {
      content,
      questions
    } = this.props;
  //  console.log(questions)
    // var chapter_name = ["逻辑语言" , "命题逻辑" , "词项逻辑" , "逻辑应用" , "演绎推理" , "归纳逻辑" ,
    //                     "假设" , "支持" , "削弱" , "评价" , "解释" , "推论" , "比较" , "描述" , "综合"];
    // console.log(content.flag === "1")
    return (
      <React.Fragment>
        {
          content.flag == undefined ? null :
          <div>
            {
              content.flag === "2" ?
              <FinishedNote info="恭喜您完成了所有模拟测试的题目 ！"/>
              :
              content.flag === "1" ?
              <div>
                {this.state.tongjiShow ?
                <div>
                  <div className="row" style={{"height":"80px"}}></div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8">
                    <div className="card-box" align="center">
                      <img src="/static/plugins/bootstrap-sweetalert/thumbs-up.jpg" style={{"height":"80px","width":"80px","margin": "20px"}} alt="work-thumbnail"/>
                      <br/><br/><h2>本次测试结果</h2>
                        <p className="lead text-muted">
                          题目总数:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{"color":"#ff5b5b"}}> {Object.keys(questions).length} </span>
                        </p>
                        <p className="lead text-muted">
                          正确数量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{"color":"#ff5b5b"}}> {this.numberOfRight} </span>
                        </p>
                      <p><button className="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-lg" onClick = {() => {this.loadQuestions();this.setState({tongjiShow: false,submit:false})}}>再测一次</button></p>
                    </div>
                  </div>
                </div>
                :
                <div>
                  <div className="card-box"><br/>
                   <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test" layoutFormat="leftRight"/>
                   <div align = "center">
                     {this.state.submit ? <Button text = {"查看测试统计"} onClick = {() => this.setState({tongjiShow: true})}/>:
                     <Button className = {style.submitButton} text = {"提交"} onClick = {() => this.submitQuestions()}/>}
                   </div>
                  </div>
               </div>}
              </div>
              :
              <Note info = "您还没完成入口测试，请先完成入口测试 !" onClick={()=>this.props.setSubjectFunctionSelect(0)}/>
            }
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
      content: state.PortTest.content,
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
    })
  )],
  SimulationTest
);
