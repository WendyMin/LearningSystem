import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionsCreators from 'actions';
import style from 'style';

class Feedback extends React.PureComponent {
  constructor( props ){
    super( props );
    this.text = "";
    this.state = {
      showAlert: false,
    };
  }


  /*  实时监测输入框中的文字变化  */
  SwapTxt = () => {
    this.text = document.getElementById("eml").value; // 读取文本框中的文本
    this.text = this.text.replace(/\n/g, '_@').replace(/\s/g, '_#'); // 将空格替换成 _# , 换行替换成 _@
    // this.props.recordUserInputText(text); // 将用户输入的文本保存下来 ， 触发动作保存
  }

  submit = () => {
    // console.log(this.text)
    this.props.sendFeedback({
      url: "/api/sendFeedback",
      body: {
        text: this.text,
        // text: "反馈test1",
      }
    })
  }

  render(){

    // console.log(this.props.success);

    const {
      success,
    } = this.props;

    return (

      <React.Fragment>

        <div className="col-md-2" ></div>

        <div className="col-md-8" >
          <div className="m-t-40 card-box">
            <div className="text-center">
                <h3 className="text-uppercase font-bold m-b-0">Feedback </h3>
                <p className="text-muted m-b-0 font-13 m-t-20"> Please help us improve the system.  </p>
            </div>

            <div className="panel-body">

                      <div className="col-xs-12">
                        <textarea id="eml" rows="10" className="form-control" placeholder="请输入您的反馈"
                          onKeyUp = {()=>this.SwapTxt()}
                          // onChange = {() => this.SwapTxt() }
                          ></textarea>
                      </div>
                      <div className="col-xs-12">
                        <br/>
                        <button className="btn btn-custom btn-bordred btn-block waves-effect waves-light"  onClick={() => {this.submit();this.setState({showAlert: true})}} type="submit">提交</button>
                      </div>

            </div>

          </div>
        </div>


          <div className="col-md-2" ></div>

        {
          success=="true" && this.state.showAlert ?
          alert("反馈成功!")
          :null
        }

      </React.Fragment>


    );
  }
};

export default connect(
  ({ Feedback: ownState , ...state }) => ({
    success: ownState.success,
  }),
  dispatch => ({
    ...bindActionCreators( actionsCreators , dispatch ),
  })
)( Feedback );
