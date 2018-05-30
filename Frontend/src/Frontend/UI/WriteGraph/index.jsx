import React from 'react';
import Highcharts from 'react-highcharts';

//import './taskMain.less';

class WriteGraph extends React.Component{
    constructor(props){
        super(props);
        //this.state = {
            //config:


      //  }
    }
    componentWillMount() {

    }
    render(){
      var config = {
        chart: {
     plotBackgroundColor: null,
     plotBorderWidth: null,
     plotShadow: false
 },
 title: {
     text: '累计生词类型分析'
 },
 tooltip: {
     headerFormat: '{series.name}<br>',
     pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
 },
 plotOptions: {
     pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
             enabled: true,
             format: '<b>{point.name}</b>: {point.percentage:.1f} %',
             style: {
                 color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
             }
         }
     }
 },
 series: [{
     type: 'pie',
     name: '生词类型占比',
     data: [
         ['中考',   45.0],
         ['高考',       26.8],
         {
             name: '四级',
             y: 12.8,
             sliced: true,
             selected: true
         },
         ['六级',    8.5],
         ['考研',     6.2],
         ['超纲',   0.7]
     ]
 }]
      }
        return <div className="chart">
            <Highcharts config={config}></Highcharts>
        </div>
    }
}
export default WriteGraph;



/*import React from 'react';
import Highcharts from 'react-highcharts'

//import './taskMain.less';

class WriteGraph extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount() {
        this.state = {
            config: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    spacing:[10,0,40,0],
                },
                title: {
                    text: "运行成功率",
                    style:{
                        "color":"#fff",
                        "fontSize":"16px",
                    },
                    verticalAlign:'middle',
                },
                //这是鼠标悬浮时的提示框
                tooltip: {
                    //point为series中data的数据
                    pointFormat: ' <p style="font-size: 14px">{point.name}:<b>{point.percentage:.1f}%</b></p>',
                    headerFormat:'<span style="font-size: 14px">{series.name}</span><br/>',
                    hideDelay:200
                },
                credits: {
                    enabled: false   // 隐藏highcharts版权
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        //标注
                        dataLabels: {
                            enabled: true,
                            format: '<span>{point.name} : {point.percentage:.1f}%</span>',
                            distance:12,
                            style: {
                                color: '#108eef',
                                fontWeight: "lighter",
                                fontSize:'1em',
                            }
                        },
                    },
                },
                series: [{
            type: 'pie',
            name: '浏览器访问量占比',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['其他',   0.7]
            ]
        }]
            },
        }
    }
    render(){
        return <div className="chart">
            <Highcharts config={this.state.config}></Highcharts>
        </div>
    }
}
export default WriteGraph;*/
