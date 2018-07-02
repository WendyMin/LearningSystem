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
      //level
      //lockAndShow
    } = this.props;
    //console.log(questions)

    var question = {
      choosed : questions[level][num].choosed,
      question: questions[level][num].word,
      options: [ questions[level][num].options[0], questions[level][num].options[1] , questions[level][num].options[2], questions[level][num].options[3] ],
      rightKey: questions[level][num].key,
      lock: questions[level][num].lock,
    }
    //console.log(question )

    return (
      <div className="container" //style={questionSize} style={"text_align": "center"}
        >
        {/* <strong> &nbsp;&nbsp;&nbsp;&nbsp; <label>{question.type}</label>
        &nbsp;&nbsp;&nbsp;&nbsp; <label>{question.level}</label></strong> */}
        <Question
          {...question}
          layoutFormat = "upDown"
          // subject = "logic_test"
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
  ({ SingleSubject: ownState }) => ({
    questions: ownState.content,
    level: ownState.nowAt.level,
    num: ownState.nowAt.level,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( EnglishWordTest );