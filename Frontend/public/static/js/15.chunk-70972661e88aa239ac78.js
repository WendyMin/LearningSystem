/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{614:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2NVmeiwK1hEsJbyLCYLoaA{font-size:22px;text-align:center;color:#188ae2}._1CwU7lmAcXAE_zXyBDujJ3{font-size:18px;margin:10px 0}._1CwU7lmAcXAE_zXyBDujJ3,.ABAptknMFw33d46U2HLER{color:#505458;font-family:Karla,sans-serif}._1pmLldB2kV_urmnRkg2UUF{position:relative;left:5%;width:80%}._1fnlfCms0MLgtB1FriZkr1{float:right;margin-right:10px}.GlXQKVMaR9idwuqcPoMTD{padding:20px;box-shadow:0 0 8px 0 rgba(0,0,0,.06),0 1px 0 0 rgba(0,0,0,.02);-webkit-border-radius:5px;border-radius:5px;-moz-border-radius:5px;background-clip:padding-box;margin-bottom:20px;background-color:#fff;margin:10px 0;height:150px;overflow:hidden;text-overflow:ellipsis;word-break:break-word;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;margin-bottom:10px}",""]),t.locals={title:"_2NVmeiwK1hEsJbyLCYLoaA",title18:"_1CwU7lmAcXAE_zXyBDujJ3",title16:"ABAptknMFw33d46U2HLER",chtoengall:"_1pmLldB2kV_urmnRkg2UUF",buttonright:"_1fnlfCms0MLgtB1FriZkr1",cardboxfix:"GlXQKVMaR9idwuqcPoMTD"}},615:function(e,t,a){var l=a(614);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},616:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=E(a(2)),n=E(a(11)),r=E(a(4)),i=E(a(10)),o=E(a(3)),d=E(a(5)),c=E(a(1)),u=E(a(615)),s=a(15),m=a(14),f=(E(a(24)),E(a(155)),E(a(153)),E(a(152)),E(a(154)),E(a(156)),a(266)),p=a(268),b=a(72),g=(E(a(150)),E(a(149)),E(a(97))),v=E(a(98));function E(e){return e&&e.__esModule?e:{default:e}}var w=function(e){function t(e){(0,r.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.loadShengCi=function(e){a.props.loadPortContent({url:"/api/eng_getUserWord",body:{username:a.props.username,articleId:e}})},a.loadNanJu=function(e){a.props.loadPortContent3({url:"/api/eng_getUserSentence",body:{username:a.props.username,articleId:e}})},a.loadArticleId=function(){a.props.loadPortContent2({url:"/api/eng_getArticleId",body:{username:a.props.username}})},a.haveArticleId=!1,a.state={getArticleId:!1},a}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentWillMount",value:function(){this.loadArticleId()}},{key:"componentWillReceiveProps",value:function(e){void 0!=e.articleId&&!1===this.haveArticleId&&(this.loadShengCi(e.articleId),this.loadNanJu(e.articleId),this.haveArticleId=!0)}},{key:"render",value:function(){var e=this.props,t=e.setLearningType,a=(e.learningType,e.articleId,e.shengci),l=e.nanju;return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:u.default.title},"本课生词"),c.default.createElement("br",null),void 0==a[0]?null:a.map(function(e,t){return c.default.createElement("div",{key:t,className:"col-md-3"},c.default.createElement("div",{className:u.default.cardboxfix},c.default.createElement("div",{className:"kanban-detail"},c.default.createElement("span",{className:"label label-primary pull-right"},"Word"),c.default.createElement("p",{className:u.default.title18},e.word_l),c.default.createElement("ul",{className:"list-inline m-b-0"},c.default.createElement("li",null,c.default.createElement("p",{className:u.default.title16},e.translate))))))})),c.default.createElement("br",null),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:u.default.title},"本课难句"),c.default.createElement("br",null),void 0==l?null:l.map(function(e,t){return c.default.createElement("div",{key:t,className:"col-md-12"},c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement("div",{className:"kanban-detail"},c.default.createElement("span",{className:"label label-primary pull-right"},"Sentence"),c.default.createElement("p",{className:u.default.title18},e.sentence),c.default.createElement("ul",{className:"list-inline m-b-0"},c.default.createElement("li",null,c.default.createElement("br",null),c.default.createElement("p",{className:u.default.title16},c.default.createElement("strong",null,"翻译："),e.translate),c.default.createElement("br",null))))))})),c.default.createElement("br",null),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:u.default.buttonright},c.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t("英语主页面")}},"返回英语学习主页面"),"  ",c.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t("英语汉译英")}},"进入汉译英")))))}}]),t}(c.default.PureComponent);t.default=(0,v.default)([g.default,(0,s.connect)(function(e){return{learningType:e.LearningTypeSelect.learningType,username:e.UserManager.name,articleId:e.PortTest.content2.pre_artid,shengci:e.PortTest.content,nanju:e.PortTest.content3}},function(e){return(0,l.default)({},(0,m.bindActionCreators)(p.actions,e),(0,m.bindActionCreators)(f.actions,e),(0,m.bindActionCreators)(b.actions,e))})],w)}}]);