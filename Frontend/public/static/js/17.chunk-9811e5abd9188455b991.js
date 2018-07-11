/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,15,16],{594:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(l(11)),n=f(l(4)),r=f(l(10)),u=f(l(3)),c=f(l(5)),s=f(l(1)),o=l(15),i=(l(14),l(151),f(l(613)),l(100),f(l(150)),f(l(149)),f(l(97))),d=f(l(98));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){return(0,n.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,c.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,l=t.username;return t.logined&&sessionStorage.setItem("user",l),s.default.createElement("div",{className:"smallscreen"},s.default.createElement("div",{className:"account-pages"}),s.default.createElement("div",{className:"clearfix"}),s.default.createElement("div",{className:"wrapper-page"},s.default.createElement("div",{className:"text-center"},s.default.createElement("a",{href:"index.html",className:"logo"},s.default.createElement("span",null,"Learning",s.default.createElement("span",null,"System"))),s.default.createElement("h5",{className:"text-muted m-t-0 font-600"},"Welcome to login")),s.default.createElement("div",{className:"m-t-40 card-box"},s.default.createElement("div",{className:"text-center"},s.default.createElement("h4",{className:"text-uppercase font-bold m-b-0"},"Sign In")),s.default.createElement("div",{className:"panel-body"},s.default.createElement("form",{className:"form-horizontal m-t-20",action:"index.html"},s.default.createElement("div",{className:"form-group "},s.default.createElement("div",{className:"col-xs-12"},s.default.createElement("input",{className:"form-control",type:"text",required:"",placeholder:"Username"}))),s.default.createElement("div",{className:"form-group"},s.default.createElement("div",{className:"col-xs-12"},s.default.createElement("input",{className:"form-control",type:"password",required:"",placeholder:"Password"}))),s.default.createElement("div",{className:"form-group "},s.default.createElement("div",{className:"col-xs-12"},s.default.createElement("div",{className:"checkbox checkbox-custom"},s.default.createElement("input",{id:"checkbox-signup",type:"checkbox"}),s.default.createElement("label",{htmlFor:"checkbox-signup"},"Remember me")))),s.default.createElement("div",{className:"form-group text-center m-t-30"},s.default.createElement("div",{className:"col-xs-12"},s.default.createElement("button",{className:"btn btn-custom btn-bordred btn-block waves-effect waves-light",type:"submit",onClick:function(){return e.log()}},"Log In"))),s.default.createElement("div",{className:"form-group m-t-30 m-b-0"},s.default.createElement("div",{className:"col-sm-12"},s.default.createElement("a",{href:"page-recoverpw.html",className:"text-muted"},s.default.createElement("i",{className:"fa fa-lock m-r-5"})," Forgot your password?")))))),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-sm-12 text-center"},s.default.createElement("p",{className:"text-muted"},"Don't have an account? ",s.default.createElement("a",{href:"/signup",className:"text-primary m-l-5"},s.default.createElement("b",null,"Sign Up")))))))}}]),t}(s.default.PureComponent);t.default=(0,d.default)([i.default,(0,o.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name}},function(e){return{}})],m)},605:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=g(l(2)),n=g(l(11)),r=g(l(4)),u=g(l(10)),c=g(l(3)),s=g(l(5)),o=g(l(1)),i=l(15),d=l(14),f=(l(151),g(l(608))),m=(g(l(268)),g(l(150)),g(l(149))),p=g(l(97)),E=g(l(98)),v=l(72);function g(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){(0,r.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.function=function(){l.props.loadPortContent({url:"/api/eng_getWordRate",body:{username:l.props.username,articleId:18}})},l}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.function()}},{key:"render",value:function(){var e=this.props.content;return console.log(e),o.default.createElement(o.default.Fragment,null,o.default.createElement("div",null,o.default.createElement("p",{className:f.default.title},"累计生词类型分析"),o.default.createElement("br",null),o.default.createElement("p",{className:f.default.title1},"不认识的单词在各单词库占比"),o.default.createElement("div",null,void 0==e?null:o.default.createElement("div",null,o.default.createElement("table",{className:"table table-bordered m-0",align:"center"},o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"中考"),o.default.createElement("th",null,"高考"),o.default.createElement("th",null,"四级"),o.default.createElement("th",null,"六级"),o.default.createElement("th",null,"考研"),o.default.createElement("th",null,"超纲"))),o.default.createElement("tbody",null,o.default.createElement("tr",null,o.default.createElement("th",null,e.zhongkao_rate),o.default.createElement("th",null,e.gaokao),o.default.createElement("th",null,e.siji),o.default.createElement("th",null,e.liuji),o.default.createElement("th",null,e.kaoyan),o.default.createElement("th",null,e.chaogang)))),o.default.createElement("br",null))),o.default.createElement("br",null)))}}]),t}(o.default.PureComponent);t.default=(0,E.default)([(0,m.default)({}),p.default,(0,i.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,content:e.PortTest.content}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(v.actions,e))})],h)},607:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._2_XT_h__N8sBWVVDQRO9rg{font-size:22px;text-align:center;color:#188ae2}._3lDdDoemRdRwdEtsPzCG1{font-size:16px;text-align:center;color:#71b6f9}",""]),t.locals={title:"_2_XT_h__N8sBWVVDQRO9rg",title1:"_3lDdDoemRdRwdEtsPzCG1"}},608:function(e,t,l){var a=l(607);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},609:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._2b0c1jUi5O8BjjksRG630{font-size:22px;text-align:center;color:#188ae2}._1BcKPt2GJWE2Ln548TV3wt{font-size:16px;text-align:center;color:#71b6f9}",""]),t.locals={title:"_2b0c1jUi5O8BjjksRG630",title1:"_1BcKPt2GJWE2Ln548TV3wt"}},610:function(e,t,l){var a=l(609);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},611:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=g(l(2)),n=g(l(11)),r=g(l(4)),u=g(l(10)),c=g(l(3)),s=g(l(5)),o=g(l(1)),i=l(15),d=l(14),f=(l(151),g(l(610))),m=(g(l(268)),g(l(150)),g(l(149))),p=g(l(97)),E=g(l(98)),v=l(275);function g(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){(0,r.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.loadTest=function(){l.props.loadTestQuestions({url:"/api/eng_wordTest"})},l}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.loadTest()}},{key:"render",value:function(){var e=this.props.questions;return console.log(e),o.default.createElement(o.default.Fragment,null,o.default.createElement("div",null,o.default.createElement("p",{className:f.default.title},"水平测试")))}}]),t}(o.default.PureComponent);t.default=(0,E.default)([(0,m.default)({}),p.default,(0,i.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.EnglishWordTest.content}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(v.actions,e))})],h)},612:function(e,t,l){(e.exports=l(13)(!1)).push([e.i,"",""])},613:function(e,t,l){var a=l(612);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},710:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._32B9luhO2zMewJWXGuVphJ{font-size:16px;line-height:32px}.IFN2pSuiqu7f9Wav3ChPk{font-size:22px;text-align:center;color:#188ae2}._1EI8g1S0oFQHq7mOdj5w6w{color:#71b6f9}.N34Fvdo6-EdR20B3Cc_90{color:red;white-space:nowrap}li{float:none}",""]),t.locals={help:"_32B9luhO2zMewJWXGuVphJ",title:"IFN2pSuiqu7f9Wav3ChPk",part:"_1EI8g1S0oFQHq7mOdj5w6w",strong:"N34Fvdo6-EdR20B3Cc_90"}},711:function(e,t,l){var a=l(710);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},712:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(l(11)),n=i(l(4)),r=i(l(10)),u=i(l(3)),c=i(l(5)),s=i(l(1)),o=i(l(711));function i(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){return(0,n.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,c.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:o.default.help},s.default.createElement("h4",{className:o.default.title}," 英语科目学习指南 "),s.default.createElement("span",{className:o.default.part}," 水平测试 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"首次登录此系统，必须先完成词汇量测试。只有完成词汇量测试，才会有针对性地推荐文章。"),s.default.createElement("li",null,"若不是首次登录，也可以进行词汇量测试。")),s.default.createElement("span",{className:o.default.part}," 个人中心 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"个人中心分为学习数据以及个人资料两个部分。"),s.default.createElement("li",null,"个人资料：可查看注册的用户名、密码等个人信息，并可针对需要进行相应修改。"),s.default.createElement("li",null,"学习数据：显示学过的课程列表，每一课可查看“本课生词”、“本课难句”、“本课错题”、“本课写作”。")),s.default.createElement("span",{className:o.default.part}," 进入学习 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案"),s.default.createElement("li",null,"确认自己不明白的单词，确认全部点击后，提交系统，等待翻译"),s.default.createElement("li",null,"选择自己不理解的句子，点击，提交系统，等待翻译"),s.default.createElement("li",null,"再次完成试题，如果觉得第一次做的完全正确，则重新再选一次以确认，如果觉得有误，则可以修改答案"),s.default.createElement("li",null,"点击确认后查看正确答案和解析"),s.default.createElement("li",null,"完成英译汉部分"),s.default.createElement("li",null,"完成汉译英（写作）部分，点击确认后查看正确答案，必须做对才能进行下一步"),s.default.createElement("li",null,"查看自己的学习情况，并决定是否复习，或者",s.default.createElement("strong",null,"提前"),"进行下一个单元的学习")),s.default.createElement("span",{className:o.default.part}," 复习 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"显示学过的课程列表。每一课可查看“重点词汇”、“长难句解析”、“全文翻译”、“习题解析”。")))}}]),t}(s.default.PureComponent);t.default=d},715:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._26I4_wW6m_mZiDBYfAUBi4{font-size:22px;text-align:center;color:#188ae2}._2KkuZfE3VgVYHKPjoIq6SS{font-size:18px;color:#505458;font-family:Karla,sans-serif;margin:10px 0;line-height:32px}._LhkFiqMGS2zfSWVT11O3{float:right;margin-right:10px}",""]),t.locals={title:"_26I4_wW6m_mZiDBYfAUBi4",title18:"_2KkuZfE3VgVYHKPjoIq6SS",buttonright:"_LhkFiqMGS2zfSWVT11O3"}},716:function(e,t,l){var a=l(715);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},717:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(l(2)),n=h(l(11)),r=h(l(4)),u=h(l(10)),c=h(l(3)),s=h(l(5)),o=h(l(1)),i=h(l(716)),d=l(15),f=l(14),m=(h(l(23)),h(l(156)),h(l(153)),h(l(152)),h(l(155)),h(l(157)),l(267)),p=l(159),E=l(72),v=(h(l(150)),h(l(149)),h(l(97))),g=h(l(98));function h(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(e){(0,r.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.loadExtraArticle=function(e){l.props.loadPortContent({url:"/api/eng_getExtraArticle",body:{articleId:e}})},l.loadArticleId=function(){l.props.loadPortContent2({url:"/api/eng_getArticleId",body:{username:l.props.username}})},l.haveArticleId=!1,l.state={getArticleId:!1},l}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentWillMount",value:function(){this.loadArticleId()}},{key:"componentWillReceiveProps",value:function(e){void 0!=e.articleId&&!1===this.haveArticleId&&(this.loadExtraArticle(e.articleId),this.haveArticleId=!0)}},{key:"render",value:function(){var e=this.props,t=e.setLearningType,l=(e.learningType,e.articleId,e.extraArticle);return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",null,o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-6"},o.default.createElement("div",{className:"card-box kanban-box"},o.default.createElement("div",{className:"kanban-detail"},o.default.createElement("p",{className:i.default.title},l.title),o.default.createElement("ul",{className:"list-inline m-b-0"},o.default.createElement("li",null,o.default.createElement("p",{className:i.default.title18},l.content),o.default.createElement("br",null)))))),o.default.createElement("div",{className:"col-md-6"},o.default.createElement("div",{className:"card-box kanban-box"},o.default.createElement("div",{className:"kanban-detail"},o.default.createElement("p",{className:i.default.title},l.title_translate),o.default.createElement("ul",{className:"list-inline m-b-0"},o.default.createElement("li",null,o.default.createElement("p",{className:i.default.title18},l.content_translate),o.default.createElement("br",null))))))),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:i.default.buttonright},o.default.createElement("button",{class:"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5",onClick:function(){t("英语主页面")}},"返回英语学习主页面")))))}}]),t}(o.default.PureComponent);t.default=(0,g.default)([v.default,(0,d.connect)(function(e){return{learningType:e.LearningTypeSelect.learningType,username:e.UserManager.name,articleId:e.PortTest.content2.pre_artid,extraArticle:e.PortTest.content}},function(e){return(0,a.default)({},(0,f.bindActionCreators)(p.actions,e),(0,f.bindActionCreators)(m.actions,e),(0,f.bindActionCreators)(E.actions,e))})],_)},736:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._33C3xB1TM36pqZOJOyW6a1{height:100%;width:100%}._2ykT8v9VK6HsILrEQq9ru8{font-size:22px;text-align:center;color:#188ae2}._274Ifi72QqbLj_djkmrvkH{font-size:16px;text-align:center;color:#71b6f9}._2JLhKIeuOMtGErGmKuOt2A{color:#000}._1Q_J7ghY_Erk2niZFjdnxY{color:#71b6f9}._2xD1pqaNqMy61XS3THmFAl{font-size:13px;color:#98a6ad!important;height:84px;overflow:hidden;text-overflow:ellipsis;word-break:break-word;-webkit-line-clamp:4;display:-webkit-box;-webkit-box-orient:vertical;margin-bottom:30px}",""]),t.locals={whole:"_33C3xB1TM36pqZOJOyW6a1",title:"_2ykT8v9VK6HsILrEQq9ru8",title1:"_274Ifi72QqbLj_djkmrvkH",normal_type:"_2JLhKIeuOMtGErGmKuOt2A",choosed_type:"_1Q_J7ghY_Erk2niZFjdnxY",text_muted1:"_2xD1pqaNqMy61XS3THmFAl"}},737:function(e,t,l){var a=l(736);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},738:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=b(l(2)),n=b(l(11)),r=b(l(4)),u=b(l(10)),c=b(l(3)),s=b(l(5)),o=b(l(1)),i=l(15),d=l(14),f=b(l(737)),m=b(l(621)),p=b(l(620)),E=b(l(619)),v=b(l(717)),g=(b(l(605)),l(267)),h=(b(l(150)),b(l(149)),b(l(97))),_=b(l(98));function b(e){return e&&e.__esModule?e:{default:e}}var N=function(e){function t(e){(0,r.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={typeselect:!0,yuedu:!1,shengcinanju:!1,chtoeng:!1,changeColor1:!1,changeColor2:!1,changeColor3:!1,changeColor4:!1},l}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,l=t.setLearningType,a=t.learningType,n=[];return this.state.changeColor1?n[0]=f.default.choosed_type:n[0]=f.default.normal_type,this.state.changeColor2?n[1]=f.default.choosed_type:n[1]=f.default.normal_type,this.state.changeColor3?n[2]=f.default.choosed_type:n[2]=f.default.normal_type,this.state.changeColor4?n[3]=f.default.choosed_type:n[3]=f.default.normal_type,o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:f.default.whole},"英语主页面"==a||1==this.state.typeselect?o.default.createElement("div",{class:"row port m-b-20"},o.default.createElement("div",{className:f.default.title},"请选择学习模块"),o.default.createElement("div",{className:f.default.title1},"(建议按顺序选择)"),o.default.createElement("div",{class:"portfolioContainer"},o.default.createElement("a",{href:"javascript:void(0);"},o.default.createElement("div",{class:"col-sm-6 col-lg-3 col-md-4 natural personal"},o.default.createElement("div",{class:"gal-detail thumb",onClick:function(){l("英语阅读"),e.setState({typeselect:!1})}},o.default.createElement("div",{class:"image-popup"},o.default.createElement("img",{src:"/static/images/gallery/2.jpg",class:"thumb-img",alt:"work-thumbnail"})),o.default.createElement("h4",{className:n[0],onMouseOver:function(){return e.setState({changeColor1:!0})},onMouseLeave:function(){return e.setState({changeColor1:!1})}},"英语阅读"),o.default.createElement("p",{className:f.default.text_muted1},"开始一篇英语阅读吧！",o.default.createElement("br",null),"根据目前英语水平进行推荐，请认真做题哟~可查看生词、难句、题目解析、全文翻译")))),o.default.createElement("a",{href:"javascript:void(0);"},o.default.createElement("div",{class:"col-sm-6 col-lg-3 col-md-4 creative personal photography"},o.default.createElement("div",{class:"gal-detail thumb",onClick:function(){l("英语生词难句"),e.setState({typeselect:!1})}},o.default.createElement("div",{class:"image-popup"},o.default.createElement("img",{src:"/static/images/gallery/5.jpg",class:"thumb-img",alt:"work-thumbnail"})),o.default.createElement("h4",{className:n[1],onMouseOver:function(){return e.setState({changeColor2:!0})},onMouseLeave:function(){return e.setState({changeColor2:!1})}},"生词难句"),o.default.createElement("p",{className:f.default.text_muted1},"本课阅读过程中遇到的生词和难句，我们都帮你记录好了",o.default.createElement("br",null),"快来点击查看吧！")))),o.default.createElement("a",{href:"javascript:void(0);"},o.default.createElement("div",{class:"col-sm-6 col-lg-3 col-md-4 natural creative"},o.default.createElement("div",{class:"gal-detail thumb",onClick:function(){l("英语汉译英"),e.setState({typeselect:!1})}},o.default.createElement("div",{class:"image-popup"},o.default.createElement("img",{src:"/static/images/gallery/8.jpg",class:"thumb-img",alt:"work-thumbnail"})),o.default.createElement("h4",{className:n[2],onMouseOver:function(){return e.setState({changeColor3:!0})},onMouseLeave:function(){return e.setState({changeColor3:!1})}},"汉译英"),o.default.createElement("p",{className:f.default.text_muted1},"给中文，写英文，so easy~",o.default.createElement("br",null),"每课将给出3句中文，可查看答案，巩固你的写作技能")))),o.default.createElement("a",{href:"javascript:void(0);"},o.default.createElement("div",{class:"col-sm-6 col-lg-3 col-md-4 natural creative"},o.default.createElement("div",{class:"gal-detail thumb",onClick:function(){l("英语课后阅读材料"),e.setState({typeselect:!1})}},o.default.createElement("div",{class:"image-popup"},o.default.createElement("img",{src:"/static/images/gallery/3.jpg",class:"thumb-img",alt:"work-thumbnail"})),o.default.createElement("h4",{className:n[3],onMouseOver:function(){return e.setState({changeColor4:!0})},onMouseLeave:function(){return e.setState({changeColor4:!1})}},"课后阅读材料"),o.default.createElement("p",{className:f.default.text_muted1},"还意犹未尽吗？",o.default.createElement("br",null),"这里有本课阅读的延伸阅读哦，快来点击查看吧")))))):"英语阅读"==a?o.default.createElement(m.default,null):"英语生词难句"==a?o.default.createElement(p.default,null):"英语汉译英"==a?o.default.createElement(E.default,null):"英语课后阅读材料"==a?o.default.createElement(v.default,null):null))}}]),t}(o.default.PureComponent);t.default=(0,_.default)([h.default,(0,i.connect)(function(e){return{learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(g.actions,e))})],N)},739:function(e,t,l){(e.exports=l(13)(!1)).push([e.i,"",""])},740:function(e,t,l){var a=l(739);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},741:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(l(2)),n=y(l(11)),r=y(l(4)),u=y(l(10)),c=y(l(3)),s=y(l(5)),o=y(l(1)),i=l(15),d=l(14),f=(l(151),y(l(740)),y(l(611))),m=y(l(738)),p=y(l(618)),E=y(l(605)),v=y(l(712)),g=(y(l(23)),y(l(62)),y(l(150)),y(l(149)),y(l(97))),h=y(l(98)),_=l(100),b=y(l(594)),N=(l(276),l(160)),x=l(267);function y(e){return e&&e.__esModule?e:{default:e}}var k=l(162),w=function(e){function t(e){return(0,r.default)(this,t),(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,l=(t.username,t.logined,t.newTo,t.choice),a=t.learningType,n=sessionStorage.getItem("user");return"undefined"==sessionStorage.getItem("user")||""==sessionStorage.getItem("user")?o.default.createElement(b.default,null):(this.props.setUser(n,!0),sessionStorage.setItem("user",n)),o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"wrapper"},o.default.createElement("div",{className:"topbar"},o.default.createElement("div",{className:"topbar-left"},o.default.createElement("a",{href:"/",className:"logo"},o.default.createElement("span",null,"Learning",o.default.createElement("span",null,"System")),o.default.createElement("i",{className:"zmdi zmdi-layers"}))),o.default.createElement("div",{className:"navbar navbar-default",role:"navigation"},o.default.createElement("div",{className:"container"},o.default.createElement("ul",{className:"nav navbar-nav navbar-left"},o.default.createElement("li",null,o.default.createElement("button",{className:"button-menu-mobile open-left"},o.default.createElement("i",{className:"zmdi zmdi-menu"}))),o.default.createElement("li",null,o.default.createElement("h4",{className:"page-title"},0==l?o.default.createElement("div",null,"英语  > 词汇测试"):1==l?o.default.createElement("div",null,o.default.createElement("span",null,"英语  > "),o.default.createElement("span",{onClick:function(){e.props.setLearningType("英语主页面")}},"进入学习"),""==a||"英语主页面"==a?null:"英语生词难句"==a?o.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 生词难句"):"英语汉译英"==a?o.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 汉译英"):"英语课后阅读材料"==a?o.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," > 课后阅读材料"):o.default.createElement("span",{onClick:function(){e.props.setLearningType(a)}}," >  ",a," ")):2==l?o.default.createElement("div",null,"英语  > 开始复习"):3==l?o.default.createElement("div",null,"英语  > 统计图表"):o.default.createElement("div",null,"英语  > 科目帮助"))))))),o.default.createElement("div",{className:"left side-menu"},o.default.createElement("div",{className:"slimScrollDiv"},o.default.createElement("div",{className:"sidebar-inner slimscrollleft"},o.default.createElement("div",{className:"user-box"},o.default.createElement("div",{className:"user-img"},o.default.createElement("img",{src:"/static/images/users/avatar-1.jpg",alt:"user-img",title:this.props.username,className:"img-circle img-thumbnail img-responsive"}),o.default.createElement("div",{className:"user-status offline"},o.default.createElement("i",{className:"zmdi zmdi-dot-circle"}))),o.default.createElement("h5",null,this.props.username),o.default.createElement("ul",{className:"list-inline"},o.default.createElement("li",null,o.default.createElement("a",{href:"#"},o.default.createElement("i",{className:"zmdi zmdi-settings"}))),o.default.createElement("li",null,o.default.createElement("a",{className:"text-custom",onClick:function(){confirm("您确定要退出登录吗?")&&(location.href="https://passport.doxue.com/login?redirect_url=59.110.23.212&stamp="+Date.parse(new Date)+"&secret_code="+k("LOGIN_REDIRECT"+Date.parse(new Date)))},href:"javascript:void(0);"},o.default.createElement("i",{className:"zmdi zmdi-power"}))))),o.default.createElement("div",{id:"sidebar-menu"},o.default.createElement("ul",null,o.default.createElement("li",{className:"text-muted menu-title"},"英语"),o.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(0)}},o.default.createElement("a",{className:"waves-effect"},o.default.createElement("i",{className:"zmdi zmdi-layers"})," ",o.default.createElement("span",null," 水平测试 "))),o.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(1)}},o.default.createElement("a",{className:"waves-effect"},o.default.createElement("i",{className:"zmdi zmdi-library"})," ",o.default.createElement("span",null," 进入学习 ")," ")),o.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(2)}},o.default.createElement("a",{className:"waves-effect"},o.default.createElement("i",{className:"zmdi zmdi-book"})," ",o.default.createElement("span",null," 开始复习 ")," ")),o.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(3)}},o.default.createElement("a",{className:"waves-effect"},o.default.createElement("i",{className:"zmdi zmdi-chart"})," ",o.default.createElement("span",null," 统计图表 ")," ")),o.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(4)}},o.default.createElement("a",{className:"waves-effect"},o.default.createElement("i",{className:"zmdi  zmdi-pin-help"})," ",o.default.createElement("span",null," 查看帮助 ")," "))),o.default.createElement("div",{className:"clearfix"})),o.default.createElement("div",{className:"clearfix"})))),o.default.createElement("div",{className:"content-page"},o.default.createElement("div",{className:"content"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row"},0==l?o.default.createElement("div",{className:"card-box"},o.default.createElement(f.default,null)):1==l?o.default.createElement(m.default,null):2==l?o.default.createElement(p.default,null):3==l?o.default.createElement("div",{className:"card-box"},o.default.createElement(E.default,null)):o.default.createElement("div",{className:"card-box"},o.default.createElement(v.default,null)))),o.default.createElement("footer",{className:"footer text-right"},"2017 - 2018 © 都学网所有")))))}}]),t}(o.default.PureComponent);t.default=(0,h.default)([g.default,(0,i.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,newTo:e.UserManager.newTo,choice:e.SubjectFunctionSelect.choice,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(_.actions,e),(0,d.bindActionCreators)(N.actions,e),(0,d.bindActionCreators)(x.actions,e))})],w)}}]);