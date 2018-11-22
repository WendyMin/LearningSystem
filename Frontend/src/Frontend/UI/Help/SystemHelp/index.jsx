import React from 'react';
import style from 'style';

class SystemHelp extends React.PureComponent<Props> {
  constructor( props ){
    super( props );
  }

  render(){
    return (
      <div className = {style.help}>
        <h4 className = {style.title}> 系统使用指南 </h4>
        <span className = {style.part}> 目前科目</span><br/>
					<ol>
            <li>英语：包含阅读、汉译英，以及中考、高考、四级、六级、考研词汇。阅读目前共有80篇。</li>
            <li>逻辑：包含形式逻辑和论证逻辑。其中形式逻辑包括词项逻辑、演绎推理、逻辑应用、命题逻辑、逻辑语言，论证逻辑包括归纳逻辑、假设、削弱、推论、比较、综合、支持、评价、解释、描述，共15章，1600道题。</li>
            <li>写作：写作包括论证有效性分析和论说文两部分，含有近十来年真题，其中论证巩固22篇，论证真题8篇，论说巩固19篇，论说真题8篇。</li>
            <li>数学：未开放，敬请期待。</li>
					</ol>

					<span className = {style.part}> 关于每科下方的Progress </span><br/>
					<ol>
						<li>Progress后面的数字百分比，描述了用户本科的学习进度，即已经学习了系统该科目的百分比。</li>
          </ol>

          <br/>

      </div>
    );
  }
};

export default SystemHelp;
