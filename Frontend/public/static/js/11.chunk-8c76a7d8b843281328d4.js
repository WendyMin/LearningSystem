/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{592:function(e,t,a){var n=a(646);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,o);n.locals&&(e.exports=n.locals)},606:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(a(2)),o=h(a(11)),i=h(a(4)),l=h(a(10)),r=h(a(3)),u=h(a(5)),s=h(a(1)),c=a(16),d=a(15),p=h(a(642)),f=a(148),m=a(97),x=a(96),b=(h(a(252)),h(a(145))),g=h(a(146));function h(e){return e&&e.__esModule?e:{default:e}}var T=function(e){function t(e){(0,i.default)(this,t);var a=(0,r.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.loadGongguContent=function(e){a.props.loadWriteContents({url:"/api/lunZhengGongGuContent",body:{requestQuestion:e}})},a.loadLastSaveTextContent=function(){console.log(a.props.username,a.props.choice),a.props.loadLastSaveText({url:"/api/lunZhengZanCunContent",body:{username:a.props.username,choice:a.props.choice}})},a.saveOrSubmitTextContent=function(e){a.props.saveOrSubmitText({url:"/api/lunZhengSaveOrSubmitText",body:{username:a.props.username,choice:a.props.choice,text:a.props.userInputText,saveOrSubmit:e}})},a.loadAllSubmitTextContent=function(){console.log(a.props.username,a.props.choice),a.props.loadAllSubmitText({url:"/api/lunZhengAllSubmitText",body:{username:a.props.username,choice:a.props.choice}})},a.usertext="",a.state={uploadText:!1,viewText:!1,viewEgArticle:!1},a}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.choice,n=t.name,o=t.example_article;t.lastSaveText,t.allSubmitTextName,t.allSubmitText,t.whichTextToView;return s.default.createElement(s.default.Fragment,null,""!==a?s.default.createElement("div",null,s.default.createElement("div",{className:"col-sm-8"},s.default.createElement("div",{className:"bg-picture card-box"},s.default.createElement(f.view,{className:p.default.zhentiContent,loader:this.loadWriteContents}))),s.default.createElement("div",{className:"col-sm-4"},s.default.createElement("div",{className:"card-box"},s.default.createElement("ul",{className:"nav nav-tabs"},s.default.createElement("li",{role:"presentation",className:"active"},s.default.createElement("a",{href:"#uploadArticle",role:"tab","data-toggle":"tab"},"上传文章")),s.default.createElement("li",{role:"presentation"},s.default.createElement("a",{href:"#viewArticle",role:"tab","data-toggle":"tab"},"已传文章")),s.default.createElement("li",{role:"presentation"},s.default.createElement("a",{href:"#EgArticle",role:"tab","data-toggle":"tab"},"参考范文"))),s.default.createElement("div",{className:"tab-content"},s.default.createElement("div",{role:"tabpanel",className:"tab-pane fade in active",id:"uploadArticle"},s.default.createElement(m.view,{inputSizeStyle:p.default.inputBox,buttonStyle:p.default.saveOrSubmit,loadLastSaveTextContent:function(){return e.loadLastSaveTextContent()},saveText:function(){return e.saveOrSubmitTextContent(0)},submitText:function(){return e.saveOrSubmitTextContent(1)}})),s.default.createElement("div",{role:"tabpanel",className:"tab-pane fade",id:"viewArticle"},s.default.createElement(x.view,{loadAllSubmitTextContent:function(){return e.loadAllSubmitTextContent()}})),s.default.createElement("div",{role:"tabpanel",className:"tab-pane fade",id:"EgArticle"},s.default.createElement("p",{className:p.default.article_title},n),o.map(function(e,t){return s.default.createElement("p",{key:t},"     ",e," ")})))))):null)}}]),t}(s.default.PureComponent);t.default=(0,g.default)([b.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,choice:e.ButtonExpand.choice,name:e.WriteContent.name,example_article:e.WriteContent.example_article,userInputText:e.EditText.userInputText,lastSaveText:e.EditText.lastSaveText,allSubmitTextName:e.ViewFinishedText.allSubmitTextName,allSubmitText:e.ViewFinishedText.allSubmitText,whichTextToView:e.EditText.whichTextToView}},function(e){return(0,n.default)({},(0,d.bindActionCreators)(f.actions,e),(0,d.bindActionCreators)(m.actions,e),(0,d.bindActionCreators)(x.actions,e))})],T)},641:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2GFqII4RJPg8PG1722ucIG{font-size:22px}.EwWXT-mUcrYenthY6l5BF{font-size:15px;color:#188ae2;text-align:center}",""]),t.locals={zhentiMingcheng:"_2GFqII4RJPg8PG1722ucIG",article_title:"EwWXT-mUcrYenthY6l5BF"}},642:function(e,t,a){var n=a(641);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,o);n.locals&&(e.exports=n.locals)},646:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._1pDfwxkGN-n9t4CM5sg1oS{display:flex;height:7%;width:100%;background-color:#5379c6;color:#fff;justify-content:center;font-size:25px;align-items:center;font-family:Arvo}._3dU7L3onwjdiE6B8m5eRVS{position:absolute;left:5%;font-size:25px}._3dmvScvxT0geU4y4t9OgO,._36BisqWDgHvmX_MPD5Dd0B,._265RLY1TTMfXp3OqL42sP6,.ySjjXQHT5p9YuvpBxP4UO{width:8%;position:absolute}._265RLY1TTMfXp3OqL42sP6{position:absolute;top:7%}._36BisqWDgHvmX_MPD5Dd0B{position:absolute;top:37%}._3dmvScvxT0geU4y4t9OgO{position:absolute;top:67%}.ySjjXQHT5p9YuvpBxP4UO{position:absolute;bottom:0}._2EVdG5g3a4eBE0yggNv-w_,._2zxWcpbITIh3gXGLyiu6ti,._35FOcX5jhB6jhTnOALeZIW,._38HLVAseqSq0KftBJMAqKn,.BNcazQGzcbt9wzguB3xXx,.TKJxzMI4RhfK_dzrFcECT{z-index:1}._2zxWcpbITIh3gXGLyiu6ti,.TKJxzMI4RhfK_dzrFcECT{position:absolute;width:100%;height:50%}._2zxWcpbITIh3gXGLyiu6ti{position:absolute;top:50%}.BNcazQGzcbt9wzguB3xXx{position:absolute;left:8%;top:7%;width:8%;height:9%}._38HLVAseqSq0KftBJMAqKn{position:absolute;left:16%;top:7%}._2EVdG5g3a4eBE0yggNv-w_{position:absolute;left:8%;top:7%}._35FOcX5jhB6jhTnOALeZIW{position:absolute;left:8%;top:50%}._1Kw1v5bcnLuI8rSeZrcI-J{font-size:20px;font-weight:800}._1SF2F8Vmuhg7yQadA01Md7{text-align:center;font-size:25px;color:blue}",""]),t.locals={HUD:"_1pDfwxkGN-n9t4CM5sg1oS",HUDtitle:"_3dU7L3onwjdiE6B8m5eRVS",button11:"_265RLY1TTMfXp3OqL42sP6",button22:"_36BisqWDgHvmX_MPD5Dd0B",button33:"_3dmvScvxT0geU4y4t9OgO",button44:"ySjjXQHT5p9YuvpBxP4UO",buttonjiqiao11:"TKJxzMI4RhfK_dzrFcECT",buttonjiqiao22:"_2zxWcpbITIh3gXGLyiu6ti",jiqiao:"BNcazQGzcbt9wzguB3xXx",zhaocuo:"_38HLVAseqSq0KftBJMAqKn",gonggu:"_2EVdG5g3a4eBE0yggNv-w_",zhenti:"_35FOcX5jhB6jhTnOALeZIW",title:"_1Kw1v5bcnLuI8rSeZrcI-J",centerbiaoti:"_1SF2F8Vmuhg7yQadA01Md7"}}}]);