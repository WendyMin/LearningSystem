import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';
import judgeIfImages from 'Algorithm/judgeIfImages';
import style from 'style';

class ZhentiPerYearTongji extends React.PureComponent {

  render(){
    const {
      tongji,
    } = this.props;
    //console.log(this.props);

    return (
      <div className="container">
        <strong><p style = {{"color" : "blue"}}>您的本次做题情况统计如下：</p></strong>
        <strong><span>错选选项：</span></strong>
        {
          tongji.cuoxuan == undefined ? null :
          tongji.cuoxuan.length == 0 ? <span>您没有错选的选项</span> :
          <span>{tongji.cuoxuan.map((oneOption , key ) => <span key = {key}>{oneOption}&nbsp; , &nbsp;</span>)}<br/></span>
        }
        <strong><span>漏选选项：</span></strong>
        {
          tongji.louxuan == undefined ? null :
          tongji.louxuan.length == 0 ? <span>您没有漏选的选项</span> :
          <span>{tongji.louxuan.map((oneOption , key ) => <span key = {key}>{oneOption}&nbsp; , &nbsp;</span>)}<br/></span>
        }
        <strong><span>正确选项：</span></strong>
        {
          tongji.zhengque == undefined ? null :
          tongji.zhengque.length == 0 ? <span>您没有选择正确的选项</span> :
          <span>{tongji.zhengque.map((oneOption , key ) => <span key = {key}>{oneOption}&nbsp; , &nbsp;</span>)}<br/></span>
        }
      </div>
    );
  }
};

export default connect(
  ({ ZhentiPerYearTongji: ownState }) => ({
    tongji: ownState.tongji,
    //loadingData: ownState.loadingData,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( ZhentiPerYearTongji );
