/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20,6,14],{625:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(l(11)),n=m(l(4)),r=m(l(10)),s=m(l(3)),u=m(l(5)),c=m(l(1)),d=l(15),i=(l(14),l(267),m(l(653)),l(150),m(l(265)),m(l(264)),m(l(146))),o=m(l(147));function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){return(0,n.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,l=t.username;return t.logined&&sessionStorage.setItem("user",l),c.default.createElement("div",{className:"smallscreen"},c.default.createElement("div",{className:"account-pages"}),c.default.createElement("div",{className:"clearfix"}),c.default.createElement("div",{className:"wrapper-page"},c.default.createElement("div",{className:"text-center"},c.default.createElement("a",{href:"index.html",className:"logo"},c.default.createElement("span",null,"Learning",c.default.createElement("span",null,"System"))),c.default.createElement("h5",{className:"text-muted m-t-0 font-600"},"Welcome to login")),c.default.createElement("div",{className:"m-t-40 card-box"},c.default.createElement("div",{className:"text-center"},c.default.createElement("h4",{className:"text-uppercase font-bold m-b-0"},"Sign In")),c.default.createElement("div",{className:"panel-body"},c.default.createElement("form",{className:"form-horizontal m-t-20",action:"index.html"},c.default.createElement("div",{className:"form-group "},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("input",{className:"form-control",type:"text",required:"",placeholder:"Username"}))),c.default.createElement("div",{className:"form-group"},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("input",{className:"form-control",type:"password",required:"",placeholder:"Password"}))),c.default.createElement("div",{className:"form-group "},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("div",{className:"checkbox checkbox-custom"},c.default.createElement("input",{id:"checkbox-signup",type:"checkbox"}),c.default.createElement("label",{htmlFor:"checkbox-signup"},"Remember me")))),c.default.createElement("div",{className:"form-group text-center m-t-30"},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("button",{className:"btn btn-custom btn-bordred btn-block waves-effect waves-light",type:"submit",onClick:function(){return e.log()}},"Log In"))),c.default.createElement("div",{className:"form-group m-t-30 m-b-0"},c.default.createElement("div",{className:"col-sm-12"},c.default.createElement("a",{href:"page-recoverpw.html",className:"text-muted"},c.default.createElement("i",{className:"fa fa-lock m-r-5"})," Forgot your password?")))))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-12 text-center"},c.default.createElement("p",{className:"text-muted"},"Don't have an account? ",c.default.createElement("a",{href:"/signup",className:"text-primary m-l-5"},c.default.createElement("b",null,"Sign Up")))))))}}]),t}(c.default.PureComponent);t.default=(0,o.default)([i.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name}},function(e){return{}})],f)},639:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=["初中","高中","四级","六级"],l=["basic","mid","advance","extreme"],a=0;a<t.length;a++)if(e==l[a])return t[a];return"初中"}},649:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._3piBAv_NF4yAOw2hGnLgSH{font-size:16px}._1t-yLRT3Y9TezU6HVl0fNn{front-size:12px;color:#98a6ad;position:absolute;right:3.4%}",""]),t.locals={text:"_3piBAv_NF4yAOw2hGnLgSH",textgrey:"_1t-yLRT3Y9TezU6HVl0fNn"}},650:function(e,t,l){var a=l(649);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},651:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=x(l(2)),n=x(l(11)),r=x(l(4)),s=x(l(10)),u=x(l(3)),c=x(l(5)),d=x(l(1)),i=l(15),o=l(14),m=(l(267),x(l(650))),f=(x(l(636)),x(l(635)),x(l(268))),p=(x(l(265)),x(l(264))),E=x(l(146)),v=x(l(147)),g=l(282),h=x(l(637)),b=l(148),N=x(l(639)),y=x(l(638));function x(e){return e&&e.__esModule?e:{default:e}}var w=function(e){function t(e){(0,r.default)(this,t);var l=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.loadTest=function(){l.props.loadTestQuestions({url:"/api/eng_wordTest"})},l.recordWordTestLevel=function(){l.props.recordWordTest({url:"/api/eng_recordWordTest",body:{username:l.props.username,level:l.props.level}})},l.getUserLevel=function(){l.props.getLevel({url:"/api/eng_getLevel",body:{username:l.props.username}})},l.state={enterTest:!0,enterLearning:!1,testAgain:!1,newEnterTest:!1,enterTestSure:!1},l}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.getUserLevel(),this.loadTest()}},{key:"componentWillReceiveProps",value:function(e){0==this.props.testend&&1==e.testend&&(this.recordWordTestLevel(),this.getUserLevel())}},{key:"render",value:function(){var e=this,t=this.props,l=(t.questions,t.ined),a=(t.forceNext,t.testend),n=(t.level,t.didTest),r=t.didLevel,s=this.state,u=s.enterLearning,c=s.enterTest,i=s.testAgain,o=s.newEnterTest,p=s.enterTestSure;return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",null,u?d.default.createElement(h.default,null):c&&n||c&&a||i&&a?d.default.createElement("div",{class:"panel panel-custom panel-border"},d.default.createElement("div",{class:"panel-heading"},d.default.createElement("h3",{class:"panel-title"},"Well Done !")),d.default.createElement("div",{class:"panel-body"},d.default.createElement("div",{className:m.default.text},"恭喜！您已完成词汇测试！您的英语水平为：",d.default.createElement("span",{style:{color:"#188ae2"}},(0,N.default)(r),"水平")),d.default.createElement("br",null),d.default.createElement("div",{className:m.default.text},"请点击左侧的进入学习，开始英语学习吧"),d.default.createElement("br",null),d.default.createElement("div",{className:m.default.text},"如需要重新测试，请点击：",d.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({enterTest:!1,enterLearning:!1,testAgain:!0,enterTestSure:!1}),e.props.forceEnd(),e.loadTest()}},"再测一次"),"      ",d.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({enterTest:!1,enterLearning:!0,testAgain:!1,enterTestSure:!1}),e.props.setSubjectFunctionSelect(1),e.props.forceEnd()}},"进入学习")))):o||i&&!a?d.default.createElement("div",null,p?d.default.createElement("div",null,d.default.createElement(f.default,{play:l},d.default.createElement(g.view,{loader:this.loadTest})),d.default.createElement("div",{className:m.default.textgrey},"测试时间约为2分钟")):d.default.createElement(y.default,{testnum:"约30道",testtime:"2  分钟",onClick:function(){return e.setState({enterTestSure:!0})}})):c&&!n?d.default.createElement("div",{class:"panel panel-custom panel-border"},d.default.createElement("div",{class:"panel-heading"},d.default.createElement("h3",{class:"panel-title"},"Sorry")),d.default.createElement("div",{class:"panel-body"},d.default.createElement("div",{className:m.default.text},"您为新用户，系统还没有您的数据，请点击开始水平测试，完成基础测评"),d.default.createElement("br",null),d.default.createElement("div",{className:m.default.text},"测试时间约为",d.default.createElement("span",null,"2"),"分钟"),d.default.createElement("br",null),d.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){return e.setState({newEnterTest:!0,enterTestSure:!1})}},"开始测试"))):null))}}]),t}(d.default.PureComponent);t.default=(0,v.default)([(0,p.default)({}),E.default,(0,i.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.EnglishWordTest.content,testend:e.EnglishWordTest.testendState,level:e.EnglishWordTest.nowAt.level,didTest:e.EnglishWordTest.recordFlagAndLevel.didTest,didLevel:e.EnglishWordTest.recordFlagAndLevel.level,choice:e.SubjectFunctionSelect.choice}},function(e){return(0,a.default)({},(0,o.bindActionCreators)(g.actions,e),(0,o.bindActionCreators)(b.actions,e))})],w)},652:function(e,t,l){(e.exports=l(13)(!1)).push([e.i,"",""])},653:function(e,t,l){var a=l(652);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},754:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._32B9luhO2zMewJWXGuVphJ{font-size:16px;line-height:32px}.IFN2pSuiqu7f9Wav3ChPk{font-size:22px;text-align:center;color:#188ae2}._1EI8g1S0oFQHq7mOdj5w6w{color:#71b6f9}.N34Fvdo6-EdR20B3Cc_90{color:red;white-space:nowrap}li{float:none}",""]),t.locals={help:"_32B9luhO2zMewJWXGuVphJ",title:"IFN2pSuiqu7f9Wav3ChPk",part:"_1EI8g1S0oFQHq7mOdj5w6w",strong:"N34Fvdo6-EdR20B3Cc_90"}},755:function(e,t,l){var a=l(754);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},756:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(l(11)),n=i(l(4)),r=i(l(10)),s=i(l(3)),u=i(l(5)),c=i(l(1)),d=i(l(755));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(e){return(0,n.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return c.default.createElement("div",{className:d.default.help},c.default.createElement("h4",{className:d.default.title}," 英语科目学习指南 "),c.default.createElement("span",{className:d.default.part}," 水平测试 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"首次登录此系统，必须先完成词汇量测试。只有完成词汇量测试，才会有针对性地推荐文章。"),c.default.createElement("li",null,"若不是首次登录，也可以进行词汇量测试。")),c.default.createElement("span",{className:d.default.part}," 进入学习 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案"),c.default.createElement("li",null,"确认自己不明白的单词，确认全部点击后，提交系统，等待翻译"),c.default.createElement("li",null,"选择自己不理解的句子，点击，提交系统，等待翻译"),c.default.createElement("li",null,"再次完成试题，如果觉得第一次做的完全正确，则重新再选一次以确认，如果觉得有误，则可以修改答案"),c.default.createElement("li",null,"点击确认后查看正确答案和解析"),c.default.createElement("li",null,"查看自己点击过的不认识的单词和句子"),c.default.createElement("li",null,"完成写作句型部分"),c.default.createElement("li",null,"阅读一篇课后阅读材料"),c.default.createElement("li",null,"做完阅读后，可选择性地跳过后面的三个模块，",c.default.createElement("strong",null,"提前"),"进行下一个单元的学习")),c.default.createElement("span",{className:d.default.part}," 开始复习 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"显示学过的课程列表。每一课可查看“重点词汇”、“长难句解析”、“全文翻译”、“习题解析”，并可重新做题。")),c.default.createElement("span",{className:d.default.part}," 统计列表 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"显示用户完成情况的统计。目前为用户不认识的词情况统计。")))}}]),t}(c.default.PureComponent);t.default=o},781:function(e,t,l){(e.exports=l(13)(!1)).push([e.i,"",""])},782:function(e,t,l){var a=l(781);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},783:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=w(l(2)),n=w(l(11)),r=w(l(4)),s=w(l(10)),u=w(l(3)),c=w(l(5)),d=w(l(1)),i=l(15),o=l(14),m=(l(267),w(l(782)),w(l(651))),f=w(l(637)),p=w(l(659)),E=w(l(640)),v=w(l(756)),g=(w(l(23)),w(l(72)),w(l(265)),w(l(264)),w(l(146))),h=w(l(147)),b=l(150),N=w(l(625)),y=(l(283),l(148)),x=l(266);function w(e){return e&&e.__esModule?e:{default:e}}var _=l(276),T=function(e){function t(e){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this,t=this.props,l=(t.username,t.logined,t.newTo,t.choice),a=t.learningType,n=sessionStorage.getItem("user");return"undefined"==sessionStorage.getItem("user")||""==sessionStorage.getItem("user")?d.default.createElement(N.default,null):(this.props.setUser(n,!0),sessionStorage.setItem("user",n)),d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{id:"wrapper"},d.default.createElement("div",{className:"topbar"},d.default.createElement("div",{className:"topbar-left"},d.default.createElement("a",{href:"/",className:"logo"},d.default.createElement("span",null,"Learning",d.default.createElement("span",null,"System")),d.default.createElement("i",{className:"zmdi zmdi-layers"}))),d.default.createElement("div",{className:"navbar navbar-default",role:"navigation"},d.default.createElement("div",{className:"container"},d.default.createElement("ul",{className:"nav navbar-nav navbar-left"},d.default.createElement("li",null,d.default.createElement("button",{className:"button-menu-mobile open-left"},d.default.createElement("i",{className:"zmdi zmdi-menu"}))),d.default.createElement("li",null,d.default.createElement("h4",{className:"page-title"},0==l?d.default.createElement("div",null,"英语  > 水平测试"):1==l?d.default.createElement("div",null,d.default.createElement("span",null,"英语  > "),d.default.createElement("span",{onClick:function(){e.props.setLearningType("英语主页面")}},"进入学习"),""==a||"英语主页面"==a?null:"英语生词难句"==a?d.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 生词难句"):"英语汉译英"==a?d.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 写作句型练习"):"英语课后阅读材料"==a?d.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 课后阅读材料"):d.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," >  ",a," ")):2==l?d.default.createElement("div",null,"英语  > 开始复习"):3==l?d.default.createElement("div",null,"英语  > 统计图表"):d.default.createElement("div",null,"英语  > 科目帮助"))))))),d.default.createElement("div",{className:"left side-menu"},d.default.createElement("div",{className:"slimScrollDiv"},d.default.createElement("div",{className:"sidebar-inner slimscrollleft"},d.default.createElement("div",{className:"user-box"},d.default.createElement("div",{className:"user-img"},d.default.createElement("img",{src:"/static/images/users/avatar-1.jpg",alt:"user-img",title:this.props.username,className:"img-circle img-thumbnail img-responsive"}),d.default.createElement("div",{className:"user-status offline"},d.default.createElement("i",{className:"zmdi zmdi-dot-circle"}))),d.default.createElement("h5",null,this.props.username),d.default.createElement("ul",{className:"list-inline"},d.default.createElement("li",null,d.default.createElement("a",{className:"text-custom",onClick:function(){confirm("您确定要退出登录吗?")&&(location.href="https://passport.doxue.com/login?redirect_url=59.110.23.212&stamp="+Date.parse(new Date)+"&secret_code="+_("LOGIN_REDIRECT"+Date.parse(new Date)))},href:"javascript:void(0);"},d.default.createElement("i",{className:"zmdi zmdi-power"}))))),d.default.createElement("div",{id:"sidebar-menu"},d.default.createElement("ul",null,d.default.createElement("li",{className:"text-muted menu-title"},"英语"),d.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(0)}},d.default.createElement("a",{className:"waves-effect",style:0==l?{color:"#71b6f9"}:null},d.default.createElement("i",{className:"zmdi zmdi-layers"}),d.default.createElement("span",null," 水平测试 "))),d.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(1)}},d.default.createElement("a",{className:"waves-effect",style:1==l?{color:"#71b6f9"}:null},d.default.createElement("i",{className:"zmdi zmdi-library"}),d.default.createElement("span",null," 进入学习 "))),d.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(2)}},d.default.createElement("a",{className:"waves-effect",style:2==l?{color:"#71b6f9"}:null},d.default.createElement("i",{className:"zmdi zmdi-book"}),d.default.createElement("span",null," 开始复习 "))),d.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(3)}},d.default.createElement("a",{className:"waves-effect",style:3==l?{color:"#71b6f9"}:null},d.default.createElement("i",{className:"zmdi zmdi-chart"}),d.default.createElement("span",null," 统计图表 "))),d.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(4)}},d.default.createElement("a",{className:"waves-effect",style:4==l?{color:"#71b6f9"}:null},d.default.createElement("i",{className:"zmdi  zmdi-pin-help"}),d.default.createElement("span",null," 查看帮助 ")))),d.default.createElement("div",{className:"clearfix"})),d.default.createElement("div",{className:"clearfix"})))),d.default.createElement("div",{className:"content-page"},d.default.createElement("div",{className:"content"},d.default.createElement("div",{className:"container"},d.default.createElement("div",{className:"row"},0==l?d.default.createElement(m.default,null):1==l?d.default.createElement(f.default,null):2==l?d.default.createElement(p.default,null):3==l?d.default.createElement(E.default,null):d.default.createElement("div",{className:"card-box"},d.default.createElement(v.default,null)))),d.default.createElement("footer",{className:"footer text-right"},"2017 - 2018 © 都学网所有")))))}}]),t}(d.default.PureComponent);t.default=(0,h.default)([g.default,(0,i.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,newTo:e.UserManager.newTo,choice:e.SubjectFunctionSelect.choice,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,o.bindActionCreators)(b.actions,e),(0,o.bindActionCreators)(y.actions,e),(0,o.bindActionCreators)(x.actions,e))})],T)}}]);