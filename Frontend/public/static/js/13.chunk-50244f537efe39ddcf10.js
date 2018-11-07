/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{650:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(l(11)),n=i(l(4)),r=i(l(10)),s=i(l(3)),o=i(l(5)),u=i(l(1)),d=i(l(653));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return(0,n.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,o.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.testnum,l=e.testtime,a=e.onClick;return u.default.createElement("div",null,u.default.createElement("div",{className:"row",style:{height:"80px"}}),u.default.createElement("div",{className:"col-lg-2"}),u.default.createElement("div",{className:"col-lg-8"},u.default.createElement("div",{className:"card-box",align:"center"},u.default.createElement("i",{className:"fa fa-pencil-square-o",style:{fontSize:"80px",height:"80px",width:"80px",margin:"10px"}}),u.default.createElement("br",null),u.default.createElement("h3",null,"本次测试信息"),u.default.createElement("br",null),u.default.createElement("p",{className:d.default.text},"题目总数:     ",u.default.createElement("span",{style:{color:"#ff5b5b"}}," ",t," ")),u.default.createElement("p",{className:d.default.text},"建议时间:     ",u.default.createElement("span",{style:{color:"#ff5b5b"}}," ",l," ")),u.default.createElement("br",null),u.default.createElement("p",null,u.default.createElement("button",{className:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-lg",onClick:a},"开始答题")))))}}]),t}(u.default.PureComponent);t.default=c},652:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._2LZ44fTTmH0qhI31FSHXuS{width:80px;height:80px;border:4px solid gray;border-color:#f9c851;border-radius:50%;margin:20px auto;position:relative;box-sizing:content-box}._2YJhOWwJvuJ9AQrkhHEx-z{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}._2u0UCaV33ZUkiDYUJIoh-W,._2YJhOWwJvuJ9AQrkhHEx-z{position:absolute;left:50%;background-color:#f9c851}._2u0UCaV33ZUkiDYUJIoh-W{width:7px;height:7px;border-radius:50%;margin-left:-3px;bottom:10px}._2irR43LusKCTvVrxOPY47J{font-size:18px;color:#98a6ad}",""]),t.locals={icon:"_2LZ44fTTmH0qhI31FSHXuS",iconbody:"_2YJhOWwJvuJ9AQrkhHEx-z",icondot:"_2u0UCaV33ZUkiDYUJIoh-W",text:"_2irR43LusKCTvVrxOPY47J"}},653:function(e,t,l){var a=l(652);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},661:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=["初中","高中","四级","六级"],l=["basic","mid","advance","extreme"],a=0;a<t.length;a++)if(e==l[a])return t[a];return"初中"}},671:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._3piBAv_NF4yAOw2hGnLgSH{font-size:16px}._1t-yLRT3Y9TezU6HVl0fNn{front-size:12px;color:#98a6ad;position:absolute;right:3.4%}",""]),t.locals={text:"_3piBAv_NF4yAOw2hGnLgSH",textgrey:"_1t-yLRT3Y9TezU6HVl0fNn"}},672:function(e,t,l){var a=l(671);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},673:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(l(2)),n=y(l(11)),r=y(l(4)),s=y(l(10)),o=y(l(3)),u=y(l(5)),d=y(l(1)),i=l(15),c=l(14),f=(l(271),y(l(672))),m=(y(l(649)),y(l(648)),y(l(272))),p=(y(l(270)),y(l(269))),v=y(l(148)),h=y(l(149)),E=l(292),g=y(l(657)),b=l(150),x=y(l(661)),w=y(l(660)),T=y(l(650));function y(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(e){(0,r.default)(this,t);var l=(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.loadTest=function(){l.props.loadTestQuestions({url:"/api/eng_wordTest"})},l.recordTestLevel=function(){l.props.recordWordTestLevel({url:"/api/eng_recordWordTest",body:{username:l.props.username,level:l.props.level}})},l.recordTestWords=function(){l.props.recordWordTestWords({url:"/api/eng_recordWordTestWords",body:{username:l.props.username,rightwords:(0,w.default)(l.props.rightwords),wrongwords:(0,w.default)(l.props.wrongwords)}}),l.submit=!0,l.submit&&(l.getUserLevel(l.props.username),l.getUserRate(l.props.username))},l.getUserLevel=function(e){l.props.getLevel({url:"/api/eng_getLevel",body:{username:e}})},l.getUserRate=function(e){l.props.getRate({url:"/api/eng_getWordTestRate",body:{username:e}})},l.state={enterTest:!0,enterLearning:!1,testAgain:!1,newEnterTest:!1,enterTestSure:!1},l.submit=!1,l}return(0,u.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.loadTest()}},{key:"componentWillReceiveProps",value:function(e){void 0==this.props.username&&void 0!=e.username&&(this.getUserLevel(e.username),this.getUserRate(e.username)),0==this.props.testend&&1==e.testend&&(this.recordTestLevel(),this.recordTestWords())}},{key:"render",value:function(){var e=this,t=this.props,l=(t.questions,t.ined),a=(t.forceNext,t.testend),n=(t.level,t.didTest),r=t.didLevel,s=(t.rightwords,t.wrongword,t.rate),o=this.state,u=o.enterLearning,i=o.enterTest,c=o.testAgain,p=o.newEnterTest,v=o.enterTestSure;return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",null,u?d.default.createElement(g.default,null):i&&n||i&&a||c&&a?d.default.createElement("div",{class:"panel panel-custom panel-border"},d.default.createElement("div",{class:"panel-heading"},d.default.createElement("h3",{class:"panel-title"},"Well Done !")),d.default.createElement("div",{class:"panel-body"},d.default.createElement("div",{className:f.default.text},"恭喜！您已完成词汇测试！您的英语水平为：",d.default.createElement("span",{style:{color:"#188ae2"}},(0,x.default)(r),"水平")),d.default.createElement("div",{className:f.default.text},"平均各类型正确率统计如下："),d.default.createElement("br",null),void 0==s?null:d.default.createElement("table",{className:"table table-bordered m-0",align:"center"},d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null,"中考"),d.default.createElement("th",null,"高考"),d.default.createElement("th",null,"四级"),d.default.createElement("th",null,"六级"))),d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("th",null,(100*parseFloat(s.zhongkao)).toFixed(1),"%"),d.default.createElement("th",null,(100*parseFloat(s.gaokao)).toFixed(1),"%"),d.default.createElement("th",null,(100*parseFloat(s.siji)).toFixed(1),"%"),d.default.createElement("th",null,(100*parseFloat(s.liuji)).toFixed(1),"%")))),d.default.createElement("br",null),d.default.createElement("div",{className:f.default.text},"请点击左侧的进入学习，开始英语学习吧"),d.default.createElement("br",null),d.default.createElement("div",{className:f.default.text},"如需要重新测试，请点击：",d.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({enterTest:!1,enterLearning:!1,testAgain:!0,enterTestSure:!1}),e.props.forceEnd(),e.loadTest()}},"再测一次"),"      ",d.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({enterTest:!1,enterLearning:!0,testAgain:!1,enterTestSure:!1}),e.props.setSubjectFunctionSelect(1),e.props.forceEnd()}},"进入学习")))):p||c&&!a?d.default.createElement("div",null,v?d.default.createElement("div",null,d.default.createElement(m.default,{play:l},d.default.createElement(E.view,{loader:this.loadTest})),d.default.createElement("div",{className:f.default.textgrey},"测试时间约为2分钟")):d.default.createElement(T.default,{testnum:"约30道",testtime:"2  分钟",onClick:function(){return e.setState({enterTestSure:!0})}})):i&&!n?d.default.createElement("div",{class:"panel panel-custom panel-border"},d.default.createElement("div",{class:"panel-heading"},d.default.createElement("h3",{class:"panel-title"},"Sorry")),d.default.createElement("div",{class:"panel-body"},d.default.createElement("div",{className:f.default.text},"您为新用户，系统还没有您的数据，请点击开始水平测试，完成基础测评"),d.default.createElement("br",null),d.default.createElement("div",{className:f.default.text},"测试时间约为",d.default.createElement("span",null,"2"),"分钟"),d.default.createElement("br",null),d.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){return e.setState({newEnterTest:!0,enterTestSure:!1})}},"开始测试"))):null))}}]),t}(d.default.PureComponent);t.default=(0,h.default)([(0,p.default)({}),v.default,(0,i.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.EnglishWordTest.content,testend:e.EnglishWordTest.testendState,level:e.EnglishWordTest.nowAt.level,didTest:e.EnglishWordTest.recordFlagAndLevel.didTest,didLevel:e.EnglishWordTest.recordFlagAndLevel.level,choice:e.SubjectFunctionSelect.choice,rightwords:e.EnglishWordTest.rightwords,wrongwords:e.EnglishWordTest.wrongwords,rate:e.EnglishWordTest.rate}},function(e){return(0,a.default)({},(0,c.bindActionCreators)(E.actions,e),(0,c.bindActionCreators)(b.actions,e))})],_)}}]);