/** 显示用户在逻辑科目做过的所有章节的数据统计 **/
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';
import Note from 'UI/Note';
import { actions as ZhentiPerYearTongjiActions } from 'Connected/ZhentiPerYearTongji';
import { actions as ZhentiAllYearTongjiActions } from 'Connected/ZhentiAllYearTongji';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class MathChart extends React.PureComponent{

  render(){

    return(
      <React.Fragment>


        <div className="card-box">
          <div className = {style.allChapterTongji}>
            <div className = {style.title}>您已经完成的所有章节统计信息如下：</div><br/>

            <div>
              <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 算术 </div>
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
      username: state.UserManager.name,
      data: state.ZhentiPerYearTongji.tongji,
      lastData: state.ZhentiAllYearTongji.tongji
    }),
    dispatch => ({
      ...bindActionCreators( ZhentiPerYearTongjiActions , dispatch ),
      ...bindActionCreators( ZhentiAllYearTongjiActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
    })
  )],
  MathChart
);
