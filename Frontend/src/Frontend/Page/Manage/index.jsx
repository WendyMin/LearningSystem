import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import UserManagerWindow from "Windows/UserManager";
import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import { actions as PortTestActions } from 'Connected/PortTest';
import DataFormatConversion from 'UI/DataFormatConversion';
// import { actions as DataParseActions , view as DataParse } from 'Connected/DataParse';
// import WordsToString from 'Algorithm/WordsToString';
// import FinishedNote from 'UI/FinishedNote';

class Manage extends React.PureComponent {
  constructor( props ){
    super( props );
    this.ifChanged = false;
    this.state = {
      id: 0,
      num : 0,
      varData : "$$2(x-4)+3(x+x-4)=100$$"
    };
  }

  componentWillMount(){
    this.function();
  }

  function = () => {
    // this.props.loadPortContent({
    //   url:"/api/test",
    // body:{
    //   username: "testdzh",
    //   rightwords: "zhongkao*eat*zhongkao*meat*gaokao*fantastic",
    //   wrongwords: "zhongkao*vegetable*zhongkao*sacrifice"
    // }

      var testEditor;
      testEditor = editormd.markdownToHTML("doc-content0", {//注意：这里是上面DIV的id
          htmlDecode : "style,script,iframe",
          emoji : true,
          taskList : true,
          tex : true, // 默认不解析
          flowChart : true, // 默认不解析
          sequenceDiagram : true, // 默认不解析
          codeFold : true
      });

  }
  render(){
    const {
      content,
      varData
    } = this.props;
    console.log(`${this.state.varData}`)
    // console.log(content);
    // console.log(WordsToString(["basic", "luck", "basic", "cancel", "basic", "luck"]))

    return(
      <React.Fragment>

        <DataFormatConversion id = "demo111" data="![](https://ktiku.doxue.com/uploads/question/201711/_82276.svg)
        $$\begin{cases}V_{\text{甲}}\times t=V_{\text{乙}}\times (2-t) \\\ V_{\text{甲}}=1.5\times V_{\text{乙}}\end{cases}$$
        可得t=0.8，则相遇时间为10+0.8=10.8点=10点48分。"/>

        <DataFormatConversion id = "demo222" data="$${x_1}^2+{x_2}^2=(x_1+x_2)^2-2x_1x_2=a^2+2$$"/>

        <DataFormatConversion id = "demo333" data="不规则图形的面积，一定是由规则图形的面积来求.
        利用S<sub>阴影</sub>=S<sub>菱形</sub>-2S<sub>扇形</sub>=$$\frac{1}{2}\times2\sqrt{3}\times2-$$
        $$2\times\frac{1}{6}\pi\times(\sqrt{3})^2=2\sqrt{3}-\pi$$"/>

        <DataFormatConversion id = "demo444" data="$$(a+1)^2>(b+1)^2 $$
           $$\Longleftrightarrow(a+1)^2-(b+1)^2>0$$
           $$\Longleftrightarrow a^2+2a+1-b^2-2b-1>0$$
           $$\Longleftrightarrow a^2-b^2+2a-2b>0$$
           $$\Longleftrightarrow (a-b)(a+b)+2(a-b)>0 $$
           $$\Longleftrightarrow (a-b)(a+b+2)>0$$"
        />


<DataFormatConversion id = "demo1111" data='$$a<b\Longleftrightarrow a-b<0$$'/>


        <DataFormatConversion id = "demo11" data={this.state.varData}/>


        <div id="doc-content0">
          <textarea style={{"display": "none"}} //style="display:none"
          >{`${this.state.varData}`}</textarea>
        </div>

        {/*<button onClick={()=> {this.change1()}}>点击变化</button>*/}

       {/* <a href={"https://passport.doxue.com/login?redirect_url=59.110.23.212&stamp="+Date.parse(new Date())+"&secret_code="+sha1('LOGIN_REDIRECT' + Date.parse(new Date()))}>登录测试</a> */}


      </React.Fragment>
    )
  }}


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
      // data: state.DataParse.data
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
      // ...bindActionCreators( DataParseActions , dispatch)
    })
  )],
  Manage
);
