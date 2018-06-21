/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8],{587:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(n(2)),l=s(n(1)),r=s(n(574)),o=n(147);function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)(function(e){return l.default.createElement(o.view,(0,a.default)({},e,{onCancel:function(){e.onCancel(),e.closeWindow()},onSuccess:function(){e.onSuccess(),e.closeWindow()}}))})},610:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=I(n(2)),l=I(n(581)),r=I(n(11)),o=I(n(4)),s=I(n(10)),i=I(n(3)),u=I(n(5)),d=I(n(1)),c=n(16),f=n(15),m=n(259),p=I(n(716)),h=(I(n(27)),I(n(62))),v=I(n(154)),g=I(n(258)),E=I(n(256)),_=I(n(255)),y=I(n(257)),x=(I(n(260)),I(n(587)),n(714)),b=n(263),w=n(261),S=n(710),z=n(94),A=n(254),F=I(n(579)),W=(I(n(253)),I(n(252))),C=I(n(145)),N=I(n(146));function I(e){return e&&e.__esModule?e:{default:e}}var k=function(e){function t(e){(0,o.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadQuestions({url:"/api/eng_getQuestion",body:{username:n.props.username,lock:0,article_id:n.props.articleId},parser:function(e){return e.map(function(e){return{questionId:e.questionid,options:e.choice,rightKey:e.key,question:e.question,analysis:e.analysis}})}})},n.nextStep=function(){n.setState({processStep:n.state.processStep+1})},n.confirm=function(){n.nextStep()},n.quit=function(){for(var e=n.props,t=e.unlockAndHide,a=e.questions,l=e.hideAllTranslate,r=0;r<a.length;r++)t(a[r].questionId);l(),n.props.setLearningType("英语主页面")},n.doMore=function(){for(var e=n.props,t=e.unlockAndHide,a=e.questions,l=e.hideAllTranslate,r=0;r<a.length;r++)t(a[r].questionId);l(),n.setState({processStep:0,displayByWords:!0}),n.props.setLearningType("英语生词难句")},n.submitQuestions=function(){var e=n.props,t=e.username,a=e.questions,l=e.articleId,r=e.submitQuestionState,o=e.submiting,s=e.lockAndShow,i=r.resolved;if(!o){for(var u="",d=0;d<a.length;d++)a[d].choosed!==a[d].rightKey&&(u+=a[d].questionId+" ");if(n.props.submitQuestions({url:"/api/eng_recordWrongQuestion",body:{username:t,article_id:l.toString(),wrong_question_ids:u,time:i+1}}),0==(i+1&1))for(d=0;d<a.length;d++)s(a[d].questionId)}},n.function=function(){n.props.loadPortContent({url:"/api/eng_getUnit",body:{username:n.props.username}})},n.actions=[n.submitQuestions,e.translateWords,function(){n.confirm(),n.setState({displayByWords:!1})},function(){e.translateSentences(),n.confirm()},function(){e.hideTranslate(),n.confirm()},n.submitQuestions,[n.confirm,e.translateAll],[n.quit,n.doMore]],n.texts=["提交答案","翻译生词","下一步","翻译难句","下一步","提交答案",["查看统计","翻译全文"],["结束","进入生词难句"]],n.describes=["阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案","确认自己不明白的单词，确认全部点击后，提交系统，等待翻译","请阅读生词解释","选择自己不理解的句子，点击，提交系统，等待翻译","请阅读难句解释","再次完成试题，如果觉得刚才选的有误，可修改答案，点击确认后，查看正确答案和解析","请仔细阅读正确答案和解析，如需查看全文翻译，请点击翻译全文按钮，否则请点击查看统计","想做更多吗？"],n.state={processStep:0,displayByWords:!0},n}return(0,u.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.props.loadContent(),this.loadQuestions(),this.function()}},{key:"render",value:function(){var e,t=this,n=this.state.processStep,a=this.props,r=a.translateWordsState,o=(a.submitQuestionState,a.loadQuestionState,a.translateWords),s=(a.translateSentences,a.loadArticleState,a.loadContent,a.UnitAndCourse),i=(a.setLearningType,a.learningType,a.ined),u=this.state.displayByWords,c="",f=[],z=[];if(Array.isArray(this.texts[n])){var A=(0,l.default)(this.actions[n]);e=A[0],f=A.slice(1);var W=(0,l.default)(this.texts[n]);c=W[0],z=W.slice(1),e={action:e,text:c},f=(0,F.default)({action:f,text:z})}else e={action:this.actions[n],text:this.texts[n]};return console.log(this.props.articleId),d.default.createElement(d.default.Fragment,null,d.default.createElement(m.Prompt,{when:0!==n&&n!==this.actions.length-1,message:"你需要再做一遍，确定退出吗?"}),d.default.createElement("div",{className:p.default.HUD},"[Unit ",s.unit," Course ",s.course,"] Step ",n+1,": ",this.describes[n]),d.default.createElement("div",{className:p.default.wrapper},d.default.createElement("div",{className:p.default.leftPane},d.default.createElement(E.default,{play:i},d.default.createElement(w.view,{displayByWords:u}))),d.default.createElement("div",{className:p.default.rightPane},function(){switch(n){case 0:case 5:case 6:return d.default.createElement(_.default,{play:i},d.default.createElement(b.view,{submiter:t.submitQuestions,loader:t.loadQuestions,layoutFormat:"upDown",questionLength:"single",paraLength:"single"}));case 1:return d.default.createElement("div",{className:"container"},d.default.createElement("div",{className:"makeLoadingCenter"},d.default.createElement(g.default,{center:!0,loading:r.pending,lastFailed:r.lastFailed,wasLoaded:r.resolved,reloader:o,info:"点击不认识的单词"})));case 2:case 4:return d.default.createElement(S.view,null);case 3:return d.default.createElement(h.default,{info:"点击不理解的句子"});case 7:return d.default.createElement(x.view,null)}}())),d.default.createElement("div",{className:p.default.controlPane},d.default.createElement(y.default,{play:i},d.default.createElement(v.default,{mainAction:e,additionalActions:f}))))}}]),t}(d.default.PureComponent);t.default=(0,N.default)([(0,W.default)({submitQuestionState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}},translateWordsState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}}}),C.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,showSentencesTranslates:e.EnglishArticle.showSentencesTranslates,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,loadArticleState:e.EnglishArticle.loadState,translateWordsState:e.EnglishArticle.translateWordsState,articleId:e.EnglishArticle.articleId,UnitAndCourse:e.PortTest.content,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,f.bindActionCreators)(b.actions,e),(0,f.bindActionCreators)(w.actions,e),(0,f.bindActionCreators)(z.actions,e),(0,f.bindActionCreators)(A.actions,e))})],k)},704:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2OgU-ZcrYjDbe-s18Swiut{margin-bottom:20px;padding-bottom:10px;padding-left:4px;border-bottom:2px solid #d3d3d3}",""]),t.locals={oneItem:"_2OgU-ZcrYjDbe-s18Swiut"}},705:function(e,t,n){var a=n(704);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},706:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,".KfxTEPs8SQdwn0hGwl97W{font-size:16px;line-height:28px}._1dJOHpSw-92EHxpOi-_lVD{font-size:21px;line-height:30px}",""]),t.locals={wordTranslate:"KfxTEPs8SQdwn0hGwl97W",wordTranslateWord:"_1dJOHpSw-92EHxpOi-_lVD"}},707:function(e,t,n){var a=n(706);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},708:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(11)),l=d(n(4)),r=d(n(10)),o=d(n(3)),s=d(n(5)),i=d(n(1)),u=d(n(707));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.word,n=e.example,a=e.translate,l=e.exampleTranslate,r=e.expression,o=e.pronouncation;return i.default.createElement(i.default.Fragment,null,null==t?null:i.default.createElement("div",{className:"col-sm-12"},i.default.createElement("div",{className:"card-box"},i.default.createElement("div",{className:u.default.wordTranslateWord},i.default.createElement("strong",null,t)),i.default.createElement("div",{style:{"font-size":"6px"}}," "),i.default.createElement("div",{className:u.default.wordTranslate},i.default.createElement("div",null,"发音：|",o||"none","|"),i.default.createElement("div",null,"中文：",a||"none"),i.default.createElement("div",null,"常用短语：",r||"none"),i.default.createElement("div",null,"例句：",n||"none"),i.default.createElement("div",null,"例句翻译：",l||"none")))))}}]),t}(i.default.PureComponent);t.default=c},709:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(n(11)),l=m(n(4)),r=m(n(10)),o=m(n(3)),s=m(n(5)),i=m(n(1)),u=n(16),d=m(n(708)),c=m(n(62)),f=m(n(705));function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props.words;return i.default.createElement("div",{className:"container"},0===e.length?i.default.createElement(c.default,{info:"You do not have unknown words, congratulations!"}):e.map(function(e){return i.default.createElement("div",{className:f.default.oneItem,key:e.word},i.default.createElement(d.default,e))}))}}]),t}(i.default.PureComponent);t.default=(0,u.connect)(function(e){return{words:e.EnglishArticle.wordsTranslates}})(p)},710:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=void 0;var a,l=n(709),r=(a=l)&&a.__esModule?a:{default:a};t.view=r.default},711:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2CcjmLdkc9Sq9Qb42AJFJN{font-size:16px;line-height:30px}",""]),t.locals={content:"_2CcjmLdkc9Sq9Qb42AJFJN"}},712:function(e,t,n){var a=n(711);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=v(n(2)),l=v(n(11)),r=v(n(4)),o=v(n(10)),s=v(n(3)),i=v(n(5)),u=v(n(1)),d=n(16),c=n(15),f=v(n(712)),m=n(580),p=v(n(273)),h=(v(n(62)),n(94));function v(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(){var e,n,a,o;(0,r.default)(this,t);for(var i=arguments.length,u=Array(i),d=0;d<i;d++)u[d]=arguments[d];return n=a=(0,s.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(u))),a.loadWordRate=function(){a.props.loadPortContent({url:"/api/eng_getWordRate",body:{username:a.props.username,articleId:a.props.articleId}})},a.loadArticleWordRate=function(){a.props.loadPortContent2({url:"/api/eng_getArticleWordRate",body:{articleId:a.props.articleId}})},o=n,(0,s.default)(a,o)}return(0,i.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.loadWordRate(),this.loadArticleWordRate()}},{key:"render",value:function(){var e=this.props,t=e.wordCount,n=e.choosedWordCount,a=e.allWordCount,l=e.wordRate,r=e.articleWordRate;return console.log(r),u.default.createElement("div",{className:"container"},u.default.createElement("div",null,void 0==l?null:u.default.createElement("div",{style:{"padding-top":"5px"}},u.default.createElement("p",{className:f.default.content},"本课难度：","easy"==l.level?u.default.createElement("span",null,u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star-outline",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star-outline",style:{color:"#71b6f9","font-size":"20px"}})):"medium"==l.level?u.default.createElement("span",null,u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star-outline",style:{color:"#71b6f9","font-size":"20px"}})):u.default.createElement("span",null,u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}))),u.default.createElement("p",{className:f.default.content},"本课总单词数：",a),u.default.createElement("p",{className:f.default.content},"本课不重复的单词数：",t),u.default.createElement("p",{className:f.default.content},"本课生词（不认识）数：",n),u.default.createElement("p",{className:f.default.content},"生词数占比：",(n/t*100).toFixed(1),"%"),u.default.createElement("p",{className:f.default.content},"生词及全文单词在各单词库占比："),u.default.createElement("table",{className:"table table-striped m-0",align:"center"},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"单词库"),u.default.createElement("th",null,"生词占比"),u.default.createElement("th",null,"全文占比"))),u.default.createElement("tbody",null,u.default.createElement("tr",null,u.default.createElement("th",null,"中考"),u.default.createElement("th",null,(100*parseFloat(l.zhongkao_rate)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.zhongkao)).toFixed(1),"%")),u.default.createElement("tr",null,u.default.createElement("th",null,"高考"),u.default.createElement("th",null,(100*parseFloat(l.gaokao)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.gaokao)).toFixed(1),"%")),u.default.createElement("tr",null,u.default.createElement("th",null,"四级"),u.default.createElement("th",null,(100*parseFloat(l.siji)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.siji)).toFixed(1),"%")),u.default.createElement("tr",null,u.default.createElement("th",null,"六级"),u.default.createElement("th",null,(100*parseFloat(l.liuji)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.liuji)).toFixed(1),"%")),u.default.createElement("tr",null,u.default.createElement("th",null,"考研"),u.default.createElement("th",null,(100*parseFloat(l.kaoyan)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.kaoyan)).toFixed(1),"%")),u.default.createElement("tr",null,u.default.createElement("th",null,"超纲"),u.default.createElement("th",null,(100*parseFloat(l.chaogang)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.chaogang)).toFixed(1),"%")))),u.default.createElement("br",null))))}}]),t}(u.default.PureComponent),E=function(e){for(var t=[],n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)for(var l=0;l<e[n][a].length;l++)t.push(e[n][a][l]);return t},_=(0,m.createSelector)(E,function(e){for(var t=new p.default,n=0;n<e.length;n++)t.insert(e[n]);return t}),y=(0,m.createSelector)(_,function(e){return e.root.count});t.default=(0,d.connect)(function(e){return{allWordCount:E(e.EnglishArticle.paragraphedWords).length,wordCount:y(e.EnglishArticle.paragraphedWords),choosedWordCount:e.EnglishArticle.choosedWords.root.count,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,wordRate:e.PortTest.content,articleWordRate:e.PortTest.content2}},function(e){return(0,a.default)({},(0,c.bindActionCreators)(h.actions,e))})(g)},714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=void 0;var a,l=n(713),r=(a=l)&&a.__esModule?a:{default:a};t.view=r.default},715:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2lIFl5fh-pzNfBA6vqSFCI{display:flex;height:5%;width:100%;background-color:#282c34;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._1B626kxwVHOvML1heuQS0I{width:100%;height:95%;display:flex;flex-direction:row}._1B626kxwVHOvML1heuQS0I ._3mLpIrkUBb9jY_vjJS0iei{width:30%;margin-right:1%;overflow-y:scroll}._1B626kxwVHOvML1heuQS0I ._256veLC127p9f056CMTsjz{width:68%;border-right:2px dashed #000;margin-right:1%;overflow-y:scroll}._1siY0Dhoi5nQGhDPmWbdU3{position:absolute;bottom:0;width:100%;height:5%}",""]),t.locals={HUD:"_2lIFl5fh-pzNfBA6vqSFCI",wrapper:"_1B626kxwVHOvML1heuQS0I",rightPane:"_3mLpIrkUBb9jY_vjJS0iei",leftPane:"_256veLC127p9f056CMTsjz",controlPane:"_1siY0Dhoi5nQGhDPmWbdU3"}},716:function(e,t,n){var a=n(715);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)}}]);