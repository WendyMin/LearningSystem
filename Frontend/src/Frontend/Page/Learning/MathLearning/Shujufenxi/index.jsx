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

// import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import MathLearningTypeSelect from 'Page/Learning/MathLearning/MathLearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import { actions as ButtonExpandActions } from 'Connected/ButtonExpand';

 import nameToPinyin from "Algorithm/nameToPinyin";

class Suanshu extends React.PureComponent {
  constructor( props ){
    super( props );
    this.paiLieZuHeCN = ["加法原理与乘法原理" , "排列" , "组合" , "题型总结"];
    this.paiLieZuHePY = ["jiafayuanliyuchengfayuanli" , "pailie" , "zuhe" , "tixingzongjie"];
    this.gaiLvTongJiCN = ["事件及其概率运算" , "古典概型" , "独立事件" , "伯努利概型" , "题型总结"];
    this.gaiLvTongJiPY = ["shijianjiqigailvyunsuan" , "gudiangaixing" , "dulishijian" , "bonuligaixing" , "tixingzongjie"];
    this.shuJuMiaoShuCN = ["方差与标准差" , "数据的图表表示"];
    this.shuJuMiaoShuPY = ["fangchayubiaozhuncha" , "shujudetubiaobiaoshi"];
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

              <h4 className="header-title m-t-0 m-b-30 text-primary">排列组合</h4>
              {this.paiLieZuHeCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"pailiezuhe",
                                sectionPY:nameToPinyin(this.paiLieZuHeCN, this.paiLieZuHePY, sectionname),
                                chapterCN:"排列组合", sectionCN: sectionname }) } }
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

              <h4 className="header-title m-t-0 m-b-30 text-primary">概率统计</h4>
              {this.gaiLvTongJiCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"gailvtongji",
                                sectionPY:nameToPinyin(this.gaiLvTongJiCN, this.gaiLvTongJiPY, sectionname),
                                chapterCN:"概率统计", sectionCN: sectionname }) } }
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

              <h4 className="header-title m-t-0 m-b-30 text-primary">数据描述</h4>
              {this.shuJuMiaoShuCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"shujumiaoshu",
                                sectionPY:nameToPinyin(this.shuJuMiaoShuCN, this.shuJuMiaoShuPY, sectionname),
                                chapterCN:"数据描述", sectionCN: sectionname }) } }
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
          partPY = "shujufenxi" chapterPY = {this.state.chapterPY} sectionPY = {this.state.sectionPY}
          partCN = "数据分析" chapterCN = {this.state.chapterCN} sectionCN = {this.state.sectionCN}
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
