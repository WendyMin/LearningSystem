import React from 'react';
import style from 'style';

class LogicHelp extends React.PureComponent<Props> {
  constructor( props ){
    super( props );
  }

  render(){
    return (
      <div className = {style.help}>
        <h4 className = {style.title}> 逻辑科目学习指南 </h4>
        <span className = {style.part}> 水平测试 </span><br/>
					<ol>
						<li>用户首次进行逻辑科目的学习时，系统会强制进行测试</li>
            <li>完成入口测试后，用户可以查看测试的正确率统计数据</li>
            <li>只有完成入口测试后才可以进入学习，学习的章节内容与入口测试的做题情况有关</li>
            <li>可以进行多次水平测试，但推荐学习的第一章内容，只跟在进入学习之前所做的测试有关系</li>

					</ol>

					<span className = {style.part}> 进入学习 </span><br/>
					<ol>
						<li>每一单元的学习分为四个部分：知识点精要、重点题型、强化练习以及单元测试</li>
						<li>知识点精要是对本单元知识点的详细介绍</li>
						<li>重点题型涵盖本单元涉及到所有小类的题目</li>
						<li>强化练习是对本单元学习知识的巩固</li>
						<li>单元测试是用户对本单元所学习内容的自我检测,
                <span style={{"color":"red"}}>系统会根据测试的情况,推荐用户留在本章的学习还是进入下一章;但要留在本章还是进入下一章由用户自己决定</span></li>
					</ol>

          <span className = {style.part}> 复习 </span><br/>
					<ol>
						<li>复习部分根据用户在本章的学习数据分为重点复习和一般复习两个部分</li>
            <li>重点复习是用户比较薄弱的章节，一般复习是用户掌握比较牢固的章节</li>
            <li>用户可以在复习部分查看做过的章节的知识点和错题</li>
					</ol>
      </div>
    );
  }
};

export default LogicHelp;
