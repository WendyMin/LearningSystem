
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';

import style from 'style';

class WriteContent extends React.PureComponent {

  render(){
    const {
      title,
      title_article,
      name,
      example_article,
      submiter,
      loader,
      requestData
    } = this.props;
    console.log(this.props);



    return (
      <div className="container">
        <p className={style.title}> &nbsp;&nbsp;&nbsp;{title} </p><br/>
        {/*<p className={style.title}> &nbsp;&nbsp;&nbsp;{mainContent.title} </p><br/>
        Object.entries(mainContent.title_article).map(( [key , onePara] ) => {
          return(
            <div key = {key}> &nbsp;&nbsp;&nbsp;{onePara}</div>
          )
        })  <p className = {style.content}> &nbsp;&nbsp;&nbsp;{mainContent.title_article}</p>*/}
        {title_article == undefined ? null:
        <div>
          {title_article.map((onePara , key) => {
              return (
                <p className = {style.content} key = {key}>  &nbsp;&nbsp;&nbsp; {onePara} </p>
              )
            })}
        </div>
        }

      </div>
    );
  }
};

export default connect(
  ({ WriteContent: ownState }) => ({
    title: ownState.title,
    title_article: ownState.title_article,
    name: ownState.name,
    example_article: ownState.example_article
    //loadingData: ownState.loadingData,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( WriteContent );
