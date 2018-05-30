import React from 'react';
import style from 'style';

class FinishedText extends React.PureComponent<Props> {
  constructor( props ){
    super( props );
  }

  render(){
    const {
      allSubmitTextName,
      allSubmitText,
      whichTextToView
    } = this.props;
    console.log(this.props);

    return (
      <div>
        <h5 style = {{"color":"red"}} align = "center"> 您已经上传过的文章列表如下： </h5>
        <h6 style = {{"color":"blue"}} align = "center"> 点击可查看 </h6>
        {
          allSubmitTextName.map((oneText , key) =>
          <li key = {key} className = {style.shu}// onClick = {showTextContent}
            >{oneText}</li>
        )
        }

        {/* <span className = {style.part}> 水平测试 </span><br/>
					<ol>
						<li>用户初次进行写作部分的学习时，系统会强制进行测试；测试完成后才可以进入学习</li>
					</ol>

					<span  className = {style.part}> 进入学习 </span><br/>
					<ol>
						<li>学习部分主要分两个版块：论证有效性分析和论说文</li>
						<li>论证有效性部分包括写作技巧精讲、巩固强化练习以及历年真题操练</li>
            <li>点击写作技巧精讲可以查看找错析错和写作模板两部分内容</li>
            <li>真题部分会给出一篇文章，用户需要根据文章做多选题，点击提交可以查看正确答案以及本次所做真题错选、漏选情况</li>
            <li>数据统计部分可以查看做过的真题中，各类选项的错选次数以及漏选次数的统计</li>
            <li>论说部分与论证类似，包括写作技巧精讲、巩固强化练习以及历年真题操练</li>
            <li>用户可以自行上传自己所写的文件，文件类型限制为word或者pdf</li>
					</ol> */}

      </div>
    );
  }
};

export default FinishedText;
