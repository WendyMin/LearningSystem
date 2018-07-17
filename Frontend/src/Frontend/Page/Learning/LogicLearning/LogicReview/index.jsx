import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  view as LogicReviewModel,
  actions as LogicReviewModelActions
} from 'Connected/LogicReviewModel';
import { actions as ZhentiPerYearTongjiActions } from 'Connected/ZhentiPerYearTongji';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

import Button from 'UI/Button';
import Note from 'UI/Note';
import LogicReviewError from 'UI/LogicReviewError';
import LogicReviewContent from 'Page/Learning/LogicLearning/LogicReviewContent';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LogicReview extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      reviewContent: false,
      tongjiShow: false
    }
  }

  getReviewChapterName = () => {
    this.props.getLogicReviewChapterName({
      url: "/api/logicGetReviewChapterName",
      body: {
        username: this.props.username
      }
    })
  }

  getReviewTongji = () => {
    this.setState({tongjiShow: true , typeSelect: false});
    this.props.loadZhentiTongji({
      url: "/api/logicReviewTimeTongji",
      body: {
        username: this.props.username
      },
    });
  }

  requestChapterContent = (chapterName) => {
    this.setState({reviewContent: true , tongjiShow: false});
  }

  componentDidMount(){
    this.getReviewChapterName();
  }


  render(){
    const {
      whetherHaveFinishedChapter, // 1 表示用户有学习完成的章节，0 没有学习完成的章节, 2 用户没有做过入口测试
      ordinaryChapterName,
      importantChapterName,
      setChapter,
      choice,
      data,
      setLearningType
    } = this.props;
    // console.log(this.props)
    console.log(typeof(whetherHaveFinishedChapter),typeof(whetherHaveFinishedChapter === 2),typeof(whetherHaveFinishedChapter===0))
    console.log(whetherHaveFinishedChapter === 2 ,whetherHaveFinishedChapter===0)

    return(
      <React.Fragment>
        { this.props.learningType == "" ?
        <div>
          {
            typeof(whetherHaveFinishedChapter) == "string" ? null :
            <div>
              {whetherHaveFinishedChapter === 2 ? <Note info = "您还没完成入口测试，请先完成入口测试 !" onClick={()=>this.props.setSubjectFunctionSelect(0)}/> :
              whetherHaveFinishedChapter === 0 ? <Note info = "您目前还没有学习完成的章节，请先进行学习 !" onClick={()=>this.props.setSubjectFunctionSelect(1)}/> :
              <div className="row">
                  <div className="col-lg-6">
                    <div className="card-box">
                       <div align="center" style = {{"fontSize":"20px","color":"#188ae2"}}>重点复习</div><br/>
                       {
                         importantChapterName.length == 0 ? <div align="center" style = {{"fontSize":"18px","color":"#ff5b5b"}}>您目前没有需要重点复习的章节</div> :
                         <div>
                           <strong align = "center"><div style = {{"color":"#f9c851"}}>请点击选择要复习的章节</div></strong>
                           {importantChapterName.map((oneChapter , key) =>
                           <div key = {key}><br/><li style = {oneChapter == choice ? {"color":"#71b6f9"} : null}
                             onClick = {() => {this.setState({reviewContent: true , tongjiShow: false});setChapter(oneChapter);setLearningType(oneChapter)}}
                             >{oneChapter}</li></div>)}
                         </div>
                       }
                    </div>
                  </div>
                  {/* <!-- end col --> */}

                  <div className="col-lg-6">
                    <div className="card-box">
                      <div align="center" style = {{"fontSize":"20px","color":"#188ae2"}}>一般复习</div><br/>
                      {
                        ordinaryChapterName.length == 0 ? <div align="center" style = {{"fontSize":"18px","color":"#ff5b5b"}}>您目前没有需要重点复习的章节</div> :
                        <div>
                          <strong align = "center"><div style = {{"color":"#f9c851"}}>请点击选择要复习的章节</div></strong>
                          {ordinaryChapterName.map((oneChapter , key) =>
                          <div key = {key}><br/><li style = {oneChapter == choice ? {"color":"#71b6f9"} : null}
                            onClick = {() => {this.setState({reviewContent: true , tongjiShow: false});setChapter(oneChapter);setLearningType(oneChapter)}}
                            >{oneChapter}</li></div>)}
                        </div>
                      }
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div>

                    {/* <Button classNameName = {style.chakanTongjiButton} text = "点击查看复习数据统计" onClick = {this.getReviewTongji}/> */}
                  </div>
                </div>

              }
            </div>
          }
        </div>
        :
        this.state.reviewContent ? <LogicReviewContent/> :
        this.state.tongjiShow ? <LogicReviewError data = {data}/> : null
        }
      </React.Fragment>
    )
  }




}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      username: state.UserManager.name,
      whetherHaveFinishedChapter: state.LogicReviewModel.whetherHaveFinishedChapter,
      ordinaryChapterName: state.LogicReviewModel.ordinaryChapterName,
      importantChapterName: state.LogicReviewModel.importantChapterName,
      choice: state.LogicReviewModel.choice,
      data: state.ZhentiPerYearTongji.tongji,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      ...bindActionCreators( LogicReviewModelActions , dispatch ),
      ...bindActionCreators( ZhentiPerYearTongjiActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
    })
  )],
  LogicReview
);
