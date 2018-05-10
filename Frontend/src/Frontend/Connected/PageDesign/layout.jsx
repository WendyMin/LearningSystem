import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from 'actions';
import style from 'style';

import {
  view as SubjectSelect,
  actions as SubjectSelectActions
} from 'Connected/SubjectSelect';

class PageDesign extends React.PureComponent {
  render(){
    const {
      username,
      subjectFunctions,
      loadUserInfo,
      showUserInfo
    } = this.props;

    return (
      <div className = {style.wholeLogicPage}>

        <div className = {style.logicPageTitle}>
          <div className = {style.title}> 学习系统 </div>
          <div className = {style.goback} onClick = {() => history.back()}> 返回 </div>
        </div>

        <div className = {style.leftNavigation}>
          <div className = {style.userPart} onMouseOver = {loadUserInfo}>
            <br/><img className = {style.picture} src = "/static/images/admin.jpg" />
            <br/><div className = {style.username}> {username} </div><br/>
          </div>
          <SubjectSelect text = {subjectFunctions} normalStyle = {style.normalText} choosedStyle = {style.chosedText} />
        </div>

        <div className = {style.mainContent}>
          {
            showUserInfo ?
            <div className = {style.userInfo}>此处应该为用户的一些基本信息</div>
            :
            null
          }
        </div>


      </div>
    )
  }
}

export default connect(
  state => ({
    username: state.UserManager.name,
    showUserInfo: state.PageDesign.showUserInfo
  }),
  dispatch => bindActionCreators( actionsCreators , dispatch )
)( PageDesign );
