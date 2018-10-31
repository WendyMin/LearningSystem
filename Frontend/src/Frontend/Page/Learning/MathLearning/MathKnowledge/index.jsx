import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

// import YueDu from 'Page/Learning/EnglishLearning/YueDu';

import {
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class MathKnowledge extends React.PureComponent {
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
      content
    } = this.props;
    // console.log(learnall);

    var TextStyle = [];
    this.state.changeColor1 ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
    this.state.changeColor2 ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
    this.state.changeColor3 ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;

    return(
      <React.Fragment>
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
      {
        content.map((onePict , key) => <img src = {onePict}/>
      )
      }
      </div>
      <div className="col-lg-2"></div>



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
      content: state.MathGetKnowledge.content
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
    })
  )],
  MathKnowledge
);
