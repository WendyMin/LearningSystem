/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{657:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2NVmeiwK1hEsJbyLCYLoaA{font-size:22px;text-align:center;color:#188ae2}._1CwU7lmAcXAE_zXyBDujJ3{font-size:18px;margin:10px 0}._1CwU7lmAcXAE_zXyBDujJ3,.ABAptknMFw33d46U2HLER{color:#505458;font-family:Karla,sans-serif}._1pmLldB2kV_urmnRkg2UUF{position:relative;left:5%;width:80%}._1fnlfCms0MLgtB1FriZkr1{float:right;margin-right:10px}.GlXQKVMaR9idwuqcPoMTD{padding:20px;box-shadow:0 0 8px 0 rgba(0,0,0,.06),0 1px 0 0 rgba(0,0,0,.02);-webkit-border-radius:5px;border-radius:5px;-moz-border-radius:5px;background-clip:padding-box;margin-bottom:20px;background-color:#fff;margin:10px 0;height:150px;overflow:hidden;text-overflow:ellipsis;word-break:break-word;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;margin-bottom:10px}",""]),t.locals={title:"_2NVmeiwK1hEsJbyLCYLoaA",title18:"_1CwU7lmAcXAE_zXyBDujJ3",title16:"ABAptknMFw33d46U2HLER",chtoengall:"_1pmLldB2kV_urmnRkg2UUF",buttonright:"_1fnlfCms0MLgtB1FriZkr1",cardboxfix:"GlXQKVMaR9idwuqcPoMTD"}},658:function(e,t,a){var l=a(657);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},659:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=h(a(2)),n=h(a(11)),r=h(a(4)),i=h(a(10)),d=h(a(3)),c=h(a(5)),u=h(a(1)),o=h(a(658)),s=a(15),m=a(14),f=(h(a(23)),h(a(276)),h(a(274)),h(a(270)),h(a(273)),h(a(275)),a(267)),p=a(272),b=a(286),g=(h(a(268)),h(a(266)),h(a(146))),E=h(a(147));function h(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){(0,r.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.loadShengCi=function(e){a.props.loadShengci({url:"/api/eng_getUserWord",body:{username:a.props.username,articleId:e}})},a.loadNanJu=function(e){a.props.loadNanju({url:"/api/eng_getUserSentence",body:{username:a.props.username,articleId:e}})},a.loadArticleid=function(){a.props.loadArticleId({url:"/api/eng_getArticleId",body:{username:a.props.username}})},a.haveArticleId=!1,a.state={getArticleId:!1},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentWillMount",value:function(){this.loadArticleid()}},{key:"componentWillReceiveProps",value:function(e){void 0!=e.articleId&&!1===this.haveArticleId&&(this.loadShengCi(e.articleId),this.loadNanJu(e.articleId),this.haveArticleId=!0)}},{key:"render",value:function(){var e=this.props,t=e.setLearningType,a=(e.learningType,e.articleId,e.shengci),l=e.nanju;return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",null,u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:o.default.title},"本篇生词"),u.default.createElement("br",null),void 0==a[0]?null:a.map(function(e,t){return u.default.createElement("div",{key:t,className:"col-md-3"},u.default.createElement("div",{className:o.default.cardboxfix},u.default.createElement("div",{className:"kanban-detail"},u.default.createElement("span",{className:"label label-primary pull-right"},"Word"),u.default.createElement("p",{className:o.default.title18},e.word_l),u.default.createElement("ul",{className:"list-inline m-b-0"},u.default.createElement("li",null,u.default.createElement("p",{className:o.default.title16},e.translate))))))})),u.default.createElement("br",null),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:o.default.title},"本篇难句"),u.default.createElement("br",null),void 0==l?null:l.map(function(e,t){return u.default.createElement("div",{key:t,className:"col-md-12"},u.default.createElement("div",{className:"card-box kanban-box"},u.default.createElement("div",{className:"kanban-detail"},u.default.createElement("span",{className:"label label-primary pull-right"},"Sentence"),u.default.createElement("p",{className:o.default.title18},e.sentence),u.default.createElement("ul",{className:"list-inline m-b-0"},u.default.createElement("li",null,u.default.createElement("br",null),u.default.createElement("p",{className:o.default.title16},u.default.createElement("strong",null,"翻译："),e.translate),u.default.createElement("br",null))))))})),u.default.createElement("br",null),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:o.default.buttonright},u.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t("英语主页面")}},"返回英语学习主页面"),"  ",u.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t("英语汉译英")}},"进入汉译英")))))}}]),t}(u.default.PureComponent);t.default=(0,E.default)([g.default,(0,s.connect)(function(e){return{learningType:e.LearningTypeSelect.learningType,username:e.UserManager.name,articleId:e.EnglishShengciNanjuPort.articleIds.pre_artid,shengci:e.EnglishShengciNanjuPort.shengci,nanju:e.EnglishShengciNanjuPort.nanju}},function(e){return(0,l.default)({},(0,m.bindActionCreators)(p.actions,e),(0,m.bindActionCreators)(f.actions,e),(0,m.bindActionCreators)(b.actions,e))})],v)}}]);