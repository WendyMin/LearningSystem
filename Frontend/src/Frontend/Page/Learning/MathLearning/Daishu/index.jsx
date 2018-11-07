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

// import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import MathLearningTypeSelect from 'Page/Learning/MathLearning/MathLearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import { actions as ButtonExpandActions } from 'Connected/ButtonExpand';

 import nameToPinyin from "Algorithm/nameToPinyin";

class Suanshu extends React.PureComponent {
  constructor( props ){
    super( props );
    this.hanShuCN = ["集合" , "函数" , "代数方程" , "不等式"];
    this.hanShuPY = ["jihe" , "hanshu" , "daishufangcheng" , "budengshi"];
    this.shuLieJiYingYongCN = ["普通数列" , "等比数列" , "等差数列" ];
    this.shuLieJiYingYongPY = ["putongshulie" , "dengbishulie" , "dengchashulie" ];
    this.zhengShiYuFenShiCN = ["整式" , "分式"];
    this.zhengShiYuFenShiPY = ["zhengshi" , "fenshi"];
    this.state = {
      showChapter: true,
      showKnowledge: false,
      chapterPY: null,
      sectionPY: null,
      chapterCN: null,
      sectionCN: null,
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
      setButtonChoice,
    } = this.props;

    // console.log(this.state.chapterName);

    return(
      <React.Fragment>

        {this.state.showChapter ?
        <div>

          <div className="col-md-4">
            <div className="card-box taskboard-box">

              <h4 className="header-title m-t-0 m-b-30 text-primary">函数、方程及其应用</h4>
              {this.hanShuCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"hanshufangchengjiqiyingyong",
                                sectionPY:nameToPinyin(this.hanShuCN, this.hanShuPY, sectionname),
                                chapterCN:"函数、方程及其应用", sectionCN: sectionname }) } }
                            >
                              <span className="label label-primary pull-right">Begin</span>
                              <h4><a>{sectionname}</a> </h4>
                          </div>
                       </div>
                  </li>
                </ul>
              )}

            </div>
          </div>



          <div className="col-md-4">
            <div className="card-box taskboard-box">

              <h4 className="header-title m-t-0 m-b-30 text-primary">数列及其应用</h4>
              {this.shuLieJiYingYongCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"shuliejiqiyingyong",
                                sectionPY:nameToPinyin(this.shuLieJiYingYongCN, this.shuLieJiYingYongPY, sectionname),
                                chapterCN:"数列及其应用", sectionCN: sectionname }) } }
                            >
                              <span className="label label-primary pull-right">Begin</span>
                              <h4><a>{sectionname}</a> </h4>
                          </div>
                       </div>
                  </li>
                </ul>
              )}

            </div>
          </div>



          <div className="col-md-4">
            <div className="card-box taskboard-box">

              <h4 className="header-title m-t-0 m-b-30 text-primary">整式与分式</h4>
              {this.zhengShiYuFenShiCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"zhengshuyufenshi",
                                sectionPY:nameToPinyin(this.zhengShiYuFenShiCN, this.zhengShiYuFenShiPY, sectionname),
                                chapterCN:"整式与分式", sectionCN: sectionname }) } }
                            >
                              <span className="label label-primary pull-right">Begin</span>
                              <h4><a>{sectionname}</a> </h4>
                          </div>
                       </div>
                  </li>
                </ul>
              )}

            </div>
          </div>





        </div>
        :
        this.state.showKnowledge ?
        <MathLearningTypeSelect
          partPY = "daishu" chapterPY = {this.state.chapterPY} sectionPY = {this.state.sectionPY}
          partCN = "代数" chapterCN = {this.state.chapterCN} sectionCN = {this.state.sectionCN}
        />
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
      choice: state.SubjectFunctionSelect.choice,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      // ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( ButtonExpandActions , dispatch ),
    })
  )],
  Suanshu
);
