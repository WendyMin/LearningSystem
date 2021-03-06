import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';

import Question from 'UI/SingleQuestion';
//import AppearUD from 'Animation/AppearUD';
// import changeAlpToNum from 'Algorithm/changeAlpToNum';
import style from 'style';

class EnglishWordTest extends React.PureComponent {

  render(){
    const {
      questions,
      setChoice_,
      submiter,
      loader,
      autoNext,
      level,
      num,
      xuhao
    } = this.props;

    // console.log(questions)

    var question = {
      choosed : questions[level][num].choosed,
      question: questions[level][num].word,
      options: questions[level][num].options,
      rightKey: questions[level][num].key,
      lock: questions[level][num].lock,
      show: questions[level][num].show,
    }

    return (
      <div className="container" //style={questionSize} style={"text_align": "center"}
        >
        {/* <strong> &nbsp;&nbsp;&nbsp;&nbsp; <label>{question.type}</label>
        &nbsp;&nbsp;&nbsp;&nbsp; <label>{question.level}</label></strong> */}
        <Question
          {...question}
          layoutFormat = "upDown"
          questionLength = "single"
          paraLength = "none"
          whetherHaveXuhao = {true}
          xuhao = {xuhao}
          onSetChoice={ cid => {
              autoNext( cid , 600 );
            }
          }
        />
      </div>
    );
  }

};

export default connect(
  ({ EnglishWordTest: ownState }) => ({
    questions: ownState.content,
    level: ownState.nowAt.level,
    num: ownState.nowAt.num,
    xuhao: ownState.nowAt.xuhao
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( EnglishWordTest );
