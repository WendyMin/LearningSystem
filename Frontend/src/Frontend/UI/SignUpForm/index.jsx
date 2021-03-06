/*
**   Antinux Innovation
**   Author: Eric Deng
*/
import React from 'react';
import { FormGroup , ControlLabel , FormControl } from 'react-bootstrap';
import ButtonControlPane from 'UI/ButtonControlPane';
import style from 'style';

class SignUpForm extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      username: "",
      usernameValid: null,
      password: "",
      passwordValid: null,
      passwordConfirm: "",
      consistent: true
    };
  }

  render(){
    const { usernameExist , failed , onCancel } = this.props;
    var usernameValid =
      this.state.usernameValid || ( failed ? usernameExist ? "warning" : "success" : null );
    var passwordValid = this.state.passwordValid;
    var passwordValidConfirm =
      this.state.consistent ? passwordValid ? "success" : null : "error";
    return (
      <div className="container">
        <form>
          <FormGroup
            controlId="userSignUpUsername"
            validationState={usernameValid}
            onSubmit={this.onLogin}
          >
            <ControlLabel  className={style.username}> username </ControlLabel>
            <FormControl
              className={style.inputUsername}
              type="text"
              value={this.state.username}
              placeholder="Signup name"
              onChange={this.inputUsername}
              onKeyDown={this.onKeyDown}
            />
            <FormControl.Feedback />
            {
              usernameValid !== "success" && usernameValid ?
                <ControlLabel>用户名{!usernameExist ? "非法" : "已存在" }!</ControlLabel>
                :null
            }
          </FormGroup>

          <FormGroup
            controlId="userSignUpPassword"
            validationState={passwordValid}
          >
            <ControlLabel className={style.username}> password </ControlLabel>
            <FormControl
              className={style.inputUsername}
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.inputPassword}
              onKeyDown={this.onKeyDown}
            />
            <FormControl.Feedback />
            {
              passwordValid === 'error' ?
                <ControlLabel>密码非法!</ControlLabel>
                :null
            }
          </FormGroup>

          <FormGroup
            controlId="userSignUpConfirm"
            validationState={passwordValidConfirm}
          >
            <ControlLabel  className={style.username}> confirm your password </ControlLabel>
            <FormControl
              className={style.inputUsername}
              type="password"
              value={this.state.passwordConfirm}
              placeholder="reenter password"
              onChange={this.inputPasswordConfirm}
              onKeyDown={this.onKeyDown}
            />
            <FormControl.Feedback />
            {
              passwordValid === 'error' ?
                <ControlLabel>密码非法!</ControlLabel>
                :null
            }
          </FormGroup>

          <ButtonControlPane
            mainAction={{
              action: this.onSignUp,
              text: "signup"
            }}
            additionalActions={[{
              action: onCancel,
              text: "cancel"
            }]}
          />
        </form>
      </div>
    );
  }

  onSignUp = () => {
    const { username , password } = this.state;
    if( username.trim() && password.trim() ){
      this.props.onSignUp({
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

  inputPasswordConfirm = ev => {
    this.setState({
      passwordConfirm: ev.target.value
    });
  }

  inputPassword = ev => {
    this.setState({
      password: ev.target.value
    });
  }
};

export default SignUpForm;
