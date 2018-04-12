function judgeWhichOption( arr ){
  var all_option = ["概念混淆" , "条件缺失" , "推断不出" , "以偏概全" , "非黑即白" , "因果无关" , "目的达不到" ,
                   "论据不成立" , "条件不必要" , "类比不当" , "不当假设" , "自相矛盾" , "存在他因" , "措施不可行"];
  var right_option = [];
  var right_option_num = [];

  arr.map( (one) => {
    if( all_option.indexOf(one.error_type) > -1){
      right_option.push(one.error_type)
    }

  })






  for(var i = 0 ; i < right_option.length ; i++){
    if(right_option[i] == "概念混淆") {right_option_num[i] = 0}
    else if(right_option[i] == "条件缺失") {right_option_num[i] = 1}
    //else if(right_option[i] == "条件不充分") {right_option_num[i] = 1}
    //else if(right_option[i] == "无法推出") {right_option_num[i] = 2}
    else if(right_option[i] == "推断不出") {right_option_num[i] = 2}
    else if(right_option[i] == "以偏概全") {right_option_num[i] = 3}
    else if(right_option[i] == "非黑即白") {right_option_num[i] = 4}
    else if(right_option[i] == "因果无关") {right_option_num[i] = 5}
    else if(right_option[i] == "目的达不到") {right_option_num[i] = 6}
    else if(right_option[i] == "论据不成立") {right_option_num[i] = 7}
    else if(right_option[i] == "条件不必要") {right_option_num[i] = 8}
    else if(right_option[i] == "类比不当") {right_option_num[i] = 9}
    else if(right_option[i] == "不当假设") {right_option_num[i] = 10}
    else if(right_option[i] == "自相矛盾") {right_option_num[i] = 11}
    else if(right_option[i] == "存在他因") {right_option_num[i] = 12}
    else if(right_option[i] == "措施不可行") {right_option_num[i] = 13}



  }

return right_option_num




}

export default judgeWhichOption
