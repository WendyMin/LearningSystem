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
    this.type = "";
    this.state = {
      type1Selected: false,
      type2Selected: false,
      typeSelectShow: true
    }
  }

  getLogicChapterName = ( num ) => {
    //var xingshi = "";
    this.type = num;
    //num == undefined ? xingshi == this.type : xingshi = num ;
    //if(num==1){this.props.recordXingshiOrLunzheng("形式逻辑")}
    //if(num==0) {this.props.recordXingshiOrLunzheng("论证逻辑")}
    //if (this.props.xingshiOrLunzheng == "形式逻辑") xingshi = 1;
    //else if (this.props.xingshiOrLunzheng == "论证逻辑") xingshi = 0;
    //else xingshi = num;
    //console.log(this.props.username,xingshi)
    console.log(this.props.username,num)
    if(num !== undefined){
    this.props.getChapterName({
      url: "/api/logicGetChapterName",
      body: {
        username: this.props.username,
        xingshi: num
      },
    })
  }
  }

  TypeSelectNote = () =>{
    alert("您还没有选择要学习的类型，请选择您要学习的类型!");
    this.setState({typeSelectShow: true})
  }

  FinishTestNote = () =>{
    alert("您还没有完成入口测试，请先完成入口测试!");
    this.setState({typeSelectShow: true})
  }
  FinishXingshiNote = () =>{
    alert("您已经完成所有形式逻辑的学习!");
    this.setState({typeSelectShow: true})
  }
  FinishLunzhengNote = () =>{
    alert("您已经完成所有论证逻辑的学习!");
    this.setState({typeSelectShow: true})
  }
  FinishAllNote = () =>{
    alert("您已经完成了所有形式逻辑和论证逻辑的学习!");
    this.setState({typeSelectShow: true})
  }

  componentDidMount(){
    this.getLogicChapterName();
  }


  render(){
    const {
      setLearningType,
      learningType,
      finished_level_test
    } = this.props;
    //console.log(learningType)

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
            this.state.typeSelectShow || learningType == "知识点" || learningType == "重点" || learningType == "强化" || learningType == "测试" ?
            <div>
              <Info info = "请点击选择您要学习的类型："/>
              <div className = {style.typeSelect}><br/>
                <span style = {this.state.type1Selected ? {"color":"orange"} : null}
                      //onMouseOver = {() => setLearningType("形式逻辑")}
                      onClick = {() => {this.setState({type1Selected: true,type2Selected: false});this.getLogicChapterName(1)}}> 形式逻辑
                </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style = {this.state.type2Selected ? {"color":"orange"} : null}
                      //onMouseOver = {() => setLearningType("论证逻辑")}
                      onClick = {() => {this.setState({type2Selected: true,type1Selected: false});this.getLogicChapterName(0)}}> 论证逻辑
                </span>
              </div>

              <div className = {style.fangkuang1}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div className = {TextStyle[0]}
                     onMouseOver = {() => {setLearningType("知识点") ; this.setState({typeSelectShow: true})}}
                     onClick = {() => {setLearningType("知识点精要") ; this.setState({typeSelectShow: false})}}>
                     点击进入<br/>知识点精要
                </div>
              </div>

              <div className = {style.fangkuang2}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div  className = {TextStyle[1]}
                      onMouseOver = {() => {setLearningType("重点") ; this.setState({typeSelectShow: true})}}
                      onClick = {() => {setLearningType("重点习题") ; this.setState({typeSelectShow: false})}}>
                       点击进入<br/>重点习题
                </div>
              </div>

              <div className = {style.fangkuang3}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div  className = {TextStyle[2]}
                      onMouseOver = {() => {setLearningType("强化") ; this.setState({typeSelectShow: true})}}
                      onClick = {() => {setLearningType("强化练习") ; this.setState({typeSelectShow: false})}}>
                      点击进入<br/>强化练习
                </div>
              </div>

              <div className = {style.fangkuang4}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div className = {TextStyle[3]}
                     onMouseOver = {() => {setLearningType("测试") ; this.setState({typeSelectShow: true})}}
                     onClick = {() => {setLearningType("单元测试") ; this.setState({typeSelectShow: false})}}>
                     点击进入<br/>单元测试
                </div>
              </div>
            </div>
            :
            this.state.type1Selected == false && this.state.type2Selected == false && (learningType == "知识点精要" || learningType == "重点习题" || learningType == "强化练习" || learningType == "单元测试") ?
            <div>{this.TypeSelectNote()}</div>
            :
            finished_level_test == 0 ? <div>{this.FinishTestNote()}</div>:
            finished_level_test == 2 && this.state.type1Selected == true ? <div>{this.FinishXingshiNote()}</div>:
            finished_level_test == 3 && this.state.type2Selected == true ? <div>{this.FinishLunzhengNote()}</div>:
            finished_level_test == 4 ? <div>{this.FinishAllNote()}</div>:
            learningType == "知识点精要" ? <Knowledge/> :
            learningType == "重点习题" ? <ZhongDian/> :
            learningType == "强化练习" ? <QiangHua/> :
            learningType == "单元测试" ? <UnitTest xingshiOrLunzheng = {this.type}/> : null
          }

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
      xingshiOrLunzheng: state.LearningTypeSelect.xingshiOrLunzheng,
      learningType: state.LearningTypeSelect.learningType,
      finished_level_test: state.LearningTypeSelect.finished_level_test
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  EnterLearning
);
