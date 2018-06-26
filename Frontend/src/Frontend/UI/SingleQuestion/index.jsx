import React from 'react';
import style from 'style';
import TextAndImag from "UI/TextAndImag";
import UITest from 'Page/UITest';

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
      paraLength,  // 解析长度 single 代表 只有一段
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
                {questionLength === "single" ?  <div className={questionStyle}>{question}</div> :
                <div>
                {question.map((one,key) => <div className={questionStyle} key={key}>{one}</div>)}
              </div>}<br/>
              {
         	  	options.map( ( option , key ) =>
         	  		<div
                   key={key}
                   className={highlighted[key]}
                   onClick={lock ? () => onTryChange( key ) : () => onSetChoice( key )}
                 >
                   <div className="radio radio-custom">
                      <input type="radio" //name="radio"
                             id={`question${questionId}option${key}`} //value="option3"
                             name={`answerToComponentQuestion${questionId}`}
                             checked={checked[key]}
                             readOnly={ lock ? 'readonly' : ''}
                      />
                      <label htmlFor={`question${questionId}option${key}`}>
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
                  { paraLength === "single" ?
                  <div>{analysis}</div>:
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
            {questionLength === "single" ?  <div className={questionStyle}>{question}</div> :
            <div>
            {question.map((one,key) => <div className={questionStyle} key={key}>{one}</div>)}
          </div>}<br/>
            {
            options.map( ( option , key ) =>
              <div
                 key={key}
                 className={highlighted[key]}
                 onClick={lock ? () => onTryChange( key ) : () => onSetChoice( key )}
               >
                 <div className="radio radio-custom">
                    <input type="radio" //name="radio"
                           id={`question${questionId}option${key}`} //value="option3"
                           name={`answerToComponentQuestion${questionId}`}
                           checked={checked[key]}
                           readOnly={ lock ? 'readonly' : ''}
                    />
                    <label htmlFor={`question${questionId}option${key}`}>
                        {option}
                    </label>
                 </div>
               </div>
              )
             }
             {show ?
              <div>
                { paraLength === "single" ?
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
