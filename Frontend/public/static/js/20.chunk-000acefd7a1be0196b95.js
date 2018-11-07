/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20,6,13],{639:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(l(11)),n=f(l(4)),r=f(l(10)),u=f(l(3)),s=f(l(5)),c=f(l(1)),d=l(15),o=(l(14),l(271),f(l(675)),l(151),f(l(270)),f(l(269)),f(l(148))),i=f(l(149));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){return(0,n.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,l=t.username;return t.logined&&sessionStorage.setItem("user",l),c.default.createElement("div",{className:"smallscreen"},c.default.createElement("div",{className:"account-pages"}),c.default.createElement("div",{className:"clearfix"}),c.default.createElement("div",{className:"wrapper-page"},c.default.createElement("div",{className:"text-center"},c.default.createElement("a",{href:"index.html",className:"logo"},c.default.createElement("span",null,"Learning",c.default.createElement("span",null,"System"))),c.default.createElement("h5",{className:"text-muted m-t-0 font-600"},"Welcome to login")),c.default.createElement("div",{className:"m-t-40 card-box"},c.default.createElement("div",{className:"text-center"},c.default.createElement("h4",{className:"text-uppercase font-bold m-b-0"},"Sign In")),c.default.createElement("div",{className:"panel-body"},c.default.createElement("form",{className:"form-horizontal m-t-20",action:"index.html"},c.default.createElement("div",{className:"form-group "},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("input",{className:"form-control",type:"text",required:"",placeholder:"Username"}))),c.default.createElement("div",{className:"form-group"},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("input",{className:"form-control",type:"password",required:"",placeholder:"Password"}))),c.default.createElement("div",{className:"form-group "},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("div",{className:"checkbox checkbox-custom"},c.default.createElement("input",{id:"checkbox-signup",type:"checkbox"}),c.default.createElement("label",{htmlFor:"checkbox-signup"},"Remember me")))),c.default.createElement("div",{className:"form-group text-center m-t-30"},c.default.createElement("div",{className:"col-xs-12"},c.default.createElement("button",{className:"btn btn-custom btn-bordred btn-block waves-effect waves-light",type:"submit",onClick:function(){return e.log()}},"Log In"))),c.default.createElement("div",{className:"form-group m-t-30 m-b-0"},c.default.createElement("div",{className:"col-sm-12"},c.default.createElement("a",{href:"page-recoverpw.html",className:"text-muted"},c.default.createElement("i",{className:"fa fa-lock m-r-5"})," Forgot your password?")))))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-12 text-center"},c.default.createElement("p",{className:"text-muted"},"Don't have an account? ",c.default.createElement("a",{href:"/signup",className:"text-primary m-l-5"},c.default.createElement("b",null,"Sign Up")))))))}}]),t}(c.default.PureComponent);t.default=(0,i.default)([o.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name}},function(e){return{}})],m)},650:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(l(11)),n=o(l(4)),r=o(l(10)),u=o(l(3)),s=o(l(5)),c=o(l(1)),d=o(l(653));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return(0,n.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.testnum,l=e.testtime,a=e.onClick;return c.default.createElement("div",null,c.default.createElement("div",{className:"row",style:{height:"80px"}}),c.default.createElement("div",{className:"col-lg-2"}),c.default.createElement("div",{className:"col-lg-8"},c.default.createElement("div",{className:"card-box",align:"center"},c.default.createElement("i",{className:"fa fa-pencil-square-o",style:{fontSize:"80px",height:"80px",width:"80px",margin:"10px"}}),c.default.createElement("br",null),c.default.createElement("h3",null,"本次测试信息"),c.default.createElement("br",null),c.default.createElement("p",{className:d.default.text},"题目总数:     ",c.default.createElement("span",{style:{color:"#ff5b5b"}}," ",t," ")),c.default.createElement("p",{className:d.default.text},"建议时间:     ",c.default.createElement("span",{style:{color:"#ff5b5b"}}," ",l," ")),c.default.createElement("br",null),c.default.createElement("p",null,c.default.createElement("button",{className:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-lg",onClick:a},"开始答题")))))}}]),t}(c.default.PureComponent);t.default=i},652:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._2LZ44fTTmH0qhI31FSHXuS{width:80px;height:80px;border:4px solid gray;border-color:#f9c851;border-radius:50%;margin:20px auto;position:relative;box-sizing:content-box}._2YJhOWwJvuJ9AQrkhHEx-z{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}._2u0UCaV33ZUkiDYUJIoh-W,._2YJhOWwJvuJ9AQrkhHEx-z{position:absolute;left:50%;background-color:#f9c851}._2u0UCaV33ZUkiDYUJIoh-W{width:7px;height:7px;border-radius:50%;margin-left:-3px;bottom:10px}._2irR43LusKCTvVrxOPY47J{font-size:18px;color:#98a6ad}",""]),t.locals={icon:"_2LZ44fTTmH0qhI31FSHXuS",iconbody:"_2YJhOWwJvuJ9AQrkhHEx-z",icondot:"_2u0UCaV33ZUkiDYUJIoh-W",text:"_2irR43LusKCTvVrxOPY47J"}},653:function(e,t,l){var a=l(652);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},661:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=["初中","高中","四级","六级"],l=["basic","mid","advance","extreme"],a=0;a<t.length;a++)if(e==l[a])return t[a];return"初中"}},671:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._3piBAv_NF4yAOw2hGnLgSH{font-size:16px}._1t-yLRT3Y9TezU6HVl0fNn{front-size:12px;color:#98a6ad;position:absolute;right:3.4%}",""]),t.locals={text:"_3piBAv_NF4yAOw2hGnLgSH",textgrey:"_1t-yLRT3Y9TezU6HVl0fNn"}},672:function(e,t,l){var a=l(671);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},673:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(l(2)),n=y(l(11)),r=y(l(4)),u=y(l(10)),s=y(l(3)),c=y(l(5)),d=y(l(1)),o=l(15),i=l(14),f=(l(271),y(l(672))),m=(y(l(649)),y(l(648)),y(l(272))),p=(y(l(270)),y(l(269))),E=y(l(148)),v=y(l(149)),h=l(292),g=y(l(657)),b=l(150),N=y(l(661)),x=y(l(660)),w=y(l(650));function y(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(e){(0,r.default)(this,t);var l=(0,s.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.loadTest=function(){l.props.loadTestQuestions({url:"/api/eng_wordTest"})},l.recordTestLevel=function(){l.props.recordWordTestLevel({url:"/api/eng_recordWordTest",body:{username:l.props.username,level:l.props.level}})},l.recordTestWords=function(){l.props.recordWordTestWords({url:"/api/eng_recordWordTestWords",body:{username:l.props.username,rightwords:(0,x.default)(l.props.rightwords),wrongwords:(0,x.default)(l.props.wrongwords)}}),l.submit=!0,l.submit&&(l.getUserLevel(l.props.username),l.getUserRate(l.props.username))},l.getUserLevel=function(e){l.props.getLevel({url:"/api/eng_getLevel",body:{username:e}})},l.getUserRate=function(e){l.props.getRate({url:"/api/eng_getWordTestRate",body:{username:e}})},l.state={enterTest:!0,enterLearning:!1,testAgain:!1,newEnterTest:!1,enterTestSure:!1},l.submit=!1,l}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.loadTest()}},{key:"componentWillReceiveProps",value:function(e){void 0==this.props.username&&void 0!=e.username&&(this.getUserLevel(e.username),this.getUserRate(e.username)),0==this.props.testend&&1==e.testend&&(this.recordTestLevel(),this.recordTestWords())}},{key:"render",value:function(){var e=this,t=this.props,l=(t.questions,t.ined),a=(t.forceNext,t.testend),n=(t.level,t.didTest),r=t.didLevel,u=(t.rightwords,t.wrongword,t.rate),s=this.state,c=s.enterLearning,o=s.enterTest,i=s.testAgain,p=s.newEnterTest,E=s.enterTestSure;return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",null,c?d.default.createElement(g.default,null):o&&n||o&&a||i&&a?d.default.createElement("div",{class:"panel panel-custom panel-border"},d.default.createElement("div",{class:"panel-heading"},d.default.createElement("h3",{class:"panel-title"},"Well Done !")),d.default.createElement("div",{class:"panel-body"},d.default.createElement("div",{className:f.default.text},"恭喜！您已完成词汇测试！您的英语水平为：",d.default.createElement("span",{style:{color:"#188ae2"}},(0,N.default)(r),"水平")),d.default.createElement("div",{className:f.default.text},"平均各类型正确率统计如下："),d.default.createElement("br",null),void 0==u?null:d.default.createElement("table",{className:"table table-bordered m-0",align:"center"},d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null,"中考"),d.default.createElement("th",null,"高考"),d.default.createElement("th",null,"四级"),d.default.createElement("th",null,"六级"))),d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("th",null,(100*parseFloat(u.zhongkao)).toFixed(1),"%"),d.default.createElement("th",null,(100*parseFloat(u.gaokao)).toFixed(1),"%"),d.default.createElement("th",null,(100*parseFloat(u.siji)).toFixed(1),"%"),d.default.createElement("th",null,(100*parseFloat(u.liuji)).toFixed(1),"%")))),d.default.createElement("br",null),d.default.createElement("div",{className:f.default.text},"请点击左侧的进入学习，开始英语学习吧"),d.default.createElement("br",null),d.default.createElement("div",{className:f.default.text},"如需要重新测试，请点击：",d.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({enterTest:!1,enterLearning:!1,testAgain:!0,enterTestSure:!1}),e.props.forceEnd(),e.loadTest()}},"再测一次"),"      ",d.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){e.setState({enterTest:!1,enterLearning:!0,testAgain:!1,enterTestSure:!1}),e.props.setSubjectFunctionSelect(1),e.props.forceEnd()}},"进入学习")))):p||i&&!a?d.default.createElement("div",null,E?d.default.createElement("div",null,d.default.createElement(m.default,{play:l},d.default.createElement(h.view,{loader:this.loadTest})),d.default.createElement("div",{className:f.default.textgrey},"测试时间约为2分钟")):d.default.createElement(w.default,{testnum:"约30道",testtime:"2  分钟",onClick:function(){return e.setState({enterTestSure:!0})}})):o&&!n?d.default.createElement("div",{class:"panel panel-custom panel-border"},d.default.createElement("div",{class:"panel-heading"},d.default.createElement("h3",{class:"panel-title"},"Sorry")),d.default.createElement("div",{class:"panel-body"},d.default.createElement("div",{className:f.default.text},"您为新用户，系统还没有您的数据，请点击开始水平测试，完成基础测评"),d.default.createElement("br",null),d.default.createElement("div",{className:f.default.text},"测试时间约为",d.default.createElement("span",null,"2"),"分钟"),d.default.createElement("br",null),d.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){return e.setState({newEnterTest:!0,enterTestSure:!1})}},"开始测试"))):null))}}]),t}(d.default.PureComponent);t.default=(0,v.default)([(0,p.default)({}),E.default,(0,o.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.EnglishWordTest.content,testend:e.EnglishWordTest.testendState,level:e.EnglishWordTest.nowAt.level,didTest:e.EnglishWordTest.recordFlagAndLevel.didTest,didLevel:e.EnglishWordTest.recordFlagAndLevel.level,choice:e.SubjectFunctionSelect.choice,rightwords:e.EnglishWordTest.rightwords,wrongwords:e.EnglishWordTest.wrongwords,rate:e.EnglishWordTest.rate}},function(e){return(0,a.default)({},(0,i.bindActionCreators)(h.actions,e),(0,i.bindActionCreators)(b.actions,e))})],_)},674:function(e,t,l){(e.exports=l(13)(!1)).push([e.i,"",""])},675:function(e,t,l){var a=l(674);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},810:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._32B9luhO2zMewJWXGuVphJ{font-size:16px;line-height:32px}.IFN2pSuiqu7f9Wav3ChPk{font-size:22px;text-align:center;color:#188ae2}._1EI8g1S0oFQHq7mOdj5w6w{color:#71b6f9}.N34Fvdo6-EdR20B3Cc_90{color:red;white-space:nowrap}li{float:none}",""]),t.locals={help:"_32B9luhO2zMewJWXGuVphJ",title:"IFN2pSuiqu7f9Wav3ChPk",part:"_1EI8g1S0oFQHq7mOdj5w6w",strong:"N34Fvdo6-EdR20B3Cc_90"}},811:function(e,t,l){var a=l(810);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},812:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(l(11)),n=o(l(4)),r=o(l(10)),u=o(l(3)),s=o(l(5)),c=o(l(1)),d=o(l(811));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return(0,n.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return c.default.createElement("div",{className:d.default.help},c.default.createElement("h4",{className:d.default.title}," 英语科目学习指南 "),c.default.createElement("span",{className:d.default.part}," 水平测试 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"首次登录此系统，必须先完成词汇量测试。只有完成词汇量测试，才会有针对性地推荐文章。"),c.default.createElement("li",null,"若不是首次登录，也可以进行词汇量测试。")),c.default.createElement("span",{className:d.default.part}," 进入学习 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案"),c.default.createElement("li",null,"确认自己不明白的单词，确认全部点击后，提交系统，等待翻译"),c.default.createElement("li",null,"选择自己不理解的句子，点击，提交系统，等待翻译"),c.default.createElement("li",null,"再次完成试题，如果觉得第一次做的完全正确，则重新再选一次以确认，如果觉得有误，则可以修改答案"),c.default.createElement("li",null,"点击确认后查看正确答案和解析"),c.default.createElement("li",null,"查看自己点击过的不认识的单词和句子"),c.default.createElement("li",null,"完成写作句型部分"),c.default.createElement("li",null,"阅读一篇课后阅读材料"),c.default.createElement("li",null,"做完阅读后，可选择性地跳过后面的三个模块，",c.default.createElement("strong",null,"提前"),"进行下一个单元的学习")),c.default.createElement("span",{className:d.default.part}," 开始复习 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"显示学过的课程列表。每一课可查看“重点词汇”、“长难句解析”、“全文翻译”、“习题解析”，并可重新做题。")),c.default.createElement("span",{className:d.default.part}," 统计列表 "),c.default.createElement("br",null),c.default.createElement("ol",null,c.default.createElement("li",null,"显示用户完成情况的统计。目前为用户不认识的词情况统计。")))}}]),t}(c.default.PureComponent);t.default=i},835:function(e,t,l){(e.exports=l(13)(!1)).push([e.i,"",""])},836:function(e,t,l){var a=l(835);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},837:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=w(l(2)),n=w(l(11)),r=w(l(4)),u=w(l(10)),s=w(l(3)),c=w(l(5)),d=w(l(1)),o=l(15),i=l(14),f=(l(271),w(l(836)),w(l(673))),m=w(l(657)),p=w(l(683)),E=w(l(662)),v=w(l(812)),h=(w(l(23)),w(l(72)),w(l(270)),w(l(269)),w(l(148))),g=w(l(149)),b=l(151),N=(w(l(639)),l(288),l(150)),x=l(268);function w(e){return e&&e.__esModule?e:{default:e}}var y=l(280),_=function(e){function t(e){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.props.getUserInfo()}},{key:"render",value:function(){var e=this,t=this.props,l=(t.username,t.logined,t.newTo,t.choice),a=t.learningType;return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{id:"wrapper"},d.default.createElement("div",{className:"topbar"},d.default.createElement("div",{className:"topbar-left"},d.default.createElement("a",{href:"/",className:"logo"},d.default.createElement("span",null,"Learning",d.default.createElement("span",null,"System")),d.default.createElement("i",{className:"zmdi zmdi-layers"}))),d.default.createElement("div",{className:"navbar navbar-default",role:"navigation"},d.default.createElement("div",{className:"container"},d.default.createElement("ul",{className:"nav navbar-nav navbar-left"},d.default.createElement("li",null,d.default.createElement("button",{className:"button-menu-mobile open-left"},d.default.createElement("i",{className:"zmdi zmdi-menu"}))),d.default.createElement("li",null,d.default.createElement("h4",{className:"page-title"},0==l?d.default.createElement("div",null,"英语  > 水平测试"):1==l?d.default.createElement("div",null,d.default.createElement("span",null,"英语  > "),d.default.createElement("span",{onClick:function(){e.props.setLearningType("英语主页面")}},"进入学习"),""==a||"英语主页面"==a?null:"英语生词难句"==a?d.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 生词难句"):"英语汉译英"==a?d.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 写作句型练习"):"英语课后阅读材料"==a?d.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 课后阅读材料"):d.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," >  ",a," ")):2==l?d.default.createElement("div",null,"英语  > 开始复习"):3==l?d.default.createElement("div",null,"英语  > 统计图表"):d.default.createElement("div",null,"英语  > 科目帮助"))))))),d.default.createElement("div",{className:"left side-menu"},d.default.createElement("div",{className:"slimScrollDiv"},d.default.createElement("div",{className:"sidebar-inner slimscrollleft"},d.default.createElement("div",{className:"user-box"},d.default.createElement("div",{className:"user-img"},d.default.createElement("img",{src:"/static/images/users/avatar-1.jpg",alt:"user-img",title:this.props.userid,className:"img-circle img-thumbnail img-responsive"}),d.default.createElement("div",{className:"user-status offline"},d.default.createElement("i",{className:"zmdi zmdi-dot-circle"}))),d.default.createElement("h5",null,this.props.userid),d.default.createElement("ul",{className:"list-inline"},d.default.createElement("li",null,d.default.createElement("a",{className:"text-custom",onClick:function(){confirm("您确定要退出登录吗?")&&(location.href="https://passport.doxue.com/login?redirect_url=39.106.175.128&stamp="+Date.parse(new Date)+"&secret_code="+y("LOGIN_REDIRECT"+Date.parse(new Date)))},href:"javascript:void(0);"},d.default.createElement("i",{className:"zmdi zmdi-power"}))))),d.default.createElement("div",{id:"sidebar-menu"},d.default.createElement("ul",null,d.default.createElement("li",{className:"text-muted menu-title"},"英语"),d.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(0)}},d.default.createElement("a",{className:"waves-effect",style:0==l?{color:"#71b6f9"}:null},d.default.createElement("i",{className:"zmdi zmdi-layers"}),d.default.createElement("span",null," 水平测试 "))),d.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(1)}},d.default.createElement("a",{className:"waves-effect",style:1==l?{color:"#71b6f9"}:null},d.default.createElement("i",{className:"zmdi zmdi-library"}),d.default.createElement("span",null," 进入学习 "))),d.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(2)}},d.default.createElement("a",{className:"waves-effect",style:2==l?{color:"#71b6f9"}:null},d.default.createElement("i",{className:"zmdi zmdi-book"}),d.default.createElement("span",null," 开始复习 "))),d.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(3)}},d.default.createElement("a",{className:"waves-effect",style:3==l?{color:"#71b6f9"}:null},d.default.createElement("i",{className:"zmdi zmdi-chart"}),d.default.createElement("span",null," 统计图表 "))),d.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(4)}},d.default.createElement("a",{className:"waves-effect",style:4==l?{color:"#71b6f9"}:null},d.default.createElement("i",{className:"zmdi  zmdi-pin-help"}),d.default.createElement("span",null," 查看帮助 ")))),d.default.createElement("div",{className:"clearfix"})),d.default.createElement("div",{className:"clearfix"})))),d.default.createElement("div",{className:"content-page"},d.default.createElement("div",{className:"content"},d.default.createElement("div",{className:"container"},d.default.createElement("div",{className:"row"},0==l?d.default.createElement(f.default,null):1==l?d.default.createElement(m.default,null):2==l?d.default.createElement(p.default,null):3==l?d.default.createElement(E.default,null):d.default.createElement("div",{className:"card-box"},d.default.createElement(v.default,null)))),d.default.createElement("footer",{className:"footer text-right"},"2017 - 2018 © 都学网所有")))))}}]),t}(d.default.PureComponent);t.default=(0,g.default)([h.default,(0,o.connect)(function(e){return{username:e.UserManager.name,userid:e.UserManager.id,logined:e.UserManager.logined,newTo:e.UserManager.newTo,choice:e.SubjectFunctionSelect.choice,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,i.bindActionCreators)(b.actions,e),(0,i.bindActionCreators)(N.actions,e),(0,i.bindActionCreators)(x.actions,e))})],_)}}]);