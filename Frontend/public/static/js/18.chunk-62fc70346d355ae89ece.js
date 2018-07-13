/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5],{625:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(l(11)),n=o(l(4)),r=o(l(10)),c=o(l(3)),u=o(l(5)),s=o(l(1)),m=l(15),d=(l(14),l(267),o(l(646)),l(148),o(l(265)),o(l(264)),o(l(146))),i=o(l(147));function o(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){return(0,n.default)(this,t),(0,c.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,l=t.username;return t.logined&&sessionStorage.setItem("user",l),s.default.createElement("div",{className:"smallscreen"},s.default.createElement("div",{className:"account-pages"}),s.default.createElement("div",{className:"clearfix"}),s.default.createElement("div",{className:"wrapper-page"},s.default.createElement("div",{className:"text-center"},s.default.createElement("a",{href:"index.html",className:"logo"},s.default.createElement("span",null,"Learning",s.default.createElement("span",null,"System"))),s.default.createElement("h5",{className:"text-muted m-t-0 font-600"},"Welcome to login")),s.default.createElement("div",{className:"m-t-40 card-box"},s.default.createElement("div",{className:"text-center"},s.default.createElement("h4",{className:"text-uppercase font-bold m-b-0"},"Sign In")),s.default.createElement("div",{className:"panel-body"},s.default.createElement("form",{className:"form-horizontal m-t-20",action:"index.html"},s.default.createElement("div",{className:"form-group "},s.default.createElement("div",{className:"col-xs-12"},s.default.createElement("input",{className:"form-control",type:"text",required:"",placeholder:"Username"}))),s.default.createElement("div",{className:"form-group"},s.default.createElement("div",{className:"col-xs-12"},s.default.createElement("input",{className:"form-control",type:"password",required:"",placeholder:"Password"}))),s.default.createElement("div",{className:"form-group "},s.default.createElement("div",{className:"col-xs-12"},s.default.createElement("div",{className:"checkbox checkbox-custom"},s.default.createElement("input",{id:"checkbox-signup",type:"checkbox"}),s.default.createElement("label",{htmlFor:"checkbox-signup"},"Remember me")))),s.default.createElement("div",{className:"form-group text-center m-t-30"},s.default.createElement("div",{className:"col-xs-12"},s.default.createElement("button",{className:"btn btn-custom btn-bordred btn-block waves-effect waves-light",type:"submit",onClick:function(){return e.log()}},"Log In"))),s.default.createElement("div",{className:"form-group m-t-30 m-b-0"},s.default.createElement("div",{className:"col-sm-12"},s.default.createElement("a",{href:"page-recoverpw.html",className:"text-muted"},s.default.createElement("i",{className:"fa fa-lock m-r-5"})," Forgot your password?")))))),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-sm-12 text-center"},s.default.createElement("p",{className:"text-muted"},"Don't have an account? ",s.default.createElement("a",{href:"/signup",className:"text-primary m-l-5"},s.default.createElement("b",null,"Sign Up")))))))}}]),t}(s.default.PureComponent);t.default=(0,i.default)([d.default,(0,m.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name}},function(e){return{}})],f)},645:function(e,t,l){(e.exports=l(13)(!1)).push([e.i,"",""])},646:function(e,t,l){var a=l(645);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},744:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._32B9luhO2zMewJWXGuVphJ{font-size:16px;line-height:32px}.IFN2pSuiqu7f9Wav3ChPk{font-size:22px;text-align:center;color:#188ae2}._1EI8g1S0oFQHq7mOdj5w6w{color:#71b6f9}.N34Fvdo6-EdR20B3Cc_90{color:red;white-space:nowrap}li{float:none}",""]),t.locals={help:"_32B9luhO2zMewJWXGuVphJ",title:"IFN2pSuiqu7f9Wav3ChPk",part:"_1EI8g1S0oFQHq7mOdj5w6w",strong:"N34Fvdo6-EdR20B3Cc_90"}},745:function(e,t,l){var a=l(744);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},746:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(l(11)),n=d(l(4)),r=d(l(10)),c=d(l(3)),u=d(l(5)),s=d(l(1)),m=d(l(745));function d(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return(0,n.default)(this,t),(0,c.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:m.default.help},s.default.createElement("h4",{className:m.default.title}," 英语科目学习指南 "),s.default.createElement("span",{className:m.default.part}," 水平测试 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"首次登录此系统，必须先完成词汇量测试。只有完成词汇量测试，才会有针对性地推荐文章。"),s.default.createElement("li",null,"若不是首次登录，也可以进行词汇量测试。")),s.default.createElement("span",{className:m.default.part}," 进入学习 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案"),s.default.createElement("li",null,"确认自己不明白的单词，确认全部点击后，提交系统，等待翻译"),s.default.createElement("li",null,"选择自己不理解的句子，点击，提交系统，等待翻译"),s.default.createElement("li",null,"再次完成试题，如果觉得第一次做的完全正确，则重新再选一次以确认，如果觉得有误，则可以修改答案"),s.default.createElement("li",null,"点击确认后查看正确答案和解析"),s.default.createElement("li",null,"查看自己点击过的不认识的单词和句子"),s.default.createElement("li",null,"完成写作句型部分"),s.default.createElement("li",null,"阅读一篇课后阅读材料"),s.default.createElement("li",null,"做完阅读后，可选择性地跳过后面的三个模块，",s.default.createElement("strong",null,"提前"),"进行下一个单元的学习")),s.default.createElement("span",{className:m.default.part}," 开始复习 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"显示学过的课程列表。每一课可查看“重点词汇”、“长难句解析”、“全文翻译”、“习题解析”，并可重新做题。")),s.default.createElement("span",{className:m.default.part}," 统计列表 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"显示用户完成情况的统计。目前为用户不认识的词情况统计。")))}}]),t}(s.default.PureComponent);t.default=i},772:function(e,t,l){(e.exports=l(13)(!1)).push([e.i,"",""])},773:function(e,t,l){var a=l(772);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},774:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(l(2)),n=y(l(11)),r=y(l(4)),c=y(l(10)),u=y(l(3)),s=y(l(5)),m=y(l(1)),d=l(15),i=l(14),o=(l(267),y(l(773)),y(l(653))),f=y(l(636)),p=y(l(651)),E=y(l(638)),v=y(l(746)),N=(y(l(23)),y(l(71)),y(l(265)),y(l(264)),y(l(146))),g=y(l(147)),h=l(148),b=y(l(625)),x=(l(283),l(151)),w=l(266);function y(e){return e&&e.__esModule?e:{default:e}}var _=l(275),k=function(e){function t(e){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,s.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this,t=this.props,l=(t.username,t.logined,t.newTo,t.choice),a=t.learningType,n=sessionStorage.getItem("user");return"undefined"==sessionStorage.getItem("user")||""==sessionStorage.getItem("user")?m.default.createElement(b.default,null):(this.props.setUser(n,!0),sessionStorage.setItem("user",n)),m.default.createElement(m.default.Fragment,null,m.default.createElement("div",{id:"wrapper"},m.default.createElement("div",{className:"topbar"},m.default.createElement("div",{className:"topbar-left"},m.default.createElement("a",{href:"/",className:"logo"},m.default.createElement("span",null,"Learning",m.default.createElement("span",null,"System")),m.default.createElement("i",{className:"zmdi zmdi-layers"}))),m.default.createElement("div",{className:"navbar navbar-default",role:"navigation"},m.default.createElement("div",{className:"container"},m.default.createElement("ul",{className:"nav navbar-nav navbar-left"},m.default.createElement("li",null,m.default.createElement("button",{className:"button-menu-mobile open-left"},m.default.createElement("i",{className:"zmdi zmdi-menu"}))),m.default.createElement("li",null,m.default.createElement("h4",{className:"page-title"},0==l?m.default.createElement("div",null,"英语  > 水平测试"):1==l?m.default.createElement("div",null,m.default.createElement("span",null,"英语  > "),m.default.createElement("span",{onClick:function(){e.props.setLearningType("英语主页面")}},"进入学习"),""==a||"英语主页面"==a?null:"英语生词难句"==a?m.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 生词难句"):"英语汉译英"==a?m.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 写作句型练习"):"英语课后阅读材料"==a?m.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 课后阅读材料"):m.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," >  ",a," ")):2==l?m.default.createElement("div",null,"英语  > 开始复习"):3==l?m.default.createElement("div",null,"英语  > 统计图表"):m.default.createElement("div",null,"英语  > 科目帮助"))))))),m.default.createElement("div",{className:"left side-menu"},m.default.createElement("div",{className:"slimScrollDiv"},m.default.createElement("div",{className:"sidebar-inner slimscrollleft"},m.default.createElement("div",{className:"user-box"},m.default.createElement("div",{className:"user-img"},m.default.createElement("img",{src:"/static/images/users/avatar-1.jpg",alt:"user-img",title:this.props.username,className:"img-circle img-thumbnail img-responsive"}),m.default.createElement("div",{className:"user-status offline"},m.default.createElement("i",{className:"zmdi zmdi-dot-circle"}))),m.default.createElement("h5",null,this.props.username),m.default.createElement("ul",{className:"list-inline"},m.default.createElement("li",null,m.default.createElement("a",{className:"text-custom",onClick:function(){confirm("您确定要退出登录吗?")&&(location.href="https://passport.doxue.com/login?redirect_url=59.110.23.212&stamp="+Date.parse(new Date)+"&secret_code="+_("LOGIN_REDIRECT"+Date.parse(new Date)))},href:"javascript:void(0);"},m.default.createElement("i",{className:"zmdi zmdi-power"}))))),m.default.createElement("div",{id:"sidebar-menu"},m.default.createElement("ul",null,m.default.createElement("li",{className:"text-muted menu-title"},"英语"),m.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(0)}},m.default.createElement("a",{className:"waves-effect",style:0==l?{color:"#71b6f9"}:null},m.default.createElement("i",{className:"zmdi zmdi-layers"}),m.default.createElement("span",null," 水平测试 "))),m.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(1)}},m.default.createElement("a",{className:"waves-effect",style:1==l?{color:"#71b6f9"}:null},m.default.createElement("i",{className:"zmdi zmdi-library"}),m.default.createElement("span",null," 进入学习 "))),m.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(2)}},m.default.createElement("a",{className:"waves-effect",style:2==l?{color:"#71b6f9"}:null},m.default.createElement("i",{className:"zmdi zmdi-book"}),m.default.createElement("span",null," 开始复习 "))),m.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(3)}},m.default.createElement("a",{className:"waves-effect",style:3==l?{color:"#71b6f9"}:null},m.default.createElement("i",{className:"zmdi zmdi-chart"}),m.default.createElement("span",null," 统计图表 "))),m.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(4)}},m.default.createElement("a",{className:"waves-effect",style:4==l?{color:"#71b6f9"}:null},m.default.createElement("i",{className:"zmdi  zmdi-pin-help"}),m.default.createElement("span",null," 查看帮助 ")))),m.default.createElement("div",{className:"clearfix"})),m.default.createElement("div",{className:"clearfix"})))),m.default.createElement("div",{className:"content-page"},m.default.createElement("div",{className:"content"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row"},0==l?m.default.createElement(o.default,null):1==l?m.default.createElement(f.default,null):2==l?m.default.createElement(p.default,null):3==l?m.default.createElement(E.default,null):m.default.createElement("div",{className:"card-box"},m.default.createElement(v.default,null)))),m.default.createElement("footer",{className:"footer text-right"},"2017 - 2018 © 都学网所有")))))}}]),t}(m.default.PureComponent);t.default=(0,g.default)([N.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,newTo:e.UserManager.newTo,choice:e.SubjectFunctionSelect.choice,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,i.bindActionCreators)(h.actions,e),(0,i.bindActionCreators)(x.actions,e),(0,i.bindActionCreators)(w.actions,e))})],k)}}]);