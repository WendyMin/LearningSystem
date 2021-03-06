import React from 'react';
import style from 'style';

class DataFormatConversion extends React.PureComponent {
  constructor( props ){
    super( props );
  }
  dataParse = () => {
    // var content = $("#demo").val();
    var testEditor;
    var num = 0;
    testEditor = editormd.markdownToHTML(`${this.props.id}`, {//注意：这里是上面DIV的id
      htmlDecode : "style,script,iframe",
      emoji : true,
      taskList : true,
      tex : true, // 默认不解析
      flowChart : true, // 默认不解析
      sequenceDiagram : true, // 默认不解析
      codeFold : true
    });
    // console.log(`${this.props.id + this.props.num}`)
    // console.log(this.props.data)
  }
  componentDidMount(){
    this.dataParse();
  } // 对答案解析部分有用

  componentDidUpdate(prevProps,prevState){
    if(prevProps.data !== this.props.data) {
      document.getElementById(this.props.id).innerHTML = "<textarea class=" + "disappear"//style={{"display": "none;"}}
      //defaultValue={data} onChange={()=>this.dataParse(id)}
      + ">" + this.props.data + "</textarea>";
      this.dataParse();
    }
  }



  render(){
    const { id , data , num } = this.props;
    // console.log(this.props);
    return (
      <span id = {id}//id="doc-content"
      >
        <textarea className="disappear"//style={{"display": "none;"}}
        //defaultValue={data} onChange={()=>this.dataParse(id)}
        >{data}</textarea>
      </span>
    );
  }
};

export default DataFormatConversion;
