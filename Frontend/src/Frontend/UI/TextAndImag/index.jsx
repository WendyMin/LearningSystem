import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from 'style';

class TextAndImag extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  enlargeImag = (onePara) => {
    // document.getElementById("popup").innerHTML = "<img src=\"/static/images/gallery/5.jpg\"/>";
    // console.log("<img src=\"/static/images/gallery/5.jpg\"/>");
    document.getElementById("popup").innerHTML = "<img src='"+onePara+"'/>";
    console.log("<img src='"+onePara+"'/>");
    var imgs = document.getElementById("dedecmsok").getElementsByTagName("img");
    var lens = imgs.length;
    // console.log(lens);
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    popup.onclick = function (){
        popup.style.display = "none";
    }
  }


  render(){
    const { list , showBigImg } = this.props;
    // var str = "http://59.110.23.212/LearningSystem";
    var str = "http://39.106.175.128/LearningSystem";

    return(
      <div>
        {/* <img onClick={()=>this.enlargeImag()} src="/static/images/gallery/3.jpg"/> */}
        {list.map((onePara , key) => {
          if(onePara.indexOf(str) > -1) return(
            <div key = {key} align = "center">
              <a className="show-big-pic" href="javascript:void(0);">
                <img id="dedecmsok" src = {onePara} className={style.tupian} alt="work-thumbnail" //onClick={()=>{this.props.setImagZoomState(true);this.props.setWhichImagToZoom(onePara)}}
                  onClick={()=>this.enlargeImag(onePara)}/><br/>
              </a>
            </div>
          )
          else return(
            <div key = {key}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{onePara} </div>
          )
        })}
      </div>
    )
  }
}

export default TextAndImag;
