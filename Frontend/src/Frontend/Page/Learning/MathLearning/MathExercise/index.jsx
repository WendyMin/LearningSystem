import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {  actions as LearningTypeSelectActions} from 'Connected/LearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class MathExercise extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeselect: true,
    }
  }



  render(){

    const {
      setLearningType,
      learningType,
    } = this.props;

    return(
      <React.Fragment>


        <div className="col-lg-2"></div>

        <div className="col-lg-8">
          <p>强化练习</p>
        </div>

        <div className="col-lg-2"></div>

        <div className="row">
          <div className={style.buttonright}>
            <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                onClick={() => {setLearningType("数学主页面")}} >
                返回学习主页面</button>
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
      username: state.UserManager.name,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
    })
  )],
  MathExercise
);
