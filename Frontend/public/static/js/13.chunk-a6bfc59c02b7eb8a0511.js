/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{686:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t="",n=[];for(var l in e)n.push(e[l]);var r=n.length;if(r>1){for(var a=0;a<r-1;a++)t+=n[a],t+="*";t+=n[r-1]}return t}},687:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=["初中","高中","四级","六级"],n=["basic","mid","advance","extreme"],l=0;l<t.length;l++)if(e==n[l])return t[l];return"初中"}},700:function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,"._3piBAv_NF4yAOw2hGnLgSH{font-size:16px}._1t-yLRT3Y9TezU6HVl0fNn{front-size:12px;color:#98a6ad;position:absolute;right:3.4%}",""]),t.locals={text:"_3piBAv_NF4yAOw2hGnLgSH",textgrey:"_1t-yLRT3Y9TezU6HVl0fNn"}},701:function(e,t,n){var l=n(700);"string"==typeof l&&(l=[[e.i,l,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(l,r);l.locals&&(e.exports=l.locals)},702:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=_(n(2)),r=_(n(9)),a=_(n(4)),s=_(n(8)),d=_(n(3)),u=_(n(5)),o=_(n(1)),i=n(15),c=n(14),f=(n(280),_(n(701))),m=(_(n(681)),_(n(680)),_(n(281))),p=(_(n(279)),_(n(149))),v=_(n(148)),g=_(n(97)),E=n(298),h=_(n(683)),b=n(150),T=_(n(687)),w=_(n(686)),y=_(n(682));function _(e){return e&&e.__esModule?e:{default:e}}var L=function(e){function t(e){(0,a.default)(this,t);var n=(0,d.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.loadTest=function(){n.props.loadTestQuestions({url:"/api/eng_wordTest"})},n.recordTestLevel=function(){n.props.recordWordTestLevel({url:"/api/eng_recordWordTest",body:{username:n.props.username,level:n.props.level}})},n.recordTestWords=function(){n.props.recordWordTestWords({url:"/api/eng_recordWordTestWords",body:{username:n.props.username,rightwords:(0,w.default)(n.props.rightwords),wrongwords:(0,w.default)(n.props.wrongwords)}}),n.submit=!0,n.submit&&(n.getUserLevel(n.props.username),n.getUserRate(n.props.username))},n.getUserLevel=function(e){n.props.getLevel({url:"/api/eng_getLevel",body:{username:e}})},n.getUserRate=function(e){n.props.getRate({url:"/api/eng_getWordTestRate",body:{username:e}})},n.state={enterTest:!0,enterLearning:!1,testAgain:!1,newEnterTest:!1,enterTestSure:!1},n.submit=!1,n}return(0,u.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.loadTest()}},{key:"componentWillReceiveProps",value:function(e){void 0==this.props.username&&void 0!=e.username&&(this.getUserLevel(e.username),this.getUserRate(e.username)),0==this.props.testend&&1==e.testend&&(this.recordTestLevel(),this.recordTestWords())}},{key:"render",value:function(){var e=this,t=this.props,n=(t.questions,t.ined),l=(t.forceNext,t.testend),r=(t.level,t.didTest),a=t.didLevel,s=(t.rightwords,t.wrongword,t.rate),d=this.state,u=d.enterLearning,i=d.enterTest,c=d.testAgain,p=d.newEnterTest,v=d.enterTestSure;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",null,u?o.default.createElement(h.default,null):i&&r||i&&l||c&&l?o.default.createElement("div",{class:"panel panel-custom panel-border"},o.default.createElement("div",{class:"panel-heading"},o.default.createElement("h3",{class:"panel-title"},"Well Done !")),o.default.createElement("div",{class:"panel-body"},o.default.createElement("div",{className:f.default.text},"恭喜！您已完成词汇测试！您的英语水平为：",o.default.createElement("span",{style:{color:"#188ae2"}},(0,T.default)(a),"水平")),o.default.createElement("div",{className:f.default.text},"平均各类型正确率统计如下："),o.default.createElement("br",null),void 0==s?null:o.default.createElement("table",{className:"table table-bordered m-0",align:"center"},o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"中考"),o.default.createElement("th",null,"高考"),o.default.createElement("th",null,"四级"),o.default.createElement("th",null,"六级"))),o.default.createElement("tbody",null,o.default.createElement("tr",null,o.default.createElement("th",null,(100*parseFloat(s.zhongkao)).toFixed(1),"%"),o.default.createElement("th",null,(100*parseFloat(s.gaokao)).toFixed(1),"%"),o.default.createElement("th",null,(100*parseFloat(s.siji)).toFixed(1),"%"),o.default.createElement("th",null,(100*parseFloat(s.liuji)).toFixed(1),"%")))),o.default.createElement("br",null),o.default.createElement("div",{className:f.default.text},"请点击左侧的进入学习，开始英语学习吧"),o.default.createElement("br",null),o.default.createElement("div",{className:f.default.text},"如需要重新测试，请点击：",o.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({enterTest:!1,enterLearning:!1,testAgain:!0,enterTestSure:!1}),e.props.forceEnd(),e.loadTest()}},"再测一次"),"      ",o.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({enterTest:!1,enterLearning:!0,testAgain:!1,enterTestSure:!1}),e.props.setSubjectFunctionSelect(1),e.props.forceEnd()}},"进入学习")))):p||c&&!l?o.default.createElement("div",null,v?o.default.createElement("div",null,o.default.createElement(m.default,{play:n},o.default.createElement(E.view,{loader:this.loadTest})),o.default.createElement("div",{className:f.default.textgrey},"测试时间约为2分钟")):o.default.createElement(y.default,{testnum:"约30道",testtime:"2  分钟",onClick:function(){return e.setState({enterTestSure:!0})}})):i&&!r?o.default.createElement("div",{class:"panel panel-custom panel-border"},o.default.createElement("div",{class:"panel-heading"},o.default.createElement("h3",{class:"panel-title"},"Sorry")),o.default.createElement("div",{class:"panel-body"},o.default.createElement("div",{className:f.default.text},"您为新用户，系统还没有您的数据，请点击开始水平测试，完成基础测评"),o.default.createElement("br",null),o.default.createElement("div",{className:f.default.text},"测试时间约为",o.default.createElement("span",null,"2"),"分钟"),o.default.createElement("br",null),o.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){return e.setState({newEnterTest:!0,enterTestSure:!1})}},"开始测试"))):null))}}]),t}(o.default.PureComponent);t.default=(0,g.default)([(0,p.default)({}),v.default,(0,i.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.EnglishWordTest.content,testend:e.EnglishWordTest.testendState,level:e.EnglishWordTest.nowAt.level,didTest:e.EnglishWordTest.recordFlagAndLevel.didTest,didLevel:e.EnglishWordTest.recordFlagAndLevel.level,choice:e.SubjectFunctionSelect.choice,rightwords:e.EnglishWordTest.rightwords,wrongwords:e.EnglishWordTest.wrongwords,rate:e.EnglishWordTest.rate}},function(e){return(0,l.default)({},(0,c.bindActionCreators)(E.actions,e),(0,c.bindActionCreators)(b.actions,e))})],L)}}]);