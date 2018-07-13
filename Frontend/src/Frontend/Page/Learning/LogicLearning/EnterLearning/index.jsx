import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import Info from 'UI/Info';

import Knowledge from 'Page/Learning/LogicLearning/Knowledge';
import ZhongDian from 'Page/Learning/LogicLearning/ZhongDian';
import QiangHua from 'Page/Learning/LogicLearning/QiangHua';
import UnitTest from 'Page/Learning/LogicLearning/UnitTest';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class EnterLearning extends React.PureComponent {
  constructor( props ){
    super( props );
    this.type = "";

    this.state = {
      type1Selected: false,
      type2Selected: false,
      typeSelectShow: true,
      chapterNameShow: false,
      changeColor1: false,
      changeColor2: false,
      changeColor3: false,
      changeColor4: false,
      // show: false
    }
  }

  getLogicChapterName = ( num ) => {
    console.log(this.props.xingshiOrLunzheng)
    this.type = num; // 1 代表形式逻辑
    // console.log(this.props.username,num)
    // console.log(this.props.username,this.props.xingshi)
    if(num !== undefined){
      console.log(num,this.props.username)
      this.props.getChapterName({
        url: "/api/logicGetChapterName",
        body: {
          username: this.props.username,
          xingshi: num
        },
      })
    }
    // if(this.props.xingshiOrLunzheng !== ""){
    //   console.log(this.props.username,this.type)
    //   this.props.getChapterName({
    //     url: "/api/logicGetChapterName",
    //     body: {
    //       username: this.props.username,
    //       xingshi: this.props.xingshiOrLunzheng
    //     },
    //   })
    // }
    else{
      console.log(this.props.username,this.props.xignshi)
      this.props.getChapterName({
        url: "/api/logicGetChapterName",
        body: {
          username: this.props.username,
          // xingshi: this.props.xingshiOrLunzheng
          xingshi: this.props.xingshi
        },
      })
    }

  }

  TypeSelectNote = () =>{
    alert("您还没有选择要学习的类型，请选择您要学习的类型!");
    this.setState({typeSelectShow: true})
  }

  FinishTestNote = () =>{
    alert("您还没有完成入口测试，请先完成入口测试!");
    this.setState({typeSelectShow: true})
  }
  FinishXingshiNote = () =>{
    alert("恭喜您已经完成所有形式逻辑的学习!");
    this.setState({typeSelectShow: true})
  }
  FinishLunzhengNote = () =>{
    alert("恭喜您已经完成所有论证逻辑的学习!");
    this.setState({typeSelectShow: true})
  }
  FinishAllNote = () =>{
    alert("恭喜您已经完成了所有形式逻辑和论证逻辑的学习!");
    this.setState({typeSelectShow: true})
  }

  componentDidMount(){
    this.props.recordXingshiOrLunzheng("");
    this.getLogicChapterName();
  }
  componentWillReceiveProps( NextProps ){
    console.log(this.props.learningType,NextProps.learningType,this.props.xingshiOrLunzheng)
    if(this.props.learningType !== "" && NextProps.learningType == ""){
      // alert("lllll")
      this.props.getChapterName({
         url: "/api/logicGetChapterName",
         body: {
           username: this.props.username,
           xingshi: this.props.xingshiOrLunzheng
         },
       })
      // this.getLogicChapterName();
    }
  }


  render(){
    const {
      xingshi,
      setLearningType,
      learningType,
      finished_level_test,
    } = this.props;
    console.log(xingshi)
    console.log(this.props.xingshiOrLunzheng)

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
          <Info info = "请先点击选择您要学习的类型："/><br/>
          <div align="center">
            <button className={this.state.type1Selected || this.props.xingshiOrLunzheng===1 ? "btn btn-success btn-trans waves-effect waves-success w-md m-b-5 btn-lg":"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-sm"}
                    onClick = {() => {this.setState({type1Selected: true,type2Selected: false});this.props.recordXingshiOrLunzheng(1);this.getLogicChapterName(1)}}
            >形式逻辑</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className={this.state.type2Selected || this.props.xingshiOrLunzheng===0? "btn btn-success btn-trans waves-effect waves-success w-md m-b-5 btn-lg":"btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-sm"}
                    onClick = {() => {this.setState({type2Selected: true,type1Selected: false});this.props.recordXingshiOrLunzheng(0);this.getLogicChapterName(0)}}
            >论证逻辑</button>
            {this.props.chapter_name == "none" ? null :
            <div style={{"fontSize":"20px"}}>您将要学习的章节是&nbsp;&nbsp;<span style={{"color":"red"}}>{this.props.chapter_name}</span></div>}
            {/* {chapterNameShow} */}

          </div><br/>

          <div className="row port m-b-20">
            <div className="portfolioContainer">
              <a href="javascript:void(0);">
               <div className="col-sm-6 col-lg-3 col-md-4 natural personal">
                   <div className="gal-detail thumb" onClick = {() => {setLearningType("知识点精要") ; this.setState({typeSelectShow: false})}}>
                      <img src="/static/images/gallery/2.jpg" className="thumb-img" alt="work-thumbnail"/>
                      <h4 className = {TextStyle[0]}
                          onMouseOver = {() => this.setState({typeSelectShow: true , changeColor1: true})}
                          onMouseLeave = {() => this.setState({changeColor1: false})}
                      >知识点精要
                      </h4>
                      <p className={style.text_muted1}>
                        点击可以查看每一章的知识点详细介绍
                      </p>
                   </div>
               </div>
              </a>

              <a href="javascript:void(0);">
                <div className="col-sm-6 col-lg-3 col-md-4 creative personal photography">
                  <div className="gal-detail thumb" onClick = {() => {setLearningType("重点习题") ; this.setState({typeSelectShow: false})}}>
                    <img src="/static/images/gallery/5.jpg" className="thumb-img" alt="work-thumbnail"/>
                    <h4  className = {TextStyle[1]}
                         onMouseOver = {() => this.setState({typeSelectShow: true , changeColor2: true})}
                         onMouseLeave = {() => this.setState({changeColor2: false})}
                    >重点习题
                    </h4>
                    <p className={style.text_muted1}>
                        点击查看每一章节的重点习题，提交后可以查看正确答案和解析
                    </p>
                  </div>
                </div>
              </a>

              <a href="javascript:void(0);">
              {this.props.whetherDidZhongDian ?
                <div className="col-sm-6 col-lg-3 col-md-4 natural creative">
                   <div className="gal-detail thumb"  onClick = {() => {setLearningType("强化练习") ; this.setState({typeSelectShow: false})}}>
                       <img src="/static/images/gallery/8.jpg" className="thumb-img" alt="work-thumbnail"/>
                       <h4  className = {TextStyle[2]}
                            onMouseOver = {() => this.setState({typeSelectShow: true , changeColor3: true})}
                            onMouseLeave = {() => this.setState({changeColor3: false})}
                       >强化练习
                       </h4>
                       <p className={style.text_muted1}>
                           点击查看每一章节的强化练习，提交后可以查看正确答案和解析
                       </p>
                       {/* <p className={style.text_muted1}>
                           完成重点习题后解锁
                       </p> */}
                   </div>
                </div>
                :
                <div className={style.translucent}>
                  <div className="col-sm-6 col-lg-3 col-md-4 natural creative">
                     <div className="gal-detail thumb" onClick = {() => alert("完成重点习题后才可解锁，请先完成重点习题!")}>
                         <img src="/static/images/gallery/8.jpg" className="thumb-img" alt="work-thumbnail"/>
                         <h4  className = {TextStyle[2]}
                              onMouseOver = {() => this.setState({typeSelectShow: true , changeColor3: true})}
                              onMouseLeave = {() => this.setState({changeColor3: false})}
                         >强化练习
                         </h4>
                         <p className={style.text_muted1}>
                            <div align="center">
                              <i className="zmdi zmdi-lock-outline" style={{"fontSize":"60px"}}></i><br/>
                              完成重点习题后解锁
                            </div>
                         </p>
                     </div>
                  </div>
                </div>
              }
              </a>

              <a href="javascript:void(0);">
                {/* <div className="col-sm-6 col-lg-3 col-md-4 personal photography">
                  <div className="gal-detail thumb" onClick = {() => {setLearningType("单元测试") ; this.setState({typeSelectShow: false})}}>
                    <img src="/static/images/gallery/3.jpg" className="thumb-img" alt="work-thumbnail"/>
                    <h4 className = {TextStyle[3]}
                        onMouseOver = {() => this.setState({typeSelectShow: true , changeColor4: true})}
                        onMouseLeave = {() => this.setState({changeColor4: false})}
                    >单元测试
                    </h4>
                    <p className={style.text_muted1}>
                      点击查看每一章节的单元测试题，测试完成后，点击提交可以查看正确答案和解析，可以查看本章节的数据统计
                    </p>
                  </div>
                </div> */}
              {this.props.whetherDidQiangHua ?
                <div className="col-sm-6 col-lg-3 col-md-4 personal photography">
                  <div className="gal-detail thumb" onClick = {() => {setLearningType("单元测试") ; this.setState({typeSelectShow: false})}}>
                    <img src="/static/images/gallery/3.jpg" className="thumb-img" alt="work-thumbnail"/>
                    <h4 className = {TextStyle[3]}
                        onMouseOver = {() => this.setState({typeSelectShow: true , changeColor4: true})}
                        onMouseLeave = {() => this.setState({changeColor4: false})}
                    >单元测试
                    </h4>
                    <p className={style.text_muted1}>
                      点击查看每一章节的单元测试题，测试完成后，点击提交可以查看正确答案和解析，可以查看本章节的数据统计
                    </p>
                  </div>
                </div>
                :
                <div className={style.translucent}>
                <div className="col-sm-6 col-lg-3 col-md-4 personal photography">
                  <div className="gal-detail thumb" onClick = {() => alert("完成强化练习后才可解锁，请先完成强化练习!")}>
                    <img src="/static/images/gallery/3.jpg" className="thumb-img" alt="work-thumbnail"/>
                    <h4 className = {TextStyle[3]}
                        onMouseOver = {() => this.setState({typeSelectShow: true , changeColor4: true})}
                        onMouseLeave = {() => this.setState({changeColor4: false})}
                    >单元测试
                    </h4>
                    <p className={style.text_muted1}>
                       <div align="center">
                         <i className="zmdi zmdi-lock-outline" style={{"fontSize":"60px"}}></i><br/>
                         完成强化练习后解锁
                       </div>
                    </p>
                  </div>
                </div>
              </div>
              }
              </a>

            </div>
           {/* <!-- end portfoliocontainer--> */}
          </div>
          {/* <!-- End row --> */}
        </div>
        :
        this.state.type1Selected == false && this.state.type2Selected == false && xingshi !== 0 && xingshi !==1 && (learningType == "知识点精要" || learningType == "重点习题" || learningType == "强化练习" || learningType == "单元测试") ?
        <div>{this.TypeSelectNote()}</div>
        :
        finished_level_test == 0 ? <div>{this.FinishTestNote()}</div>:
        finished_level_test == 2 && this.state.type1Selected == true ? <div>{this.FinishXingshiNote()}</div>:
        finished_level_test == 3 && this.state.type2Selected == true ? <div>{this.FinishLunzhengNote()}</div>:
        finished_level_test == 4 ? <div>{this.FinishAllNote()}</div>:
        learningType == "知识点精要" ? <Knowledge/> :
        learningType == "重点习题" ? <ZhongDian/> :
        learningType == "强化练习" ? <QiangHua/> :
        learningType == "单元测试" ? <UnitTest xingshiOrLunzheng = {this.type}/> : null
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
      choice: state.SubjectFunctionSelect.choice,
      xingshiOrLunzheng: state.LearningTypeSelect.xingshiOrLunzheng,
      learningType: state.LearningTypeSelect.learningType,
      finished_level_test: state.LearningTypeSelect.finished_level_test,
      chapter_name: state.LearningTypeSelect.chapter_name,
      whetherDidZhongDian: state.LearningTypeSelect.whetherDidZhongDian,
      whetherDidQiangHua: state.LearningTypeSelect.whetherDidQiangHua
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  EnterLearning
);
