/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(2)),l=u(n(1)),r=u(n(632)),i=n(149);function u(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)(function(e){return l.default.createElement(i.view,(0,a.default)({},e,{onCancel:function(){e.onCancel(),e.closeWindow()},onSuccess:function(){e.onSuccess(),e.closeWindow()}}))})},654:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._3_N66yja85kzh9dc3PoR_I{font-size:22px;text-align:center;color:#188ae2}.-et98gu74iw4MPD2b0blT{font-size:18px;margin:10px 0}.-et98gu74iw4MPD2b0blT,.wrsBCq4u3lnzEp8HQT1fQ{color:#505458;font-family:Karla,sans-serif}._1tCB1okkSNrMh-HVcdhFwQ{float:right;margin-right:10px}",""]),t.locals={title:"_3_N66yja85kzh9dc3PoR_I",title18:"-et98gu74iw4MPD2b0blT",title16:"wrsBCq4u3lnzEp8HQT1fQ",buttonright:"_1tCB1okkSNrMh-HVcdhFwQ"}},655:function(e,t,n){var a=n(654);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},656:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=w(n(2)),l=w(n(11)),r=w(n(4)),i=w(n(10)),u=w(n(3)),o=w(n(5)),c=w(n(1)),s=n(15),d=n(14),f=(n(269),w(n(655))),m=n(266),p=n(272),b=n(285),g=(w(n(641)),w(n(268)),w(n(267))),h=w(n(146)),E=w(n(147));function w(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){(0,r.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.loadChtoEnglish=function(){n.props.loadChtoEng({url:"/api/eng_getWriteTest",body:{username:n.props.username,articleId:n.props.articleId}})},n.state={submit:!1},n}return(0,o.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.loadChtoEnglish()}},{key:"render",value:function(){var e=this,t=this.props,n=t.content,a=t.setLearningType;t.learningType;return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:f.default.title},"写作句型练习 "),c.default.createElement("br",null),0==n.length?null:n.map(function(t,n){return c.default.createElement("div",{key:n,className:"col-md-12"},c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement("div",{className:"kanban-detail"},c.default.createElement("p",{className:f.default.title18},t.chinese),c.default.createElement("ul",{className:"list-inline m-b-0"},c.default.createElement("textarea",{rows:"2",class:"form-control",placeholder:"Write your answer"}),c.default.createElement("li",null,c.default.createElement("br",null),e.state.submit?c.default.createElement("p",{className:f.default.title16},c.default.createElement("strong",null,"参考答案："),t.english):null,c.default.createElement("br",null))))))})),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:f.default.buttonright},c.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){a("英语主页面")}},"返回英语学习主页面"),"  ",c.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){return e.setState({submit:!0})}},"显示答案"),"  ",c.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){a("英语课后阅读材料")}},"进入课后阅读材料")))))}}]),t}(c.default.PureComponent);t.default=(0,E.default)([(0,g.default)({}),h.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,content:e.EnglishChtoEngPort.chtoeng,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(p.actions,e),(0,d.bindActionCreators)(m.actions,e),(0,d.bindActionCreators)(b.actions,e))})],v)}}]);