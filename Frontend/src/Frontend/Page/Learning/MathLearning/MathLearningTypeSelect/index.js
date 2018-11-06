import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

import MathKnowledge from 'Page/Learning/MathLearning/MathKnowledge';
import MathExample from 'Page/Learning/MathLearning/MathExample';
import MathExercise from 'Page/Learning/MathLearning/MathExercise';

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
    }
  }


  render(){
    const {
      partPY,
      chapterPY,
      sectionPY,
      partCN,
      chapterCN,
      sectionCN,
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
            learningType == "数学主页面" || this.state.typeselect == true ?
              <div className="row port m-b-20">
                <div className={style.title}>{partCN}&nbsp;&nbsp;{chapterCN}&nbsp;&nbsp;{sectionCN}</div><br/>

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
                               开始学习本章节知识点吧！
                           </p>
                       </div>
                   </div>
                  </a>

                  <a href="javascript:void(0);">
                    <div className="col-sm-6 col-lg-3 col-md-4 creative personal photography">
                        <div className="gal-detail thumb" onClick = {() => {setLearningType("数学例题"); this.setState({typeselect: false})}}
                        >
                            <div className="image-popup">
                              <img src="/static/images/gallery/5.jpg" className="thumb-img" alt="work-thumbnail"/>
                            </div>
                            <h4 className = {TextStyle[1]}
                              onMouseOver = {() => this.setState({changeColor2: true})} onMouseLeave = {() => this.setState({changeColor2: false})}
                              >
                                重点例题</h4>
                            <p className={style.text_muted1}>
                                本章的重点例题，我们都帮你整理好了<br/>
                                快来点击查看吧！
                            </p>
                         </div>
                    </div>
                  </a>

                  <a href="javascript:void(0);">
                   <div className="col-sm-6 col-lg-3 col-md-4 natural creative">
                      <div className="gal-detail thumb" onClick = {() => {setLearningType("数学习题"); this.setState({typeselect: false})}}
                      >
                          <div className="image-popup">
                              <img src="/static/images/gallery/8.jpg" className="thumb-img" alt="work-thumbnail"/>
                          </div>
                          <h4 className = {TextStyle[2]}
                            onMouseOver = {() => this.setState({changeColor3: true})} onMouseLeave = {() => this.setState({changeColor3: false})}
                            >
                              强化练习</h4>
                          <p className={style.text_muted1}>
                            一起来巩固一下吧~
                          </p>
                      </div>
                   </div>
                  </a>
                 <div className="col-lg-1"></div>

              </div>
            </div>

            :learningType == "数学知识点" ?
             <MathKnowledge
               partCN = {this.props.partCN} chapterCN = {this.props.chapterCN} sectionCN = {this.props.sectionCN}
               partPY = {this.props.partPY} chapterPY = {this.props.chapterPY} sectionPY = {this.props.sectionPY}
             />
            :learningType == "数学例题" ? <MathExample />
            :learningType == "数学习题" ? <MathExercise />
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
