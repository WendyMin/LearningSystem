import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';
import judgeIfImages from 'Algorithm/judgeIfImages';
import style from 'style';

class WriteKnowledge extends React.PureComponent {

  render(){
    const {
      content,
      name2,
      name3,
      submiter,
      loader,
      requestData
    } = this.props;
    //console.log(this.props);

    return (
      <div className="container">
        <br/>
        {content.map((onePara , key) => {
          //console.log(onePara)  //console.log(judgeIfImages(onePara , name2 , name3))
          if (judgeIfImages(onePara , name2 , name3) == 1){
            return(<div key = {key} align = "center"><img src = {onePara}/><br/><br/></div>)
          }
          else {
            if (judgeIfImages(onePara , name2 , name3) == 2){
              return(<p key = {key} className = {style.biaoti2}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>)
            }
            else{
              if (judgeIfImages(onePara , name2 , name3) == 3){
                return(<p key = {key} className = {style.biaoti3}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>)
              }
              return(<p key = {key} className = {style.para}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>)}
          }

        })}

      </div>
    );
  }
};

export default connect(
  ({ WriteKnowledge: ownState }) => ({
    content: ownState.content,
    name2: ownState.name2,
    name3: ownState.name3,
    //loadingData: ownState.loadingData,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( WriteKnowledge );
