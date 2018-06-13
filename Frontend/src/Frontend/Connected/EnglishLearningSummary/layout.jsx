import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import { createSelector } from 'reselect';
import TrieTree from 'DataStructure/TrieTree';
import Info from 'UI/Info';

// import UserManagerWindow from "Windows/UserManager";
// import {
//   view as EnglishArticle,
//   actions as EnglishArticleActions
// } from 'Connected/EnglishArticle';
import { actions as PortTestActions } from 'Connected/PortTest';

class EnglishArticleSummary extends React.PureComponent {

  componentDidMount(){
    this.loadWordRate();
    this.loadArticleWordRate();
  }

  loadWordRate = () => {
    this.props.loadPortContent({
      url: "/api/eng_getWordRate",
      body: {
        username:  this.props.username,
        articleId: this.props.articleId,
      }
    })
  }

  loadArticleWordRate = () => {
    this.props.loadPortContent2({
      url: "/api/eng_getArticleWordRate",
      body: {
        articleId: this.props.articleId,
      }
    })
  }

    render(){
      const {
        wordCount ,
        choosedWordCount ,
        allWordCount,
        wordRate,
        articleWordRate,
      } = this.props;

      console.log(articleWordRate);

      return (
        <div className="container">
          {/* <Info info={`Unknown words:${choosedWordCount} of ${wordCount} = ${(choosedWordCount/wordCount).toFixed(3)*100}%;Total Num: ${allWordCount} `}
          /> */}

          <div>
            {
              wordRate == undefined ? null :
              <div style={{"padding-top":"5px"}}>
                <p className={style.content}>
                  本课难度：
                  {
                    wordRate.level == "easy" ?
                    <span>
                      <div className="zmdi zmdi-star"  style={{"color":"#71b6f9", "font-size":"20px"}}/>
                      <div className="zmdi zmdi-star-outline" style={{"color":"#71b6f9", "font-size":"20px"}}/>
                      <div className="zmdi zmdi-star-outline" style={{"color":"#71b6f9", "font-size":"20px"}}/>
                    </span>:
                    wordRate.level == "medium" ?
                    <span>
                      <div className="zmdi zmdi-star"  style={{"color":"#71b6f9", "font-size":"20px"}}/>
                      <div className="zmdi zmdi-star"  style={{"color":"#71b6f9", "font-size":"20px"}}/>
                      <div className="zmdi zmdi-star-outline" style={{"color":"#71b6f9", "font-size":"20px"}}/>
                    </span>
                    :
                    <span>
                      <div className="zmdi zmdi-star"  style={{"color":"#71b6f9", "font-size":"20px"}}/>
                      <div className="zmdi zmdi-star"  style={{"color":"#71b6f9", "font-size":"20px"}}/>
                      <div className="zmdi zmdi-star"  style={{"color":"#71b6f9", "font-size":"20px"}}/>
                    </span>
                  }
                  {/* {wordRate.level} */}
                </p>
                <p className={style.content}>本课总单词数：{allWordCount}</p>
                <p className={style.content}>本课不重复的单词数：{wordCount}</p>
                <p className={style.content}>本课生词（不认识）数：{choosedWordCount}</p>
                <p className={style.content}>生词数占比：{((choosedWordCount/wordCount)*100).toFixed(1)}%</p>
                <p className={style.content}>生词及全文单词在各单词库占比：</p>
                <table className="table table-striped m-0" align = "center">
                  <thead>
                    <tr>
                      <th>单词库</th>
                      <th>生词占比</th>
                      <th>全文占比</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>中考</th>
                      <th>{(parseFloat(wordRate.zhongkao_rate)*100).toFixed(1)}%</th>
                      <th>{(parseFloat(articleWordRate.zhongkao)*100).toFixed(1)}%</th>
                    </tr>
                    <tr>
                      <th>高考</th>
                      <th>{(parseFloat(wordRate.gaokao)*100).toFixed(1)}%</th>
                      <th>{(parseFloat(articleWordRate.gaokao)*100).toFixed(1)}%</th>
                    </tr>
                    <tr>
                      <th>四级</th>
                      <th>{(parseFloat(wordRate.siji)*100).toFixed(1)}%</th>
                      <th>{(parseFloat(articleWordRate.siji)*100).toFixed(1)}%</th>
                    </tr>
                    <tr>
                      <th>六级</th>
                      <th>{(parseFloat(wordRate.liuji)*100).toFixed(1)}%</th>
                      <th>{(parseFloat(articleWordRate.liuji)*100).toFixed(1)}%</th>
                    </tr>
                    <tr>
                      <th>考研</th>
                      <th>{(parseFloat(wordRate.kaoyan)*100).toFixed(1)}%</th>
                      <th>{(parseFloat(articleWordRate.kaoyan)*100).toFixed(1)}%</th>
                    </tr>
                    <tr>
                      <th>超纲</th>
                      <th>{(parseFloat(wordRate.chaogang)*100).toFixed(1)}%</th>
                      <th>{(parseFloat(articleWordRate.chaogang)*100).toFixed(1)}%</th>
                    </tr>
                  </tbody>
                </table>
                <br/>
              </div>
            }
          </div>

        </div>
      );
    }
};

const convert3DTo1D = _3D => {
  var res = [];
  for( let i = 0 ; i < _3D.length ; i++ ){
    for( let j = 0 ; j < _3D[i].length ; j++ ){
      for( let h = 0 ; h < _3D[i][j].length ; h++ ){
        res.push( _3D[i][j][h] );
      }
    }
  }
  return res;
}

const convertToTrieTree = createSelector(
  convert3DTo1D,
  wordList => {
  var tmp = new TrieTree();
  for( let i = 0 ; i < wordList.length ; i++ ){
    tmp.insert( wordList[i] );
  }
  return tmp;
});

const countWordNum = createSelector(
  convertToTrieTree,
  TrieTree => TrieTree.root.count
);

export default connect(
  state => ({
    allWordCount: convert3DTo1D( state.EnglishArticle.paragraphedWords ).length,
    wordCount: countWordNum( state.EnglishArticle.paragraphedWords ),
    choosedWordCount: state.EnglishArticle.choosedWords.root.count,
    username: state.UserManager.name,
    articleId: state.EnglishArticle.articleId,
    wordRate: state.PortTest.content,
    articleWordRate: state.PortTest.content2,
  }),
  dispatch => ({
    ...bindActionCreators( PortTestActions , dispatch),
    // ...bindActionCreators( EnglishArticleActions , dispatch ),
  })
)( EnglishArticleSummary );
