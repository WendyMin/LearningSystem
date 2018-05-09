import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import WriteGraph from 'UI/WriteGraph';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import {
  view as ButtonExpand,
  actions as ButtonExpandActions
} from 'Connected/ButtonExpand';

class UITest extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      processStep: 0,
    };
  }
/*function = () => {
  this.props.loadButtonContents({
    //module.exports = ({ req , res }) => {
      //const { name,password } = req.body;
      //const [ errCode , res ] = callPython("login.py",`${name} $password`);
      //const[errCode , res ] = callPython("offer_lunzheng_zhenti_mingcheng.py");
      //if(errCode){
        //res.status(500).end();
      //} else {
        //res.send(res);
      //}
    url: "http://59.110.23.212/LearningSystem/BackEnd/logic_test_new1.php",
    //url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhenti.php",
    //body: {
      //username: "lxq"
    //}
  })
}*/

// function = () => {
//   this.props.loadButtonContents({
//     url: "http://59.110.23.212/LearningSystem/BackEnd/word_test.php",
//   })
// }
function2 = () => {
  const {username} = this.props;
  console.log(username)
  this.props.loadButtonContents({
    url: "/api/logicCeshi",
    //url: "http://59.110.23.212/LearningSystem/BackEnd/logic_ceshi.php",
    body: {
      username: this.props.username,
      //articleId: 1
    }
  })
}

function1 = () => {
  const {username} = this.props;
  console.log(username)
  this.props.loadButtonContents({
    url: "/api/getWriteTest",
    body: {
      username: "lxq",
      articleId: 1
    }
  })
}

function_tijiao = () => {
  var form = document.getElementById("form2");
  var field = form.elements["test2"];
  var result = [];
  var option = null;
  for (var i = 0; i < field.length; i++) {
    option = field[i];
    if (option.checked) {
      result.push(option);
   }
 }
 console.log(result)
  var message = "";
  for (var i = 0, len = option.length; i < len; i++) {
  message += "Select id:" + option[i].id + "\nSelected name:" + option[i].name + "\nSelected value:" + option[i].value + "\n\n";
  }
 alert(message);
  /*鑾峰彇閫変腑鐨勯€夐」*/
  //function getSelectedOption(selectform, selectionfield) {

  //return result;

//  }
}
/*function_tijiao = () => {
  var form = document.getElementById("form2");
  var field = form.elements["test2"];
  var option = getSelectedOption(form, field);
  var message = "";
  for (var i = 0, len = option.length; i < len; i++) {
  message += "Select id:" + option[i].id + "\nSelected name:" + option[i].name + "\nSelected value:" + option[i].value + "\n\n";
  }
 alert(message);
  /*鑾峰彇閫変腑鐨勯€夐」*/
/*  function getSelectedOption(selectform, selectionfield) {
  var result = [];
  var option = null;
  for (var i = 0; i < selectionfield.length; i++) {
 option = selectionfield[i];
 if (option.checked) {
  result.push(option);
  }
 }
  return result;

  }
}*/


  render(){
    const { processStep } = this.state;

    const {
      ined
    } = this.props;

    return (
      <React.Fragment>
        <Prompt
          when={processStep !== 0 && processStep !== this.actions.length - 1}
          message="you need to do it again, are you sure to quit?"
        />

        <p>hi</p>
        <Button text="测试" onClick={this.function} />

        <form id='form2'>
          <label>彩电</label><input id='aaaaa' type='checkbox' name='test2' value='1'/>
          <label htmlFor='aaaaa'>冰箱</label><input id='bbbbb' type='checkbox' name='test2' value='2'/>
          <label htmlFor='bbbbb'>洗衣机</label><input id='ccccc' type='checkbox' name='test2' value='3'/>
          <label htmlFor='ccccc'>电话</label><input id='ddddd' type='checkbox' name='test2' value='4'/>
          <label htmlFor='ddddd'>手边</label><input id='eeeee' type='checkbox' name='test2' value='5'/>
          <label htmlFor='eeeee'>方法</label><input id='fffff' type='checkbox' name='test2' value='6'/>
        </form>
        <Button text="提交" onClick={this.function_tijiao} />
        <WriteGraph/>


      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
  }),
/*  protect({
    logined: {
      satisfy: l => l === true,
      block: ({ openWindow , history, closeMask , openMask }) => {
        openWindow( UserManagerWindow,
          {
            width: '380px',
            height: '300px',
            position: {
              top: 'calc( 50% - 190px)',
              left: 'calc( 50% - 150px)'
            },
            onCancel: () => history.goBack() || closeMask(),
            onSuccess: closeMask,
          }
        );
        openMask();
      }
    }
  }),*/
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
    }),
    dispatch => ({
      ...bindActionCreators( ButtonExpandActions , dispatch),
    })
  )],
  UITest
);
