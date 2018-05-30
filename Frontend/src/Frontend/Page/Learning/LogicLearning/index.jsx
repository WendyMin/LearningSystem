import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import { actions as UserManagerActions } from 'Connected/UserManager';
import Login from 'Page/Login';
import { view as PageDesign } from 'Connected/PageDesign';
import { actions as SubjectSelectActions } from 'Connected/SubjectSelect';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import LogicTest from 'Page/Learning/LogicLearning/LogicTest';
import EnterLearning from 'Page/Learning/LogicLearning/EnterLearning';
import LogicReview from 'Page/Learning/LogicLearning/LogicReview';
import SimulationTest from 'Page/Learning/LogicLearning/SimulationTest';
import LogicStatistics from 'Page/Learning/LogicLearning/LogicStatistics';
import LogicHelp from 'UI/Help/LogicHelp';
import Info from 'UI/Info';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class LogicLearning extends React.PureComponent {
  constructor( props ){
    super( props );
    this.type = ["入口测试" , "进入学习" , "开始复习" , "模拟测试" , "数据统计" , "查看帮助"];
  }

  componentWillReceiveProps(NextProps){
    // console.log(this.props.choice !== NextProps.choice && this.props.learningType === "重点习题" && this.props.submitZhongdian == false ||
    // this.props.choice !== NextProps.choice && this.props.learningType === "强化练习" && this.props.submitQianghua == false ||
    // this.props.choice !== NextProps.choice && this.props.learningType === "单元测试" && this.props.submitUnitTest == false )
      if(this.props.choice !== NextProps.choice && this.props.learningType === "重点习题" && this.props.submitZhongdian == false ||
      this.props.choice !== NextProps.choice && this.props.learningType === "强化练习" && this.props.submitQianghua == false ||
      this.props.choice !== NextProps.choice && this.props.learningType === "单元测试" && this.props.submitUnitTest == false )
      {
        //  if(window.confirm("您还没有提交答案，是否要退出当前学习?")) {this.props.setLearningType("")}
        // // else{}
        //  // else{NextProps.choice=this.props.choice}
        // else{this.props.setSubject( 1 );this.props.setLearningType(this.props.learningType)}
        // console.log(this.props.learningType)
      }

     // }

  }

  render(){
    const{
      username,
      logined,
      newTo,
      choice,
      learningType
    } = this.props;
    //console.log(this.props);
    // console.log(sessionStorage.getItem("user"))
    // console.log(sessionStorage.getItem("user") == "")
    // console.log(sessionStorage.getItem("user") == "undefined")
    var user = sessionStorage.getItem("user");
    if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" ){
      <Login/>
    }
    else{
      this.props.setUser(user,true);
      sessionStorage.setItem("user",user);
    }
    return (
      <React.Fragment>
        {/* {sessionStorage.getItem("user") == "undefined"?  <Login/> : */}
       { logined !== true ?
         <div>
           <Info info = "您还没有登录，请先登录，再进行学习!"/>
           {/* <Login/> */}
         </div> :
        <div>
          <PageDesign subjectFunctions = {this.type}/>

          <div className = {style.mainContent}>
            {
             choice == 0 ? <LogicTest/> :
             choice == 1 ? <EnterLearning learningType = ""/>:
             choice == 2 ? <LogicReview/> :
             choice == 3 ? <SimulationTest/> :
             choice == 4 ? <LogicStatistics/> :
             <LogicHelp/>
            }
          </div>

        </div>
      }
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
  }),
  /*protect({
    logined: {
      satisfy: l => l === true,
      block: ({ openWindow , history, closeMask , openMask }) => {
        openWindow( UserManagerWindow,
          {
            width: '40%',
            height: '70%',
            position: {
              top: 'calc( 50% - 190px)',
              left: 'calc( 50% - 150px)'
              //top: 'calc( 50% - 190px)',
              //left: 'calc( 50% - 150px)'
            },
            onCancel: () => history.goBack() || closeMask(),
            onSuccess: closeMask,
          }
        );
        openMask();
      }
    }
  }),*/
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      newTo: state.UserManager.newTo,
      choice: state.SubjectSelect.choice,
      submitZhongdian: state.LogicState.submitZhongdian,
      submitQianghua: state.LogicState.submitQianghua,
      submitUnitTest: state.LogicState.submitUnitTest,
      learningType: state.LearningTypeSelect.learningType
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
      ...bindActionCreators( UserManagerActions , dispatch ),
      ...bindActionCreators( SubjectSelectActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch )
    })
  )],
  LogicLearning
);
