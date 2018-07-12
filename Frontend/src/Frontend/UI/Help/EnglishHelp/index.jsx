import React from 'react';
import style from 'style';

class EnglishHelp extends React.PureComponent<Props> {
  constructor( props ){
    super( props );
  }

  render(){
    return (
      <div className={style.help}>
        <h4 className = {style.title}> 英语科目学习指南 </h4>
        <span className = {style.part}> 水平测试 </span><br/>
					<ol>
						<li>首次登录此系统，必须先完成词汇量测试。只有完成词汇量测试，才会有针对性地推荐文章。</li>
						<li>若不是首次登录，也可以进行词汇量测试。</li>
					</ol>

					<span className = {style.part}> 进入学习 </span><br/>
					<ol>
						<li>阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案</li>
						<li>确认自己不明白的单词，确认全部点击后，提交系统，等待翻译</li>
						<li>选择自己不理解的句子，点击，提交系统，等待翻译</li>
						<li>再次完成试题，如果觉得第一次做的完全正确，则重新再选一次以确认，如果觉得有误，则可以修改答案</li>
						<li>点击确认后查看正确答案和解析</li>
						<li>查看自己点击过的不认识的单词和句子</li>
						<li>完成写作句型部分</li>
						<li>阅读一篇课后阅读材料</li>
						<li>做完阅读后，可选择性地跳过后面的三个模块，<strong>提前</strong>进行下一个单元的学习</li>
					</ol>

					<span className = {style.part}> 开始复习 </span><br/>
					<ol>
						<li>显示学过的课程列表。每一课可查看“重点词汇”、“长难句解析”、“全文翻译”、“习题解析”，并可重新做题。</li>
					</ol>

					<span className = {style.part}> 统计列表 </span><br/>
					<ol>
						<li>显示用户完成情况的统计。目前为用户不认识的词情况统计。</li>
					</ol>

      </div>
    );
  }
};

export default EnglishHelp;
