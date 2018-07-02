/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{609:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=N(a(2)),l=N(a(584)),s=N(a(11)),i=N(a(4)),r=N(a(10)),o=N(a(3)),d=N(a(5)),c=N(a(1)),u=a(16),m=a(14),f=(a(150),N(a(704))),p=(N(a(23)),N(a(162))),b=N(a(583)),w=(N(a(154)),N(a(152)),N(a(151)),N(a(153)),N(a(155)),N(a(262)),N(a(149)),N(a(148))),h=N(a(96)),v=N(a(97)),g=a(72),E=a(156),x=a(275),S=a(263);function N(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){(0,i.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.loadReviewList=function(){a.props.loadReviewList({url:"/api/eng_getReviewList",body:{username:a.props.username}})},a.changeButtonId=function(e,t){return-1==e?t:-1},a.getHardWord=function(e){a.props.loadHardWord({url:"/api/eng_getCoreWord",body:{articleId:e}})},a.getHardSentence=function(e){a.props.loadHardSentence({url:"/api/eng_engToCh",body:{articleId:e}})},a.nextStep=function(){a.setState({processStep:a.state.processStep+1})},a.getArticle=function(e){a.props.loadContent({body:{username:a.props.username,articleId:e,lock:1}})},a.loadQuestions=function(){a.props.loadQuestions({url:"/api/eng_getQuestion",body:{username:a.props.username,lock:0,article_id:a.props.articleId},parser:function(e){return e.map(function(e){return{questionId:e.questionid,options:e.choice,rightKey:e.key,question:e.question,analysis:e.analysis}})}})},a.submitQuestions=function(){var e=a.props,t=e.username,n=e.questions,l=e.articleId,s=e.submitQuestionState,i=e.submiting,r=e.lockAndShow,o=s.resolved;if(!i){for(var d="",c=0;c<n.length;c++)n[c].choosed!==n[c].rightKey&&(d+=n[c].questionId+" ");a.props.submitQuestions({url:"/api/eng_recordWrongQuestion",body:{username:t,article_id:l.toString(),wrong_question_ids:d,time:o+1}});for(c=0;c<n.length;c++)r(n[c].questionId)}},a.actions=[[a.submitQuestions,function(){return a.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}],[a.props.translateAll,function(){return a.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}]],a.texts=[["提交答案","返回列表页面"],["翻译全文","返回列表页面"]],a.describes=["阅读文章，并在右侧点击认为相对正确的题目答案","请仔细阅读正确答案和解析，如需查看全文翻译，请点击翻译全文按钮"],a.state={showButton:-1,showReviewList:!0,showWordAndSentence:!1,showArticle:!1,courseSelect:-1,processStep:0},a}return(0,d.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadReviewList()}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.reviewlist,s=a.hardword,i=a.hardsentence,r=this.state,o=(r.showButton,r.showReviewList),d=r.showWordAndSentence,u=r.showArticle,m=(r.courseSelect,r.processStep),w="",h=[],v=[];if(Array.isArray(this.texts[m])){var g=(0,l.default)(this.actions[m]);e=g[0],h=g.slice(1);var x=(0,l.default)(this.texts[m]);w=x[0],v=x.slice(1),e={action:e,text:w},h=(0,b.default)({action:h,text:v})}else e={action:this.actions[m],text:this.texts[m]};return console.log(n),c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,1==o?c.default.createElement("div",null,c.default.createElement("div",{className:f.default.title},"复习"),c.default.createElement("br",null),0==n.length?null:n.map(function(e,a){return c.default.createElement("div",{key:a,className:"col-md-4"},c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement("div",{className:"kanban-detail"},c.default.createElement("span",{className:"label label-primary pull-right"},"Finished"),c.default.createElement("div",{className:f.default.title18},"Unit",e.unit," Course",e.course),c.default.createElement("ul",{className:"list-inline m-b-0"},c.default.createElement("li",null,c.default.createElement("br",null),c.default.createElement("button",{className:"btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5",onClick:function(){t.setState({showReviewList:!1,showWordAndSentence:!0,showArticle:!1}),t.getHardWord(e.articleid),t.getHardSentence(e.articleid)}},"查看核心词汇、重点句"),"      ",c.default.createElement("button",{className:"btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t.setState({showReviewList:!1,showWordAndSentence:!1,showArticle:!0,processStep:0}),t.getArticle(e.articleid),t.loadQuestions(),t.props.hideAllTranslate()}},"查看阅读文章"))))))})):1==d?c.default.createElement("div",null,c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:f.default.title},"核心词汇"),c.default.createElement("br",null),0==s.length?null:s.map(function(e,t){return c.default.createElement("div",{key:t,className:"col-md-3"},c.default.createElement("div",{className:f.default.cardboxfix},c.default.createElement("div",{className:"kanban-detail"},c.default.createElement("span",{className:"label label-primary pull-right"},"Word"),c.default.createElement("p",{className:f.default.title18},e.word),c.default.createElement("ul",{className:"list-inline m-b-0"},c.default.createElement("li",null,c.default.createElement("p",{className:f.default.title16},e.translate))))))})),c.default.createElement("br",null),c.default.createElement("div",{className:f.default.title},"重点句"),c.default.createElement("br",null),0==i.length?null:i.map(function(e,t){return c.default.createElement("div",{key:t,className:"col-md-12"},c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement("div",{className:"kanban-detail"},c.default.createElement("span",{className:"label label-primary pull-right"},"Sentence"),c.default.createElement("p",{className:f.default.title18},e.english),c.default.createElement("ul",{className:"list-inline m-b-0"},c.default.createElement("li",null,c.default.createElement("br",null),c.default.createElement("p",{className:f.default.title16},c.default.createElement("strong",null,"翻译："),e.chinese),c.default.createElement("br",null),c.default.createElement("p",{className:f.default.title16},c.default.createElement("strong",null,"解析："),e.analysis),c.default.createElement("br",null))))))}),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:f.default.buttonright},c.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}},"返回列表页面")))):1==u?c.default.createElement("div",null,c.default.createElement("div",{className:f.default.title},"英语文章"),c.default.createElement("br",null),c.default.createElement("div",{className:"col-md-12"},c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement("div",{className:f.default.HUD},this.describes[m]))),c.default.createElement("div",{className:"col-md-12"},c.default.createElement("div",{className:"col-md-8"},c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement(E.view,{displayByWords:!0}))),c.default.createElement("div",{className:"col-md-4"},c.default.createElement("div",{className:"card-box kanban-box"},function(){switch(m){case 0:case 1:return c.default.createElement(S.view,{submiter:t.submitQuestions,loader:t.loadQuestions,layoutFormat:"upDown",questionLength:"single",paraLength:"single"})}}())),c.default.createElement("div",{className:f.default.controlPane},c.default.createElement(p.default,{mainAction:e,additionalActions:h}))),c.default.createElement("br",null)):null))}}]),t}(c.default.PureComponent);t.default=(0,v.default)([(0,w.default)({submitQuestionState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}}}),h.default,(0,u.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,reviewlist:e.EnglishReviewPort.reviewlist,hardword:e.EnglishReviewPort.hardword,hardsentence:e.EnglishReviewPort.hardsentence,questions:e.SingleOptionQuestions.content,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,showSentencesTranslates:e.EnglishArticle.showSentencesTranslates,loadArticleState:e.EnglishArticle.loadState,translateWordsState:e.EnglishArticle.translateWordsState}},function(e){return(0,n.default)({},(0,m.bindActionCreators)(E.actions,e),(0,m.bindActionCreators)(g.actions,e),(0,m.bindActionCreators)(x.actions,e),(0,m.bindActionCreators)(S.actions,e))})],y)},703:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._3XbOGZCj0bsh1WBtBO9088{font-size:22px;text-align:center;color:#188ae2}._2Tbbgx3NkqPtwMp70sK6z7{font-size:18px;margin:10px 0}._2Tbbgx3NkqPtwMp70sK6z7,.VbX2mUL2rSRVH9_OZGnh5{color:#505458;font-family:Karla,sans-serif}._2KlptdGxyqEfTu1WwnvpSp{font-size:15px;color:#71b6f9}.TpqRr-w5tXsYydIew91X4{position:relative;left:5%;width:90%}.orW1tM4MOnFuqJvSE6wMn{float:right;margin-right:20px}._1Ho-0GxSo5EMqDJhi1iCxE{position:relative;left:15%}._3-ZbqCWhkDxN0fF6Jgheyw{font-size:13px;color:#98a6ad!important;height:84px;-webkit-line-clamp:4;margin-bottom:30px}._3-ZbqCWhkDxN0fF6Jgheyw,._9IYX6NiGXHdY4zuzf8WCu{overflow:hidden;text-overflow:ellipsis;word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical}._9IYX6NiGXHdY4zuzf8WCu{padding:20px;box-shadow:0 0 8px 0 rgba(0,0,0,.06),0 1px 0 0 rgba(0,0,0,.02);-webkit-border-radius:5px;border-radius:5px;-moz-border-radius:5px;background-clip:padding-box;margin-bottom:20px;background-color:#fff;margin:10px 0;height:150px;-webkit-line-clamp:3;margin-bottom:10px}.wbbRxy4Bahm3d0TLqJSvU{font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}",""]),t.locals={title:"_3XbOGZCj0bsh1WBtBO9088",title18:"_2Tbbgx3NkqPtwMp70sK6z7",title16:"VbX2mUL2rSRVH9_OZGnh5",title15:"_2KlptdGxyqEfTu1WwnvpSp",wordandsentence:"TpqRr-w5tXsYydIew91X4",buttonright:"orW1tM4MOnFuqJvSE6wMn",buttons:"_1Ho-0GxSo5EMqDJhi1iCxE",text_muted2:"_3-ZbqCWhkDxN0fF6Jgheyw",cardboxfix:"_9IYX6NiGXHdY4zuzf8WCu",HUD:"wbbRxy4Bahm3d0TLqJSvU"}},704:function(e,t,a){var n=a(703);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,l);n.locals&&(e.exports=n.locals)}}]);