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
import LunShuoZhenTi from 'Page/Learning/WritingLearning/LunShuo/LunShuoZhenTi';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunShuoZhenTiSelect extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      zhenTiSelect: true
    }
  }

  /*** 近年真题演练按钮展开的内容  */
  loadZhenTiName = () => {
    this.props.loadButtonContents({
      url: "/api/lunshuoZhenti"
    });
  }
  componentDidMount(){
    this.loadZhenTiName()
  }

  loadZhentiContent = ( choice ) => {
    this.setState({
      zhentiDisplay: false
    });
    this.props.loadWriteContents({
      url: "/api/lunShuoZhenTiContent",
      body: {
        requestQuestion: choice
      }
    });
    // this.props.loadWriteContents({
    //   url: "/api/lunZhengZhenTiContent",
    //   body: {
    //     requestQuestion: choice
    //   }
    // });
    // this.props.loadPortContent({
    //   url: "/api/lunZhengZhenTiError",
    //   body: {
    //     requestQuestion: choice
    //   }
    // });
  }


  render(){
    const{
      choice,
      LunZhengZhenTiName,
      setButtonChoice
    } = this.props;
    //console.log(this.props.title.length === 0)
    return (
      <React.Fragment>
      {
        this.state.zhenTiSelect || choice === "" ?
        <div className="col-md-12">
          {/* <div className="card-box taskboard-box"> */}
          {/* <div> */}
            {LunZhengZhenTiName.map(( oneYearZhenTi , key ) =>
              <div key = {key}>
                <div className="col-md-4">
                    <div className="card-box kanban-box">
                        <div className="kanban-detail">
                            <span className="label label-danger pull-right">Begin</span>
                            <h4><a onClick = {() => {setButtonChoice(oneYearZhenTi);this.loadZhentiContent( oneYearZhenTi );this.setState({zhenTiSelect:false})}}>{oneYearZhenTi}</a> </h4>
                        </div>
                    </div>
                  </div>
              </div>
            )}
          {/* </div> */}
        </div>
        :
        <LunShuoZhenTi/>
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
      LunZhengZhenTiName: state.ButtonExpand.content,
      choice: state.ButtonExpand.choice,
      // title: state.WriteContent.title
    }),
    dispatch => ({
      ...bindActionCreators( WriteContentActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      ...bindActionCreators( ButtonExpandActions , dispatch )
    })

  )],
  LunShuoZhenTiSelect
);
