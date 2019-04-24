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

class ManageChart extends React.PureComponent {

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
                <div className={style.title}>用户数据 </div>
                <br/>


                <div className="col-md-4" >
                  <div className="card-box kanban-box">
                    <div className="kanban-detail">
                        <span className="label label-primary pull-right">Finished</span>
                        <div className={style.title18}>
                          User 1
                        </div>
                        <ul className="list-inline m-b-0">
                            <li>
                                <br/>
                                <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5"

                                    >英语</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                   >逻辑</button>
                                <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                    >写作</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                       >数学</button>
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>


                <div className="col-md-4" >
                  <div className="card-box kanban-box">
                    <div className="kanban-detail">
                        <span className="label label-primary pull-right">Finished</span>
                        <div className={style.title18}>
                          User 1
                        </div>
                        <ul className="list-inline m-b-0">
                            <li>
                                <br/>
                                <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5"

                                    >英语</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                   >逻辑</button>
                                <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                    >写作</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                       >数学</button>
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>



                <div className="col-md-4" >
                  <div className="card-box kanban-box">
                    <div className="kanban-detail">
                        <span className="label label-primary pull-right">Finished</span>
                        <div className={style.title18}>
                          User 1
                        </div>
                        <ul className="list-inline m-b-0">
                            <li>
                                <br/>
                                <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5"

                                    >英语</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                   >逻辑</button>
                                <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                    >写作</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                       >数学</button>
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>



                <div className="col-md-4" >
                  <div className="card-box kanban-box">
                    <div className="kanban-detail">
                        <span className="label label-primary pull-right">Finished</span>
                        <div className={style.title18}>
                          User 1
                        </div>
                        <ul className="list-inline m-b-0">
                            <li>
                                <br/>
                                <button className="btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5"

                                    >英语</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                   >逻辑</button>
                                <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                    >写作</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"

                                       >数学</button>
                            </li>
                        </ul>
                    </div>
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
  ManageChart
);
