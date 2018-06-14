/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22,13,14,15,21],{587:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=v(l(2)),n=v(l(11)),r=v(l(4)),u=v(l(10)),c=v(l(3)),o=v(l(5)),i=v(l(1)),d=l(16),s=l(15),f=(l(258),v(l(590))),m=(v(l(27)),v(l(257)),v(l(254)),v(l(256)),v(l(255)),v(l(259)),v(l(584)),v(l(253)),v(l(252))),p=v(l(143)),E=v(l(144)),h=(v(l(585)),l(261)),g=l(94);function v(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(e){(0,r.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.function=function(){l.props.loadPortContent({url:"/api/eng_getWordRate",body:{username:l.props.username,articleId:18}})},l}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.function()}},{key:"render",value:function(){var e=this.props.content;return console.log(e),i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("div",{className:f.default.title},"累计生词类型分析"),i.default.createElement("br",null),i.default.createElement("p",{className:f.default.title1},"不认识的单词在各单词库占比"),i.default.createElement("div",null,void 0==e?null:i.default.createElement("div",null,i.default.createElement("table",{className:"table table-bordered m-0",align:"center"},i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"中考"),i.default.createElement("th",null,"高考"),i.default.createElement("th",null,"四级"),i.default.createElement("th",null,"六级"),i.default.createElement("th",null,"考研"),i.default.createElement("th",null,"超纲"))),i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("th",null,e.zhongkao_rate),i.default.createElement("th",null,e.gaokao),i.default.createElement("th",null,e.siji),i.default.createElement("th",null,e.liuji),i.default.createElement("th",null,e.kaoyan),i.default.createElement("th",null,e.chaogang)))),i.default.createElement("br",null))),i.default.createElement("br",null)))}}]),t}(i.default.PureComponent);t.default=(0,E.default)([(0,m.default)({}),p.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,content:e.PortTest.content}},function(e){return(0,a.default)({},(0,s.bindActionCreators)(h.actions,e),(0,s.bindActionCreators)(g.actions,e))})],_)},589:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._2_XT_h__N8sBWVVDQRO9rg{font-size:20px;text-align:center;color:#188ae2}._3lDdDoemRdRwdEtsPzCG1{font-size:17px;text-align:center;color:#71b6f9}",""]),t.locals={title:"_2_XT_h__N8sBWVVDQRO9rg",title1:"_3lDdDoemRdRwdEtsPzCG1"}},590:function(e,t,l){var a=l(589);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},591:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._3_N66yja85kzh9dc3PoR_I{font-size:20px;text-align:center;color:#188ae2}._1vjV3K89R4h-_x4wcwB-rs{position:relative;left:5%;width:60%}._1Z-7-WZJ9nWOovV5cH7cYK{position:relative;width:100%;height:100px}._3R_PiR4hLK3Y26kYhPhoK4{position:absolute;right:35%}",""]),t.locals={title:"_3_N66yja85kzh9dc3PoR_I",chtoengall:"_1vjV3K89R4h-_x4wcwB-rs",textarea:"_1Z-7-WZJ9nWOovV5cH7cYK",ShowEngAndReturn:"_3R_PiR4hLK3Y26kYhPhoK4"}},592:function(e,t,l){var a=l(591);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},593:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=b(l(2)),n=b(l(11)),r=b(l(4)),u=b(l(10)),c=b(l(3)),o=b(l(5)),i=b(l(1)),d=l(16),s=l(15),f=(l(258),b(l(592))),m=b(l(27)),p=(b(l(585)),b(l(257)),b(l(254)),b(l(256)),b(l(255)),b(l(259)),l(260)),E=l(261),h=(b(l(584)),b(l(253)),b(l(252))),g=b(l(143)),v=b(l(144)),_=l(94);function b(e){return e&&e.__esModule?e:{default:e}}var N=function(e){function t(e){(0,r.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.loadChtoEng=function(){l.props.loadPortContent({url:"/api/eng_getWriteTest",body:{username:l.props.username,articleId:l.props.articleId}})},l.state={submit:!1},l}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.loadChtoEng()}},{key:"render",value:function(){var e=this,t=this.props,l=t.content,a=t.setLearningType;t.learningType;return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("div",{className:f.default.title}," 汉译英 "),i.default.createElement("br",null),0==l.length?null:l.map(function(t,l){return i.default.createElement("div",{key:l,className:f.default.chtoengall},t.chinese,i.default.createElement("br",null),i.default.createElement("textarea",{"aria-label":"With textarea",className:f.default.textarea}),e.state.submit?i.default.createElement("p",null," ",t.english):null)}),i.default.createElement("div",{className:f.default.ShowEngAndReturn},i.default.createElement(m.default,{text:"返回英语学习主页面",onClick:function(){a("英语主页面")}}),"  ",i.default.createElement(m.default,{text:"显示答案",onClick:function(){return e.setState({submit:!0})}}))))}}]),t}(i.default.PureComponent);t.default=(0,v.default)([(0,h.default)({}),g.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,content:e.PortTest.content,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,s.bindActionCreators)(E.actions,e),(0,s.bindActionCreators)(_.actions,e),(0,s.bindActionCreators)(p.actions,e))})],N)},594:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._2NVmeiwK1hEsJbyLCYLoaA{font-size:20px;text-align:center;color:#188ae2}._1pmLldB2kV_urmnRkg2UUF{position:relative;left:5%;width:80%}.huaw92tT4ZrDV_35lNHwH{position:absolute;right:15%}",""]),t.locals={title:"_2NVmeiwK1hEsJbyLCYLoaA",chtoengall:"_1pmLldB2kV_urmnRkg2UUF",ShowEngAndReturn:"huaw92tT4ZrDV_35lNHwH"}},595:function(e,t,l){var a=l(594);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},596:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=_(l(2)),n=_(l(11)),r=_(l(4)),u=_(l(10)),c=_(l(3)),o=_(l(5)),i=_(l(1)),d=_(l(595)),s=l(16),f=l(15),m=_(l(27)),p=(_(l(257)),_(l(254)),_(l(256)),_(l(255)),_(l(259)),l(260)),E=l(261),h=l(94),g=(_(l(253)),_(l(252)),_(l(143))),v=_(l(144));function _(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(e){(0,r.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.loadShengCi=function(e){l.props.loadPortContent({url:"/api/eng_getUserWord",body:{username:l.props.username,articleId:e}})},l.loadNanJu=function(e){l.props.loadPortContent3({url:"/api/eng_getUserSentence",body:{username:l.props.username,articleId:e}})},l.loadArticleId=function(){l.props.loadPortContent2({url:"/api/eng_getArticleId",body:{username:l.props.username}})},l.state={getArticleId:!1},l}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentWillMount",value:function(){this.loadArticleId()}},{key:"componentWillReceiveProps",value:function(e){void 0!=e.articleId&&e.articleId!=this.props.articleId&&(this.loadShengCi(e.articleId),this.loadNanJu(e.articleId))}},{key:"render",value:function(){var e=this.props,t=e.setLearningType,l=(e.learningType,e.articleId,e.shengci),a=e.nanju;return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("div",{className:d.default.title},"本课生词："),i.default.createElement("br",null),i.default.createElement("div",{className:d.default.chtoengall},void 0==l[0]?null:l.map(function(e,t){return i.default.createElement("div",{key:t},i.default.createElement("b",null,e.word_l),i.default.createElement("br",null),i.default.createElement("p",null,e.translate))})),i.default.createElement("br",null),i.default.createElement("div",{className:d.default.pageTitle},"本课难句："),i.default.createElement("br",null),i.default.createElement("div",{className:d.default.chtoengall},void 0==a?null:a.map(function(e,t){return i.default.createElement("div",{key:t},i.default.createElement("b",null,e.sentence),i.default.createElement("br",null),i.default.createElement("p",null,e.translate))})),i.default.createElement("br",null),i.default.createElement("div",{className:d.default.ShowEngAndReturn},i.default.createElement(m.default,{text:"返回英语学习主页面",onClick:function(){t("英语主页面")}}),"  ",i.default.createElement(m.default,{text:"进入汉译英",onClick:function(){t("英语汉译英")}}))))}}]),t}(i.default.PureComponent);t.default=(0,v.default)([g.default,(0,s.connect)(function(e){return{learningType:e.LearningTypeSelect.learningType,username:e.UserManager.name,articleId:e.PortTest.content2.pre_artid,shengci:e.PortTest.content,nanju:e.PortTest.content3}},function(e){return(0,a.default)({},(0,f.bindActionCreators)(E.actions,e),(0,f.bindActionCreators)(p.actions,e),(0,f.bindActionCreators)(h.actions,e))})],b)},597:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._2b0c1jUi5O8BjjksRG630{font-size:20px;text-align:center;color:#188ae2}._33DEaUhjRpKzDVdDTz4RJq{position:relative;left:5%;width:60%}.STXMghaIHwBG2FQDXJB1P{position:relative;width:100%;height:100px}._2pvCSAMJZuWlmrF6LIh_m2{position:absolute;right:35%}",""]),t.locals={title:"_2b0c1jUi5O8BjjksRG630",chtoengall:"_33DEaUhjRpKzDVdDTz4RJq",textarea:"STXMghaIHwBG2FQDXJB1P",ShowEngAndReturn:"_2pvCSAMJZuWlmrF6LIh_m2"}},598:function(e,t,l){var a=l(597);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},599:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=g(l(2)),n=g(l(11)),r=g(l(4)),u=g(l(10)),c=g(l(3)),o=g(l(5)),i=g(l(1)),d=l(16),s=l(15),f=(l(258),g(l(598))),m=(g(l(27)),g(l(585)),g(l(257)),g(l(254)),g(l(256)),g(l(255)),g(l(259)),l(260),l(261)),p=(g(l(584)),g(l(253)),g(l(252))),E=g(l(143)),h=g(l(144));l(94);function g(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){return(0,r.default)(this,t),(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("div",{className:f.default.title}," 词汇量测试 ")))}}]),t}(i.default.PureComponent);t.default=(0,h.default)([(0,p.default)({}),E.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId}},function(e){return(0,a.default)({},(0,s.bindActionCreators)(m.actions,e))})],v)},679:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._32B9luhO2zMewJWXGuVphJ{line-height:30px}.IFN2pSuiqu7f9Wav3ChPk{font-size:20px;text-align:center;color:#188ae2}._1EI8g1S0oFQHq7mOdj5w6w{color:#71b6f9}.N34Fvdo6-EdR20B3Cc_90{color:red;white-space:nowrap}li{float:none}",""]),t.locals={help:"_32B9luhO2zMewJWXGuVphJ",title:"IFN2pSuiqu7f9Wav3ChPk",part:"_1EI8g1S0oFQHq7mOdj5w6w",strong:"N34Fvdo6-EdR20B3Cc_90"}},680:function(e,t,l){var a=l(679);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},681:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(l(11)),n=d(l(4)),r=d(l(10)),u=d(l(3)),c=d(l(5)),o=d(l(1)),i=d(l(680));function d(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){return(0,n.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,c.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return o.default.createElement("div",{className:i.default.help},o.default.createElement("h4",{className:i.default.title}," 英语科目学习指南 "),o.default.createElement("span",{className:i.default.part}," 水平测试 "),o.default.createElement("br",null),o.default.createElement("ol",null,o.default.createElement("li",null,"首次登录此系统，必须先完成词汇量测试。只有完成词汇量测试，才会有针对性地推荐文章。"),o.default.createElement("li",null,"若不是首次登录，也可以进行词汇量测试。")),o.default.createElement("span",{className:i.default.part}," 个人中心 "),o.default.createElement("br",null),o.default.createElement("ol",null,o.default.createElement("li",null,"个人中心分为学习数据以及个人资料两个部分。"),o.default.createElement("li",null,"个人资料：可查看注册的用户名、密码等个人信息，并可针对需要进行相应修改。"),o.default.createElement("li",null,"学习数据：显示学过的课程列表，每一课可查看“本课生词”、“本课难句”、“本课错题”、“本课写作”。")),o.default.createElement("span",{className:i.default.part}," 进入学习 "),o.default.createElement("br",null),o.default.createElement("ol",null,o.default.createElement("li",null,"阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案"),o.default.createElement("li",null,"确认自己不明白的单词，确认全部点击后，提交系统，等待翻译"),o.default.createElement("li",null,"选择自己不理解的句子，点击，提交系统，等待翻译"),o.default.createElement("li",null,"再次完成试题，如果觉得第一次做的完全正确，则重新再选一次以确认，如果觉得有误，则可以修改答案"),o.default.createElement("li",null,"点击确认后查看正确答案和解析"),o.default.createElement("li",null,"完成英译汉部分"),o.default.createElement("li",null,"完成汉译英（写作）部分，点击确认后查看正确答案，必须做对才能进行下一步"),o.default.createElement("li",null,"查看自己的学习情况，并决定是否复习，或者",o.default.createElement("strong",null,"提前"),"进行下一个单元的学习")),o.default.createElement("span",{className:i.default.part}," 复习 "),o.default.createElement("br",null),o.default.createElement("ol",null,o.default.createElement("li",null,"显示学过的课程列表。每一课可查看“重点词汇”、“长难句解析”、“全文翻译”、“习题解析”。")))}}]),t}(o.default.PureComponent);t.default=s},697:function(e,t,l){(t=e.exports=l(13)(!1)).push([e.i,"._33C3xB1TM36pqZOJOyW6a1{height:100%;width:100%}._2ykT8v9VK6HsILrEQq9ru8{font-size:20px;text-align:center;color:#188ae2}._274Ifi72QqbLj_djkmrvkH{font-size:17px;text-align:center;color:#71b6f9}._2JLhKIeuOMtGErGmKuOt2A{color:#000}._1Q_J7ghY_Erk2niZFjdnxY{color:#71b6f9}",""]),t.locals={whole:"_33C3xB1TM36pqZOJOyW6a1",title:"_2ykT8v9VK6HsILrEQq9ru8",title1:"_274Ifi72QqbLj_djkmrvkH",normal_type:"_2JLhKIeuOMtGErGmKuOt2A",choosed_type:"_1Q_J7ghY_Erk2niZFjdnxY"}},698:function(e,t,l){var a=l(697);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},699:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=_(l(2)),n=_(l(11)),r=_(l(4)),u=_(l(10)),c=_(l(3)),o=_(l(5)),i=_(l(1)),d=l(16),s=l(15),f=_(l(698)),m=_(l(606)),p=_(l(596)),E=_(l(593)),h=(_(l(587)),l(260)),g=(_(l(253)),_(l(252)),_(l(143))),v=_(l(144));function _(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(e){(0,r.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={typeselect:!0,yuedu:!1,shengcinanju:!1,chtoeng:!1,changeColor1:!1,changeColor2:!1,changeColor3:!1,changeColor4:!1},l}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,l=t.setLearningType,a=t.learningType,n=[];return this.state.changeColor1?n[0]=f.default.choosed_type:n[0]=f.default.normal_type,this.state.changeColor2?n[1]=f.default.choosed_type:n[1]=f.default.normal_type,this.state.changeColor3?n[2]=f.default.choosed_type:n[2]=f.default.normal_type,this.state.changeColor4?n[3]=f.default.choosed_type:n[3]=f.default.normal_type,i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:f.default.whole},"英语主页面"==a||1==this.state.typeselect?i.default.createElement("div",{class:"row port m-b-20"},i.default.createElement("div",{className:f.default.title},"请选择学习模块"),i.default.createElement("div",{className:f.default.title1},"(建议按顺序选择)"),i.default.createElement("div",{class:"portfolioContainer"},i.default.createElement("div",{class:"col-sm-6 col-lg-3 col-md-4 natural personal"},i.default.createElement("div",{class:"gal-detail thumb",onClick:function(){l("英语阅读"),e.setState({typeselect:!1})}},i.default.createElement("div",{class:"image-popup"},i.default.createElement("img",{src:"/static/images/gallery/2.jpg",class:"thumb-img",alt:"work-thumbnail"})),i.default.createElement("h4",{className:n[0],onMouseOver:function(){return e.setState({changeColor1:!0})},onMouseLeave:function(){return e.setState({changeColor1:!1})}},"英语阅读"),i.default.createElement("p",{class:"text-muted"},"开始一篇英语阅读吧！",i.default.createElement("br",null),"根据目前英语水平进行推荐，请认真做题哟~可查看生词、难句、题目解析、全文翻译"),i.default.createElement("br",null),i.default.createElement("br",null))),i.default.createElement("div",{class:"col-sm-6 col-lg-3 col-md-4 creative personal photography"},i.default.createElement("div",{class:"gal-detail thumb",onClick:function(){l("英语生词难句"),e.setState({typeselect:!1})}},i.default.createElement("div",{class:"image-popup"},i.default.createElement("img",{src:"/static/images/gallery/5.jpg",class:"thumb-img",alt:"work-thumbnail"})),i.default.createElement("h4",{className:n[1],onMouseOver:function(){return e.setState({changeColor2:!0})},onMouseLeave:function(){return e.setState({changeColor2:!1})}},"生词难句"),i.default.createElement("p",{class:"text-muted"},"本课阅读过程中遇到的生词和难句，我们都帮你记录好了",i.default.createElement("br",null),"快来点击查看吧！"),i.default.createElement("br",null),i.default.createElement("br",null))),i.default.createElement("div",{class:"col-sm-6 col-lg-3 col-md-4 natural creative"},i.default.createElement("div",{class:"gal-detail thumb",onClick:function(){l("英语汉译英"),e.setState({typeselect:!1})}},i.default.createElement("div",{class:"image-popup"},i.default.createElement("img",{src:"/static/images/gallery/8.jpg",class:"thumb-img",alt:"work-thumbnail"})),i.default.createElement("h4",{className:n[2],onMouseOver:function(){return e.setState({changeColor3:!0})},onMouseLeave:function(){return e.setState({changeColor3:!1})}},"汉译英"),i.default.createElement("p",{class:"text-muted"},"给中文，写英文，so easy~",i.default.createElement("br",null),"每课将给出3句中文，可查看答案，巩固你的写作技能"),i.default.createElement("br",null),i.default.createElement("br",null))),i.default.createElement("div",{class:"col-sm-6 col-lg-3 col-md-4 natural creative"},i.default.createElement("div",{class:"gal-detail thumb",onClick:function(){l("英语汉译英"),e.setState({typeselect:!1})}},i.default.createElement("div",{class:"image-popup"},i.default.createElement("img",{src:"/static/images/gallery/8.jpg",class:"thumb-img",alt:"work-thumbnail"})),i.default.createElement("h4",{className:n[3],onMouseOver:function(){return e.setState({changeColor4:!0})},onMouseLeave:function(){return e.setState({changeColor4:!1})}},"课后阅读材料"),i.default.createElement("p",{class:"text-muted"},"还意犹未尽吗？",i.default.createElement("br",null),"这里有本课阅读的延伸阅读哦，快来点击查看吧"),i.default.createElement("br",null),i.default.createElement("br",null))))):"英语阅读"==a?i.default.createElement("div",{className:"card-box"},i.default.createElement(m.default,null)):"英语生词难句"==a?i.default.createElement("div",{className:"card-box"},i.default.createElement(p.default,null)):"英语汉译英"==a?i.default.createElement("div",{className:"card-box"},i.default.createElement(E.default,null)):null))}}]),t}(i.default.PureComponent);t.default=(0,v.default)([g.default,(0,d.connect)(function(e){return{learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,s.bindActionCreators)(h.actions,e))})],b)},700:function(e,t,l){(e.exports=l(13)(!1)).push([e.i,"",""])},701:function(e,t,l){var a=l(700);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(12)(a,n);a.locals&&(e.exports=a.locals)},702:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(l(2)),n=y(l(11)),r=y(l(4)),u=y(l(10)),c=y(l(3)),o=y(l(5)),i=y(l(1)),d=l(16),s=l(15),f=(l(258),y(l(701)),y(l(599))),m=y(l(699)),p=y(l(605)),E=y(l(587)),h=y(l(681)),g=(y(l(27)),y(l(50)),y(l(253)),y(l(252)),y(l(143))),v=y(l(144)),_=l(145),b=y(l(574)),N=(l(154),l(153));function y(e){return e&&e.__esModule?e:{default:e}}var C=function(e){function t(e){return(0,r.default)(this,t),(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,l=(t.username,t.logined,t.newTo,t.choice),a=sessionStorage.getItem("user");return"undefined"==sessionStorage.getItem("user")||""==sessionStorage.getItem("user")?i.default.createElement(b.default,null):(this.props.setUser(a,!0),sessionStorage.setItem("user",a)),i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{id:"wrapper"},i.default.createElement("div",{className:"topbar"},i.default.createElement("div",{className:"topbar-left"},i.default.createElement("a",{href:"/",className:"logo"},i.default.createElement("span",null,"Learning",i.default.createElement("span",null,"System")),i.default.createElement("i",{className:"zmdi zmdi-layers"}))),i.default.createElement("div",{className:"navbar navbar-default",role:"navigation"},i.default.createElement("div",{className:"container"},i.default.createElement("ul",{className:"nav navbar-nav navbar-left"},i.default.createElement("li",null,i.default.createElement("button",{className:"button-menu-mobile open-left"},i.default.createElement("i",{className:"zmdi zmdi-menu"}))),i.default.createElement("li",null,i.default.createElement("h4",{className:"page-title"},0==l?i.default.createElement("div",null,"英语  > 词汇测试"):1==l?i.default.createElement("div",null,"英语  > 进入学习"):2==l?i.default.createElement("div",null,"英语  > 开始复习"):3==l?i.default.createElement("div",null,"英语  > 统计图表"):i.default.createElement("div",null,"英语  > 科目帮助"))))))),i.default.createElement("div",{className:"left side-menu"},i.default.createElement("div",{className:"slimScrollDiv"},i.default.createElement("div",{className:"sidebar-inner slimscrollleft"},i.default.createElement("div",{className:"user-box"},i.default.createElement("div",{className:"user-img"},i.default.createElement("img",{src:"/static/images/users/avatar-1.jpg",alt:"user-img",title:this.props.username,className:"img-circle img-thumbnail img-responsive"}),i.default.createElement("div",{className:"user-status offline"},i.default.createElement("i",{className:"zmdi zmdi-dot-circle"}))),i.default.createElement("h5",null,this.props.username),i.default.createElement("ul",{className:"list-inline"},i.default.createElement("li",null,i.default.createElement("a",{href:"#"},i.default.createElement("i",{className:"zmdi zmdi-settings"}))),i.default.createElement("li",null,i.default.createElement("a",{href:"#",className:"text-custom"},i.default.createElement("i",{className:"zmdi zmdi-power"}))))),i.default.createElement("div",{id:"sidebar-menu"},i.default.createElement("ul",null,i.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(0)}},i.default.createElement("a",{className:"waves-effect"},i.default.createElement("i",{className:"zmdi zmdi-layers"})," ",i.default.createElement("span",null," 词汇测试 "))),i.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(1)}},i.default.createElement("a",{className:"waves-effect"},i.default.createElement("i",{className:"zmdi zmdi-library"})," ",i.default.createElement("span",null," 进入学习 ")," ")),i.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(2)}},i.default.createElement("a",{className:"waves-effect"},i.default.createElement("i",{className:"zmdi zmdi-book"})," ",i.default.createElement("span",null," 开始复习 ")," ")),i.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(3)}},i.default.createElement("a",{className:"waves-effect"},i.default.createElement("i",{className:"zmdi zmdi-chart"})," ",i.default.createElement("span",null," 统计图表 ")," ")),i.default.createElement("li",{onClick:function(){return e.props.setSubjectFunctionSelect(4)}},i.default.createElement("a",{className:"waves-effect"},i.default.createElement("i",{className:"zmdi  zmdi-pin-help"})," ",i.default.createElement("span",null," 查看帮助 ")," "))),i.default.createElement("div",{className:"clearfix"})),i.default.createElement("div",{className:"clearfix"})))),i.default.createElement("div",{className:"content-page"},i.default.createElement("div",{className:"content"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"row"},0==l?i.default.createElement("div",{className:"card-box"},i.default.createElement(f.default,null)):1==l?i.default.createElement(m.default,null):2==l?i.default.createElement("div",{className:"card-box"},i.default.createElement(p.default,null)):3==l?i.default.createElement("div",{className:"card-box"},i.default.createElement(E.default,null)):i.default.createElement("div",{className:"card-box"},i.default.createElement(h.default,null)))),i.default.createElement("footer",{className:"footer text-right"},"2017 - 2018 © 都学网所有")))))}}]),t}(i.default.PureComponent);t.default=(0,v.default)([g.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,newTo:e.UserManager.newTo,choice:e.SubjectFunctionSelect.choice}},function(e){return(0,a.default)({},(0,s.bindActionCreators)(_.actions,e),(0,s.bindActionCreators)(N.actions,e))})],C)}}]);