function EngLevelToCh( level ){

  var levelCh = [ "初中", "高中", "四级", "六级" ];
  var levelEng = ["basic", "mid", "advance", "extreme"];
  for( var i = 0 ; i < levelCh.length ; i++){
    if( level == levelEng[i]) return levelCh[i];
  }
  return "高中";

}

export default EngLevelToCh;
