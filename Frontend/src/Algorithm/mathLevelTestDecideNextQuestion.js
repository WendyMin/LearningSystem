// import changeAlpToNum from 'changeAlpToNum';
function mathLevelTestDecideNextQuestion( questions , type , level ){
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
  const convert = ( type ) => {
    for ( var num in table){
      if( table[num] == type ) return num
    }
  };

  var convert_type = Number( convert( type ) );
  // var convert_type = convert( type );
  // console.log(convert_type == 0 && level < 2)

  if(  convert_type == 0 && level < 1 || convert_type == 1 && level < 4 || convert_type == 2 && level < 3
    || convert_type == 3 && level < 1 || convert_type == 4 && level < 1 || convert_type == 5 && level < 2
    || convert_type == 6 && level < 2 || convert_type == 7 && level < 1 || convert_type == 8 && level < 1
    || convert_type == 9 && level < 2 || convert_type == 10 && level == 0
  ) {
    // console.log(table[convert_type + 1] , 0 , false);
    return [table[convert_type] , level + 1 , false];
  }

  if( convert_type == 10 && level > 0) {
    return [, , true]
  }

  else {
    return [table[convert_type + 1] , 0 , false];
  }


}

export default mathLevelTestDecideNextQuestion;
