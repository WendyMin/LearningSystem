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

class LunZhengKnowledge extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      typeSelect: true
    }
  }

  /*** 找错析错按钮展开的内容  */
  loadButtonContents_zhaocuo = () => {
    this.props.loadButtonContents({
      url: "/api/lunzhengZhaoCuoXiCuo"
    });
  }

  /*** 写作模板按钮展开的内容  */
  loadButtonContents_moban = () => {
    this.props.loadPortContent2({
      url: "/api/lunzhengTemplate"
    });
  }

  componentDidMount(){
    this.loadButtonContents_zhaocuo();
    this.loadButtonContents_moban();
  }

  /* 加载用户选择的某一具体找错析错类型的具体内容 */
  loadZhaocuoContent = ( choice ) => {
    this.props.loadWriteKnowledge({
      url: "/api/lunZhengZhaoCuoXiCuoContent",
      body: {
        requestQuestion: choice
      }
    });
  }
  /* 加载用户选择的某一具体写作模板类型的具体内容 */
  loadMobanContent = ( choice ) => {
    this.props.loadWriteKnowledge({
      url: "/api/lunZhengTemplateContent",
      body: {
        requestQuestion: choice
      }
    });
  }


  render(){
    const{
      zhaoCuoName,
      moBanName,
      setButtonChoice,
      choice
    } = this.props;
    console.log(choice)
    //console.log(this.props.title.length === 0)
    // document.getElementById("expand-function").innerHTML=<div>"找错"</div>
    //document.getElementById("select_group").innerHTML = document.getElementById("select_group").innerHTML+oo;
    return (
      <React.Fragment>
      {
        this.state.typeSelect || choice === "" ?
        <div>
        <div className="col-md-6">
          <div className="card-box taskboard-box">

            <h4 className="header-title m-t-0 m-b-30 text-primary">找错析错</h4>
            {zhaoCuoName.map(( oneName , key ) =>
              <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                <li>
                    <div className="card-box kanban-box">
                        <div className="kanban-detail" onClick = {() => {setButtonChoice(oneName);this.loadZhaocuoContent( oneName );this.setState({typeSelect:false})}}>
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
        <div className="col-md-6">
          <div className="card-box taskboard-box">

            <h4 className="header-title m-t-0 m-b-30 text-warning">写作模板</h4>
            {moBanName.map(( oneName , key ) =>
              <ul className="list-unstyled task-list" id="drag-upcoming" key = {key}>
                <li>
                    <div className="card-box kanban-box">
                        <div className="kanban-detail" onClick = {() => {setButtonChoice(oneName);this.loadMobanContent( oneName );this.setState({typeSelect:false})}}>
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
      :
      <div className="card-box">
        <div className = {style.centerbiaoti}>{choice}</div>
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
      zhaoCuoName: state.ButtonExpand.content,
      moBanName: state.PortTest.content2,
      choice: state.ButtonExpand.choice,
    }),
    dispatch => ({
      ...bindActionCreators( ButtonExpandActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( WriteKnowledgeActions , dispatch )
    })
  )],
  LunZhengKnowledge
);
