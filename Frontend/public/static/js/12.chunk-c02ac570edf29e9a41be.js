/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{709:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=E(n(2)),l=E(n(9)),o=E(n(4)),r=E(n(8)),u=E(n(3)),i=E(n(5)),c=E(n(1)),d=n(15),s=n(14),f=E(n(831)),m=n(62),p=n(279),_=E(n(298)),h=E(n(22)),g=E(n(148)),v=E(n(97));function E(e){return e&&e.__esModule?e:{default:e}}var w=function(e){function t(e){(0,o.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.loadKnowledge=function(){console.log(n.props.username,n.props.chapter_name),n.props.loadPortContent({url:"/api/logicZhishidian",body:{username:n.props.username,chapter_name:n.props.chapter_name}})},n}return(0,i.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadKnowledge()}},{key:"render",value:function(){var e=this.props,t=e.total_content,n=e.setLearningType;return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"card-box"},void 0==t?null:c.default.createElement("div",{className:f.default.logic_knowledge},void 0==t.chapter_name?null:c.default.createElement("h4",{className:f.default.dalei}," ",t.chapter_name," "),void 0==t.content?null:c.default.createElement(_.default,{list:t.content}),void 0==t.shunxu?null:c.default.createElement("div",null,t.shunxu.map(function(e,n){return c.default.createElement("div",{key:n},c.default.createElement("div",{className:f.default.logic_knowledge_title}," ",e," "),void 0==t.xiaolei?null:c.default.createElement(_.default,{list:t.xiaolei[n]}))})),c.default.createElement("div",{align:"center"},c.default.createElement(h.default,{className:f.default.enterNextButton,text:"进入重点习题",onClick:function(){return n("重点习题")}})))))}}]),t}(c.default.PureComponent);t.default=(0,v.default)([g.default,(0,d.connect)(function(e){return{username:e.UserManager.name,total_content:e.PortTest.content,chapter_name:e.LearningTypeSelect.chapter_name}},function(e){return(0,a.default)({},(0,s.bindActionCreators)(p.actions,e),(0,s.bindActionCreators)(m.actions,e))})],w)},830:function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,"._2mhwhY--7RhYamCmuB6767{padding:10px 40px 40px;font-size:16px;line-height:32px}._34EsanbaZff7_mViW_EOZw{font-size:20px;color:#ff5b5b;text-align:center}._3iNRNE48jtmBhYLJ0YegK9{color:#f9c851}",""]),t.locals={logic_knowledge:"_2mhwhY--7RhYamCmuB6767",dalei:"_34EsanbaZff7_mViW_EOZw",logic_knowledge_title:"_3iNRNE48jtmBhYLJ0YegK9"}},831:function(e,t,n){var a=n(830);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(10)(a,l);a.locals&&(e.exports=a.locals)}}]);