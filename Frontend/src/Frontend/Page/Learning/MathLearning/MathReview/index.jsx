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
import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
// import { actions as ZhentiPerYearTongjiActions } from 'Connected/ZhentiPerYearTongji';
import changeAlpToNum from 'Algorithm/changeAlpToNum';

import Button from 'UI/Button';
import Note from 'UI/Note';
import LogicReviewError from 'UI/LogicReviewError';
import LogicReviewContent from 'Page/Learning/LogicLearning/LogicReviewContent';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class MathReview extends React.PureComponent {

  render(){

    return(
      <React.Fragment>


        <div className="row">

            <div className="col-lg-6">
              <div className="card-box">
                <div align="center" style = {{"fontSize":"20px","color":"#188ae2"}}>已达标</div><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             </div>
           </div>

             <div className="col-lg-6">
               <div className="card-box">
                  <div align="center" style = {{"fontSize":"20px","color":"#188ae2"}}>未达标</div><br/>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              </div>
            </div>

           </div>


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
      questions: state.SingleOptionQuestions.content,
      data: state.ZhentiPerYearTongji.tongji,
    }),
    dispatch => ({
      ...bindActionCreators( LogicReviewModelActions , dispatch ),
      ...bindActionCreators( ZhentiPerYearTongjiActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( ZhentiPerYearTongjiActions , dispatch ),
    })
  )],
  MathReview
);
