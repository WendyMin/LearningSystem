import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import Button from 'UI/Button';

import Question from 'UI/SingleQuestion';
import MathQuestion from 'UI/MathSingleQuestion';

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
      subject,
      layoutFormat,
      questionLength,
      paraLength,
      questions,
      setChoice,
      questionSize,
      submiter,
      loader,
      whetherHaveXuhao
    } = this.props;

    return (
      <div className="container">
      {
        questions.map( ( question , xuhao ) =>
          <div key={question.questionId} style={questionSize}>
          {
            subject == "math" ?
            <MathQuestion
              layoutFormat={layoutFormat}
              // questionLength={questionLength}
              // paraLength = {paraLength}
              // whetherHaveXuhao = {whetherHaveXuhao}
              xuhao={xuhao + 1}
              {...question}
              onSetChoice={( cid ) => setChoice( question.questionId , cid )}
            />
            :
            <Question
              layoutFormat={layoutFormat}
              questionLength={questionLength}
              paraLength = {paraLength}
              whetherHaveXuhao = {whetherHaveXuhao}
              xuhao={xuhao + 1}
              {...question}
              onSetChoice={( cid ) => setChoice( question.questionId , cid )}
            />
          }

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
