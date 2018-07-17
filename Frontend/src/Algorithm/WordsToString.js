function WordsToString( givenwords ){

  var output=""
  // var length = Object.getOwnPropertyNames(givenwords).length

  // 将输入的对象转换为数组
  var words = [];
  for(var a in givenwords){
    words.push(givenwords[a]);
  }
  var length = words.length

  // console.log(words)

  if(length>1){
    for (var i=0; i<length-1; i++ ){
      output += words[i]
      output += "*"
    }
    output += words[length-1]
  }
  // console.log(output);
  return output

}

export default WordsToString;
