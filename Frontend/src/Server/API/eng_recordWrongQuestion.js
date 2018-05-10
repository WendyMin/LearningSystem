const callPython = require("./callPython");

const pythonFilename1 = "get_wrong_question.py";
const pythonFilename2 = "get_wrong_question_second.py";

module.exports = ( req, res ) => {
  const { username, article_id, wrong_question_ids, time } = req.body;
  if( time=='1'){
    let [ errCode, result ] = callPython(
      pythonFilename1,
      `${username} ${article_id} ${wrong_question_ids}`
    );
    if( errCode ){
      res.status(500).end();
    }
    else {
      res.send( result );
    }
  }
  else{
    let [ errCode, result ] = callPython(
      pythonFilename2,
      `${username} ${article_id} ${wrong_question_ids}`
    );
    if( errCode ){
      res.status(500).end();
    }
    else {
      res.send( result );
    }
  }

}
