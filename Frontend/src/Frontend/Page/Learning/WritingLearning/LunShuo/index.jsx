import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import UserManagerWindow from "Windows/UserManager";

import {
  view as ButtonExpand,
  actions as ButtonExpandActions
} from 'Connected/ButtonExpand';
import {
  view as WriteKnowledge,
  actions as WriteKnowledgeActions
} from 'Connected/WriteKnowledge';
import {
  view as WriteContent,
  actions as WriteContentActions
} from 'Connected/WriteContent';
import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunShuo extends React.PureComponent {

  constructor( props ){
    super( props );
    this.jiqiao = "";
    this.RightLiyiType = [];
    this.WrongLiyiType = [];
    this.RightLiyi = [];
    this.WrongLiyi = [];

    this.state = {
      jiqiaoDisplay: false,
      zhaocuoDisplay: false,
      gongguDisplay: false,
      zhentiDisplay: false,
      gongguShow: false,
      zhentiShow: false,
      ///contentDisplay: false,
      titleContentDisplay: false,
      //optionContentDisplay: false,
      acknowledgeDisplay: false,
      gongguEgArticle: false,
      zhentiEgarticle: false,
      zhentiEgComment: false,
      userFileDisplay: false,
      userGongguFile: false
    };

  }

/**
 * 点击写作技巧精讲按钮之后改变值
 */
  jiqiao_type = () => {
    this.setState({
      jiqiaoDisplay: !this.state.jiqiaoDisplay,
      zhaocuoDisplay: false,
      gongguDisplay: false,
      zhentiDisplay: false
    })
  }


  loadButtonContents_jiqiao = ( num ) => {
    this.jiqiao = num ;
    this.setState({
      jiqiaoDisplay: true,
      zhaocuoDisplay: true,
      gongguDisplay: false,
      zhentiDisplay: false
    });
    if ( num == 0 ) {
      this.props.loadButtonContents({
        url: "/api/lunshuoTixingtupo"
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_tixingtupo.php"
      });
    }
    else if ( num == 1) {
      this.props.loadButtonContents({
        url: "/api/lunshuoShentiliyi",
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_shentiliyi.php",
      });
    }
    else if ( num == 2) {
      this.props.loadButtonContents({
        url: "/api/lunshuoJingdianmuban",
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_jingdianmuban.php",
      });
    }
    else if ( num == 3) {
      this.props.loadButtonContents({
        url: "/api/lunshuoHualongdianjing",
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_hualongdianjing.php",
      });
    }
    else if ( num == 4) {
      this.props.loadButtonContents({
        url: "/api/lunshuoSucaibaodian",
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_sucaibaodian.php",
      });
    }

  }

/**
 * 巩固强化练习按钮展开的内容
 */
  loadButtonContents_gonggu = () => {
    this.setState({
      jiqiaoDisplay: false,
      zhaocuoDisplay: false,
      gongguDisplay: !this.state.gongguDisplay,
      zhentiDisplay: false
    });
    this.props.loadButtonContents({
      url: "/api/lunshuoGonggu"
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_gonggu.php"
      });
  }

/**
 * 近年真题演练按钮展开的内容
 */
  loadButtonContents_zhenti = () => {
    this.setState({
      jiqiaoDisplay: false,
      zhaocuoDisplay: false,
      gongguDisplay: false,
      zhentiDisplay: !this.state.zhentiDisplay
    });
    this.props.loadButtonContents({
      url: "/api/lunshuoZhenti"
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_zhenti.php"
      });
  }

/**
 * 加载对应点击按钮的内容
 */
  loadZhentiContent = ( choice ) => {
    this.setState({
      zhentiDisplay: false ,
      zhentiShow: true,
      gongguShow: false,
      titleContentDisplay: true ,
      gongguEgArticle: false,
      zhentiEgarticle: false,
      zhentiEgComment: false,
      acknowledgeDisplay: false
   });
    this.props.loadWriteContents({
      url: "/api/lunShuoZhenTiContent",
      //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_zhenti_content.php",
      body: {
        requestQuestion: choice
      }
    });
  }

  loadGongguContent = ( choice ) => {
    this.setState({
      gongguDisplay: false,
      gongguShow: true,
      zhentiShow: false,
      titleContentDisplay: true ,
      gongguEgArticle: false,
      zhentiEgarticle: false,
      zhentiEgComment: false,
      acknowledgeDisplay: false
   });
    this.props.loadWriteContents({
      url: "/api/lunShuoGongGuContent",
      //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_gonggu_content.php",
      body: {
        requestQuestion: choice
      }
    });
  }

  loadJiqiaoContent = ( choice ) => {
    this.setState({
      jiqiaoDisplay: false,
      zhaocuoDisplay: false,
      gongguShow: false,
      zhentiShow: false,
      //titleContentDisplay: false ,
      //optionContentDisplay: false,
      acknowledgeDisplay: true
    });
    if ( this.jiqiao == 0 ) {
      this.props.loadWriteKnowledge({
        url: "/api/lunShuoTiXingTuPoContent",
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_tixingtupo_content.php",
        body: {
          requestQuestion: choice
        }
      });
    }
    else if ( this.jiqiao == 1) {
      this.props.loadWriteKnowledge({
        url: "/api/lunShuoShenTiLiYiContent",
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_shentiliyi_content.php",
        body: {
          requestQuestion: choice
        }
      });
    }
    else if ( this.jiqiao == 2) {
      this.props.loadWriteKnowledge({
        url: "/api/lunShuoJingDianMuBanContent",
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_jingdianmuban_content.php",
        body: {
          requestQuestion: choice
        }
      });
    }
    else if ( this.jiqiao == 3) {
      this.props.loadWriteKnowledge({
        url: "/api/lunShuoHuaLongDianJingContent",
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_hualongdianjing_content.php",
        body: {
          requestQuestion: choice
        }
      });
    }
    else if ( this.jiqiao == 4) {
      this.props.loadWriteKnowledge({
        url: "/api/lunShuoSuCaiBaoDianContent",
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_sucaibaodian_content.php",
        body: {
          requestQuestion: choice
        }
      });
    }

  }

  cankaoliyi = ( choice ) => {
    this.setState({zhentiEgComment: !this.state.zhentiEgComment , userFileDisplay: false});
    this.props.loadPortContent({
      url: "/api/lunshuoLiyi",
      //url: "http://59.110.23.212/LearningSystem/BackEnd/lunshuo_liyi.php",
      body: {
        requestQuestion: choice
      }
    });
  }

  liyiDisplay = (example_liyi) => {
    //console.log(example_liyi)
    this.RightLiyiType = [];
    this.RightLiyi = [];
    this.WrongLiyiType = [];
    this.WrongLiyi = [];
    for(var key in example_liyi.right_liyi){
      this.RightLiyiType.push(key);
      this.RightLiyi.push(example_liyi.right_liyi[key]);
    }
    for(var key in example_liyi.wrong_liyi){
      this.WrongLiyiType.push(key);
      this.WrongLiyi.push(example_liyi.wrong_liyi[key]);
    }
    //console.log(this.RightLiyi)
  }


  render(){
    const {
      //processStep,
      jiqiaoDisplay,
      zhaocuoDisplay,
      gongguDisplay,
      zhentiDisplay,
      zhentiShow,
      gongguShow,
      titleContentDisplay,
      //optionContentDisplay,
      acknowledgeDisplay,
      gongguEgArticle
     } = this.state;

    const {
      loadButtonContentsState,
      loadWriteContentsState,
      ined,
      choice,
      name,
      example_article,
      example_comment,
      example_liyi,
      //right_liyi,
      showContent
    } = this.props;
    console.log(example_liyi.right_liyi)


    return (
      <React.Fragment>

        <div className={style.HUD}>
          <div className={style.HUDtitle}> 学习系统 </div>
          <div> 论说文 </div>
        </div>

        <div className={style.wrapper}>

          <div className={style.leftPane}>
            <Button className={style.button1} text={"写作技巧精讲"} onClick={this.jiqiao_type} /><br/>
            <Button className={style.button2} text={"巩固强化练习"} onClick={this.loadButtonContents_gonggu}/><br/>
            <Button className={style.button3} text={"近年真题演练"} onClick={this.loadButtonContents_zhenti} />
          </div>

          <div className={style.rightPane}>
            {
               this.state.jiqiaoDisplay?
                 <div className={style.jiqiao}>
                    <Button className = {style.buttonjiqiao1} text={"题型突破"} onClick={() => this.loadButtonContents_jiqiao( 0 )} /><br/>
                    <Button className = {style.buttonjiqiao2} text={"审题立意"} onClick={() => this.loadButtonContents_jiqiao( 1 )} /><br/>
                    <Button className = {style.buttonjiqiao3} text={"经典模板"} onClick={() => this.loadButtonContents_jiqiao( 2 )} /><br/>
                    <Button className = {style.buttonjiqiao4} text={"画龙点睛"} onClick={() => this.loadButtonContents_jiqiao( 3 )} /><br/>
                    <Button className = {style.buttonjiqiao5} text={"素材宝典"} onClick={() => this.loadButtonContents_jiqiao( 4 )} />
                 </div>
              :
              null
           }
           {
              this.state.zhaocuoDisplay?
                <div className={style.zhaocuo}>
                   <ButtonExpand
                    loader={this.loadButtonContents}
                    requestData = { this.loadJiqiaoContent }
                   />
                </div>
              :
              null
           }

           {
             this.state.gongguDisplay?
               <div className={style.gonggu}>
                 <ButtonExpand
                 loader={this.loadButtonContents}
                 requestData = { this.loadGongguContent }
                 />
               </div>
               :
               null
           }
           {
             this.state.zhentiDisplay?
               <div className={style.zhenti}>
                 <ButtonExpand
                 loader={this.loadButtonContents}
                 requestData = { this.loadZhentiContent }
                 />
               </div>
               :
               null
           }


           {
             gongguShow?
             <div className={style.title}>
               <div className={style.biaoti}>{choice}</div>
               <WriteContent className={style.content}  loader={this.loadWriteContents}/>
             </div>
             :
             null
           }
           {
             gongguShow?
             <div className={style.option}>
               <div className={style.juzhong}>
               <input type="file" accept =".doc,.pdf" style={{"right":"0"}}/><br/><span style={{"color":"red"}}>请上传一个word或pdf文件</span><br/>
               <label className = {style.egArticleText} onClick = {() => this.setState({gongguEgArticle:false,userGongguFile: !this.state.userGongguFile})}>已传文件</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <label className = {style.egArticleText} onClick = {() => this.setState({gongguEgArticle: !this.state.gongguEgArticle})}> 参考范文 </label>
             </div>
               {this.state.userGongguFile ?
                 <div className = {style.egArticle}>
                   此处应该显示用户上传的文件内容
                 </div>
                 :
                 null
               }
               {this.state.gongguEgArticle ?
                 <div className = {style.egArticle}>
                   <p className = {style.article_title}>{name}</p>
                   {example_article.map((onePara , key) =>
                     <p key = {key}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>
                   )}
                 </div>
                 :
                 null
               }
             </div>
             :
             null
           }

           {
             zhentiShow?
             <div className = {style.rightPane}>
             <div className={style.title}>
                <div className={style.biaoti}>{choice}</div>
                <WriteContent className={style.content}  loader={this.loadWriteContents}/>
                {this.state.zhentiEgarticle ?
                <div>
                  <p className = {style.article_title}>{name}</p>
                  {example_article.map((onePara , key) =>
                    <p key = {key}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>
                  )}
                </div>
                :
                null
                }
                 <div className = {style.eg_gonggu}
                   onClick = {() => this.setState({zhentiEgarticle: !this.state.zhentiEgarticle})}
                  > 参考范文 </div>
              </div>

              <div className={style.option}>
                <div className={style.juzhong}>
                <input type="file" accept =".doc,.pdf" style={{"right":"0"}}/><br/><span style={{"color":"red"}}>请上传一个word或pdf文件</span><br/>
                <label className = {style.egArticleText} onClick = {() => this.setState({userFileDisplay: !this.state.userFileDisplay})}>已传文件</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label className = {style.egArticleText}
                  onClick = {() => this.cankaoliyi( choice )}
                 > 参考立意 </label>
               </div>
                {this.state.zhentiEgComment ?
                  <div className = {style.egLiyiArticle}>
                    <p className = {style.liyi}>正确立意</p>
                    {example_liyi.right_liyi == undefined ? null :
                      <div>
                        {this.liyiDisplay(example_liyi)}
                        {this.RightLiyi.map((one,key) =>
                        <p key = {key}><strong>{this.RightLiyiType[key]} : </strong>&nbsp;&nbsp;{one}</p>
                      )}

                    </div>}
                    <p className = {style.liyi}>错误立意</p>
                    {example_liyi.wrong_liyi == undefined ? null :
                      <div>
                        {this.WrongLiyi.map((one,key) =>
                        <p key = {key}><strong>{this.WrongLiyiType[key]} : </strong>&nbsp;&nbsp;{one}</p>
                      )}

                    </div>}
                  </div>
                  :
                  null
                }

                {
                  this.state.userFileDisplay ?
                  <div className = {style.userFile}>已传文件</div>:null
                }

              </div>
            </div>:null}



          {
             acknowledgeDisplay?
               <div className={style.content}>
                 <div className={style.centerbiaoti}>{choice}</div>
                  <WriteKnowledge className={style.content}  loader={this.loadWriteContents}/>
               </div>
            :
             null
          }



          </div>

       </div>


    </React.Fragment>
    )
  }
}

