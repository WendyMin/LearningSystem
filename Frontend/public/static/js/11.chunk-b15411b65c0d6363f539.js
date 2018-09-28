/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{664:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=b(n(2)),l=b(n(11)),o=b(n(4)),r=b(n(10)),u=b(n(3)),i=b(n(5)),s=b(n(1)),c=n(15),d=n(14),f=b(n(758)),p=n(71),m=n(271),h=b(n(287)),v=b(n(23)),_=b(n(151)),g=b(n(146)),E=b(n(147));function b(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){(0,o.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.requestChapterContent=function(){n.props.loadPortContent({url:"/api/logicGetReviewZhishidian",body:{chapter_name:n.props.chapter_name}}),n.props.loadQuestions({url:"/api/logicGetReviewCuoti",body:{username:n.props.username,chapter_name:n.props.chapter_name},parser:function(e){var t=[];return e.content.map(function(e){return t.push(e)}),t.map(function(e){return{questionId:e.id,options:e.options,rightKey:(0,_.default)(e.answer),question:e.question,analysis:e.analysis}})}})},n.submitQuestions=function(){n.setState({submit:!0});for(var e=n.props,t=e.questions,a=e.lockAndShow,l="",o="",r=0;r<t.length;r++)l+=t[r].questionId+"*",void 0!==t[r].choosed&&t[r].choosed.toString()===t[r].rightKey?o+="0*":o+="1*";n.props.submitQuestions({url:"/api/logicRecordReviewCuoti",body:{username:n.props.username,chapter_name:n.props.chapter_name,question_id:l,RightOrWrong:o}});for(r=0;r<t.length;r++)a(t[r].questionId)},n.state={submit:!1},n}return(0,i.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.props.forceClearQuestions(),this.requestChapterContent()}},{key:"render",value:function(){var e=this.props,t=e.total_content,n=(e.setLearningType,e.chapter_name),a=e.questions;return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:"row"},s.default.createElement("h4",{className:f.default.dalei,style:{color:"#ff5b5b"}}," ",n," "),s.default.createElement("div",{className:"col-lg-6"},s.default.createElement("div",{className:"card-box",style:{fontSize:"16px",lineHeight:"32px"}},s.default.createElement("h4",{align:"center",className:"header-title m-t-0 m-b-30"},"知识点精要"),void 0==t.content?null:s.default.createElement(h.default,{list:t.content}),void 0==t.shunxu?null:s.default.createElement("div",null,t.shunxu.map(function(e,n){return s.default.createElement("div",{key:n},s.default.createElement("div",{className:f.default.logic_knowledge_title}," ",e," "),void 0==t.xiaolei?null:s.default.createElement(h.default,{list:t.xiaolei[n]}))})))),s.default.createElement("div",{className:"col-lg-6"},s.default.createElement("div",{className:"card-box"},s.default.createElement("h4",{align:"center",className:"header-title m-t-0 m-b-30"},"错题集锦"),0==a.length?s.default.createElement("div",{align:"center",style:{fontSize:"18px",color:"#ff5b5b"}},"您在本章没有错题！"):s.default.createElement("div",null,s.default.createElement(m.view,{loader:this.requestChapterContent,layoutFormat:"upDown",whetherHaveXuhao:!0}),s.default.createElement("div",{align:"center"},this.state.submit?null:s.default.createElement(v.default,{text:"提交",onClick:this.submitQuestions})))))))}}]),t}(s.default.PureComponent);t.default=(0,E.default)([g.default,(0,c.connect)(function(e){return{username:e.UserManager.name,chapter_name:e.LogicReviewModel.choice,total_content:e.PortTest.content,questions:e.SingleOptionQuestions.content}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(p.actions,e),(0,d.bindActionCreators)(m.actions,e))})],y)},665:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(11)),l=c(n(4)),o=c(n(10)),r=c(n(3)),u=c(n(5)),i=c(n(1)),s=c(n(760));c(n(72)),c(n(23));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.data;return console.log(this.props),i.default.createElement("div",{className:s.default.wholeErrorTongji},i.default.createElement("div",{className:s.default.note},"您复习过的章节及其复习次数统计如下："),i.default.createElement("br",null),i.default.createElement("table",{border:"1",align:"center"},void 0==e.chapter_name?null:i.default.createElement("tr",null,i.default.createElement("th",null,"类别名称"),e.chapter_name.map(function(e,t){return i.default.createElement("th",{key:t}," ",e," ")})),void 0==e.count?null:i.default.createElement("tr",null,i.default.createElement("th",null,"复习次数"),e.count.map(function(e,t){return i.default.createElement("th",{key:t}," ",e," ")}))))}}]),t}(i.default.PureComponent);t.default=d},757:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._3p7P6d8A6z9KZl2od_YtCV{font-size:20px;color:#ff5b5b;text-align:center}.z65STGS1mNpTp-0lxRVs8{color:#f9c851;line-height:45px}",""]),t.locals={dalei:"_3p7P6d8A6z9KZl2od_YtCV",logic_knowledge_title:"z65STGS1mNpTp-0lxRVs8"}},758:function(e,t,n){var a=n(757);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},759:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._38YO4cp6CLiHjT-aGW7Ynz{padding-left:5%;font-size:20px}._2ePan3ARTEcLAasaEFQtW7{font-size:25px;text-align:center}",""]),t.locals={wholeErrorTongji:"_38YO4cp6CLiHjT-aGW7Ynz",note:"_2ePan3ARTEcLAasaEFQtW7"}},760:function(e,t,n){var a=n(759);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)}}]);