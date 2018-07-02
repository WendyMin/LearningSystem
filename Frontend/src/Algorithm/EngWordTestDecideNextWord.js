function EngWordTestDecideNextWord( questions , level , num, rightnum ){

  let levelName = {
    0 : "basic",
    1 : "mid",
    2 : "advance",
    3 : "extreme"
  }

  const convert = ( level ) => {
    for ( var name in levelName){
      if( levelName[name] == level ) return name
    }
  };

  var convertLevel = Number( convert( level ) );

  if( questions[level][num].choosed == questions[level][num].key ) {
    switch( convertLevel ){
      case 0:
      if( rightnum == 11) return [ levelName[convertLevel++], 0, false, 0 ]
      else if( num < 14) return [ level, num++, false, rightnum++ ]
      else return [ level, num, true, rightnum ]
      case 1:
      if( rightnum == 9) return [ levelName[convertLevel++], 0, false, 0 ]
      else if( num < 14) return [ level, num++, false, rightnum++ ]
      else return [ level, num, true, rightnum ]
      case 2:
      if( rightnum == 8) return [ levelName[convertLevel++], 0, false, 0 ]
      else if( num < 14) return [ level, num++, false, rightnum++ ]
      else return [ level, num, true, rightnum ]
      case 3:
      if( rightnum == 8) return [ level, 0, true, 9 ]
      else if( num < 14) return [ level, num++, false, rightnum++ ]
      else return [ level, num, true, rightnum ]
    }
  }
  else {
    if( num < 14 ) return [ level, num++, false, rightnum ]
    else return [ level, num, true, rightnum ]
  }


}

export default EngWordTestDecideNextWord;

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
