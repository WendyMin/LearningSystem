import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import YueDu from 'Page/Learning/EnglishLearning/YueDu';
import Shengcinanju from 'Page/Learning/EnglishLearning/Shengcinanju';
import ChtoEng from 'Page/Learning/EnglishLearning/ChtoEng';
import EngChart from 'Page/Learning/EnglishLearning/EngChart';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';


import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class EngLearningTypeSelect extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeselect: true,
      yuedu: false,
      shengcinanju: false,
      chtoeng: false,
      changeColor1: false,
      changeColor2: false,
      changeColor3: false,
    }
  }

  render(){
    const {
      setLearningType,
      learningType,
    } = this.props;

    // console.log(learningType);

    var TextStyle = [];
    this.state.changeColor1 ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
    this.state.changeColor2 ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
    this.state.changeColor3 ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;

    return(
      <React.Fragment>
        <div className = {style.whole}>
        {learningType == "英语主页面" || this.state.typeselect == true ?
          <div>
            <div className = {style.fangkuang1}>
              <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
              <div className = {TextStyle[0]}
                   onMouseOver = {() => this.setState({changeColor1: true})} onMouseLeave = {() => this.setState({changeColor1: false})}
                   // onClick = {() => this.setState({typeselect: false , yuedu: true , shengcinanju: false , chtoeng: false })}
                   onClick = {() => {setLearningType("英语阅读"); this.setState({typeselect: false})}} >
                   点击进入<br/>英语阅读
              </div>
            </div>

            <div className = {style.fangkuang2}>
              <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
              <div  className = {TextStyle[1]}
                    onMouseOver = {() => this.setState({changeColor2: true})} onMouseLeave = {() => this.setState({changeColor2: false})}
                    // onClick = {() => this.setState({typeselect: false , yuedu: false , shengcinanju: true , chtoeng: false })}
                    onClick = {() => {setLearningType("英语生词难句"); this.setState({typeselect: false})}} >
                     点击进入<br/>生词难句
              </div>
            </div>

            <div className = {style.fangkuang3}>
              <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
              <div className = {TextStyle[2]}
                   onMouseOver = {() => this.setState({changeColor3: true})} onMouseLeave = {() => this.setState({changeColor4: false})}
                   // onClick = {() => this.setState({typeselect: false , yuedu: false , shengcinanju: false , chtoeng: true  })}
                   onClick = {() => {setLearningType("英语汉译英"); this.setState({typeselect: false})}} >
                   点击查看<br/>汉译英
              </div>
            </div>
          </div>:
        learningType == "英语阅读" ? <YueDu/>:
        learningType == "英语生词难句" ? <Shengcinanju/>:
        learningType == "英语汉译英" ? <ChtoEng/>
        : null
      }



        </div>
      </React.Fragment>
    )
  }




}

export default applyHOCs([
  /*asyncProcessControl({
    submitQuestionState: {
      onResolved: function(){
        //this.nextStep()
      },
      onRejected: function(){
        this.props.alert( "失败" )
      }
    },

  }),*/
  /*protect({
    logined: {
      satisfy: l => l === true,
      block(){
        const { openWindow , history, closeMask , openMask } = this.props;
        openWindow( UserManagerWindow,
          {
            width: '380px',
            height: '300px',
            position: {
              top: 'calc( 50% - 190px)',
              left: 'calc( 50% - 150px)'
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
      //logined: state.UserManager.logined,
      ///username: state.UserManager.name,
    //  content: state.PortTest.content,
      //loadContentState: state.PortTest.loadState,

      //questions: state.SingleOptionQuestions.content,
      //loadQuestionState: state.SingleOptionQuestions.loadState,
      //submitQuestionState: state.SingleOptionQuestions.submitState,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      //...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      //...bindActionCreators( SubjectSelectActions , dispatch )
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  EngLearningTypeSelect
);
//export default LearningTypeSelect
