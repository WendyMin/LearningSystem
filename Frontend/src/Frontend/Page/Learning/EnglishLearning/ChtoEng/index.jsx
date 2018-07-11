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

class ChtoEng extends React.PureComponent {

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
                <div className={style.title}>写作句型练习 </div>
                <br/>
                {
                  content.length==0?null:
                  content.map((chtoeng, key)=>
                  <div key={key} className="col-md-12" >
                    <div className="card-box kanban-box">
                      <div className="kanban-detail">
                        {/* <span className="label label-primary pull-right">Translate</span> */}
                        <p className={style.title18}>
                          {chtoeng.chinese}</p>
                        <ul className="list-inline m-b-0">
                          <textarea rows="2" class="form-control" placeholder="Write your answer"></textarea>
                          <li>
                            <br/>
                            {
                              this.state.submit?
                              <p className={style.title16}><strong>参考答案：</strong>{chtoeng.english}</p>
                              :null
                            }
                            {/* <p className={style.title16}><strong>翻译：</strong>{chtoeng.english}</p> */}
                            <br/>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  )
                }
              </div>

              {/* <div className="row">
                <div className={style.ShowEngAndReturn}>
                  <Button text="返回英语学习主页面" onClick={() => {setLearningType("英语主页面")}}/>
                  &nbsp;&nbsp;
                  <Button text="显示答案" onClick={() => this.setState({submit: true}) }/>
                  &nbsp;&nbsp;
                  <Button text="进入课后阅读材料" onClick={() => {setLearningType("英语课后阅读材料")} }/>
                </div>
              </div> */}

              <div className="row">
                <div className={style.buttonright}>
                  <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                      onClick={() => {setLearningType("英语主页面")}} >
                      返回英语学习主页面</button>
                &nbsp;&nbsp;
                <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                    onClick={() => this.setState({submit: true})} >
                    显示答案</button>
                &nbsp;&nbsp;
                <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                    onClick={() => {setLearningType("英语课后阅读材料")}} >
                    进入课后阅读材料</button>
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
  ChtoEng
);
