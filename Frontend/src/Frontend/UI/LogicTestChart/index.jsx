import React from 'react';
import style from 'style';

class LogicTestChart extends React.PureComponent{
  render(){
    const { tableName , chartTitle , chartData } = this.props;
    //console.log(chartData);
    return(
      <div>
      <h4 className="header-title m-t-0 m-b-30">{tableName}</h4>

        <table className="table table-bordered m-0" align = "center">
          <thead>
            <tr>
              <th>类别名称</th>
              {chartTitle.map((oneType , key) =>
                <th key = {key}> {oneType} </th>)
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">正确率</th>
              {chartData.map((oneError , key) =>
                <td key = {key}> {oneError} <span style={{"color":"#797979","paddingLeft":"15px"}}><i className="fa fa-long-arrow-up"></i></span></td>)
              }
            </tr>
          </tbody>
        </table>
    </div>
    )
  }
}

export default LogicTestChart;
