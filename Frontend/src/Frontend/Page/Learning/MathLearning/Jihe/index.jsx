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
    this.pingMianCN = ["三角形" , "四边形" , "圆与扇形"];
    this.pingMianPY = ["sanjiaoxing" , "sibianxing" , "yuanyushanxing"];
    this.jieXiCN = ["平面直角坐标系" , "直线的方程" , "圆的方程"];
    this.jieXiPY = ["pingmianzhijiaozuobiaoxi" , "zhixiandefangcheng" , "yuandefangcheng"];
    this.liTiCN = ["长方体" , "柱体、球体"];
    this.liTiPY = ["changfangti" , "zhutiqiuti"];
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

              <h4 className="header-title m-t-0 m-b-30 text-primary">平面几何</h4>
              {this.pingMianCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"pingmianjihe",
                                sectionPY:nameToPinyin(this.pingMianCN, this.pingMianPY, sectionname),
                                chapterCN:"平面几何", sectionCN: sectionname }) } }
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

              <h4 className="header-title m-t-0 m-b-30 text-primary">解析几何</h4>
              {this.jieXiCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"jiexijihe",
                                sectionPY:nameToPinyin(this.jieXiCN, this.jieXiPY, sectionname),
                                chapterCN:"解析几何", sectionCN: sectionname }) } }
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

              <h4 className="header-title m-t-0 m-b-30 text-primary">立体几何</h4>
              {this.liTiCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"zhengshuyufenshi",
                                sectionPY:nameToPinyin(this.liTiCN, this.liTiPY, sectionname),
                                chapterCN:"立体几何", sectionCN: sectionname }) } }
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
          partPY = "jihe" chapterPY = {this.state.chapterPY} sectionPY = {this.state.sectionPY}
          partCN = "几何" chapterCN = {this.state.chapterCN} sectionCN = {this.state.sectionCN}
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
