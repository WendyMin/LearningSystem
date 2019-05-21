import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';

import LunZhengKnowledge from 'Page/Learning/WritingLearning/LunZhengKnowledge';
import LunZhengGongGuSelect from 'Page/Learning/WritingLearning/LunZhengGongGuSelect';
import LunZhengGonggu from 'Page/Learning/WritingLearning/LunZhengGonggu';
import LunZhengZhenTi from 'Page/Learning/WritingLearning/LunZhengZhenTi';
import LunZhengZhenTiSelect from 'Page/Learning/WritingLearning/LunZhengZhenTiSelect';
import LunZhengTongji from 'Page/Learning/WritingLearning/LunZhengTongji';
import LunShuoKnowledge from 'Page/Learning/WritingLearning/LunShuoKnowledge';
import LunShuogGongGuSelect from 'Page/Learning/WritingLearning/LunShuoGongGuSelect';
import LunShuoZhenTiSelect from 'Page/Learning/WritingLearning/LunShuoZhenTiSelect';
import LunShuoZhenTi from 'Page/Learning/WritingLearning/LunShuoZhenTi';
import LunShuoGongGu from 'Page/Learning/WritingLearning/LunShuoGonggu';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class EnterLearning extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      typeSelectShow: true,
      lunzheng: false,
      lunshuo: false
    }
  }

  // TypeSelectNote = () =>{
  //   alert("您还没有选择要学习的类型，请选择您要学习的类型!");
  //   this.setState({typeSelectShow: true})
  // }

  render(){
    const {
      setLearningType,
      learningType,
    } = this.props;
    // console.log(learningType)
    var TextStyle = [];
    this.state.changeColor1 ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
    this.state.changeColor2 ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
    this.state.changeColor3 ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;
    this.state.changeColor4 ? TextStyle[3] = style.choosed_type : TextStyle[3] = style.normal_type ;


    return(
      <React.Fragment>
        {
          this.state.typeSelectShow || learningType == "" ?
          <div>
          <div align="center">
            <div style={{"fontSize": "22px","color": "#188ae2"}}>请先点击选择您要学习的类型：</div><br/>
            <button className={this.state.lunzheng ? "btn btn-success btn-trans waves-effect waves-success w-md m-b-5 btn-lg":"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-sm"}
                    onClick = {() => this.setState({lunzheng: true, lunshuo: false})}
            >论证有效性分析</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className={this.state.lunshuo ? "btn btn-success btn-trans waves-effect waves-success w-md m-b-5 btn-lg":"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-sm"}
                    onClick = {() => this.setState({lunzheng: false, lunshuo: true})}
            >论说文</button>
          </div><br/>


          <div className="row port m-b-20">
            <div className="portfolioContainer">
              <a href="javascript:void(0);">
               <div className="col-sm-6 col-lg-3 col-md-4 natural personal">
                   <div className="gal-detail thumb" onClick={() => {this.setState({typeSelectShow:false});this.state.lunzheng?setLearningType("论证技巧"):this.state.lunshuo?setLearningType("论说技巧"):null}}>
                      <img src="/static/images/gallery/2.jpg" className="thumb-img" alt="work-thumbnail"/>
                      <h4 className = {TextStyle[0]}
                          onMouseOver = {() => this.setState({typeSelectShow: true , changeColor1: true})}
                          onMouseLeave = {() => this.setState({changeColor1: false})}
                      >写作技巧精讲
                      </h4>
                      <p className={style.text_muted1}>
                        点击可以查看每一章的知识点详细介绍
                      </p>
                   </div>
               </div>
              </a>

              <a href="javascript:void(0);">
                <div className="col-sm-6 col-lg-3 col-md-4 creative personal photography">
                  <div className="gal-detail thumb" onClick={() => {this.setState({typeSelectShow:false});this.state.lunzheng?setLearningType("论证巩固"):this.state.lunshuo?setLearningType("论说巩固"):null}}>
                    <img src="/static/images/gallery/5.jpg" className="thumb-img" alt="work-thumbnail"/>
                    <h4  className = {TextStyle[1]}
                         onMouseOver = {() => this.setState({typeSelectShow: true , changeColor2: true})}
                         onMouseLeave = {() => this.setState({changeColor2: false})}
                    >巩固强化练习
                    </h4>
                    <p className={style.text_muted1}>
                        点击查看每一章节的重点习题，提交后可以查看正确答案和解析
                    </p>
                  </div>
                </div>
              </a>

              <a href="javascript:void(0);">
                <div className="col-sm-6 col-lg-3 col-md-4 natural creative">
                   <div className="gal-detail thumb"  onClick={() => {this.setState({typeSelectShow:false});this.state.lunzheng?setLearningType("论证真题"):this.state.lunshuo?setLearningType("论说真题"):null}}>
                       <img src="/static/images/gallery/8.jpg" className="thumb-img" alt="work-thumbnail"/>
                       <h4  className = {TextStyle[2]}
                            onMouseOver = {() => this.setState({typeSelectShow: true , changeColor3: true})}
                            onMouseLeave = {() => this.setState({changeColor3: false})}
                       >近年真题演练
                       </h4>
                       <p className={style.text_muted1}>
                           点击查看每一章节的强化练习，提交后可以查看正确答案和解析
                       </p>
                   </div>
                </div>
              </a>

              <a href="javascript:void(0);">
                <div className={this.state.lunshuo?style.translucent:""}>
                <div className="col-sm-6 col-lg-3 col-md-4 personal photography">
                  <div className="gal-detail thumb" onClick={() => {this.setState({typeSelectShow:false});this.state.lunzheng?setLearningType("论证数据"):null}}>
                    <img src="/static/images/gallery/3.jpg" className="thumb-img" alt="work-thumbnail"/>
                    <h4 className = {TextStyle[3]}
                        onMouseOver = {() => this.setState({typeSelectShow: true , changeColor4: true})}
                        onMouseLeave = {() => this.setState({changeColor4: false})}
                    >数据统计
                    </h4>
                    <p className={style.text_muted1}>
                      点击查看每一章节的单元测试题，测试完成后，点击提交可以查看正确答案和解析，可以查看本章节的数据统计
                    </p>
                  </div>
                </div>
                </div>
              </a>

            </div>
          </div>
          </div>

          :

          learningType == "论证技巧" ? <LunZhengKnowledge/> :
          learningType == "论证巩固" ? <LunZhengGongGuSelect/> :
          learningType == "论证真题" ? <LunZhengZhenTiSelect/> :
          learningType == "论证数据" ? <LunZhengTongji/> :

          learningType == "论说技巧" ? <LunShuoKnowledge/> :
          learningType == "论说巩固" ? <LunShuogGongGuSelect/> :
          learningType == "论说真题" ? <LunShuoZhenTiSelect/> : null
        }

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