export default applyHOCs([

  protect({
    logined: {
      satisfy: l => l === true,
      block(){
        const { openWindow , history, closeMask , openMask } = this.props;
        openWindow( UserManagerWindow,
          {
            width: '380px',
            height: '300px',
            position: {
              top: 'calc( 50% - 190px)',
              left: 'calc( 50% - 150px)'
            },
            onCancel: () => history.goBack() || closeMask(),
            onSuccess: closeMask,
          }
        );
        openMask();
      }
    }
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      buttonTexts: state.ButtonExpand.content,
      loadButtonContentsState: state.ButtonExpand.loadState,
      choice: state.ButtonExpand.choice,
      name: state.WriteContent.name,
      example_article: state.WriteContent.example_article,
      example_comment: state.WriteContent.example_comment,
      //right_liyi: state.PortTest.content.right_liyi,
      example_liyi: state.PortTest.content,
      //mainContent: state.WriteContent.content,
      loadWriteContentsState: state.WriteContent.loadState,
      showContent: state.ButtonExpand.showContent,
    }),
    dispatch => ({
      ...bindActionCreators( ButtonExpandActions , dispatch ),
      ...bindActionCreators( WriteContentActions , dispatch ),
      ...bindActionCreators( WriteKnowledgeActions , dispatch),
      ...bindActionCreators( PortTestActions , dispatch)
    })

  )],
  LunShuo
);
