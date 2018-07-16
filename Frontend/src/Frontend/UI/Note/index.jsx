import React from 'react';
import style from 'style';

class Note extends React.PureComponent<Props> {
  constructor( props ){
    super( props );
  }

  render(){
    const { info , onClick } = this.props;
    return (
      <div>
        <div className="row" style={{"height":"80px"}}></div>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="card-box">
            <div className={style.icon}>
              <div className={style.iconbody}></div>
              <div className={style.icondot}></div>
            </div>
            <div align="center">
              <h3>Sorry!</h3>
              {/* <p className="lead text-muted">{info}</p> */}
              <p className={style.text}>{info}</p>
              <br/>
              <p><button className="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5 btn-lg" onClick={onClick}>OK</button></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Note;
