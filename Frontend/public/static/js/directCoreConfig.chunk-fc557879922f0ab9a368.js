/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),u=(r=o)&&r.__esModule?r:{default:r};t.default={socket:{},persistentState:{UserManager:{logined:!0,name:!0,password:!0,newTo:!0}},onAppWillMount:function(e,t){},onAppWillClose:function(e,t,n){},onUIErrorShowErrorMessage:!0,UIErrorMessage:u.default.createElement("div",null,"a bug happened"),UIErrorHandler:function(e,t){console.log(e,t)}}},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(159),o=n(263),u=n(99),i=n(156),c=n(275),d=n(273),a=n(98),l=n(157),s=(n(285),n(267)),f=n(72),p=n(269),g=n(160),b=n(265),j=n(261),_=n(270),y=n(271),M=n(101),v=n(100),h=n(266);t.default={SubjectFunctionSelect:r.reducer,SingleOptionQuestions:o.reducer,UserManager:u.reducer,EnglishArticle:i.reducer,EnglishReviewPort:c.reducer,SingleSubjectTest:d.reducer,ButtonExpand:a.reducer,WriteContent:l.reducer,WriteKnowledge:s.reducer,PortTest:f.reducer,SubjectSelect:p.reducer,ZhentiPerYearTongji:g.reducer,ZhentiAllYearTongji:b.reducer,LearningTypeSelect:j.reducer,LogicReviewModel:_.reducer,LogicTestTongji:y.reducer,EditText:M.reducer,ViewFinishedText:v.reducer,LogicState:h.reducer}},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});u(n(1));var r=u(n(163)),o=u(n(480));function u(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)(function(){return n.e(4).then(function(){var e=n(590);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),c=(0,r.default)(function(){return n.e(3).then(function(){var e=n(581);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),d=(0,r.default)(function(){return n.e(2).then(function(){var e=n(589);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),a=(0,r.default)(function(){return n.e(1).then(function(){var e=n(588);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),l=(0,r.default)(function(){return Promise.resolve().then(function(){var e=n(192);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),s=(0,r.default)(function(){return n.e(0).then(function(){var e=n(582);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default={"/":{page:o.default},"/learning":{page:a,nested:!0},"/learningsystem":{page:i,nested:!0},"/login":{page:c},"/signup":{page:d},"/ui":{page:l},"/404":{page:s},"*":{redirect:"/404"}}},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={UserManager:{logined:!0,name:"testdzh",password:"testdzh",newTo:[0,1,0,0]}}},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(290)),o=u(n(289));function u(e){return e&&e.__esModule?e:{default:e}}t.default={middleWares:[r.default,o.default]}},481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"*":{"*":{entering:{left:"100%"},entered:{left:"0"},exiting:{left:"-100%"},time:800,timingFunction:"ease"},from:{"/notFound":{entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0},timingFunction:"linear",time:800}},to:{"/notFound":{time:0}}},"/":{"/test":{entering:{top:"100%"},entered:{top:"0"},exiting:{left:"100%"}}},"/test":{"/":{entering:{left:"100%"},entered:{left:"0"},exiting:{top:"100%"}}}}}}]);