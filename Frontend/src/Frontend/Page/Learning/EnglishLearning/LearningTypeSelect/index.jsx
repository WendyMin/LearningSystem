import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import YueDu from 'Page/Learning/EnglishLearning/YueDu';
import Benkexuexi from 'Page/Learning/EnglishLearning/Benkexuexi';
import ChtoEng from 'Page/Learning/EnglishLearning/ChtoEng';
import EngChart from 'Page/Learning/EnglishLearning/EngChart';


import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class LearningTypeSelect extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeselect: true,
      yuedu: false,
      benkexuexi: false,
      chtoeng: false,
      changeColor1: false,
      changeColor2: false,
      changeColor3: false,
    }
  }

  render(){
    var TextStyle = [];
    this.state.changeColor1 ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
    this.state.changeColor2 ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
    this.state.changeColor3 ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;

    return(
      <React.Fragment>
        <div className = {style.whole}>
        {this.state.typeselect ? <div>
          <div className = {style.fangkuang1}>
            <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
            <div className = {TextStyle[0]}
                 onMouseOver = {() => this.setState({changeColor1: true})} onMouseLeave = {() => this.setState({changeColor1: false})}
                 onClick = {() => this.setState({typeselect: false , yuedu: true , benkexuexi: false , chtoeng: false })}>
                 点击进入<br/>英语阅读
            </div>
          </div>

          <div className = {style.fangkuang2}>
            <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
            <div  className = {TextStyle[1]}
                  onMouseOver = {() => this.setState({changeColor2: true})} onMouseLeave = {() => this.setState({changeColor2: false})}
                  onClick = {() => this.setState({typeselect: false , yuedu: false , benkexuexi: true , chtoeng: false })}>
                   点击进入<br/>本课学习
            </div>
          </div>

          <div className = {style.fangkuang3}>
            <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
            <div className = {TextStyle[3]}
                 onMouseOver = {() => this.setState({changeColor3: true})} onMouseLeave = {() => this.setState({changeColor4: false})}
                 onClick = {() => this.setState({typeselect: false , yuedu: false , benkexuexi: false , chtoeng: false })}>
                 点击查看<br/>汉译英
            </div>
          </div>
        </div>:
        this.state.yuedu ? <YueDu/>:
        this.state.chtoeng ? <Benkefuxi/>:
        this.state.chtoeng ? <ChtoEng/>: null
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
    }),
    dispatch => ({
      //...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      //...bindActionCreators( SubjectSelectActions , dispatch )
    })
  )],
  LearningTypeSelect
);
//export default LearningTypeSelect
