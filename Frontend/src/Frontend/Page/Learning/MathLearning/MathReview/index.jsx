import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import { actions as MathReviewPortActions } from 'Connected/MathReviewPort';

import Note from 'UI/Note';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class MathReview extends React.PureComponent {

  componentDidMount(){
    this.getMathReviewList();
  }

  getMathReviewList = () => {
    this.props.loadReviewList({
      url: "/api/math_getReviewList",
      body: {
        // username: this.props.username,
        username: "202513",
      }
    })
  }

  render(){

    const {
      setLearningType,
      learningType,
      reviewlistpass,
      reviewlistunpass,
    } = this.props;

    // console.log(reviewlistunpass)

    return(
      <React.Fragment>


        <div className="row">

            <div className="col-lg-6">
              <div className="card-box">
                <div align="center" style = {{"fontSize":"20px","color":"#188ae2"}}>已达标</div><br/>
                {
                  reviewlistpass == undefined?null:
                  <div>
                  {reviewlistpass.map(( sectionname , key ) =>
                    <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                      <li>
                          <div className="card-box kanban-box">
                              <div className="kanban-detail"
                                  // onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                  //   chapterPY:"zhengshuyufenshu",
                                  //   sectionPY:nameToPinyin(this.zhengShuYuFenShuCN, this.zhengShuYuFenShuPY, sectionname),
                                  //   chapterCN:"整数与分数", sectionCN: sectionname }) } }
                                >
                                  <span className="label label-primary pull-right">Pass</span>
                                  <h4><a>{sectionname[0]}&nbsp;&nbsp;{sectionname[1]}</a> </h4>
                              </div>
                           </div>
                      </li>
                    </ul>
                  )}
                  </div>
                }
                <br/>
             </div>
           </div>

             <div className="col-lg-6">
               <div className="card-box">
                  <div align="center" style = {{"fontSize":"20px","color":"#188ae2"}}>未达标</div><br/>
                  {
                    reviewlistunpass == undefined?null:
                    <div>
                    {reviewlistunpass.map(( sectionname , key ) =>
                      <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                        <li>
                            <div className="card-box kanban-box">
                                <div className="kanban-detail"
                                    // onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                    //   chapterPY:"zhengshuyufenshu",
                                    //   sectionPY:nameToPinyin(this.zhengShuYuFenShuCN, this.zhengShuYuFenShuPY, sectionname),
                                    //   chapterCN:"整数与分数", sectionCN: sectionname }) } }
                                  >
                                    <span className="label label-primary pull-right">Unpass</span>
                                    <h4><a>{sectionname[0]}&nbsp;&nbsp;{sectionname[1]}</a> </h4>
                                </div>
                             </div>
                        </li>
                      </ul>
                    )}
                    </div>
                  }
                  <br/>
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
      learningType: state.LearningTypeSelect.learningType,
      reviewlistpass: state.MathReviewPort.reviewlist.Reach_standard,
      reviewlistunpass: state.MathReviewPort.reviewlist.Unreach_standard,
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( MathReviewPortActions , dispatch ),
    })
  )],
  MathReview
);
