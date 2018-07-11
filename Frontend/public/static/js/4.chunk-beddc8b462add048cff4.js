/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{604:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=S(o(2)),l=S(o(11)),a=S(o(4)),s=S(o(10)),r=S(o(3)),i=S(o(5)),u=S(o(1)),c=o(15),d=o(14),f=S(o(745)),g=o(100),m=o(275),p=(S(o(150)),S(o(149)),S(o(97))),h=S(o(98));function S(e){return e&&e.__esModule?e:{default:e}}var w=function(e){function t(e){(0,a.default)(this,t);var o=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return o.log=function(){var e=o.props.logined;console.log(e),e?(alert("您已经登录!"),o.setState({loginShow:!1})):o.setState({loginShow:!0,signupShow:!1})},o.sign=function(){o.setState({signupShow:!0,loginShow:!1})},o.exit=function(){o.props.logined?alert("确定退出登录吗?"):alert("您还未登录!"),sessionStorage.setItem("user",""),o.props.setUser(void 0,!1)},o.subject=["英语科目","逻辑科目","写作科目","数学科目"],o.introduction=["英语科目简介","逻辑科目简介","写作科目简介","数学科目简介"],o.useIntroduction=["英语学习部分分为测试、学习、复习三个部分","逻辑学习部分分为测试、知识点精要、学习、复习四个部分","写作学习部分分为论证有效性分析和论说文两个部分,涵盖了做题技巧、巩固练习和真题演练","数学学习部分分为测试、学习、复习三个部分"],o.state={loginShow:!1,signupShow:!1},o}return(0,i.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.logined,n=t.choice,l=t.username;console.log(this.props),o&&(console.log(l),this.setState({loginShow:!1}),sessionStorage.setItem("user",l));var a=sessionStorage.getItem("user");return console.log(sessionStorage.getItem("user")),console.log("undefined"==sessionStorage.getItem("user")||""==sessionStorage.getItem("user")||null==sessionStorage.getItem("user")),"undefined"==sessionStorage.getItem("user")||""==sessionStorage.getItem("user")||null==sessionStorage.getItem("user")||this.props.setUser(a,!0),u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:f.default.wholePage},u.default.createElement("div",{className:f.default.HUD},u.default.createElement("div",{className:f.default.sysTitle}," 学习系统 "),u.default.createElement("div",{className:f.default.loginOrSignup},u.default.createElement("a",{onClick:function(){return e.log()}},u.default.createElement("u",null," 登录 "))," ",u.default.createElement("a",null,"   "),u.default.createElement("a",{onClick:function(){return e.sign()}},u.default.createElement("u",null," 注册 "))," ",u.default.createElement("a",null,"   "),u.default.createElement("a",{onClick:function(){return e.exit()}},u.default.createElement("u",null," 退出登录 ")))),u.default.createElement("div",{className:f.default.subjectText,"background-color":"orange"},u.default.createElement(m.view,{text:this.subject,normalStyle:f.default.normalText,choosedStyle:f.default.chosedText})),u.default.createElement("div",{className:f.default.subjectIntroduction},u.default.createElement("div",{className:f.default.title},this.introduction[n]),u.default.createElement("br",null),u.default.createElement("div",{className:f.default.brifIntroduction},this.useIntroduction[n]),u.default.createElement("br",null),0==n?u.default.createElement("a",{href:"/learning/english"}," 开始英语学习 "):1==n?u.default.createElement("a",{href:"/learning/logic"}," 开始逻辑学习 "):2==n?u.default.createElement("a",{href:"/learning/writing"}," 开始写作学习 "):3==n?u.default.createElement("a",{href:"/learning/math"}," 开始数学学习 "):null),this.state.loginShow?u.default.createElement("div",{className:f.default.login},u.default.createElement(g.view,{loginOrSignup:"login",onSuccess:function(){alert("登录成功!"),e.setState({loginShow:!1})},signup:function(){return e.setState({signupShow:!0,loginShow:!1})},onCancel:function(){return e.setState({loginShow:!1,signupShow:!1})}})):null,this.state.signupShow?u.default.createElement("div",{className:f.default.login},u.default.createElement(g.view,{loginOrSignup:"signup",onCancel:function(){return e.setState({signupShow:!1,loginShow:!1})}})):null))}}]),t}(u.default.PureComponent);t.default=(0,h.default)([p.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,choice:e.SubjectSelect.choice}},function(e){return(0,n.default)({},(0,d.bindActionCreators)(g.actions,e))})],w)},744:function(e,t,o){(t=e.exports=o(13)(!1)).push([e.i,'._1ECh9abxv97B6JKxsGoO6Y{width:100%;height:100%;background:url("/static/images/background.jpg")}._3IYdPZERNGuH1FIOL02avU{position:absolute;height:8%;width:100%;background-color:#5379c6;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._2DskmxQoayBFXUPo1ku_La{position:absolute;left:5%;font-size:25px}._18mpZsBI2AeNNMKTlrdd-O{position:absolute;right:8%;font-size:30px}._18mpZsBI2AeNNMKTlrdd-O a:link{color:#000}._18mpZsBI2AeNNMKTlrdd-O a:hover{color:orange;text-decoration:none}._1jFX-s8mwoKvCyl1XuGabl{position:absolute;top:20%;left:75%;font-size:25px}._2NNs7k3XfjTLIw8Qm6mXl5{position:absolute;top:30%;left:10%;width:40%;font-size:20px}._1cZRr-_p5OkAd8XrKo1zoj{font-size:25px;font-weight:50px}.rIEJLEOGm4QlLpqPm8G14{font-size:20px}._3wgS1Iml0k6Wcs7km_BJPh{font-size:90px}._3TegdS2kqo3d9hrVxDFlv3{font-size:25px}.Xvadqd_WzmowNA1M0XLTR{font-size:25px;color:#5379c6}._1ofAPDxcnTec_OxxnSOL7J{color:orange}._2DmpbEeALRRdXKzOSlR9F2{color:#fff}.f-NLTQCLwl86m2OaILP_8{position:absolute;width:40%;height:70%;top:20%;left:30%;background:#fff;border-radius:8px;border:1px solid;border-color:orange}',""]),t.locals={wholePage:"_1ECh9abxv97B6JKxsGoO6Y",HUD:"_3IYdPZERNGuH1FIOL02avU",sysTitle:"_2DskmxQoayBFXUPo1ku_La",loginOrSignup:"_18mpZsBI2AeNNMKTlrdd-O",subjectText:"_1jFX-s8mwoKvCyl1XuGabl",subjectIntroduction:"_2NNs7k3XfjTLIw8Qm6mXl5",title:"_1cZRr-_p5OkAd8XrKo1zoj",brifIntroduction:"rIEJLEOGm4QlLpqPm8G14",selcetedStyle:"_3wgS1Iml0k6Wcs7km_BJPh",normalText:"_3TegdS2kqo3d9hrVxDFlv3",chosedText:"Xvadqd_WzmowNA1M0XLTR",chosedLogin:"_1ofAPDxcnTec_OxxnSOL7J",normalLogin:"_2DmpbEeALRRdXKzOSlR9F2",login:"f-NLTQCLwl86m2OaILP_8"}},745:function(e,t,o){var n=o(744);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};o(12)(n,l);n.locals&&(e.exports=n.locals)}}]);