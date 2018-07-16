import React from 'react';
import style from 'style';

class FinishedNote extends React.PureComponent<Props> {
  constructor( props ){
    super( props );
  }

  render(){
    const { info } = this.props;
    return (
      <div>
        <div className="row" style={{"height":"80px"}}></div>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="card-box">
            <div className={style.icon}>
              <span className={style.lineshort}></span>
              <span className={style.linelong}></span>
            </div>
            <div align="center">
              <h2>Congratulations!</h2>
              <p className="lead text-muted">{info}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FinishedNote;
