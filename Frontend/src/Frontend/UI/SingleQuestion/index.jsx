import React from 'react';
import style from 'style';
import TextAndImag from "UI/TextAndImag";

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

class SingleQuestion extends React.PureComponent<Props> {
  static defaultProps = {
    onTryChange: index => console.log( index )
  }

  render(){
    const {
      layoutFormat,
      questionLength,  // 问题长度 single 代表 只有一段
      paraLength,  // 解析长度 single 代表 只有一段，none代表没有解析
      whetherHaveXuhao,
      xuhao,  // 题目序号
      decode, // 是否需要解码，针对数学中的一些特殊格式
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

              </div>
            </div>
            {
              show ?
              <div className="col-sm-4">
                <div className="card-box">
                  { paraLength === "none"?null:
                     paraLength=== "single" ?
                    <div>{{analysis}}</div>:
                    <div>
                      <TextAndImag list={analysis} showBigImg={() => this.setState({showBigImg: true})}/>
                    </div>
                }
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

export default SingleQuestion;
