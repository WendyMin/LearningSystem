/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{592:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._3_N66yja85kzh9dc3PoR_I{font-size:25px;text-align:center;color:#188ae2}._1vjV3K89R4h-_x4wcwB-rs{position:relative;left:20%;width:60%}._1Z-7-WZJ9nWOovV5cH7cYK{position:relative;width:100%;height:100px}._3R_PiR4hLK3Y26kYhPhoK4{position:absolute;right:35%}",""]),t.locals={title:"_3_N66yja85kzh9dc3PoR_I",chtoengall:"_1vjV3K89R4h-_x4wcwB-rs",textarea:"_1Z-7-WZJ9nWOovV5cH7cYK",ShowEngAndReturn:"_3R_PiR4hLK3Y26kYhPhoK4"}},593:function(e,t,n){var a=n(592);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},594:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=b(n(2)),l=b(n(11)),r=b(n(4)),o=b(n(10)),i=b(n(3)),u=b(n(5)),c=b(n(1)),s=n(16),d=n(15),f=(n(258),b(n(593))),h=b(n(27)),p=(b(n(585)),b(n(257)),b(n(254)),b(n(256)),b(n(255)),b(n(259)),n(260)),m=n(261),g=(b(n(584)),b(n(253)),b(n(252))),_=b(n(143)),v=b(n(144)),E=n(94);function b(e){return e&&e.__esModule?e:{default:e}}var w=function(e){function t(e){(0,r.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.loadChtoEng=function(){n.props.loadPortContent({url:"/api/eng_getWriteTest",body:{username:n.props.username,articleId:n.props.articleId}})},n.state={submit:!1},n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.loadChtoEng()}},{key:"render",value:function(){var e=this,t=this.props,n=t.content,a=t.setLearningType;t.learningType;return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,c.default.createElement("div",{className:f.default.title}," 汉译英 "),c.default.createElement("br",null),0==n.length?null:n.map(function(t,n){return c.default.createElement("div",{key:n,className:f.default.chtoengall},t.chinese,c.default.createElement("br",null),c.default.createElement("textarea",{"aria-label":"With textarea",className:f.default.textarea}),e.state.submit?c.default.createElement("p",null," ",t.english):null)}),c.default.createElement("div",{className:f.default.ShowEngAndReturn},c.default.createElement(h.default,{text:"返回英语学习主页面",onClick:function(){a("英语主页面")}}),"  ",c.default.createElement(h.default,{text:"显示答案",onClick:function(){return e.setState({submit:!0})}}))))}}]),t}(c.default.PureComponent);t.default=(0,v.default)([(0,g.default)({}),_.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,content:e.PortTest.content,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(m.actions,e),(0,d.bindActionCreators)(E.actions,e),(0,d.bindActionCreators)(p.actions,e))})],w)}}]);