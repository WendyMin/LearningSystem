/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{606:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=_(l(2)),a=_(l(11)),u=_(l(4)),r=_(l(10)),o=_(l(3)),d=_(l(5)),c=_(l(1)),f=l(15),i=l(14),s=(l(151),_(l(609))),m=(_(l(267)),_(l(150)),_(l(149))),E=_(l(97)),h=_(l(98)),p=l(72);function _(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(e){(0,u.default)(this,t);var l=(0,o.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.function=function(){l.props.loadPortContent({url:"/api/eng_getWordRate",body:{username:l.props.username,articleId:18}})},l}return(0,d.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.function()}},{key:"render",value:function(){var e=this.props.content;return console.log(e),c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,c.default.createElement("p",{className:s.default.title},"累计生词类型分析"),c.default.createElement("br",null),c.default.createElement("p",{className:s.default.title1},"不认识的单词在各单词库占比"),c.default.createElement("div",null,void 0==e?null:c.default.createElement("div",null,c.default.createElement("table",{className:"table table-bordered m-0",align:"center"},c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",null,"中考"),c.default.createElement("th",null,"高考"),c.default.createElement("th",null,"四级"),c.default.createElement("th",null,"六级"),c.default.createElement("th",null,"考研"),c.default.createElement("th",null,"超纲"))),c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("th",null,e.zhongkao_rate),c.default.createElement("th",null,e.gaokao),c.default.createElement("th",null,e.siji),c.default.createElement("th",null,e.liuji),c.default.createElement("th",null,e.kaoyan),c.default.createElement("th",null,e.chaogang)))),c.default.createElement("br",null))),c.default.createElement("br",null)))}}]),t}(c.default.PureComponent);t.default=(0,h.default)([(0,m.default)({}),E.default,(0,f.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,content:e.PortTest.content}},function(e){return(0,n.default)({},(0,i.bindActionCreators)(p.actions,e))})],g)},608:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._2_XT_h__N8sBWVVDQRO9rg{font-size:22px;text-align:center;color:#188ae2}._3lDdDoemRdRwdEtsPzCG1{font-size:16px;text-align:center;color:#71b6f9}",""]),t.locals={title:"_2_XT_h__N8sBWVVDQRO9rg",title1:"_3lDdDoemRdRwdEtsPzCG1"}},609:function(e,t,l){var n=l(608);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};l(12)(n,a);n.locals&&(e.exports=n.locals)}}]);