/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{621:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=F(a(2)),l=F(a(597)),r=F(a(11)),o=F(a(4)),s=F(a(10)),i=F(a(3)),u=F(a(5)),d=F(a(1)),c=a(15),f=a(14),m=a(151),p=F(a(735)),h=(F(a(23)),F(a(62))),v=F(a(163)),E=F(a(156)),g=(F(a(153)),F(a(152)),F(a(155)),F(a(157)),F(a(268)),a(733)),x=a(269),y=a(159),b=a(729),_=a(72),S=a(267),w=F(a(596)),A=(F(a(150)),F(a(149))),N=F(a(97)),z=F(a(98));function F(e){return e&&e.__esModule?e:{default:e}}var W=function(e){function t(e){(0,o.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.getArticle=function(){a.props.loadContent({body:{username:a.props.username,lock:0,articleId:0}})},a.loadQuestions=function(){a.props.loadQuestions({url:"/api/eng_getQuestion",body:{username:a.props.username,lock:0,article_id:a.props.articleId},parser:function(e){return e.map(function(e){return{questionId:e.questionid,options:e.choice,rightKey:e.key,question:e.question,analysis:e.analysis}})}})},a.nextStep=function(){a.setState({processStep:a.state.processStep+1})},a.confirm=function(){a.nextStep()},a.quit=function(){for(var e=a.props,t=e.unlockAndHide,n=e.questions,l=e.hideAllTranslate,r=0;r<n.length;r++)t(n[r].questionId);l(),a.props.setLearningType("英语主页面")},a.doMore=function(){for(var e=a.props,t=e.unlockAndHide,n=e.questions,l=e.hideAllTranslate,r=0;r<n.length;r++)t(n[r].questionId);l(),a.setState({processStep:0,displayByWords:!0}),a.props.setLearningType("英语生词难句")},a.submitQuestions=function(){var e=a.props,t=e.username,n=e.questions,l=e.articleId,r=e.submitQuestionState,o=e.submiting,s=e.lockAndShow,i=r.resolved;if(!o){for(var u="",d=0;d<n.length;d++)n[d].choosed!==n[d].rightKey&&(u+=n[d].questionId+" ");if(a.props.submitQuestions({url:"/api/eng_recordWrongQuestion",body:{username:t,article_id:l.toString(),wrong_question_ids:u,time:i+1}}),0==(i+1&1))for(d=0;d<n.length;d++)s(n[d].questionId)}},a.function=function(){a.props.loadPortContent({url:"/api/eng_getUnit",body:{username:a.props.username}})},a.actions=[a.submitQuestions,e.translateWords,function(){a.confirm(),a.setState({displayByWords:!1})},function(){e.translateSentences(),a.confirm()},function(){e.hideTranslate(),a.confirm()},a.submitQuestions,[a.confirm,e.translateAll],[a.quit,a.doMore]],a.texts=["提交答案","翻译生词","下一步","翻译难句","下一步","提交答案",["查看统计","翻译全文"],["结束","进入生词难句"]],a.describes=["阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案","确认自己不明白的单词，确认全部点击后，提交系统，等待翻译","请阅读生词解释","选择自己不理解的句子，点击，提交系统，等待翻译","请阅读难句解释","再次完成试题，如果觉得刚才选的有误，可修改答案，点击确认后，查看正确答案和解析","请仔细阅读正确答案和解析，如需查看全文翻译，请点击翻译全文按钮，否则请点击查看统计","想做更多吗？"],a.state={processStep:0,displayByWords:!0},a}return(0,u.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.getArticle(),this.loadQuestions(),this.function()}},{key:"render",value:function(){var e,t=this,a=this.state.processStep,n=this.props,r=n.translateWordsState,o=(n.submitQuestionState,n.loadQuestionState,n.translateWords),s=(n.translateSentences,n.loadArticleState,n.loadContent,n.UnitAndCourse),i=(n.setLearningType,n.learningType,n.ined,this.state.displayByWords),u="",c=[],f=[];if(Array.isArray(this.texts[a])){var _=(0,l.default)(this.actions[a]);e=_[0],c=_.slice(1);var S=(0,l.default)(this.texts[a]);u=S[0],f=S.slice(1),e={action:e,text:u},c=(0,w.default)({action:c,text:f})}else e={action:this.actions[a],text:this.texts[a]};return console.log(this.props.articleId),d.default.createElement(d.default.Fragment,null,d.default.createElement(m.Prompt,{when:0!==a&&a!==this.actions.length-1,message:"你需要再做一遍，确定退出吗?"}),d.default.createElement("div",{className:"col-md-12"},d.default.createElement("div",{className:"card-box kanban-box"},d.default.createElement("div",{className:p.default.HUD},"[Unit ",s.unit," Course ",s.course,"] Step ",a+1,": ",this.describes[a]))),d.default.createElement("div",{className:"col-md-12"},d.default.createElement("div",{className:"col-md-8"},d.default.createElement("div",{className:"card-box kanban-box"},d.default.createElement(y.view,{displayByWords:i}))),d.default.createElement("div",{className:"col-md-4"},d.default.createElement("div",{className:"card-box kanban-box"},function(){switch(a){case 0:case 5:case 6:return d.default.createElement(x.view,{submiter:t.submitQuestions,loader:t.loadQuestions,layoutFormat:"upDown",questionLength:"single",paraLength:"single"});case 1:return d.default.createElement("div",{className:"container"},d.default.createElement("div",{className:"makeLoadingCenter"},d.default.createElement(E.default,{center:!0,loading:r.pending,lastFailed:r.lastFailed,wasLoaded:r.resolved,reloader:o,info:"点击不认识的单词"})));case 2:case 4:return d.default.createElement(b.view,null);case 3:return d.default.createElement(h.default,{info:"点击不理解的句子"});case 7:return d.default.createElement(g.view,null)}}()))),d.default.createElement("div",{className:p.default.controlPane},d.default.createElement(v.default,{mainAction:e,additionalActions:c})))}}]),t}(d.default.PureComponent);t.default=(0,z.default)([(0,A.default)({submitQuestionState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}},translateWordsState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}}}),N.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,showSentencesTranslates:e.EnglishArticle.showSentencesTranslates,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,loadArticleState:e.EnglishArticle.loadState,translateWordsState:e.EnglishArticle.translateWordsState,articleId:e.EnglishArticle.articleId,UnitAndCourse:e.PortTest.content,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,n.default)({},(0,f.bindActionCreators)(x.actions,e),(0,f.bindActionCreators)(y.actions,e),(0,f.bindActionCreators)(_.actions,e),(0,f.bindActionCreators)(S.actions,e))})],W)},723:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2OgU-ZcrYjDbe-s18Swiut{margin-bottom:20px;padding-bottom:10px;padding-left:4px}",""]),t.locals={oneItem:"_2OgU-ZcrYjDbe-s18Swiut"}},724:function(e,t,a){var n=a(723);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,l);n.locals&&(e.exports=n.locals)},725:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,".KfxTEPs8SQdwn0hGwl97W{font-size:16px;line-height:28px}._1dJOHpSw-92EHxpOi-_lVD{font-size:21px;line-height:30px}",""]),t.locals={wordTranslate:"KfxTEPs8SQdwn0hGwl97W",wordTranslateWord:"_1dJOHpSw-92EHxpOi-_lVD"}},726:function(e,t,a){var n=a(725);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,l);n.locals&&(e.exports=n.locals)},727:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(11)),l=d(a(4)),r=d(a(10)),o=d(a(3)),s=d(a(5)),i=d(a(1)),u=d(a(726));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.word,a=e.example,n=e.translate,l=e.exampleTranslate,r=e.expression,o=e.pronouncation;return i.default.createElement(i.default.Fragment,null,null==t?null:i.default.createElement("div",{className:"col-sm-12"},i.default.createElement("div",{className:"card-box"},i.default.createElement("div",{className:u.default.wordTranslateWord},i.default.createElement("strong",null,t)),i.default.createElement("div",{style:{"font-size":"6px"}}," "),i.default.createElement("div",{className:u.default.wordTranslate},i.default.createElement("div",null,"发音：|",o||"none","|"),i.default.createElement("div",null,"中文：",n||"none"),i.default.createElement("div",null,"常用短语：",r||"none"),i.default.createElement("div",null,"例句：",a||"none"),i.default.createElement("div",null,"例句翻译：",l||"none")))))}}]),t}(i.default.PureComponent);t.default=c},728:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(a(11)),l=m(a(4)),r=m(a(10)),o=m(a(3)),s=m(a(5)),i=m(a(1)),u=a(15),d=m(a(727)),c=m(a(62)),f=m(a(724));function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props.words;return i.default.createElement("div",{className:"container"},0===e.length?i.default.createElement(c.default,{info:"You do not have unknown words, congratulations!"}):e.map(function(e){return i.default.createElement("div",{className:f.default.oneItem,key:e.word},i.default.createElement(d.default,e))}))}}]),t}(i.default.PureComponent);t.default=(0,u.connect)(function(e){return{words:e.EnglishArticle.wordsTranslates}})(p)},729:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=void 0;var n,l=a(728),r=(n=l)&&n.__esModule?n:{default:n};t.view=r.default},730:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2CcjmLdkc9Sq9Qb42AJFJN{font-size:16px;line-height:30px}",""]),t.locals={content:"_2CcjmLdkc9Sq9Qb42AJFJN"}},731:function(e,t,a){var n=a(730);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,l);n.locals&&(e.exports=n.locals)},732:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=v(a(2)),l=v(a(11)),r=v(a(4)),o=v(a(10)),s=v(a(3)),i=v(a(5)),u=v(a(1)),d=a(15),c=a(14),f=v(a(731)),m=a(600),p=v(a(282)),h=(v(a(62)),a(72));function v(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(){var e,a,n,o;(0,r.default)(this,t);for(var i=arguments.length,u=Array(i),d=0;d<i;d++)u[d]=arguments[d];return a=n=(0,s.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(u))),n.loadWordRate=function(){n.props.loadPortContent({url:"/api/eng_getWordRate",body:{username:n.props.username,articleId:n.props.articleId}})},n.loadArticleWordRate=function(){n.props.loadPortContent2({url:"/api/eng_getArticleWordRate",body:{articleId:n.props.articleId}})},o=a,(0,s.default)(n,o)}return(0,i.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.loadWordRate(),this.loadArticleWordRate()}},{key:"render",value:function(){var e=this.props,t=e.wordCount,a=e.choosedWordCount,n=e.allWordCount,l=e.wordRate,r=e.articleWordRate;return console.log(r),u.default.createElement("div",{className:"container"},u.default.createElement("div",null,void 0==l?null:u.default.createElement("div",{style:{"padding-top":"5px"}},u.default.createElement("p",{className:f.default.content},"本课难度：","easy"==l.level?u.default.createElement("span",null,u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star-outline",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star-outline",style:{color:"#71b6f9","font-size":"20px"}})):"medium"==l.level?u.default.createElement("span",null,u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star-outline",style:{color:"#71b6f9","font-size":"20px"}})):u.default.createElement("span",null,u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}),u.default.createElement("div",{className:"zmdi zmdi-star",style:{color:"#71b6f9","font-size":"20px"}}))),u.default.createElement("p",{className:f.default.content},"本课总单词数：",n),u.default.createElement("p",{className:f.default.content},"本课不重复的单词数：",t),u.default.createElement("p",{className:f.default.content},"本课生词（不认识）数：",a),u.default.createElement("p",{className:f.default.content},"生词数占比：",(a/t*100).toFixed(1),"%"),u.default.createElement("p",{className:f.default.content},"生词及全文单词在各单词库占比："),u.default.createElement("table",{className:"table table-striped m-0",align:"center"},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"单词库"),u.default.createElement("th",null,"生词占比"),u.default.createElement("th",null,"全文占比"))),u.default.createElement("tbody",null,u.default.createElement("tr",null,u.default.createElement("th",null,"中考"),u.default.createElement("th",null,(100*parseFloat(l.zhongkao_rate)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.zhongkao)).toFixed(1),"%")),u.default.createElement("tr",null,u.default.createElement("th",null,"高考"),u.default.createElement("th",null,(100*parseFloat(l.gaokao)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.gaokao)).toFixed(1),"%")),u.default.createElement("tr",null,u.default.createElement("th",null,"四级"),u.default.createElement("th",null,(100*parseFloat(l.siji)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.siji)).toFixed(1),"%")),u.default.createElement("tr",null,u.default.createElement("th",null,"六级"),u.default.createElement("th",null,(100*parseFloat(l.liuji)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.liuji)).toFixed(1),"%")),u.default.createElement("tr",null,u.default.createElement("th",null,"考研"),u.default.createElement("th",null,(100*parseFloat(l.kaoyan)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.kaoyan)).toFixed(1),"%")),u.default.createElement("tr",null,u.default.createElement("th",null,"超纲"),u.default.createElement("th",null,(100*parseFloat(l.chaogang)).toFixed(1),"%"),u.default.createElement("th",null,(100*parseFloat(r.chaogang)).toFixed(1),"%")))),u.default.createElement("br",null))))}}]),t}(u.default.PureComponent),g=function(e){for(var t=[],a=0;a<e.length;a++)for(var n=0;n<e[a].length;n++)for(var l=0;l<e[a][n].length;l++)t.push(e[a][n][l]);return t},x=(0,m.createSelector)(g,function(e){for(var t=new p.default,a=0;a<e.length;a++)t.insert(e[a]);return t}),y=(0,m.createSelector)(x,function(e){return e.root.count});t.default=(0,d.connect)(function(e){return{allWordCount:g(e.EnglishArticle.paragraphedWords).length,wordCount:y(e.EnglishArticle.paragraphedWords),choosedWordCount:e.EnglishArticle.choosedWords.root.count,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,wordRate:e.PortTest.content,articleWordRate:e.PortTest.content2}},function(e){return(0,n.default)({},(0,c.bindActionCreators)(h.actions,e))})(E)},733:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=void 0;var n,l=a(732),r=(n=l)&&n.__esModule?n:{default:n};t.view=r.default},734:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2lIFl5fh-pzNfBA6vqSFCI{font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._1siY0Dhoi5nQGhDPmWbdU3{float:right;margin-right:10px}",""]),t.locals={HUD:"_2lIFl5fh-pzNfBA6vqSFCI",controlPane:"_1siY0Dhoi5nQGhDPmWbdU3"}},735:function(e,t,a){var n=a(734);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,l);n.locals&&(e.exports=n.locals)}}]);