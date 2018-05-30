/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{624:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._1D3JovJRlbA8cupThfekim{font-size:20px;line-height:40px}._3QNJ4YBCq0kllTXZBfec8x{padding-top:10px;padding-left:10px;font-size:30px;text-align:center;color:blue}._1jvQxF87C3q6NYzUk08T34{padding-left:30px;font-size:25px;color:orange}._2MyDikyhsjDZnJlJQaiRnO{color:red;white-space:nowrap}li{float:none}",""]),t.locals={help:"_1D3JovJRlbA8cupThfekim",title:"_3QNJ4YBCq0kllTXZBfec8x",part:"_1jvQxF87C3q6NYzUk08T34",qiangdiao:"_2MyDikyhsjDZnJlJQaiRnO"}},625:function(e,t,n){var a=n(624);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},626:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(11)),l=c(n(4)),o=c(n(10)),i=c(n(3)),r=c(n(5)),u=c(n(1)),s=c(n(625));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){return(0,l.default)(this,t),(0,i.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,r.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:s.default.help},u.default.createElement("h4",{className:s.default.title}," 逻辑科目学习指南 "),u.default.createElement("span",{className:s.default.part}," 水平测试 "),u.default.createElement("br",null),u.default.createElement("ol",null,u.default.createElement("li",null,"用户首次进行逻辑科目的学习时，系统会强制进行测试"),u.default.createElement("li",null,"完成入口测试后，用户可以查看测试的正确率统计数据"),u.default.createElement("li",null,"只有完成入口测试后才可以进入学习，学习的章节内容与入口测试的做题情况有关"),u.default.createElement("li",null,"可以进行多次水平测试，但推荐学习的第一章内容，只跟在进入学习之前所做的测试有关系")),u.default.createElement("span",{className:s.default.part}," 进入学习 "),u.default.createElement("br",null),u.default.createElement("ol",null,u.default.createElement("li",null,"每一单元的学习分为四个部分：知识点精要、重点题型、强化练习以及单元测试"),u.default.createElement("li",null,"知识点精要是对本单元知识点的详细介绍"),u.default.createElement("li",null,"重点题型涵盖本单元涉及到所有小类的题目"),u.default.createElement("li",null,"强化练习是对本单元学习知识的巩固"),u.default.createElement("li",null,"单元测试是用户对本单元所学习内容的自我检测,",u.default.createElement("span",{style:{color:"red"}},"系统会根据测试的情况,推荐用户留在本章的学习还是进入下一章;但要留在本章还是进入下一章由用户自己决定"))),u.default.createElement("span",{className:s.default.part}," 复习 "),u.default.createElement("br",null),u.default.createElement("ol",null,u.default.createElement("li",null,"复习部分根据用户在本章的学习数据分为重点复习和一般复习两个部分"),u.default.createElement("li",null,"重点复习是用户比较薄弱的章节，一般复习是用户掌握比较牢固的章节"),u.default.createElement("li",null,"用户可以在复习部分查看做过的章节的知识点和错题")))}}]),t}(u.default.PureComponent);t.default=d},627:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._25JG823-c3wICd3wjr7cLx{padding-left:5%;padding-right:5%}",""]),t.locals={allChapterTongji:"_25JG823-c3wICd3wjr7cLx"}},628:function(e,t,n){var a=n(627);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=_(n(2)),l=_(n(11)),o=_(n(4)),i=_(n(10)),r=_(n(3)),u=_(n(5)),s=_(n(1)),c=n(16),d=n(15),f=_(n(628)),p=n(147),m=n(263),h=_(n(50)),g=(_(n(27)),_(n(142))),v=_(n(248));function _(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(e){(0,o.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.getLastTongji=function(){n.setState({tongjiShow:!0,typeSelect:!1}),n.props.loadAllZhentiTongji({url:"/api/logicAllTongji",body:{username:n.props.username}})},n.getAllTongji=function(){n.setState({tongjiShow:!0,typeSelect:!1}),n.props.loadZhentiTongji({url:"/api/logicLastTongji",body:{username:n.props.username}})},n.componentDidMount=function(){n.getLastTongji(),n.getAllTongji()},n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.lastData;return console.log(t,n),s.default.createElement("div",{className:f.default.allChapterTongji},s.default.createElement(h.default,{info:"您已经完成的所有章节统计情况如下："}),void 0==t.finish_chapter||void 0==n.finish_chapter?null:s.default.createElement("div",null,0==t.finish_chapter.length||0==n.finish_chapter.length?s.default.createElement(h.default,{info:"您还没有学习完成的章节！"}):s.default.createElement("div",null,n.tongji.map(function(e,a){return s.default.createElement("div",{key:a,align:"center"},s.default.createElement("br",null),s.default.createElement("h5",{style:{color:"blue"}},n.finish_chapter[a]),s.default.createElement("span",null,"最新一次总错误率",s.default.createElement("span",null,e.total_mba)),s.default.createElement("table",{border:"1"},s.default.createElement("tr",null,s.default.createElement("th",null,"小类名称"),e.mba_type.map(function(e,t){return s.default.createElement("th",{key:t},e)})),s.default.createElement("tr",null,s.default.createElement("th",null,"最新一次错误率"),e.xiaolei_mba.map(function(e,t){return s.default.createElement("th",{key:t},e)}))),s.default.createElement("span",null,"平均总错误率",s.default.createElement("span",null,t.tongji[a].total_mba)),s.default.createElement("table",{border:"1"},s.default.createElement("tr",null,s.default.createElement("th",null,"小类名称"),t.tongji[a].mba_type.map(function(e,t){return s.default.createElement("th",{key:t},e)})),s.default.createElement("tr",null,s.default.createElement("th",null,"平均错误率"),t.tongji[a].xiaolei_mba.map(function(e,t){return s.default.createElement("th",{key:t},e)}))))}))))}}]),t}(s.default.PureComponent);t.default=(0,v.default)([g.default,(0,c.connect)(function(e){return{username:e.UserManager.name,data:e.ZhentiPerYearTongji.tongji,lastData:e.ZhentiAllYearTongji.tongji}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(p.actions,e),(0,d.bindActionCreators)(m.actions,e))})],b)},630:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,".KrbFDvkrzifInbdaz8F-X{font-family:cursive;font-size:30px;color:blue;text-align:center}.AyYgkrivvQqX5g2vfJlbb{position:absolute;left:40%}",""]),t.locals={moniceshi:"KrbFDvkrzifInbdaz8F-X",submitButton:"AyYgkrivvQqX5g2vfJlbb"}},631:function(e,t,n){var a=n(630);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},632:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=T(n(2)),l=T(n(11)),o=T(n(4)),i=T(n(10)),r=T(n(3)),u=T(n(5)),s=T(n(1)),c=n(16),d=n(15),f=n(251),p=T(n(631)),m=T(n(27)),h=T(n(50)),g=(T(n(145)),T(n(255))),v=(T(n(252)),T(n(254))),_=(T(n(253)),T(n(256)),T(n(578))),b=n(261),E=n(143),y=(T(n(260)),T(n(148)),T(n(600)),T(n(144))),x=T(n(250)),C=T(n(249)),w=T(n(142)),j=T(n(248));function T(e){return e&&e.__esModule?e:{default:e}}var S=function(e){function t(e){(0,o.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadPortContent({url:"/api/logicSimulationTest",body:{username:n.props.username}}),n.props.loadQuestions({url:"/api/logicSimulationTest",body:{username:n.props.username},parser:function(e){var t=[];t.push(e.luojiyuyan,e.mingtiluoji,e.cixiangluoji,e.luojiyingyong,e.yanyituili,e.guinaluoji,e.jiashe,e.zhichi,e.xueruo,e.pingjia,e.jieshi,e.tuilun,e.bijiao,e.miaoshu,e.zonghe);for(var n=[],a=0;a<t.length;a++)t[a].map(function(e,t){return n.push(e)});return n.map(function(e){return{questionId:e.id,type:e.type,options:[e.op_one,e.op_two,e.op_three,e.op_four,e.op_five],rightKey:(0,y.default)(e.answer),question:e.question,analysis:e.analysis}})}})},n.submitQuestions=function(){var e=n.props,t=e.username,a=(e.content,e.questions),l=e.submitQuestionState,o=e.submiting,i=e.lockAndShow;l.resolved;if(!o){for(var r="",u="",s=0;s<a.length;s++)r+=a[s].questionId+"*",void 0!==a[s].choosed&&a[s].choosed.toString()===a[s].rightKey?u+="0*":u+="1*";console.log(t,r,u),n.props.submitQuestions({url:"/api/logicSimulationTongJi",body:{username:t,question_id:r,RightOrWrong:u}});for(s=0;s<a.length;s++)i(a[s].questionId)}},n.questions=[],n.state={end:!1},n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.loadQuestions()}},{key:"render",value:function(){var e=this.state.end,t=this.props,n=(t.submitQuestionState,t.loadQuestionState),a=(t.loadContent,t.loadContentState,t.ined),l=(t.questions,t.content);t.setChoice;return s.default.createElement(s.default.Fragment,null,s.default.createElement(f.Prompt,{when:0==e,message:"you need to do it again, are you sure to quit?"}),1===l.flag?s.default.createElement("div",null,s.default.createElement("div",{className:p.default.moniceshi}," 模拟测试 "),s.default.createElement(g.default,{loading:n.pending,wasLoaded:n.resolved,lastFailed:n.lastFailed,reloader:this.loadQuestions,center:!0},s.default.createElement(v.default,{play:a},s.default.createElement("div",null,s.default.createElement(b.view,{loader:this.loadQuestions,subject:"logic_test"}),s.default.createElement("strong",{align:"center"},s.default.createElement("div",{style:{color:"red"}},"点击确认提交，查看正确答案")),s.default.createElement(m.default,{className:p.default.submitButton,text:"确认提交",onClick:this.submitQuestions}))))):s.default.createElement(h.default,{info:"您还没完成入口测试，请先完成入口测试!"}))}}]),t}(s.default.PureComponent);t.default=(0,j.default)([(0,C.default)({submitQuestionState:{onResolved:function(){},onRejected:function(){this.props.alert("失败")}}}),(0,x.default)({logined:{satisfy:function(e){return!0===e},block:function(){var e=this.props,t=e.openWindow,n=e.history,a=e.closeMask,l=e.openMask;t(_.default,{width:"380px",height:"300px",position:{top:"calc( 50% - 190px)",left:"calc( 50% - 150px)"},onCancel:function(){return n.goBack()||a()},onSuccess:a}),l()}}}),w.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,content:e.PortTest.content,loadContentState:e.PortTest.loadState}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(b.actions,e),(0,d.bindActionCreators)(E.actions,e))})],S)},633:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._3p7P6d8A6z9KZl2od_YtCV{font-size:25px;color:red;text-align:center}._2TrSUabFhystuPzGV_1T-C{padding-left:2%;padding-right:0;left:52%;width:50%}._1qenPN6T-v7-lEqYSH-9SQ,._2TrSUabFhystuPzGV_1T-C{position:absolute;overflow-y:scroll;top:7%;height:93%;font-size:20px}._1qenPN6T-v7-lEqYSH-9SQ{padding-right:1%;left:3%;width:48%;border-right:2px dashed #000}._2yH1Aov_WV9m4K4W8xvkvm{font-family:cursive;font-size:30px;color:blue;text-align:center}.z65STGS1mNpTp-0lxRVs8{font-size:22px;color:orange;line-height:45px}._2AxOfPghVFqKgeDnkanqwD{position:absolute;right:40%}",""]),t.locals={dalei:"_3p7P6d8A6z9KZl2od_YtCV",cuoti:"_2TrSUabFhystuPzGV_1T-C",zhishidian:"_1qenPN6T-v7-lEqYSH-9SQ",fuxibiaoti:"_2yH1Aov_WV9m4K4W8xvkvm",logic_knowledge_title:"z65STGS1mNpTp-0lxRVs8",submitButton:"_2AxOfPghVFqKgeDnkanqwD"}},634:function(e,t,n){var a=n(633);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(n(2)),l=y(n(11)),o=y(n(4)),i=y(n(10)),r=y(n(3)),u=y(n(5)),s=y(n(1)),c=n(16),d=n(15),f=y(n(634)),p=(y(n(255)),y(n(252)),n(143)),m=n(261),h=y(n(260)),g=y(n(27)),v=y(n(50)),_=y(n(144)),b=(y(n(250)),y(n(249)),y(n(142))),E=y(n(248));y(n(578));function y(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,o.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.requestChapterContent=function(){n.props.loadPortContent({url:"/api/logicGetReviewZhishidian",body:{chapter_name:n.props.chapter_name}}),n.props.loadQuestions({url:"/api/logicGetReviewCuoti",body:{username:n.props.username,chapter_name:n.props.chapter_name},parser:function(e){var t=[];return e.content.map(function(e){return t.push(e)}),t.map(function(e){return{questionId:e.id,options:e.options,rightKey:(0,_.default)(e.answer),question:e.question,analysis:e.analysis}})}})},n.submitQuestions=function(){var e=n.props,t=e.questions,a=e.submitQuestionState,l=e.submiting,o=e.lockAndShow;a.resolved;if(!l){for(var i="",r="",u=0;u<t.length;u++)i+=t[u].questionId+"*",void 0!==t[u].choosed&&t[u].choosed.toString()===t[u].rightKey?r+="0*":r+="1*";n.props.submitQuestions({url:"/api/logicRecordReviewCuoti",body:{username:n.props.username,chapter_name:n.props.chapter_name,question_id:i,RightOrWrong:r}});for(u=0;u<t.length;u++)o(t[u].questionId)}},n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.requestChapterContent()}},{key:"render",value:function(){var e=this.props,t=(e.submitQuestionState,e.loadQuestionState,e.loadContent,e.loadContentState,e.total_content),n=(e.ined,e.setLearningType,e.chapter_name),a=e.questions;return s.default.createElement(s.default.Fragment,null,s.default.createElement("h4",{className:f.default.dalei,style:{color:"red"}}," ",n," "),s.default.createElement("div",{className:f.default.zhishidian},s.default.createElement("h4",{className:f.default.fuxibiaoti},"知识点精要"),void 0==t.content?null:s.default.createElement(h.default,{list:t.content}),void 0==t.shunxu?null:s.default.createElement("div",null,t.shunxu.map(function(e,n){return s.default.createElement("div",{key:n},s.default.createElement("div",{className:f.default.logic_knowledge_title}," ",e," "),void 0==t.xiaolei?null:s.default.createElement(h.default,{list:t.xiaolei[n]}))}))),s.default.createElement("div",{className:f.default.cuoti},s.default.createElement("h4",{className:f.default.fuxibiaoti},"错题集锦"),0==a.length?s.default.createElement(v.default,{info:"您在本章没有错题！"}):s.default.createElement("div",null,s.default.createElement(m.view,{loader:this.requestChapterContent,subject:"logic_review"}),s.default.createElement(g.default,{className:f.default.submitButton,text:"确认提交",onClick:this.submitQuestions}))))}}]),t}(s.default.PureComponent);t.default=(0,E.default)([b.default,(0,c.connect)(function(e){return{username:e.UserManager.name,chapter_name:e.LogicReviewModel.choice,total_content:e.PortTest.content,questions:e.SingleOptionQuestions.content,submitQuestionState:e.SingleOptionQuestions.submitState}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(p.actions,e),(0,d.bindActionCreators)(m.actions,e))})],x)},636:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._38YO4cp6CLiHjT-aGW7Ynz{padding-left:5%;font-size:20px}._2ePan3ARTEcLAasaEFQtW7{font-size:25px;text-align:center}",""]),t.locals={wholeErrorTongji:"_38YO4cp6CLiHjT-aGW7Ynz",note:"_2ePan3ARTEcLAasaEFQtW7"}},637:function(e,t,n){var a=n(636);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(11)),l=c(n(4)),o=c(n(10)),i=c(n(3)),r=c(n(5)),u=c(n(1)),s=c(n(637));c(n(50)),c(n(27));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return(0,l.default)(this,t),(0,i.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.data;return console.log(this.props),u.default.createElement("div",{className:s.default.wholeErrorTongji},u.default.createElement("div",{className:s.default.note},"您复习过的章节及其复习次数统计如下："),u.default.createElement("br",null),u.default.createElement("table",{border:"1",align:"center"},void 0==e.chapter_name?null:u.default.createElement("tr",null,u.default.createElement("th",null,"类别名称"),e.chapter_name.map(function(e,t){return u.default.createElement("th",{key:t}," ",e," ")})),void 0==e.count?null:u.default.createElement("tr",null,u.default.createElement("th",null,"复习次数"),e.count.map(function(e,t){return u.default.createElement("th",{key:t}," ",e," ")}))))}}]),t}(u.default.PureComponent);t.default=d},639:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2-Dq42GqPDu1wEOdS6opZR{position:absolute;top:0;left:50%;width:55%;height:100%;font-size:20px;padding-left:5%}._1bz4ivIEciVDa1FLm6pgSr{position:absolute;left:5%;width:45%;height:100%;border-right:2px dashed #000;font-size:20px}.F5j6IMIsgXYhoDao0gplf{font-family:cursive;font-size:30px;color:blue;text-align:center}.pgv9ALgqqQQxUCTCS0lz4{position:absolute;bottom:0;left:42%}",""]),t.locals={putongReview:"_2-Dq42GqPDu1wEOdS6opZR",zhongdianReview:"_1bz4ivIEciVDa1FLm6pgSr",biaoti:"F5j6IMIsgXYhoDao0gplf",chakanTongjiButton:"pgv9ALgqqQQxUCTCS0lz4"}},640:function(e,t,n){var a=n(639);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(n(2)),l=y(n(11)),o=y(n(4)),i=y(n(10)),r=y(n(3)),u=y(n(5)),s=y(n(1)),c=n(16),d=n(15),f=y(n(640)),p=n(266),m=n(147),h=y(n(50)),g=y(n(27)),v=y(n(638)),_=y(n(635)),b=y(n(142)),E=y(n(248));function y(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,o.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.getReviewChapterName=function(){n.props.getLogicReviewChapterName({url:"/api/logicGetReviewChapterName",body:{username:n.props.username}})},n.getReviewTongji=function(){n.setState({tongjiShow:!0,typeSelect:!1}),n.props.loadZhentiTongji({url:"/api/logicReviewTimeTongji",body:{username:n.props.username}})},n.requestChapterContent=function(e){n.setState({reviewContent:!0,tongjiShow:!1})},n.state={reviewContent:!1,tongjiShow:!1},n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.getReviewChapterName()}},{key:"render",value:function(){var e=this,t=this.props,n=t.whetherHaveFinishedChapter,a=t.ordinaryChapterName,l=t.importantChapterName,o=t.setChapter,i=t.choice,r=t.data;return s.default.createElement(s.default.Fragment,null,this.state.reviewContent?s.default.createElement(_.default,null):this.state.tongjiShow?s.default.createElement(v.default,{data:r}):0==n?s.default.createElement(h.default,{info:"您目前还没有学习完成的章节"}):s.default.createElement("div",null,s.default.createElement("div",{className:f.default.zhongdianReview},s.default.createElement("h4",{className:f.default.biaoti},"重点复习"),0==l.length?s.default.createElement(h.default,{info:"您目前没有需要重点复习的章节"}):s.default.createElement("div",null,s.default.createElement("strong",{align:"center"},s.default.createElement("div",{style:{color:"red"}},"请点击选择要复习的章节")),l.map(function(t,n){return s.default.createElement("div",{key:n},s.default.createElement("br",null),s.default.createElement("li",{style:t==i?{color:"blue"}:null,onClick:function(){e.setState({reviewContent:!0,tongjiShow:!1}),o(t)}},t))}))),s.default.createElement("div",{className:f.default.putongReview},s.default.createElement("h4",{className:f.default.biaoti},"一般复习"),0==a.length?s.default.createElement(h.default,{info:"您目前没有需要一般复习的章节"}):s.default.createElement("div",null,s.default.createElement("strong",{align:"center"},s.default.createElement("div",{style:{color:"red"}},"请点击选择要复习的章节")),a.map(function(t,n){return s.default.createElement("div",{key:n},s.default.createElement("br",null),s.default.createElement("li",{style:t==i?{color:"blue"}:null,onClick:function(){e.setState({reviewContent:!0,tongjiShow:!1}),o(t)}},t))}))),s.default.createElement(g.default,{className:f.default.chakanTongjiButton,text:"点击查看复习数据统计",onClick:this.getReviewTongji})))}}]),t}(s.default.PureComponent);t.default=(0,E.default)([b.default,(0,c.connect)(function(e){return{username:e.UserManager.name,whetherHaveFinishedChapter:e.LogicReviewModel.whetherHaveFinishedChapter,ordinaryChapterName:e.LogicReviewModel.ordinaryChapterName,importantChapterName:e.LogicReviewModel.importantChapterName,choice:e.LogicReviewModel.choice,data:e.ZhentiPerYearTongji.tongji}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(p.actions,e),(0,d.bindActionCreators)(m.actions,e))})],x)},642:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._1zUOYaLveU3gwVpavB4X9f{height:100%;width:100%}._1Po89-hjdRZKQvbq-KVCzx{position:absolute;height:6%;width:100%;background-color:#5379c6;color:#fff;font-size:100%;align-items:center;font-family:Arvo}._8GXXd-eMnv7wonpMeVUS9{position:absolute;left:5%;font-size:25px}._13UTFlcUb6XunqI_HKKbYj{position:absolute;right:8%;font-size:25px}._1UoLnmcKncm3X7CarzNYix{position:absolute;top:6%;left:0;bottom:0;width:12%;background:#5379c6;font-size:25px;text-align:center}._2zzFlex8vw-dIRaum9rOb_{width:80px;height:80px;border-radius:50%}._3QkZ7Xjju9cLfsmCy5NbGC{color:#fff;font-size:20px}._1Lh4Y1kEzE1QjTbox4cxSy,._300xp2mbKWjguled8zLeKf{font-size:25px;padding-top:5px;padding-bottom:5px;color:#fff}._1Lh4Y1kEzE1QjTbox4cxSy{background:orange}.WO8D7L0F4MHn6DgjI_tqk{position:absolute;top:8%;left:12%;height:92%;width:88%;overflow-y:scroll}.WO8D7L0F4MHn6DgjI_tqk ._2F90rGhoUNrtRCt8txBsnt{display:block;position:absolute;text-align:center;font-size:20px;bottom:5%;left:40%}._2tRsuAFqCuqFfhewZoGbls{color:orange}._1SPCF2TKj8WLsinfzR7ZOA{color:#fff}",""]),t.locals={wholeLogicPage:"_1zUOYaLveU3gwVpavB4X9f",logicPageTitle:"_1Po89-hjdRZKQvbq-KVCzx",title:"_8GXXd-eMnv7wonpMeVUS9",goback:"_13UTFlcUb6XunqI_HKKbYj",subjectText:"_1UoLnmcKncm3X7CarzNYix",picture:"_2zzFlex8vw-dIRaum9rOb_",username:"_3QkZ7Xjju9cLfsmCy5NbGC",normalText:"_300xp2mbKWjguled8zLeKf",chosedText:"_1Lh4Y1kEzE1QjTbox4cxSy",mainContent:"WO8D7L0F4MHn6DgjI_tqk",bottomButton:"_2F90rGhoUNrtRCt8txBsnt",chosedLogin:"_2tRsuAFqCuqFfhewZoGbls",normalLogin:"_1SPCF2TKj8WLsinfzR7ZOA"}},643:function(e,t,n){var a=n(642);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=T(n(2)),l=T(n(11)),o=T(n(4)),i=T(n(10)),r=T(n(3)),u=T(n(5)),s=T(n(1)),c=n(16),d=n(15),f=(n(251),T(n(643))),p=T(n(567)),m=n(265),h=n(149),g=n(257),v=T(n(601)),_=T(n(580)),b=T(n(641)),E=T(n(632)),y=T(n(629)),x=T(n(626)),C=(T(n(50)),T(n(250)),T(n(249))),w=T(n(142)),j=T(n(248));function T(e){return e&&e.__esModule?e:{default:e}}var S=function(e){function t(e){(0,o.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.type=["入口测试","进入学习","开始复习","模拟测试","数据统计","查看帮助"],n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(this.props.choice!==e.choice&&"重点习题"===this.props.learningType&&0==this.props.submitZhongdian||this.props.choice!==e.choice&&"强化练习"===this.props.learningType&&0==this.props.submitQianghua||this.props.choice!==e.choice&&"单元测试"===this.props.learningType&&0==this.props.submitUnitTest),this.props.choice!==e.choice&&"重点习题"===this.props.learningType&&0==this.props.submitZhongdian||this.props.choice!==e.choice&&"强化练习"===this.props.learningType&&0==this.props.submitQianghua||this.props.choice!==e.choice&&"单元测试"===this.props.learningType&&this.props.submitUnitTest}},{key:"render",value:function(){var e=this.props,t=(e.username,e.logined),n=(e.newTo,e.choice);e.learningType;return s.default.createElement(s.default.Fragment,null,0==t?s.default.createElement(p.default,null):s.default.createElement("div",null,s.default.createElement(m.view,{subjectFunctions:this.type}),s.default.createElement("div",{className:f.default.mainContent},0==n?s.default.createElement(v.default,null):1==n?s.default.createElement(_.default,{learningType:""}):2==n?s.default.createElement(b.default,null):3==n?s.default.createElement(E.default,null):4==n?s.default.createElement(y.default,null):s.default.createElement(x.default,null))))}}]),t}(s.default.PureComponent);t.default=(0,j.default)([(0,C.default)({}),w.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,newTo:e.UserManager.newTo,choice:e.SubjectSelect.choice,submitZhongdian:e.LogicState.submitZhongdian,submitQianghua:e.LogicState.submitQianghua,submitUnitTest:e.LogicState.submitUnitTest,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(h.actions,e),(0,d.bindActionCreators)(g.actions,e))})],S)}}]);