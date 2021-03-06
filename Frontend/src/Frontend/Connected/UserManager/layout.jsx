import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';
import LoginForm from 'UI/LoginForm';
import SignUpForm from 'UI/SignUpForm'

import style from 'style';

class UserManager extends React.PureComponent {
  state = {
    login: true
  }

  // componentWillReceiveProps( nextProps ){
  //   if( nextProps.logined !== this.props.logined ){
  //     this.props.onSuccess();
  //   }
  // }

  signup = () => {
    this.setState({
      login: false
    });
  }

  goLogin = () => {
    this.setState({
      login: true
    });
  }
  render(){
    //const { onCancel , login , signup , logined , logining , usernameExist , name , password , failed } = this.props;
    const { loginOrSignup , onCancel , login , signup , logined , logining , usernameExist , name , password , failed } = this.props;
    //console.log(this.props)
    return (
      <React.Fragment>
      {
        //this.state.login ?
        loginOrSignup == "login" ?
          <LoginForm
            logining = {logining}
            logined = {logined}
            failed = {failed}
            usernameExist = {usernameExist}
            initName = {name}
            initPassword = {password}
            onLogin = {login}
            onCancel = {onCancel}
            goSignUp = {signup}
            //goSignUp = {this.signup}
          />
          :
          <SignUpForm
            failed = {failed}
            usernameExist = {usernameExist}
            onSignUp = {signup}
            onCancel = {onCancel}
            //onSignUp = {signup}
            //onCancel = {this.goLogin}
          />
      }
      </React.Fragment>
    );
  }
};

export default connect(
  ({ UserManager: state }) => ({
    logined: state.logined,
    logining: state.logining,
    failed: state.failed,
    networkError: state.networkError,
    serverError: state.serverError,
    usernameExist: state.validName,
    name: state.name,
    password: state.password
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( UserManager );
