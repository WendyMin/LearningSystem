/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,12,13],{512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(n(11)),o=m(n(4)),i=m(n(10)),l=m(n(3)),r=m(n(5)),u=m(n(1)),s=n(18),d=(n(17),n(510),m(n(555))),c=n(234),f=(m(n(509)),m(n(508)),m(n(232))),p=m(n(507));function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){(0,o.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={login_Show:!0,signup_Show:!1},n}return(0,r.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this;return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:d.default.wholePage},u.default.createElement("div",{className:d.default.HUD}),this.state.login_Show?u.default.createElement("div",{className:d.default.login},u.default.createElement(c.view,{loginOrSignup:"login",onSuccess:function(){return e.setState({login_Show:!1})},signup:function(){return e.setState({signup_Show:!0,login_Show:!1})},onCancel:function(){return history.back()}})):null,this.state.signup_Show?u.default.createElement("div",{className:d.default.login},u.default.createElement(c.view,{loginOrSignup:"signup",onCancel:function(){return e.setState({signup_Show:!1,login_Show:!0})}})):null))}}]),t}(u.default.PureComponent);t.default=(0,p.default)([f.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name}},function(e){return{}})],h)},523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(140)),o=i(n(534));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)(o.default,{enter:1e3,exit:1e3})},524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(140)),o=i(n(530));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)(o.default,{enter:1e3,exit:1e3})},525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(140)),o=i(n(532));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)(o.default,{enter:1e3,exit:1e3})},526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(2)),o=r(n(1)),i=r(n(511)),l=n(234);function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)(function(e){return o.default.createElement(l.view,(0,a.default)({},e,{onCancel:function(){e.onCancel(),e.closeWindow()},onSuccess:function(){e.onSuccess(),e.closeWindow()}}))})},527:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(11)),o=c(n(4)),i=c(n(10)),l=c(n(3)),r=c(n(5)),u=c(n(1)),s=c(n(538)),d=c(n(70));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.children,a=t.loading,o=t.wasLoaded,i=t.lastFailed,l=t.reloader,r=t.info,c=t.center;return u.default.createElement(u.default.Fragment,null,a?(e=Math.random())<.3?u.default.createElement("div",{className:c&&s.default.makeLoadingCenter},u.default.createElement("div",{className:s.default.spinner1},u.default.createElement("div",{className:s.default.bounce1}),u.default.createElement("div",{className:s.default.bounce2}),u.default.createElement("div",{className:s.default.bounce3}))):e<.7?u.default.createElement("div",{className:c&&s.default.makeLoadingCenter},u.default.createElement("div",{className:s.default.spinner2},u.default.createElement("div",{className:s.default.doubleBounce1}),u.default.createElement("div",{className:s.default.doubleBounce2}))):u.default.createElement("div",{className:c&&s.default.makeLoadingCenter},u.default.createElement("div",{className:s.default.spinner3},u.default.createElement("div",{className:s.default.rect1}),u.default.createElement("div",{className:s.default.rect2}),u.default.createElement("div",{className:s.default.rect3}),u.default.createElement("div",{className:s.default.rect4}),u.default.createElement("div",{className:s.default.rect5}))):i?u.default.createElement("div",{onClick:l,className:s.default.bigNote+" "+c&&s.default.makeLoadingCenter},u.default.createElement(d.default,{info:o?"Latest request failed, click here to reload":"Request failed, please check your network state.Click here to reload"})):u.default.createElement(d.default,{info:r}),o?n:null)}}]),t}(u.default.PureComponent);t.default=f},528:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(140)),o=i(n(536));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)(o.default,{enter:1e3,exit:1e3})},529:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2cML4IoWiExEkZO0sTfEfZ,.tyAWxaUchede0CHVd45ur{top:100%;position:absolute;transition:all 1s ease}._3w4pjqt52cM4L6hLqXYIr6,._17XJROM6-Ux9b9XSgW-H8F{position:absolute;top:0}._1aiffLNrQiECx_Nr3C75FX{position:absolute;transition:all 1s ease;bottom:0}._3xXwzEo4V_1mZvoF8iIeXH{position:absolute;bottom:100%}",""]),t.locals={appear:"tyAWxaUchede0CHVd45ur",enter:"_2cML4IoWiExEkZO0sTfEfZ",appearActive:"_3w4pjqt52cM4L6hLqXYIr6",enterActive:"_17XJROM6-Ux9b9XSgW-H8F",exit:"_1aiffLNrQiECx_Nr3C75FX",exitActive:"_3xXwzEo4V_1mZvoF8iIeXH"}},530:function(e,t,n){var a=n(529);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)},531:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._1MB2CPIXnGs299kvhBK9he,._4nHhH23J6HHgL3WQn2Cmc{margin-left:100%;transition:all 1s ease}._3YtvA49RRGLswoNfhyVtmJ,.nHHIBTPjx84LGjREEdO6z{margin-left:0}._2nhxmm_wA4M6pU4bIMEWQ3{transition:all 1s ease;margin-left:0}._3rH-R-o3GPvP6_spojv6WQ{margin-left:-100%}",""]),t.locals={appear:"_1MB2CPIXnGs299kvhBK9he",enter:"_4nHhH23J6HHgL3WQn2Cmc",appearActive:"nHHIBTPjx84LGjREEdO6z",enterActive:"_3YtvA49RRGLswoNfhyVtmJ",exit:"_2nhxmm_wA4M6pU4bIMEWQ3",exitActive:"_3rH-R-o3GPvP6_spojv6WQ"}},532:function(e,t,n){var a=n(531);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)},533:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2FhIUrruATA8itEcYzssWZ,._2LRUnY4nDm_iOtCCv48qD1{margin-left:-100%;transition:all 1s ease}._3qAk4proA4V6T4M7vVzel-,._23llk2LtnhfRpmAM7MTF69{margin-left:0}._2Dx8h_HACeSegArVmbMCNe{transition:all 1s ease;margin-left:0}._3nCXf4vTE55VjM0ptCCTtq{margin-left:100%}",""]),t.locals={appear:"_2LRUnY4nDm_iOtCCv48qD1",enter:"_2FhIUrruATA8itEcYzssWZ",appearActive:"_3qAk4proA4V6T4M7vVzel-",enterActive:"_23llk2LtnhfRpmAM7MTF69",exit:"_2Dx8h_HACeSegArVmbMCNe",exitActive:"_3nCXf4vTE55VjM0ptCCTtq"}},534:function(e,t,n){var a=n(533);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)},535:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._1cF_ThJjqPqZVuf2aeL-lH,._14-JVUikn1uujhjbLnIpce{position:absolute;bottom:100%;transition:all 1s ease}._1o2kBpQkFx99fadlNqzkxY,._33zRnWg_CpUyPAJAN5SFpf{position:absolute;bottom:0}._1aKoUKfFVSrPNinYsUukwT{position:absolute;transition:all 1s ease;top:0}._1Pb_20tVQM_qliDxsi_bDj{position:absolute;top:100%}",""]),t.locals={appear:"_1cF_ThJjqPqZVuf2aeL-lH",enter:"_14-JVUikn1uujhjbLnIpce",appearActive:"_33zRnWg_CpUyPAJAN5SFpf",enterActive:"_1o2kBpQkFx99fadlNqzkxY",exit:"_1aKoUKfFVSrPNinYsUukwT",exitActive:"_1Pb_20tVQM_qliDxsi_bDj"}},536:function(e,t,n){var a=n(535);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)},537:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2l8ISGcXEQrzJAo1dzjDR2{width:100%;text-align:center}._2l8ISGcXEQrzJAo1dzjDR2>div{width:30px;height:30px;background-color:#375997;border-radius:100%;display:inline-block;-webkit-animation:GSTh3p9Dm_BI6Aa-jfvsm 1.4s infinite ease-in-out;animation:GSTh3p9Dm_BI6Aa-jfvsm 1.4s infinite ease-in-out;animation-fill-mode:both}._2l8ISGcXEQrzJAo1dzjDR2 ._1sApYLXa_7rMcsHYAijRqA{animation-delay:-.32s}._2l8ISGcXEQrzJAo1dzjDR2 ._38ah3QPYUqAiB6B1vTim5W{animation-delay:-.16s}@keyframes GSTh3p9Dm_BI6Aa-jfvsm{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}._2lQxoLYxvxI_ru1LFLaUmU{width:60px;height:60px;position:relative;margin:100px auto}._1AgOBFiNeL4MewWj_CVzRp,.xaCLjW2KCMJOQVL3IB_Xx{width:100%;height:100%;border-radius:50%;background-color:#67cf22;opacity:.6;position:absolute;top:0;left:0;animation:-xFJqfslZ6fQjPpxsMWkg 2s infinite ease-in-out}.xaCLjW2KCMJOQVL3IB_Xx{animation-delay:-1s}@keyframes -xFJqfslZ6fQjPpxsMWkg{0%,to{transform:scale(0)}50%{transform:scale(1)}}._3glBlbjm56WjIEG36Vuw7o{margin:100px auto;width:60px;height:60px;text-align:center;font-size:10px}._3glBlbjm56WjIEG36Vuw7o>div{background-color:#2f3641;height:100%;width:6px;display:inline-block;margin-left:2px;margin-right:2px;animation:_24VUdXNdGqcukAY9GeCWFd 1.2s infinite ease-in-out}._3glBlbjm56WjIEG36Vuw7o ._13CqLTg4z6vTLXsQm1idxK{animation-delay:-1.1s}._3glBlbjm56WjIEG36Vuw7o ._17wpNgpYcNCKoD17gDRAo3{animation-delay:-1s}._3glBlbjm56WjIEG36Vuw7o .sn1DJ3CoK_HqAfm3CSzgX{animation-delay:-.9s}._3glBlbjm56WjIEG36Vuw7o ._1x_ahiaUGbc9YjGWu5dOUP{animation-delay:-.8s}@keyframes _24VUdXNdGqcukAY9GeCWFd{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.oaWd_Q2OzHNmpOi7IxDeP{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}._3T6YZvJXTSBYIV-mI2HeFu{font-size:20px}",""]),t.locals={spinner1:"_2l8ISGcXEQrzJAo1dzjDR2",bouncedelay:"GSTh3p9Dm_BI6Aa-jfvsm",bounce1:"_1sApYLXa_7rMcsHYAijRqA",bounce2:"_38ah3QPYUqAiB6B1vTim5W",spinner2:"_2lQxoLYxvxI_ru1LFLaUmU",doubleBounce1:"_1AgOBFiNeL4MewWj_CVzRp",doubleBounce2:"xaCLjW2KCMJOQVL3IB_Xx",bounce:"-xFJqfslZ6fQjPpxsMWkg",spinner3:"_3glBlbjm56WjIEG36Vuw7o",stretchdelay:"_24VUdXNdGqcukAY9GeCWFd",rect2:"_13CqLTg4z6vTLXsQm1idxK",rect3:"_17wpNgpYcNCKoD17gDRAo3",rect4:"sn1DJ3CoK_HqAfm3CSzgX",rect5:"_1x_ahiaUGbc9YjGWu5dOUP",makeLoadingCenter:"oaWd_Q2OzHNmpOi7IxDeP",bigNote:"_3T6YZvJXTSBYIV-mI2HeFu"}},538:function(e,t,n){var a=n(537);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)},550:function(e,t,n){(e.exports=n(13)(!1)).push([e.i,"",""])},551:function(e,t,n){var a=n(550);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)},552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(n(11)),o=p(n(4)),i=p(n(10)),l=p(n(3)),r=p(n(5)),u=p(n(1)),s=n(18),d=n(514),c=p(n(243)),f=p(n(70));p(n(551));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.wordCount,n=e.choosedWordCount,a=e.allWordCount;return u.default.createElement("div",{className:"container"},u.default.createElement(f.default,{info:"Unknown words:"+n+" of "+t+" = "+100*(n/t).toFixed(3)+"%;Total Num: "+a+" "}))}}]),t}(u.default.PureComponent),h=function(e){for(var t=[],n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)for(var o=0;o<e[n][a].length;o++)t.push(e[n][a][o]);return t},_=(0,d.createSelector)(h,function(e){for(var t=new c.default,n=0;n<e.length;n++)t.insert(e[n]);return t}),v=(0,d.createSelector)(_,function(e){return e.root.count});t.default=(0,s.connect)(function(e){return{allWordCount:h(e.EnglishArticle.paragraphedWords).length,wordCount:v(e.EnglishArticle.paragraphedWords),choosedWordCount:e.EnglishArticle.choosedWords.root.count}})(m)},553:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=void 0;var a,o=n(552),i=(a=o)&&a.__esModule?a:{default:a};t.view=i.default},554:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,'._1PtuFANRoVvv1QuQTGoDU_{width:100%;height:100%;background:url("/static/images/background.jpg");background-size:100% 100%}.LA_q9Bf-UddiX1NiAHpN2{display:flex;height:10%;width:100%;background-color:#5379c6;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._1ehdLV-Tk0q0WPs8l3DKjj{position:absolute;width:40%;height:70%;top:20%;left:30%;background:#fff;border-radius:8px}.MOOYRcfupjuz-M2Ut1vsh{position:absolute;font-size:30px;right:8%}._3J1nffvBa1HZozvtLAsGed{position:absolute;top:20%;right:10%;font-size:25px;text-align:center}._2qv5SszlSK9inl-YvmojL8{position:absolute;top:30%;left:10%;width:40%;font-size:20px}._2oKrptfA4P8UZI0-uNIOZp{font-size:25px;font-weight:50px}._2deZ1FPWIkRppqKuNdLMdQ{font-size:20px}.puKS6jbdgzmyoLv9pNj2P{font-size:90px}._1u5TUKUa43ESPYLHFu3qe2{font-size:25px}.ePgF_vtJFl4GH9Pfqdwqz{font-size:25px;color:#5379c6}',""]),t.locals={wholePage:"_1PtuFANRoVvv1QuQTGoDU_",HUD:"LA_q9Bf-UddiX1NiAHpN2",login:"_1ehdLV-Tk0q0WPs8l3DKjj",loginOrSignup:"MOOYRcfupjuz-M2Ut1vsh",subjectText:"_3J1nffvBa1HZozvtLAsGed",subjectIntroduction:"_2qv5SszlSK9inl-YvmojL8",title:"_2oKrptfA4P8UZI0-uNIOZp",brifIntroduction:"_2deZ1FPWIkRppqKuNdLMdQ",selcetedStyle:"puKS6jbdgzmyoLv9pNj2P",normalText:"_1u5TUKUa43ESPYLHFu3qe2",chosedText:"ePgF_vtJFl4GH9Pfqdwqz"}},555:function(e,t,n){var a=n(554);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)},558:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=E(n(2)),o=E(n(11)),i=E(n(4)),l=E(n(10)),r=E(n(3)),u=E(n(5)),s=E(n(1)),d=n(18),c=n(17),f=E(n(620)),p=n(245),m=n(239),h=E(n(70)),_=E(n(30)),v=E(n(618)),g=E(n(615)),b=E(n(232)),x=E(n(507));function E(e){return e&&e.__esModule?e:{default:e}}var C=function(e){function t(e){(0,i.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.getReviewChapterName=function(){n.props.getLogicReviewChapterName({url:"/api/logicGetReviewChapterName",body:{username:n.props.username}})},n.getReviewTongji=function(){n.setState({tongjiShow:!0,typeSelect:!1}),n.props.loadZhentiTongji({url:"/api/logicReviewTimeTongji",body:{username:n.props.username}})},n.requestChapterContent=function(e){n.setState({reviewContent:!0,tongjiShow:!1})},n.state={reviewContent:!1,tongjiShow:!1},n}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.getReviewChapterName()}},{key:"render",value:function(){var e=this,t=this.props,n=t.whetherHaveFinishedChapter,a=t.ordinaryChapterName,o=t.importantChapterName,i=t.setChapter,l=t.choice,r=t.data;return s.default.createElement(s.default.Fragment,null,this.state.reviewContent?s.default.createElement(g.default,null):this.state.tongjiShow?s.default.createElement(v.default,{data:r}):0==n?s.default.createElement(h.default,{info:"您目前还没有学习完成的章节"}):s.default.createElement("div",null,s.default.createElement("div",{className:f.default.zhongdianReview},s.default.createElement("h4",{className:f.default.biaoti},"重点复习"),0==o.length?s.default.createElement(h.default,{info:"您目前没有需要重点复习的章节"}):s.default.createElement("div",null,s.default.createElement("strong",{align:"center"},s.default.createElement("div",{style:{color:"red"}},"请点击选择要复习的章节")),o.map(function(t,n){return s.default.createElement("div",{key:n},s.default.createElement("br",null),s.default.createElement("li",{style:t==l?{color:"blue"}:null,onClick:function(){i(t),e.requestChapterContent(t)}},t))}))),s.default.createElement("div",{className:f.default.putongReview},s.default.createElement("h4",{className:f.default.biaoti},"一般复习"),0==a.length?s.default.createElement(h.default,{info:"您目前没有需要一般复习的章节"}):s.default.createElement("div",null,s.default.createElement("strong",{align:"center"},s.default.createElement("div",{style:{color:"red"}},"请点击选择要复习的章节")),a.map(function(t,n){return s.default.createElement("div",{key:n},s.default.createElement("br",null),s.default.createElement("li",{style:t==l?{color:"blue"}:null,onClick:function(){i(t),e.requestChapterContent(t)}},t))}))),s.default.createElement(_.default,{className:f.default.chakanTongjiButton,text:"点击查看复习数据统计",onClick:this.getReviewTongji})))}}]),t}(s.default.PureComponent);t.default=(0,x.default)([b.default,(0,d.connect)(function(e){return{username:e.UserManager.name,whetherHaveFinishedChapter:e.LogicReviewModel.whetherHaveFinishedChapter,ordinaryChapterName:e.LogicReviewModel.ordinaryChapterName,importantChapterName:e.LogicReviewModel.importantChapterName,choice:e.LogicReviewModel.choice,data:e.ZhentiPerYearTongji.tongji}},function(e){return(0,a.default)({},(0,c.bindActionCreators)(p.actions,e),(0,c.bindActionCreators)(m.actions,e))})],C)},561:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(n(2)),o=y(n(11)),i=y(n(4)),l=y(n(10)),r=y(n(3)),u=y(n(5)),s=y(n(1)),d=n(18),c=n(17),f=n(510),p=y(n(638)),m=y(n(30)),h=y(n(70)),_=(y(n(142)),y(n(636))),v=y(n(527)),g=(y(n(523)),y(n(525))),b=(y(n(524)),y(n(528)),y(n(526)),n(249)),x=(y(n(141)),y(n(248)),y(n(635))),E=(y(n(509)),y(n(508)),y(n(232))),C=y(n(507));function y(e){return e&&e.__esModule?e:{default:e}}var w=function(e){function t(e){(0,i.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadQuestions({url:"/api/logicTest"})},n.submitQuestions=function(){var e=n.props,t=e.username,a=e.questions,o=e.submitQuestionState,i=e.submiting;o.resolved;if(!i){var l="",r="",u="",s="",d="",c="",f="",p="",m="",h="",_="",v="",g="",b="",E="",C=(0,x.default)(a);l+=C[0],r+=C[1],u+=C[2],s+=C[3],d+=C[4],c+=C[5],f+=C[6],p+=C[7],m+=C[8],h+=C[9],_+=C[10],v+=C[11],g+=C[12],b+=C[13],E+=C[14],n.props.submitQuestions({url:"/api/logicTestRightRate",body:{username:t,right_rate0:l,right_rate1:r,right_rate2:u,right_rate3:s,right_rate4:d,right_rate5:c,right_rate6:f,right_rate7:p,right_rate8:m,right_rate9:h,right_rate10:_,right_rate11:v,right_rate12:g,right_rate13:b,right_rate14:E}})}},n}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.loadQuestions()}},{key:"componentWillReceiveProps",value:function(e){this.props.testend!==e.testend&&this.submitQuestions()}},{key:"render",value:function(){var e=this.props,t=(e.submitQuestionState,e.loadQuestionState),n=e.ined,a=e.questions,o=(e.next,e.forceNext),i=e.testend;e.username;return s.default.createElement(s.default.Fragment,null,s.default.createElement(f.Prompt,{when:!0!==i,message:"you need to do it again, are you sure to quit?"}),s.default.createElement("div",{className:p.default.wrapper},i?s.default.createElement("div",null,s.default.createElement(h.default,{info:"您的各类题型正确率统计如下："}),s.default.createElement("div",{className:p.default.chart},s.default.createElement(_.default,{chartTitle:["逻辑语言","命题逻辑","词项逻辑","逻辑应用","演绎推理","归纳逻辑","假设","支持","削弱","评价","解释","推论","比较","描述","综合"],chartData:(0,x.default)(a)}))):s.default.createElement("div",null,s.default.createElement("div",{className:p.default.question},s.default.createElement(v.default,{loading:t.pending,wasLoaded:t.resolved,lastFailed:t.lastFailed,reloader:this.loadQuestions,center:!0},s.default.createElement(g.default,{play:n},s.default.createElement(b.view,{submiter:this.submitQuestions,loader:this.loadQuestions}))),s.default.createElement(m.default,{className:p.default.nextQuestion,text:"下一题",onClick:o})))))}}]),t}(s.default.PureComponent);t.default=(0,C.default)([E.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleSubjectTest.content,loadQuestionState:e.SingleSubjectTest.loadState,submitQuestionState:e.SingleSubjectTest.submitState,lock:e.SingleSubjectTest.lock,show:e.SingleSubjectTest.show,testend:e.SingleSubjectTest.testendState}},function(e){return(0,a.default)({},(0,c.bindActionCreators)(b.actions,e))})],w)},613:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._3p7P6d8A6z9KZl2od_YtCV{font-size:25px;color:red;text-align:center}._2TrSUabFhystuPzGV_1T-C{padding-left:2%;padding-right:0;left:52%;width:50%}._1qenPN6T-v7-lEqYSH-9SQ,._2TrSUabFhystuPzGV_1T-C{position:absolute;overflow-y:scroll;top:7%;height:93%;font-size:20px}._1qenPN6T-v7-lEqYSH-9SQ{padding-right:1%;left:3%;width:48%;border-right:2px dashed #000}._2yH1Aov_WV9m4K4W8xvkvm{font-family:cursive;font-size:30px;color:blue;text-align:center}.z65STGS1mNpTp-0lxRVs8{font-size:22px;color:orange;line-height:45px}._2AxOfPghVFqKgeDnkanqwD{position:absolute;right:40%}",""]),t.locals={dalei:"_3p7P6d8A6z9KZl2od_YtCV",cuoti:"_2TrSUabFhystuPzGV_1T-C",zhishidian:"_1qenPN6T-v7-lEqYSH-9SQ",fuxibiaoti:"_2yH1Aov_WV9m4K4W8xvkvm",logic_knowledge_title:"z65STGS1mNpTp-0lxRVs8",submitButton:"_2AxOfPghVFqKgeDnkanqwD"}},614:function(e,t,n){var a=n(613);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)},615:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=b(n(2)),o=b(n(11)),i=b(n(4)),l=b(n(10)),r=b(n(3)),u=b(n(5)),s=b(n(1)),d=n(18),c=n(17),f=b(n(614)),p=(b(n(527)),b(n(523)),n(233)),m=n(236),h=b(n(237)),_=b(n(30)),v=(b(n(509)),b(n(508)),b(n(232))),g=b(n(507));b(n(526));function b(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,i.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.requestChapterContent=function(){n.props.loadPortContent({url:"/api/logicGetReviewZhishidian",body:{chapter_name:n.props.chapter_name}}),n.props.loadQuestions({url:"/api/logicGetReviewCuoti",body:{username:n.props.username,chapter_name:n.props.chapter_name},parser:function(e){for(var t=[],n=0;n<e.timu.length;n++)e.timu[n].map(function(e){return t.push(e)});return t.map(function(e){return{questionId:e.id,options:[e.op_one,e.op_two,e.op_three,e.op_four,e.op_five],rightKey:changeAlpToNum(e.answer),question:e.question,analysis:e.analysis}})}})},n.submitQuestions=function(){var e=n.props,t=e.questions,a=e.submitQuestionState,o=e.submiting,i=e.lockAndShow;a.resolved;if(!o){for(var l="",r="",u=0;u<t.length;u++)l+=t[u].questionId+"*",t[u].choosed!==t[u].rightKey&&(r+="1*"),t[u].choosed==t[u].rightKey&&(r+="0*");n.props.submitQuestions({url:"/api/logicRecordReviewCuoti",body:{username:n.props.username,chapter_name:n.props.chapter_name,question_id:l,RightOrWrong:r}});for(u=0;u<t.length;u++)i(t[u].questionId)}},n}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.requestChapterContent()}},{key:"render",value:function(){var e=this.props,t=(e.submitQuestionState,e.loadQuestionState,e.loadContent,e.loadContentState,e.total_content),n=(e.ined,e.setLearningType,e.chapter_name);return s.default.createElement(s.default.Fragment,null,s.default.createElement("h4",{className:f.default.dalei,style:{color:"red"}}," ",n," "),s.default.createElement("div",{className:f.default.zhishidian},s.default.createElement("h4",{className:f.default.fuxibiaoti},"知识点精要"),void 0==t.content?null:s.default.createElement(h.default,{list:t.content}),void 0==t.shunxu?null:s.default.createElement("div",null,t.shunxu.map(function(e,n){return s.default.createElement("div",{key:n},s.default.createElement("div",{className:f.default.logic_knowledge_title}," ",e," "),void 0==t.xiaolei?null:s.default.createElement(h.default,{list:t.xiaolei[n]}))}))),s.default.createElement("div",{className:f.default.cuoti},s.default.createElement("h4",{className:f.default.fuxibiaoti},"错题集锦"),s.default.createElement(m.view,{loader:this.requestChapterContent,subject:"logic_review"}),s.default.createElement(_.default,{className:f.default.submitButton,text:"确认提交",onClick:this.submitQuestions})))}}]),t}(s.default.PureComponent);t.default=(0,g.default)([v.default,(0,d.connect)(function(e){return{username:e.UserManager.name,chapter_name:e.LogicReviewModel.choice,total_content:e.PortTest.content,questions:e.SingleOptionQuestions.content,submitQuestionState:e.SingleOptionQuestions.submitState}},function(e){return(0,a.default)({},(0,c.bindActionCreators)(p.actions,e),(0,c.bindActionCreators)(m.actions,e))})],x)},616:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._38YO4cp6CLiHjT-aGW7Ynz{padding-left:5%;font-size:20px}._2ePan3ARTEcLAasaEFQtW7{font-size:25px;text-align:center}",""]),t.locals={wholeErrorTongji:"_38YO4cp6CLiHjT-aGW7Ynz",note:"_2ePan3ARTEcLAasaEFQtW7"}},617:function(e,t,n){var a=n(616);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)},618:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(11)),o=d(n(4)),i=d(n(10)),l=d(n(3)),r=d(n(5)),u=d(n(1)),s=d(n(617));d(n(70)),d(n(30));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.data;return console.log(this.props),u.default.createElement("div",{className:s.default.wholeErrorTongji},u.default.createElement("div",{className:s.default.note},"您复习过的章节及其复习次数统计如下："),u.default.createElement("br",null),u.default.createElement("table",{border:"1",align:"center"},void 0==e.chapter_name?null:u.default.createElement("tr",null,u.default.createElement("th",null,"类别名称"),e.chapter_name.map(function(e,t){return u.default.createElement("th",{key:t}," ",e," ")})),void 0==e.count?null:u.default.createElement("tr",null,u.default.createElement("th",null,"复习次数"),e.count.map(function(e,t){return u.default.createElement("th",{key:t}," ",e," ")}))))}}]),t}(u.default.PureComponent);t.default=c},619:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2-Dq42GqPDu1wEOdS6opZR{position:absolute;top:0;left:50%;width:55%;height:100%;font-size:20px}._1bz4ivIEciVDa1FLm6pgSr{position:absolute;left:5%;width:45%;height:100%;border-right:2px dashed #000;font-size:20px}.F5j6IMIsgXYhoDao0gplf{font-family:cursive;font-size:30px;color:blue;text-align:center}.pgv9ALgqqQQxUCTCS0lz4{position:absolute;bottom:0;left:42%}",""]),t.locals={putongReview:"_2-Dq42GqPDu1wEOdS6opZR",zhongdianReview:"_1bz4ivIEciVDa1FLm6pgSr",biaoti:"F5j6IMIsgXYhoDao0gplf",chakanTongjiButton:"pgv9ALgqqQQxUCTCS0lz4"}},620:function(e,t,n){var a=n(619);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)},635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(45)),o=i(n(141));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){for(var t={0:"luojiyuyan",1:"mingtiluoji",2:"cixiangluoji",3:"luojiyingyong",4:"yanyituili",5:"guinaluoji",6:"jiashe",7:"zhichi",8:"xueruo",9:"pingjia",10:"jieshi",11:"tuilun",12:"bijiao",13:"miaoshu",14:"zonghe"},n=function(e){for(var n in t)if(t[n]==e)return n},i=[],l=(0,a.default)(e).length,r=0;r<l;r++)i.push(0);for(var u in e){var s=n(u);for(var d in e[u])e[u][d].choosed==(0,o.default)(e[u][d].answer)&&("易"==e[u][d].nanyi?i[s]+=.22:"中"==e[u][d].nanyi?i[s]+=.33:"难"==e[u][d].nanyi?i[s]+=.45:i[u][0]+=0)}return i}},636:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(n(11)),o=s(n(4)),i=s(n(10)),l=s(n(3)),r=s(n(5)),u=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.chartTitle,n=e.chartData;return u.default.createElement("table",{border:"1"},u.default.createElement("tr",null,u.default.createElement("th",null," 类型 "),u.default.createElement("th",null," 正确率 ")),n.map(function(e,n){return u.default.createElement("tr",{key:n},u.default.createElement("td",null,t[n]),u.default.createElement("td",null,e))}))}}]),t}(u.default.PureComponent);t.default=d},637:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._28gxYQDEWmrF8NaQMuI1Uq{position:absolute;right:10%;bottom:5%}._3Qy27sUvFRxvimvZQRtCNZ{position:absolute;left:40%}",""]),t.locals={nextQuestion:"_28gxYQDEWmrF8NaQMuI1Uq",chart:"_3Qy27sUvFRxvimvZQRtCNZ"}},638:function(e,t,n){var a=n(637);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,o);a.locals&&(e.exports=a.locals)}}]);