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
  view as EditText,
  actions as EditTextActions
} from 'Connected/EditText';
import {
  view as ViewFinishedText,
  actions as ViewFinishedTextActions
} from 'Connected/ViewFinishedText';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunZhengGongGu extends React.PureComponent {

  constructor( props ){
    super( props );
    this.usertext = "",
    this.state = {
      uploadText: false,
      viewText: false,
      viewEgArticle: false
    }
  }

  loadGongguContent = ( choice ) => {
    this.props.loadWriteContents({
      url: "/api/lunZhengGongGuContent",
      body: {
        requestQuestion: choice
      }
    });
  }

  loadLastSaveTextContent = () => {
    console.log(this.props.username,this.props.choice)
    this.props.loadLastSaveText({
      url: "/api/lunZhengZanCunContent",
      body: {
        username: this.props.username,
        choice: this.props.choice
      }
    })
  }

  saveOrSubmitTextContent = ( flag ) => {
    this.props.saveOrSubmitText({
      url: "/api/lunZhengSaveOrSubmitText",
      body: {
        username: this.props.username,
        choice: this.props.choice,
        text: this.props.userInputText,
        saveOrSubmit: flag  // flag=0 暂存  , flag=1 提交
      }
    });
  }

  loadAllSubmitText = () => {
    this.props.loadAllSubmitText({
      url: "/api/lunZhengAllSubmitText",
      body: {
        username: this.props.username,
        choice: this.props.choice
      }
    });
  }

  componentWillReceiveProps(NextProps){
    if(this.props.choice !== NextProps.choice){
      this.setState({
        uploadText: false,
        viewText: false,
        viewEgArticle: false
      })
    }
  }

  render(){
    const{
      choice,
      name,
      example_article,
      lastSaveText,
      allSubmitTextName,
      allSubmitText,
      whichTextToView
    } = this.props;

    return (
      <React.Fragment>
        {choice !== "" ?
        <div>
          <div className={style.title}>
            <div className={style.zhentiMingcheng}>{choice}</div>
            <WriteContent className={style.zhentiContent}  loader={this.loadWriteContents}/>
          </div>

          <div className={style.option}>
            <div className = {style.egArticleText}>
              <span onClick={() => this.setState({uploadText: true , viewText: false , viewEgArticle: false})}> 上传文章 </span>&nbsp;&nbsp;&nbsp;
              <span onClick={() => {this.setState({uploadText: false , viewText: true , viewEgArticle: false});this.loadAllSubmitText()}}> 已传文章 </span>&nbsp;&nbsp;&nbsp;
              <span onClick = {() => this.setState({uploadText: false , viewText: false , viewEgArticle: true})}> 参考范文 </span>
            </div>

            <div className = {style.egArticle}>
            {
              this.state.uploadText ?
              <EditText inputSizeStyle = {style.inputBox} buttonStyle = {style.saveOrSubmit}
                        loadLastSaveTextContent = {() => this.loadLastSaveTextContent()}
                        saveText = {() => this.saveOrSubmitTextContent(0)} submitText = {() => this.saveOrSubmitTextContent(1)}
              />
              :
            this.state.viewText ?
            <ViewFinishedText/>
            // <FinishedText allSubmitTextName = {allSubmitTextName} allSubmitText = {allSubmitText} whichTextToView = {whichTextToView}/>
            :
              this.state.viewEgArticle ?
              <div>
                <p className = {style.article_title}>{name}</p>
                {example_article.map((onePara , key) =>
                  <p key = {key}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>
                )}
              </div>
              :
              null
            }
            </div>
          </div>
        </div> : null}

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
      name: state.WriteContent.name,
      example_article: state.WriteContent.example_article,
      userInputText: state.EditText.userInputText,
      lastSaveText: state.EditText.lastSaveText,
      allSubmitTextName: state.ViewFinishedText.allSubmitTextName,
      allSubmitText: state.ViewFinishedText.allSubmitText,
      whichTextToView: state.EditText.whichTextToView
    }),
    dispatch => ({
      ...bindActionCreators( WriteContentActions , dispatch ),
      ...bindActionCreators( EditTextActions , dispatch ),
      ...bindActionCreators( ViewFinishedTextActions , dispatch )
    })

  )],
  LunZhengGongGu
);
