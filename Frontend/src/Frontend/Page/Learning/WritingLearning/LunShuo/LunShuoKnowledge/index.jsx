import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as ButtonExpandActions } from 'Connected/ButtonExpand';
import { actions as PortTestActions } from 'Connected/PortTest';
import {
  view as WriteKnowledge,
  actions as WriteKnowledgeActions
} from 'Connected/WriteKnowledge';

import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunShuoKnowledge extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      typeSelect: true // 默认初始状态为显示各种技巧的具体内容，选择某一项技巧后，值设为 false, 页面显示具体知识点内容
    }
  }

  /*** 加载每一项写作技巧的具体内容  */
  loadButtonContents_jiqiao = ( ) => {
    this.props.loadButtonContents({
      url: "/api/lunshuoTixingtupo"
    });
    this.props.loadPortContent2({
      url: "/api/lunshuoShentiliyi",
    });
    this.props.loadPortContent3({
      url: "/api/lunshuoJingdianmuban",
    });
    this.props.loadPortContent4({
      url: "/api/lunshuoHualongdianjing",
    });
    this.props.loadPortContent5({
      url: "/api/lunshuoSucaibaodian",
    });
  }

  componentDidMount(){
    this.loadButtonContents_jiqiao();
  }

  /* 加载用户选择的某一具体类型的具体内容 */
  loadTiXingTuPoContent = ( choice ) => {
    this.props.loadWriteKnowledge({
      url: "/api/lunShuoTiXingTuPoContent",
      body: {
        requestQuestion: choice
      }
    });
  } // 用户选择的某一项题型突破的具体内容
  loadShenTiLiYiContent = ( choice ) => {
    this.props.loadWriteKnowledge({
      url: "/api/lunShuoShenTiLiYiContent",
      body: {
        requestQuestion: choice
      }
    });
  } // 用户选择的某一项审题立意的具体内容
  loadJingDianMuBanContent = ( choice ) => {
    this.props.loadWriteKnowledge({
      url: "/api/lunShuoJingDianMuBanContent",
      body: {
        requestQuestion: choice
      }
    });
  } // 用户选择的某一项经典模板的具体内容
  loadHuaLongDianJingContent = ( choice ) => {
    this.props.loadWriteKnowledge({
      url: "/api/lunShuoHuaLongDianJingContent",
      body: {
        requestQuestion: choice
      }
    });
  } // 用户选择的某一项画龙点睛的具体内容
  loadSuCaiBaoDianContent = ( choice ) => {
    this.props.loadWriteKnowledge({
      url: "/api/lunShuoSuCaiBaoDianContent",
      body: {
        requestQuestion: choice
      }
    });
  } // 用户选择的某一项素材宝典的具体内容


  render(){
    const{
      tiXingTuPoName,
      shenTiLiYiName,
      jingDianMoBanName,
      huaLongDianJingName,
      suCaiBaoDianName,
      setButtonChoice,
      zhaoCuoChoice,
      moBanChoice
    } = this.props;
    console.log(zhaoCuoChoice)
    //console.log(this.props.title.length === 0)
    // document.getElementById("expand-function").innerHTML=<div>"找错"</div>
    //document.getElementById("select_group").innerHTML = document.getElementById("select_group").innerHTML+oo;
    return (
      <React.Fragment>
      {
        this.state.typeSelect || zhaoCuoChoice === "" ?
        <div>
          <div className="row">
        <div className="col-md-4">
          <div className="card-box taskboard-box">

            <h4 className="header-title m-t-0 m-b-30 text-primary">题型突破</h4>
            {tiXingTuPoName.map(( oneName , key ) =>
              <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                <li>
                    <div className="card-box kanban-box">
                        <div className="kanban-detail" onClick = {() => {setButtonChoice(oneName);this.loadTiXingTuPoContent( oneName );this.setState({typeSelect:false})}}>
                            <span className="label label-danger pull-right">Begin</span>
                            <h4><a //onClick = {() => {setButtonChoice(oneName);this.loadZhentiContent( oneName );this.setState({zhenTiSelect:false})}}
                            >{oneName}</a> </h4>
                        </div>
                     </div>
                </li>
              </ul>
            )}

          </div>
        </div>
        {/* <!-- end col --> */}
        <div className="col-md-4">
          <div className="card-box taskboard-box">

            <h4 className="header-title m-t-0 m-b-30 text-warning">审题立意</h4>
            {shenTiLiYiName.map(( oneName , key ) =>
              <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                <li>
                    <div className="card-box kanban-box">
                        <div className="kanban-detail" onClick = {() => {setButtonChoice(oneName);this.loadShenTiLiYiContent( oneName );this.setState({typeSelect:false})}}>
                            <span className="label label-danger pull-right">Begin</span>
                            <h4><a //onClick = {() => {setButtonChoice(oneName);this.loadZhentiContent( oneName );this.setState({zhenTiSelect:false})}}
                            >{oneName}</a> </h4>
                        </div>
                     </div>
                </li>
              </ul>
            )}

          </div>
        </div>
        {/* <!-- end col --> */}
        <div className="col-md-4">
          <div className="card-box taskboard-box">

            <h4 className="header-title m-t-0 m-b-30 text-success">经典模板</h4>
            {jingDianMoBanName.map(( oneName , key ) =>
              <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                <li>
                    <div className="card-box kanban-box">
                        <div className="kanban-detail" onClick = {() => {setButtonChoice(oneName);this.loadJingDianMuBanContent( oneName );this.setState({typeSelect:false})}}>
                            <span className="label label-danger pull-right">Begin</span>
                            <h4><a //onClick = {() => {setButtonChoice(oneName);this.loadZhentiContent( oneName );this.setState({zhenTiSelect:false})}}
                            >{oneName}</a> </h4>
                        </div>
                     </div>
                </li>
              </ul>
            )}

          </div>
        </div>
        {/* <!-- end col --> */}
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card-box taskboard-box">

            <h4 className="header-title m-t-0 m-b-30 text-pink">画龙点睛</h4>
            {huaLongDianJingName.map(( oneName , key ) =>
              <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                <li>
                    <div className="card-box kanban-box">
                        <div className="kanban-detail" onClick = {() => {setButtonChoice(oneName);this.loadHuaLongDianJingContent( oneName );this.setState({typeSelect:false})}}>
                            <span className="label label-danger pull-right">Begin</span>
                            <h4><a //onClick = {() => {setButtonChoice(oneName);this.loadZhentiContent( oneName );this.setState({zhenTiSelect:false})}}
                            >{oneName}</a> </h4>
                        </div>
                     </div>
                </li>
              </ul>
            )}

          </div>
        </div>
        {/* <!-- end col --> */}
        <div className="col-md-4">
          <div className="card-box taskboard-box">

            <h4 className="header-title m-t-0 m-b-30 text-purple">素材宝典</h4>
            {suCaiBaoDianName.map(( oneName , key ) =>
              <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                <li>
                    <div className="card-box kanban-box">
                        <div className="kanban-detail" onClick = {() => {setButtonChoice(oneName);this.loadSuCaiBaoDianContent( oneName );this.setState({typeSelect:false})}}>
                            <span className="label label-danger pull-right">Begin</span>
                            <h4><a //onClick = {() => {setButtonChoice(oneName);this.loadZhentiContent( oneName );this.setState({zhenTiSelect:false})}}
                            >{oneName}</a> </h4>
                        </div>
                     </div>
                </li>
              </ul>
            )}

          </div>
        </div>
      </div>
      </div>
      :
      <div className="card-box">
        <div className = {style.centerbiaoti}>{zhaoCuoChoice}</div>
        <WriteKnowledge loader={this.loadWriteContents}/>
      </div>
    }

      </React.Fragment>
    )
  }
}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      tiXingTuPoName: state.ButtonExpand.content,
      shenTiLiYiName: state.PortTest.content2,
      jingDianMoBanName: state.PortTest.content3,
      huaLongDianJingName: state.PortTest.content4,
      suCaiBaoDianName: state.PortTest.content5,
      zhaoCuoChoice: state.ButtonExpand.choice,
      moBanChoice: state.PortTest.choice
    }),
    dispatch => ({
      ...bindActionCreators( ButtonExpandActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( WriteKnowledgeActions , dispatch )
    })

  )],
  LunShuoKnowledge
);
