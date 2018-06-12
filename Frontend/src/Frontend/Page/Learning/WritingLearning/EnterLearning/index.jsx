import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';

import LunZhengKnowledge from 'Page/Learning/WritingLearning/LunZheng/LunZhengKnowledge';
import LunZhengGongGuSelect from 'Page/Learning/WritingLearning/LunZheng/LunZhengGongGuSelect';
import LunZhengGonggu from 'Page/Learning/WritingLearning/LunZheng/LunZhengGonggu';
import LunZhengZhenTi from 'Page/Learning/WritingLearning/LunZheng/LunZhengZhenTi';
import LunZhengZhenTiSelect from 'Page/Learning/WritingLearning/LunZheng/LunZhengZhenTiSelect';
import LunZhengTongji from 'Page/Learning/WritingLearning/LunZheng/LunZhengTongji';
import LunShuoKnowledge from 'Page/Learning/WritingLearning/LunShuo/LunShuoKnowledge';
import LunShuogGongGuSelect from 'Page/Learning/WritingLearning/LunShuo/LunShuoGongGuSelect';
import LunShuoZhenTiSelect from 'Page/Learning/WritingLearning/LunShuo/LunShuoZhenTiSelect';
import LunShuoZhenTi from 'Page/Learning/WritingLearning/LunShuo/LunShuoZhenTi';
import LunShuoGongGu from 'Page/Learning/WritingLearning/LunShuo/LunShuoGonggu';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class EnterLearning extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeSelectShow: true
    }
  }

  render(){
    const {
      setLearningType,
      learningType,
    } = this.props;
    //console.log(learningType)


    return(
      <React.Fragment>
        {
          this.state.typeSelectShow || learningType == "" ?
          <div className="row"><br/>
            <div className="col-lg-6">
              <div className="text-center card-box">
                 <div>
                     <img src="/static/images/users/avatar-10.jpg" className="img-circle thumb-xl img-thumbnail m-b-10" alt="profile-image"/>
                     <h4>论证有效性分析</h4><br/>
                     <p className="text-muted font-13 m-b-30">
                       论证有效性分析主要包括写作技巧精讲、巩固强化练习、近年真题演练及数据统计四个部分
                     </p>

                     <div className="text-left">
                        <p className="text-muted font-13"><strong>写作技巧精讲 :</strong> <span className="m-l-15">分为找错析错和写作模板两个部分，可以查看对应的知识点</span></p>

                        <p className="text-muted font-13"><strong>巩固强化练习 :</strong><span className="m-l-15">查看参考范文，也可以自己上传文章</span></p>

                        <p className="text-muted font-13"><strong>近年真题演练 :</strong> <span className="m-l-15">涵盖历年来的真题，对每一年真题包括多选题以及答案解析;此部分用户也可以查看参考范文，上传文章</span></p>

                        <p className="text-muted font-13"><strong>数据统计 :</strong> <span className="m-l-15">查看做过的历年真题数据统计，以及系统推荐需要重点关注的知识点以及文章</span></p>
                    </div>

                    {/* <button type="button" className="btn btn-custom btn-rounded waves-effect waves-light">开始学习</button> */}
                    <div className="btn-group dropup">
                      <button type="button" className="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">开始学习 <span className="caret"></span></button>
                      <ul className="dropdown-menu" role="menu">
                        <li><a onClick={() => {this.setState({typeSelectShow:false});setLearningType("论证技巧")}}>写作技巧精讲</a></li>
                        <li><a onClick={() => {this.setState({typeSelectShow:false});setLearningType("论证巩固")}}>巩固强化练习</a></li>
                        <li><a onClick={() => {this.setState({typeSelectShow:false});setLearningType("论证真题")}}>近年真题演练</a></li>
                        <li><a onClick={() => {this.setState({typeSelectShow:false});setLearningType("论证数据")}}>数据统计</a></li>
                      </ul>
                    </div>


                 </div>

                </div>

            </div>
           {/* <!-- end col --> */}

           <div className="col-lg-6">
           <div className="text-center card-box">
              <div>
                <img src="/static/images/users/avatar-9.jpg" className="img-circle thumb-xl img-thumbnail m-b-10" alt="profile-image"/>
                <h4>论说文</h4><br/>
                <p className="text-muted font-13 m-b-30">
                 论说文主要包括写作技巧精讲、巩固强化练习、近年真题演练三个部分
                </p><br/>

                <div className="text-left">
                   <p className="text-muted font-13"><strong>Introduction :</strong></p>

                   <p className="text-muted font-13"><strong>写作技巧精讲 :</strong> <span className="m-l-15">分为题型突破、审题立意等几部分，可以选择查看每一部分对应的知识点</span></p>

                   <p className="text-muted font-13"><strong>巩固强化练习 :</strong><span className="m-l-15">查看参考范文，也可以自己上传文章</span></p>

                   <p className="text-muted font-13"><strong>近年真题演练 :</strong> <span className="m-l-15">涵盖历年来的真题，对每一年真题用户可以查看参考范文，参考立意，也可以上传自己写的文章</span></p>

               </div>

               {/* <button type="button" className="btn btn-custom btn-rounded waves-effect waves-light">开始学习</button> */}
               <div className="btn-group dropup">
                 <button type="button" className="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">开始学习 <span className="caret"></span></button>
                 <ul className="dropdown-menu" role="menu">
                   <li><a onClick={() => {this.setState({typeSelectShow:false});setLearningType("论说技巧")}}>写作技巧精讲</a></li>
                   <li><a onClick={() => {this.setState({typeSelectShow:false});setLearningType("论说巩固")}}>巩固强化练习</a></li>
                   <li><a onClick={() => {this.setState({typeSelectShow:false});setLearningType("论说真题")}}>近年真题演练</a></li>
                 </ul>
               </div>

              </div>
           </div>
           </div>
          {/* <!-- end col --> */}
          </div>
          :

          learningType =="论证技巧"?<LunZhengKnowledge/>:
          learningType =="论证巩固"?<LunZhengGongGuSelect/>:
          learningType =="论证真题"?<LunZhengZhenTiSelect/>:
          learningType =="论证数据"?<LunZhengTongji/>:

          learningType == "论说技巧" ? <LunShuoKnowledge/> :
          learningType == "论说巩固" ? <LunShuogGongGuSelect/> :
          learningType == "论说真题" ? <LunShuoZhenTiSelect/> : null}


         {/* <!-- end row --> */}


      </React.Fragment>
    )
  }




}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      //logined: state.UserManager.logined,
      username: state.UserManager.name,
      // xingshiOrLunzheng: state.LearningTypeSelect.xingshiOrLunzheng,
      learningType: state.LearningTypeSelect.learningType,
      // finished_level_test: state.LearningTypeSelect.finished_level_test
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  EnterLearning
);
