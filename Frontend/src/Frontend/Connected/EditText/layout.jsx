
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';
import style from 'style';

class EditText extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  componentWillMount() {
    const {loadLastSaveTextContent} = this.props;
    loadLastSaveTextContent();
  }

  componentWillReceiveProps(NextProps){
    //console.log(this.props.lastSaveText , NextProps.lastSaveText)
    if(this.props.lastSaveText!==NextProps.lastSaveText){
      var all_text = "";
      for (var onePara in NextProps.lastSaveText.content){
        all_text += "      ";
        all_text += NextProps.lastSaveText.content[onePara];
        all_text += "\n";
      }
      document.getElementById("eml").value = all_text; // 给文本框赋初始值
    }
  }

  /*  实时监测输入框中的文字变化  */
  SwapTxt = () => {
    var text = document.getElementById("eml").value; // 读取文本框中的文本
    text = text.replace(/\n/g, '_@').replace(/\s/g, '_#'); // 将空格替换成 _# , 换行替换成 _@
    this.props.recordUserInputText(text); // 将用户输入的文本保存下来 ， 触发动作保存
  }


  render(){
    const {
      inputSizeStyle,
      buttonStyle,
      loadLastSaveText,
      saveText,
      submitText,
      loadAllSubmitText,
      lastSaveText,  // 最新一次保存的文本
      allSubmitText   // 所有提交的文本
    } = this.props;
    //console.log(this.props);

    return (
      <div className="container">
        {/* <input type = "txt" id = "eml"/> */}
        <textarea id = "eml" className = {inputSizeStyle} onKeyUp = {()=>this.SwapTxt()} onChange = {() => this.SwapTxt()}></textarea>
        <div className = {buttonStyle}>
          <button onClick = {saveText}> 暂存文本 </button>&nbsp;&nbsp;
          <button onClick = {submitText}> 确认提交 </button>
        </div>
      </div>
    );
  }
};

export default connect(
  ({ EditText: ownState }) => ({
    lastSaveText: ownState.lastSaveText,
    allSubmitText: ownState.allSubmitText
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( EditText );
