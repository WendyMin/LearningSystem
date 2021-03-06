import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { actions as PortTestActions } from 'Connected/PortTest';
import { actions as LearningTypeSelectActions } from 'Connected/LearningTypeSelect';
import TextAndImag from 'UI/TextAndImag';
import Button from 'UI/Button';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class Knowledge extends React.PureComponent {

  constructor( props ){
    super( props );
  }

  loadKnowledge = () => {
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
    this.loadKnowledge();
  }


  render(){
    const {
      total_content,
      setLearningType
    } = this.props;
    // console.log(total_content)

    return (
      <React.Fragment>
        <div className="card-box">
        {total_content == undefined ? null :
          <div className = {style.logic_knowledge}>
            {total_content.chapter_name==undefined?null:<h4 className = {style.dalei}> {total_content.chapter_name} </h4>}
            {total_content.content == undefined ? null :<TextAndImag list = {total_content.content}/> }
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
        }
        </div>
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  makePage,
  connect(
    state => ({
      username: state.UserManager.name,
      total_content: state.PortTest.content,
      chapter_name: state.LearningTypeSelect.chapter_name
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch )
    })
  )],
  Knowledge
);
