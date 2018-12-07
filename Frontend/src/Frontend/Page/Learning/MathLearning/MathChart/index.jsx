/** 显示用户在逻辑科目做过的所有章节的数据统计 **/
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';
import Note from 'UI/Note';

import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import { actions as MathChartPortActions } from 'Connected/MathChartPort';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class MathChart extends React.PureComponent{

  constructor( props ){
    super( props );
    this.suanshuCN = ["整数与分数" , "应用题"];
    this.daishuCN = ["函数、方程及其应用" , "数列及其应用" , "整式与分式"];
    this.jiheCN = ["平面几何" , "解析几何", "立体几何"];
    this.shujufenxiCN = ["排列组合" , "概率统计", "数据描述"];
  }

  componentDidMount(){
    this.getAllRate();
  }

  getAllRate = () => {
    this.props.loadMathAllRate({
      url: "/api/math_getAllRate",
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
      suanshu,
      daishu,
      jihe,
      shujufenxi,
    } = this.props;

    console.log(suanshu)

    return(
      <React.Fragment>

        <div className="card-box">
          <div className = {style.allChapterTongji}>
            <div className = {style.title}>您已经完成的所有章节统计信息如下：</div><br/>

              <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 算术 </div>
              <br/>
              {
                suanshu == undefined ? null :
                <div>
                {
                  this.suanshuCN.map(( chaptername, key1) =>
                  <div key={key1}>
                    <li style = {{"fontSize": "16px","lineHeight": "32px"}}>{chaptername}</li>
                    <table className="table table-bordered m-0" align = "center">
                      <thead>
                        <tr>
                          <th>知识点</th>
                          {suanshu[chaptername].title.map(( title , key2 ) =>
                            <th key={key2}>{title}</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>最新一次错误率</th>
                          {suanshu[chaptername].last_wrong_rate.map(( rate , key ) =>
                            <th key={key}>
                              {
                                suanshu[chaptername].done[key] == "0" ?
                                <span className="label label-default">未完成</span>
                                :
                                <div>
                                {(parseFloat(rate)*100).toFixed(1)}%
                                &nbsp;&nbsp;
                                {
                                  rate > suanshu[chaptername].average_wrong_rate[key] ?
                                  <i className="fa fa-long-arrow-up"></i>
                                  :
                                  rate < suanshu[chaptername].average_wrong_rate[key] ?
                                  <i className="fa fa-long-arrow-down"></i>
                                  :
                                  null
                                }
                                </div>
                              }
                            </th>
                          )}
                        </tr>
                        <tr>
                          <th>平均错误率</th>
                          {suanshu[chaptername].average_wrong_rate.map(( rate , key ) =>
                            <th key={key}>
                              {
                                suanshu[chaptername].done[key] == "0" ?
                                <span className="label label-default">未完成</span>
                                :
                                <div>{(parseFloat(rate)*100).toFixed(1)}%</div>
                              }
                            </th>
                          )}
                        </tr>
                      </tbody>
                    </table>
                    <br/>
                  </div>
                  )
                }
                </div>
              }



              <br/>
              <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 代数 </div>
              <br/>

              {
                daishu == undefined ? null :
                <div>
                {
                  this.daishuCN.map(( chaptername, key1) =>
                  <div key={key1}>
                    <li style = {{"fontSize": "16px","lineHeight": "32px"}}>{chaptername}</li>
                    <table className="table table-bordered m-0" align = "center">
                      <thead>
                        <tr>
                          <th>知识点</th>
                          {daishu[chaptername].title.map(( title , key2 ) =>
                            <th key={key2}>{title}</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>最新一次错误率</th>
                          {daishu[chaptername].last_wrong_rate.map(( rate , key ) =>
                            <th key={key}>
                            {
                              daishu[chaptername].done[key] == "0" ?
                              <span className="label label-default">未完成</span>
                              :
                              <div>
                              {(parseFloat(rate)*100).toFixed(1)}%
                              &nbsp;&nbsp;
                              {
                                rate > daishu[chaptername].average_wrong_rate[key] ?
                                <i className="fa fa-long-arrow-up"></i>
                                :
                                rate < daishu[chaptername].average_wrong_rate[key] ?
                                <i className="fa fa-long-arrow-down"></i>
                                :
                                null
                              }
                              </div>
                            }
                            </th>
                          )}
                        </tr>
                        <tr>
                          <th>平均错误率</th>
                          {daishu[chaptername].average_wrong_rate.map(( rate , key ) =>
                            <th key={key}>
                            {
                              daishu[chaptername].done[key] == "0" ?
                              <span className="label label-default">未完成</span>
                              :
                              <div>{(parseFloat(rate)*100).toFixed(1)}%</div>
                            }
                            </th>
                          )}
                        </tr>
                      </tbody>
                    </table>
                    <br/>
                  </div>
                  )
                }
                </div>
              }


              <br/>
              <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 几何 </div>
              <br/>

              {
                jihe == undefined ? null :
                <div>
                {
                  this.jiheCN.map(( chaptername, key1) =>
                  <div key={key1}>
                    <li style = {{"fontSize": "16px","lineHeight": "32px"}}>{chaptername}</li>
                    <table className="table table-bordered m-0" align = "center">
                      <thead>
                        <tr>
                          <th>知识点</th>
                          {jihe[chaptername].title.map(( title , key2 ) =>
                            <th key={key2}>{title}</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>最新一次错误率</th>
                          {jihe[chaptername].last_wrong_rate.map(( rate , key ) =>
                            <th key={key}>
                            {
                              jihe[chaptername].done[key] == "0" ?
                              <span className="label label-default">未完成</span>
                              :
                              <div>
                              {(parseFloat(rate)*100).toFixed(1)}%
                              &nbsp;&nbsp;
                              {
                                rate > jihe[chaptername].average_wrong_rate[key] ?
                                <i className="fa fa-long-arrow-up"></i>
                                :
                                rate < jihe[chaptername].average_wrong_rate[key] ?
                                <i className="fa fa-long-arrow-down"></i>
                                :
                                null
                              }
                              </div>
                            }
                            </th>
                          )}
                        </tr>
                        <tr>
                          <th>平均错误率</th>
                          {jihe[chaptername].average_wrong_rate.map(( rate , key ) =>
                            <th key={key}>
                            {
                              jihe[chaptername].done[key] == "0" ?
                              <span className="label label-default">未完成</span>
                              :
                              <div>{(parseFloat(rate)*100).toFixed(1)}%</div>
                            }
                            </th>
                          )}
                        </tr>
                      </tbody>
                    </table>
                    <br/>
                  </div>
                  )
                }
                </div>
              }


              <br/>
              <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 数据分析 </div>
              <br/>

              {
                shujufenxi == undefined ? null :
                <div>
                {
                  this.shujufenxiCN.map(( chaptername, key1) =>
                  <div key={key1}>
                    <li style = {{"fontSize": "16px","lineHeight": "32px"}}>{chaptername}</li>
                    <table className="table table-bordered m-0" align = "center">
                      <thead>
                        <tr>
                          <th>知识点</th>
                          {shujufenxi[chaptername].title.map(( title , key2 ) =>
                            <th key={key2}>{title}</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>最新一次错误率</th>
                          {shujufenxi[chaptername].last_wrong_rate.map(( rate , key ) =>
                            <th key={key}>
                            {
                              shujufenxi[chaptername].done[key] == "0" ?
                              <span className="label label-default">未完成</span>
                              :
                              <div>
                              {(parseFloat(rate)*100).toFixed(1)}%
                              &nbsp;&nbsp;
                              {
                                rate > shujufenxi[chaptername].average_wrong_rate[key] ?
                                <i className="fa fa-long-arrow-up"></i>
                                :
                                rate < shujufenxi[chaptername].average_wrong_rate[key] ?
                                <i className="fa fa-long-arrow-down"></i>
                                :
                                null
                              }
                              </div>
                            }
                            </th>
                          )}
                        </tr>
                        <tr>
                          <th>平均错误率</th>
                          {shujufenxi[chaptername].average_wrong_rate.map(( rate , key ) =>
                            <th key={key}>
                            {
                              shujufenxi[chaptername].done[key] == "0" ?
                              <span className="label label-default">未完成</span>
                              :
                              <div>{(parseFloat(rate)*100).toFixed(1)}%</div>
                            }
                            </th>
                          )}
                        </tr>
                      </tbody>
                    </table>
                    <br/>
                  </div>
                  )
                }
                </div>
              }


          </div>
          <br/>
        </div>



      </React.Fragment>
    )
  }
}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      suanshu: state.MathChartPort.content[0],
      daishu: state.MathChartPort.content[1],
      jihe: state.MathChartPort.content[2],
      shujufenxi: state.MathChartPort.content[3],
    }),
    dispatch => ({
      ...bindActionCreators( MathChartPortActions , dispatch ),
    })
  )],
  MathChart
);
