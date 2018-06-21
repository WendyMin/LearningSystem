/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{593:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=v(a(2)),n=v(a(11)),r=v(a(4)),s=v(a(10)),i=v(a(3)),o=v(a(5)),c=v(a(1)),d=a(16),u=a(15),m=(a(547),v(a(646))),f=(v(a(27)),v(a(564)),v(a(562)),v(a(561)),v(a(563)),v(a(566)),a(247)),b=(v(a(565)),v(a(546)),v(a(545))),p=v(a(244)),w=v(a(245)),h=a(141);function v(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(e){(0,r.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.loadReviewList=function(){a.props.loadPortContent({url:"/api/eng_getReviewList",body:{username:a.props.username}})},a.changeButtonId=function(e,t){return-1==e?t:-1},a.getHardWord=function(e){a.props.loadPortContent2({url:"/api/eng_getCoreWord",body:{articleId:e}})},a.getHardSentence=function(e){a.props.loadPortContent3({url:"/api/eng_engToCh",body:{articleId:e}})},a.getArticle=function(e){a.props.loadPortContent4({url:"/api/eng_getSentence",body:{username:a.props.username,lock:1,articleId:e}})},a.state={showButton:-1,showReviewList:!0,showWordAndSentence:!1,showArticle:!1,courseSelect:-1},a}return(0,o.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.loadReviewList()}},{key:"render",value:function(){var e=this,t=this.props,a=t.reviewlist,l=t.hardword,n=t.hardsentence,r=(t.article,this.state),s=(r.showButton,r.showReviewList),i=r.showWordAndSentence,o=r.showArticle;r.courseSelect;return console.log(a),c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,1==s?c.default.createElement("div",null,c.default.createElement("div",{className:m.default.title},"复习"),c.default.createElement("br",null),0===a.length?null:a.map(function(t,a){return c.default.createElement("div",{key:a,className:"col-md-4"},c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement("div",{className:"kanban-detail"},c.default.createElement("span",{className:"label label-primary pull-right"},"Finished"),c.default.createElement("div",{className:m.default.title18},"Unit",t.unit," Course",t.course),c.default.createElement("ul",{className:"list-inline m-b-0"},c.default.createElement("li",null,c.default.createElement("br",null),c.default.createElement("button",{className:"btn btn-success btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-success btn-trans waves-effect w-md waves-success m-b-5",onClick:function(){e.setState({showReviewList:!1,showWordAndSentence:!0,showArticle:!1}),e.getHardWord(t.articleid),e.getHardSentence(t.articleid)}},"查看核心词汇、重点句"),"      ",c.default.createElement("button",{className:"btn btn-primary btn-sm waves-effect waves-primary w-md waves-success m-b-5 btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({showReviewList:!1,showWordAndSentence:!1,showArticle:!0}),e.getArticle(t.articleid)}},"查看阅读文章"))))))})):1==i?c.default.createElement("div",null,c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:m.default.title},"核心词汇"),c.default.createElement("br",null),0==l.length?null:l.map(function(e,t){return c.default.createElement("div",{key:t,className:"col-md-3"},c.default.createElement("div",{className:m.default.cardboxfix},c.default.createElement("div",{className:"kanban-detail"},c.default.createElement("span",{className:"label label-primary pull-right"},"Word"),c.default.createElement("p",{className:m.default.title18},e.word),c.default.createElement("ul",{className:"list-inline m-b-0"},c.default.createElement("li",null,c.default.createElement("p",{className:m.default.title16},e.translate))))))})),c.default.createElement("br",null),c.default.createElement("div",{className:m.default.title},"重点句"),c.default.createElement("br",null),0==n.length?null:n.map(function(e,t){return c.default.createElement("div",{key:t,className:"col-md-12"},c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement("div",{className:"kanban-detail"},c.default.createElement("span",{className:"label label-primary pull-right"},"Sentence"),c.default.createElement("p",{className:m.default.title18},"          ",e.english),c.default.createElement("ul",{className:"list-inline m-b-0"},c.default.createElement("li",null,c.default.createElement("br",null),c.default.createElement("p",{className:m.default.title16},c.default.createElement("strong",null,"翻译："),e.chinese),c.default.createElement("br",null),c.default.createElement("p",{className:m.default.title16},c.default.createElement("strong",null,"解析："),e.analysis),c.default.createElement("br",null))))))}),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:m.default.buttonright},c.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}},"返回列表页面")))):1==o?c.default.createElement("div",null,c.default.createElement("div",{className:m.default.title},"英语文章"),c.default.createElement("br",null),c.default.createElement("div",{className:"row"},c.default.createElement("p",null,"暂无")),c.default.createElement("br",null),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:m.default.buttonright},c.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({showReviewList:!0,showWordAndSentence:!1,showArticle:!1})}},"返回列表页面")))):null))}}]),t}(c.default.PureComponent);t.default=(0,w.default)([(0,b.default)({}),p.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,reviewlist:e.PortTest.content,hardword:e.PortTest.content2,hardsentence:e.PortTest.content3,article:e.PortTest.content4}},function(e){return(0,l.default)({},(0,u.bindActionCreators)(f.actions,e),(0,u.bindActionCreators)(h.actions,e))})],E)},645:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._3XbOGZCj0bsh1WBtBO9088{font-size:22px;text-align:center;color:#188ae2}._2Tbbgx3NkqPtwMp70sK6z7{font-size:18px;margin:10px 0}._2Tbbgx3NkqPtwMp70sK6z7,.VbX2mUL2rSRVH9_OZGnh5{color:#505458;font-family:Karla,sans-serif}._2KlptdGxyqEfTu1WwnvpSp{font-size:15px;color:#71b6f9}.TpqRr-w5tXsYydIew91X4{position:relative;left:5%;width:90%}.orW1tM4MOnFuqJvSE6wMn{float:right;margin-right:20px}._1Ho-0GxSo5EMqDJhi1iCxE{position:relative;left:15%}._3-ZbqCWhkDxN0fF6Jgheyw{font-size:13px;color:#98a6ad!important;height:84px;-webkit-line-clamp:4;margin-bottom:30px}._3-ZbqCWhkDxN0fF6Jgheyw,._9IYX6NiGXHdY4zuzf8WCu{overflow:hidden;text-overflow:ellipsis;word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical}._9IYX6NiGXHdY4zuzf8WCu{padding:20px;box-shadow:0 0 8px 0 rgba(0,0,0,.06),0 1px 0 0 rgba(0,0,0,.02);-webkit-border-radius:5px;border-radius:5px;-moz-border-radius:5px;background-clip:padding-box;margin-bottom:20px;background-color:#fff;margin:10px 0;height:150px;-webkit-line-clamp:3;margin-bottom:10px}",""]),t.locals={title:"_3XbOGZCj0bsh1WBtBO9088",title18:"_2Tbbgx3NkqPtwMp70sK6z7",title16:"VbX2mUL2rSRVH9_OZGnh5",title15:"_2KlptdGxyqEfTu1WwnvpSp",wordandsentence:"TpqRr-w5tXsYydIew91X4",buttonright:"orW1tM4MOnFuqJvSE6wMn",buttons:"_1Ho-0GxSo5EMqDJhi1iCxE",text_muted2:"_3-ZbqCWhkDxN0fF6Jgheyw",cardboxfix:"_9IYX6NiGXHdY4zuzf8WCu"}},646:function(e,t,a){var l=a(645);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)}}]);