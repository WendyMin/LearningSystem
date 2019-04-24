import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';
import {
  view as EnglishChtoEngPort,
  actions as EnglishChtoEngPortActions
} from 'Connected/EnglishChtoEngPort';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

// import { actions as PortTestActions } from 'Connected/PortTest';

class ManageFeedback extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      submit: false
    };
  }

  componentDidMount(){
    this.loadChtoEnglish();
  }

loadChtoEnglish = () => {
  this.props.loadChtoEng({
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

              <div className="row">
                <div className={style.title}>反馈信息 </div>
                <br/>

                <div className="col-md-12" >
                  <div className="card-box kanban-box">


                  <table className="table table-bordered m-0" align = "center">
                    <thead>
                      <tr>
                        <th>用户名</th>
                        <th>反馈信息</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>user1</th>
                        <th>英语有点难</th>
                      </tr>
                      <tr>
                        <th>user2</th>
                        <th>数学做得挺好的[点击查看图片]</th>
                      </tr>
                      <tr>
                        <th>user3</th>
                        <th>数学做得挺好的</th>
                      </tr>
                      <tr>
                        <th>user4</th>
                        <th>数学做得挺好的</th>
                      </tr>
                    </tbody>
                  </table>



                  </div>
                </div>
              </div>

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
      content: state.EnglishChtoEngPort.chtoeng,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      // ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( EnglishChtoEngPortActions , dispatch ),
    })
  )],
  ManageFeedback
);
