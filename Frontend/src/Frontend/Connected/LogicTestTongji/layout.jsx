import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';

import Info from 'UI/Info';
import LogicTestChart from 'UI/LogicTestChart';

import style from 'style';

class LogicTestTongji extends React.PureComponent {
  componentWillMount(){
    this.props.loadTestResult()
  }

  render(){
    const {
      flag,
      count,
      this_rightRate,
      mean_rightRate,
      xingshi,
      lunzheng,
      loader,
      loadTestResult
    } = this.props;
    //console.log(this.props);
    var all_type = ["逻辑语言" , "命题逻辑" , "词项逻辑" , "逻辑应用" , "演绎推理" , "归纳逻辑" ,
                    "假设" , "支持" , "削弱" , "评价" , "解释" , "推论" , "比较" , "描述" , "综合"];

    return (
      <div className="container">
        <Info info = "您最新一次测试的各类题型正确率统计如下："/>
        <LogicTestChart  chartTitle = {all_type}
                         chartData = {this_rightRate}
                           //chartData = {logicTestRightRate( questions)}
        /><br/>

        <div align = "center">在开始学习之前,您总共做过&nbsp;&nbsp;<span style = {{"color":"red"}}>{count}</span>&nbsp;&nbsp;次测试</div>
        <Info info = "平均各类题型正确率统计如下："/>
        <LogicTestChart  chartTitle = {all_type}
                         chartData = {mean_rightRate}
                           //chartData = {logicTestRightRate( questions)}
        /><br/>

        <div style = {{"color":"blue"}} align = "center">根据您的测试情况，系统规划的学习路径如下:</div>
        {/* <div style = {{"color":"red"}} align = "center">系统规划的路径依据开始学习之前的测试数据,选择进入学习之后，路径不会再发生改变</div> */}
        <br/><div style = {{"color":"orange"}}>形式逻辑</div>
          {xingshi.map((oneChapter , key) => <li className = {style.onetype} key = {key}>{oneChapter}&nbsp;&nbsp;&nbsp;&nbsp;</li>)}
        <br/><br/><div style = {{"color":"orange"}}>论证逻辑</div>
          {lunzheng.map((oneChapter , key) => <li className = {style.onetype} key = {key}>{oneChapter}&nbsp;&nbsp;&nbsp;&nbsp;</li>)}

      </div>
    );
  }
};

export default connect(
  ({ LogicTestTongji: ownState }) => ({
    flag: ownState.flag,
    count: ownState.count,
    this_rightRate: ownState.this_rightRate,
    mean_rightRate: ownState.mean_rightRate,
    xingshi: ownState.xingshi,
    lunzheng: ownState.lunzheng
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( LogicTestTongji );
