import React from 'react';
import style from 'style';

class LogicTestChart extends React.PureComponent{
  render(){
    const { tableName , chartTitle , chartData } = this.props;
    //console.log(chartData);
    return(
      <div>
      <h4 className="header-title m-t-0 m-b-30">{tableName}</h4>
        {/* <p class="text-muted font-13 m-b-15">
            Add <code>.table-bordered</code> for borders on all sides of the table and cells.
        </p> */}

        <table className="table table-bordered m-0" align = "center" //style="table-layout:fixed;"
          >

            <thead>
                <tr>
                    <th>类别名称</th>
                    {chartTitle.map((oneType , key) =>
                    <th key = {key}> {oneType} </th>)
                    }
                    {/* <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th> */}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">正确率</th>
                    {chartData.map((oneError , key) =>
                      <td key = {key}> {oneError} </td>)
                    }
                    {/* <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td> */}
                </tr>
                {/* <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr> */}
            </tbody>
        </table>
                                    {/* <table border="1" align = "center">
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

                                    </table> */}

</div>
    )
  }
}

export default LogicTestChart;
