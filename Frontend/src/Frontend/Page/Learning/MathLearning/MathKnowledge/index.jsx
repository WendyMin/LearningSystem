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

import { actions as MathGetKnowledgeActions } from 'Connected/MathGetKnowledge';

class MathKnowledge extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeselect: true,
    }
  }

  componentDidMount(){
    this.getMathKnowledge();
  }

  getMathKnowledge = () => {
    this.props.loadMathKnowledge({
      url: "/api/math_getKnowlegde",
      body: {
        type1: this.props.partPY,
        type2: this.props.chapterPY,
        type3: this.props.sectionPY,
      }
    })
  }


  render(){
    const {
      knowledge,
      partCN,
      chapterCN,
      sectionCN,
      partPY,
      chapterPY,
      sectionPY,
    } = this.props;

    // console.log(learnall);

    return(
      <React.Fragment>


        <div className="col-lg-2"></div>

        <div className="col-lg-8">
        {
          knowledge.map((onePict , key) => <img src = {onePict}/>)
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
      knowledge: state.MathGetKnowledge.content
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( MathGetKnowledgeActions , dispatch ),
    })
  )],
  MathKnowledge
);
