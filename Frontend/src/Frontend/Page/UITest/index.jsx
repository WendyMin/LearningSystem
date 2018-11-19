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
import { actions as DataParseActions , view as DataParse } from 'Connected/DataParse';
import WordsToString from 'Algorithm/WordsToString';
import DataFormatConversion from 'UI/DataFormatConversion';

class UITest extends React.PureComponent {
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
    this.change();
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.varData !== this.state.varData) {
      // document.getElementById("demo11").innerHTML = "<img src='"+onePara+"'/>";
    // this.chart = c3.load({
    //   data: this.props.data
    // });
    }
  }
  change = () => {
    // this.setState({
    //   varData: "$${x_1}^2+{x_2}^2=(x_1+x_2)^2-2x_1x_2=a^2+2$$"
    // })
    this.props.setPosition(this.state.id )
    // this.props.setNum()
    this.props.setData(this.state.varData)
  }
  change1 = () => {
    this.setState({
      num: this.state.num + 1,
    });
    this.ifChanged = true;
    console.log(this.state.varData)
    if(this.ifChanged){
      this.props.setPosition(this.state.id )
      this.props.setNum()
      this.props.setData("### ceshi")
    }
  }

  function = () => {
    // this.props.loadPortContent({
    //   url:"/api/test",
      // body:{
      //   username: "testdzh",
      //   rightwords: "zhongkao*eat*zhongkao*meat*gaokao*fantastic",
      //   wrongwords: "zhongkao*vegetable*zhongkao*sacrifice"
      // }
    // })
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

        <DataParse //id = "demo11" data={this.state.varData} num={this.state.num}
        />
        <button onClick={()=> {this.change1()}}>点击变化</button>
        <DataFormatConversion id = "demo221" data="![](https://ktiku.doxue.com/uploads/question/201711/_82276.svg)
$$\begin{cases}V_{\text{甲}}\times t=V_{\text{乙}}\times (2-t) \\\ V_{\text{甲}}=1.5\times V_{\text{乙}}\end{cases}$$
可得t=0.8，则相遇时间为10+0.8=10.8点=10点48分。"/>
        {/*<div>ui</div>
          <DataFormatConversion id = "demo2" data="$${x_1}^2+{x_2}^2=(x_1+x_2)^2-2x_1x_2=a^2+2$$"/>
        <DataFormatConversion id = "demo3" data="不规则图形的面积，一定是由规则图形的面积来求.
利用S<sub>阴影</sub>=S<sub>菱形</sub>-2S<sub>扇形</sub>=$$\frac{1}{2}\times2\sqrt{3}\times2-$$
$$2\times\frac{1}{6}\pi\times(\sqrt{3})^2=2\sqrt{3}-\pi$$"/>
<button onClick={()=> {this.change1()}}>点击变化1</button>
        <DataFormatConversion id = "demo11" data={this.state.varData} num={this.state.num}/>*/}
        {/*<DataFormatConversion id = "demo11" data={this.varData}/>
          <DataFormatConversion id = "demo2" data="$$\begin{cases}2(x-10)=y+10 \\\x+\frac{1}{5}y=\frac{4}{5}y\\end{cases}\Rightarrow \begin{cases}x=90 \\\y=150\\end{cases},x+y=240$$"/>
        <DataFormatConversion id = "demo3" data="不规则图形的面积，一定是由规则图形的面积来求.
利用S<sub>阴影</sub>=S<sub>菱形</sub>-2S<sub>扇形</sub>=$$\frac{1}{2}\times2\sqrt{3}\times2-$$
$$2\times\frac{1}{6}\pi\times(\sqrt{3})^2=2\sqrt{3}-\pi$$"/>*/}

        {/*<div id="doc-content0">
          <textarea style={{"display": "none"}} //style="display:none"
          defaultValue="$${x_1}^2+{x_2}^2=(x_1+x_2)^2-2x_1x_2=a^2+2$$"/>
        </div>
        <div id="doc-content2">
          <textarea style={{"display": "none"}} //style="display:none"
          >{`${this.state.varData}`}</textarea>
        </div>

        */}


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
      data: state.DataParse.data
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( DataParseActions , dispatch)
    })
  )],
  UITest
);
