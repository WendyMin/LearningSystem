import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

import MathKnowledge from 'Page/Learning/MathLearning/MathKnowledge';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class MathLearningTypeSelect extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeselect: true,
      changeColor1: false,
      changeColor2: false,
      changeColor3: false,
      changeColor4: false,
    }
  }


  render(){
    const {
      chapterNum,
      knowledgeNum,
      setLearningType,
      learningType,
      didtest,
    } = this.props;
    // console.log(learnall);

    var TextStyle = [];
    this.state.changeColor1 ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
    this.state.changeColor2 ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
    this.state.changeColor3 ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;

    return(

      <React.Fragment>
        <div className = {style.whole}>
          {
            learningType == "" || this.state.typeselect == true ?
              <div className="row port m-b-20">
                <div className={style.title}>章节{chapterNum}1&nbsp;&nbsp;知识点{knowledgeNum}1</div><br/>

                <div className="portfolioContainer">
                  <div className="col-lg-1"></div>

                  <a href="javascript:void(0);">
                   <div className="col-sm-6 col-lg-3 col-md-4 natural personal">
                       <div className="gal-detail thumb" onClick = {() => {setLearningType("数学知识点"); this.setState({typeselect: false}); }}
                       >
                           <div className="image-popup" >
                             <img src="/static/images/gallery/2.jpg" className="thumb-img" alt="work-thumbnail"/>
                           </div>
                           <h4 className = {TextStyle[0]}
                             onMouseOver = {() => this.setState({changeColor1: true})} onMouseLeave = {() => this.setState({changeColor1: false})}
                             >
                             知识点精要</h4>
                           <p className={style.text_muted1}>
                               开始学习本章节知识点吧！<br/>
                               根据目前英语水平进行推荐，请认真做题哟~可查看生词、难句、题目解析、全文翻译
                           </p>
                       </div>
                   </div>
                  </a>
                  {/* <div className="col-lg-1"></div> */}

                  <a href="javascript:void(0);">
                    <div className="col-sm-6 col-lg-3 col-md-4 creative personal photography">
                        <div className="gal-detail thumb" //onClick = {() => {setLearningType("英语生词难句"); this.setState({typeselect: false})}}
                        >
                            <div className="image-popup">
                              <img src="/static/images/gallery/5.jpg" className="thumb-img" alt="work-thumbnail"/>
                            </div>
                            <h4 className = {TextStyle[1]}
                              onMouseOver = {() => this.setState({changeColor2: true})} onMouseLeave = {() => this.setState({changeColor2: false})}
                              >
                                重点例题</h4>
                            <p className={style.text_muted1}>
                                本课阅读过程中遇到的生词和难句，我们都帮你记录好了<br/>
                                快来点击查看吧！
                            </p>
                         </div>
                    </div>
                  </a>
                  {/* <div className="col-lg-1"></div> */}

                  <a href="javascript:void(0);">
                   <div className="col-sm-6 col-lg-3 col-md-4 natural creative">
                      <div className="gal-detail thumb"// onClick = {() => {setLearningType("英语汉译英"); this.setState({typeselect: false})}}
                      >
                          <div className="image-popup">
                              <img src="/static/images/gallery/8.jpg" className="thumb-img" alt="work-thumbnail"/>
                          </div>
                          <h4 className = {TextStyle[2]}
                            onMouseOver = {() => this.setState({changeColor3: true})} onMouseLeave = {() => this.setState({changeColor3: false})}
                            >
                              强化练习</h4>
                          <p className={style.text_muted1}>
                              给中文，写英文，so easy~<br/>
                              每课将给出3句中文，可查看答案，巩固你的写作技能
                          </p>
                      </div>
                   </div>
                  </a>
                 <div className="col-lg-1"></div>

              </div>
            </div>

            :
            learningType == "数学知识点" ? <MathKnowledge/>:
            learningType == "英语生词难句" ? <Shengcinanju/>:
            learningType == "英语汉译英" ?  <ChtoEng/>:
            learningType == "英语课后阅读材料" ? <EngExtraArticle/>
            :null
          }
        </div>



      </React.Fragment>

    )
  }




}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      username: state.UserManager.name,
      learningType: state.LearningTypeSelect.learningType,
      didtest: state.EnglishLearningTypePort.didtest,
      learnall: state.EnglishLearningTypePort.learnall,
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
    })
  )],
  MathLearningTypeSelect
);
