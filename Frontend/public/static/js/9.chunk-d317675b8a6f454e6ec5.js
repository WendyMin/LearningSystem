/*!
 * Antinus Innovation
 * All rights reserved
 */
webpackJsonp([9],{629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(10)),o=c(n(1)),l=c(n(9)),i=c(n(2)),r=c(n(3)),u=c(n(137)),s=c(n(53)),d=c(n(0));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n){var c=(0,s.default)(e),f=function(t){var n=!0,a=!0,o=!1,l=void 0;try{for(var i,r=(0,u.default)(c);!(a=(i=r.next()).done);a=!0){var s=i.value;e[s].satisfy(t[s])||(n=!1,e[s].block.call(this))}}catch(e){o=!0,l=e}finally{try{!a&&r.return&&r.return()}finally{if(o)throw l}}return n};return function(e){function u(e){(0,o.default)(this,u);var t=(0,i.default)(this,(u.__proto__||(0,a.default)(u)).call(this,e));return f.call(t,t.props),t}return(0,r.default)(u,e),(0,l.default)(u,[{key:"componentWillReceiveProps",value:function(e){t&&f.call(this,e)}},{key:"render",value:function(){return d.default.createElement(n,this.props)}}]),u}(n)}}},630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(137)),o=d(n(10)),l=d(n(1)),i=d(n(9)),r=d(n(2)),u=d(n(3)),s=d(n(53));function d(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=(0,s.default)(e);return function(t){function s(){return(0,l.default)(this,s),(0,r.default)(this,(s.__proto__||(0,o.default)(s)).apply(this,arguments))}return(0,u.default)(s,t),(0,i.default)(s,[{key:"componentWillReceiveProps",value:function(t){var o=!0,l=!1,i=void 0;try{for(var r,u=(0,a.default)(n);!(o=(r=u.next()).done);o=!0){var s=r.value;t[s].resolved!==this.props[s].resolved?e[s].onResolved.call(this,t):t[s].rejected!==this.props[s].rejected&&e[s].onRejected&&e[s].onRejected.call(this,t)}}catch(e){l=!0,i=e}finally{try{!o&&u.return&&u.return()}finally{if(l)throw i}}}}]),s}(t)}}},631:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(137),l=(a=o)&&a.__esModule?a:{default:a};t.default=function(e,t){if(!Array.isArray(e))throw"first argument must be an array";var n=!0,a=!1,o=void 0;try{for(var i,r=(0,l.default)(e);!(n=(i=r.next()).done);n=!0){t=(0,i.value)(t)}}catch(e){a=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(a)throw o}}return t}},632:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(136)),o=l(n(638));function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)(o.default,{enter:1e3,exit:1e3})},633:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(136)),o=l(n(640));function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)(o.default,{enter:1e3,exit:1e3})},634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(136)),o=l(n(642));function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)(o.default,{enter:1e3,exit:1e3})},635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(10)),o=c(n(1)),l=c(n(9)),i=c(n(2)),r=c(n(3)),u=c(n(0)),s=c(n(644)),d=c(n(265));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.children,a=t.loading,o=t.wasLoaded,l=t.lastFailed,i=t.reloader,r=t.info,c=t.center;return u.default.createElement(u.default.Fragment,null,a?(e=Math.random())<.3?u.default.createElement("div",{className:c&&s.default.makeLoadingCenter},u.default.createElement("div",{className:s.default.spinner1},u.default.createElement("div",{className:s.default.bounce1}),u.default.createElement("div",{className:s.default.bounce2}),u.default.createElement("div",{className:s.default.bounce3}))):e<.7?u.default.createElement("div",{className:c&&s.default.makeLoadingCenter},u.default.createElement("div",{className:s.default.spinner2},u.default.createElement("div",{className:s.default.doubleBounce1}),u.default.createElement("div",{className:s.default.doubleBounce2}))):u.default.createElement("div",{className:c&&s.default.makeLoadingCenter},u.default.createElement("div",{className:s.default.spinner3},u.default.createElement("div",{className:s.default.rect1}),u.default.createElement("div",{className:s.default.rect2}),u.default.createElement("div",{className:s.default.rect3}),u.default.createElement("div",{className:s.default.rect4}),u.default.createElement("div",{className:s.default.rect5}))):l?u.default.createElement("div",{onClick:i,className:s.default.bigNote+" "+c&&s.default.makeLoadingCenter},u.default.createElement(d.default,{info:o?"Latest request failed, click here to reload":"Request failed, please check your network state.Click here to reload"})):u.default.createElement(d.default,{info:r}),o?n:null)}}]),t}(u.default.PureComponent);t.default=f},636:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(136)),o=l(n(646));function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)(o.default,{enter:1e3,exit:1e3})},637:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(4)),o=r(n(0)),l=r(n(648)),i=n(262);function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,l.default)(function(e){return o.default.createElement(i.view,(0,a.default)({},e,{onCancel:function(){e.onCancel(),e.closeWindow()},onSuccess:function(){e.onSuccess(),e.closeWindow()}}))})},638:function(e,t,n){var a=n(639);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};n(13)(a,o);a.locals&&(e.exports=a.locals)},639:function(e,t,n){(t=e.exports=n(12)(!1)).push([e.i,"._2LRUnY4nDm_iOtCCv48qD1,\n._2FhIUrruATA8itEcYzssWZ {\n  margin-left: -100%;\n  transition: all 1000ms ease;\n}\n._3qAk4proA4V6T4M7vVzel-,\n._23llk2LtnhfRpmAM7MTF69 {\n  margin-left: 0;\n}\n._2Dx8h_HACeSegArVmbMCNe {\n  transition: all 1000ms ease;\n  margin-left: 0;\n}\n._3nCXf4vTE55VjM0ptCCTtq {\n  margin-left: 100%;\n}\n",""]),t.locals={appear:"_2LRUnY4nDm_iOtCCv48qD1",enter:"_2FhIUrruATA8itEcYzssWZ",appearActive:"_3qAk4proA4V6T4M7vVzel-",enterActive:"_23llk2LtnhfRpmAM7MTF69",exit:"_2Dx8h_HACeSegArVmbMCNe",exitActive:"_3nCXf4vTE55VjM0ptCCTtq"}},640:function(e,t,n){var a=n(641);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};n(13)(a,o);a.locals&&(e.exports=a.locals)},641:function(e,t,n){(t=e.exports=n(12)(!1)).push([e.i,"._1MB2CPIXnGs299kvhBK9he,\n._4nHhH23J6HHgL3WQn2Cmc {\n  margin-left: 100%;\n  transition: all 1000ms ease;\n}\n.nHHIBTPjx84LGjREEdO6z,\n._3YtvA49RRGLswoNfhyVtmJ {\n  margin-left: 0;\n}\n._2nhxmm_wA4M6pU4bIMEWQ3 {\n  transition: all 1000ms ease;\n  margin-left: 0;\n}\n._3rH-R-o3GPvP6_spojv6WQ {\n  margin-left: -100%;\n}\n",""]),t.locals={appear:"_1MB2CPIXnGs299kvhBK9he",enter:"_4nHhH23J6HHgL3WQn2Cmc",appearActive:"nHHIBTPjx84LGjREEdO6z",enterActive:"_3YtvA49RRGLswoNfhyVtmJ",exit:"_2nhxmm_wA4M6pU4bIMEWQ3",exitActive:"_3rH-R-o3GPvP6_spojv6WQ"}},642:function(e,t,n){var a=n(643);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};n(13)(a,o);a.locals&&(e.exports=a.locals)},643:function(e,t,n){(t=e.exports=n(12)(!1)).push([e.i,".tyAWxaUchede0CHVd45ur,\n._2cML4IoWiExEkZO0sTfEfZ {\n  top: 100%;\n  position: absolute;\n  transition: all 1000ms ease;\n}\n._3w4pjqt52cM4L6hLqXYIr6,\n._17XJROM6-Ux9b9XSgW-H8F {\n  position: absolute;\n  top: 0;\n}\n._1aiffLNrQiECx_Nr3C75FX {\n  position: absolute;\n  transition: all 1000ms ease;\n  bottom: 0;\n}\n._3xXwzEo4V_1mZvoF8iIeXH {\n  position: absolute;\n  bottom: 100%;\n}\n",""]),t.locals={appear:"tyAWxaUchede0CHVd45ur",enter:"_2cML4IoWiExEkZO0sTfEfZ",appearActive:"_3w4pjqt52cM4L6hLqXYIr6",enterActive:"_17XJROM6-Ux9b9XSgW-H8F",exit:"_1aiffLNrQiECx_Nr3C75FX",exitActive:"_3xXwzEo4V_1mZvoF8iIeXH"}},644:function(e,t,n){var a=n(645);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};n(13)(a,o);a.locals&&(e.exports=a.locals)},645:function(e,t,n){(t=e.exports=n(12)(!1)).push([e.i,"._2l8ISGcXEQrzJAo1dzjDR2 {\n  width: 100%;\n  text-align: center;\n}\n._2l8ISGcXEQrzJAo1dzjDR2 > div {\n  width: 30px;\n  height: 30px;\n  background-color: #375997;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: GSTh3p9Dm_BI6Aa-jfvsm 1.4s infinite ease-in-out;\n  animation: GSTh3p9Dm_BI6Aa-jfvsm 1.4s infinite ease-in-out;\n  animation-fill-mode: both;\n}\n._2l8ISGcXEQrzJAo1dzjDR2 ._1sApYLXa_7rMcsHYAijRqA {\n  animation-delay: -0.32s;\n}\n._2l8ISGcXEQrzJAo1dzjDR2 ._38ah3QPYUqAiB6B1vTim5W {\n  animation-delay: -0.16s;\n}\n@keyframes GSTh3p9Dm_BI6Aa-jfvsm {\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n._2lQxoLYxvxI_ru1LFLaUmU {\n  width: 60px;\n  height: 60px;\n  position: relative;\n  margin: 100px auto;\n}\n._1AgOBFiNeL4MewWj_CVzRp,\n.xaCLjW2KCMJOQVL3IB_Xx {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #67CF22;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: -xFJqfslZ6fQjPpxsMWkg 2s infinite ease-in-out;\n}\n.xaCLjW2KCMJOQVL3IB_Xx {\n  animation-delay: -1s;\n}\n@keyframes -xFJqfslZ6fQjPpxsMWkg {\n  0%,\n  100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n._3glBlbjm56WjIEG36Vuw7o {\n  margin: 100px auto;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 10px;\n}\n._3glBlbjm56WjIEG36Vuw7o > div {\n  background-color: #2F3641;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  margin-left: 2px;\n  margin-right: 2px;\n  animation: _24VUdXNdGqcukAY9GeCWFd 1.2s infinite ease-in-out;\n}\n._3glBlbjm56WjIEG36Vuw7o ._13CqLTg4z6vTLXsQm1idxK {\n  animation-delay: -1.1s;\n}\n._3glBlbjm56WjIEG36Vuw7o ._17wpNgpYcNCKoD17gDRAo3 {\n  animation-delay: -1s;\n}\n._3glBlbjm56WjIEG36Vuw7o .sn1DJ3CoK_HqAfm3CSzgX {\n  animation-delay: -0.9s;\n}\n._3glBlbjm56WjIEG36Vuw7o ._1x_ahiaUGbc9YjGWu5dOUP {\n  animation-delay: -0.8s;\n}\n@keyframes _24VUdXNdGqcukAY9GeCWFd {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n  }\n}\n.oaWd_Q2OzHNmpOi7IxDeP {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n._3T6YZvJXTSBYIV-mI2HeFu {\n  font-size: 20px;\n}\n",""]),t.locals={spinner1:"_2l8ISGcXEQrzJAo1dzjDR2",bouncedelay:"GSTh3p9Dm_BI6Aa-jfvsm",bounce1:"_1sApYLXa_7rMcsHYAijRqA",bounce2:"_38ah3QPYUqAiB6B1vTim5W",spinner2:"_2lQxoLYxvxI_ru1LFLaUmU",doubleBounce1:"_1AgOBFiNeL4MewWj_CVzRp",doubleBounce2:"xaCLjW2KCMJOQVL3IB_Xx",bounce:"-xFJqfslZ6fQjPpxsMWkg",spinner3:"_3glBlbjm56WjIEG36Vuw7o",stretchdelay:"_24VUdXNdGqcukAY9GeCWFd",rect2:"_13CqLTg4z6vTLXsQm1idxK",rect3:"_17wpNgpYcNCKoD17gDRAo3",rect4:"sn1DJ3CoK_HqAfm3CSzgX",rect5:"_1x_ahiaUGbc9YjGWu5dOUP",makeLoadingCenter:"oaWd_Q2OzHNmpOi7IxDeP",bigNote:"_3T6YZvJXTSBYIV-mI2HeFu"}},646:function(e,t,n){var a=n(647);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};n(13)(a,o);a.locals&&(e.exports=a.locals)},647:function(e,t,n){(t=e.exports=n(12)(!1)).push([e.i,"._1cF_ThJjqPqZVuf2aeL-lH,\n._14-JVUikn1uujhjbLnIpce {\n  position: absolute;\n  bottom: 100%;\n  transition: all 1000ms ease;\n}\n._33zRnWg_CpUyPAJAN5SFpf,\n._1o2kBpQkFx99fadlNqzkxY {\n  position: absolute;\n  bottom: 0;\n}\n._1aKoUKfFVSrPNinYsUukwT {\n  position: absolute;\n  transition: all 1000ms ease;\n  top: 0;\n}\n._1Pb_20tVQM_qliDxsi_bDj {\n  position: absolute;\n  top: 100%;\n}\n",""]),t.locals={appear:"_1cF_ThJjqPqZVuf2aeL-lH",enter:"_14-JVUikn1uujhjbLnIpce",appearActive:"_33zRnWg_CpUyPAJAN5SFpf",enterActive:"_1o2kBpQkFx99fadlNqzkxY",exit:"_1aKoUKfFVSrPNinYsUukwT",exitActive:"_1Pb_20tVQM_qliDxsi_bDj"}},648:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(n(4)),o=h(n(10)),l=h(n(1)),i=h(n(9)),r=h(n(2)),u=h(n(3)),s=h(n(0)),d=h(n(649)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(92)),f=n(17),p=n(19),_=h(n(37));function h(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t,n;return(0,p.connect)(void 0,function(e){return(0,f.bindActionCreators)(c,e)})((n=t=function(t){function n(){var e,t,a,i;(0,l.default)(this,n);for(var u=arguments.length,s=Array(u),d=0;d<u;d++)s[d]=arguments[d];return t=a=(0,r.default)(this,(e=n.__proto__||(0,o.default)(n)).call.apply(e,[this].concat(s))),a.getDragHandle=function(e){return a.dragHandle=e},a.closeWindow=function(){var e=a.props,t=e.closeWindow,n=e.windowId,o=e.onCancel;t(n),o(a.props)},a.onDragStart=function(e){var t=a.props,n=t.windowId,o=t.setDrag,l=t.position,i=l.left,r=l.top;o({left:parseInt(i)-e.clientX,top:parseInt(r)-e.clientY,id:n}),a.dragHandle.style.opacity=0},a.onDragEnd=function(){a.dragHandle.style.opacity=1},i=t,(0,r.default)(a,i)}return(0,u.default)(n,t),(0,i.default)(n,[{key:"render",value:function(){var t=this.props,n=t.position,o=(t.closeModal,t.windowId,t.width),l=t.height,i=t.cancelable,r=(t.onCancel,t.headerClass);return s.default.createElement("div",{style:{left:n.left,top:n.top,width:o,height:l},className:d.default.window},s.default.createElement("div",{draggable:!0,onDragStart:this.onDragStart,onDragEnd:this.onDragEnd,ref:this.getDragHandle},"drag handle"),s.default.createElement("div",{className:r},i?s.default.createElement(_.default,{className:d.default.cancel,onClick:this.closeWindow,text:"X"}):null),s.default.createElement("div",{className:d.default.conentContainer},s.default.createElement(e,(0,a.default)({},this.props,{closeWindow:this.closeWindow}))))}}]),n}(s.default.Component),t.defaultProps={onCancel:function(){return null},headerClass:d.default.header},n))}},649:function(e,t,n){var a=n(650);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};n(13)(a,o);a.locals&&(e.exports=a.locals)},650:function(e,t,n){(t=e.exports=n(12)(!1)).push([e.i,"._3iwhrzW7kKCgIXdR1drUuT {\n  position: absolute;\n  display: flex;\n  background-color: transparent;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 999;\n}\n._3iwhrzW7kKCgIXdR1drUuT ._1nQmeKoTzYGIlnGT5BWhPE {\n  width: 100% !important;\n  height: 32px;\n  border-top-left-radius: 11px;\n  border-top-right-radius: 11px;\n  background-color: #282c34;\n  background-size: 80px 80px;\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n  background-repeat: repeat;\n  box-shadow: 1px grey;\n}\n._3iwhrzW7kKCgIXdR1drUuT ._2Daey9jCPZT4n9GpkJpC4k {\n  border: 1px solid black;\n  flex-grow: 2;\n  width: 100%;\n  overflow: scroll;\n  background-color: white;\n}\n.aWj8NxMIC2fdckM-9zLt {\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 30px;\n  height: 30px;\n  padding: 0 0 0 0;\n  border-top-right-radius: 15px;\n}\n",""]),t.locals={window:"_3iwhrzW7kKCgIXdR1drUuT",header:"_1nQmeKoTzYGIlnGT5BWhPE",conentContainer:"_2Daey9jCPZT4n9GpkJpC4k",cancel:"aWj8NxMIC2fdckM-9zLt"}},690:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadQuestions=t.submitQuestions=t.unlockAndHide=t.lockAndShow=t.showQuestion=t.hideQuestion=t.lockQuestion=t.setChoice=void 0;var a=r(n(4)),o=r(n(27)),l=n(731),i=r(n(38));function r(e){return e&&e.__esModule?e:{default:e}}var u=0,s=(t.setChoice=function(e,t){return{type:l.__SET_CHOICE,payload:{questionId:e,choice:t},id:u++}},0),d=(t.lockQuestion=function(e){return{type:l.__LOCK_QUESTION,payload:{questionId:e},id:s++}},0),c=(t.hideQuestion=function(e){return{type:l.__HIDE_QUESTION,payload:{questionId:e},id:d++}},0),f=(t.showQuestion=function(e){return{type:l.__SHOW_QUESTION,payload:{questionId:e},id:c++}},0),p=(t.lockAndShow=function(e){return{type:l.__LOCK_AND_SHOW,payload:{questionId:e},id:f++}},0),_=(t.unlockAndHide=function(e){return{type:l.__UNLOCK_AND_HIDE,payload:{questionId:e},id:p++}},0),h=(t.submitQuestions=function(e){var t=e.url,n=e.body,r=e.headers;return function(e,u){var s=++_,d=function(t){s===_&&e(t)};e({type:l.__ASYNC_SUBMIT_QUESTIONS.pending,payload:{},id:_}),"object"===(void 0===n?"undefined":(0,o.default)(n))&&(n=(0,i.default)(n)),fetch(t,{method:"POST",headers:(0,a.default)({"Content-Type":"application/x-www-form-urlencoded"},r),body:n}).then(function(e){e.ok&&d(function(e){return{type:l.__ASYNC_SUBMIT_QUESTIONS.resolved,payload:{response:e},id:_}}())}).catch(function(e){var t,n;d((t="network",n=e,{type:l.__ASYNC_SUBMIT_QUESTIONS.rejected,payload:{reason:t,detail:n},id:_}))})}},0),m=function(e,t){return{type:l.__ASYNC_LOAD_QUESTIONS.rejected,payload:{reason:e,detail:t},id:h}};t.loadQuestions=function(e){var t=e.url,n=e.body,r=e.parser,u=e.headers,s=e.initState;return function(e,d){var c=++h,f=function(t){c===h&&e(t)};e({type:l.__ASYNC_LOAD_QUESTIONS.pending,payload:{},id:h}),"object"===(void 0===n?"undefined":(0,o.default)(n))&&(n=(0,i.default)(n)),fetch(t,{method:"POST",headers:(0,a.default)({"Content-Type":"application/x-www-form-urlencoded"},u),body:n}).then(function(e){e.ok?e.json().then(function(e){return f(function(e,t){return{type:l.__ASYNC_LOAD_QUESTIONS.resolved,payload:{response:e,initState:t},id:h}}(r(e),s))}).catch(function(e){f(m("json",e))}):f(m("server",e.status))}).catch(function(e){f(m("network",e))})}}},726:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=w(n(4)),o=w(n(10)),l=w(n(1)),i=w(n(9)),r=w(n(2)),u=w(n(3)),s=w(n(0)),d=n(19),c=n(17),f=n(261),p=w(n(727)),_=w(n(93)),h=(w(n(635)),w(n(632)),w(n(633)),w(n(634)),w(n(636)),w(n(637))),m=n(269),g=n(273),y=n(274),v=n(729),b=n(263),x=w(n(629)),E=(w(n(630)),w(n(260))),C=w(n(631));function w(e){return e&&e.__esModule?e:{default:e}}var D=function(e){function t(e){(0,l.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.jiqiao=function(){n.setState({jiqiaoDisplay:!n.state.jiqiaoDisplay,zhaocuoDisplay:!1,gongguDisplay:!1,zhentiDisplay:!1})},n.loadButtonContents_zhaocuo=function(){n.setState({zhaocuoDisplay:!0,gongguDisplay:!1,zhentiDisplay:!1}),n.props.loadButtonContents({url:"http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhaocuoxicuo.php"})},n.loadButtonContents_moban=function(){n.setState({zhaocuoDisplay:!1,mobanDisplay:!0,gongguDisplay:!1,zhentiDisplay:!1}),n.props.loadButtonContents({url:"http://59.110.23.212/LearningSystem/BackEnd/lunzheng_template.php"})},n.loadButtonContents_gonggu=function(){n.setState({jiqiaoDisplay:!1,zhaocuoDisplay:!1,mobanDisplay:!1,gongguDisplay:!n.state.gongguDisplay,zhentiDisplay:!1}),n.props.loadButtonContents({url:"http://59.110.23.212/LearningSystem/BackEnd/lunzheng_gonggu.php"})},n.loadButtonContents_zhenti=function(){n.setState({jiqiaoDisplay:!1,zhaocuoDisplay:!1,mobanDisplay:!1,gongguDisplay:!1,zhentiDisplay:!n.state.zhentiDisplay}),n.props.loadButtonContents({url:"http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhenti.php"})},n.loadZhentiContent=function(e){n.setState({zhentiDisplay:!1,titleContentDisplay:!0,optionContentDisplay:!0,acknowledgeDisplay:!1,egArticleContentDisplay:!1}),n.props.loadWriteContents({url:"http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhenti_content.php",body:{requestQuestion:e}}),n.props.loadPortContent({url:"http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhenti_error.php",body:{requestQuestion:e}})},n.loadGongguContent=function(e){n.setState({gongguDisplay:!1,titleContentDisplay:!0,gongguEgArticle:!1,egArticleContentDisplay:!0,optionContentDisplay:!1,acknowledgeDisplay:!1}),n.props.loadWriteContents({url:"http://59.110.23.212/LearningSystem/BackEnd/lunzheng_gonggu_content.php",body:{requestQuestion:e}})},n.loadZhaocuoContent=function(e){n.setState({zhaocuoDisplay:!1,jiqiaoDisplay:!1,titleContentDisplay:!1,optionContentDisplay:!1,egArticleContentDisplay:!1,acknowledgeDisplay:!0}),n.props.loadWriteKnowledge({url:"http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhaocuoxicuo_content.php",body:{requestQuestion:e}})},n.loadMobanContent=function(e){n.setState({mobanDisplay:!1,jiqiaoDisplay:!1,titleContentDisplay:!1,optionContentDisplay:!1,egArticleContentDisplay:!1,acknowledgeDisplay:!0}),n.props.loadWriteKnowledge({url:"http://59.110.23.212/LearningSystem/BackEnd/lunzheng_template_content.php",body:{requestQuestion:e}})},n.state={processStep:0,jiqiaoDisplay:!1,zhaocuoDisplay:!1,mobanDisplay:!1,gongguDisplay:!1,zhentiDisplay:!1,contentDisplay:!1,titleContentDisplay:!1,optionContentDisplay:!1,acknowledgeDisplay:!1,egArticleContentDisplay:!1,gongguEgArticle:!1},n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.processStep,a=(t.jiqiaoDisplay,t.zhaocuoDisplay,t.mobanDisplay,t.gongguDisplay,t.zhentiDisplay,t.titleContentDisplay),o=t.optionContentDisplay,l=t.acknowledgeDisplay,i=t.egArticleContentDisplay,r=this.props,u=(r.loadButtonContentsState,r.loadWriteContentsState,r.loadWriteKnowledgeState,r.ined,r.choice),d=r.name,c=r.example_article;r.showContent;return s.default.createElement(s.default.Fragment,null,s.default.createElement(f.Prompt,{when:0!==n&&n!==this.actions.length-1,message:"you need to do it again, are you sure to quit?"}),s.default.createElement("div",{className:p.default.HUD},s.default.createElement("div",{className:p.default.HUDtitle}," 学习系统 "),s.default.createElement("div",null," 论证有效性分析 ")),s.default.createElement("div",{className:p.default.wrapper},s.default.createElement("div",{className:p.default.leftPane},s.default.createElement(_.default,{className:p.default.button1,text:"写作技巧精讲",onClick:this.jiqiao}),s.default.createElement("br",null),s.default.createElement(_.default,{className:p.default.button2,text:"巩固强化练习",onClick:this.loadButtonContents_gonggu}),s.default.createElement("br",null),s.default.createElement(_.default,{className:p.default.button3,text:"近年真题演练",onClick:this.loadButtonContents_zhenti}),s.default.createElement(_.default,{className:p.default.button4,text:"数据统计"})),s.default.createElement("div",{className:p.default.rightPane},this.state.jiqiaoDisplay?s.default.createElement("div",{className:p.default.jiqiao},s.default.createElement(_.default,{className:p.default.buttonjiqiao1,text:"找错析错",onClick:this.loadButtonContents_zhaocuo}),s.default.createElement("br",null),s.default.createElement(_.default,{className:p.default.buttonjiqiao2,text:"写作模板",onClick:this.loadButtonContents_moban})):null,this.state.zhaocuoDisplay?s.default.createElement("div",{className:p.default.zhaocuo},s.default.createElement(m.view,{loader:this.loadButtonContents,requestData:this.loadZhaocuoContent})):null,this.state.mobanDisplay?s.default.createElement("div",{className:p.default.zhaocuo},s.default.createElement(m.view,{loader:this.loadButtonContents,requestData:this.loadMobanContent})):null,this.state.gongguDisplay?s.default.createElement("div",{className:p.default.gonggu},s.default.createElement(m.view,{loader:this.loadButtonContents,requestData:this.loadGongguContent})):null,this.state.zhentiDisplay?s.default.createElement("div",{className:p.default.zhenti},s.default.createElement(m.view,{loader:this.loadButtonContents,requestData:this.loadZhentiContent})):null,a?s.default.createElement("div",{className:p.default.title},s.default.createElement("div",{className:p.default.biaoti},u),s.default.createElement(g.view,{className:p.default.content,loader:this.loadWriteContents})):null,i?s.default.createElement("div",{className:p.default.option},s.default.createElement("div",{className:p.default.egArticleText,onClick:function(){return e.setState({gongguEgArticle:!e.state.gongguEgArticle})}}," 参考范文 "),this.state.gongguEgArticle?s.default.createElement("div",{className:p.default.egArticle},s.default.createElement("p",{className:p.default.article_title},d),c.map(function(e,t){return s.default.createElement("p",{key:t},"     ",e," ")})):null):null,o?s.default.createElement("div",{className:p.default.option},s.default.createElement(v.view,null)):null,l?s.default.createElement("div",null,s.default.createElement("div",{className:p.default.centerbiaoti},u),s.default.createElement(y.view,{className:p.default.rightPane,loader:this.loadWriteContents})):null)))}}]),t}(s.default.PureComponent);t.default=(0,C.default)([(0,x.default)({logined:{satisfy:function(e){return!0===e},block:function(){var e=this.props,t=e.openWindow,n=e.history,a=e.closeMask,o=e.openMask;t(h.default,{width:"380px",height:"300px",position:{top:"calc( 50% - 190px)",left:"calc( 50% - 150px)"},onCancel:function(){return n.goBack()||a()},onSuccess:a}),o()}}}),E.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,buttonTexts:e.ButtonExpand.content,loadButtonContentsState:e.ButtonExpand.loadState,choice:e.ButtonExpand.choice,mainContent:e.WriteContent.content,name:e.WriteContent.name,example_article:e.WriteContent.example_article,loadWriteContentsState:e.WriteContent.loadState,loadWriteKnowledgeState:e.WriteKnowledge.loadState,showContent:e.ButtonExpand.showContent}},function(e){return(0,a.default)({},(0,c.bindActionCreators)(m.actions,e),(0,c.bindActionCreators)(g.actions,e),(0,c.bindActionCreators)(y.actions,e),(0,c.bindActionCreators)(b.actions,e))})],D)},727:function(e,t,n){var a=n(728);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};n(13)(a,o);a.locals&&(e.exports=a.locals)},728:function(e,t,n){(t=e.exports=n(12)(!1)).push([e.i,"._1pDfwxkGN-n9t4CM5sg1oS {\n  display: flex;\n  height: 7%;\n  width: 100%;\n  background-color: #5379c6;\n  color: white;\n  justify-content: center;\n  font-size: 25px;\n  align-items: center;\n  font-family: Arvo;\n}\n._3dU7L3onwjdiE6B8m5eRVS {\n  position: absolute;\n  left: 5%;\n  font-size: 25px;\n}\n._10iyVWyu_9sUauLD-vYmsu {\n  width: 100%;\n  top: 7%;\n  height: 93%;\n  display: flex;\n  flex-direction: row;\n}\n._10iyVWyu_9sUauLD-vYmsu .oq-kGxB9yvMebbVwP7sha {\n  width: 8%;\n  border-right: 2px dashed black;\n}\n._10iyVWyu_9sUauLD-vYmsu .ZWCpS90RwA4IEhMy3XBhv {\n  width: 92%;\n  margin-left: 1%;\n  margin-right: 1%;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: row;\n}\n._10iyVWyu_9sUauLD-vYmsu .ZWCpS90RwA4IEhMy3XBhv ._1Kw1v5bcnLuI8rSeZrcI-J {\n  width: 70%;\n  margin-right: 1%;\n  border-right: 2px dashed black;\n  overflow-y: scroll;\n}\n._10iyVWyu_9sUauLD-vYmsu .ZWCpS90RwA4IEhMy3XBhv ._15OHdYLuA_iXM6yj3XvVbM {\n  left: 70%;\n  width: 30%;\n  overflow-y: scroll;\n}\n.jBRWmUmAXq6MDpFBOOFpE,\n._13hUc58ZhLymgQVBT8lr1d,\n._1Fv8IF67VE-zTEpu_ovZXC,\n._2prvVbtbNuXue3dhIU-6xt {\n  width: 8%;\n  position: absolute;\n}\n.jBRWmUmAXq6MDpFBOOFpE {\n  position: absolute;\n  top: 7%;\n}\n._13hUc58ZhLymgQVBT8lr1d {\n  position: absolute;\n  top: 37%;\n}\n._1Fv8IF67VE-zTEpu_ovZXC {\n  position: absolute;\n  top: 67%;\n}\n._2prvVbtbNuXue3dhIU-6xt {\n  position: absolute;\n  bottom: 0%;\n}\n._3yiqITKqh61N3dHsDQItyi,\n._3pOJujDrmVTLVKSJaKZW-z,\n.BNcazQGzcbt9wzguB3xXx,\n._38HLVAseqSq0KftBJMAqKn,\n._2EVdG5g3a4eBE0yggNv-w_,\n._35FOcX5jhB6jhTnOALeZIW {\n  z-index: 1;\n}\n._3yiqITKqh61N3dHsDQItyi,\n._3pOJujDrmVTLVKSJaKZW-z {\n  position: absolute;\n  width: 100%;\n  height: 50%;\n}\n._3pOJujDrmVTLVKSJaKZW-z {\n  position: absolute;\n  top: 50%;\n}\n.BNcazQGzcbt9wzguB3xXx {\n  position: absolute;\n  left: 8%;\n  top: 7%;\n  width: 8%;\n  height: 9%;\n}\n._38HLVAseqSq0KftBJMAqKn {\n  position: absolute;\n  left: 16%;\n  top: 7%;\n}\n._2EVdG5g3a4eBE0yggNv-w_ {\n  position: absolute;\n  left: 8%;\n  top: 7%;\n}\n._35FOcX5jhB6jhTnOALeZIW {\n  position: absolute;\n  left: 8%;\n  top: 50%;\n}\n._1Kw1v5bcnLuI8rSeZrcI-J {\n  font-size: 20px;\n  font-weight: 800;\n}\n._1SF2F8Vmuhg7yQadA01Md7 {\n  text-align: center;\n  font-size: 25px;\n  color: blue;\n}\n._23bc6zktxEuGE-mJEDFIUB {\n  text-align: center;\n  font-size: 30px;\n}\n._2-OGbdDEHuiNrhE9Fo_Uxe {\n  position: fixed;\n  z-index: 10;\n  font-size: 18px;\n  overflow-y: scroll;\n  width: 26%;\n  right: 1%;\n  top: 20%;\n  bottom: 10%;\n  border: solid 1px;\n  border-radius: 3%;\n  background-color: white;\n}\n._3OT7hrXsDNvV0DmpaTbgq2 {\n  font-size: 20px;\n  color: red;\n  text-align: center;\n}\n",""]),t.locals={HUD:"_1pDfwxkGN-n9t4CM5sg1oS",HUDtitle:"_3dU7L3onwjdiE6B8m5eRVS",wrapper:"_10iyVWyu_9sUauLD-vYmsu",leftPane:"oq-kGxB9yvMebbVwP7sha",rightPane:"ZWCpS90RwA4IEhMy3XBhv",title:"_1Kw1v5bcnLuI8rSeZrcI-J",option:"_15OHdYLuA_iXM6yj3XvVbM",button1:"jBRWmUmAXq6MDpFBOOFpE",button2:"_13hUc58ZhLymgQVBT8lr1d",button3:"_1Fv8IF67VE-zTEpu_ovZXC",button4:"_2prvVbtbNuXue3dhIU-6xt",buttonjiqiao1:"_3yiqITKqh61N3dHsDQItyi",buttonjiqiao2:"_3pOJujDrmVTLVKSJaKZW-z",jiqiao:"BNcazQGzcbt9wzguB3xXx",zhaocuo:"_38HLVAseqSq0KftBJMAqKn",gonggu:"_2EVdG5g3a4eBE0yggNv-w_",zhenti:"_35FOcX5jhB6jhTnOALeZIW",centerbiaoti:"_1SF2F8Vmuhg7yQadA01Md7",egArticleText:"_23bc6zktxEuGE-mJEDFIUB",egArticle:"_2-OGbdDEHuiNrhE9Fo_Uxe",article_title:"_3OT7hrXsDNvV0DmpaTbgq2"}},729:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=t.actions=t.view=void 0;var a=i(n(730)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(690)),l=i(n(735));function i(e){return e&&e.__esModule?e:{default:e}}t.view=a.default,t.actions=o,t.reducer=l.default},730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(n(10)),o=f(n(1)),l=f(n(9)),i=f(n(2)),r=f(n(3)),u=f(n(0)),s=(n(17),n(19)),d=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(690)),f(n(54)),f(n(732))),c=(f(n(276)),f(n(733)));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,o.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.left_options=["A 概念混淆","B 条件缺失","C 推断不出","D 以偏概全","E 非黑即白","F 因果无关","G 目的达不到"],n.right_options=["K 论据不成立","L 条件不必要","M 类比不当","N 不当假设","O 自相矛盾","P 存在他因","Q 措施不可行"],n.state={lock:!1,exampleShow:!1,analysisShow:!1,answerShow:!1},n}return(0,r.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.name,a=t.example_article,o=t.article_analysis,l=[],i=[];if(this.state.lock)for(var r=0;r<7;r++){(0,d.default)(o).map(function(e){e<7?l[e]=c.default.right_Option:i[e-7]=c.default.right_Option})}return u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:c.default.leftOption},this.left_options.map(function(t,n){return u.default.createElement("div",{key:n,style:{background:"red"}},u.default.createElement("input",{className:c.default.checkbox,type:"checkbox",readOnly:e.state.lock?"readonly":""}),u.default.createElement("label",{className:l[n]}," ",t," "),u.default.createElement("br",null))})),u.default.createElement("div",{className:c.default.rightOption},this.right_options.map(function(e,t){return u.default.createElement("div",{key:t},u.default.createElement("input",{className:c.default.checkbox,type:"checkbox"}),u.default.createElement("label",{className:i[t]}," ",e," "),u.default.createElement("br",null))})),u.default.createElement("div",{className:c.default.commit},u.default.createElement("label",{onClick:function(){return e.setState({lock:!0})}}," 确认提交 "),"   ",u.default.createElement("label",{onClick:function(){return e.setState({analysisShow:!e.state.analysisShow})}}," 答案解析 "),"   ",u.default.createElement("label",{onClick:function(){return e.setState({exampleShow:!e.state.exampleShow})}}," 参考范文 ")),this.state.exampleShow?u.default.createElement("div",{className:c.default.egArticle},u.default.createElement("p",{className:c.default.article_title},n),a.map(function(e,t){return u.default.createElement("p",{key:t},"     ",e," ")})):null,this.state.analysisShow?u.default.createElement("div",{className:c.default.egArticle},o.map(function(e,t){return u.default.createElement("div",{key:t},u.default.createElement("p",{className:c.default.type},"     ",e.error_type," "),u.default.createElement("p",null,"     ",e.error_analysis," "))})):null)}}]),t}(u.default.PureComponent);t.default=(0,s.connect)(function(e){return{example_article:e.WriteContent.example_article,article_analysis:e.PortTest.content,choice:e.ButtonExpand.choice,name:e.WriteContent.name}})(p)},731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.__ASYNC_SUBMIT_QUESTIONS={pending:"MultOptionQuestons/__SUBMIT_QUESTIONS_PENDING",resolved:"MultOptionQuestons/__SUBMIT_QUESTIONS_RESOVLED",rejected:"MultOptionQuestons/__SUBMIT_QUESTIONS_REJECTED"}},732:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=["概念混淆","条件缺失","推断不出","以偏概全","非黑即白","因果无关","目的达不到","论据不成立","条件不必要","类比不当","不当假设","自相矛盾","存在他因","措施不可行"],n=[],a=[];e.map(function(e){t.indexOf(e.error_type)>-1&&n.push(e.error_type)});for(var o=0;o<n.length;o++)"概念混淆"==n[o]?a[o]=0:"条件缺失"==n[o]?a[o]=1:"推断不出"==n[o]?a[o]=2:"以偏概全"==n[o]?a[o]=3:"非黑即白"==n[o]?a[o]=4:"因果无关"==n[o]?a[o]=5:"目的达不到"==n[o]?a[o]=6:"论据不成立"==n[o]?a[o]=7:"条件不必要"==n[o]?a[o]=8:"类比不当"==n[o]?a[o]=9:"不当假设"==n[o]?a[o]=10:"自相矛盾"==n[o]?a[o]=11:"存在他因"==n[o]?a[o]=12:"措施不可行"==n[o]&&(a[o]=13);return a}},733:function(e,t,n){var a=n(734);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};n(13)(a,o);a.locals&&(e.exports=a.locals)},734:function(e,t,n){(t=e.exports=n(12)(!1)).push([e.i,".DsC-b4pwwdNCFwdACc8Rw {\n  width: 20px;\n  height: 20px;\n}\n.QSzT-t6KCD6oOSod14Eqf {\n  position: fixed;\n  top: 10%;\n  font-size: 20px;\n  right: 2%;\n  width: 26%;\n}\n._3mH351cBJuaoIU3yomVRc3 {\n  font-size: 20px;\n  position: fixed;\n  top: 10%;\n}\n._2z-2R4lxy_mfTnlqwg-jds {\n  font-size: 20px;\n  position: fixed;\n  top: 10%;\n  right: 1%;\n}\n.gmMgOuVbt87YQrUATZLSo {\n  position: fixed;\n  font-size: 25px;\n  background-color: pink;\n  bottom: 5%;\n}\n._1hsuXgn_n8tN87ZmmCizHy {\n  position: fixed;\n  z-index: 10;\n  font-size: 18px;\n  overflow-y: scroll;\n  width: 26%;\n  right: 1%;\n  top: 10%;\n  bottom: 15%;\n  border: solid 1px;\n  border-radius: 3%;\n  background-color: white;\n}\n.KVqes1k-WJCw1AmvYofTX {\n  font-size: 20px;\n  color: red;\n  text-align: center;\n}\n._3FuI7Tys03vFHB7fvZv2_3 {\n  color: blue;\n}\n._3gZqZ3DcGVwpnQugwJ30d8 {\n  color: red;\n}\n",""]),t.locals={checkbox:"DsC-b4pwwdNCFwdACc8Rw",option_area:"QSzT-t6KCD6oOSod14Eqf",leftOption:"_3mH351cBJuaoIU3yomVRc3",rightOption:"_2z-2R4lxy_mfTnlqwg-jds",commit:"gmMgOuVbt87YQrUATZLSo",egArticle:"_1hsuXgn_n8tN87ZmmCizHy",article_title:"KVqes1k-WJCw1AmvYofTX",type:"_3FuI7Tys03vFHB7fvZv2_3",right_Option:"_3gZqZ3DcGVwpnQugwJ30d8"}},735:function(e,t,n){"use strict"}});