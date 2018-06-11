import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';
import style from 'style';
import ZhentiTuijianZhishidian from  'UI/ZhentiTuijianZhishidian';
import LunZhengZhenTi from 'Page/Learning/WritingLearning/LunZheng/LunZhengZhenTi';
import {actions as ButtonExpandActions} from 'Connected/ButtonExpand';

class ZhentiAllYearTongji extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      tongji: true,
      zhishidian: false,
      zhenti: false
    }
  }

  requestZhishidianContent = ( name ) => {
    this.props.loadTuijianZhishidianContent({
      url: "/api/lunZhengTuijianZhishidianContent",
      body: {
        zhishidianName: name
      }
    })
  }

  componentWillMount(){
    this.props.SetZhishidianName("");
    this.props.SetArticleName("");
  }
  componentWillReceiveProps(NextProps){
    if(this.props.choice!==NextProps.choice && this.props.choice !== "" && NextProps.choice === ""){
      this.setState({zhishidian: false , zhenti: false , tongji: true})
    }
  }

  render(){
    const {
      tongji,
      tuijianZhishidian,
      chosed_zhishidianName,
      tuijianZhishidianContent_fenxi,
      tuijianZhishidianContent_liti,
      TuijianArticle,
      chosed_articleName
    } = this.props;
    console.log(this.props)
    var options = ["概念混淆" , "条件缺失" , "推断不出" , "以偏概全" , "非黑即白" , "因果无关" , "目的达不到" ,
                     "论据不成立" , "条件不必要" , "类比不当" , "不当假设" , "自相矛盾" , "存在他因" , "措施不可行"];

    return (
      <div className = {style.tongjiPlace}>
        {/* <div className="container"> */}
        {
          this.state.zhishidian ?
          // chosed_zhishidianName !== "" ?
          <div>
            <ZhentiTuijianZhishidian tuijianZhishidianName = {chosed_zhishidianName}
                                     tuijianZhishidianContent_fenxi = {tuijianZhishidianContent_fenxi}
                                     tuijianZhishidianContent_liti = {tuijianZhishidianContent_liti}
            />
            {/* <Button className = {style.returnButton1} text = "返回" onClick = {() => this.setState({zhishidian: false , zhenti: false , tongji: true})}/> */}
            {/* <Button className = {style.returnButton1} text = "返回" onClick = {() => this.props.SetZhishidianName("")}/> */}
         </div>
         :
         this.state.zhenti ?
         <div>
           <LunZhengZhenTi/>
           {/* <Button className = {style.returnButton2} text = "返回" onClick = {() => {this.setState({zhenti: false , zhishidian: false , tongji: true});this.props.setButtonChoice("")}}/> */}
           {/* <Button className = {style.returnButton2} text = "返回" onClick = {() => this.props.SetArticleName("")}/> */}
         </div>
         :
          tongji.year == 0 ? <div className="card-box">您还没有做完任何一年的真题!</div> :
          <div>
            {
              this.state.tongji || this.props.choice === "" ?
              // chosed_zhishidianName === "" && chosed_articleName === "" ?
              <div className="card-box">
              <strong><p style = {{"color" : "#188ae2"}}>您的做题情况统计如下：</p></strong>
              <p>您总共做过 <strong style = {{"color" : "red"}}>{tongji.year}</strong> 年真题&nbsp;,&nbsp;各选项的错选次数、漏选次数统计如下：</p>
              <table className="table table-bordered m-0" align = "center">

                  <thead>
                      <tr>
                          <th>选项</th>
                          {options.map((oneOption , key) =>
                            <th key = {key}> {oneOption} </th>)
                          }

                      </tr>
                  </thead>

                      {tongji.cuoxuanlv == undefined ? null :
                        <tbody>
                      <tr>
                        <th>错选次数</th>
                        {tongji.cuoxuanlv.map((oneOption , key) =>
                          <th key = {key}> {oneOption} </th>)
                        }

                      </tr>
                      <tr>
                        <th>漏选次数</th>
                        {tongji.louxuanlv.map((oneOption , key) =>
                          <th key = {key}> {oneOption} </th>)
                        }
                      </tr>

                      <tr>
                        <th>正确率</th>
                        {tongji.zhengquelv.map((oneRightRate , key) =>
                          <th key = {key}> {oneRightRate} </th>)
                        }
                      </tr>

                  </tbody>}
              </table>
              {/* <table border="1" align = "center">
                <tr>
                  <th>选项</th>
                  {options.map((oneOption , key) =>
                    <th key = {key}> {oneOption} </th>)
                  }
                </tr>

                {tongji.cuoxuanlv == undefined ? null :
                  <tr>
                    <th>错选次数</th>
                    {tongji.cuoxuanlv.map((oneOption , key) =>
                      <th key = {key}> {oneOption} </th>)
                    }
                  </tr>
                }

                {tongji.louxuanlv == undefined ? null :
                  <tr>
                    <th>漏选次数</th>
                    {tongji.louxuanlv.map((oneOption , key) =>
                      <th key = {key}> {oneOption} </th>)
                    }
                  </tr>
                }

                {tongji.zhengquelv == undefined ? null :
                  <tr>
                    <th>正确率</th>
                    {tongji.zhengquelv.map((oneRightRate , key) =>
                      <th key = {key}> {oneRightRate} </th>)
                    }
                  </tr>
                }
              </table> */}

              <br/><div style = {{"color":"red"}}>根据您的做题情况，系统建议您需要重点关注的知识点如下(点击可查看)：</div><br/>
              {
                tuijianZhishidian.map((oneZhishidian , key) =>
                <li key = {key} className = {chosed_zhishidianName == oneZhishidian ? style.chosedStyle : style.normalStyle}
                    onClick = {() => {this.setState({tongji: false,zhishidian: true,zhenti: true});this.props.SetZhishidianName(oneZhishidian);this.props.SetArticleName("");this.requestZhishidianContent(oneZhishidian);this.props.setButtonChoice(oneZhishidian)}}>{oneZhishidian}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     {/* onClick = {() => {this.props.SetZhishidianName(oneZhishidian);this.requestZhishidianContent(oneZhishidian)}}>{oneZhishidian}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                </li>)
              }
              <br/><div style = {{"color":"red"}}>根据您的做题情况，系统建议您需要重点关注的文章如下(点击可查看)：</div><br/>
              {
                TuijianArticle.map((oneArticle , key) =>
                <li key = {key} className = {chosed_articleName == oneArticle ? style.chosedStyle : style.normalStyle}
                    onClick = {() => {this.setState({tongji: false,zhishidian: false,zhenti: true});this.props.SetArticleName(oneArticle);this.props.SetZhishidianName("");this.props.setButtonChoice(oneArticle)}}>{oneArticle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                    // onClick = {() => {this.props.SetArticleName(oneArticle);this.props.setButtonChoice(oneArticle)}}>{oneArticle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
              )}
              </div>
              :
              null

            }
          </div>
        }


      </div>
    );
  }
};

export default connect(
  state => ({
    tongji: state.ZhentiAllYearTongji.tongji,
    tuijianZhishidian: state.ZhentiAllYearTongji.tuijianZhishidian,
    chosed_zhishidianName: state.ZhentiAllYearTongji.chosed_zhishidianName,
    tuijianZhishidianContent_fenxi: state.ZhentiAllYearTongji.tuijianZhishidianContent_fenxi,
    tuijianZhishidianContent_liti: state.ZhentiAllYearTongji.tuijianZhishidianContent_liti,
    TuijianArticle: state.ZhentiAllYearTongji.TuijianArticle,
    chosed_articleName: state.ZhentiAllYearTongji.chosed_articleName,
    choice: state.ButtonExpand.choice
  }),
  // ({ ZhentiAllYearTongji: ownState }) => ({
  //   tongji: ownState.tongji,
  //   tuijianZhishidian: ownState.tuijianZhishidian,
  //   chosed_zhishidianName: ownState.chosed_zhishidianName,
  //   tuijianZhishidianContent_fenxi: ownState.tuijianZhishidianContent_fenxi,
  //   tuijianZhishidianContent_liti: ownState.tuijianZhishidianContent_liti,
  //   TuijianArticle: ownState.TuijianArticle,
  //   chosed_articleName: ownState.chosed_articleName
  // }),
  dispatch => ({
    ...bindActionCreators( actionCreators, dispatch ),
    ...bindActionCreators( ButtonExpandActions , dispatch ),
  })
  //dispatch => bindActionCreators( actionCreators , dispatch )
)( ZhentiAllYearTongji );
