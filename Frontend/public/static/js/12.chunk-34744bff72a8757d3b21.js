/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{665:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=v(n(2)),a=v(n(11)),i=v(n(4)),s=v(n(10)),r=v(n(3)),u=v(n(5)),l=v(n(1)),c=n(15),d=n(14),p=v(n(773)),f=v(n(23)),m=v(n(151)),h=n(270),g=n(266),_=v(n(146)),b=v(n(147));function v(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){(0,i.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadQuestions({url:"/api/logicZhongdian",body:{username:n.props.username,chapter_name:n.props.chapter_name},parser:function(e){var t=[];return e.timu.map(function(e){return t.push(e)}),t.map(function(e){return{questionId:e.id,options:e.xuangxiang,rightKey:(0,m.default)(e.answer),question:e.question,analysis:e.analysis}})}})},n.submitQuestions=function(){n.setState({submit:!0});for(var e=n.props,t=e.username,o=e.questions,a=e.lockAndShow,i="",s="",r=0;r<o.length;r++)i+=o[r].questionId+"*",void 0!==o[r].choosed&&o[r].choosed.toString()===o[r].rightKey?s+="0*":s+="1*";console.log(t,n.props.chapter_name,i,s),n.props.submitQuestions({url:"/api/logicZhongDianTongJi",body:{username:t,dalei:n.props.chapter_name,question_id:i,RightOrWrong:s}});for(r=0;r<o.length;r++)a(o[r].questionId)},n.state={submit:!1},n}return(0,u.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.props.forceClearQuestions(),this.loadQuestions()}},{key:"render",value:function(){var e=this,t=this.props,n=(t.content,t.setLearningType);return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"card-box"},l.default.createElement("h4",{className:p.default.dalei}," ",this.props.chapter_name," "),l.default.createElement(h.view,{loader:this.loadQuestions,subject:"logic_test",layoutFormat:"leftRight",whetherHaveXuhao:!0}),l.default.createElement("div",{align:"center"},this.state.submit?l.default.createElement(f.default,{text:"进入强化练习",onClick:function(){return n("强化练习")}}):l.default.createElement(f.default,{text:"提交",onClick:function(){return e.submitQuestions()}}))))}}]),t}(l.default.PureComponent);t.default=(0,b.default)([_.default,(0,c.connect)(function(e){return{username:e.UserManager.name,questions:e.SingleOptionQuestions.content,content:e.PortTest.content,chapter_name:e.LearningTypeSelect.chapter_name}},function(e){return(0,o.default)({},(0,d.bindActionCreators)(h.actions,e),(0,d.bindActionCreators)(g.actions,e))})],y)},772:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._3SLNR3FaaLAFi-3bosjpR_{font-size:20px;color:#ff5b5b;text-align:center}",""]),t.locals={dalei:"_3SLNR3FaaLAFi-3bosjpR_"}},773:function(e,t,n){var o=n(772);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(12)(o,a);o.locals&&(e.exports=o.locals)}}]);