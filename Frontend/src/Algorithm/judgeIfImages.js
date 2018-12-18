function judgeIfImages(para , name2 , name3){
  //console.log(name2);
  // var str = "http://59.110.23.212/LearningSystem";
  // var str = "http://39.106.175.128/LearningSystem";
  var str = "http";
  var max_length = name2.length;
  if( name3.length > max_length ) {
    max_length = name3.length;
  }

  if (para.indexOf(str) > -1){
    return 1  // 1 表示存储的是一张图片的网址
  }
  else {
    if(name2.indexOf(para) > -1){
      return 2  // 2 表示二级标题
    }
    if(name3.indexOf(para) > -1){
      return 3  // 3 表示三级标题
    }
    else { return 0 }  // 0 普通段落
  }



}

export default judgeIfImages
