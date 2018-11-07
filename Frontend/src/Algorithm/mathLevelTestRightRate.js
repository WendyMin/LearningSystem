import changeAlpToNum from 'changeAlpToNum';
function mathLevelTestRightRate( questions ){
  console.log(questions);
  let table = {
    0 : "整数与分数",
    1 : "应用题",
    2 : "函数方程及其应用",
    3 : "数列及其应用",
    4 : "整式与分式",
    5 : "平面几何",
    6 : "解析几何" ,
    7 : "立体几何" ,
    8 : "排列组合" ,
    9 : "概率统计" ,
    10 : "数据描述"
  }
  const changeTypeToNum = ( type ) => {
    for ( var num in table){
      if( table[num] == type ) return num
    }
  };

  var right_rate = [];
  var all_type_num = Object.keys(questions).length;  // 总共多少大类
  for (var i = 0 ; i < all_type_num ; i++){
    right_rate.push(0);
  }

  for (var type in questions){
    var num = changeTypeToNum(type);
    for (var index in questions[type]){
      if( questions[type][index].choosed == questions[type][index].answer ){
        right_rate[num] += 1/questions[type].length ;
      }
    }
  }
  console.log(right_rate)

  return right_rate
}

export default mathLevelTestRightRate
