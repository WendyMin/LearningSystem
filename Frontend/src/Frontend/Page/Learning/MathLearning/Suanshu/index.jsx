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
    this.zhengShuYuFenShuCN = ["整数及其运算" , "有理数与实数" , "绝对值" , "平均值" , "比与比例"];
    this.zhengShuYuFenShuPY = ["zhengshujiqiyunsuan", "youlishuyushishu", "jueduizhi", "pingjunzhi", "biyubili"];
    this.yingYongTiCN = ["销售问题" , "行程问题" , "工程问题" , "浓度问题" , "分段计费" , "集合问题"];
    this.yingYongTiPY = ["xiaoshouwenti" , "xingchengwenti" , "gongchengwenti" , "nongduwenti" , "fenduanjifei" , "jihewenti"];
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

              <h4 className="header-title m-t-0 m-b-30 text-primary">整数与分数</h4>
              {this.zhengShuYuFenShuCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"zhengshuyufenshu",
                                sectionPY:nameToPinyin(this.zhengShuYuFenShuCN, this.zhengShuYuFenShuPY, sectionname),
                                chapterCN:"整数与分数", sectionCN: sectionname }) } }
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

              <h4 className="header-title m-t-0 m-b-30 text-primary">应用题</h4>
              {this.yingYongTiCN.map(( sectionname , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                              onClick = {() => { this.setState({showChapter: false , showKnowledge: true,
                                chapterPY:"yingyongti",
                                sectionPY:nameToPinyin(this.yingYongTiCN, this.yingYongTiPY, sectionname),
                                chapterCN:"应用题", sectionCN: sectionname }) } }
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
          partPY = "suanshu" chapterPY = {this.state.chapterPY} sectionPY = {this.state.sectionPY}
          partCN = "算术" chapterCN = {this.state.chapterCN} sectionCN = {this.state.sectionCN}
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
