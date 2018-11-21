import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';
import {
  actions as DataParseActions ,
  view as DataParse
} from 'Connected/DataParse';
import DataFormatConversion from 'UI/DataFormatConversion';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import applyHOCs from 'direct-core/applyHOCs';


type Props = {
  questionId: number,
  question: string,
  options: Array<string>,
  choosed: number,
  lock: boolean,
  show: boolean,
  rightKey: number,
  analysis: string,
  onSetChoice: number => any,
  onTryChange?: number => any
};

class MathSingleQuestion extends React.PureComponent<Props> {
  static defaultProps = {
    onTryChange: index => console.log( index )
  }
  // dataFormatConversion = () => {
  //   var testEditor0;
  //   testEditor0 = editormd.markdownToHTML("doc-content0", {//注意：这里是上面DIV的id
  //       htmlDecode : "style,script,iframe",
  //       emoji : true,
  //       taskList : true,
  //       tex : true, // 默认不解析
  //       flowChart : true, // 默认不解析
  //       sequenceDiagram : true, // 默认不解析
  //       codeFold : true
  //   });
  // }
  // componentDidMount(){
  //   this.dataFormatConversion()
  // }
  // componentWillReceiveProps( NextProps ){
  //   if(this.props.question != NextProps.question){
  //     // this.dataFormatConversion();
  //     // this.props.setPosition( "demo11" )
  //     // this.props.setNum()
  //     // this.props.setData(this.props.question)
  //   }
  // }

  render(){
    const {
      layoutFormat,
      xuhao,  // 题目序号
      questionId,
      options,
      question,
      choosed,
      lock,
      show,
      rightKey,
      analysis,
      onSetChoice,
      onTryChange,
    } = this.props;
    // console.log(this.props)
    // console.log(question,options,analysis)

    var checked = [];
    var highlighted = [];
    var validChoice = false;
    var questionStyle = style.normalQuestion;
    for( var i = 0 ; i < options.length ; i++ ){
      checked.push('');
      highlighted.push( style.normalOption );
    }

    if( choosed >= 0 && choosed <= options.length ){
      checked[choosed] = 'checked';
      highlighted[choosed] = style.choosedOption;
      validChoice = true;
    }
    if( show ){
      questionStyle = style.rightQuestion;
      highlighted[rightKey] = style.rightOption;
      if( validChoice ){
        if( choosed != rightKey ){
          highlighted[choosed] = style.wrongOption;
          questionStyle = style.wrongQuestion;
        }
      }
      else {
        questionStyle = style.wrongQuestion;
      }
    }
    // console.log(highlighted)
    return (
      <div className="container">
        {
          layoutFormat === "leftRight" ?
          <div className={style.wholeQuestion}>
            <div className="col-sm-8">
              <div className="card-box">
                <div className={questionStyle}>
                  <span style = {{"color":"#71b6f9"}}>{xuhao}.&nbsp;&nbsp;</span>
                  <span><DataFormatConversion id = "question" data={question}/></span>
                  {/*<span>{question}</span>*/}
                </div>
              <br/>

              {
         	  	options.map( ( option , key ) =>
         	  		<div
                   key={key}
                   className={highlighted[key]}
                   onClick={lock ? () => onTryChange( key ) : () => onSetChoice( key )}
                 >
                   <div className="radio radio-custom">
                      <input type="radio"
                             id={`question${questionId}option${key}`}
                             name={`answerToComponentQuestion${questionId}`}
                             checked={checked[key]}
                             readOnly={ lock ? 'readonly' : ''}
                      />
                      <label htmlFor={`question${questionId}option${key}`} style={{"lineHeight":"20px"}}>
                        <DataFormatConversion id={`option${key}`} data={option}/>
                        {/*{option}*/}
                      </label>
                   </div>
                 </div>
          	   	)
         	   	 }

              </div>
            </div>
            {
              show ?
              <div className="col-sm-4">
                <div className="card-box">
                  <DataFormatConversion id="analysis" data={analysis}/>
                </div>
              </div>
              :
              null
            }

        </div>
          :
          layoutFormat === "upDown" ?
          <div className={style.wholeQuestion}>
          <div className="col-sm-12">
          <div className="card-box">
            {questionLength === "single" ?
            <div className={questionStyle}>
              {whetherHaveXuhao ? <div><span style = {{"color":"#71b6f9"}}>{xuhao}.&nbsp;&nbsp;</span>{question}</div>:
              <div>{question}</div>
              }
            </div> :
            <div>
              {whetherHaveXuhao ?
              <div>
                {question.map((one,key) => <div className={questionStyle} key={key}>{key==0?<span style = {{"color":"#71b6f9"}}>{xuhao}.&nbsp;&nbsp;</span>:null}{one}</div>)}
              </div>:
              <div>{question.map((one,key) => <div className={questionStyle} key={key}>{one}</div>)}</div>
              }
            </div>
          }<br/>

            {
            options.map( ( option , key ) =>
              <div
                 key={key}
                 className={highlighted[key]}
                 onClick={lock ? () => onTryChange( key ) : () => onSetChoice( key )}
               >
                 <div className="radio radio-custom">
                    <input type="radio"
                           id={`question${questionId}option${key}`}
                           name={`answerToComponentQuestion${questionId}`}
                           checked={checked[key]}
                           readOnly={ lock ? 'readonly' : ''}
                    />
                    <label htmlFor={`question${questionId}option${key}`} style={{"lineHeight":"20px"}}>
                        {option}
                    </label>
                 </div>
               </div>
              )
             }
             {show ?
              <div>
                { paraLength === "none" ? null :
                  paraLength === "single" ?
                  <div>{analysis}</div>:
                  <TextAndImag list={analysis}/>
                }
              </div>
              :null
             }
          </div>
        </div>
        </div>
          :
          null

        }

      </div>
    );
  }
};


export default applyHOCs([
  connect(
    state => ({
      // logined: state.UserManager.logined,
    }),
    dispatch => ({
      ...bindActionCreators( DataParseActions , dispatch)
    })
  )],
  MathSingleQuestion
);
