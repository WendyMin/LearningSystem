import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import style from 'style';

class Navigation extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  render(){
    const {
      options,
      selectOption,
      option
    } = this.props;

    return(
      <div className = "container">
        <br/><img className = {style.picture}
                  src = "http://59.110.23.212/LearningSystem/admin.jpg"
                  //onMouseMove = {alert("显示用户名")}
                />
        <br/><div className = {style.username}> 用户名 </div><br/>
        <div>
          {options.map((option , key) =>
            <div key = {key} //className = {TextStyle[key]}
                onMouseMove = { () => selectOption( option ) }
                onClick = { () => selectOption( option ) }
            >{option}</div>
          )}
        </div>
      </div>
    )
  }





}


export default connect(
  ({ Navigation: ownState , ...state }) => ({
    option: ownState.option
    //paragraphedWords: ownState.paragraphedWords,
    //sentences: ownState.sentences,
    //choosedSentences: ownState.choosedSentences,
    //choosedWords: ownState.choosedWords,
    //showSentencesTranslates: ownState.showSentencesTranslates,
    //showAllTranslates: ownState.showAllTranslates,
    //allTranslates: ownState.allTranslates,
    //sentencesTranslates: ownState.sentencesTranslates
  }),
  dispatch => bindActionCreators( actionsCreators , dispatch )
)( Navigation);
