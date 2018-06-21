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
    this.haveArticleId = false;
    this.state = {
      getArticleId: false,
    }
  }

  componentWillMount(){
    this.loadArticleId();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.articleId != undefined && this.haveArticleId===false){
      this.loadShengCi(nextProps.articleId);
      this.loadNanJu(nextProps.articleId);
      this.haveArticleId=true;
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
          <div className="row">
            <div className={style.title}>本课生词</div>
            <br/>
            {
              shengci[0] == undefined?null:
              shengci.map((word, key)=>
              <div key={key} className="col-md-3" >
                <div className={style.cardboxfix}>
                  <div className="kanban-detail">
                    <span className="label label-primary pull-right">Word</span>
                    <p className={style.title18}>{word.word_l}</p>
                    <ul className="list-inline m-b-0">
                      <li>
                        <p className={style.title16}>{word.translate}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              )
            }
          </div>

          <br/>

          <div className="row">
            <div className={style.title}>本课难句</div>
            <br/>
            {
              nanju == undefined?null:
              nanju.map((sentence, key)=>
              <div key={key} className="col-md-12" >
                <div className="card-box kanban-box">
                  <div className="kanban-detail">
                    <span className="label label-primary pull-right">Sentence</span>
                    <p className={style.title18}>
                      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                      {sentence.sentence}</p>
                    <ul className="list-inline m-b-0">
                      <li>
                        <br/>
                        <p className={style.title16}><strong>翻译：</strong>{sentence.translate}</p>
                        <br/>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              )
            }
          </div>

          <br/>

          <div className="row">
            <div className={style.buttonright}>
              <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                  onClick={() => {setLearningType("英语主页面")}} >
                  返回英语学习主页面</button>
            &nbsp;&nbsp;
            <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                onClick={() => {setLearningType("英语汉译英")}} >
                进入汉译英</button>
            </div>
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
