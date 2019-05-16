/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{723:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=_(a(2)),l=_(a(687)),s=_(a(9)),i=_(a(4)),r=_(a(8)),o=_(a(3)),c=_(a(5)),d=_(a(1)),u=a(16),m=a(14),f=(a(283),_(a(873))),p=_(a(695)),b=_(a(159)),h=_(a(686)),w=(_(a(290)),_(a(288)),_(a(286)),_(a(287)),_(a(289)),_(a(694)),_(a(282)),_(a(151))),v=_(a(150)),g=_(a(98)),E=a(71),x=a(285),S=a(313),y=a(284),N=_(a(700)),k=a(281),A=a(152);function _(e){return e&&e.__esModule?e:{default:e}}var W=function(e){function t(e){(0,i.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));a.loadReviewList=function(){a.props.loadReviewList({url:"/api/eng_getReviewList",body:{username:a.props.username}})},a.changeButtonId=function(e,t){return-1==e?t:-1},a.getHardWord=function(e){a.props.loadHardWord({url:"/api/eng_getCoreWord",body:{articleId:e}})},a.getHardSentence=function(e){a.props.loadHardSentence({url:"/api/eng_engToCh",body:{articleId:e}})},a.nextStep=function(){a.setState({processStep:a.state.processStep+1})},a.getArticle=function(e){a.props.loadContent({body:{username:a.props.username,articleId:e,lock:1}})},a.loadQuestions=function(){a.props.loadQuestions({url:"/api/eng_getQuestion",body:{username:a.props.username,lock:0,article_id:a.props.articleId},parser:function(e){return e.map(function(e){return{questionId:e.questionid,options:e.choice,rightKey:e.key,question:e.question,analysis:e.analysis}})}})},a.submitQuestions=function(){var e=a.props,t=e.username,n=e.questions,l=e.articleId,s=e.submitQuestionState,i=e.submiting,r=e.lockAndShow,o=s.resolved;if(!i){for(var c="",d=0;d<n.length;d++)n[d].choosed!==n[d].rightKey&&(c+=n[d].questionId+" ");a.props.submitQuestions({url:"/api/eng_recordWrongQuestion",body:{username:t,article_id:l.toString(),wrong_question_ids:c,time:o+1}});for(d=0;d<n.length;d++)r(n[d].questionId)}},a.actions=[[a.submitQuestions,function(){return a.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}],[a.props.translateAll,function(){return a.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}]],a.texts=[["提交答案","返回列表页面"],["翻译全文","返回列表页面"]],a.describes=["阅读文章，并在右侧点击认为相对正确的题目答案","请仔细阅读正确答案和解析，如需查看全文翻译，请点击翻译全文按钮"],a.state={showButton:-1,showReviewList:!0,showWordAndSentence:!1,showArticle:!1,courseSelect:-1,processStep:0};var n=a.props;n.setLearningType,n.learningType;return a}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadReviewList()}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.reviewlist,s=a.hardword,i=a.hardsentence,r=(a.setLearningType,a.learningType),o=this.state,c=(o.showButton,o.showReviewList),u=o.showWordAndSentence,m=o.showArticle,w=(o.courseSelect,o.processStep),v="",g=[],E=[];if(Array.isArray(this.texts[w])){var S=(0,l.default)(this.actions[w]);e=S[0],g=S.slice(1);var k=(0,l.default)(this.texts[w]);v=k[0],E=k.slice(1),e={action:e,text:v},g=(0,h.default)({action:g,text:E})}else e={action:this.actions[w],text:this.texts[w]};return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",null,1==c?d.default.createElement("div",null,"英语进入学习"==r?d.default.createElement(N.default,null):d.default.createElement("div",null,"string"==typeof n?null:d.default.createElement("div",null,0==n.length?d.default.createElement(p.default,{info:"您目前还没有学习完成的章节，请先进行学习 !",onClick:function(){return t.props.setSubjectFunctionSelect(1)}}):n.map(function(e,a){return d.default.createElement("div",{key:a,className:"col-md-4"},d.default.createElement("div",{className:"card-box kanban-box"},d.default.createElement("div",{className:"kanban-detail"},d.default.createElement("span",{className:"label label-primary pull-right"},"Finished"),d.default.createElement("div",{className:f.default.title18},"Unit",e.unit," Course",e.course),d.default.createElement("ul",{className:"list-inline m-b-0"},d.default.createElement("li",null,d.default.createElement("br",null),d.default.createElement("button",{className:"btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5",onClick:function(){t.setState({showReviewList:!1,showWordAndSentence:!0,showArticle:!1}),t.getHardWord(e.articleid),t.getHardSentence(e.articleid)}},"查看核心词汇、重点句"),"      ",d.default.createElement("button",{className:"btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t.setState({showReviewList:!1,showWordAndSentence:!1,showArticle:!0,processStep:0}),t.getArticle(e.articleid),t.loadQuestions(),t.props.hideAllTranslate()}},"查看阅读文章"))))))})))):1==u?d.default.createElement("div",null,d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:f.default.title},"核心词汇"),d.default.createElement("br",null),0==s.length?null:s.map(function(e,t){return d.default.createElement("div",{key:t,className:"col-md-3"},d.default.createElement("div",{className:f.default.cardboxfix},d.default.createElement("div",{className:"kanban-detail"},d.default.createElement("span",{className:"label label-primary pull-right"},"Word"),d.default.createElement("p",{className:f.default.title18},e.word),d.default.createElement("ul",{className:"list-inline m-b-0"},d.default.createElement("li",null,d.default.createElement("p",{className:f.default.title16},e.translate))))))})),d.default.createElement("br",null),d.default.createElement("div",{className:f.default.title},"重点句"),d.default.createElement("br",null),0==i.length?null:i.map(function(e,t){return d.default.createElement("div",{key:t,className:"col-md-12"},d.default.createElement("div",{className:"card-box kanban-box"},d.default.createElement("div",{className:"kanban-detail"},d.default.createElement("span",{className:"label label-primary pull-right"},"Sentence"),d.default.createElement("p",{className:f.default.title18},e.english),d.default.createElement("ul",{className:"list-inline m-b-0"},d.default.createElement("li",null,d.default.createElement("br",null),d.default.createElement("p",{className:f.default.title16},d.default.createElement("strong",null,"翻译："),e.chinese),d.default.createElement("br",null),d.default.createElement("p",{className:f.default.title16},d.default.createElement("strong",null,"解析："),e.analysis),d.default.createElement("br",null))))))}),d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:f.default.buttonright},d.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}},"返回列表页面")))):1==m?d.default.createElement("div",null,d.default.createElement("div",{className:f.default.title},"英语文章"),d.default.createElement("br",null),d.default.createElement("div",{className:"col-md-12"},d.default.createElement("div",{className:"card-box kanban-box"},d.default.createElement("div",{className:f.default.HUD},this.describes[w]))),d.default.createElement("div",{className:"col-md-12"},d.default.createElement("div",{className:"col-md-8"},d.default.createElement("div",{className:"card-box kanban-box"},d.default.createElement(x.view,{displayByWords:!0}))),d.default.createElement("div",{className:"col-md-4"},d.default.createElement("div",{className:"card-box kanban-box"},function(){switch(w){case 0:case 1:return d.default.createElement(y.view,{submiter:t.submitQuestions,loader:t.loadQuestions,layoutFormat:"upDown",questionLength:"single",paraLength:"single"})}}())),d.default.createElement("div",{className:f.default.controlPane},d.default.createElement(b.default,{mainAction:e,additionalActions:g}))),d.default.createElement("br",null)):null))}}]),t}(d.default.PureComponent);t.default=(0,g.default)([(0,w.default)({submitQuestionState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}}}),v.default,(0,u.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,reviewlist:e.EnglishReviewPort.reviewlist,hardword:e.EnglishReviewPort.hardword,hardsentence:e.EnglishReviewPort.hardsentence,questions:e.SingleOptionQuestions.content,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,showSentencesTranslates:e.EnglishArticle.showSentencesTranslates,loadArticleState:e.EnglishArticle.loadState,translateWordsState:e.EnglishArticle.translateWordsState,choice:e.SubjectFunctionSelect.choice,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,n.default)({},(0,m.bindActionCreators)(x.actions,e),(0,m.bindActionCreators)(E.actions,e),(0,m.bindActionCreators)(S.actions,e),(0,m.bindActionCreators)(y.actions,e),(0,m.bindActionCreators)(k.actions,e),(0,m.bindActionCreators)(A.actions,e))})],W)},872:function(e,t,a){(t=e.exports=a(11)(!1)).push([e.i,"._3XbOGZCj0bsh1WBtBO9088{font-size:22px;text-align:center;color:#188ae2}._2Tbbgx3NkqPtwMp70sK6z7{font-size:18px;margin:10px 0}._2Tbbgx3NkqPtwMp70sK6z7,.VbX2mUL2rSRVH9_OZGnh5{color:#505458;font-family:Karla,sans-serif}._2KlptdGxyqEfTu1WwnvpSp{font-size:15px;color:#71b6f9}.TpqRr-w5tXsYydIew91X4{position:relative;left:5%;width:90%}.orW1tM4MOnFuqJvSE6wMn{float:right;margin-right:20px}._1Ho-0GxSo5EMqDJhi1iCxE{position:relative;left:15%}._3-ZbqCWhkDxN0fF6Jgheyw{font-size:13px;color:#98a6ad!important;height:84px;-webkit-line-clamp:4;margin-bottom:30px}._3-ZbqCWhkDxN0fF6Jgheyw,._9IYX6NiGXHdY4zuzf8WCu{overflow:hidden;text-overflow:ellipsis;word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical}._9IYX6NiGXHdY4zuzf8WCu{padding:20px;box-shadow:0 0 8px 0 rgba(0,0,0,.06),0 1px 0 0 rgba(0,0,0,.02);-webkit-border-radius:5px;border-radius:5px;-moz-border-radius:5px;background-clip:padding-box;margin-bottom:20px;background-color:#fff;margin:10px 0;height:150px;-webkit-line-clamp:3;margin-bottom:10px}.wbbRxy4Bahm3d0TLqJSvU{font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}",""]),t.locals={title:"_3XbOGZCj0bsh1WBtBO9088",title18:"_2Tbbgx3NkqPtwMp70sK6z7",title16:"VbX2mUL2rSRVH9_OZGnh5",title15:"_2KlptdGxyqEfTu1WwnvpSp",wordandsentence:"TpqRr-w5tXsYydIew91X4",buttonright:"orW1tM4MOnFuqJvSE6wMn",buttons:"_1Ho-0GxSo5EMqDJhi1iCxE",text_muted2:"_3-ZbqCWhkDxN0fF6Jgheyw",cardboxfix:"_9IYX6NiGXHdY4zuzf8WCu",HUD:"wbbRxy4Bahm3d0TLqJSvU"}},873:function(e,t,a){var n=a(872);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(10)(n,l);n.locals&&(e.exports=n.locals)}}]);