import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionsCreators from 'actions';
import style from 'style';
import { actions as PortTestActions } from 'Connected/PortTest';

class Feedback extends React.PureComponent {
  constructor( props ){
    super( props );
    this.text = "";
  }


  /*  实时监测输入框中的文字变化  */
  SwapTxt = () => {
    this.text = document.getElementById("eml").value; // 读取文本框中的文本
    this.text = this.text.replace(/\n/g, '_@').replace(/\s/g, '_#'); // 将空格替换成 _# , 换行替换成 _@
    // this.props.recordUserInputText(text); // 将用户输入的文本保存下来 ， 触发动作保存
  }

  submit = () => {
    this.props.loadPortContent({
      url: "/api/sendFeedback",
      body: {
        text: this.text,
      }
    })
  }

  render(){

    //console.log(this.props);

    return (
      <div>
        <span className="input-icon icon-right">
            <textarea id="eml" rows="20" className="form-control" placeholder="请输入您的反馈" onKeyUp = {()=>this.SwapTxt()} onChange = {() => this.SwapTxt()}></textarea>
        </span>
        <br/>&nbsp;&nbsp;
        <Button onClick = {this.submit()} text = "提交"/>
     </div>
    );
  }
};

export default connect(
  ({ Feedback: ownState }) => ({
    success: ownState.success,
  }),
  dispatch => ({
    ...bindActionCreators( actionsCreators , dispatch ),
    ...bindActionCreators( PortTestActions , dispatch),
    // ...bindActionCreators( EnglishArticleActions , dispatch ),
  })
)( Feedback );
