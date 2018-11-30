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

  constructor( props ){
    super( props );
    this.state = {
      showCuoti: false,
      showXinti: false,
      chapterCN: null,
      sectionCN: null,
    };
  }

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

    const {
      showCuoti,
      showXinti,
      chapterCN,
      sectionCN,
    } = this.state;

    // console.log(reviewlistunpass)

    return(
      <React.Fragment>

        {
          showCuoti ? <p>错题 {chapterCN} {sectionCN}</p> :
          showXinti ? <p>新题 {chapterCN} {sectionCN}</p> :
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
                            <div className="kanban-detail">
                              <span className="label label-primary pull-right">Unpass</span>
                              <div className={style.title18}> {sectionname[0]}&nbsp;&nbsp;{sectionname[1]}</div>
                              <ul className="list-inline m-b-0">
                                <li>
                                  <br/>
                                   <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5"
                                           onClick = {() => {this.setState({showCuoti: true , showXinti: false ,
                                           chapterCN: sectionname[0], sectionCN: sectionname[1] }) }}
                                           >错题集锦</button>
                                </li>
                              </ul>
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
                            <div className="kanban-detail">
                              <span className="label label-primary pull-right">Unpass</span>
                              <div className={style.title18}> {sectionname[0]}&nbsp;&nbsp;{sectionname[1]}</div>
                              <ul className="list-inline m-b-0">
                                <li>
                                  <br/>
                                   <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5"
                                           onClick = {() => {this.setState({showCuoti: true , showXinti: false ,
                                           chapterCN: sectionname[0], sectionCN: sectionname[1] }) }}
                                           >错题集锦</button>
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                                        onClick = {() => {this.setState({showCuoti: false , showXinti: true ,
                                        chapterCN: sectionname[0], sectionCN: sectionname[1] }) }}
                                        >新练习题</button>
                                </li>
                              </ul>
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
        }



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
