/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{656:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(11)),l=c(a(4)),r=c(a(10)),o=c(a(3)),i=c(a(5)),u=c(a(1)),s=c(a(677));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.info,a=e.onClick;return u.default.createElement("div",null,u.default.createElement("div",{className:"row",style:{height:"80px"}}),u.default.createElement("div",{className:"col-lg-2"}),u.default.createElement("div",{className:"col-lg-8"},u.default.createElement("div",{className:"card-box"},u.default.createElement("div",{className:s.default.icon},u.default.createElement("div",{className:s.default.iconbody}),u.default.createElement("div",{className:s.default.icondot})),u.default.createElement("div",{align:"center"},u.default.createElement("h3",null,"Sorry!"),u.default.createElement("p",{className:s.default.text},t),u.default.createElement("br",null),u.default.createElement("p",null,u.default.createElement("button",{className:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-lg",onClick:a},"OK"))))))}}]),t}(u.default.PureComponent);t.default=d},676:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,".X5uIabJVE3z4lLCbiQ3Fi{width:80px;height:80px;border:4px solid gray;border-color:#f9c851;border-radius:50%;margin:20px auto;position:relative;box-sizing:content-box}._1lk5qpyuxX8VjV1cJIjf2C{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}._1lk5qpyuxX8VjV1cJIjf2C,._18GL5GIB0qFQVJNVuBIAg0{position:absolute;left:50%;background-color:#f9c851}._18GL5GIB0qFQVJNVuBIAg0{width:7px;height:7px;border-radius:50%;margin-left:-3px;bottom:10px}.mvAGwQHaRsiOCrojHe3rW{font-size:18px;color:#98a6ad}",""]),t.locals={icon:"X5uIabJVE3z4lLCbiQ3Fi",iconbody:"_1lk5qpyuxX8VjV1cJIjf2C",icondot:"_18GL5GIB0qFQVJNVuBIAg0",text:"mvAGwQHaRsiOCrojHe3rW"}},677:function(e,t,a){var n=a(676);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,l);n.locals&&(e.exports=n.locals)},684:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=E(a(2)),l=E(a(11)),r=E(a(4)),o=E(a(10)),i=E(a(3)),u=E(a(5)),s=E(a(1)),c=a(15),d=a(14),f=E(a(790)),p=a(71),m=a(276),h=E(a(292)),v=E(a(23)),g=E(a(99)),_=E(a(148)),b=E(a(149));function E(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,r.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.requestChapterContent=function(){a.props.loadPortContent({url:"/api/logicGetReviewZhishidian",body:{chapter_name:a.props.chapter_name}}),a.props.loadQuestions({url:"/api/logicGetReviewCuoti",body:{username:a.props.username,chapter_name:a.props.chapter_name},parser:function(e){var t=[];return e.content.map(function(e){return t.push(e)}),t.map(function(e){return{questionId:e.id,options:e.options,rightKey:(0,g.default)(e.answer),question:e.question,analysis:e.analysis}})}})},a.submitQuestions=function(){a.setState({submit:!0});for(var e=a.props,t=e.questions,n=e.lockAndShow,l="",r="",o=0;o<t.length;o++)l+=t[o].questionId+"*",void 0!==t[o].choosed&&t[o].choosed.toString()===t[o].rightKey?r+="0*":r+="1*";a.props.submitQuestions({url:"/api/logicRecordReviewCuoti",body:{username:a.props.username,chapter_name:a.props.chapter_name,question_id:l,RightOrWrong:r}});for(o=0;o<t.length;o++)n(t[o].questionId)},a.state={submit:!1},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.props.forceClearQuestions(),this.requestChapterContent()}},{key:"render",value:function(){var e=this.props,t=e.total_content,a=(e.setLearningType,e.chapter_name),n=e.questions;return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:"row"},s.default.createElement("h4",{className:f.default.dalei,style:{color:"#ff5b5b"}}," ",a," "),s.default.createElement("div",{className:"col-lg-6"},s.default.createElement("div",{className:"card-box",style:{fontSize:"16px",lineHeight:"32px"}},s.default.createElement("h4",{align:"center",className:"header-title m-t-0 m-b-30"},"知识点精要"),void 0==t.content?null:s.default.createElement(h.default,{list:t.content}),void 0==t.shunxu?null:s.default.createElement("div",null,t.shunxu.map(function(e,a){return s.default.createElement("div",{key:a},s.default.createElement("div",{className:f.default.logic_knowledge_title}," ",e," "),void 0==t.xiaolei?null:s.default.createElement(h.default,{list:t.xiaolei[a]}))})))),s.default.createElement("div",{className:"col-lg-6"},s.default.createElement("div",{className:"card-box"},s.default.createElement("h4",{align:"center",className:"header-title m-t-0 m-b-30"},"错题集锦"),0==n.length?s.default.createElement("div",{align:"center",style:{fontSize:"18px",color:"#ff5b5b"}},"您在本章没有错题！"):s.default.createElement("div",null,s.default.createElement(m.view,{loader:this.requestChapterContent,layoutFormat:"upDown",whetherHaveXuhao:!0}),s.default.createElement("div",{align:"center"},this.state.submit?null:s.default.createElement(v.default,{text:"提交",onClick:this.submitQuestions})))))))}}]),t}(s.default.PureComponent);t.default=(0,b.default)([_.default,(0,c.connect)(function(e){return{username:e.UserManager.name,chapter_name:e.LogicReviewModel.choice,total_content:e.PortTest.content,questions:e.SingleOptionQuestions.content}},function(e){return(0,n.default)({},(0,d.bindActionCreators)(p.actions,e),(0,d.bindActionCreators)(m.actions,e))})],x)},685:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(11)),l=c(a(4)),r=c(a(10)),o=c(a(3)),i=c(a(5)),u=c(a(1)),s=c(a(792));c(a(72)),c(a(23));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props.data;return console.log(this.props),u.default.createElement("div",{className:s.default.wholeErrorTongji},u.default.createElement("div",{className:s.default.note},"您复习过的章节及其复习次数统计如下："),u.default.createElement("br",null),u.default.createElement("table",{border:"1",align:"center"},void 0==e.chapter_name?null:u.default.createElement("tr",null,u.default.createElement("th",null,"类别名称"),e.chapter_name.map(function(e,t){return u.default.createElement("th",{key:t}," ",e," ")})),void 0==e.count?null:u.default.createElement("tr",null,u.default.createElement("th",null,"复习次数"),e.count.map(function(e,t){return u.default.createElement("th",{key:t}," ",e," ")}))))}}]),t}(u.default.PureComponent);t.default=d},789:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._3p7P6d8A6z9KZl2od_YtCV{font-size:20px;color:#ff5b5b;text-align:center}.z65STGS1mNpTp-0lxRVs8{color:#f9c851;line-height:45px}",""]),t.locals={dalei:"_3p7P6d8A6z9KZl2od_YtCV",logic_knowledge_title:"z65STGS1mNpTp-0lxRVs8"}},790:function(e,t,a){var n=a(789);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,l);n.locals&&(e.exports=n.locals)},791:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._38YO4cp6CLiHjT-aGW7Ynz{padding-left:5%;font-size:20px}._2ePan3ARTEcLAasaEFQtW7{font-size:25px;text-align:center}",""]),t.locals={wholeErrorTongji:"_38YO4cp6CLiHjT-aGW7Ynz",note:"_2ePan3ARTEcLAasaEFQtW7"}},792:function(e,t,a){var n=a(791);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,l);n.locals&&(e.exports=n.locals)}}]);