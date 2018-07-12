import React from 'react';
import style from 'style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';
import {
  view as EnglishExtraArticlePort,
  actions as EnglishExtraArticlePortActions
} from 'Connected/EnglishExtraArticlePort';
// import { actions as PortTestActions } from 'Connected/PortTest';


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
    this.loadArticleid();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.articleId != undefined && this.haveArticleId===false){
      this.loadExArticle(nextProps.articleId);
      this.haveArticleId=true;
    }
  }

  loadExArticle = ( articleId ) => {
    this.props.loadExtraArticle({
      url: "/api/eng_getExtraArticle",
      body: {
        articleId:  articleId,
      }
    })
  }

  loadArticleid = () => {
    this.props.loadArticleId({
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
      articleId: state.EnglishExtraArticlePort.articleIds.pre_artid,
      extraArticle: state.EnglishExtraArticlePort.extraArticle,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      // ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( EnglishExtraArticlePortActions , dispatch ),
    })
  )],
  EngExtraArticle
);
// export default Shengcinanju
