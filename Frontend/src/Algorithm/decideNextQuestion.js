import changeAlpToNum from 'changeAlpToNum';
function decideNextQuestion( questions , type , level ){
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
  const convert = ( type ) => {
    for ( var num in table){
      if( table[num] == type ) return num
    }
  };

  var convert_type = Number( convert( type ) );

  if( questions[type][level].choosed == changeAlpToNum(questions[type][level].answer) ) {
    //error_rate[convert_type] += 1;
    if( level == 1 || level == 0 ) return [type , level + 2 , false];
    if( level == 2 || level == 3 ){
      if(convert_type + 1 < 15) return [table[convert_type + 1] , 1 , false]
      else return [ , , true]
    }
  //  else if ( level == 3) return [table[convert_type + 1] , 1];
    //else if ( level == 0) return [type, level + 2];
    //else return  [table[convert_type + 1] , 1];
  }
  else {
    if( level == 1 || level == 3) return [type , level - 1 , false];
    //else if ( level == 1) return [type , level - 1];
    //else if ( level == 0) return [type , level + 2 , false];
    if( level == 0 || level == 2){
      if(convert_type + 1 < 15 ) return [table[convert_type + 1] , 1 , false]
      else return [ , , true]
    }
  }


}

export default decideNextQuestion;

/*let id = 1;
let id1 = 1;
let id2 = 0;
let id3 = 0;
function decideNextQuestion(){
  id++;
  if( id < 4 )
  return [0,id1++];
  else if( id < 18 ){
    return [1,id2++];
  }
  else if ( id < 30 ){
    return [2,id3++];
  }
  else {
    id = 0;
    id1 = id2 = id3 = 0;
  }
}

export default decideNextQuestion;*/
