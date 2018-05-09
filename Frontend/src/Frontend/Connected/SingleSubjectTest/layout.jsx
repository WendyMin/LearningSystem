import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';

import Question from 'UI/SingleQuestion';
//import AppearUD from 'Animation/AppearUD';
import changeAlpToNum from 'Algorithm/changeAlpToNum';
import style from 'style';

class SingleSubjectTest extends React.PureComponent {
  /*static defaultProps = {
    questionSize: {
      width: '60%',
      left: '20%',
      top: '15%'
    }
  }*/

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
      //qtype,
      //lockAndShow
    } = this.props;
    //console.log(questions)

    var question = {
      type: questions[qtype][level].type,
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


    return (
      <div className="container" //style={questionSize} style={"text_align": "center"}
        >
        <strong> &nbsp;&nbsp;&nbsp;&nbsp; <label>{question.type}</label>
        &nbsp;&nbsp;&nbsp;&nbsp; <label>{question.level}</label></strong>
        <Question
          {...question}
          subject = "logic_test"
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
    //loadingData: ownState.loadingData,
    qtype: ownState.nowAt.qtype,
    level: ownState.nowAt.level,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( SingleSubjectTest );
