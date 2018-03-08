function changeAlpToNum( Alphabet ){
  var alp = ['A','B','C','D','E'];
  var number = ['0','1','2','3','4'];
  var num;
  for( var i = 0 ; i < alp.length ; i++){
    if( Alphabet == alp[i]){
      num = number[i];
    }
  }
  return num;
}

export default changeAlpToNum
