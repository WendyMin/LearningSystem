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

class EngExtraArticle extends React.PureComponent {
  constructor( props ){
    super( props );
    this.haveArticleId=false;
    this.state = {
      getArticleId: false,
    }
  }

  componentWillMount(){
    this.loadArticleId();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.articleId != undefined && this.haveArticleId===false){
      this.loadExtraArticle(nextProps.articleId);
      this.haveArticleId=true;
    }
  }

  loadExtraArticle = ( articleId ) => {
    this.props.loadPortContent({
      url: "/api/eng_getExtraArticle",
      body: {
        articleId:  articleId,
      }
    })
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
      extraArticle,
    } = this.props;

    return(
      <React.Fragment>
        <div>
          <div className="row">

            <div className="col-md-6" >
              <div className="card-box kanban-box">
                <div className="kanban-detail">
                  {/* <span className="label label-primary pull-right">Translate</span> */}
                  <p className={style.title}>{extraArticle.title}</p>
                  <ul className="list-inline m-b-0">
                    <li>
                      <p className={style.title18}>{extraArticle.content}</p>
                      <br/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6" >
              <div className="card-box kanban-box">
                <div className="kanban-detail">
                  {/* <span className="label label-primary pull-right">Translate</span> */}
                  <p className={style.title}>{extraArticle.title_translate}</p>
                  <ul className="list-inline m-b-0">
                    <li>
                      <p className={style.title18}>{extraArticle.content_translate}</p>
                      <br/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>


          {/* <div className={style.ShowEngAndReturn}>
          <Button text="返回英语学习主页面" onClick={() => {setLearningType("英语主页面")}}/>
          </div> */}

          <div className="row">
            <div className={style.buttonright}>
              <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                  onClick={() => {setLearningType("英语主页面")}} >
                  返回英语学习主页面</button>
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
      extraArticle: state.PortTest.content,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  EngExtraArticle
);
// export default Shengcinanju
