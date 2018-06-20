import React from 'react';
import style from 'style';

class OneTranslatedWord extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  render(){
    const {
      word,
      example,
      translate,
      exampleTranslate,
      expression,
      pronouncation
    } = this.props;
    return (
      <React.Fragment>
        {
          word == null ? null :
            <div className="col-sm-12">
              <div className="card-box">
                <div className={style.wordTranslateWord}><strong>{word}</strong></div>
                <div style={{"font-size":"6px"}}>&nbsp;</div>
                <div className={style.wordTranslate}>
                  <div>发音：|{pronouncation || "none"}|</div>
                  <div>中文：{translate  || "none" }</div>
                  <div>常用短语：{expression  || "none" }</div>
                  <div>例句：{example || "none" }</div>
                  <div>例句翻译：{exampleTranslate  || "none" }</div>
                </div>
              </div>
            </div>
          }


      </React.Fragment>
    );
  }
};

export default OneTranslatedWord;
