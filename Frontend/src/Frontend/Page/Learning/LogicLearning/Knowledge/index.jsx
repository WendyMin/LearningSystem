import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';
import {
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import TextAndImag from 'UI/TextAndImag';
import Info from 'UI/Info';
import Button from 'UI/Button';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';
import UserManagerWindow from "Windows/UserManager";

class Knowledge extends React.PureComponent {

  constructor( props ){
    super( props );
  }

  loadContent = () => {
    this.props.loadPortContent({
      url: "/api/logicZhishidian",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },
    });
  }

  componentDidMount(){
    this.loadContent();
  }


  render(){
    const {
      submitQuestionState,
      loadQuestionState,
      loadContent,
      loadContentState,
      total_content,
      ined,
      setLearningType
    } = this.props;
    //onsole.log(total_content.content)

    return (
      <React.Fragment>
        {total_content.flag == 1 ?
        <div>
          <div className={style.pageTitle}> 知识点精要 </div>

          <div className = {style.logic_knowledge}>
            <Loading
              loading={loadContentState.pending}
              wasLoaded={loadContentState.resolved}
              lastFailed={loadContentState.lastFailed}
              reloader={this.loadContent}
              center
            >
              <SlideRL play={ined}>
                <div>
                <h4 className = {style.dalei}> {total_content.chapter_name} </h4>
                <TextAndImag list = {total_content.content}/>
                {
                  total_content.shunxu == undefined ? null :
                  <div>{total_content.shunxu.map((onetype , key) =>
                  <div key = {key}>
                    <div className = {style.logic_knowledge_title}> {onetype} </div>
                    {total_content.xiaolei == undefined ? null:  <TextAndImag list = {total_content.xiaolei[key]} />}
                  </div>)}</div>
                }
                <Button className = {style.enterNextButton} text = {"进入重点习题"} onClick = {() => setLearningType("重点习题")}/>
                </div>
              </SlideRL>
            </Loading>
          </div>
        </div>
        :
        <Info info = "您还没有完成入口测试，请先完成入口测试！"/>
        }

      </React.Fragment>
    );
  }
};

export default applyHOCs([
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      chapter_name: state.ZhentiPerYearTongji.tongji,
      total_content: state.PortTest.content,
      loadContentState: state.PortTest.loadState,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch )
    })
  )],
  Knowledge
);
