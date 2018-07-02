import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

// import WriteGraph from 'UI/WriteGraph';
import { actions as PortTestActions } from 'Connected/PortTest';

class EngChart extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  componentDidMount(){
    this.function();
  }

  function = () => {
    this.props.loadPortContent({
      url: "/api/eng_getWordRate",
      body: {
        username:  this.props.username,
        articleId: 18,
      }
    })
  }

  render(){

    const {
      content,
    } = this.props;

    console.log(content);

    return(
      <React.Fragment>
          <div>
            <p className={style.title}>累计生词类型分析</p>
            {/* <WriteGraph/> */}
            <br/>
            <p className={style.title1}>不认识的单词在各单词库占比</p>
            <div>
              {
                content == undefined ? null :
                <div>
                  <table className="table table-bordered m-0" align = "center">
                    <thead>
                      <tr>
                        <th>中考</th>
                        <th>高考</th>
                        <th>四级</th>
                        <th>六级</th>
                        <th>考研</th>
                        <th>超纲</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>{content.zhongkao_rate}</th>
                        <th>{content.gaokao}</th>
                        <th>{content.siji}</th>
                        <th>{content.liuji}</th>
                        <th>{content.kaoyan}</th>
                        <th>{content.chaogang}</th>
                      </tr>
                    </tbody>
                  </table>
                  <br/>
                </div>
              }
            </div>
            <br/>
            {/* <div className={style.pageTitle}>考研单词所占百分比折线图</div> */}
          </div>


      </React.Fragment>
    )
  }




}

export default applyHOCs([
  asyncProcessControl({
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      content: state.PortTest.content,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  EngChart
);
