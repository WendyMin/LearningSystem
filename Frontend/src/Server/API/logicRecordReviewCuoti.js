const callPython = require("./callPython");

const pythonFilename = "jieshou_logic_fuxi_cuoti.py";

module.exports = ( req, res ) => {
  const { username , chapter_name , question_id , RightOrWrong } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${chapter_name} ${question_id} ${RightOrWrong}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
