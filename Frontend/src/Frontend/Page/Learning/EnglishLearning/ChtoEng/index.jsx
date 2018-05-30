import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import WriteGraph from 'UI/WriteGraph';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

class ChtoEng extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      submit: false
    };
  }

  componentDidMount(){
    this.loadChtoEng();
  }

loadChtoEng = () => {
  this.props.loadPortContent({
    url: "/api/eng_getWriteTest",
    body: {
      username:  this.props.username,
      articleId: this.props.articleId
    }
  })
}


  render(){

    const {
      content,
      setLearningType,
      learningType,
    } = this.props;

    // console.log(this.props.articleId)

    return (
      <React.Fragment>

        {
            <div>
              <div className={style.pageTitle}> 汉译英 </div>
              <br/>
              {
                // content[0] == undefined?null:
                content.length==0?null:
                content.map((chtoeng, key)=>
                <div key = {key} className={style.chtoengall}>
                  { chtoeng.chinese }
                  <br/>
                  <textarea  aria-label="With textarea" className = {style.textarea}></textarea>
                  {
                    this.state.submit?
                    <p> { chtoeng.english }</p>
                    :
                    null
                  }
                </div>
                )
              }
              {
                <div className={style.ShowEngAndReturn}>

                <Button text="返回英语学习主页面" onClick={() => {setLearningType("英语主页面")}}/>
                &nbsp;&nbsp;
                <Button text="显示答案" onClick={() => this.setState({submit: true}) }/>
                </div>
              }
            </div>
        }

      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      articleId: state.EnglishArticle.articleId,
      content: state.PortTest.content,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  ChtoEng
);
