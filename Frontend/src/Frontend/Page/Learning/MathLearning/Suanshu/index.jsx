import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import UserManagerWindow from "Windows/UserManager";
import MathKnowledge from 'Page/Learning/MathLearning/MathKnowledge';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import EngLearningTypeSelect from 'Page/Learning/EnglishLearning/EngLearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

class Suanshu extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      showChapter: true,
      showKnowledge: false
    }
    const {
      setLearningType,
      learningType,
    } = this.props;
  }

  render(){

    const {
      setLearningType,
      learningType,
    } = this.props;

    return(
      <React.Fragment>
        {this.state.showChapter ?
        <div>
          <div className="col-md-4" >
            <div className="card-box kanban-box">
              <div className="kanban-detail">
                  <span className="label label-primary pull-right">Unfinish</span>
                  <div className={style.title18}>
                    第一章
                  </div>
                  <ul className="list-inline m-b-0">
                      <li>
                          <br/>
                          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5"
                                  onClick = {() => this.setState({showChapter: false , showKnowledge: true})}
                            >
                            知识点1</button>
                          <br/>
                          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5" >
                            知识点2</button>
                          <br/>
                          <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5" >
                            知识点3</button>
                      </li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4" >
            <div className="card-box kanban-box">
              <div className="kanban-detail">
                  <span className="label label-primary pull-right">Unfinish</span>
                  <div className={style.title18}>
                    第二章
                  </div>
                  <ul className="list-inline m-b-0">
                      <li>
                          <br/>
                          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5" >
                            知识点1</button>
                          <br/>
                          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5" >
                            知识点2</button>
                          <br/>
                          <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5" >
                            知识点3</button>
                      </li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4" >
            <div className="card-box kanban-box">
              <div className="kanban-detail">
                  <span className="label label-primary pull-right">Unfinish</span>
                  <div className={style.title18}>
                    第三章
                  </div>
                  <ul className="list-inline m-b-0">
                      <li>
                          <br/>
                          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5" >
                            知识点1</button>
                          <br/>
                          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5" >
                            知识点2</button>
                          <br/>
                          <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5" >
                            知识点3</button>
                      </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        :
        this.state.showKnowledge ?
        <MathKnowledge chapterNum = {this.chapterNum} knowledgeNum = {this.knowledgeNum}/>
        :
        null

        }




      </React.Fragment>
    )
  }




}

export default applyHOCs([
  asyncProcessControl({
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      // content: state.PortTest.content,
      choice: state.SubjectFunctionSelect.choice,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
    })
  )],
  Suanshu
);
