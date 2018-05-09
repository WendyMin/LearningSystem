import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import style from 'style';

class SubjectSelect extends React.PureComponent {
  render(){

    const {
      text,
      normalStyle,
      choosedStyle,
      setSubject,
      choice,
    } = this.props;

    var TextStyle = [];

    for( var i = 0 ; i < text.length ; i++ ){
      if(i == choice){ TextStyle[i] = choosedStyle }
      else { TextStyle[i] = normalStyle}
    }

    return (
      <div className="container">
        {text.map((sub , key) =>
          <div key = {key} className = {TextStyle[key]}
              onMouseOver = { () => setSubject( key ) }
              onClick = { () => setSubject( key ) }
          > {sub} </div>
        )}
      </div>
    )
  }





}


export default connect(
  ({ SubjectSelect: ownState }) => ({
    choice:  ownState.choice
    //questions: ownState.content,
    //loadingData: ownState.loadingData,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( SubjectSelect );
