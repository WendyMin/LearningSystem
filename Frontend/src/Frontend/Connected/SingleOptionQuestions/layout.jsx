// @flow
/*
**   Antinux Innovation
**   Author: Eric Deng
*/
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import Button from 'UI/Button';

import Question from 'UI/SingleQuestion';

import AppearUD from 'Animation/AppearUD';

import style from 'style';

class SingleOptionQuestions extends React.PureComponent {
  static defaultProps = {
    questionSize: {
      width: 'auto',
      height: 'auto'
    }
  }
  render(){
    const {
      layoutFormat,
      //subject,
      questions,
      setChoice,
      questionSize,
      submiter,
      loader
    } = this.props;

    return (
      <div className="container">
      {
        questions.map( ( question , xuhao ) =>
          <div key={question.questionId} style={questionSize}>
            <Question
              layoutFormat={layoutFormat}
              xuhao={xuhao}
              // subject = {subject}
              {...question}
              onSetChoice={( cid ) => setChoice( question.questionId , cid )}
            />
            {/* <hr/> */}
          </div>
        )
      }
      </div>
    );
  }
};

export default connect(
  ({ SingleOptionQuestions: ownState }) => ({
    questions: ownState.content,
    loadingData: ownState.loadingData,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( SingleOptionQuestions );
