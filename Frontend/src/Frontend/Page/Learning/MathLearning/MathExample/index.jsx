import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {  actions as LearningTypeSelectActions} from 'Connected/LearningTypeSelect';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as MathGetExampleActions } from 'Connected/MathGetExample';

class MathExample extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeselect: true,
    }
  }

  componentDidMount(){
    this.getMathExample();
  }

  getMathExample = () => {
    this.props.loadMathExample({
      url: "/api/math_getExample",
      body: {
        type1: this.props.partPY,
        type2: this.props.chapterPY,
        type3: this.props.sectionPY,
      }
    })
  }

  render(){

    const {
      setLearningType,
      learningType,
      example,
      partCN,
      chapterCN,
      sectionCN,
      partPY,
      chapterPY,
      sectionPY,
    } = this.props;

    return(
      <React.Fragment>

        <div className={style.title}>{partCN}&nbsp;&nbsp;{chapterCN}&nbsp;&nbsp;{sectionCN}</div><br/>

        <div className="col-lg-2"></div>

        <div className="col-lg-8">
        {
          example.map((onePict , key) => <img src = {onePict}/>)
        }
        </div>

        <div className="col-lg-2"></div>

        <div className="row">
          <div className={style.buttonright}>
            <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                onClick={() => {setLearningType("数学主页面")}} >
                返回学习主页面</button>
          &nbsp;&nbsp;
          <button  class="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
              onClick={() => {setLearningType("数学习题")}} >
              进入强化练习</button>
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
      example: state.MathGetExample.content
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( MathGetExampleActions , dispatch ),
    })
  )],
  MathExample
);
