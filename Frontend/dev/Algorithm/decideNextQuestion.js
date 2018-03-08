let id = 1;
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

export default decideNextQuestion;
