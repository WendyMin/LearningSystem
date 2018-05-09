import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import KnowLedge from 'Page/Learning/LogicLearning/Knowledge';
import ZhongDian from 'Page/Learning/LogicLearning/ZhongDian';
import QiangHua from 'Page/Learning/LogicLearning/QiangHua';
import UnitTest from 'Page/Learning/LogicLearning/UnitTest';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class LearningTypeSelect extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeselect: true,
      zhishidian: false,
      zhongdian: false,
      qianghua: false,
      ceshi: false,
      changeColor1: false,
      changeColor2: false,
      changeColor3: false,
      changeColor4: false
    }
  }

  render(){
    var TextStyle = [];
    this.state.changeColor1 ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
    this.state.changeColor2 ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
    this.state.changeColor3 ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;
    this.state.changeColor4 ? TextStyle[3] = style.choosed_type : TextStyle[3] = style.normal_type ;

    return(
      <React.Fragment>
        <div className = {style.whole}>
        {this.state.typeselect ? <div>
          <div className = {style.fangkuang1}>
            <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
            <div className = {TextStyle[0]}
                 onMouseOver = {() => this.setState({changeColor1: true})} onMouseLeave = {() => this.setState({changeColor1: false})}
                 onClick = {() => this.setState({typeselect: false , zhishidian: true , zhongdian: false , qianghua: false , ceshi: false})}>
                 点击进入<br/>知识点精要
            </div>
          </div>

          <div className = {style.fangkuang2}>
            <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
            <div  className = {TextStyle[1]}
                  onMouseOver = {() => this.setState({changeColor2: true})} onMouseLeave = {() => this.setState({changeColor2: false})}
                  onClick = {() => this.setState({typeselect: false , zhishidian: false , zhongdian: true , qianghua: false , ceshi: false})}>
                   点击进入<br/>重点习题
            </div>
          </div>

          <div className = {style.fangkuang3}>
            <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
            <div  className = {TextStyle[2]}
                  onMouseOver = {() => this.setState({changeColor3: true})} onMouseLeave = {() => this.setState({changeColor3: false})}
                  onClick = {() => this.setState({typeselect: false , zhishidian: false , zhongdian: false , qianghua: true , ceshi: false})}>
                  点击进入<br/>强化练习
            </div>
          </div>

          <div className = {style.fangkuang4}>
            <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
            <div className = {TextStyle[3]}
                 onMouseOver = {() => this.setState({changeColor4: true})} onMouseLeave = {() => this.setState({changeColor4: false})}
                 onClick = {() => this.setState({typeselect: false , zhishidian: false , zhongdian: false , qianghua: false , ceshi: true})}>
                 点击进入<br/>单元测试
            </div>
          </div>
        </div>:
        this.state.zhishidian ? <KnowLedge/>:
        this.state.zhongdian ? <ZhongDian/>:
        this.state.qianghua ? <QiangHua/>:
        this.state.ceshi ? <UnitTest/> : null
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
      ///username: state.UserManager.name,
    }),
    dispatch => ({
      //...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
    })
  )],
  LearningTypeSelect
);
