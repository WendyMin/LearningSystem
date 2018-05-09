/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{238:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(2)),r=a(17),o=u(a(237)),l=u(a(146));function u(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.combineReducers)((0,n.default)({WindowManager:o.default},l.default))},247:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(109)),r=f(a(61)),o=f(a(88)),l=f(a(37)),u=f(a(246)),i=f(a(146)),d=f(a(239));function f(e){return e&&e.__esModule?e:{default:e}}var s,c=(0,l.default)(i.default),p={},m=!0,v=!1,h=void 0;try{for(var g,_=(0,r.default)(c);!(m=(g=_.next()).done);m=!0){var y=g.value;p[y]=i.default[y](void 0,{type:(0,n.default)("@@DirectJS/RestoreLastStateShapeTheTree")})}}catch(e){v=!0,h=e}finally{try{!m&&_.return&&_.return()}finally{if(v)throw h}}try{s=JSON.parse(localStorage.lastState)}catch(e){s={}}(0,o.default)(p,s),d.default&&(0,u.default)(p,d.default,!0),t.default=p},251:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(92)),r=a(17),o=i(a(250)),l=i(a(247)),u=i(a(238));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.createStore)(u.default,l.default,r.compose.apply(void 0,[r.applyMiddleware.apply(void 0,(0,n.default)(o.default.middleWares||[]))].concat((0,n.default)(o.default.enhancers||[]))))},252:function(e,t,a){(e.exports=a(14)(!1)).push([e.i,".fullSpaceBFC{width:100%;height:100%;margin:0;padding:0}#reactRoot,.page,body,html{position:absolute;min-height:100%;min-width:100%}::-webkit-scrollbar{height:0;background:transparent}",""])},253:function(e,t,a){var n=a(252);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(13)(n,r);n.locals&&(e.exports=n.locals)},254:function(e,t,a){(t=e.exports=a(14)(!1)).push([e.i,"._3g4XeiEfu2Ztv4SgCWhRXW{position:fixed;width:0;height:0}.trcpBAE4qkfw6yMmZzxm_{left:0;right:0;top:0;bottom:0;z-index:600}._11hfTzTRsWNKOQHnRV_KjA,.trcpBAE4qkfw6yMmZzxm_{position:fixed;background-color:rgba(13,10,49,.35);box-sizing:border-box}._11hfTzTRsWNKOQHnRV_KjA{width:100%;height:100%;z-index:1600;overflow:hidden}",""]),t.locals={positionSystem:"_3g4XeiEfu2Ztv4SgCWhRXW",masked:"trcpBAE4qkfw6yMmZzxm_",alertMask:"_11hfTzTRsWNKOQHnRV_KjA"}},255:function(e,t,a){var n=a(254);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(13)(n,r);n.locals&&(e.exports=n.locals)},257:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(a(11)),r=m(a(4)),o=m(a(10)),l=m(a(3)),u=m(a(5)),i=m(a(37)),d=m(a(1)),f=a(70),s=m(a(256)),c=m(a(175)),p=m(a(117));function m(e){return e&&e.__esModule?e:{default:e}}var v=(0,i.default)(c.default).map(function(e){var t=c.default[e];return t.redirect?d.default.createElement(f.Redirect,{key:t.from+t.to,from:e,to:t.redirect,exact:t.exact}):d.default.createElement(f.Route,{key:e,path:e,exact:!t.nested,component:t.page})}),h=function(e){function t(){return(0,r.default)(this,t),(0,l.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return d.default.createElement(s.default,{showErrorMessage:p.default.onUIErrorShowErrorMessage,errorHandler:p.default.UIErrorHandler,customMessage:p.default.UIErrorMessage},d.default.createElement(f.Switch,{location:this.props.location},v))}}]),t}(d.default.PureComponent);t.default=h},377:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(a(2)),r=h(a(11)),o=h(a(4)),l=h(a(10)),u=h(a(3)),i=h(a(5)),d=h(a(376)),f=h(a(1)),s=a(70),c=a(100),p=h(a(176)),m=h(a(372)),v=(h(a(175)),h(a(257)));function h(e){return e&&e.__esModule?e:{default:e}}var g=m.default["*"].from,_=m.default["*"].to,y=m.default["*"]["*"],w={},E=function(e){function t(){var e,a,n,l;(0,o.default)(this,t);for(var i=arguments.length,d=Array(i),f=0;f<i;f++)d[f]=arguments[f];return a=n=(0,u.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(d))),n.from="",n.to="",l=a,(0,u.default)(n,l)}return(0,i.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=this.props.location;return this.from=this.to,this.to=t.pathname,f.default.createElement(c.TransitionGroup,{className:"fullSpaceBFC"},f.default.createElement(c.Transition,{key:t.pathname,timeout:{enter:0,exit:p.default.value},appear:!0},function(a){return f.default.createElement("section",{className:"page",style:(0,n.default)({},w,function(e,t,a){if("exited"===a)return{display:"none"};var n=y.timingFunction,r=y.toAnimate,o=y;return e in m.default?t in m.default[e]&&(o=m.default[e][t]):e in g?o=g[e]:t in _&&(o=_[t]),(0,d.default)(o.time)?p.default.setTime(o.time):p.default.setTime(y.time),"string"==typeof o.timingFunction&&(n=o.timingFunction),"string"==typeof o.toAnimate&&(r=o.toAnimate),w.transition=r+" "+p.default.value+"ms "+n,o[a]}(e.from,e.to,a))},f.default.createElement(v.default,{location:t}))}))}}]),t}(f.default.PureComponent);t.default=(0,s.withRouter)(E)},431:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=y(a(2)),r=y(a(11)),o=y(a(4)),l=y(a(10)),u=y(a(3)),i=y(a(5)),d=y(a(1)),f=a(17),s=a(19),c=a(70),p=a(100),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(75)),v=y(a(401)),h=y(a(397));y(a(143));a(379);var g=y(a(377)),_=y(a(255));function y(e){return e&&e.__esModule?e:{default:e}}a(253);var w=function(e){function t(){var e,a,n,l;(0,o.default)(this,t);for(var i=arguments.length,d=Array(i),f=0;f<i;f++)d[f]=arguments[f];return a=n=(0,u.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(d))),n.positioned=[],n.position=function(e){return n.positioned[e]||(n.positioned[e]={left:40+e/20+e%20*20+"px",top:40+e%20*20+"px",right:"auto",bottom:"auto"}),n.positioned[e]},n.getInit=function(e){var t=n.props.draging,a=t.left,r=t.top,o=t.ref;n.initLeft=a,n.initTop=r,n.ref=o},n.smoothlyMove=function(e){return n.ref.style.left=e.clientX+n.initLeft+"px",n.ref.style.top=e.clientY+n.initTop+"px",e.preventDefault()},n.allowDrop=function(e){return e.preventDefault()},l=a,(0,u.default)(n,l)}return(0,i.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.Windows,r=t.masked,o=t.alertText,l=(t.closeAlert,t.onMaskClick);return d.default.createElement("div",{className:"fullSpaceBFC",onDragEnter:this.getInit,onDragOver:this.smoothlyMove,onDrop:this.allowDrop},o?d.default.createElement("div",{className:o&&_.default.alertMask},d.default.createElement(h.default,{play:!0},d.default.createElement(v.default,null))):null,d.default.createElement("div",{className:r?_.default.masked:_.default.positionSystem,onClick:l}),d.default.createElement(p.TransitionGroup,null,a.map(function(t){return d.default.createElement(h.default,{key:t.id},d.default.createElement(t.Component,(0,n.default)({width:"50vw",height:"50vh",position:e.position(t.id)},t.props,{windowId:t.id})))})),d.default.createElement(c.BrowserRouter,null,d.default.createElement(g.default,null)))}}]),t}(d.default.PureComponent);t.default=(0,s.connect)(function(e){var t=e.WindowManager;return{Windows:t.Windows,draging:t.draging,masked:t.masked,alertText:t.alert,onMaskClick:t.onMaskClick}},function(e){return(0,f.bindActionCreators)(m,e)})(w)},454:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(453),o=(n=r)&&n.__esModule?n:{default:n},l=a(117);var u=(0,o.default)(l.socket);u.io.opts.transports=["polling","websocket"];var i=0,d=2;u.on("reconnect_attempt",function(){++i>=3&&(console.log("aborting tcp connection"),d+=1,u.close(),7===d&&(d=120),console.log("aborted , next reonnecting started at "+d+"s"),setTimeout(function(){i=0,u.connect()},1e3*d))}),t.default=u},487:function(e,t,a){"use strict";var n=c(a(215)),r=c(a(1)),o=c(a(16)),l=a(19),u=c(a(459)),i=c(a(117)),d=c(a(454)),f=c(a(431)),s=c(a(251));function c(e){return e&&e.__esModule?e:{default:e}}var p=i.default.modifyApp||function(e){return e};o.default.render(p(r.default.createElement(l.Provider,{store:s.default},r.default.createElement(f.default,null))),document.getElementById("reactRoot"));var m=i.default.onAppWillMount,v=i.default.onAppWillClose,h=i.default.persistentState;window.addEventListener("load",function(){m(s.default.getState(),s.default.dispatch.bind(s.default),d.default)}),window.addEventListener("beforeunload",function(){v(s.default.getState(),h,d.default);var e=(0,u.default)(s.default.getState(),h);localStorage.lastState=(0,n.default)(e)})}}]);