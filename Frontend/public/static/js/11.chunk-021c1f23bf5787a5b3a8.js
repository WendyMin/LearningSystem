/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8],{587:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(2)),a=u(n(1)),i=u(n(574)),s=n(147);function u(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)(function(e){return a.default.createElement(s.view,(0,o.default)({},e,{onCancel:function(){e.onCancel(),e.closeWindow()},onSuccess:function(){e.onSuccess(),e.closeWindow()}}))})},605:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Q(n(2)),a=Q(n(11)),i=Q(n(4)),s=Q(n(10)),u=Q(n(3)),r=Q(n(5)),l=Q(n(1)),c=n(16),d=n(15),f=Q(n(693)),p=Q(n(27)),m=Q(n(62)),h=(Q(n(262)),Q(n(149))),g=(Q(n(587)),n(263)),_=n(94),b=n(254),v=n(267),S=Q(n(145)),y=Q(n(146));function Q(e){return e&&e.__esModule?e:{default:e}}var w=function(e){function t(e){(0,i.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadPortContent({url:"/api/logicZhongdian",body:{username:n.props.username,chapter_name:n.props.chapter_name}}),n.props.loadQuestions({url:"/api/logicZhongdian",body:{username:n.props.username,chapter_name:n.props.chapter_name},parser:function(e){for(var t=[],n=0;n<e.timu.length;n++)e.timu[n].map(function(e){return t.push(e)});return t.map(function(e){return{questionId:e.id,options:[e.op_one,e.op_two,e.op_three,e.op_four,e.op_five],rightKey:(0,h.default)(e.answer),question:e.question,analysis:e.analysis}})}})},n.submitQuestions=function(){var e=n.props,t=e.username,o=e.content,a=e.questions,i=e.submitQuestionState,s=e.submiting,u=e.lockAndShow;console.log(a);i.resolved;if(!s){for(var r="",l="",c=0;c<a.length;c++)r+=a[c].questionId+"*",void 0!==a[c].choosed&&a[c].choosed.toString()===a[c].rightKey?l+="0*":l+="1*";console.log(r,l),n.props.submitQuestions({url:"/api/logicZhongDianTongJi",body:{username:t,dalei:o.chapter_name,question_id:r,RightOrWrong:l}});for(c=0;c<a.length;c++)u(a[c].questionId)}},n.questions=[],n.state={submit:!1},n}return(0,r.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.loadQuestions()}},{key:"render",value:function(){var e=this,t=this.state,n=(t.end,t.submit,this.props),o=(n.submitQuestionState,n.loadQuestionState,n.loadContent,n.loadContentState,n.ined,n.questions,n.content),a=(n.setChoice,n.setLearningType);return l.default.createElement(l.default.Fragment,null,1==o.flag?l.default.createElement("div",{className:"card-box"},l.default.createElement("div",{className:f.default.logic_knowledge},l.default.createElement("h4",{className:f.default.dalei}," ",o.chapter_name," "),l.default.createElement("p",null,o.shuxu),l.default.createElement(g.view,{loader:this.loadQuestions,subject:"logic_test",layoutFormat:"leftRight"}),l.default.createElement("div",{align:"center"},l.default.createElement("strong",null,l.default.createElement("div",{style:{color:"#ff5b5b"}},"请先确认提交，再做强化练习")),l.default.createElement(p.default,{text:"确认提交",onClick:function(){e.props.setSubmitZhongdian(!0),e.submitQuestions()}}),"      ",l.default.createElement(p.default,{text:"进入强化练习",onClick:function(){return a("强化练习")}})))):l.default.createElement(m.default,{info:"您还没有完成入口测试，请先完成入口测试！"}))}}]),t}(l.default.PureComponent);t.default=(0,y.default)([S.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,content:e.PortTest.content,loadContentState:e.PortTest.loadState,chapter_name:e.LearningTypeSelect.chapter_name,choice:e.SubjectSelect.choice}},function(e){return(0,o.default)({},(0,d.bindActionCreators)(g.actions,e),(0,d.bindActionCreators)(_.actions,e),(0,d.bindActionCreators)(b.actions,e),(0,d.bindActionCreators)(v.actions,e))})],w)},692:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._3SLNR3FaaLAFi-3bosjpR_{font-size:20px;color:#ff5b5b;text-align:center}",""]),t.locals={dalei:"_3SLNR3FaaLAFi-3bosjpR_"}},693:function(e,t,n){var o=n(692);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(12)(o,a);o.locals&&(e.exports=o.locals)}}]);