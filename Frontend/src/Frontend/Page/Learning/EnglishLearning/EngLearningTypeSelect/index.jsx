import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import YueDu from 'Page/Learning/EnglishLearning/YueDu';
import Shengcinanju from 'Page/Learning/EnglishLearning/Shengcinanju';
import ChtoEng from 'Page/Learning/EnglishLearning/ChtoEng';
import EngChart from 'Page/Learning/EnglishLearning/EngChart';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';


import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class EngLearningTypeSelect extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeselect: true,
      yuedu: false,
      shengcinanju: false,
      chtoeng: false,
      changeColor1: false,
      changeColor2: false,
      changeColor3: false,
      changeColor4: false,
    }
  }

  render(){
    const {
      setLearningType,
      learningType,
    } = this.props;

    // console.log(learningType);

    var TextStyle = [];
    this.state.changeColor1 ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
    this.state.changeColor2 ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
    this.state.changeColor3 ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;
    this.state.changeColor4 ? TextStyle[3] = style.choosed_type : TextStyle[3] = style.normal_type ;

    return(

      <React.Fragment>

        <div className = {style.whole}>
        {
          learningType == "英语主页面" || this.state.typeselect == true ?
            <div class="row port m-b-20">
              <div className={style.title}>请选择学习模块</div>
              <div className={style.title1}>(建议按顺序选择)</div>
              <div class="portfolioContainer">
                 <div class="col-sm-6 col-lg-3 col-md-4 natural personal">
                     <div class="gal-detail thumb" onClick = {() => {setLearningType("英语阅读"); this.setState({typeselect: false})}}>
                         <div class="image-popup" >
                           <img src="/static/images/gallery/2.jpg" class="thumb-img" alt="work-thumbnail"/>
                         </div>
                         <h4 className = {TextStyle[0]}
                           onMouseOver = {() => this.setState({changeColor1: true})} onMouseLeave = {() => this.setState({changeColor1: false})}
                           >
                           英语阅读</h4>
                         <p class="text-muted">
                             开始一篇英语阅读吧！<br/>
                             根据目前英语水平进行推荐，请认真做题哟~可查看生词、难句、题目解析、全文翻译
                         </p><br/><br/>
                     </div>
                 </div>

                <div class="col-sm-6 col-lg-3 col-md-4 creative personal photography">
                    <div class="gal-detail thumb" onClick = {() => {setLearningType("英语生词难句"); this.setState({typeselect: false})}}>
                        <div class="image-popup">
                          <img src="/static/images/gallery/5.jpg" class="thumb-img" alt="work-thumbnail"/>
                        </div>
                        <h4 className = {TextStyle[1]}
                          onMouseOver = {() => this.setState({changeColor2: true})} onMouseLeave = {() => this.setState({changeColor2: false})}
                          >
                            生词难句</h4>
                        <p class="text-muted">
                            本课阅读过程中遇到的生词和难句，我们都帮你记录好了<br/>
                            快来点击查看吧！
                        </p><br/><br/>
                     </div>
                </div>

               <div class="col-sm-6 col-lg-3 col-md-4 natural creative">
                  <div class="gal-detail thumb" onClick = {() => {setLearningType("英语汉译英"); this.setState({typeselect: false})}} >
                      <div class="image-popup">
                          <img src="/static/images/gallery/8.jpg" class="thumb-img" alt="work-thumbnail"/>
                      </div>
                      <h4 className = {TextStyle[2]}
                        onMouseOver = {() => this.setState({changeColor3: true})} onMouseLeave = {() => this.setState({changeColor3: false})}
                        >
                          汉译英</h4>
                      <p class="text-muted">
                          给中文，写英文，so easy~<br/>
                          每课将给出3句中文，可查看答案，巩固你的写作技能
                      </p><br/><br/>
                  </div>
               </div>

               <div class="col-sm-6 col-lg-3 col-md-4 natural creative">
                  <div class="gal-detail thumb" onClick = {() => {setLearningType("英语汉译英"); this.setState({typeselect: false})}} >
                      <div class="image-popup">
                          <img src="/static/images/gallery/8.jpg" class="thumb-img" alt="work-thumbnail"/>
                      </div>
                      <h4 className = {TextStyle[3]}
                        onMouseOver = {() => this.setState({changeColor4: true})} onMouseLeave = {() => this.setState({changeColor4: false})}
                        >
                          课后阅读材料</h4>
                      <p class="text-muted">
                          还意犹未尽吗？<br/>
                          这里有本课阅读的延伸阅读哦，快来点击查看吧
                      </p><br/><br/>
                  </div>
               </div>

             </div>
             {/* <!-- end portfoliocontainer--> */}
            </div>
            // {/* <!-- End row --> */}
          :
          learningType == "英语阅读" ? <div className="card-box"><YueDu/></div>:
          learningType == "英语生词难句" ? <div className="card-box"><Shengcinanju/></div>:
          learningType == "英语汉译英" ? <div className="card-box"><ChtoEng/></div>
          :null
        }
        </div>

      </React.Fragment>

    )
  }




}

export default applyHOCs([
  /*asyncProcessControl({
    submitQuestionState: {
      onResolved: function(){
        //this.nextStep()
      },
      onRejected: function(){
        this.props.alert( "失败" )
      }
    },

  }),*/
  /*protect({
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
  }),*/
  makePage,
  connect(
    state => ({
      //logined: state.UserManager.logined,
      ///username: state.UserManager.name,
    //  content: state.PortTest.content,
      //loadContentState: state.PortTest.loadState,

      //questions: state.SingleOptionQuestions.content,
      //loadQuestionState: state.SingleOptionQuestions.loadState,
      //submitQuestionState: state.SingleOptionQuestions.submitState,
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      //...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      //...bindActionCreators( SubjectSelectActions , dispatch )
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  EngLearningTypeSelect
);
//export default LearningTypeSelect
