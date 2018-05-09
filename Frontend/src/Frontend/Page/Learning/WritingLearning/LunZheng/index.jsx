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
  view as WriteContent,
  actions as WriteContentActions
} from 'Connected/WriteContent';
import {
  view as WriteKnowledge,
  actions as WriteKnowledgeActions
} from 'Connected/WriteKnowledge';
import {
  view as MultOptionQuestons,
  actions as MultOptionQuestionsActions
} from 'Connected/MultOptionQuestions';
import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';
import {
  view as ZhentiAllYearTongji,
  actions as ZhentiAllYearTongjiActions
} from 'Connected/ZhentiAllYearTongji';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunZheng extends React.PureComponent {

  constructor( props ){
    super( props );

    this.state = {
      processStep: 0,
      jiqiaoDisplay: false,
      zhaocuoDisplay: false,
      mobanDisplay: false,
      gongguDisplay: false,
      zhentiDisplay: false,
      contentDisplay: false,
      titleContentDisplay: false,
      optionContentDisplay: false,
      acknowledgeDisplay: false,
      egArticleContentDisplay: false,
      gongguEgArticle: false,
      tongjiDisplay: false,
      yichuanwenjian: false
    };

  }



/**
 * 点击写作技巧精讲按钮之后改变值
 */
  jiqiao = () => {
    this.setState({
      jiqiaoDisplay: !this.state.jiqiaoDisplay,
      zhaocuoDisplay: false,
      gongguDisplay: false,
      zhentiDisplay: false
    })
  }

  /**
   * 找错析错按钮展开的内容
   */
  loadButtonContents_zhaocuo = () => {
    this.setState({
      zhaocuoDisplay: true,
      gongguDisplay: false,
      zhentiDisplay: false
    });
    this.props.loadButtonContents({
      url: "/api/lunzhengZhaoCuoXiCuo"
      //url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhaocuoxicuo.php"
    });
  }

  /**
   * 写作模板按钮展开的内容
   */
  loadButtonContents_moban = () => {
    this.setState({
      zhaocuoDisplay: false,
      mobanDisplay: true,
      gongguDisplay: false,
      zhentiDisplay: false
    });
    this.props.loadButtonContents({
      url: "/api/lunzhengTemplate"
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_template.php"
      });
  }

/**
 * 巩固强化练习按钮展开的内容
 */
  loadButtonContents_gonggu = () => {
    this.setState({
      jiqiaoDisplay: false,
      zhaocuoDisplay: false,
      mobanDisplay: false,
      gongguDisplay: !this.state.gongguDisplay,
      zhentiDisplay: false
    });
    this.props.loadButtonContents({
      url: "/api/lunzhengGonggu"
        ///url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_gonggu.php"
      });
  }

/**
 * 近年真题演练按钮展开的内容
 */
  loadButtonContents_zhenti = () => {
    this.setState({
      jiqiaoDisplay: false,
      zhaocuoDisplay: false,
      mobanDisplay: false,
      gongguDisplay: false,
      zhentiDisplay: !this.state.zhentiDisplay
    });
    this.props.loadButtonContents({
      url: "/api/lunzhengZhenti"
        //url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhenti.php"
      });
  }

/**
 * 加载对应点击按钮的内容
 */
  loadZhentiContent = ( choice ) => {
    this.setState({
      zhentiDisplay: false ,
      titleContentDisplay: true ,
      optionContentDisplay: true,
      acknowledgeDisplay: false,
      egArticleContentDisplay: false,
      tongjiDisplay: false
   });
    this.props.loadWriteContents({
      url: "/api/lunZhengZhenTiContent",
      //url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhenti_content.php",
      body: {
        requestQuestion: choice
      }
    });
    this.props.loadPortContent({
      url: "/api/lunZhengZhenTiError",
      //url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhenti_error.php",
      body: {
        requestQuestion: choice
      }
    });
  }

  loadGongguContent = ( choice ) => {
    this.setState({
      gongguDisplay: false,
      titleContentDisplay: true ,
      gongguEgArticle: false,
      yichuanwenjian: false,
      egArticleContentDisplay: true,
      optionContentDisplay: false,
      acknowledgeDisplay: false,
      tongjiDisplay: false
   });
    this.props.loadWriteContents({
      url: "/api/lunZhengGongGuContent",
      //url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_gonggu_content.php",
      body: {
        requestQuestion: choice
      }
    });
  }

  loadZhaocuoContent = ( choice ) => {
    this.setState({
      zhaocuoDisplay: false,
      jiqiaoDisplay: false,
      titleContentDisplay: false ,
      optionContentDisplay: false,
      egArticleContentDisplay: false,
      acknowledgeDisplay: true,
      tongjiDisplay: false
   });
    this.props.loadWriteKnowledge({
      url: "/api/lunZhengZhaoCuoXiCuoContent",
      //url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhaocuoxicuo_content.php",
      body: {
        requestQuestion: choice
      }
    });
  }

  loadMobanContent = ( choice ) => {
    this.setState({
      mobanDisplay: false,
      jiqiaoDisplay: false,
      titleContentDisplay: false ,
      optionContentDisplay: false,
      egArticleContentDisplay: false,
      acknowledgeDisplay: true,
      tongjiDisplay: false
   });
    this.props.loadWriteKnowledge({
      url: "/api/lunZhengTemplateContent",
      //url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_template_content.php",
      body: {
        requestQuestion: choice
      }
    });
  }

  loadAllZhentiTongji = () => {
    this.setState({
      tongjiDisplay: true,
      titleContentDisplay: false,
      contentDisplay: false,
      optionContentDisplay: false,
      acknowledgeDisplay: false,
      egArticleContentDisplay: false
    })
    this.props.loadAllZhentiTongji({
      url: "/api/lunZhengAllYearTongji",
      body: {
        username: this.props.username
      }
    })

  }


  render(){
    const {
      processStep,
      jiqiaoDisplay,
      zhaocuoDisplay,
      mobanDisplay,
      gongguDisplay,
      zhentiDisplay,
      titleContentDisplay,
      optionContentDisplay,
      acknowledgeDisplay,
      egArticleContentDisplay,
      tongjiDisplay
     } = this.state;

    const {
      loadButtonContentsState,
      loadWriteContentsState,
      loadWriteKnowledgeState,
      ined,
      choice,
      name,
      example_article,
      showContent
    } = this.props;
    //console.log(optionContentDisplay)


    return (
      <React.Fragment>
        <Prompt
          when={processStep !== 0 && processStep !== this.actions.length - 1}
          message="you need to do it again, are you sure to quit?"
        />

        <div className={style.HUD}>
          <div className={style.HUDtitle}> 学习系统 </div>
          <div> 论证有效性分析 </div>
        </div>

        <div className={style.wrapper}>

          <div className={style.leftPane}>
            <Button className={style.button1} text={"写作技巧精讲"} onClick={this.jiqiao} /><br/>
            <Button className={style.button2} text={"巩固强化练习"} onClick={this.loadButtonContents_gonggu}/><br/>
            <Button className={style.button3} text={"近年真题演练"} onClick={this.loadButtonContents_zhenti} />
            <Button className={style.button4} text={"数据统计"} onClick = {this.loadAllZhentiTongji} />
          </div>

          <div className={style.rightPane}>
            {
               this.state.jiqiaoDisplay?
                 <div className={style.jiqiao}>
                   <Button className={style.buttonjiqiao1} text={"找错析错"} onClick={this.loadButtonContents_zhaocuo}/><br/>
                   <Button className={style.buttonjiqiao2} text={"写作模板"} onClick={this.loadButtonContents_moban}/>
                 </div>
              :
              null
           }
           {
              this.state.zhaocuoDisplay?
                <div className={style.zhaocuo}>
                   <ButtonExpand
                    loader={this.loadButtonContents}
                    requestData = { this.loadZhaocuoContent }
                   />
                </div>
              :
              null
           }
           {
              this.state.mobanDisplay?
                <div className={style.zhaocuo}>
                   <ButtonExpand
                    loader={this.loadButtonContents}
                    requestData = { this.loadMobanContent }
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
              titleContentDisplay?
                <div className={style.title}>
                  <div className={style.biaoti}>{choice}</div>
                  <WriteContent className={style.content}  loader={this.loadWriteContents}/>
                </div>
              :
              null
            }

            {
              egArticleContentDisplay?
              <div className={style.option}>
                <div className={style.juzhong}>
                  <input type="file" accept =".doc,.pdf"/><br/><span style = {{"color":"red"}}>请选择一个word或pdf文件</span><br/>
                  <label className = {style.egArticleText} onClick={() => this.setState({gongguEgArticle: false , yichuanwenjian: !this.state.yichuanwenjian})}> 已传文件 </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label className = {style.egArticleText} onClick = {() => this.setState({yichuanwenjian: false , gongguEgArticle: !this.state.gongguEgArticle})}> 参考范文 </label>
                </div>
                {this.state.yichuanwenjian ?
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
                optionContentDisplay?
                <div className={style.option}>
                  <MultOptionQuestons/>
                </div>
                :
                null

              }




          {
             acknowledgeDisplay?
               <div>
                 <div className={style.centerbiaoti}>{choice}</div>
                 <WriteKnowledge className={style.rightPane}  loader={this.loadWriteContents}/>
               </div>
            :
             null
          }

          {
            tongjiDisplay ?
            <ZhentiAllYearTongji/>:null
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
      mainContent: state.WriteContent.content,
      name: state.WriteContent.name,
      example_article: state.WriteContent.example_article,
      loadWriteContentsState: state.WriteContent.loadState,
      loadWriteKnowledgeState: state.WriteKnowledge.loadState,
      showContent: state.ButtonExpand.showContent,
    }),
    dispatch => ({
      ...bindActionCreators( ButtonExpandActions , dispatch ),
      ...bindActionCreators( WriteContentActions , dispatch ),
      ...bindActionCreators( WriteKnowledgeActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( ZhentiAllYearTongjiActions , dispatch ),
    })

  )],
  LunZheng
);
