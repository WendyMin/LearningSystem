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
    this.function();
  }

  function = () => {
    this.props.loadPortContent({
      url: "/api/eng_getWordRate",
      body: {
        username:  this.props.username,
        articleId: this.props.articleId,
      }
    })
  }

    render(){
      const { wordCount , choosedWordCount , allWordCount,content } = this.props;

      console.log(content);

      return (
        <div className="container">
          {/* <Info info={`Unknown words:${choosedWordCount} of ${wordCount} = ${(choosedWordCount/wordCount).toFixed(3)*100}%;Total Num: ${allWordCount} `}
          /> */}

          <div>
            {
              content == undefined ? null :
              <div>
                <p>本课难度：{content.level}</p>
                <p>本课总单词数：{allWordCount}</p>
                <p>本课不重复的单词数：{wordCount}</p>
                <p>本课不认识的单词数：{choosedWordCount}</p>
                <p>不认识的单词数占比：{(choosedWordCount/wordCount).toFixed(3)*100}%</p>
                <p>不认识的单词数在各单词库占比</p>
                <table border="1" align = "center">
                  <tr>
                    <th>中考</th>
                    <th>{content.zhongkao_rate}</th>
                  </tr>
                  <tr>
                    <th>高考</th>
                    <th>{content.gaokao}</th>
                  </tr>
                  <tr>
                    <th>四级</th>
                    <th>{content.siji}</th>
                  </tr>
                  <tr>
                    <th>六级</th>
                    <th>{content.liuji}</th>
                  </tr>
                  <tr>
                    <th>考研</th>
                    <th>{content.kaoyan}</th>
                  </tr>
                  <tr>
                    <th>超纲</th>
                    <th>{content.chaogang}</th>
                  </tr>
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
    content: state.PortTest.content,
  }),
  dispatch => ({
    ...bindActionCreators( PortTestActions , dispatch),
    // ...bindActionCreators( EnglishArticleActions , dispatch ),
  })
)( EnglishArticleSummary );
