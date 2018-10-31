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
import MathLearningTypeSelect from 'Page/Learning/MathLearning/MathLearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import { actions as ButtonExpandActions } from 'Connected/ButtonExpand';
import { actions as MathGetKnowledgeActions } from 'Connected/MathGetKnowledge';

class Suanshu extends React.PureComponent {
  constructor( props ){
    super( props );
    this.zhengShuYuFenShu = ["整数及其运算" , "有理数与实数" , "绝对值" , "平均值" , "比与比例"];
    this.yingYongTi = ["销售问题" , "行程问题" , "工程问题" , "浓度问题" , "分段计费" , "集合问题"];
    this.state = {
      showChapter: true,
      showKnowledge: false
    }
    const {
      setLearningType,
      learningType,
    } = this.props;
  }

  getMathKnowledge = () => {
    this.props.loadMathKnowledge({
      url: "/api/MathGetKnowledge",
      body: {
        type: "suanshu",
        chapter_name: "zhengshu",
        title: "zheng"
      }
    })

  }

  render(){

    const {
      setLearningType,
      learningType,
      setButtonChoice
    } = this.props;

    return(
      <React.Fragment>
        {this.state.showChapter ?
        <div>
          <div className="col-md-6">
            <div className="card-box taskboard-box">

              <h4 className="header-title m-t-0 m-b-30 text-primary">整数与分数</h4>
              {this.zhengShuYuFenShu.map(( oneName , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                            onClick = {() => {this.getMathKnowledge() ; this.setState({showChapter: false , showKnowledge: true})}}
                            //onClick = {() => {setButtonChoice(oneName);this.loadZhaocuoContent( oneName );this.setState({typeSelect:false})}}
                            >
                              <span className="label label-danger pull-right">Begin</span>
                              <h4><a //onClick = {() => {setButtonChoice(oneName);this.loadZhentiContent( oneName );this.setState({zhenTiSelect:false})}}
                              >{oneName}</a> </h4>
                          </div>
                       </div>
                  </li>
                </ul>
              )}

            </div>
          </div>

          <div className="col-md-6">
            <div className="card-box taskboard-box">

              <h4 className="header-title m-t-0 m-b-30 text-warning">应用题</h4>
              {this.yingYongTi.map(( oneName , key ) =>
                <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                  <li>
                      <div className="card-box kanban-box">
                          <div className="kanban-detail"
                               onClick = {() => this.setState({showChapter: false , showKnowledge: true})}
                          //  onClick = {() => {setButtonChoice(oneName);this.loadMobanContent( oneName );this.setState({typeSelect:false})}}
                          >
                              <span className="label label-danger pull-right">Begin</span>
                              <h4><a //onClick = {() => {setButtonChoice(oneName);this.loadZhentiContent( oneName );this.setState({zhenTiSelect:false})}}
                              >{oneName}</a> </h4>
                          </div>
                       </div>
                  </li>
                </ul>
              )}

            </div>
          </div>
          {/* <div className="col-md-4" >
            <div className="card-box kanban-box">
              <div className="kanban-detail">
                  <span className="label label-primary pull-right">Unfinish</span>
                  <div className={style.title18}>
                    第一章 整数与分数
                  </div>
                  <ul className="list-inline m-b-0">
                      <li>
                          <br/>
                          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5"
                                  onClick = {() => this.setState({showChapter: false , showKnowledge: true})}
                            >
                            知识点1 整数及其运算</button>
                          <br/>
                          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5" >
                            知识点2 有理数与实数</button>
                          <br/>
                          <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5" >
                            知识点3 绝对值</button>
                          <br/>
                          <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5" >
                            知识点4 平均值</button>
                          <br/>
                          <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5" >
                            知识点5 比与比例</button>
                      </li>
                  </ul>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-4" >
            <div className="card-box kanban-box">
              <div className="kanban-detail">
                  <span className="label label-primary pull-right">Unfinish</span>
                  <div className={style.title18}>
                    第二章 应用题
                  </div>
                  <ul className="list-inline m-b-0">
                      <li>
                          <br/>
                          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5" >
                            知识点1 销售问题</button>
                          <br/>
                          <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5" >
                            知识点2 行程问题</button>
                          <br/>
                          <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5" >
                            知识点3 工程问题</button>
                          <br/>
                          <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5" >
                            知识点4 浓度问题</button>
                          <br/>
                          <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5" >
                            知识点5 分段计费</button>
                          <br/>
                          <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5" >
                            知识点6 集合问题</button>
                      </li>
                  </ul>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-4" >
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
          </div> */}
        </div>
        :
        this.state.showKnowledge ?
        <MathLearningTypeSelect chapterNum = {this.chapterNum} knowledgeNum = {this.knowledgeNum}/>
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
      content: state.MathGetKnowledge.content
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( ButtonExpandActions , dispatch ),
      ...bindActionCreators( MathGetKnowledgeActions , dispatch )
    })
  )],
  Suanshu
);
