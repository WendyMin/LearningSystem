import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';

import style from 'style';

class MathReviewPort extends React.PureComponent {

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
  ({ MathReviewPort: ownState }) => ({
    content: ownState.content,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( MathReviewPort );
