import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

// import {
//   actions as PortTestActions
// } from 'Connected/PortTest';
import {
  view as WriteContent,
  actions as WriteContentActions
} from 'Connected/WriteContent';
import {
  actions as PortTestActions
} from 'Connected/PortTest';
import {
  // view as ButtonExpand,
  actions as ButtonExpandActions
} from 'Connected/ButtonExpand';
import LunZhengGongGu from 'Page/Learning/WritingLearning/LunZheng/LunZhengGongGu';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunZhengGongGuSelect extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      GongGuSelect: true
    }
  }

  /*** 巩固强化练习按钮展开的内容  */
  loadButtonContents_ = () => {
    this.props.loadButtonContents({
      url: "/api/lunzhengGonggu"
    });
  }

  componentDidMount(){
    this.loadButtonContents_()
  }

  loadGongGuContent = ( choice ) => {
   //  this.setState({
   //    Display: false,
   // });
    this.props.loadWriteContents({
      url: "/api/lunZhengGongGuContent",
      body: {
        requestQuestion: choice
      }
    });
  }

  // loadGongGuContent = ( choice ) => {
  //   this.setState({
  //     GongGuDisplay: false
  //  });
  //   this.props.loadWriteContents({
  //     url: "/api/lunZhengGongGuContent",
  //     body: {
  //       requestQuestion: choice
  //     }
  //   });
  //   this.props.loadPortContent({
  //     url: "/api/lunZhengGongGuError",
  //     body: {
  //       requestQuestion: choice
  //     }
  //   });
  // }


  render(){
    const{
      choice,
      LunZhengGongGuName,
      setButtonChoice
    } = this.props;
    //console.log(this.props.title.length === 0)
    return (
      <React.Fragment>
      {
        this.state.GongGuSelect ?
        <div className="col-md-12">
          {/* <div className="card-box taskboard-box"> */}
          {/* <div> */}
            {LunZhengGongGuName.map(( oneYearGongGu , key ) =>
              <div key = {key}>
                <div className="col-md-4">
                    <div className="card-box kanban-box">
                        <div className="kanban-detail">
                            <span className="label label-danger pull-right">Begin</span>
                            <h4><a onClick = {() => {setButtonChoice(oneYearGongGu);this.loadGongGuContent( oneYearGongGu );this.setState({GongGuSelect:false})}}>{oneYearGongGu}</a> </h4>
                        </div>
                    </div>
                  </div>
              </div>
            )}
          {/* </div> */}
        </div>
        :
        <LunZhengGongGu/>
      }
      </React.Fragment>
    )
  }
}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      LunZhengGongGuName: state.ButtonExpand.content,
      choice: state.ButtonExpand.choice,
      // title: state.WriteContent.title
    }),
    dispatch => ({
      ...bindActionCreators( WriteContentActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( ButtonExpandActions , dispatch )
    })

  )],
  LunZhengGongGuSelect
);
