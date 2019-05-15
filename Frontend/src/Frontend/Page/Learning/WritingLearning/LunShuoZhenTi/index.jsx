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
import { actions as PortTestActions } from 'Connected/PortTest';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunShuoZhenTi extends React.PureComponent {

  constructor( props ){
    super( props );
    this.usertext = "",
    this.state = {
      uploadText: false,
      viewText: false,
      viewEgLiYi: false,
      viewEgArticle: false
    }
  }

  loadGongguContent = ( choice ) => {
    this.props.loadWriteContents({
      url: "/api/lunShuoZhenTiContent",
      body: {
        requestQuestion: choice
      }
    });
  }

  cankaoliyi = ( ) => {
    this.props.loadPortContent({
      url: "/api/lunshuoLiyi",
      body: {
        requestQuestion: this.props.choice
      }
    });
  }
  componentDidMount(){
    this.cankaoliyi();
  }

  liyiDisplay = (example_liyi) => {
    //console.log(example_liyi)
    this.RightLiyiType = [];
    this.RightLiyi = [];
    this.WrongLiyiType = [];
    this.WrongLiyi = [];
    for(var key in example_liyi.right_liyi){
      this.RightLiyiType.push(key);
      this.RightLiyi.push(example_liyi.right_liyi[key]);
    }
    for(var key in example_liyi.wrong_liyi){
      this.WrongLiyiType.push(key);
      this.WrongLiyi.push(example_liyi.wrong_liyi[key]);
    }
    //console.log(this.RightLiyi)
  }

  loadLastSaveTextContent = () => {
    console.log(this.props.username,this.props.choice)
    this.props.loadLastSaveText({
      url: "/api/lunShuoZanCunContent",
      body: {
        username: this.props.username,
        choice: this.props.choice
      }
    })
  }

  saveOrSubmitTextContent = ( flag ) => {
    console.log(this.props.username,this.props.choice,this.props.userInputText,flag)
    this.props.saveOrSubmitText({
      url: "/api/lunShuoSaveOrSubmitText",
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
      url: "/api/lunShuoAllSubmitText",
      body: {
        username: this.props.username,
        choice: this.props.choice
      }
    });
  }


  // loadLastSaveTextContent = () => {
  //   console.log(this.props.username,this.props.choice)
  //   this.props.loadLastSaveText({
  //     url: "/api/lunZhengZanCunContent",
  //     body: {
  //       username: this.props.username,
  //       choice: this.props.choice
  //     }
  //   })
  // }
  //
  // saveOrSubmitTextContent = ( flag ) => {
  //   this.props.saveOrSubmitText({
  //     url: "/api/lunZhengSaveOrSubmitText",
  //     body: {
  //       username: this.props.username,
  //       choice: this.props.choice,
  //       text: this.props.userInputText,
  //       saveOrSubmit: flag  // flag=0 暂存  , flag=1 提交
  //     }
  //   });
  // }
  //
  // loadAllSubmitTextContent = () => {
  //   this.props.loadAllSubmitText({
  //     url: "/api/lunZhengAllSubmitText",
  //     body: {
  //       username: this.props.username,
  //       choice: this.props.choice
  //     }
  //   });
  // }

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
      whichTextToView,
      example_liyi
    } = this.props;

    return (
      <React.Fragment>
        {choice !== "" ?
        <div>
          <div className="col-sm-8">
            <div className="bg-picture card-box">
          <div className={style.title}>
            <div className={style.zhentiMingcheng}>{choice}</div>
            <WriteContent className={style.zhentiContent}  loader={this.loadWriteContents}/>
          </div>
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
               <a href="#EgLiYi" role="tab" data-toggle="tab">参考立意</a>
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
           <div role="tabpanel" className="tab-pane fade" id="EgLiYi">
             <p className = {style.liyi}>正确立意</p>
             {example_liyi.right_liyi == undefined ? null :
               <div>
                 {this.liyiDisplay(example_liyi)}
                 {this.RightLiyi.map((one,key) =>
                   <p key = {key}><strong>{this.RightLiyiType[key]} : </strong>&nbsp;&nbsp;{one}</p>
                 )}
               </div>
             }
             <p className = {style.liyi}>错误立意</p>
             {example_liyi.wrong_liyi == undefined ? null :
               <div>
                 {this.WrongLiyi.map((one,key) =>
                   <p key = {key}><strong>{this.WrongLiyiType[key]} : </strong>&nbsp;&nbsp;{one}</p>
                 )}
               </div>
             }
           </div>
           <div role="tabpanel" className="tab-pane fade" id="EgArticle">
             <p className = {style.article_title}>{name}</p>
             {example_article.map((onePara , key) =>
               <p key = {key}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>
             )}
           </div>
        </div>

          {/* <div className={style.option}>
            <div className = {style.egArticleText}>
              <span onClick={() => this.setState({uploadText: true , viewText: false , viewEgArticle: false})}> 上传文章 </span>&nbsp;&nbsp;&nbsp;
              <span onClick={() => {this.setState({uploadText: false , viewText: true , viewEgArticle: false});this.loadAllSubmitText()}}> 已传文章 </span>&nbsp;&nbsp;&nbsp;
              <span onClick = {() => {this.setState({uploadText: false , viewText: false , viewEgLiYi: true , viewEgArticle: false});this.cankaoliyi()}}> 参考立意 </span>&nbsp;&nbsp;&nbsp;
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
              <div>
               {/* <div className = {style.egLiyiArticle}>
                <p className = {style.liyi}>正确立意</p>
                {example_liyi.right_liyi == undefined ? null :
                  <div>
                    {this.liyiDisplay(example_liyi)}
                    {this.RightLiyi.map((one,key) =>
                    <p key = {key}><strong>{this.RightLiyiType[key]} : </strong>&nbsp;&nbsp;{one}</p>
                  )}

                </div>}
                <p className = {style.liyi}>错误立意</p>
                {example_liyi.wrong_liyi == undefined ? null :
                  <div>
                    {this.WrongLiyi.map((one,key) =>
                    <p key = {key}><strong>{this.WrongLiyiType[key]} : </strong>&nbsp;&nbsp;{one}</p>
                  )}

                </div>}
              </div>

            }
            </div>
          </div>*/}
        </div>
      </div>
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
      whichTextToView: state.EditText.whichTextToView,
      example_liyi: state.PortTest.content,
    }),
    dispatch => ({
      ...bindActionCreators( WriteContentActions , dispatch ),
      ...bindActionCreators( EditTextActions , dispatch ),
      ...bindActionCreators( ViewFinishedTextActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch )
    })

  )],
  LunShuoZhenTi
);
