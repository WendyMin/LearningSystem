import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';

import Question from 'UI/SingleQuestion';
import changeAlpToNum from 'Algorithm/changeAlpToNum';
import style from 'style';

class SingleSubjectTest extends React.PureComponent {

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

    var question = {
      qtype: questions[qtype][level].type,
      level: questions[qtype][level].nanyi,
      choosed : questions[qtype][level].choosed,
      questionId: questions[qtype][level].id,
      question: questions[qtype][level].question,
      options: [questions[qtype][level].op_one, questions[qtype][level].op_two , questions[qtype][level].op_three, questions[qtype][level].op_four , questions[qtype][level].op_five],
      analysis: questions[qtype][level].analysis,
      rightKey: changeAlpToNum( questions[qtype][level].answer ),  //need to changge ABC to 123
      lock: questions[qtype][level].lock,
      show: questions[qtype][level].show
    }
    //console.log(question )
    // console.log(xuhao)

    return (
      <div className="container">
        {/* <strong> &nbsp;&nbsp;&nbsp;&nbsp; <label>{question.type}</label>
        &nbsp;&nbsp;&nbsp;&nbsp; <label>{question.level}</label></strong> */}
        <Question
          {...question}
          layoutFormat = "leftRight"
          whetherHaveXuhao = {true}
          xuhao = {xuhao}
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
  ({ SingleSubjectTest: ownState }) => ({
    questions: ownState.content,
    qtype: ownState.nowAt.qtype,
    level: ownState.nowAt.level,
    xuhao: ownState.nowAt.xuhao
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( SingleSubjectTest );
