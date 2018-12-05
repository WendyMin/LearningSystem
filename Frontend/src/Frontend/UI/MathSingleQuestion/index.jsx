import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

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
                  <span><DataFormatConversion id = {`question${xuhao}`} data={question}/></span>
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
                        <DataFormatConversion id={`question${xuhao}option${key}`} data={option}/>
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
                  <DataFormatConversion id={`question${xuhao}analysis`} data={analysis}/>
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
             <div className={questionStyle}>
               <span style = {{"color":"#71b6f9"}}>{xuhao}.&nbsp;&nbsp;</span>
               <span><DataFormatConversion id = {`question${xuhao}`} data={question}/></span>
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
                      <DataFormatConversion id={`question${xuhao}option${key}`} data={option}/>
                    </label>
                 </div>
               </div>
              )
             }
             {show ?
                <DataFormatConversion id={`question${xuhao}analysis`} data={analysis}/>
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

export default MathSingleQuestion;
