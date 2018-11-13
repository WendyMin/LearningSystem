import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import UserManagerWindow from "Windows/UserManager";
import FinishedNote from 'UI/FinishedNote';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as PortTestActions } from 'Connected/PortTest';
import WordsToString from 'Algorithm/WordsToString';

// var sha1 = require('sha1');
// sha1("message");

class UITest extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
    };
  }

  componentDidMount(){
    this.function();
  }
  componentDidMount(){
    var testEditor;
    testEditor = editormd.markdownToHTML("doc-content", {//注意：这里是上面DIV的id
        htmlDecode : "style,script,iframe",
        emoji : true,
        taskList : true,
        tex : true, // 默认不解析
        flowChart : true, // 默认不解析
        sequenceDiagram : true, // 默认不解析
        codeFold : true
    });
  }

  // function = () => {
  //   this.props.loadPortContent({
  //     url:"/api/eng_recordWordTestWords",
  //     body:{
  //       username: "testdzh",
  //       rightwords: "zhongkao*eat*zhongkao*meat*gaokao*fantastic",
  //       wrongwords: "zhongkao*vegetable*zhongkao*sacrifice"
  //     }
  //   })
  // }

  function = () => {
    this.props.loadPortContent({
      url:"/api/test",
      // body:{
      //   username: "testdzh",
      //   rightwords: "zhongkao*eat*zhongkao*meat*gaokao*fantastic",
      //   wrongwords: "zhongkao*vegetable*zhongkao*sacrifice"
      // }
    })
    // var testEditor;
    // testEditor = editormd.markdownToHTML("doc-content", {//注意：这里是上面DIV的id
    //     htmlDecode : "style,script,iframe",
    //     emoji : true,
    //     taskList : true,
    //     tex : true, // 默认不解析
    //     flowChart : true, // 默认不解析
    //     sequenceDiagram : true, // 默认不解析
    //     codeFold : true
    // });

    // document.getElementById("doc-content").value = "$$2(x-4)+3(x+x-4)=100$$";
    // console.log(document.getElementById("doc-content").value)
    // document.getElementById("doc-content").innerHTML = "<textarea style=" + '"display: none;"' + ">" + $$|a-d|^2<|b-c|^2\Rightarrow(a+d)^2-4ad<(b+c)^2-4bc$$ + "</textarea>"
  }

  render(){

    const {
      content,
    } = this.props;
    console.log(content);
    // console.log(WordsToString(["basic", "luck", "basic", "cancel", "basic", "luck"]))

    return(
      <React.Fragment>
        <div>ui</div>
        <div id="doc-content">
          <textarea style={{"display": "none;"}} value="公式$$a^2+1$$"/>
        </div>
      </React.Fragment>
    )
  }
  
}


// export default EngReview
export default applyHOCs([
  asyncProcessControl({
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      content: state.PortTest.content,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  UITest
);
