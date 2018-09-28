/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22,6,14,21],{628:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=m(a(11)),n=m(a(4)),r=m(a(10)),s=m(a(3)),u=m(a(5)),c=m(a(1)),i=a(15),o=(a(14),a(268),m(a(661)),a(149),m(a(267)),m(a(265)),m(a(146))),d=m(a(147));function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){return(0,n.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.username;return t.logined&&sessionStorage.setItem("user",a),c.default.createElement("div",{className:"smallscreen"},c.default.createElement("div",{className:"account-pages"}),c.default.createElement("div",{className:"clearfix"}),c.default.createElement("div",{className:"wrapper-page"},c.default.createElement("div",{className:"text-center"},c.default.createElement("a",{href:"index.html",className:"logo"},c.default.createElement("span",null,"Learning",c.default.createElement("span",null,"System"))),c.default.createElement("h5",{className:"text-muted m-t-0 font-600"},"Welcome to login")),c.default.createElement("div",{className:"m-t-40 card-box"},c.default.createElement("div",{className:"text-center"},c.default.createElement("h4",{className:"text-uppercase font-bold m-b-0"},"Sign In")),c.default.createElement("div",{className:"panel-body"},c.default.createElement("form",{className:"form-horizontal m-t-20",action:"index.html"},c.default.createElement("div",{className:"form-group "},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("input",{className:"form-control",type:"text",required:"",placeholder:"Username"}))),c.default.createElement("div",{className:"form-group"},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("input",{className:"form-control",type:"password",required:"",placeholder:"Password"}))),c.default.createElement("div",{className:"form-group "},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("div",{className:"checkbox checkbox-custom"},c.default.createElement("input",{id:"checkbox-signup",type:"checkbox"}),c.default.createElement("label",{htmlFor:"checkbox-signup"},"Remember me")))),c.default.createElement("div",{className:"form-group text-center m-t-30"},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("button",{className:"btn btn-custom btn-bordred btn-block waves-effect waves-light",type:"submit",onClick:function(){return e.log()}},"Log In"))),c.default.createElement("div",{className:"form-group m-t-30 m-b-0"},c.default.createElement("div",{className:"col-sm-12"},c.default.createElement("a",{href:"page-recoverpw.html",className:"text-muted"},c.default.createElement("i",{className:"fa fa-lock m-r-5"})," Forgot your password?")))))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-12 text-center"},c.default.createElement("p",{className:"text-muted"},"Don't have an account? ",c.default.createElement("a",{href:"/signup",className:"text-primary m-l-5"},c.default.createElement("b",null,"Sign Up")))))))}}]),t}(c.default.PureComponent);t.default=(0,d.default)([o.default,(0,i.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name}},function(e){return{}})],f)},643:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._3XbOGZCj0bsh1WBtBO9088{font-size:22px;text-align:center;color:#188ae2}._2Tbbgx3NkqPtwMp70sK6z7{font-size:18px;margin:10px 0}._2Tbbgx3NkqPtwMp70sK6z7,.VbX2mUL2rSRVH9_OZGnh5{color:#505458;font-family:Karla,sans-serif}._2KlptdGxyqEfTu1WwnvpSp{font-size:15px;color:#71b6f9}.TpqRr-w5tXsYydIew91X4{position:relative;left:5%;width:90%}.orW1tM4MOnFuqJvSE6wMn{float:right;margin-right:20px}._1Ho-0GxSo5EMqDJhi1iCxE{position:relative;left:15%}._3-ZbqCWhkDxN0fF6Jgheyw{font-size:13px;color:#98a6ad!important;height:84px;-webkit-line-clamp:4;margin-bottom:30px}._3-ZbqCWhkDxN0fF6Jgheyw,._9IYX6NiGXHdY4zuzf8WCu{overflow:hidden;text-overflow:ellipsis;word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical}._9IYX6NiGXHdY4zuzf8WCu{padding:20px;box-shadow:0 0 8px 0 rgba(0,0,0,.06),0 1px 0 0 rgba(0,0,0,.02);-webkit-border-radius:5px;border-radius:5px;-moz-border-radius:5px;background-clip:padding-box;margin-bottom:20px;background-color:#fff;margin:10px 0;height:150px;-webkit-line-clamp:3;margin-bottom:10px}.wbbRxy4Bahm3d0TLqJSvU{font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}",""]),t.locals={title:"_3XbOGZCj0bsh1WBtBO9088",title18:"_2Tbbgx3NkqPtwMp70sK6z7",title16:"VbX2mUL2rSRVH9_OZGnh5",title15:"_2KlptdGxyqEfTu1WwnvpSp",wordandsentence:"TpqRr-w5tXsYydIew91X4",buttonright:"orW1tM4MOnFuqJvSE6wMn",buttons:"_1Ho-0GxSo5EMqDJhi1iCxE",text_muted2:"_3-ZbqCWhkDxN0fF6Jgheyw",cardboxfix:"_9IYX6NiGXHdY4zuzf8WCu",HUD:"wbbRxy4Bahm3d0TLqJSvU"}},644:function(e,t,a){var l=a(643);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=k(a(2)),n=k(a(626)),r=k(a(11)),s=k(a(4)),u=k(a(10)),c=k(a(3)),i=k(a(5)),o=k(a(1)),d=a(15),m=a(14),f=(a(268),k(a(644))),p=k(a(637)),E=k(a(153)),v=k(a(625)),b=(k(a(275)),k(a(273)),k(a(269)),k(a(272)),k(a(274)),k(a(636)),k(a(267)),k(a(265))),h=k(a(146)),g=k(a(147)),w=a(71),N=a(271),x=a(283),y=a(270),S=k(a(638)),_=a(266),T=a(148);function k(e){return e&&e.__esModule?e:{default:e}}var C=function(e){function t(e){(0,s.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));a.loadReviewList=function(){a.props.loadReviewList({url:"/api/eng_getReviewList",body:{username:a.props.username}})},a.changeButtonId=function(e,t){return-1==e?t:-1},a.getHardWord=function(e){a.props.loadHardWord({url:"/api/eng_getCoreWord",body:{articleId:e}})},a.getHardSentence=function(e){a.props.loadHardSentence({url:"/api/eng_engToCh",body:{articleId:e}})},a.nextStep=function(){a.setState({processStep:a.state.processStep+1})},a.getArticle=function(e){a.props.loadContent({body:{username:a.props.username,articleId:e,lock:1}})},a.loadQuestions=function(){a.props.loadQuestions({url:"/api/eng_getQuestion",body:{username:a.props.username,lock:0,article_id:a.props.articleId},parser:function(e){return e.map(function(e){return{questionId:e.questionid,options:e.choice,rightKey:e.key,question:e.question,analysis:e.analysis}})}})},a.submitQuestions=function(){var e=a.props,t=e.username,l=e.questions,n=e.articleId,r=e.submitQuestionState,s=e.submiting,u=e.lockAndShow,c=r.resolved;if(!s){for(var i="",o=0;o<l.length;o++)l[o].choosed!==l[o].rightKey&&(i+=l[o].questionId+" ");a.props.submitQuestions({url:"/api/eng_recordWrongQuestion",body:{username:t,article_id:n.toString(),wrong_question_ids:i,time:c+1}});for(o=0;o<l.length;o++)u(l[o].questionId)}},a.actions=[[a.submitQuestions,function(){return a.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}],[a.props.translateAll,function(){return a.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}]],a.texts=[["提交答案","返回列表页面"],["翻译全文","返回列表页面"]],a.describes=["阅读文章，并在右侧点击认为相对正确的题目答案","请仔细阅读正确答案和解析，如需查看全文翻译，请点击翻译全文按钮"],a.state={showButton:-1,showReviewList:!0,showWordAndSentence:!1,showArticle:!1,courseSelect:-1,processStep:0};var l=a.props;l.setLearningType,l.learningType;return a}return(0,i.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.loadReviewList()}},{key:"render",value:function(){var e,t=this,a=this.props,l=a.reviewlist,r=a.hardword,s=a.hardsentence,u=(a.setLearningType,a.learningType),c=this.state,i=(c.showButton,c.showReviewList),d=c.showWordAndSentence,m=c.showArticle,b=(c.courseSelect,c.processStep),h="",g=[],w=[];if(Array.isArray(this.texts[b])){var x=(0,n.default)(this.actions[b]);e=x[0],g=x.slice(1);var _=(0,n.default)(this.texts[b]);h=_[0],w=_.slice(1),e={action:e,text:h},g=(0,v.default)({action:g,text:w})}else e={action:this.actions[b],text:this.texts[b]};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",null,1==i?o.default.createElement("div",null,"英语进入学习"==u?o.default.createElement(S.default,null):o.default.createElement("div",null,"string"==typeof l?null:o.default.createElement("div",null,0==l.length?o.default.createElement(p.default,{info:"您目前还没有学习完成的章节，请先进行学习 !",onClick:function(){return t.props.setSubjectFunctionSelect(1)}}):l.map(function(e,a){return o.default.createElement("div",{key:a,className:"col-md-4"},o.default.createElement("div",{className:"card-box kanban-box"},o.default.createElement("div",{className:"kanban-detail"},o.default.createElement("span",{className:"label label-primary pull-right"},"Finished"),o.default.createElement("div",{className:f.default.title18},"Unit",e.unit," Course",e.course),o.default.createElement("ul",{className:"list-inline m-b-0"},o.default.createElement("li",null,o.default.createElement("br",null),o.default.createElement("button",{className:"btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5",onClick:function(){t.setState({showReviewList:!1,showWordAndSentence:!0,showArticle:!1}),t.getHardWord(e.articleid),t.getHardSentence(e.articleid)}},"查看核心词汇、重点句"),"      ",o.default.createElement("button",{className:"btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t.setState({showReviewList:!1,showWordAndSentence:!1,showArticle:!0,processStep:0}),t.getArticle(e.articleid),t.loadQuestions(),t.props.hideAllTranslate()}},"查看阅读文章"))))))})))):1==d?o.default.createElement("div",null,o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:f.default.title},"核心词汇"),o.default.createElement("br",null),0==r.length?null:r.map(function(e,t){return o.default.createElement("div",{key:t,className:"col-md-3"},o.default.createElement("div",{className:f.default.cardboxfix},o.default.createElement("div",{className:"kanban-detail"},o.default.createElement("span",{className:"label label-primary pull-right"},"Word"),o.default.createElement("p",{className:f.default.title18},e.word),o.default.createElement("ul",{className:"list-inline m-b-0"},o.default.createElement("li",null,o.default.createElement("p",{className:f.default.title16},e.translate))))))})),o.default.createElement("br",null),o.default.createElement("div",{className:f.default.title},"重点句"),o.default.createElement("br",null),0==s.length?null:s.map(function(e,t){return o.default.createElement("div",{key:t,className:"col-md-12"},o.default.createElement("div",{className:"card-box kanban-box"},o.default.createElement("div",{className:"kanban-detail"},o.default.createElement("span",{className:"label label-primary pull-right"},"Sentence"),o.default.createElement("p",{className:f.default.title18},e.english),o.default.createElement("ul",{className:"list-inline m-b-0"},o.default.createElement("li",null,o.default.createElement("br",null),o.default.createElement("p",{className:f.default.title16},o.default.createElement("strong",null,"翻译："),e.chinese),o.default.createElement("br",null),o.default.createElement("p",{className:f.default.title16},o.default.createElement("strong",null,"解析："),e.analysis),o.default.createElement("br",null))))))}),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:f.default.buttonright},o.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}},"返回列表页面")))):1==m?o.default.createElement("div",null,o.default.createElement("div",{className:f.default.title},"英语文章"),o.default.createElement("br",null),o.default.createElement("div",{className:"col-md-12"},o.default.createElement("div",{className:"card-box kanban-box"},o.default.createElement("div",{className:f.default.HUD},this.describes[b]))),o.default.createElement("div",{className:"col-md-12"},o.default.createElement("div",{className:"col-md-8"},o.default.createElement("div",{className:"card-box kanban-box"},o.default.createElement(N.view,{displayByWords:!0}))),o.default.createElement("div",{className:"col-md-4"},o.default.createElement("div",{className:"card-box kanban-box"},function(){switch(b){case 0:case 1:return o.default.createElement(y.view,{submiter:t.submitQuestions,loader:t.loadQuestions,layoutFormat:"upDown",questionLength:"single",paraLength:"single"})}}())),o.default.createElement("div",{className:f.default.controlPane},o.default.createElement(E.default,{mainAction:e,additionalActions:g}))),o.default.createElement("br",null)):null))}}]),t}(o.default.PureComponent);t.default=(0,g.default)([(0,b.default)({submitQuestionState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}}}),h.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,reviewlist:e.EnglishReviewPort.reviewlist,hardword:e.EnglishReviewPort.hardword,hardsentence:e.EnglishReviewPort.hardsentence,questions:e.SingleOptionQuestions.content,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,showSentencesTranslates:e.EnglishArticle.showSentencesTranslates,loadArticleState:e.EnglishArticle.loadState,translateWordsState:e.EnglishArticle.translateWordsState,choice:e.SubjectFunctionSelect.choice,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,l.default)({},(0,m.bindActionCreators)(N.actions,e),(0,m.bindActionCreators)(w.actions,e),(0,m.bindActionCreators)(x.actions,e),(0,m.bindActionCreators)(y.actions,e),(0,m.bindActionCreators)(_.actions,e),(0,m.bindActionCreators)(T.actions,e))})],C)},647:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=["初中","高中","四级","六级"],a=["basic","mid","advance","extreme"],l=0;l<t.length;l++)if(e==a[l])return t[l];return"初中"}},657:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._3piBAv_NF4yAOw2hGnLgSH{font-size:16px}._1t-yLRT3Y9TezU6HVl0fNn{front-size:12px;color:#98a6ad;position:absolute;right:3.4%}",""]),t.locals={text:"_3piBAv_NF4yAOw2hGnLgSH",textgrey:"_1t-yLRT3Y9TezU6HVl0fNn"}},658:function(e,t,a){var l=a(657);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},659:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=y(a(2)),n=y(a(11)),r=y(a(4)),s=y(a(10)),u=y(a(3)),c=y(a(5)),i=y(a(1)),o=a(15),d=a(14),m=(a(268),y(a(658))),f=(y(a(637)),y(a(636)),y(a(269))),p=(y(a(267)),y(a(265))),E=y(a(146)),v=y(a(147)),b=a(287),h=y(a(638)),g=a(148),w=y(a(647)),N=y(a(646)),x=y(a(642));function y(e){return e&&e.__esModule?e:{default:e}}var S=function(e){function t(e){(0,r.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.loadTest=function(){a.props.loadTestQuestions({url:"/api/eng_wordTest"})},a.recordTestLevel=function(){a.props.recordWordTestLevel({url:"/api/eng_recordWordTest",body:{username:a.props.username,level:a.props.level}})},a.recordTestWords=function(){a.props.recordWordTestWords({url:"/api/eng_recordWordTestWords",body:{username:a.props.username,rightwords:(0,N.default)(a.props.rightwords),wrongwords:(0,N.default)(a.props.wrongwords)}})},a.getUserLevel=function(){a.props.getLevel({url:"/api/eng_getLevel",body:{username:a.props.username}})},a.getUserRate=function(){a.props.getRate({url:"/api/eng_getWordTestRate",body:{username:a.props.username}})},a.state={enterTest:!0,enterLearning:!1,testAgain:!1,newEnterTest:!1,enterTestSure:!1},a}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.getUserLevel(),this.getUserRate(),this.loadTest()}},{key:"componentWillReceiveProps",value:function(e){0==this.props.testend&&1==e.testend&&(this.recordTestLevel(),this.recordTestWords(),this.getUserLevel(),this.getUserRate())}},{key:"render",value:function(){var e=this,t=this.props,a=(t.questions,t.ined),l=(t.forceNext,t.testend),n=(t.level,t.didTest),r=t.didLevel,s=(t.rightwords,t.wrongword,t.rate),u=this.state,c=u.enterLearning,o=u.enterTest,d=u.testAgain,p=u.newEnterTest,E=u.enterTestSure;return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,c?i.default.createElement(h.default,null):o&&n||o&&l||d&&l?i.default.createElement("div",{class:"panel panel-custom panel-border"},i.default.createElement("div",{class:"panel-heading"},i.default.createElement("h3",{class:"panel-title"},"Well Done !")),i.default.createElement("div",{class:"panel-body"},i.default.createElement("div",{className:m.default.text},"恭喜！您已完成词汇测试！您的英语水平为：",i.default.createElement("span",{style:{color:"#188ae2"}},(0,w.default)(r),"水平")),i.default.createElement("div",{className:m.default.text},"平均各类型正确率统计如下："),i.default.createElement("br",null),void 0==s?null:i.default.createElement("table",{className:"table table-bordered m-0",align:"center"},i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"中考"),i.default.createElement("th",null,"高考"),i.default.createElement("th",null,"四级"),i.default.createElement("th",null,"六级"))),i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("th",null,(100*parseFloat(s.zhongkao)).toFixed(1),"%"),i.default.createElement("th",null,(100*parseFloat(s.gaokao)).toFixed(1),"%"),i.default.createElement("th",null,(100*parseFloat(s.siji)).toFixed(1),"%"),i.default.createElement("th",null,(100*parseFloat(s.liuji)).toFixed(1),"%")))),i.default.createElement("br",null),i.default.createElement("div",{className:m.default.text},"请点击左侧的进入学习，开始英语学习吧"),i.default.createElement("br",null),i.default.createElement("div",{className:m.default.text},"如需要重新测试，请点击：",i.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({enterTest:!1,enterLearning:!1,testAgain:!0,enterTestSure:!1}),e.props.forceEnd(),e.loadTest()}},"再测一次"),"      ",i.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({enterTest:!1,enterLearning:!0,testAgain:!1,enterTestSure:!1}),e.props.setSubjectFunctionSelect(1),e.props.forceEnd()}},"进入学习")))):p||d&&!l?i.default.createElement("div",null,E?i.default.createElement("div",null,i.default.createElement(f.default,{play:a},i.default.createElement(b.view,{loader:this.loadTest})),i.default.createElement("div",{className:m.default.textgrey},"测试时间约为2分钟")):i.default.createElement(x.default,{testnum:"约30道",testtime:"2  分钟",onClick:function(){return e.setState({enterTestSure:!0})}})):o&&!n?i.default.createElement("div",{class:"panel panel-custom panel-border"},i.default.createElement("div",{class:"panel-heading"},i.default.createElement("h3",{class:"panel-title"},"Sorry")),i.default.createElement("div",{class:"panel-body"},i.default.createElement("div",{className:m.default.text},"您为新用户，系统还没有您的数据，请点击开始水平测试，完成基础测评"),i.default.createElement("br",null),i.default.createElement("div",{className:m.default.text},"测试时间约为",i.default.createElement("span",null,"2"),"分钟"),i.default.createElement("br",null),i.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){return e.setState({newEnterTest:!0,enterTestSure:!1})}},"开始测试"))):null))}}]),t}(i.default.PureComponent);t.default=(0,v.default)([(0,p.default)({}),E.default,(0,o.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.EnglishWordTest.content,testend:e.EnglishWordTest.testendState,level:e.EnglishWordTest.nowAt.level,didTest:e.EnglishWordTest.recordFlagAndLevel.didTest,didLevel:e.EnglishWordTest.recordFlagAndLevel.level,choice:e.SubjectFunctionSelect.choice,rightwords:e.EnglishWordTest.rightwords,wrongwords:e.EnglishWordTest.wrongwords,rate:e.EnglishWordTest.rate}},function(e){return(0,l.default)({},(0,d.bindActionCreators)(b.actions,e),(0,d.bindActionCreators)(g.actions,e))})],S)},660:function(e,t,a){(e.exports=a(13)(!1)).push([e.i,"",""])},661:function(e,t,a){var l=a(660);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},785:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._32B9luhO2zMewJWXGuVphJ{font-size:16px;line-height:32px}.IFN2pSuiqu7f9Wav3ChPk{font-size:22px;text-align:center;color:#188ae2}._1EI8g1S0oFQHq7mOdj5w6w{color:#71b6f9}.N34Fvdo6-EdR20B3Cc_90{color:red;white-space:nowrap}li{float:none}",""]),t.locals={help:"_32B9luhO2zMewJWXGuVphJ",title:"IFN2pSuiqu7f9Wav3ChPk",part:"_1EI8g1S0oFQHq7mOdj5w6w",strong:"N34Fvdo6-EdR20B3Cc_90"}},786:function(e,t,a){var l=a(785);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},787:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(a(11)),n=o(a(4)),r=o(a(10)),s=o(a(3)),u=o(a(5)),c=o(a(1)),i=o(a(786));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){return(0,n.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return c.default.createElement("div",{className:i.default.help},c.default.createElement("h4",{className:i.default.title}," 英语科目学习指南 "),c.default.createElement("span",{className:i.default.part}," 水平测试 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"首次登录此系统，必须先完成词汇量测试。只有完成词汇量测试，才会有针对性地推荐文章。"),c.default.createElement("li",null,"若不是首次登录，也可以进行词汇量测试。")),c.default.createElement("span",{className:i.default.part}," 进入学习 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案"),c.default.createElement("li",null,"确认自己不明白的单词，确认全部点击后，提交系统，等待翻译"),c.default.createElement("li",null,"选择自己不理解的句子，点击，提交系统，等待翻译"),c.default.createElement("li",null,"再次完成试题，如果觉得第一次做的完全正确，则重新再选一次以确认，如果觉得有误，则可以修改答案"),c.default.createElement("li",null,"点击确认后查看正确答案和解析"),c.default.createElement("li",null,"查看自己点击过的不认识的单词和句子"),c.default.createElement("li",null,"完成写作句型部分"),c.default.createElement("li",null,"阅读一篇课后阅读材料"),c.default.createElement("li",null,"做完阅读后，可选择性地跳过后面的三个模块，",c.default.createElement("strong",null,"提前"),"进行下一个单元的学习")),c.default.createElement("span",{className:i.default.part}," 开始复习 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"显示学过的课程列表。每一课可查看“重点词汇”、“长难句解析”、“全文翻译”、“习题解析”，并可重新做题。")),c.default.createElement("span",{className:i.default.part}," 统计列表 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"显示用户完成情况的统计。目前为用户不认识的词情况统计。")))}}]),t}(c.default.PureComponent);t.default=d},810:function(e,t,a){(e.exports=a(13)(!1)).push([e.i,"",""])},811:function(e,t,a){var l=a(810);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},812:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=x(a(2)),n=x(a(11)),r=x(a(4)),s=x(a(10)),u=x(a(3)),c=x(a(5)),i=x(a(1)),o=a(15),d=a(14),m=(a(268),x(a(811)),x(a(659))),f=x(a(638)),p=x(a(645)),E=x(a(648)),v=x(a(787)),b=(x(a(23)),x(a(72)),x(a(267)),x(a(265)),x(a(146))),h=x(a(147)),g=a(149),w=(x(a(628)),a(279),a(148)),N=a(266);function x(e){return e&&e.__esModule?e:{default:e}}var y=a(277),S=function(e){function t(e){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.props.getUserInfo()}},{key:"render",value:function(){var e=this,t=this.props,a=(t.username,t.logined,t.newTo,t.choice),l=t.learningType;return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{id:"wrapper"},i.default.createElement("div",{className:"topbar"},i.default.createElement("div",{className:"topbar-left"},i.default.createElement("a",{href:"/",className:"logo"},i.default.createElement("span",null,"Learning",i.default.createElement("span",null,"System")),i.default.createElement("i",{className:"zmdi zmdi-layers"}))),i.default.createElement("div",{className:"navbar navbar-default",role:"navigation"},i.default.createElement("div",{className:"container"},i.default.createElement("ul",{className:"nav navbar-nav navbar-left"},i.default.createElement("li",null,i.default.createElement("button",{className:"button-menu-mobile open-left"},i.default.createElement("i",{className:"zmdi zmdi-menu"}))),i.default.createElement("li",null,i.default.createElement("h4",{className:"page-title"},0==a?i.default.createElement("div",null,"英语  > 水平测试"):1==a?i.default.createElement("div",null,i.default.createElement("span",null,"英语  > "),i.default.createElement("span",{onClick:function(){e.props.setLearningType("英语主页面")}},"进入学习"),""==l||"英语主页面"==l?null:"英语生词难句"==l?i.default.createElement("span",{onClick:function(){e.props.setLearningType(l)}}," > 生词难句"):"英语汉译英"==l?i.default.createElement("span",{onClick:function(){e.props.setLearningType(l)}}," > 写作句型练习"):"英语课后阅读材料"==l?i.default.createElement("span",{onClick:function(){e.props.setLearningType(l)}}," > 课后阅读材料"):i.default.createElement("span",{onClick:function(){e.props.setLearningType(l)}}," >  ",l," ")):2==a?i.default.createElement("div",null,"英语  > 开始复习"):3==a?i.default.createElement("div",null,"英语  > 统计图表"):i.default.createElement("div",null,"英语  > 科目帮助"))))))),i.default.createElement("div",{className:"left side-menu"},i.default.createElement("div",{className:"slimScrollDiv"},i.default.createElement("div",{className:"sidebar-inner slimscrollleft"},i.default.createElement("div",{className:"user-box"},i.default.createElement("div",{className:"user-img"},i.default.createElement("img",{src:"/static/images/users/avatar-1.jpg",alt:"user-img",title:this.props.username,className:"img-circle img-thumbnail img-responsive"}),i.default.createElement("div",{className:"user-status offline"},i.default.createElement("i",{className:"zmdi zmdi-dot-circle"}))),i.default.createElement("h5",null,this.props.username),i.default.createElement("ul",{className:"list-inline"},i.default.createElement("li",null,i.default.createElement("a",{className:"text-custom",onClick:function(){confirm("您确定要退出登录吗?")&&(location.href="https://passport.doxue.com/login?redirect_url=39.106.175.128&stamp="+Date.parse(new Date)+"&secret_code="+y("LOGIN_REDIRECT"+Date.parse(new Date)))},href:"javascript:void(0);"},i.default.createElement("i",{className:"zmdi zmdi-power"}))))),i.default.createElement("div",{id:"sidebar-menu"},i.default.createElement("ul",null,i.default.createElement("li",{className:"text-muted menu-title"},"英语"),i.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(0)}},i.default.createElement("a",{className:"waves-effect",style:0==a?{color:"#71b6f9"}:null},i.default.createElement("i",{className:"zmdi zmdi-layers"}),i.default.createElement("span",null," 水平测试 "))),i.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(1)}},i.default.createElement("a",{className:"waves-effect",style:1==a?{color:"#71b6f9"}:null},i.default.createElement("i",{className:"zmdi zmdi-library"}),i.default.createElement("span",null," 进入学习 "))),i.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(2)}},i.default.createElement("a",{className:"waves-effect",style:2==a?{color:"#71b6f9"}:null},i.default.createElement("i",{className:"zmdi zmdi-book"}),i.default.createElement("span",null," 开始复习 "))),i.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(3)}},i.default.createElement("a",{className:"waves-effect",style:3==a?{color:"#71b6f9"}:null},i.default.createElement("i",{className:"zmdi zmdi-chart"}),i.default.createElement("span",null," 统计图表 "))),i.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(4)}},i.default.createElement("a",{className:"waves-effect",style:4==a?{color:"#71b6f9"}:null},i.default.createElement("i",{className:"zmdi  zmdi-pin-help"}),i.default.createElement("span",null," 查看帮助 ")))),i.default.createElement("div",{className:"clearfix"})),i.default.createElement("div",{className:"clearfix"})))),i.default.createElement("div",{className:"content-page"},i.default.createElement("div",{className:"content"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"row"},0==a?i.default.createElement(m.default,null):1==a?i.default.createElement(f.default,null):2==a?i.default.createElement(p.default,null):3==a?i.default.createElement(E.default,null):i.default.createElement("div",{className:"card-box"},i.default.createElement(v.default,null)))),i.default.createElement("footer",{className:"footer text-right"},"2017 - 2018 © 都学网所有")))))}}]),t}(i.default.PureComponent);t.default=(0,h.default)([b.default,(0,o.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,newTo:e.UserManager.newTo,choice:e.SubjectFunctionSelect.choice,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,l.default)({},(0,d.bindActionCreators)(g.actions,e),(0,d.bindActionCreators)(w.actions,e),(0,d.bindActionCreators)(N.actions,e))})],S)}}]);