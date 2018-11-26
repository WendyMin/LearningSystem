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
    //算术
    this.zhengShuYuFenShuCN = ["整数及其运算" , "有理数与实数" , "绝对值" , "平均值" , "比与比例"];
    this.yingYongTiCN = ["销售问题" , "行程问题" , "工程问题" , "浓度问题" , "分段计费" , "集合问题"];
    //代数
    this.hanShuCN = ["集合" , "函数" , "代数方程" , "不等式"];
    this.shuLieJiYingYongCN = ["普通数列" , "等比数列" , "等差数列" ];
    this.zhengShiYuFenShiCN = ["整式" , "分式"];
    //几何
    this.pingMianCN = ["三角形" , "四边形" , "圆与扇形"];
    this.jieXiCN = ["平面直角坐标系" , "直线的方程" , "圆的方程"];
    this.liTiCN = ["长方体" , "柱体、球体"];
    //数据分析
    this.paiLieZuHeCN = ["加法原理与乘法原理" , "排列" , "组合" , "题型总结"];
    this.gaiLvTongJiCN = ["事件及其概率运算" , "古典概型" , "独立事件" , "伯努利概型" , "题型总结"];
    this.shuJuMiaoShuCN = ["方差与标准差" , "数据的图表表示"];
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
      suanshurate,
    } = this.props;

    console.log(suanshurate)

    return(
      <React.Fragment>

        <div className="card-box">
          <div className = {style.allChapterTongji}>
            <div className = {style.title}>您已经完成的所有章节统计信息如下：</div><br/>

            {
              suanshurate == undefined ? null :
              // <div>
              //   <p>{suanshurate.应用题.浓度问题.last_wrong_rate}</p>
              // </div>

              <div>

                <div>
                  <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 算术 </div>
                  <br/>
                  <li style = {{"fontSize": "16px","lineHeight": "32px"}}>整数与分数</li>
                  <table className="table table-bordered m-0" align = "center">
                    <thead>
                      <tr>
                        <th>知识点</th>
                        {this.zhengShuYuFenShuCN.map(( sectionname , key ) =>
                          <th key={key}>{sectionname}</th>
                        )}
                        <th>总错误率</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>最新一次错误率</th>
                        <td>{(parseFloat(suanshurate.整数与分数.整数及其运算.last_wrong_rate)*100).toFixed(1)}%</td>
                        <td>{(parseFloat(suanshurate.整数与分数.有理数与实数.last_wrong_rate)*100).toFixed(1)}%</td>
                        <td>{(parseFloat(suanshurate.整数与分数.绝对值.last_wrong_rate)*100).toFixed(1)}%</td>
                        <td>{(parseFloat(suanshurate.整数与分数.平均值.last_wrong_rate)*100).toFixed(1)}%</td>
                        <td>{(parseFloat(suanshurate.整数与分数.比与比例.last_wrong_rate)*100).toFixed(1)}%</td>
                        <td>34%</td>
                      </tr>
                      <tr>
                        <th>平均错误率</th>
                        <td>11%</td>
                        <td>17%</td>
                        <td>4%</td>
                        <td>12%</td>
                        <td>4%</td>
                        <td>12%</td>
                      </tr>
                    </tbody>
                  </table>

                  <br/>

                  <li style = {{"fontSize": "16px","lineHeight": "32px"}}>章节2</li>
                  <table className="table table-bordered m-0" align = "center">
                    <thead>
                      <tr>
                        <th>知识点</th>
                        <th>知识点1</th>
                        <th>知识点2</th>
                        <th>知识点3</th>
                        <th>总错误率</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>最新一次错误率</th>
                        <td>20%</td>
                        <td>5%</td>
                        <td>6%</td>
                        <td>13%</td>
                      </tr>
                      <tr>
                        <th>平均错误率</th>
                        <td>11%</td>
                        <td>17%</td>
                        <td>4%</td>
                        <td>12%</td>
                      </tr>
                    </tbody>
                  </table>
                  <br/>
                </div>



              </div>
            }

              <br/>

              <div>
                <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 代数 </div>
                <br/>
                <li style = {{"fontSize": "16px","lineHeight": "32px"}}>章节1</li>
                <table className="table table-bordered m-0" align = "center">
                  <thead>
                    <tr>
                      <th>知识点</th>
                      <th>知识点1</th>
                      <th>知识点2</th>
                      <th>知识点3</th>
                      <th>总错误率</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>最新一次错误率</th>
                      <td>20%</td>
                      <td>5%</td>
                      <td>6%</td>
                      <td>13%</td>
                    </tr>
                    <tr>
                      <th>平均错误率</th>
                      <td>11%</td>
                      <td>17%</td>
                      <td>4%</td>
                      <td>12%</td>
                    </tr>
                  </tbody>
                </table>
                <br/>
              </div>

              <br/>

              <div>
                <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 几何 </div>
                <br/>
                <li style = {{"fontSize": "16px","lineHeight": "32px"}}>章节1</li>
                <table className="table table-bordered m-0" align = "center">
                  <thead>
                    <tr>
                      <th>知识点</th>
                      <th>知识点1</th>
                      <th>知识点2</th>
                      <th>知识点3</th>
                      <th>总错误率</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>最新一次错误率</th>
                      <td>20%</td>
                      <td>5%</td>
                      <td>6%</td>
                      <td>13%</td>
                    </tr>
                    <tr>
                      <th>平均错误率</th>
                      <td>11%</td>
                      <td>17%</td>
                      <td>4%</td>
                      <td>12%</td>
                    </tr>
                  </tbody>
                </table>
                <br/>
              </div>

              <br/>

              <div>
                <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 数据分析 </div>
                <br/>
                <li style = {{"fontSize": "16px","lineHeight": "32px"}}>章节1</li>
                <table className="table table-bordered m-0" align = "center">
                  <thead>
                    <tr>
                      <th>知识点</th>
                      <th>知识点1</th>
                      <th>知识点2</th>
                      <th>知识点3</th>
                      <th>总错误率</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>最新一次错误率</th>
                      <td>20%</td>
                      <td>5%</td>
                      <td>6%</td>
                      <td>13%</td>
                    </tr>
                    <tr>
                      <th>平均错误率</th>
                      <td>11%</td>
                      <td>17%</td>
                      <td>4%</td>
                      <td>12%</td>
                    </tr>
                  </tbody>
                </table>
                <br/>
              </div>







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
      learningType: state.LearningTypeSelect.learningType,
      suanshurate: state.MathChartPort.content[0],
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( MathChartPortActions , dispatch ),
    })
  )],
  MathChart
);
