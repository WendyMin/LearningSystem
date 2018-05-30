import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import {
  view as WriteContent,
  actions as WriteContentActions
} from 'Connected/WriteContent';
import {
  actions as PortTestActions
} from 'Connected/PortTest';
import {
  view as MultOptionQuestons,
  actions as MultOptionQuestionsActions
} from 'Connected/MultOptionQuestions';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunZhengZhenTi extends React.PureComponent {

  constructor( props ){
    super( props );
  }

  loadZhentiContent = ( choice ) => {
    console.log(choice)
    /*  加载左侧的题目部分 */
    this.props.loadWriteContents({
      url: "/api/lunZhengZhenTiContent",
      body: {
        requestQuestion: this.props.choice
      }
    });
    /* 加载正确答案等 */
    this.props.loadPortContent({
      url: "/api/lunZhengZhenTiError",
      body: {
        requestQuestion: this.props.choice
      }
    });
  }

  componentDidMount(){
    this.loadZhentiContent()
  }

  componentWillReceiveNextProps(NextPorts){
    if(this.props.choice!==NextProps.choice){
      //this.loadZhentiContent()
    }
  }


  render(){
    const{
      choice
    } = this.props;
    //console.log(this.props.title.length === 0)
    return (
      <React.Fragment>
        <div className = {style.whoZhentiPart}>
        <div className={style.title}>
          <div className={style.zhentiMingcheng}>{choice}</div>
          <WriteContent className={style.zhentiContent}  loader={this.loadWriteContents}/>
        </div>
        {
          this.props.title.length === 0 ? null :
          <div className={style.option}>
             <MultOptionQuestons/>
          </div>
        }

        </div>
      </React.Fragment>
    )
  }
}

export default applyHOCs([

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
      choice: state.ButtonExpand.choice,
      title: state.WriteContent.title
    }),
    dispatch => ({
      ...bindActionCreators( WriteContentActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
    })

  )],
  LunZhengZhenTi
);
