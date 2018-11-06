function nameToPinyin( names, pinyins, name ){

  var pinyin;
  
  for( var i = 0 ; i < names.length ; i++){
    if( name == names[i]){
      pinyin = pinyins[i];
    }
  }
  return pinyin;
}

export default nameToPinyin
