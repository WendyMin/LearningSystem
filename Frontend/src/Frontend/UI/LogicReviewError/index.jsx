import React from 'react';
import style from 'style';
import Info from 'UI/Info';
import Button from 'UI/Button';

class LogicReviewError extends React.PureComponent{
  render(){
    const {
      data,
    } = this.props;
    console.log(this.props)
    return(
      <div className = {style.wholeErrorTongji}>
        <div className = {style.note}>您复习过的章节及其复习次数统计如下：</div><br/>

        <table border="1" align = "center">
          {data.chapter_name == undefined ? null :
            <tr>
              <th>类别名称</th>
              {data.chapter_name.map((oneType , key) =>
                <th key = {key}> {oneType} </th>)
              }
            </tr>
          }

          {data.count == undefined ? null :
            <tr>
              <th>复习次数</th>
              {data.count.map((oneError , key) =>
                <th key = {key}> {oneError} </th>)
              }
            </tr>
         }

        </table>




      </div>
    )
  }
}

export default LogicReviewError;
