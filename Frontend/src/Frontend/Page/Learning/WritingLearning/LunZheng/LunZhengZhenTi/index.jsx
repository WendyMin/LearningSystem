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

  loadLastSaveTextContent = () => {
    //console.log(this.props.username,this.props.choice)
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
        //text: this.usertext,
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
      choice,
      article_analysis,
      name,
      example_article
    } = this.props;
    //console.log(this.props.title.length === 0)
    return (
      <React.Fragment>
        <div className="col-sm-8">
          <div className="bg-picture card-box">
            <WriteContent className={style.zhentiContent}  loader={this.loadWriteContents}/>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card-box">
            <ul className="nav nav-tabs">
              <li role="presentation"  className="active">
                  <a href="#multiOption" role="tab" data-toggle="tab">多项选择</a>
              </li>
              <li role="presentation">
                 <a href="#AnswerAnalysis" role="tab" data-toggle="tab">答案解析</a>
              </li>
               <li role="presentation">
                   <a href="#uploadArticle" role="tab" data-toggle="tab">上传文章</a>
               </li>
               <li role="presentation">
                   <a href="#viewArticle" role="tab" data-toggle="tab">已传文章</a>
               </li>
               <li role="presentation">
                  <a href="#EgArticle" role="tab" data-toggle="tab">参考范文</a>
               </li>
           </ul>
           <div className="tab-content">
             <div role="tabpanel" className="tab-pane fade in active" id="multiOption">
               <MultOptionQuestons/>
             </div>
             <div role="tabpanel" className="tab-pane fade" id="AnswerAnalysis">
               {article_analysis.map((onePara , key) =>
               <div key = {key}>
                 <p className = {style.type}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara.error_type} </p>
                 <p> &nbsp;&nbsp;&nbsp;&nbsp;{onePara.error_analysis} </p>
               </div>
               )}
             </div>
             <div role="tabpanel" className="tab-pane fade" id="uploadArticle">
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
        {/* <div className="col-sm-4">
          <div className="card-box">
          {
            this.props.title.length === 0 ? null :
            <div className={style.option}>
               <MultOptionQuestons/>
            </div>
           }
          </div>
        </div> */}
        {/* <div className = {style.whoZhentiPart}>
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

        </div> */}
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
      title: state.WriteContent.title,
      article_analysis: state.PortTest.content, // 文章的答案分析
      name: state.WriteContent.name, // 参考范文的题目
      example_article: state.WriteContent.example_article, // 参考范文的具体内容
      userInputText: state.EditText.userInputText, // 用户输入到文本框中的文字内容
    }),
    dispatch => ({
      ...bindActionCreators( WriteContentActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( EditTextActions , dispatch ),
      ...bindActionCreators( ViewFinishedTextActions , dispatch )
    })

  )],
  LunZhengZhenTi
);
