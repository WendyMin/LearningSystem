import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import style from 'style';

import Info from 'UI/Info';

class LearningTypeSelect extends React.PureComponent {
  constructor( props ){
    super( props );
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
      text,
      normalStyle,
      choosedStyle,
      setLearningType,
      learningType,
      getChapterName
    } = this.props;
    console.log(learningType)

    //var TextStyle = [];
    var TextStyle = [];
    //this.state.changeColor1 ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
    //this.state.changeColor2 ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
    //this.state.changeColor3 ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;
    //this.state.changeColor4 ? TextStyle[3] = style.choosed_type : TextStyle[3] = style.normal_type ;

    for( var i = 0 ; i < 4 ; i++ ){
      learningType == "知识点精要" ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
      learningType == "重点习题" ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
      learningType == "强化练习" ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;
      learningType == "单元测试" ? TextStyle[3] = style.choosed_type : TextStyle[3] = style.normal_type ;
    }

    return (
      <div className="container">
        <Info info = "请选择您要学习的类型："/>
        <div className = {style.typeSelect}>
          <span onClick = {() => this.getLogicChapterName(1)}>形式逻辑</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick = {() => this.getLogicChapterName(0)}>论证逻辑</span>
        </div>

        <div>

        <div className = {style.fangkuang1}>
          <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
          <div className = {TextStyle[0]}
               onMouseOver = {() => setLearningType("知识点精要")}
               //onMouseOver = {() => this.setState({changeColor1: true})} onMouseLeave = {() => this.setState({changeColor1: false})}
               onClick = {() => setLearningType("知识点精要")}>
               点击进入<br/>知识点精要
          </div>
        </div>

        <div className = {style.fangkuang2}>
          <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
          <div  className = {TextStyle[1]}
                //onMouseOver = {() => this.setState({changeColor2: true})} onMouseLeave = {() => this.setState({changeColor2: false})}
                onMouseOver = {() => setLearningType("重点习题")}
                onClick = {() => setLearningType("重点习题")}>
                 点击进入<br/>重点习题
          </div>
        </div>

        <div className = {style.fangkuang3}>
          <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
          <div  className = {TextStyle[2]}
                //onMouseOver = {() => this.setState({changeColor3: true})} onMouseLeave = {() => this.setState({changeColor3: false})}
                onMouseOver = {() => setLearningType("强化练习")}
                onClick = {() => setLearningType("强化练习")}>
                点击进入<br/>强化练习
          </div>
        </div>

        <div className = {style.fangkuang4}>
          <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
          <div className = {TextStyle[3]}
               //onMouseOver = {() => this.setState({changeColor4: true})} onMouseLeave = {() => this.setState({changeColor4: false})}
               onMouseOver = {() => setLearningType("单元测试")}
               onClick = {() => setLearningType("单元测试")}>
               点击进入<br/>单元测试
          </div>
        </div>
      </div>
      </div>
    )
  }





}


export default connect(
  ({ LearningTypeSelect: ownState }) => ({
    learningType:  ownState.learningType
    //questions: ownState.content,
    //loadingData: ownState.loadingData,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( LearningTypeSelect );
