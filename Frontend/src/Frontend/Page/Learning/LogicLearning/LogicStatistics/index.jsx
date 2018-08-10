/** 显示用户在逻辑科目做过的所有章节的数据统计 **/
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';
import Note from 'UI/Note';
import { actions as ZhentiPerYearTongjiActions } from 'Connected/ZhentiPerYearTongji';
import { actions as ZhentiAllYearTongjiActions } from 'Connected/ZhentiAllYearTongji';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LogicStatistics extends React.PureComponent{
  constructor( props ){
    super( props );
  }
  /** 加载最新一次的统计数据 **/
  getLastTongji = () => {
    this.props.loadAllZhentiTongji({
      url: "/api/logicAllTongji",
      body: {
        username: this.props.username
      },
    });
  }
  /** 加载做过的所有数据的平均统计 **/
  getAllTongji = () => {
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
    console.log(data,lastData)
    return(
      <div>
        {
          data == undefined || lastData == undefined ? null :
          <div>
            {lastData.flag == 0 ? <Note info = "您还没完成入口测试，请先完成入口测试 !" onClick={()=>this.props.setSubjectFunctionSelect(0)}/>:
            <div>
            {data.finish_chapter == undefined || lastData.finish_chapter == undefined ? null :
              <div>
                {data.finish_chapter.length == 0 || lastData.finish_chapter.length == 0 ?
                <Note info = "您目前还没有学习完成的章节，请先进行学习 !" onClick={()=>this.props.setSubjectFunctionSelect(1)}/>
                :
                <div className="card-box">
                  <div className = {style.allChapterTongji}>
                    <div className = {style.title}>您已经完成的所有章节统计信息如下：</div><br/>
                    <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 形式逻辑 </div>
                    {lastData.tongji.map((oneChapter , key) =>
                      <div key = {key}>
                        <br/><li style = {{"fontSize": "16px","lineHeight": "32px"}}>{lastData.finish_chapter[key]}</li>
                        {/* <span>最新一次总错误率<span>{oneChapter.total_mba}</span></span> */}
                        <table className="table table-bordered m-0" align = "center">
                          <thead>
                            <tr>
                              <th>小类名称</th>
                              {oneChapter.mba_type.map((onetype , key) =>
                              <th key = {key}>{onetype}</th>)}
                              <th>总错误率</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>最新一次错误率</th>
                              {oneChapter.xiaolei_mba.map((oneerror , key) =>
                              <td key = {key} style={{"vertical-align":"middle"}}>{oneerror}</td>)}
                              <td>{oneChapter.total_mba}</td>
                            </tr>
                            <tr>
                              <th>平均错误率</th>
                              {data.tongji[key].xiaolei_mba.map((oneerror , key) =>
                              <td key = {key} style={{"vertical-align":"middle"}}>{oneerror}</td>)}
                              <td>{data.tongji[key].total_mba}</td>
                            </tr>
                          </tbody>
                        </table><br/>

                      {/* <span>平均总错误率<span>{data.tongji[key].total_mba}</span></span>
                      <table className="table table-bordered m-0" align = "center">
                        <thead>
                          <tr>
                            <th>小类名称</th>
                            {data.tongji[key].mba_type.map((onetype , key) =>
                            <th key = {key}>{onetype}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>平均错误率</th>
                            {data.tongji[key].xiaolei_mba.map((oneerror , key) =>
                            <td key = {key} style={{"vertical-align":"middle"}}>{oneerror}</td>)}
                          </tr>
                        </tbody>
                      </table> */}
                      </div>
                    )} <br/>
                    <div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}> 论证逻辑 </div>
                  </div>
                {/* <div className = {style.allChapterTongji}>
                  <div className = {style.title}>您已经完成的所有章节统计信息如下：</div>
                  {lastData.tongji.map((oneChapter , key) =>
                    <div key = {key} align = "center">
                      <br/><div style = {{"fontSize": "16px","lineHeight": "32px","color":"#71b6f9"}}>{lastData.finish_chapter[key]}</div><span>最新一次总错误率<span>{oneChapter.total_mba}</span></span>
                      <table className="table table-bordered m-0" align = "center">
                        <thead>
                          <tr>
                            <th>小类名称</th>
                            {oneChapter.mba_type.map((onetype , key) =>
                            <th key = {key}>{onetype}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>最新一次错误率</th>
                            {oneChapter.xiaolei_mba.map((oneerror , key) =>
                            <td key = {key} style={{"vertical-align":"middle"}}>{oneerror}</td>)}
                          </tr>
                        </tbody>
                      </table><br/>

                    <span>平均总错误率<span>{data.tongji[key].total_mba}</span></span>
                    <table className="table table-bordered m-0" align = "center">
                      <thead>
                        <tr>
                          <th>小类名称</th>
                          {data.tongji[key].mba_type.map((onetype , key) =>
                          <th key = {key}>{onetype}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>平均错误率</th>
                          {data.tongji[key].xiaolei_mba.map((oneerror , key) =>
                          <td key = {key} style={{"vertical-align":"middle"}}>{oneerror}</td>)}
                        </tr>
                      </tbody>
                    </table>
                    </div>
                  )}
                </div> */}
                </div>}
              </div>
            }

        </div>}

          </div>
        }

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
      ...bindActionCreators( ZhentiAllYearTongjiActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
    })
  )],
  LogicStatistics
);
