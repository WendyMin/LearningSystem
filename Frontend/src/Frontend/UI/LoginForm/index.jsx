/*
**   Antinux Innovation
**   Author: Eric Deng
*/
import React from 'react';
import { FormGroup , ControlLabel , FormControl } from 'react-bootstrap';
import ButtonControlPane from 'UI/ButtonControlPane';
import style from 'style';

class LoginForm extends React.Component {
  static defaultProps = {
    initName: "",
    initPassword: ""
  }

  constructor( props ){
    super( props );
    this.state = {
      username: props.initName,
      usernameValid: null,
      password: props.initPassword,
      passwordValid: null
    };
  }

  render(){
    const { usernameExist , failed , onCancel , goSignUp } = this.props;
    var usernameValid =
      this.state.usernameValid || ( failed ? !usernameExist ? "warning" : "success" : null );
    var passwordValid =
      this.state.passwordValid || ( failed && usernameExist ? "error" : null );
    return (
      <div className="container">
        <form>
          <FormGroup
            controlId="userLoginUsername"
            validationState={usernameValid}
            onSubmit={this.onLogin}
          >
            <ControlLabel className={style.username}>Username</ControlLabel>
            <FormControl
              className={style.inputUsername}
              type="text"
              value={this.state.username}
              placeholder="your username"
              onChange={this.inputUsername}
              onKeyDown={this.onKeyDown}
            />
            <FormControl.Feedback />
            {
              usernameValid !== "success" && usernameValid ?
                <ControlLabel>用户名{usernameExist ? "非法" : "不存在" }!</ControlLabel>
                :null
            }
          </FormGroup>
          <FormGroup
            controlId="userLoginUsername"
            validationState={passwordValid}
          >
            <ControlLabel className={style.username}>Password</ControlLabel>
            <FormControl
              className={style.inputUsername}
              type="password"
              value={this.state.password}
              placeholder="your password"
              onChange={this.inputPassword}
              onKeyDown={this.onKeyDown}
            />
            <FormControl.Feedback />
            {
              passwordValid === 'error' ?
                <ControlLabel>{!usernameExist ? "密码非法!" : "密码错误!" }</ControlLabel>
                :null
            }
          </FormGroup>
          <ButtonControlPane
            mainAction={{
              action: this.onLogin,
              text: "login"
            }}
            additionalActions={[{
              action: onCancel,
              text: "cancel"
            },{
              action: goSignUp,
              text: "sign up"
            }]}
          />
        </form>
      </div>
    );
  }

  onLogin = () => {
    const { username , password } = this.state;
    if( username.trim() && password.trim() ){
      this.props.onLogin({
        username: this.state.username,
        password: this.state.password
      });
    }
    else {
      this.setState({
        usernameValid: username.trim() ? null : 'error',
        passwordValid: password.trim() ? null : 'error'
      });
      setTimeout( () => this.setState({
        usernameValid: null,
        username: username.trim(),
        passwordValid: null,
        password: password.trim()
      }) , 2000 );
    }
  }

  onKeyDown = ev => {
    if( ev.key === 'Enter' ){
      this.onLogin();
    }
  }

  inputUsername = ev => {
    this.setState({
      username: ev.target.value
    });
  }

  inputPassword = ev => {
    this.setState({
      password: ev.target.value
    });
  }
};

export default LoginForm;
