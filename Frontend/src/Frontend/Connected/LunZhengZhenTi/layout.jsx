import React from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { connect } from 'react-redux';
import style from 'style';
import Info from 'UI/Info';

class LunZhengZhenTi extends React.PureComponent {

 render(){
    const {
      whetherHaveFinishedChapter,
      ordinaryChapterName,
      importantChapterName,
      loader,
      setChapter,
      choice
    } = this.props;
    console.log(this.props);

    return (
      <div className="container">
      <div className = {style.zhongdianReview}>
        <h4 className = {style.biaoti}>重点复习</h4>
        {
          importantChapterName.length == 0 ? <Info info = "您目前没有需要重点复习的章节"/> :
          <div>
            <strong align = "center"><div style = {{"color":"red"}}>请点击选择要复习的章节</div></strong>
            {importantChapterName.map((oneChapter , key) =>
            <div key = {key}><br/><li style = {oneChapter == choice ? {"color":"blue"} : null}
              onClick = {() => {setChapter(oneChapter);this.requestChapterContent(oneChapter)}}>{oneChapter}</li></div>)}
          </div>
        }
      </div>

      <div className = {style.putongReview}>
        <h4 className = {style.biaoti}>一般复习</h4>
        {
          ordinaryChapterName.length == 0 ? <Info info = "您目前没有需要一般复习的章节"/> :
          <div>
            <strong align = "center"><div style = {{"color":"red"}}>请点击选择要复习的章节</div></strong>
            {ordinaryChapterName.map((oneChapter , key) =>
            <div key = {key}><br/><li style = {oneChapter == choice ? {"color":"blue"} : null}
              onClick = {() => {setChapter(oneChapter);this.requestChapterContent(oneChapter)}}>{oneChapter}</li></div>)}
          </div>
        }
      </div>



      </div>
    );
 }
};
//export default LunZhengZhenTi;

export default connect(
  ({ LunZhengZhenTi: ownState }) => ({
    whetherHaveFinishedChapter: ownState.whetherHaveFinishedChapter,
    ordinaryChapterName: ownState.ordinaryChapterName,
    importantChapterName: ownState.importantChapterName,
    choice: ownState.choice
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( LunZhengZhenTi );
