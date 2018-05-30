import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';
import Button from 'UI/Button';

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
  view as ZhentiAllYearTongji,
  actions as ZhentiAllYearTongjiActions
} from 'Connected/ZhentiAllYearTongji';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as UserManagerActions } from 'Connected/UserManager';
import Login from 'Page/Login';

import LunZhengZhenTi from 'Page/Learning/WritingLearning/LunZheng/LunZhengZhenTi';
import LunZhengGongGu from 'Page/Learning/WritingLearning/LunZheng/LunZhengGonggu';

import UserManagerWindow from "Windows/UserManager";
import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';
import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunZheng extends React.PureComponent {

  constructor( props ){
    super( props );

    this.state = {
      jiqiaoDisplay: false,
      zhaocuoDisplay: false,
      mobanDisplay: false,
      gongguDisplay: false,
      zhentiDisplay: false,
    };
  }

/*** 点击写作技巧精讲按钮之后改变值  */
  jiqiao = () => {
    this.setState({
      jiqiaoDisplay: !this.state.jiqiaoDisplay,
      zhaocuoDisplay: false,
      gongguDisplay: false,
      zhentiDisplay: false
    })
  }

  /*** 找错析错按钮展开的内容  */
  loadButtonContents_zhaocuo = () => {
    this.setState({
      zhaocuoDisplay: true,
      gongguDisplay: false,
      zhentiDisplay: false
    });
    this.props.forceDisappearChoice();
    this.props.loadButtonContents({
      url: "/api/lunzhengZhaoCuoXiCuo"
    });
  }

  /*** 写作模板按钮展开的内容  */
  loadButtonContents_moban = () => {
    this.setState({
      zhaocuoDisplay: false,
      mobanDisplay: true,
      gongguDisplay: false,
      zhentiDisplay: false
    });
    this.props.forceDisappearChoice();
    this.props.loadButtonContents({
      url: "/api/lunzhengTemplate"
      });
  }

/*** 巩固强化练习按钮展开的内容  */
  loadButtonContents_gonggu = () => {
    this.setState({
      jiqiaoDisplay: false,
      zhaocuoDisplay: false,
      mobanDisplay: false,
      gongguDisplay: !this.state.gongguDisplay,
      zhentiDisplay: false
    });
    this.props.forceDisappearChoice();
    this.props.loadButtonContents({
      url: "/api/lunzhengGonggu"
      });
  }

/*** 近年真题演练按钮展开的内容  */
  loadButtonContents_zhenti = () => {
    this.setState({
      jiqiaoDisplay: false,
      zhaocuoDisplay: false,
      mobanDisplay: false,
      gongguDisplay: false,
      zhentiDisplay: !this.state.zhentiDisplay
    });
    ///this.props.hideAllMulOptions();
    this.props.forceDisappearChoice();
    this.props.loadButtonContents({
      url: "/api/lunzhengZhenti"
      });
  }

/*** 加载对应点击按钮的内容  */
  loadZhentiContent = ( choice ) => {
    this.setState({
      zhentiDisplay: false
   });
    this.props.loadWriteContents({
      url: "/api/lunZhengZhenTiContent",
      body: {
        requestQuestion: choice
      }
    });
    this.props.loadPortContent({
      url: "/api/lunZhengZhenTiError",
      body: {
        requestQuestion: choice
      }
    });
  }

  loadGongguContent = ( choice ) => {
    this.setState({
      gongguDisplay: false,
   });
    this.props.loadWriteContents({
      url: "/api/lunZhengGongGuContent",
      body: {
        requestQuestion: choice
      }
    });
  }

  loadZhaocuoContent = ( choice ) => {
    this.setState({
      zhaocuoDisplay: false,
      jiqiaoDisplay: false
   });
    this.props.loadWriteKnowledge({
      url: "/api/lunZhengZhaoCuoXiCuoContent",
      body: {
        requestQuestion: choice
      }
    });
  }

  loadMobanContent = ( choice ) => {
    this.setState({
      mobanDisplay: false,
      jiqiaoDisplay: false,
   });
    this.props.loadWriteKnowledge({
      url: "/api/lunZhengTemplateContent",
      body: {
        requestQuestion: choice
      }
    });
  }
  /* 加载所有做过的真题的统计数据 ， 推荐知识点 ， 推荐文章等 */
  loadAllZhentiTongji = () => {
    this.props.loadAllZhentiTongji({
      url: "/api/lunZhengAllYearTongji",
      body: {
        username: this.props.username
      }
    });
    this.props.loadTuijianZhishidianName({
      url: "/api/lunZhengTuijianZhishidianName",
      body: {
        username: this.props.username
      }
    });
    this.props.loadTuijianArticle({
      url: "/api/lunZhengTuijianArticle",
      body: {
        username: this.props.username
      }
    });
  }


  render(){
    const {
      //ined,
      choice,
      showContent,
      learningType,
      setLearningType
    } = this.props;
    //console.log(this.props)
    var user = sessionStorage.getItem("user");
    if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" || sessionStorage.getItem("user") == null){
      <Login/>
    }
    else{
      this.props.setUser(user , true);
      sessionStorage.setItem("user",user);
      console.log(sessionStorage.getItem("user"))
    }

    return (
      <React.Fragment>

        <div className={style.HUD}>
          <div className={style.HUDtitle}> 学习系统 </div>
          <div> 论证有效性分析 </div>
        </div>

        <div className={style.wrapper}>

          <div className={style.leftPane}>
            <Button className={style.button11} text={"写作技巧精讲"} onClick={()=>{this.jiqiao();//setLearningType("写作技巧精讲")
          }}/>
            <Button className={style.button22} text={"巩固强化练习"} onClick={()=>{this.loadButtonContents_gonggu();setLearningType("巩固强化练习")}}/>
            <Button className={style.button33} text={"近年真题演练"} onClick={()=>{this.loadButtonContents_zhenti();setLearningType("近年真题演练")}} />
            <Button className={style.button44} text={"数据统计"} onClick = {()=>{this.loadAllZhentiTongji();setLearningType("数据统计")}} />
          </div>

          <div className={style.rightPane}>
             {
               this.state.jiqiaoDisplay?
                 <div className={style.jiqiao}>
                   <Button className={style.buttonjiqiao11} text={"找错析错"} onClick={()=>{this.loadButtonContents_zhaocuo();setLearningType("找错析错")}}/><br/>
                   <Button className={style.buttonjiqiao22} text={"写作模板"} onClick={()=>{this.loadButtonContents_moban();setLearningType("写作模板")}}/>
                 </div>
              :
              null
           }
            {
              learningType == "找错析错" || learningType == "写作模板"?
              <div>
                <div className = {style.centerbiaoti}>{choice}</div>
                <WriteKnowledge loader={this.loadWriteContents}/>
              </div> :
              learningType == "巩固强化练习" ? <LunZhengGongGu/> :
              learningType == "近年真题演练" ? <LunZhengZhenTi/> :
              learningType == "数据统计" ? <ZhentiAllYearTongji/> : null
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


          </div>

       </div>


    </React.Fragment>
    )
  }
}

export default applyHOCs([

  // protect({
  //   logined: {
  //     satisfy: l => l === true,
  //     block(){
  //       const { openWindow , history, closeMask , openMask } = this.props;
  //       openWindow( UserManagerWindow,
  //         {
  //           width: '380px',
  //           height: '300px',
  //           position: {
  //             top: 'calc( 50% - 190px)',
  //             left: 'calc( 50% - 150px)'
  //           },
  //           onCancel: () => history.goBack() || closeMask(),
  //           onSuccess: closeMask,
  //         }
  //       );
  //       openMask();
  //     }
  //   }
  // }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      choice: state.ButtonExpand.choice,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      ...bindActionCreators( UserManagerActions , dispatch ),
      ...bindActionCreators( ButtonExpandActions , dispatch ),
      ...bindActionCreators( WriteContentActions , dispatch ),
      ...bindActionCreators( WriteKnowledgeActions , dispatch ),
      ...bindActionCreators( ZhentiAllYearTongjiActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch )
    })

  )],
  LunZheng
);
