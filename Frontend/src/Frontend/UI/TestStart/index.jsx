import React from 'react';
import style from 'style';

class TestStart extends React.PureComponent<Props> {
  constructor( props ){
    super( props );
  }

  render(){
    const { testdescription, testnum, testtime , onClick } = this.props;
    return (
      <div>
        <div className="row" style={{"height":"80px"}}></div>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="card-box" align="center">
            {/* <img src="/static/plugins/bootstrap-sweetalert/thumbs-up.jpg" style={{"height":"80px","width":"80px","margin": "20px"}} alt="work-thumbnail"/> */}
            <i className="fa fa-pencil-square-o" style={{"fontSize":"80px","height":"80px","width":"80px","margin": "10px"}}></i>
            <br/>
            <h3>本次测试信息</h3>
            <br/>
            <p>{testdescription}</p>
            <p className={style.text}>
              题目总数:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{"color":"#ff5b5b"}}> {testnum} </span>
            </p>
            <p className={style.text}>
              建议时间:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{"color":"#ff5b5b"}}> {testtime} </span>
            </p>
            <br/>
            <p><button className="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-lg" onClick={onClick}>开始答题</button></p>
          </div>
        </div>
      </div>
    );
  }
};

export default TestStart;
