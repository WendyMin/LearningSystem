import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';

import style from 'style';

class EnglishShengciNanjuPort extends React.PureComponent {

  render(){
    const {
      content,
      loader,
    } = this.props;
    // console.log(this.props);

    return (
      <div className="container">
        <br/>
        <p>{content}</p>
      </div>
    );
  }
};

export default connect(
  ({ EnglishShengciNanjuPort: ownState }) => ({
    content: ownState.content,
    name2: ownState.name2,
    name3: ownState.name3,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( EnglishShengciNanjuPort );
