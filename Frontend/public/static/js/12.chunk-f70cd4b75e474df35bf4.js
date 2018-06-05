/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6],{584:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(2)),l=i(n(1)),r=i(n(573)),o=n(145);function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)(function(e){return l.default.createElement(o.view,(0,a.default)({},e,{onCancel:function(){e.onCancel(),e.closeWindow()},onSuccess:function(){e.onSuccess(),e.closeWindow()}}))})},606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=P(n(2)),l=P(n(579)),r=P(n(11)),o=P(n(4)),i=P(n(10)),s=P(n(3)),u=P(n(5)),d=P(n(1)),c=n(16),f=n(15),p=n(257),m=P(n(696)),h=(P(n(27)),P(n(50))),v=P(n(148)),g=P(n(256)),_=P(n(253)),E=P(n(255)),y=P(n(254)),b=(P(n(258)),P(n(584)),n(694)),w=n(262),S=n(260),x=n(690),C=n(94),I=n(259),A=P(n(577)),k=(P(n(252)),P(n(251))),M=P(n(143)),j=P(n(144));function P(e){return e&&e.__esModule?e:{default:e}}var N=function(e){function t(e){(0,o.default)(this,t);var n=(0,s.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadQuestions({url:"/api/eng_getQuestion",body:{username:n.props.username,lock:0,article_id:n.props.articleId},parser:function(e){return e.map(function(e){return{questionId:e.questionid,options:e.choice,rightKey:e.key,question:e.question,analysis:e.analysis}})}})},n.nextStep=function(){n.setState({processStep:n.state.processStep+1})},n.confirm=function(){n.nextStep()},n.quit=function(){for(var e=n.props,t=e.unlockAndHide,a=e.questions,l=e.hideAllTranslate,r=0;r<a.length;r++)t(a[r].questionId);l(),n.props.setLearningType("英语主页面")},n.doMore=function(){for(var e=n.props,t=e.unlockAndHide,a=e.questions,l=e.hideAllTranslate,r=0;r<a.length;r++)t(a[r].questionId);l(),n.setState({processStep:0,displayByWords:!0}),n.props.setLearningType("英语生词难句")},n.submitQuestions=function(){var e=n.props,t=e.username,a=e.questions,l=e.articleId,r=e.submitQuestionState,o=e.submiting,i=e.lockAndShow,s=r.resolved;if(!o){for(var u="",d=0;d<a.length;d++)a[d].choosed!==a[d].rightKey&&(u+=a[d].questionId+" ");if(n.props.submitQuestions({url:"/api/eng_recordWrongQuestion",body:{username:t,article_id:l.toString(),wrong_question_ids:u,time:s+1}}),0==(s+1&1))for(d=0;d<a.length;d++)i(a[d].questionId)}},n.function=function(){n.props.loadPortContent({url:"/api/eng_getUnit",body:{username:n.props.username}})},n.actions=[n.submitQuestions,e.translateWords,function(){n.confirm(),n.setState({displayByWords:!1})},function(){e.translateSentences(),n.confirm()},function(){e.hideTranslate(),n.confirm()},n.submitQuestions,[n.confirm,e.translateAll],[n.quit,n.doMore]],n.texts=["提交答案","翻译生词","下一步","翻译难句","下一步","提交答案",["查看统计","翻译全文"],["结束","进入生词难句"]],n.describes=["阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案","确认自己不明白的单词，确认全部点击后，提交系统，等待翻译","请阅读生词解释","选择自己不理解的句子，点击，提交系统，等待翻译","请阅读难句解释","再次完成试题，如果觉得刚才选的有误，可修改答案，点击确认后，查看正确答案和解析","请仔细阅读正确答案和解析，如需查看全文翻译，请点击翻译全文按钮，否则请点击查看统计","想做更多吗？"],n.state={processStep:0,displayByWords:!0},n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.loadContent(),this.loadQuestions(),this.function()}},{key:"render",value:function(){var e,t=this,n=this.state.processStep,a=this.props,r=a.translateWordsState,o=(a.submitQuestionState,a.loadQuestionState),i=a.translateWords,s=(a.translateSentences,a.loadArticleState),u=a.loadContent,c=a.UnitAndCourse,f=(a.setLearningType,a.learningType,a.ined),C=this.state.displayByWords,I="",k=[],M=[];if(Array.isArray(this.texts[n])){var j=(0,l.default)(this.actions[n]);e=j[0],k=j.slice(1);var P=(0,l.default)(this.texts[n]);I=P[0],M=P.slice(1),e={action:e,text:I},k=(0,A.default)({action:k,text:M})}else e={action:this.actions[n],text:this.texts[n]};return console.log(this.props.articleId),d.default.createElement(d.default.Fragment,null,d.default.createElement(p.Prompt,{when:0!==n&&n!==this.actions.length-1,message:"你需要再做一遍，确定退出吗?"}),d.default.createElement("div",{className:m.default.HUD},"[Unit ",c.unit," Course ",c.course,"] Step ",n+1,": ",this.describes[n]),d.default.createElement("div",{className:m.default.wrapper},d.default.createElement("div",{className:m.default.leftPane},d.default.createElement(g.default,{loading:s.pending,wasLoaded:s.resolved,lastFailed:s.lastFailed,reloader:u,center:!0},d.default.createElement(_.default,{play:f},d.default.createElement(S.view,{displayByWords:C})))),d.default.createElement("div",{className:m.default.rightPane},function(){switch(n){case 0:case 5:case 6:return d.default.createElement(g.default,{loading:o.pending,wasLoaded:o.resolved,lastFailed:o.lastFailed,reloader:t.loadQuestions,center:!0},d.default.createElement(E.default,{play:f},d.default.createElement(w.view,{submiter:t.submitQuestions,loader:t.loadQuestions})));case 1:return d.default.createElement("div",{className:"container"},d.default.createElement("div",{className:"makeLoadingCenter"},d.default.createElement(g.default,{center:!0,loading:r.pending,lastFailed:r.lastFailed,wasLoaded:r.resolved,reloader:i,info:"点击不认识的单词"})));case 2:case 4:return d.default.createElement(x.view,null);case 3:return d.default.createElement(h.default,{info:"点击不理解的句子"});case 7:return d.default.createElement(b.view,null)}}())),d.default.createElement("div",{className:m.default.controlPane},d.default.createElement(y.default,{play:f},d.default.createElement(v.default,{mainAction:e,additionalActions:k}))))}}]),t}(d.default.PureComponent);t.default=(0,j.default)([(0,k.default)({submitQuestionState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}},translateWordsState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}}}),M.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,showSentencesTranslates:e.EnglishArticle.showSentencesTranslates,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,loadArticleState:e.EnglishArticle.loadState,translateWordsState:e.EnglishArticle.translateWordsState,articleId:e.EnglishArticle.articleId,UnitAndCourse:e.PortTest.content,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,f.bindActionCreators)(w.actions,e),(0,f.bindActionCreators)(S.actions,e),(0,f.bindActionCreators)(C.actions,e),(0,f.bindActionCreators)(I.actions,e))})],N)},684:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2OgU-ZcrYjDbe-s18Swiut{margin-bottom:20px;padding-bottom:10px;padding-left:4px;border-bottom:2px solid #d3d3d3}",""]),t.locals={oneItem:"_2OgU-ZcrYjDbe-s18Swiut"}},685:function(e,t,n){var a=n(684);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},686:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._16tTVG8O1DKb39h7ZlHfxj{font-size:22px;padding-left:1em;background-color:#000;color:#96d6de}.UeaKkuV7u2-PmZL_Dec4o{font-size:24px;font-weight:700;font-style:italic}._1r4HwCacOICNC1rNL00I-J,._2enePVoD-Mp6yv49Izd6dt,._3zjSAK2z3ndrDrb8a5lkBj,._8XyKrDCyTej038nsNiuS3{padding-left:2em;background-color:#96d6de;color:#000}",""]),t.locals={label:"_16tTVG8O1DKb39h7ZlHfxj",word:"UeaKkuV7u2-PmZL_Dec4o",example:"_3zjSAK2z3ndrDrb8a5lkBj",translate:"_1r4HwCacOICNC1rNL00I-J",exampleTranslate:"_8XyKrDCyTej038nsNiuS3",expression:"_2enePVoD-Mp6yv49Izd6dt"}},687:function(e,t,n){var a=n(686);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},688:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(11)),l=d(n(4)),r=d(n(10)),o=d(n(3)),i=d(n(5)),s=d(n(1)),u=d(n(687));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.word,n=e.example,a=e.translate,l=e.exampleTranslate,r=e.expression,o=e.pronouncation;return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:u.default.word},t," |",o||"none","|"),s.default.createElement("div",{className:u.default.label},"Meaning:"),s.default.createElement("div",{className:u.default.translate},a||"none"),s.default.createElement("div",{className:u.default.label},"Example:"),s.default.createElement("div",{className:u.default.example},n||"none"),s.default.createElement("div",{className:u.default.label},"Meaning:"),s.default.createElement("div",{className:u.default.exampleTranslate},l||"none"),s.default.createElement("div",{className:u.default.label},"RegularExpression:"),s.default.createElement("div",{className:u.default.expression},r||"none"))}}]),t}(s.default.PureComponent);t.default=c},689:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(n(11)),l=p(n(4)),r=p(n(10)),o=p(n(3)),i=p(n(5)),s=p(n(1)),u=n(16),d=p(n(688)),c=p(n(50)),f=p(n(685));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props.words;return s.default.createElement("div",{className:"container"},0===e.length?s.default.createElement(c.default,{info:"You do not have unknown words, congratulations!"}):e.map(function(e){return s.default.createElement("div",{className:f.default.oneItem,key:e.word},s.default.createElement(d.default,e))}))}}]),t}(s.default.PureComponent);t.default=(0,u.connect)(function(e){return{words:e.EnglishArticle.wordsTranslates}})(m)},690:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=void 0;var a,l=n(689),r=(a=l)&&a.__esModule?a:{default:a};t.view=r.default},691:function(e,t,n){(e.exports=n(13)(!1)).push([e.i,"",""])},692:function(e,t,n){var a=n(691);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},693:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(n(2)),l=h(n(11)),r=h(n(4)),o=h(n(10)),i=h(n(3)),s=h(n(5)),u=h(n(1)),d=n(16),c=n(15),f=(h(n(692)),n(578)),p=h(n(274)),m=(h(n(50)),n(94));function h(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){var e,n,a,o;(0,r.default)(this,t);for(var s=arguments.length,u=Array(s),d=0;d<s;d++)u[d]=arguments[d];return n=a=(0,i.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(u))),a.function=function(){a.props.loadPortContent({url:"/api/eng_getWordRate",body:{username:a.props.username,articleId:a.props.articleId}})},o=n,(0,i.default)(a,o)}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.function()}},{key:"render",value:function(){var e=this.props,t=e.wordCount,n=e.choosedWordCount,a=e.allWordCount,l=e.content;return console.log(l),u.default.createElement("div",{className:"container"},u.default.createElement("div",null,void 0==l?null:u.default.createElement("div",null,u.default.createElement("p",null,"本课难度：",l.level),u.default.createElement("p",null,"本课总单词数：",a),u.default.createElement("p",null,"本课不重复的单词数：",t),u.default.createElement("p",null,"本课不认识的单词数：",n),u.default.createElement("p",null,"不认识的单词数占比：",100*(n/t).toFixed(3),"%"),u.default.createElement("p",null,"不认识的单词数在各单词库占比"),u.default.createElement("table",{border:"1",align:"center"},u.default.createElement("tr",null,u.default.createElement("th",null,"中考"),u.default.createElement("th",null,l.zhongkao_rate)),u.default.createElement("tr",null,u.default.createElement("th",null,"高考"),u.default.createElement("th",null,l.gaokao)),u.default.createElement("tr",null,u.default.createElement("th",null,"四级"),u.default.createElement("th",null,l.siji)),u.default.createElement("tr",null,u.default.createElement("th",null,"六级"),u.default.createElement("th",null,l.liuji)),u.default.createElement("tr",null,u.default.createElement("th",null,"考研"),u.default.createElement("th",null,l.kaoyan)),u.default.createElement("tr",null,u.default.createElement("th",null,"超纲"),u.default.createElement("th",null,l.chaogang))),u.default.createElement("br",null))))}}]),t}(u.default.PureComponent),g=function(e){for(var t=[],n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)for(var l=0;l<e[n][a].length;l++)t.push(e[n][a][l]);return t},_=(0,f.createSelector)(g,function(e){for(var t=new p.default,n=0;n<e.length;n++)t.insert(e[n]);return t}),E=(0,f.createSelector)(_,function(e){return e.root.count});t.default=(0,d.connect)(function(e){return{allWordCount:g(e.EnglishArticle.paragraphedWords).length,wordCount:E(e.EnglishArticle.paragraphedWords),choosedWordCount:e.EnglishArticle.choosedWords.root.count,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,content:e.PortTest.content}},function(e){return(0,a.default)({},(0,c.bindActionCreators)(m.actions,e))})(v)},694:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=void 0;var a,l=n(693),r=(a=l)&&a.__esModule?a:{default:a};t.view=r.default},695:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2lIFl5fh-pzNfBA6vqSFCI{display:flex;height:5%;width:100%;background-color:#282c34;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._1B626kxwVHOvML1heuQS0I{width:100%;height:95%;display:flex;flex-direction:row}._1B626kxwVHOvML1heuQS0I ._3mLpIrkUBb9jY_vjJS0iei{width:30%;margin-right:1%;overflow-y:scroll}._1B626kxwVHOvML1heuQS0I ._256veLC127p9f056CMTsjz{width:68%;border-right:2px dashed #000;margin-right:1%;overflow-y:scroll}._1siY0Dhoi5nQGhDPmWbdU3{position:absolute;bottom:0;width:100%;height:5%}",""]),t.locals={HUD:"_2lIFl5fh-pzNfBA6vqSFCI",wrapper:"_1B626kxwVHOvML1heuQS0I",rightPane:"_3mLpIrkUBb9jY_vjJS0iei",leftPane:"_256veLC127p9f056CMTsjz",controlPane:"_1siY0Dhoi5nQGhDPmWbdU3"}},696:function(e,t,n){var a=n(695);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)}}]);