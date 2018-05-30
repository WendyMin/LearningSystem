import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import style from 'style';

class ViewFinishedText extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  render(){
    const {
      allSubmitTextName,   // 所有提交的文本的名称 ， eg 第一次提交文本 ...
      allSubmitText,  // 具体的提交内容
      recordUserChosedWhichTextToView, // 动作
      whichTextToView,  // 用户想要查看第几次提交的文本
      resetUserChosedWhichTextToView
    } = this.props;
    //console.log(this.props);

    return (
      <div className="container">
        {
          whichTextToView === "" ?
          <div>
            {
              allSubmitTextName.length == 0 ? <h6>您还没有提交过文件</h6>
              :
              <div>
                <h5 style = {{"color":"red"}} align = "center"> 您已经上传过的文章列表如下： </h5>
                <h6 style = {{"color":"blue"}} align = "center"> 点击可查看 </h6>
                {
                  allSubmitTextName.map((oneText , key) =>
                  <li key = {key} className = {whichTextToView === key ? style.chosedSubmitText : style.normalSubmitText} onClick = {() => recordUserChosedWhichTextToView(key)}
                    >{oneText}</li>
                )
                }
              </div>
            }
          </div>
          :
          <div><br/>
            {
              allSubmitText[whichTextToView].map((onePara , key) =>
              <p key = {key}>&nbsp;&nbsp;&nbsp;&nbsp;{onePara}</p>
              )
              }
              <button onClick = {resetUserChosedWhichTextToView}>返回列表</button>
            </div>
          }

      </div>
    );
  }
};

export default connect(
  ({ ViewFinishedText: ownState }) => ({
    allSubmitTextName: ownState.allSubmitTextName,
    allSubmitText: ownState.allSubmitText,
    whichTextToView: ownState.whichTextToView,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( ViewFinishedText );
