import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  actions as ZhentiPerYearTongjiActions
} from 'Connected/ZhentiPerYearTongji';
import {
  actions as ZhentiAllYearTongjiActions
} from 'Connected/ZhentiAllYearTongji';

import Info from 'UI/Info';
import Button from 'UI/Button';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';
class LogicStatistics extends React.PureComponent{
  constructor( props ){
    super( props );
  }

  getLastTongji = () => {
    this.setState({tongjiShow: true , typeSelect: false});
    this.props.loadAllZhentiTongji({
      url: "/api/logicAllTongji",
      body: {
        username: this.props.username
      },
    });
  }

  getAllTongji = () => {
    this.setState({tongjiShow: true , typeSelect: false});
    this.props.loadZhentiTongji({
      url: "/api/logicLastTongji",
      body: {
        username: this.props.username
      },
    });
  }

  componentDidMount = () => {
    this.getLastTongji();
    this.getAllTongji()
  }

  render(){
    const { data , lastData } = this.props;
    //console.log(data.finish_chapter);
    console.log(data,lastData)
    return(
      <div className = {style.allChapterTongji}>
        <Info info = "您已经完成的所有章节统计情况如下："/>
        {
          data.finish_chapter == undefined || lastData.finish_chapter == undefined ? null :
          <div>
            {/*data.finish_chapter.map((oneChapter , key) =>
              <div key = {key}>{oneChapter}&nbsp;&nbsp;&nbsp;&nbsp;</div>
            )*/}
            {data.finish_chapter.length == 0 || lastData.finish_chapter.length == 0 ? <Info info = "您还没有学习完成的章节！"/> :
            <div>
              {lastData.tongji.map((oneChapter , key) =>
                <div key = {key} align = "center">
                  <br/><h5 style = {{"color":"blue"}}>{lastData.finish_chapter[key]}</h5><span>最新一次总错误率<span>{oneChapter.total_mba}</span></span>
                  <table border="1" >
                  <tr>
                    <th>小类名称</th>
                    {oneChapter.mba_type.map((onetype , key) =>
                      <th key = {key}>{onetype}</th>
                    )}
                  </tr>

                  <tr>
                    <th>最新一次错误率</th>
                    {oneChapter.xiaolei_mba.map((oneerror , key) =>
                      <th key = {key}>{oneerror}</th>
                    )}
                  </tr>

                </table>

                <span>平均总错误率<span>{data.tongji[key].total_mba}</span></span>
                <table border="1" >
                <tr>
                  <th>小类名称</th>
                  {data.tongji[key].mba_type.map((onetype , key) =>
                    <th key = {key}>{onetype}</th>
                  )}
                </tr>

                <tr>
                  <th>平均错误率</th>
                  {data.tongji[key].xiaolei_mba.map((oneerror , key) =>
                    <th key = {key}>{oneerror}</th>
                  )}
                </tr>
              </table>
                </div>
              )}

            {/* {data.tongji.map((oneChapter , key) =>
              <div key = {key} align = "center">
                <br/><h5>{data.finish_chapter[key]}</h5>
                <span>平均总错误率<span>{oneChapter.total_mba}</span></span>
                <table border="1" >
                <tr>
                  <th>小类名称</th>
                  {oneChapter.mba_type.map((onetype , key) =>
                    <th key = {key}>{onetype}</th>
                  )}
                </tr>

                <tr>
                  <th>平均错误率</th>
                  {oneChapter.xiaolei_mba.map((oneerror , key) =>
                    <th key = {key}>{oneerror}</th>
                  )}
                </tr>
              </table>
              </div>
            )} */}
          </div>}
         </div>
        }
      {/*}<table border="1" align = "center">
        <tr>
          <th>章节名称</th>
          {data.tongji.map((oneChapter , key) =>
            <div key = {key}>
              <div>{oneChapter.total_mba}</div>
            </div>
          )}
          <th>逻辑语言</th>
        </tr>


        <tr>
          <th>错误率</th>
          <th>0.4</th>
        </tr>

      </table>*/}
    </div>

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
      ...bindActionCreators( ZhentiAllYearTongjiActions , dispatch )
    })
  )],
  LogicStatistics
);
