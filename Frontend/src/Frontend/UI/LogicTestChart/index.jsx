import React from 'react';

class LogicTestChart extends React.PureComponent{
  render(){
    const { chartTitle , chartData } = this.props;
    //console.log(chartData);
    return(
      <table border="1" align = "center">
        {chartTitle == undefined ? null :
          <tr>
            <th>类别名称</th>
            {chartTitle.map((oneType , key) =>
              <th key = {key}> {oneType} </th>)
            }
          </tr>
        }

        {chartData == undefined ? null :
          <tr>
            <th>正确率</th>
            {chartData.map((oneError , key) =>
              <th key = {key}> {oneError} </th>)
            }
          </tr>
        }

      </table>

    )
  }
}

export default LogicTestChart;
