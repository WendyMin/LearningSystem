/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),u=(r=o)&&r.__esModule?r:{default:r};t.default={socket:{},persistentState:{UserManager:{logined:!0,name:!0,password:!0,newTo:!0}},onAppWillMount:function(e,t){},onAppWillClose:function(e,t,n){},onUIErrorShowErrorMessage:!0,UIErrorMessage:u.default.createElement("div",null,"a bug happened"),UIErrorHandler:function(e,t){console.log(e,t)}}},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(259),o=n(257),u=n(260),i=n(269),d=n(94),a=n(147),c=(n(279),n(262)),l=n(143),s=n(151),f=n(148),g=n(264),p=n(263),_=n(256),b=n(265),j=n(267),y=n(146),M=n(150);t.default={SingleOptionQuestions:r.reducer,UserManager:o.reducer,EnglishArticle:u.reducer,SingleSubjectTest:i.reducer,ButtonExpand:d.reducer,WriteContent:a.reducer,WriteKnowledge:c.reducer,PortTest:l.reducer,SubjectSelect:s.reducer,ZhentiPerYearTongji:f.reducer,ZhentiAllYearTongji:g.reducer,PageDesign:p.reducer,LearningTypeSelect:_.reducer,LogicReviewModel:b.reducer,LogicTestTongji:j.reducer,EditText:y.reducer,ViewFinishedText:M.reducer}},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});u(n(1));var r=u(n(152)),o=u(n(461));function u(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)(function(){return n.e(6).then(function(){var e=n(572);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),d=(0,r.default)(function(){return n.e(5).then(function(){var e=n(563);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),a=(0,r.default)(function(){return n.e(4).then(function(){var e=n(571);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),c=(0,r.default)(function(){return Promise.all([n.e(0),n.e(1),n.e(3)]).then(function(){var e=n(568);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),l=(0,r.default)(function(){return n.e(2).then(function(){var e=n(565);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default={"/":{page:o.default},"/learning":{page:a,nested:!0},"/learningsystem":{page:i,nested:!0},"/loginOrSignup":{page:d},"/ui":{page:c},"/404":{page:l},"*":{redirect:"/404"}}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={UserManager:{logined:!0,name:"testdzh",password:"testdzh",newTo:[0,1,0,0]}}},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(284)),o=u(n(283));function u(e){return e&&e.__esModule?e:{default:e}}t.default={middleWares:[r.default,o.default]}},462:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"*":{"*":{entering:{left:"100%"},entered:{left:"0"},exiting:{left:"-100%"},time:800,timingFunction:"ease",toAnimate:"all"},from:{"/notFound":{entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0},timingFunction:"linear",time:800}},to:{"/notFound":{time:0}}},"/":{"/test":{entering:{top:"100%"},entered:{top:"0"},exiting:{left:"100%"}}},"/test":{"/":{entering:{left:"100%"},entered:{left:"0"},exiting:{top:"100%"}}}}}}]);