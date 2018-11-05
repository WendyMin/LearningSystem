import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import EngLearningTypeSelect from 'Page/Learning/EnglishLearning/EngLearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

class Daishu extends React.PureComponent {
  constructor( props ){
    super( props );
    this.hanShu = ["集合" , "函数" , "代数方程" , "不等式"];
    this.shuLieJiYingYong = ["普通数列" , "等比数列" , "等差数列" ];
    this.zhengShiYuFenShi = ["整式" , "分式"];
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
        <div className="col-md-4">
          <div className="card-box taskboard-box">

            <h4 className="header-title m-t-0 m-b-30 text-primary">函数、方程及其应用</h4>
            {this.hanShu.map(( oneName , key ) =>
              <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                <li>
                    <div className="card-box kanban-box">
                        <div className="kanban-detail" onClick = {() => {setButtonChoice(oneName);this.loadZhaocuoContent( oneName );this.setState({typeSelect:false})}}>
                            <span className="label label-primary pull-right">Begin</span>
                            <h4><a>{oneName}</a> </h4>
                        </div>
                     </div>
                </li>
              </ul>
            )}

          </div>
        </div>

        <div className="col-md-4">
          <div className="card-box taskboard-box">

            <h4 className="header-title m-t-0 m-b-30 text-warning">数列及其应用</h4>
            {this.shuLieJiYingYong.map(( oneName , key ) =>
              <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                <li>
                    <div className="card-box kanban-box">
                        <div className="kanban-detail" onClick = {() => {setButtonChoice(oneName);this.loadMobanContent( oneName );this.setState({typeSelect:false})}}>
                            <span className="label label-primary pull-right">Begin</span>
                            <h4><a //onClick = {() => {setButtonChoice(oneName);this.loadZhentiContent( oneName );this.setState({zhenTiSelect:false})}}
                            >{oneName}</a> </h4>
                        </div>
                     </div>
                </li>
              </ul>
            )}

          </div>
        </div>

        <div className="col-md-4">
          <div className="card-box taskboard-box">

            <h4 className="header-title m-t-0 m-b-30 text-success">整式与分式</h4>
            {this.zhengShiYuFenShi.map(( oneName , key ) =>
              <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                <li>
                    <div className="card-box kanban-box">
                        <div className="kanban-detail" onClick = {() => {setButtonChoice(oneName);this.loadMobanContent( oneName );this.setState({typeSelect:false})}}>
                            <span className="label label-primary pull-right">Begin</span>
                            <h4><a //onClick = {() => {setButtonChoice(oneName);this.loadZhentiContent( oneName );this.setState({zhenTiSelect:false})}}
                            >{oneName}</a> </h4>
                        </div>
                     </div>
                </li>
              </ul>
            )}

          </div>
        </div>


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
  Daishu
);
