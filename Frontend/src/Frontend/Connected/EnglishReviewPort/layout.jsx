import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';

import judgeIfImages from 'Algorithm/judgeIfImages';

import style from 'style';

class EnglishReviewPort extends React.PureComponent {

  render(){
    const {
      content,
      loader,
    } = this.props;
    console.log(this.props);

    return (
      <div className="container">
        <br/>
        <p>{content}</p>
      </div>
    );
  }
};

export default connect(
  ({ EnglishReviewPort: ownState }) => ({
    content: ownState.content,
    name2: ownState.name2,
    name3: ownState.name3,
    //title: ownState.title,
    //title_article: ownState.title_article,
    //name: ownState.name,
    //example_article: ownState.example_article
    //loadingData: ownState.loadingData,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( EnglishReviewPort );
