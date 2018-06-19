import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import TextAndImag from 'UI/TextAndImag';
import Info from 'UI/Info';
import Button from 'UI/Button';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class Knowledge extends React.PureComponent {

  constructor( props ){
    super( props );
  }

  loadContent = () => {
    console.log(this.props.username,this.props.chapter_name)
    this.props.loadPortContent({
      url: "/api/logicZhishidian",
      body: {
        username: this.props.username,
        chapter_name: this.props.chapter_name
      },
    });
  }

  componentDidMount(){
    this.loadContent();
  }


  render(){
    const {
      submitQuestionState,
      loadQuestionState,
      loadContent,
      loadContentState,
      total_content,
      setLearningType
    } = this.props;
    //onsole.log(total_content.content)

    return (
      <React.Fragment>
        {total_content.flag == 1 ?
        <div className="card-box">
          {/* <div className={style.pageTitle}> 知识点精要 </div> */}
          <div className = {style.logic_knowledge}>
            <h4 className = {style.dalei}> {total_content.chapter_name} </h4>
            <TextAndImag list = {total_content.content}/>
            {
              total_content.shunxu == undefined ? null :
              <div>{total_content.shunxu.map((onetype , key) =>
              <div key = {key}>
                <div className = {style.logic_knowledge_title}> {onetype} </div>
                {total_content.xiaolei == undefined ? null:  <TextAndImag list = {total_content.xiaolei[key]} />}
              </div>)}</div>
             }
            <div align="center">
              <Button className = {style.enterNextButton} text = {"进入重点习题"} onClick = {() => setLearningType("重点习题")}/>
            </div>
          </div>
        </div>
        :
        <Info info = "您还没有完成入口测试，请先完成入口测试！"/>
        }
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      chapter_name: state.ZhentiPerYearTongji.tongji,
      total_content: state.PortTest.content,
      loadContentState: state.PortTest.loadState,
      chapter_name: state.LearningTypeSelect.chapter_name
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch )
    })
  )],
  Knowledge
);
