import React from 'react';

class LogicTestChart extends React.PureComponent{
  render(){
    const { chartTitle , chartData } = this.props;
    //console.log(chartData);
    return(
      <table border="1">
        <tr>
          <th> 类型 </th>
          <th> 正确率 </th>
        </tr>
        {chartData.map((one , key) =>
          <tr key = {key}>
            <td>{chartTitle[key]}</td>
            <td>{one}</td>
          </tr>)
        }
      </table>
    )
  }
}

export default LogicTestChart;
