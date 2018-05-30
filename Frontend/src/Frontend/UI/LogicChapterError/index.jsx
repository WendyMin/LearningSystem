import React from 'react';
import style from 'style';
import Info from 'UI/Info';
import Button from 'UI/Button';

class LogicChapterError extends React.PureComponent{
  render(){
    const {
      chapter_name,
      ceshiData,
      chapterData,
      stayThisChapter,
      enterNextChapter
    } = this.props;
    console.log(this.props)
    return(
      <div className = {style.wholeErrorTongji}>
        <div className = {style.note}>您在&nbsp;&nbsp;<span style = {{"color":"red"}}>{chapter_name}</span>&nbsp;&nbsp;章节的做题情况统计如下</div><br/>
        <div>您在本章的所有题目，包括重点习题、强化习题以及单元测试的总错误概率为：&nbsp;&nbsp;<span style = {{"color":"red"}}>{chapterData.total}</span></div><br/>
        <div>您在本章的所有题目中，按类型统计率统计如下：</div><br/>
        <table border="1" align = "center">
          {chapterData.mba_type == undefined ? null :
            <tr>
              <th>类别名称</th>
              {chapterData.mba_type.map((oneType , key) =>
                <th key = {key}> {oneType} </th>)
              }
            </tr>
          }

          {chapterData.xiaolei_mba == undefined ? null :
            <tr>
              <th>错误率</th>
              {chapterData.xiaolei_mba.map((oneError , key) =>
                <th key = {key}> {oneError} </th>)
              }
            </tr>
          }

        </table>

        <br/><div>您在本章的单元测试的统计如下：</div><br/>
        <table border="1" align = "center">
          <tr>
            <th>题目总数</th>
            <th>{ceshiData.total_timu}</th>
          </tr>

          <tr>
            <th>正确个数</th>
            <th>{ceshiData.right_timu}</th>
          </tr>

          <tr>
            <th>错误个数</th>
            <th>{ceshiData.wrong_timu}</th>
          </tr>
        </table><br/>

        { // flag == 1  建议进入下一章 ；flag == 2 不建议进入下一章 ； flag == 3 没有数据
          ceshiData.flag == 1 ? <strong align = "center"><div style = {{"color":"red"}}>根据您的做题情况，系统建议您进入下一章的学习</div></strong> :
          ceshiData.flag == 2 ? <strong align = "center"><div style = {{"color":"red"}}>根据您的做题情况，系统建议您留在本章的学习</div></strong> : null
        }
        <br/><span>请选择留在本章学习还是进入下一章节的学习：</span>
        <span><Button text = "留在本章" onClick = {stayThisChapter}></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button text = "进入下一章" onClick = {enterNextChapter}></Button></span>

      </div>
    )
  }
}

export default LogicChapterError;
