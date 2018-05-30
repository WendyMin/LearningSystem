import React from 'react';
import style from 'style';
//import Info from 'UI/Info';
//import Button from 'UI/Button';

class ZhentiTuijianZhishidian extends React.PureComponent{
  render(){
    const {
      tuijianZhishidianName,
      tuijianZhishidianContent_fenxi,
      tuijianZhishidianContent_liti
    } = this.props;
    console.log(this.props)
    return(
      <div className = {style.wholeZhishidian}>
        <div className = {style.tuijianZhishidianName}>{tuijianZhishidianName}</div><br/>
        {tuijianZhishidianContent_fenxi.map((oneFenxi , key) =>
          <p className = {key == 0 ? style.xiaobiaoti : null}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{oneFenxi}</p>
        )}
        {tuijianZhishidianContent_liti.map((oneLiti , key) =>
          <p className = {key == 0 ? style.xiaobiaoti : null}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{oneLiti}</p>
        )}
      </div>
    )
  }
}

export default ZhentiTuijianZhishidian;
