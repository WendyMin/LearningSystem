import React from 'react';

class TextAndImag extends React.PureComponent {
  render(){
    const { list } = this.props;
    var str = "http://59.110.23.212/LearningSystem";

    return(
      <div>
        {list.map((onePara , key) => {
          if(onePara.indexOf(str) > -1) return(<div key = {key} align = "center"><img src = {onePara}/><br/><br/></div>)
          else return(<p key = {key}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{onePara}</p>)
        })}
      </div>
    )
  }
}

export default TextAndImag;
