import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import YueDu from 'Page/Learning/EnglishLearning/YueDu';
import Shengcinanju from 'Page/Learning/EnglishLearning/Shengcinanju';
import ChtoEng from 'Page/Learning/EnglishLearning/ChtoEng';
import EngExtraArticle from 'Page/Learning/EnglishLearning/EngExtraArticle';
import EngChart from 'Page/Learning/EnglishLearning/EngChart';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
// import { actions as PortTestActions } from 'Connected/PortTest';
import {
  view as EnglishLearningTypePort,
  actions as EnglishLearningTypePortActions
} from 'Connected/EnglishLearningTypePort';
import { actions as SubjectFunctionSelectActions } from 'Connected/SubjectFunctionSelect';
import { actions as EnglishArticleActions } from 'Connected/EnglishArticle';

import UserManagerWindow from "Windows/UserManager";
import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import Note from 'UI/Note';
import FinishedNote from 'UI/FinishedNote';


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

  componentDidMount(){
    this.getProgress();
    this.getUserLevel();
    // this.props.forceClearQuestions();
  }

  getUserLevel = () => {
    this.props.loadDidTest({
      url:"/api/eng_getLevel",
      body:{
        username: this.props.username,
      }
    })
  }

  getProgress = () => {
    this.props.loadLearnAll({
      url:"/api/all_getProgress",
      body:{
        username: this.props.username,
      }
    })
  }

  // getProgress = () => {
  //   this.props.loadPortContent({
  //     url:"/api/all_getProgress",
  //     body:{
  //       username: this.props.username,
  //     }
  //   })
  // }

  render(){
    const {
      setLearningType,
      learningType,
      didtest,
      learnall,
      forceClearQuestions,
    } = this.props;

    // console.log(learnall);

    var TextStyle = [];
    this.state.changeColor1 ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
    this.state.changeColor2 ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
    this.state.changeColor3 ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;
    this.state.changeColor4 ? TextStyle[3] = style.choosed_type : TextStyle[3] = style.normal_type ;

    return(

      <React.Fragment>

        {
          learnall.length==0?null
          :
          learnall[0]==1?
          <FinishedNote info = "恭喜您，您已学完全部内容!" />
          :


          <div>

            {

              didtest ?


              <div className = {style.whole}>
                {
                  learningType == "英语主页面" || this.state.typeselect == true ?
                    <div class="row port m-b-20">
                      <div className={style.title}>请选择学习模块</div>
                      <div className={style.title1}>(建议按顺序选择)</div>
                      <div class="portfolioContainer">

                        <a href="javascript:void(0);">
                         <div class="col-sm-6 col-lg-3 col-md-4 natural personal">
                             <div class="gal-detail thumb" onClick = {() => {setLearningType("英语阅读"); this.setState({typeselect: false}); }}>
                                 <div class="image-popup" >
                                   <img src="/static/images/gallery/2.jpg" class="thumb-img" alt="work-thumbnail"/>
                                 </div>
                                 <h4 className = {TextStyle[0]}
                                   onMouseOver = {() => this.setState({changeColor1: true})} onMouseLeave = {() => this.setState({changeColor1: false})}
                                   >
                                   英语阅读</h4>
                                 <p className={style.text_muted1}>
                                     开始一篇英语阅读吧！<br/>
                                     根据目前英语水平进行推荐，请认真做题哟~可查看生词、难句、题目解析、全文翻译
                                 </p>
                             </div>
                         </div>
                        </a>

                        <a href="javascript:void(0);">
                          <div class="col-sm-6 col-lg-3 col-md-4 creative personal photography">
                              <div class="gal-detail thumb" onClick = {() => {setLearningType("英语生词难句"); this.setState({typeselect: false})}}>
                                  <div class="image-popup">
                                    <img src="/static/images/gallery/5.jpg" class="thumb-img" alt="work-thumbnail"/>
                                  </div>
                                  <h4 className = {TextStyle[1]}
                                    onMouseOver = {() => this.setState({changeColor2: true})} onMouseLeave = {() => this.setState({changeColor2: false})}
                                    >
                                      生词难句</h4>
                                  <p className={style.text_muted1}>
                                      本课阅读过程中遇到的生词和难句，我们都帮你记录好了<br/>
                                      快来点击查看吧！
                                  </p>
                               </div>
                          </div>
                        </a>

                        <a href="javascript:void(0);">
                         <div class="col-sm-6 col-lg-3 col-md-4 natural creative">
                            <div class="gal-detail thumb" onClick = {() => {setLearningType("英语汉译英"); this.setState({typeselect: false})}} >
                                <div class="image-popup">
                                    <img src="/static/images/gallery/8.jpg" class="thumb-img" alt="work-thumbnail"/>
                                </div>
                                <h4 className = {TextStyle[2]}
                                  onMouseOver = {() => this.setState({changeColor3: true})} onMouseLeave = {() => this.setState({changeColor3: false})}
                                  >
                                    写作句型练习</h4>
                                <p className={style.text_muted1}>
                                    给中文，写英文，so easy~<br/>
                                    每课将给出3句中文，可查看答案，巩固你的写作技能
                                </p>
                            </div>
                         </div>
                       </a>

                       <a href="javascript:void(0);">
                         <div class="col-sm-6 col-lg-3 col-md-4 natural creative">
                            <div class="gal-detail thumb" onClick = {() => {setLearningType("英语课后阅读材料"); this.setState({typeselect: false})}} >
                                <div class="image-popup">
                                    <img src="/static/images/gallery/3.jpg" class="thumb-img" alt="work-thumbnail"/>
                                </div>
                                <h4 className = {TextStyle[3]}
                                  onMouseOver = {() => this.setState({changeColor4: true})} onMouseLeave = {() => this.setState({changeColor4: false})}
                                  >
                                    课后阅读材料</h4>
                                <p className={style.text_muted1}>
                                    还意犹未尽吗？<br/>
                                    这里有本课阅读的延伸阅读哦，快来点击查看吧
                                </p>
                            </div>
                         </div>
                       </a>

                     </div>
                     {/* <!-- end portfoliocontainer--> */}
                    </div>
                    // {/* <!-- End row --> */}
                  :
                  learningType == "英语阅读" ? <YueDu/>:
                  learningType == "英语生词难句" ? <Shengcinanju/>:
                  learningType == "英语汉译英" ?  <ChtoEng/>:
                  learningType == "英语课后阅读材料" ? <EngExtraArticle/>
                  :null
                }
              </div>



              :


              // <div class="panel panel-custom panel-border">
              //   <div class="panel-heading">
              //       <h3 class="panel-title">Sorry</h3>
              //   </div>
              //   <div class="panel-body">
              //     <div className={style.text}>您为新用户，系统还没有您的数据，请从左边栏前往水平测试，完成基础测评</div>
              //     <br/>
              //   </div>
              // </div>

              <Note info = "您还没完成水平测试，请先完成水平测试 !" onClick={()=>this.props.setSubjectFunctionSelect(0)}/>


            }

          </div>
        }





      </React.Fragment>

    )
  }




}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      username: state.UserManager.name,
      learningType: state.LearningTypeSelect.learningType,
      didtest: state.EnglishLearningTypePort.didtest,
      learnall: state.EnglishLearningTypePort.learnall,
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      // ...bindActionCreators( PortTestActions , dispatch),
      ...bindActionCreators( EnglishLearningTypePortActions , dispatch),
      ...bindActionCreators( SubjectFunctionSelectActions , dispatch ),
      ...bindActionCreators( EnglishArticleActions , dispatch ),
    })
  )],
  EngLearningTypeSelect
);
//export default LearningTypeSelect
