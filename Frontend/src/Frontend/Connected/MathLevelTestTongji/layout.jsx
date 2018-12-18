import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';
import LogicTestChart from 'UI/LogicTestChart';
import style from 'style';

class MathLevelTestTongji extends React.PureComponent {
  componentWillMount(){
    this.props.loadTestResult()
  }

  render(){
    const {
      flag,
      count,
      this_rightRate,
      upOrDown,
      mean_rightRate,
      zhongdian,
      yiban,
      loadTestResult
    } = this.props;
    // console.log(this.props);
    var all_type = ["整数与分数" , "应用题" , "函数方程及其应用" , "数列及其应用" , "整式与分式" , "平面几何" ,
                    "解析几何" , "立体几何" , "排列组合" , "概率统计" , "数据描述"];

    return (
      <div className="container">
        <div align = "center">在开始学习之前,您总共做过&nbsp;&nbsp;<span style = {{"color":"red"}}>{count}</span>&nbsp;&nbsp;次测试&nbsp;,&nbsp;平均各类题型正确率统计如下：</div><br/>
        <table className="table table-bordered m-0" align = "center">
          <thead>
            <tr>
              <th>类别名称</th>
              {all_type.map((oneType , key) =>
                <th key = {key}> {oneType} </th>)
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">正确率</th>
              {mean_rightRate.map((oneError , key) =>
                <td key = {key}> {(parseFloat(oneError)*100).toFixed(1)}% </td>)
              }
            </tr>
          </tbody>
        </table><br/>
        {/* 注 : 垂直居中要写到 td 里边才管用 */}
        <div align = "center">您最新一次测试的各类题型正确率统计如下：</div><br/>
        <table className="table table-bordered m-0" align = "center">
          <thead>
            <tr>
              <th>类别名称</th>
              {all_type.map((oneType , key) =>
                <td key = {key} style={{"vertical-align":"middle"}}><strong> {oneType} </strong></td>)
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">正确率</th>
              {this_rightRate.map((oneError , key) =>
                <td key = {key} style={{"vertical-align":"middle"}}>
                  {(parseFloat(oneError)*100).toFixed(1)}%
                  {flag == 1 ?
                    <span style={{"color":"#797979","paddingLeft":"15px"}}>
                      {upOrDown[key] == 1 ? <i className="fa fa-long-arrow-up"></i> :
                      upOrDown[key] == -1 ? <i className="fa fa-long-arrow-down"></i>:null
                      // <i className="fa fa-long-arrow-right"></i>
                    }
                    </span>:null
                  }
                </td>)
              }
            </tr>
          </tbody>
        </table><br/>

        {/*<div style = {{"color":"#71b6f9"}} align = "center">根据您的测试情况，系统推荐您需要重点和一般学习的章节如下:</div><br/>*/}
        <div style = {{"color":"#71b6f9"}} align = "center">针对您的本次测试情况，系统建议您需要重点和一般学习的模块如下:</div><br/>
        <div style = {{"color":"#f9c851"}}>重点学习</div>
          {zhongdian.length == 0 ? <div>您目前没有需要重点学习的模块</div> :
          <div>
            {zhongdian.map((oneChapter , key) => <li className = {style.onetype} key = {key}>{oneChapter}&nbsp;&nbsp;&nbsp;&nbsp;</li>)}<br/><br/>
          </div>
          }
        <div style = {{"color":"#f9c851"}}>一般学习</div>
          {yiban.length == 0 ? <div>您目前没有需要一般学习的模块</div> :
          <div>
            {yiban.map((oneChapter , key) => <li className = {style.onetype} key = {key}>{oneChapter}&nbsp;&nbsp;&nbsp;&nbsp;</li>)}
          </div>
          }

      </div>
    );
  }
};

export default connect(
  ({ MathLevelTestTongji: ownState }) => ({
    flag: ownState.flag, //是否做过了水平测试,1 表示做过了水平测试
    count: ownState.count, //开始学习之前做过测试的总次数
    this_rightRate: ownState.this_rightRate, // 本次/最新一次的正确率统计
    upOrDown: ownState.upOrDown, // 本次测试跟上一次比是升还是降,1：进步，0：相同，-1退步
    mean_rightRate: ownState.mean_rightRate, // 开始学习之前的平均正确率统计
    yiban: ownState.yiban,  // 需要一般学习的章节
    zhongdian: ownState.zhongdian  // 需要重点学习的章节
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( MathLevelTestTongji );
