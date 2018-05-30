// @flow
/*
**   Antinux Innovation
**   Author: Eric Deng
*/
import React from 'react';
import style from 'style';
import Info from "UI/Info";
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
      subject,
      questionId,
      options,
      question,
      choosed,
      lock,
      show,
      rightKey,
      analysis,
      onSetChoice,
      onTryChange
    } = this.props;
    //console.log(this.props)

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
    return (
      <div className="container">
  	   {/*<form
          id={questionId}
          className={style.questionWrapper}
        >
        <div className={questionStyle}>{question}</div>
  	  	{
  	  	options.map( ( option , key ) =>
  	  		<div
            key={key}
            className={highlighted[key]}
            onClick={lock ? () => onTryChange( key ) : () => onSetChoice( key )}
          >
  	  			<input
              type="radio"
  	  			  id={`question${questionId}option${key}`}
  	  			  name={`answerToComponentQuestion${questionId}`}
  	  			  checked={checked[key]}
              readOnly={ lock ? 'readonly' : ''}
            />
      			<label
              htmlFor={`question${questionId}option${key}`}
            >
  	  			  {option}
      		  </label>
          </div>
   	   	  )
  	   	 }

  	     </form>

           {show ? <Info info={analysis} /> : null}
         */}

          <form
             id={questionId}
             className={style.questionWrapper}
             style={subject == "logic_test" ? {"width":"60%"} : {"width":"100%"}}
           >
         <div className={questionStyle}>{question}</div>
           {/*subject == "logic_test" ?
           <div >{question.map((one,key) => <div className={questionStyle} key={key}>{one}</div>)}</div>
           :
           <div className={questionStyle}>{question}</div>
           */}
     	  	{
     	  	options.map( ( option , key ) =>
     	  		<div
               key={key}
               className={highlighted[key]}
               onClick={lock ? () => onTryChange( key ) : () => onSetChoice( key )}
             >
     	  			<input
                 type="radio"
     	  			  id={`question${questionId}option${key}`}
     	  			  name={`answerToComponentQuestion${questionId}`}
     	  			  checked={checked[key]}
                 readOnly={ lock ? 'readonly' : ''}
               />
         			<label
                 htmlFor={`question${questionId}option${key}`}
               >
     	  			  {option}
         		  </label>
             </div>
      	   	  )
     	   	 }

         </form>

          {show ?
           <div>
             {subject == "logic_test" ?
               <div className = {style.logic_analysis}>
                 <TextAndImag list={analysis}/>
               </div> :
               subject == "logic_review" ?
               <TextAndImag list={analysis}/>:
               <Info info={analysis} />
             }
           {/*subject == "logic_test" ?
             <div className = {style.logic_analysis}>
               <br/><strong>{analysis.map((onePara , key) => <p key = {key}>{onePara}</p> )}</strong>
             </div> :
             <Info info={analysis} />
           */}
         </div>
         :null }

      </div>
    );
  }
};

export default SingleQuestion;
