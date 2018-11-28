import React from 'react';
import style from 'style';

class MathHelp extends React.PureComponent<Props> {
  constructor( props ){
    super( props );
  }

  render(){
    return (
      <div className = {style.help}>
        <h4 className = {style.title}> 数学目学习指南 </h4>
        <span className = {style.part}> 入口测试 </span><br/>
					<ol>
						{/* <li>用户首次进行数学科目的学习时，系统会强制进行测试</li> */}
            {/* <li>完成入口测试后，用户可以查看测试的正确率统计数据</li> */}
            <li>只有完成入口测试后才可以进入学习，学习的章节内容与入口测试的做题情况有关</li>
            <li>用户点击选项之后显示正确答案和分析，正确选项标注为绿色。该道题目用户选择正确，题目颜色显示为绿色，选择错误，显示为红色</li>
            {/* <li>可以进行多次水平测试，但推荐学习的第一章内容，只跟在进入学习之前所做的测试有关系</li> */}

					</ol>

					<span className = {style.part}> 进入学习 </span><br/>
					<ol>
						<li>每个大块分为若干章节，每个章节分为若干知识点，每个知识点分为知识点精要、重点例题与强化练习</li>
						<li>知识点精要涵盖本知识点所有所需学习的知识</li>
						<li>重点例题涵盖了本知识点的所有题型</li>
						<li>强化练习是对本知识点的巩固练习，强化记忆</li>
          </ol>

          <span className = {style.part}> 复习 </span><br/>
					<ol>
						<li>复习部分根据用户在本章的学习数据分为已达标和未达标两个部分</li>
            <li>未达标是用户比较薄弱的章节，已达标是用户掌握比较牢固的章节</li>
            <li>用户可以在复习部分查看做过的章节的知识点</li>
					</ol>
      </div>
    );
  }
};

export default MathHelp;
