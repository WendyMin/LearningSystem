import React from 'react';
import style from 'style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from 'UI/Button';

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
import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';


import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class Shengcinanju extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      getArticleId: false,
    }
  }

  componentWillMount(){
    this.loadArticleId();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.articleId != undefined && nextProps.articleId != this.props.articleId){
      this.loadShengCi(nextProps.articleId);
      this.loadNanJu(nextProps.articleId);
    }
  }

  loadShengCi = ( articleId ) => {
    this.props.loadPortContent({
      url: "/api/eng_getUserWord",
      body: {
        username:  this.props.username,
        // ariticleId: 24,
        articleId: articleId,
      }
    })
  }

  loadNanJu = ( articleId ) => {
    this.props.loadPortContent3({
      url: "/api/eng_getUserSentence",
      body: {
        username:  this.props.username,
        // articleId: 24,
        articleId: articleId,
      }
    });
  }

  loadArticleId = () => {
    this.props.loadPortContent2({
      url: "/api/eng_getArticleId",
      body: {
        username:  this.props.username,
      }
    });
  }


  render(){

    const {
      setLearningType,
      learningType,
      articleId,
      shengci,
      nanju,
    } = this.props;

    return(
      <React.Fragment>
        <div>
          <div className={style.title}>本课生词：</div>
          <br/>
          <div className={style.chtoengall}>
            {
              shengci[0] == undefined?null:
              shengci.map((word, key)=>
              <div key = {key} >
                <b>{ word.word_l }</b>
                <br/>
                <p>{ word.translate }</p>
              </div>
              )
            }
          </div>

          <br/>

          <div className={style.title}>本课难句：</div>
          <br/>
          <div className={style.chtoengall}>
          {
            nanju == undefined?null:
            nanju.map((sentence, key)=>
            <div key = {key} >
              <b>{ sentence.sentence }</b>
              <br/>
              <p>{ sentence.translate }</p>
            </div>
            )
          }
        </div>
          <br/>


          <div className={style.ShowEngAndReturn}>
          <Button text="返回英语学习主页面" onClick={() => {setLearningType("英语主页面")}}/>
          &nbsp;&nbsp;
          <Button text="进入汉译英" onClick={() => {setLearningType("英语汉译英")} }/>
          </div>

        </div>

      </React.Fragment>
    )
  }

}


export default applyHOCs([
  makePage,
  connect(
    state => ({
      learningType: state.LearningTypeSelect.learningType,
      username: state.UserManager.name,
      // articleId: state.EnglishArticle.articleId,
      articleId: state.PortTest.content2.pre_artid,
      shengci: state.PortTest.content,
      nanju: state.PortTest.content3,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  Shengcinanju
);
// export default Shengcinanju
