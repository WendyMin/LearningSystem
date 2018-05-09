import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';
import judgeIfImages from 'Algorithm/judgeIfImages';
import style from 'style';

class ZhentiAllYearTongji extends React.PureComponent {

  render(){
    const {
      tongji,
    } = this.props;
    var options = ["概念混淆" , "条件缺失" , "推断不出" , "以偏概全" , "非黑即白" , "因果无关" , "目的达不到" ,
                     "论据不成立" , "条件不必要" , "类比不当" , "不当假设" , "自相矛盾" , "存在他因" , "措施不可行"];

    return (
      <div className="container">
        <strong><p style = {{"color" : "blue"}}>您的做题情况统计如下：</p></strong>
        <p>您总共做过 <strong style = {{"color" : "red"}}>{tongji.year}</strong> 年真题</p>
        <p>各选项的错选次数、漏选次数如下：</p>
        <table border="1" align = "center">
          <tr>
            <th>选项</th>
            {options.map((oneOption , key) =>
              <th key = {key}> {oneOption} </th>)
            }
          </tr>

          {tongji.cuoxuanlv == undefined ? null :
            <tr>
              <th>错选次数</th>
              {tongji.cuoxuanlv.map((oneOption , key) =>
                <th key = {key}> {oneOption} </th>)
              }
            </tr>
          }

          {tongji.louxuanlv == undefined ? null :
            <tr>
              <th>漏选次数</th>
              {tongji.louxuanlv.map((oneOption , key) =>
                <th key = {key}> {oneOption} </th>)
              }
            </tr>
          }


          {/*chartData.map((one , key) =>
            <tr key = {key}>
              <td>{chartTitle[key]}</td>
              <td>{one}</td>
            </tr>)
          */}
        </table>

      </div>
    );
  }
};

export default connect(
  ({ ZhentiAllYearTongji: ownState }) => ({
    tongji: ownState.tongji,
    //loadingData: ownState.loadingData,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( ZhentiAllYearTongji );
