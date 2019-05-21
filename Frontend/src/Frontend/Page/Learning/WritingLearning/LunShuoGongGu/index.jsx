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

class LunShuoGongGu extends React.PureComponent {

  constructor( props ){
    super( props );
    this.usertext = "",
    this.state = {
      uploadText: false,
      viewText: false,
      viewEgArticle: false
    }
  }

  /**加载巩固强化练习的名称，例 " 管理类联考1999年真题" ， 只提供名称*/
  loadButtonContents_gonggu = () => {
    this.props.loadButtonContents({
      url: "/api/lunshuoGonggu"
    });
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

  loadAllSubmitTextContent = () => {
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
          <div className="col-sm-8">
            <div className="bg-picture card-box">
              {/* <div className={style.zhentiMingcheng}>{choice}</div> */}
              <WriteContent className={style.zhentiContent}  loader={this.loadWriteContents}/>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card-box">
              <ul className="nav nav-tabs">
                 <li role="presentation" className="active">
                     <a href="#uploadArticle" role="tab" data-toggle="tab">上传文章</a>
                 </li>
                 <li role="presentation">
                     <a href="#viewArticle" role="tab" data-toggle="tab" onClick={()=>this.loadAllSubmitTextContent()}>已传文章</a>
                 </li>
                 <li role="presentation">
                    <a href="#EgArticle" role="tab" data-toggle="tab">参考范文</a>
                 </li>
             </ul>
             <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active" id="uploadArticle">
                  <EditText inputSizeStyle = {style.inputBox} buttonStyle = {style.saveOrSubmit}
                            loadLastSaveTextContent = {() => this.loadLastSaveTextContent()}
                            saveText = {() => this.saveOrSubmitTextContent(0)} submitText = {() => this.saveOrSubmitTextContent(1)}
                  />
                </div>
                <div role="tabpanel" className="tab-pane fade" id="viewArticle">
                  <ViewFinishedText loadAllSubmitTextContent = {() => this.loadAllSubmitTextContent()}/>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="EgArticle">
                  <p className = {style.article_title}>{name}</p>
                  {example_article.map((onePara , key) =>
                    <p key = {key}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>
                  )}
                </div>
             </div>
            </div>
          </div>
          {/* <div className={style.title}>
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
          </div> */}
        </div> : null}

      </React.Fragment>
    )
  }
}

export default applyHOCs([
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
  LunShuoGongGu
);
