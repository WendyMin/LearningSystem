import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import style from 'style';

class DataParse extends React.PureComponent {
  constructor( props ){
    super( props );
  }
  dataParse = () => {
    console.log(`${this.props.id + this.props.num}`)
    document.getElementById("exam").value = this.props.data;
    var testEditor;
    testEditor = editormd.markdownToHTML(`${this.props.id}`, {//注意：这里是上面DIV的id
    // testEditor = editormd.markdownToHTML(`${this.props.id + this.props.num}`, {//注意：这里是上面DIV的id
    // testEditor = editormd.markdownToHTML("doc-content11", {//注意：这里是上面DIV的id
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
  }
  // componentDidMount(){
  //   this.dataParse();
  // }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.data !== this.props.data && prevProps.num !== this.props.num) {
        alert("execusive")
        this.dataParse();
      // document.getElementById("demo11").innerHTML = "<img src='"+onePara+"'/>";
    // this.chart = c3.load({
    //   data: this.props.data
    // });
    }
  }
  // componentWillReceiveProps( NextProps ){
  //   if(this.props.id !== NextProps.id || this.props.num !== NextProps.num || this.props.data !== NextProps.data){
  //     // alert("next")
  //     this.dataParse();
  //   }
  // }

  render(){
    const {
      id,
      num,
      data
    } = this.props;
    console.log(this.props)

    return (
      <div id={`${id}`}>
        <textarea id="exam" className="disappear">{data}</textarea>
      </div>
    );
  }
};

export default connect(
  ({ DataParse: ownState }) => ({
    id: ownState.id,
    num: ownState.num,
    data: ownState.data
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( DataParse );
