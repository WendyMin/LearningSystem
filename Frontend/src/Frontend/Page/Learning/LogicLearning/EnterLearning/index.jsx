import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import Info from 'UI/Info';

import Knowledge from 'Page/Learning/LogicLearning/Knowledge';
import ZhongDian from 'Page/Learning/LogicLearning/ZhongDian';
import QiangHua from 'Page/Learning/LogicLearning/QiangHua';
import UnitTest from 'Page/Learning/LogicLearning/UnitTest';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class EnterLearning extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeSelectShow: true
    }
  }

  getLogicChapterName = ( num ) => {
    this.props.getChapterName({
      url: "/api/logicGetChapterName",
      body: {
        username: this.props.username,
        xingshi: num
      },
    })
  }


  render(){
    const {
      setLearningType,
      learningType
    } = this.props;
    console.log(learningType)

    var TextStyle = [];
    for( var i = 0 ; i < 4 ; i++ ){
      learningType == "知识点" ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
      learningType == "重点" ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
      learningType == "强化" ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;
      learningType == "测试" ? TextStyle[3] = style.choosed_type : TextStyle[3] = style.normal_type ;
    }

    return(
      <React.Fragment>
        <div className = {style.whole}>
          {
            this.state.typeSelectShow ?
            <div>
              <Info info = "请点击选择您要学习的类型："/>
              <div className = {style.typeSelect}><br/>
                <span style = {learningType == "形式逻辑" ? {"color":"orange"} : null}
                      onMouseOver = {() => setLearningType("形式逻辑")}
                      onClick = {() => this.getLogicChapterName(1)}> 形式逻辑
                </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style = {learningType == "论证逻辑" ? {"color":"orange"} : null}
                      onMouseOver = {() => setLearningType("论证逻辑")}
                      onClick = {() => this.getLogicChapterName(0)}> 论证逻辑
                </span>
              </div>

              <div className = {style.fangkuang1}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div className = {TextStyle[0]}
                     onMouseOver = {() => setLearningType("知识点")}
                     onClick = {() => {setLearningType("知识点精要") ; this.setState({typeSelectShow: false})}}>
                     点击进入<br/>知识点精要
                </div>
              </div>

              <div className = {style.fangkuang2}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div  className = {TextStyle[1]}
                      onMouseOver = {() => setLearningType("重点")}
                      onClick = {() => {setLearningType("重点习题") ; this.setState({typeSelectShow: false})}}>
                       点击进入<br/>重点习题
                </div>
              </div>

              <div className = {style.fangkuang3}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div  className = {TextStyle[2]}
                      onMouseOver = {() => setLearningType("强化")}
                      onClick = {() => {setLearningType("强化练习") ; this.setState({typeSelectShow: false})}}>
                      点击进入<br/>强化练习
                </div>
              </div>

              <div className = {style.fangkuang4}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div className = {TextStyle[3]}
                     onMouseOver = {() => setLearningType("测试")}
                     onClick = {() => {setLearningType("单元测试") ; this.setState({typeSelectShow: false})}}>
                     点击进入<br/>单元测试
                </div>
              </div>
            </div>
            :
            learningType == "知识点精要" ? <Knowledge/> :
            learningType == "重点习题" ? <ZhongDian/> :
            learningType == "强化练习" ? <QiangHua/> :
            learningType == "单元测试" ? <UnitTest/> : null

          }




        {/*
        this.state.zhishidian ? <KnowLedge/>:
        this.state.zhongdian ? <ZhongDian/>:
        this.state.qianghua ? <QiangHua/>:
        this.state.ceshi ? <UnitTest/> : null
    */  }


        </div>
      </React.Fragment>
    )
  }




}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      //logined: state.UserManager.logined,
      username: state.UserManager.name,
      learningType: state.LearningTypeSelect.learningType
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  EnterLearning
);
