import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';

// import Question from 'UI/SingleQuestion';
import Question from 'UI/MathSingleQuestion';
// import changeAlpToNum from 'Algorithm/changeAlpToNum';
import style from 'style';

class MathLevelTest extends React.PureComponent {

  render(){
    const {
      questions,
      setChoice_,
      questionSize,
      submiter,
      loader,
      autoNext,
      qtype,
      level,
      xuhao
    } = this.props;
    // console.log(questions)
    // console.log(qtype)

    var question = {
      qtype: questions[qtype][level].type,
      level: questions[qtype][level].nanyi,
      choosed : questions[qtype][level].choosed,
      questionId: questions[qtype][level].id,
      question: questions[qtype][level].question,
      options: questions[qtype][level].option,
      analysis: questions[qtype][level].analysis,
      rightKey: questions[qtype][level].answer,
      lock: questions[qtype][level].lock,
      show: questions[qtype][level].show
    }

    return (
      <div className="container">
        {/* <strong> &nbsp;&nbsp;&nbsp;&nbsp; <label>{question.type}</label>
        &nbsp;&nbsp;&nbsp;&nbsp; <label>{question.level}</label></strong> */}
        <Question
          {...question}
          layoutFormat = "leftRight"
          // whetherHaveXuhao = {true}
          xuhao = {xuhao}
          // whetherNeedDecode = {true}
          onSetChoice={ cid => {
              autoNext( cid , 10000 );
            }
          }
        />
      </div>
    );
  }

};

export default connect(
  ({ MathLevelTest: ownState }) => ({
    questions: ownState.content,
    qtype: ownState.nowAt.qtype,
    level: ownState.nowAt.level,
    xuhao: ownState.nowAt.xuhao
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( MathLevelTest );
