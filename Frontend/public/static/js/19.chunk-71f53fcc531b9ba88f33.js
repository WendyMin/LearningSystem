/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{602:function(e,t,a){var l=a(638);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},618:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._3uiWv80jqE-AblalFKnaxR{font-size:20px;line-height:40px}._3jriyY4FYgGIpis5vHQ28u{padding-top:10px;padding-left:10px;font-size:30px;text-align:center;color:blue}._1OKqZBTowEz_aFB5e2uC68{padding-left:30px;font-size:25px;color:orange}li{float:none}",""]),t.locals={help:"_3uiWv80jqE-AblalFKnaxR",title:"_3jriyY4FYgGIpis5vHQ28u",part:"_1OKqZBTowEz_aFB5e2uC68"}},619:function(e,t,a){var l=a(618);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},620:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a(11)),n=s(a(4)),u=s(a(10)),r=s(a(3)),i=s(a(5)),o=s(a(1)),c=s(a(619));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){return(0,n.default)(this,t),(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return o.default.createElement("div",{className:c.default.help},o.default.createElement("h4",{className:c.default.title}," 写作科目学习指南 "),o.default.createElement("span",{className:c.default.part}," 水平测试 "),o.default.createElement("br",null),o.default.createElement("ol",null,o.default.createElement("li",null,"用户初次进行写作部分的学习时，系统会强制进行测试；测试完成后才可以进入学习")),o.default.createElement("span",{className:c.default.part}," 进入学习 "),o.default.createElement("br",null),o.default.createElement("ol",null,o.default.createElement("li",null,"学习部分主要分两个版块：论证有效性分析和论说文"),o.default.createElement("li",null,"论证有效性部分包括写作技巧精讲、巩固强化练习以及历年真题操练"),o.default.createElement("li",null,"点击写作技巧精讲可以查看找错析错和写作模板两部分内容"),o.default.createElement("li",null,"真题部分会给出一篇文章，用户需要根据文章做多选题，点击提交可以查看正确答案以及本次所做真题错选、漏选情况"),o.default.createElement("li",null,"数据统计部分可以查看做过的真题中，各类选项的错选次数以及漏选次数的统计"),o.default.createElement("li",null,"论说部分与论证类似，包括写作技巧精讲、巩固强化练习以及历年真题操练"),o.default.createElement("li",null,"用户可以自行上传自己所写的文件，文件类型限制为word或者pdf")))}}]),t}(o.default.PureComponent);t.default=d},621:function(e,t,a){(e.exports=a(13)(!1)).push([e.i,"",""])},622:function(e,t,a){var l=a(621);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},623:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=g(a(2)),n=g(a(11)),u=g(a(4)),r=g(a(10)),i=g(a(3)),o=g(a(5)),c=g(a(1)),s=a(16),d=a(15),m=(a(257),g(a(622))),f=(g(a(256)),g(a(253)),g(a(255)),g(a(254)),g(a(258)),a(147)),p=a(150),E=a(149),h=(g(a(252)),g(a(251)),g(a(143))),v=g(a(144));function g(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.loadGongguContent=function(e){a.props.loadWriteContents({url:"/api/lunZhengGongGuContent",body:{requestQuestion:e}})},a.loadLastSaveTextContent=function(){console.log(a.props.username,a.props.choice),a.props.loadLastSaveText({url:"/api/lunZhengZanCunContent",body:{username:a.props.username,choice:a.props.choice}})},a.saveOrSubmitTextContent=function(e){a.props.saveOrSubmitText({url:"/api/lunZhengSaveOrSubmitText",body:{username:a.props.username,choice:a.props.choice,text:a.props.userInputText,saveOrSubmit:e}})},a.loadAllSubmitText=function(){a.props.loadAllSubmitText({url:"/api/lunZhengAllSubmitText",body:{username:a.props.username,choice:a.props.choice}})},a.usertext="",a.state={uploadText:!1,viewText:!1,viewEgArticle:!1},a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.choice!==e.choice&&this.setState({uploadText:!1,viewText:!1,viewEgArticle:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.choice,l=t.name,n=t.example_article;t.lastSaveText,t.allSubmitTextName,t.allSubmitText,t.whichTextToView;return c.default.createElement(c.default.Fragment,null,""!==a?c.default.createElement("div",null,c.default.createElement("div",{className:m.default.title},c.default.createElement("div",{className:m.default.zhentiMingcheng},a),c.default.createElement(f.view,{className:m.default.zhentiContent,loader:this.loadWriteContents})),c.default.createElement("div",{className:m.default.option},c.default.createElement("div",{className:m.default.egArticleText},c.default.createElement("span",{onClick:function(){return e.setState({uploadText:!0,viewText:!1,viewEgArticle:!1})}}," 上传文章 "),"   ",c.default.createElement("span",{onClick:function(){e.setState({uploadText:!1,viewText:!0,viewEgArticle:!1}),e.loadAllSubmitText()}}," 已传文章 "),"   ",c.default.createElement("span",{onClick:function(){return e.setState({uploadText:!1,viewText:!1,viewEgArticle:!0})}}," 参考范文 ")),c.default.createElement("div",{className:m.default.egArticle},this.state.uploadText?c.default.createElement(p.view,{inputSizeStyle:m.default.inputBox,buttonStyle:m.default.saveOrSubmit,loadLastSaveTextContent:function(){return e.loadLastSaveTextContent()},saveText:function(){return e.saveOrSubmitTextContent(0)},submitText:function(){return e.saveOrSubmitTextContent(1)}}):this.state.viewText?c.default.createElement(E.view,null):this.state.viewEgArticle?c.default.createElement("div",null,c.default.createElement("p",{className:m.default.article_title},l),n.map(function(e,t){return c.default.createElement("p",{key:t},"     ",e," ")})):null))):null)}}]),t}(c.default.PureComponent);t.default=(0,v.default)([h.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,choice:e.ButtonExpand.choice,name:e.WriteContent.name,example_article:e.WriteContent.example_article,userInputText:e.EditText.userInputText,lastSaveText:e.EditText.lastSaveText,allSubmitTextName:e.ViewFinishedText.allSubmitTextName,allSubmitText:e.ViewFinishedText.allSubmitText,whichTextToView:e.EditText.whichTextToView}},function(e){return(0,l.default)({},(0,d.bindActionCreators)(f.actions,e),(0,d.bindActionCreators)(p.actions,e),(0,d.bindActionCreators)(E.actions,e))})],x)},624:function(e,t,a){(e.exports=a(13)(!1)).push([e.i,"",""])},625:function(e,t,a){var l=a(624);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},626:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=g(a(2)),n=g(a(11)),u=g(a(4)),r=g(a(10)),i=g(a(3)),o=g(a(5)),c=g(a(1)),s=a(16),d=a(15),m=(a(257),g(a(625))),f=(g(a(256)),g(a(253)),g(a(255)),g(a(254)),g(a(258)),a(147)),p=a(150),E=a(149),h=(g(a(252)),g(a(251)),g(a(143))),v=g(a(144));function g(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.loadGongguContent=function(e){a.props.loadWriteContents({url:"/api/lunZhengGongGuContent",body:{requestQuestion:e}})},a.loadLastSaveTextContent=function(){console.log(a.props.username,a.props.choice),a.props.loadLastSaveText({url:"/api/lunZhengZanCunContent",body:{username:a.props.username,choice:a.props.choice}})},a.saveOrSubmitTextContent=function(e){a.props.saveOrSubmitText({url:"/api/lunZhengSaveOrSubmitText",body:{username:a.props.username,choice:a.props.choice,text:a.props.userInputText,saveOrSubmit:e}})},a.loadAllSubmitText=function(){a.props.loadAllSubmitText({url:"/api/lunZhengAllSubmitText",body:{username:a.props.username,choice:a.props.choice}})},a.usertext="",a.state={uploadText:!1,viewText:!1,viewEgArticle:!1},a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.choice!==e.choice&&this.setState({uploadText:!1,viewText:!1,viewEgArticle:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.choice,l=t.name,n=t.example_article;t.lastSaveText,t.allSubmitTextName,t.allSubmitText,t.whichTextToView;return c.default.createElement(c.default.Fragment,null,""!==a?c.default.createElement("div",null,c.default.createElement("div",{className:m.default.title},c.default.createElement("div",{className:m.default.zhentiMingcheng},a),c.default.createElement(f.view,{className:m.default.zhentiContent,loader:this.loadWriteContents})),c.default.createElement("div",{className:m.default.option},c.default.createElement("div",{className:m.default.egArticleText},c.default.createElement("span",{onClick:function(){return e.setState({uploadText:!0,viewText:!1,viewEgArticle:!1})}}," 上传文章 "),"   ",c.default.createElement("span",{onClick:function(){e.setState({uploadText:!1,viewText:!0,viewEgArticle:!1}),e.loadAllSubmitText()}}," 已传文章 "),"   ",c.default.createElement("span",{onClick:function(){return e.setState({uploadText:!1,viewText:!1,viewEgArticle:!0})}}," 参考范文 ")),c.default.createElement("div",{className:m.default.egArticle},this.state.uploadText?c.default.createElement(p.view,{inputSizeStyle:m.default.inputBox,buttonStyle:m.default.saveOrSubmit,loadLastSaveTextContent:function(){return e.loadLastSaveTextContent()},saveText:function(){return e.saveOrSubmitTextContent(0)},submitText:function(){return e.saveOrSubmitTextContent(1)}}):this.state.viewText?c.default.createElement(E.view,null):this.state.viewEgArticle?c.default.createElement("div",null,c.default.createElement("p",{className:m.default.article_title},l),n.map(function(e,t){return c.default.createElement("p",{key:t},"     ",e," ")})):null))):null)}}]),t}(c.default.PureComponent);t.default=(0,v.default)([h.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,choice:e.ButtonExpand.choice,name:e.WriteContent.name,example_article:e.WriteContent.example_article,userInputText:e.EditText.userInputText,lastSaveText:e.EditText.lastSaveText,allSubmitTextName:e.ViewFinishedText.allSubmitTextName,allSubmitText:e.ViewFinishedText.allSubmitText,whichTextToView:e.EditText.whichTextToView}},function(e){return(0,l.default)({},(0,d.bindActionCreators)(f.actions,e),(0,d.bindActionCreators)(p.actions,e),(0,d.bindActionCreators)(E.actions,e))})],x)},627:function(e,t,a){(e.exports=a(13)(!1)).push([e.i,"",""])},628:function(e,t,a){var l=a(627);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},629:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=E(a(2)),n=E(a(11)),u=E(a(4)),r=E(a(10)),i=E(a(3)),o=E(a(5)),c=E(a(1)),s=a(16),d=a(15),m=(a(257),E(a(628)),E(a(256)),E(a(253)),E(a(255)),E(a(254)),E(a(258)),a(263)),f=(E(a(252)),E(a(251)),E(a(143))),p=E(a(144));function E(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.loadAllZhentiTongji=function(){a.props.loadAllZhentiTongji({url:"/api/lunZhengAllYearTongji",body:{username:a.props.username}}),a.props.loadTuijianZhishidianName({url:"/api/lunZhengTuijianZhishidianName",body:{username:a.props.username}}),a.props.loadTuijianArticle({url:"/api/lunZhengTuijianArticle",body:{username:a.props.username}})},a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadAllZhentiTongji()}},{key:"componentWillReceiveNextProps",value:function(e){this.props.choice,NextProps.choice}},{key:"render",value:function(){this.props.choice;return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"card-box"},c.default.createElement(m.view,null)))}}]),t}(c.default.PureComponent);t.default=(0,p.default)([f.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,choice:e.ButtonExpand.choice,title:e.WriteContent.title}},function(e){return(0,l.default)({},(0,d.bindActionCreators)(m.actions,e))})],h)},631:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=g(a(2)),n=g(a(11)),u=g(a(4)),r=g(a(10)),i=g(a(3)),o=g(a(5)),c=g(a(1)),s=a(16),d=a(15),m=(g(a(600)),a(147)),f=a(94),p=a(95),E=g(a(265)),h=g(a(143)),v=g(a(144));function g(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.loadZhenTiName=function(){a.props.loadButtonContents({url:"/api/lunzhengZhenti"})},a.loadZhentiContent=function(e){a.setState({zhentiDisplay:!1}),a.props.loadWriteContents({url:"/api/lunZhengZhenTiContent",body:{requestQuestion:e}}),a.props.loadPortContent({url:"/api/lunZhengZhenTiError",body:{requestQuestion:e}})},a.state={zhenTiSelect:!0},a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadZhenTiName()}},{key:"render",value:function(){var e=this,t=this.props,a=(t.choice,t.LunZhengZhenTiName),l=t.setButtonChoice;return c.default.createElement(c.default.Fragment,null,this.state.zhenTiSelect?c.default.createElement("div",{className:"col-md-12"},a.map(function(t,a){return c.default.createElement("div",{key:a},c.default.createElement("div",{className:"col-md-4"},c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement("div",{className:"kanban-detail"},c.default.createElement("span",{className:"label label-danger pull-right"},"Begin"),c.default.createElement("h4",null,c.default.createElement("a",{onClick:function(){l(t),e.loadZhentiContent(t),e.setState({zhenTiSelect:!1})}},t)," ")))))})):c.default.createElement(E.default,null))}}]),t}(c.default.PureComponent);t.default=(0,v.default)([h.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,LunZhengZhenTiName:e.ButtonExpand.content,choice:e.ButtonExpand.choice}},function(e){return(0,l.default)({},(0,d.bindActionCreators)(m.actions,e),(0,d.bindActionCreators)(f.actions,e),(0,d.bindActionCreators)(p.actions,e))})],x)},634:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2uDRZ-RUGxFm361EXfbcV6{text-align:center;font-size:25px;color:blue}",""]),t.locals={centerbiaoti:"_2uDRZ-RUGxFm361EXfbcV6"}},635:function(e,t,a){var l=a(634);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(12)(l,n);l.locals&&(e.exports=l.locals)},636:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=g(a(2)),n=g(a(11)),u=g(a(4)),r=g(a(10)),i=g(a(3)),o=g(a(5)),c=g(a(1)),s=a(16),d=a(15),m=g(a(635)),f=a(95),p=a(94),E=a(264),h=(g(a(251)),g(a(143))),v=g(a(144));function g(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.loadButtonContents_zhaocuo=function(){a.props.loadButtonContents({url:"/api/lunzhengZhaoCuoXiCuo"})},a.loadButtonContents_moban=function(){a.props.loadPortContent({url:"/api/lunzhengTemplate"})},a.loadZhaocuoContent=function(e){a.props.loadWriteKnowledge({url:"/api/lunZhengZhaoCuoXiCuoContent",body:{requestQuestion:e}})},a.loadMobanContent=function(e){a.props.loadWriteKnowledge({url:"/api/lunZhengTemplateContent",body:{requestQuestion:e}})},a.state={typeSelect:!0},a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadButtonContents_zhaocuo(),this.loadButtonContents_moban()}},{key:"render",value:function(){var e=this,t=this.props,a=t.zhaoCuoName,l=t.moBanName,n=t.setButtonChoice,u=t.zhaoCuoChoice;t.moBanChoice;return c.default.createElement(c.default.Fragment,null,this.state.typeSelect?c.default.createElement("div",null,c.default.createElement("div",{className:"col-md-6"},c.default.createElement("div",{className:"card-box taskboard-box"},c.default.createElement("h4",{className:"header-title m-t-0 m-b-30 text-primary"},"找错析错"),a.map(function(t,a){return c.default.createElement("ul",{className:"list-unstyled task-list",id:"drag-upcoming",key:a},c.default.createElement("li",null,c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement("div",{className:"kanban-detail",onClick:function(){n(t),e.loadZhaocuoContent(t),e.setState({typeSelect:!1})}},c.default.createElement("span",{className:"label label-danger pull-right"},"Begin"),c.default.createElement("h4",null,c.default.createElement("a",null,t)," ")))))}))),c.default.createElement("div",{className:"col-md-6"},c.default.createElement("div",{className:"card-box taskboard-box"},c.default.createElement("h4",{className:"header-title m-t-0 m-b-30 text-warning"},"写作模板"),l.map(function(t,a){return c.default.createElement("ul",{className:"list-unstyled task-list",id:"drag-upcoming",key:a},c.default.createElement("li",null,c.default.createElement("div",{className:"card-box kanban-box"},c.default.createElement("div",{className:"kanban-detail",onClick:function(){n(t),e.loadMobanContent(t),e.setState({typeSelect:!1})}},c.default.createElement("span",{className:"label label-danger pull-right"},"Begin"),c.default.createElement("h4",null,c.default.createElement("a",null,t)," ")))))})))):c.default.createElement("div",{className:"card-box"},c.default.createElement("div",{className:m.default.centerbiaoti},u),c.default.createElement(E.view,{loader:this.loadWriteContents})))}}]),t}(c.default.PureComponent);t.default=(0,v.default)([h.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,zhaoCuoName:e.ButtonExpand.content,moBanName:e.PortTest.content,zhaoCuoChoice:e.ButtonExpand.choice,moBanChoice:e.PortTest.choice}},function(e){return(0,l.default)({},(0,d.bindActionCreators)(f.actions,e),(0,d.bindActionCreators)(p.actions,e),(0,d.bindActionCreators)(E.actions,e))})],x)},637:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=T(a(2)),n=T(a(11)),u=T(a(4)),r=T(a(10)),i=T(a(3)),o=T(a(5)),c=T(a(1)),s=a(16),d=a(15),m=(T(a(602)),a(259)),f=(T(a(50)),T(a(636))),p=T(a(601)),E=(T(a(265)),T(a(631))),h=T(a(629)),v=T(a(626)),g=T(a(623)),x=(T(a(252)),T(a(251)),T(a(143))),b=T(a(144));function T(e){return e&&e.__esModule?e:{default:e}}var N=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={typeSelectShow:!0},a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.setLearningType,l=t.learningType;return c.default.createElement(c.default.Fragment,null,this.state.typeSelectShow?c.default.createElement("div",{className:"row"},c.default.createElement("br",null),c.default.createElement("div",{className:"col-lg-6"},c.default.createElement("div",{className:"text-center card-box"},c.default.createElement("div",{className:"dropdown pull-right"}),c.default.createElement("div",null,c.default.createElement("img",{src:"/static/images/users/avatar-10.jpg",className:"img-circle thumb-xl img-thumbnail m-b-10",alt:"profile-image"}),c.default.createElement("h4",null,"论证有效性分析"),c.default.createElement("br",null),c.default.createElement("p",{className:"text-muted font-13 m-b-30"},"论证有效性分析主要包括写作技巧精讲、巩固强化练习、近年真题演练及数据统计四个部分"),c.default.createElement("div",{className:"text-left"},c.default.createElement("p",{className:"text-muted font-13"},c.default.createElement("strong",null,"写作技巧精讲 :")," ",c.default.createElement("span",{className:"m-l-15"},"分为找错析错和写作模板两个部分，可以查看对应的知识点")),c.default.createElement("p",{className:"text-muted font-13"},c.default.createElement("strong",null,"巩固强化练习 :"),c.default.createElement("span",{className:"m-l-15"},"查看参考范文，也可以自己上传文章")),c.default.createElement("p",{className:"text-muted font-13"},c.default.createElement("strong",null,"近年真题演练 :")," ",c.default.createElement("span",{className:"m-l-15"},"涵盖历年来的真题，对每一年真题包括多选题以及答案解析;此部分用户也可以查看参考范文，上传文章")),c.default.createElement("p",{className:"text-muted font-13"},c.default.createElement("strong",null,"数据统计 :")," ",c.default.createElement("span",{className:"m-l-15"},"查看做过的历年真题数据统计，以及系统推荐需要重点关注的知识点以及文章"))),c.default.createElement("div",{className:"btn-group dropup"},c.default.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle waves-effect waves-light","data-toggle":"dropdown","aria-expanded":"false"},"开始学习 ",c.default.createElement("span",{className:"caret"})),c.default.createElement("ul",{className:"dropdown-menu",role:"menu"},c.default.createElement("li",null,c.default.createElement("a",{onClick:function(){e.setState({typeSelectShow:!1}),a("论证技巧")}},"写作技巧精讲")),c.default.createElement("li",null,c.default.createElement("a",{onClick:function(){e.setState({typeSelectShow:!1}),a("论证巩固")}},"巩固强化练习")),c.default.createElement("li",null,c.default.createElement("a",{onClick:function(){e.setState({typeSelectShow:!1}),a("论证真题")}},"近年真题演练")),c.default.createElement("li",null,c.default.createElement("a",{onClick:function(){e.setState({typeSelectShow:!1}),a("论证数据")}},"数据统计"))))))),c.default.createElement("div",{className:"col-lg-6"},c.default.createElement("div",{className:"text-center card-box"},c.default.createElement("div",{className:"dropdown pull-right"}),c.default.createElement("div",null,c.default.createElement("img",{src:"/static/images/users/avatar-9.jpg",className:"img-circle thumb-xl img-thumbnail m-b-10",alt:"profile-image"}),c.default.createElement("h4",null,"论说文"),c.default.createElement("br",null),c.default.createElement("p",{className:"text-muted font-13 m-b-30"},"论说文主要包括写作技巧精讲、巩固强化练习、近年真题演练三个部分"),c.default.createElement("br",null),c.default.createElement("div",{className:"text-left"},c.default.createElement("p",{className:"text-muted font-13"},c.default.createElement("strong",null,"Introduction :")),c.default.createElement("p",{className:"text-muted font-13"},c.default.createElement("strong",null,"写作技巧精讲 :")," ",c.default.createElement("span",{className:"m-l-15"},"分为题型突破、审题立意等几部分，可以选择查看每一部分对应的知识点")),c.default.createElement("p",{className:"text-muted font-13"},c.default.createElement("strong",null,"巩固强化练习 :"),c.default.createElement("span",{className:"m-l-15"},"查看参考范文，也可以自己上传文章")),c.default.createElement("p",{className:"text-muted font-13"},c.default.createElement("strong",null,"近年真题演练 :")," ",c.default.createElement("span",{className:"m-l-15"},"涵盖历年来的真题，对每一年真题用户可以查看参考范文，参考立意，也可以上传自己写的文章"))),c.default.createElement("div",{className:"btn-group dropup"},c.default.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle waves-effect waves-light","data-toggle":"dropdown","aria-expanded":"false"},"开始学习 ",c.default.createElement("span",{className:"caret"})),c.default.createElement("ul",{className:"dropdown-menu",role:"menu"},c.default.createElement("li",null,c.default.createElement("a",{onClick:function(){e.setState({typeSelectShow:!1}),a("论说技巧")}},"写作技巧精讲")),c.default.createElement("li",null,c.default.createElement("a",{onClick:function(){e.setState({typeSelectShow:!1}),a("论说巩固")}},"巩固强化练习")),c.default.createElement("li",null,c.default.createElement("a",{onClick:function(){e.setState({typeSelectShow:!1}),a("论说真题")}},"近年真题演练")))))))):"论证技巧"==l?c.default.createElement(f.default,null):"论证巩固"==l?c.default.createElement(p.default,null):"论证真题"==l?c.default.createElement(E.default,null):"论证数据"==l?c.default.createElement(h.default,null):"论说技巧"==l?c.default.createElement(LunShuoKnowledge,null):"论说巩固"==l?c.default.createElement(g.default,null):"论说真题"==l?c.default.createElement(v.default,null):null)}}]),t}(c.default.PureComponent);t.default=(0,b.default)([x.default,(0,s.connect)(function(e){return{username:e.UserManager.name,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,l.default)({},(0,d.bindActionCreators)(m.actions,e))})],N)},638:function(e,t,a){(e.exports=a(13)(!1)).push([e.i,"",""])},639:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=g(a(2)),n=g(a(11)),u=g(a(4)),r=g(a(10)),i=g(a(3)),o=g(a(5)),c=g(a(1)),s=a(16),d=a(15),m=(g(a(602)),a(145)),f=a(267),p=g(a(637)),E=g(a(620)),h=g(a(143)),v=g(a(144));function g(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){return(0,u.default)(this,t),(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,o.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.username,t.logined,t.choice),l=sessionStorage.getItem("user");return"undefined"==sessionStorage.getItem("user")||""==sessionStorage.getItem("user")||null==sessionStorage.getItem("user")||(this.props.setUser(l,!0),sessionStorage.setItem("user",l)),c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{id:"wrapper"},c.default.createElement("div",{className:"topbar"},c.default.createElement("div",{className:"topbar-left"},c.default.createElement("a",{href:"/learning/logic",className:"logo"},c.default.createElement("span",null,"Learning",c.default.createElement("span",null,"System")),c.default.createElement("i",{className:"zmdi zmdi-layers"}))),c.default.createElement("div",{className:"navbar navbar-default",role:"navigation"},c.default.createElement("div",{className:"container"},c.default.createElement("ul",{className:"nav navbar-nav navbar-left"},c.default.createElement("li",null,c.default.createElement("button",{className:"button-menu-mobile open-left"},c.default.createElement("i",{className:"zmdi zmdi-menu"}))),c.default.createElement("li",null,c.default.createElement("h4",{className:"page-title"},0==a?c.default.createElement("div",null,"写作 > 进入学习"):c.default.createElement("div",null,"写作 > 科目帮助"))))))),c.default.createElement("div",{className:"left side-menu"},c.default.createElement("div",{className:"slimScrollDiv"},c.default.createElement("div",{className:"sidebar-inner slimscrollleft"},c.default.createElement("div",{className:"user-box"},c.default.createElement("div",{className:"user-img"},c.default.createElement("img",{src:"/static/images/users/avatar-1.jpg",alt:"user-img",title:"Mat Helme",className:"img-circle img-thumbnail img-responsive"}),c.default.createElement("div",{className:"user-status offline"},c.default.createElement("i",{className:"zmdi zmdi-dot-circle"}))),c.default.createElement("h5",null,c.default.createElement("a",{href:"#"},this.props.username)," "),c.default.createElement("ul",{className:"list-inline"},c.default.createElement("li",null,c.default.createElement("a",{href:"#"},c.default.createElement("i",{className:"zmdi zmdi-settings"}))),c.default.createElement("li",null,c.default.createElement("a",{href:"#",className:"text-custom"},c.default.createElement("i",{className:"zmdi zmdi-power"}))))),c.default.createElement("div",{id:"sidebar-menu"},c.default.createElement("ul",null,c.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(0)}},c.default.createElement("a",{className:"waves-effect"},c.default.createElement("i",{className:"zmdi zmdi-library"})," ",c.default.createElement("span",null," 进入学习 ")," ")),c.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(1)}},c.default.createElement("a",{className:"waves-effect"},c.default.createElement("i",{className:"zmdi  zmdi-pin-help"})," ",c.default.createElement("span",null," 查看帮助 ")," "))),c.default.createElement("div",{className:"clearfix"})),c.default.createElement("div",{className:"clearfix"})))),c.default.createElement("div",{className:"content-page"},c.default.createElement("div",{className:"content"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},0==a?c.default.createElement(p.default,null):c.default.createElement("div",{className:"card-box"},c.default.createElement(E.default,null)))),c.default.createElement("footer",{className:"footer text-right"},"2017 - 2018 © 都学网所有")))))}}]),t}(c.default.PureComponent);t.default=(0,v.default)([h.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,choice:e.SubjectFunctionSelect.choice}},function(e){return(0,l.default)({},(0,d.bindActionCreators)(m.actions,e),(0,d.bindActionCreators)(f.actions,e))})],x)}}]);