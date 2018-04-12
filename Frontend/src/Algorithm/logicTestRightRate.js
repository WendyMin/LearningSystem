import changeAlpToNum from 'changeAlpToNum';
function logicTestRightRate( questions ){
  let table = {
    0 : "luojiyuyan",
    1 : "mingtiluoji",
    2 : "cixiangluoji",
    3 : "luojiyingyong",
    4 : "yanyituili",
    5 : "guinaluoji",
    6 : "jiashe" ,
    7 : "zhichi" ,
    8 : "xueruo" ,
    9 : "pingjia" ,
    10 : "jieshi" ,
    11 : "tuilun" ,
    12 : "bijiao" ,
    13 : "miaoshu" ,
    14 : "zonghe"
  }
  const changeTypeToNum = ( type ) => {
    for ( var num in table){
      if( table[num] == type ) return num
    }
  };

  var right_rate = [];
  var all_type_num = Object.keys(questions).length;
  for (var i = 0 ; i < all_type_num ; i++){
    right_rate.push(0);
  }

  for (var type in questions){
    var num = changeTypeToNum(type);
    for (var index in questions[type]){
      if( questions[type][index].choosed == changeAlpToNum( questions[type][index].answer ) ){
        questions[type][index].nanyi == "易" ? right_rate[num] += 0.22 :
        questions[type][index].nanyi == "中" ? right_rate[num] += 0.33 :
        questions[type][index].nanyi == "难" ? right_rate[num] += 0.45 :
        right_rate[type][0] += 0
      }
    }
  }


  return right_rate
}

export default logicTestRightRate
