import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import {
  view as ZhentiAllYearTongji,
  actions as ZhentiAllYearTongjiActions
} from 'Connected/ZhentiAllYearTongji';
import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunZhengTongji extends React.PureComponent {

  constructor( props ){
    super( props );
  }

  /* 加载所有做过的真题的统计数据 ， 推荐知识点 ， 推荐文章等 */
  loadAllZhentiTongji = () => {
    this.props.loadAllZhentiTongji({
      url: "/api/lunZhengAllYearTongji",
      body: {
        username: this.props.username
      }
    });
    this.props.loadTuijianZhishidianName({
      url: "/api/lunZhengTuijianZhishidianName",
      body: {
        username: this.props.username
      }
    });
    this.props.loadTuijianArticle({
      url: "/api/lunZhengTuijianArticle",
      body: {
        username: this.props.username
      }
    });
  }


  componentDidMount(){
    this.loadAllZhentiTongji()
  }

  componentWillReceiveNextProps(NextPorts){
    if(this.props.choice!==NextProps.choice){
      //this.loadZhentiContent()
    }
  }


  render(){
    const{
      choice
    } = this.props;
    //console.log(this.props.title.length === 0)
    return (
      <React.Fragment>
        {/* <div className="card-box"> */}
        <ZhentiAllYearTongji/>
        {/* <div className = {style.whoZhentiPart}>
        <div className={style.title}>
          <div className={style.zhentiMingcheng}>{choice}</div>
          <WriteContent className={style.zhentiContent}  loader={this.loadWriteContents}/>
        </div>
        {
          this.props.title.length === 0 ? null :
          <div className={style.option}>
             <MultOptionQuestons/>
          </div>
        }

        </div> */}
      {/* </div> */}
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
      choice: state.ButtonExpand.choice,
      title: state.WriteContent.title
    }),
    dispatch => ({
      ...bindActionCreators( ZhentiAllYearTongjiActions , dispatch ),
    //  ...bindActionCreators( WriteContentActions , dispatch ),
    //  ...bindActionCreators( PortTestActions , dispatch ),
    })

  )],
  LunZhengTongji
);
