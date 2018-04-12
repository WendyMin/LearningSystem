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
					</ol>

					<span className = {style.part}> 进入学习 </span><br/>
					<ol>
						<li>每一单元的学习分为四个部分：知识点精要、重点题型、强化练习以及单元测试</li>
						<li>知识点精要是对本单元知识点的详细介绍</li>
						<li>重点题型涵盖本单元涉及到所有小类的题目</li>
						<li>强化练习是对本单元学习知识的巩固</li>
						<li>单元测试是用户对本单元所学习内容的自我检测,
                <span style={{"color":"red"}}>只有单元测试正确率在三分之二及其以上，用户才可以进行下一章节的学习；否则用户需要重新学习本章节，直到测试正确率达到三分之二及其以上</span></li>
					</ol>

          <span className = {style.part}> 复习 </span><br/>
					<ol>
						<li>复习部分可以查看用户之前所学过的所有课程内容</li>
					</ol>
      </div>
    );
  }
};

export default LogicHelp;
