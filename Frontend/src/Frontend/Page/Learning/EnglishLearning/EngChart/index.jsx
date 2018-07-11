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

// import WriteGraph from 'UI/WriteGraph';
import { actions as PortTestActions } from 'Connected/PortTest';
import {
  view as EnglishChartPort,
  actions as EnglishChartPortActions
} from 'Connected/EnglishChartPort';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import EngLearningTypeSelect from 'Page/Learning/EnglishLearning/EngLearningTypeSelect';

class EngChart extends React.PureComponent {
  constructor( props ){
    super( props );
    const {
      setLearningType,
      learningType,
    } = this.props;
  }

  componentDidMount(){
    this.function();
  }

  function = () => {
    this.props.loadPortContent({
      url: "/api/eng_getWordRateAll",
      body: {
        username:  this.props.username,
        // articleId: 18,
      }
    })
  }

  // function = () => {
  //   this.props.loadWordRateAll({
  //     url: "/api/eng_getWordRateAll",
  //     body: {
  //       username:  this.props.username,
  //     }
  //   })
  // }

  render(){

    const {
      content,
      setLearningType,
      learningType,
    } = this.props;

    console.log(content);

    return(
      <React.Fragment>
          <div>
            {
              learningType == "英语进入学习" ?
              <EngLearningTypeSelect />
              :
              <div>
                {
                  content == undefined ?
                  <div class="panel panel-custom panel-border">
                    <div class="panel-heading">
                        <h3 class="panel-title">Sorry</h3>
                    </div>
                    <div class="panel-body">
                      <div className={style.text}>您尚未学习，没有统计数据，请立即学习</div>
                      <br/>
                      <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                         onClick = {() => {setLearningType("英语进入学习");}}>
                         进入学习</button>
                    </div>
                  </div>

                  :

                  <div className="card-box">
                    <p className={style.title}>累计生词类型分析</p>
                    {/* <WriteGraph/> */}
                    <br/>
                    <p className={style.title1}>不认识的单词在各单词库占比</p>
                    <div>
                      <div>
                        <table className="table table-bordered m-0" align = "center">
                          <thead>
                            <tr>
                              <th>中考</th>
                              <th>高考</th>
                              <th>四级</th>
                              <th>六级</th>
                              <th>考研</th>
                              <th>超纲</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>{content.zhongkao_rate}</th>
                              <th>{content.gaokao}</th>
                              <th>{content.siji}</th>
                              <th>{content.liuji}</th>
                              <th>{content.kaoyan}</th>
                              <th>{content.chaogang}</th>
                            </tr>
                          </tbody>
                        </table>
                        <br/>
                      </div>
                    </div>
                    <br/>
                    {/* <div className={style.pageTitle}>考研单词所占百分比折线图</div> */}
                  </div>


                }
              </div>

            }

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
      content: state.PortTest.content,
      // content: state.EnglishChartPort.wordrateAll,
      choice: state.SubjectFunctionSelect.choice,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( EnglishChartPortActions , dispatch ),
    })
  )],
  EngChart
);
