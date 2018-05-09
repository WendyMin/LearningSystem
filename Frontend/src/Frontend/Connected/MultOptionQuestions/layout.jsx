import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import Checkbox from 'react-bootstrap';
import {
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions'
import {
  view as ButtonExpand,
  actions as ButtonExpandActions
} from 'Connected/ButtonExpand';
import {
  view as ZhentiPerYearTongji,
  actions as ZhentiPerYearTongjiActions
} from 'Connected/ZhentiPerYearTongji';

import judgeWhichOption from 'Algorithm/judgeWhichOption';
import AppearUD from 'Animation/AppearUD';
import style from 'style';


class MultOptionQuestions extends React.PureComponent {
  constructor( props ){
    super( props );

    //this.options =  ["A 概念混淆" , "B 条件不充分" , "C 无法推出" , "D 以偏概全" , "E 非黑即白" , "F 因果无关" , "G 目的达不到" , "K 论据不成立" , "L 条件不必要" , "M 类比不当" , "N 不当假设" , "O 自相矛盾" , "P 存在他因" , "Q 措施不可行"];
    this.options =  ["概念混淆" , "条件缺失" , "推断不出" , "以偏概全" , "非黑即白" , "因果无关" , "目的达不到" , "论据不成立" , "条件不必要" , "类比不当" , "不当假设" , "自相矛盾" , "存在他因" , "措施不可行"];
    this.left_options = ["A 概念混淆" , "B 条件缺失" , "C 推断不出" , "D 以偏概全" , "E 非黑即白" , "F 因果无关" , "G 目的达不到"];
    this.right_options = ["K 论据不成立" , "L 条件不必要" , "M 类比不当" , "N 不当假设" , "O 自相矛盾" , "P 存在他因" , "Q 措施不可行"];
    this.state = {
      //color: "",
      lock: false,
      exampleShow: false,
      analysisShow: false,
      answerShow: false,
      uploadShow: false,
      fileShow: false
    }
  }

  submitMultiOptions = () => {
    /* 记录用户所选择的所有选项 */
    var form1 = document.getElementById("form1");
    var field1 = form1.elements["leftOptions"];
    var option = null;
    var xuanxiang = [];
    for(var i = 0 ; i < field1.length ; i++){
      option = field1[i];
      if(option.checked){
        xuanxiang.push(this.options[option.value])
      }
    }
    var form2 = document.getElementById("form2");
    var field2 = form2.elements["rightOptions"];
    for(var i = 0 ; i < field2.length ; i++){
      option = field2[i];
      if(option.checked){
        xuanxiang.push(this.options[option.value])
      }
    }
    console.log(xuanxiang)
    var xuanxiang_jiaxing = [];
    for ( var i = 0 ; i < xuanxiang.length ; i++ ){
      xuanxiang_jiaxing += `${xuanxiang[i]}*`;
    }
    console.log(xuanxiang_jiaxing)

    this.props.submitQuestions({
      url: "/api/lunzhengRecordMultiOption",
      body: {
        username: this.props.username,
        chapter_name: this.props.choice,
        //chapter_name: chapter_name,
        xuanxiang: xuanxiang_jiaxing
      }
    });

    /*  记录完毕  */
    /*  获取本年真题的错选、漏选率情况  */
    this.props.loadZhentiTongji({
      url: "/api/lunZhengPerYearTongji",
      body: {
        chapter_name: this.props.choice,
        xuanxiang: xuanxiang_jiaxing
      }
    });


  }



  render(){
    const {
      name,
      example_article,
      article_analysis,
      tongji
    } = this.props;
    //console.log(this.props)
    console.log(this.state.analysisShow)
    var TextStyle1 = [];
    var TextStyle2 = [];
    if(this.state.lock){
      for(var i = 0 ; i < 7 ; i++){
        var right_option_num = judgeWhichOption(article_analysis); //judgeWhichOption()函数的作用是判断此篇真题钟哪些选项是正确的，返回的是数字

        right_option_num.map((one) => {
          if(one < 7){TextStyle1[one] = style.right_Option;}
          else {TextStyle2[one-7] = style.right_Option;}
        })

    }
  }


    return (
      <div className="container">
        {/*<div className = {style.option_area}
        >
        {this.options.map( (oneOption , key) =>
          <div key = {key}>
            <input className = {style.checkbox} type="checkbox" readOnly = {this.state.lock ? "readonly" : ""}/>
            <label className = {TextStyle[key]}> {oneOption} </label><br/>
          </div>
        )}
      </div>*/}


      <form id = "form1" className = {style.leftOption}>
        {this.left_options.map( (oneOption , key) =>
          <div key = {key}>
            <input id = {key} className = {style.checkbox} name = "leftOptions" type="checkbox" readOnly = {this.state.lock ? 'readonly' : ''} value = {key}/>
            <label htmlFor = {key} className = {TextStyle1[key]}> {oneOption} </label><br/>
          </div>
        )}
      </form>


      <form id = "form2" className = {style.rightOption}>
      {this.right_options.map( (oneOption , key) =>
        <div key = {key}>
          <input id = {key+7} className = {style.checkbox} name = "rightOptions" type="checkbox" readOnly = {this.state.lock ? 'readonly' : ''} value = {key+7}/>
          <label htmlFor = {key+7} className = {TextStyle2[key]}> {oneOption} </label><br/>
        </div>
      )}
     </form>


     {/*<div className={style.commit}>
       <label onClick = { () => this.setState({lock: true})}> 确认提交 </label>&nbsp;&nbsp;&nbsp;
       <label onClick = { () => this.setState({analysisShow: !this.state.analysisShow}) }> 答案解析 </label>
       <label onClick = { () => this.setState({exampleShow: !this.state.exampleShow}) }> 参考范文 </label><br/>
     </div>
     <div className={style.commit}>
       <label onClick = { () => {this.setState({lock: true});this.submitMultiOptions()}}> 确认提交 </label>&nbsp;&nbsp;&nbsp;
       <label onClick = { () => this.setState({analysisShow: !this.state.analysisShow}) }> 答案解析 </label>&nbsp;&nbsp;&nbsp;<br/>
       <label onClick = { () => this.setState({uploadShow: !this.state.uploadShow})}> 上传文件 </label>&nbsp;&nbsp;&nbsp;
       <label onClick = { () => this.setState({fileShow: !this.state.fileShow}) }> 查看文件 </label>&nbsp;&nbsp;&nbsp;
       <label onClick = { () => this.setState({exampleShow: !this.state.exampleShow}) } > 参考范文 </label>
     </div>*/}
     <div className = {style.commit}>
       <label onClick = { () => {this.setState({lock: true , analysisShow: false , uploadShow: false , fileShow: false , exampleShow: false});this.submitMultiOptions()}}> 确认提交 </label>&nbsp;&nbsp;&nbsp;
       <label onClick = { () => this.setState({analysisShow: !this.state.analysisShow , uploadShow: false , fileShow: false , exampleShow: false}) }> 答案解析 </label>
     </div>
     <div className = {style.uploadfile}>

       <label onClick = { () => this.setState({analysisShow: false , uploadShow: !this.state.uploadShow, fileShow: false , exampleShow: false})}> 上传文件 </label>&nbsp;&nbsp;&nbsp;
       <label onClick = { () => this.setState({analysisShow: false , uploadShow: false , fileShow: !this.state.fileShow , exampleShow: false}) }> 查看文件 </label>&nbsp;&nbsp;&nbsp;
       <label onClick = { () => this.setState({analysisShow: false , uploadShow: false , fileShow: false , exampleShow: !this.state.exampleShow}) } > 参考范文 </label>
     </div>
     {
       this.state.lock ?
       <div className = {style.tongji}>
         <ZhentiPerYearTongji />
       </div>
       :
       null
     }

     {
       this.state.analysisShow ?
       <div className = {style.egArticle}>

         {article_analysis.map((onePara , key) =>
         <div key = {key}>
           <p className = {style.type}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara.error_type} </p>
           <p> &nbsp;&nbsp;&nbsp;&nbsp;{onePara.error_analysis} </p>
         </div>
         )}
       </div>
       :
       null
     }

     {
       this.state.uploadShow ?
       <div className = {style.egArticle}>
         <br/><input type = "file" accept =".doc,.pdf"/><span style={{"color":"red"}}>请上传一个word或pdf文件</span>
       </div>
       :null
     }

     {
       this.state.fileShow ?
       <div className = {style.egArticle}>
         此处应该显示用户上传的文件内容
       </div>
       :null
     }

     {
       this.state.exampleShow ?
       <div className = {style.egArticle}>
         <p className = {style.article_title}>{name}</p>
         {example_article.map((onePara , key) =>
           <p key = {key}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>
         )}
       </div>
       :
       null
     }




      </div>


    );
  }
};

export default connect(
  state => ({
    username: state.UserManager.name,
    example_article: state.WriteContent.example_article,
    article_analysis: state.PortTest.content,
    choice: state.ButtonExpand.choice,
    name: state.WriteContent.name,
    //tongji: state.ZhentiPerYearTongji.tongji
  }),
  dispatch =>({
    ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
    ...bindActionCreators( ZhentiPerYearTongjiActions , dispatch)
  })
)( MultOptionQuestions );
