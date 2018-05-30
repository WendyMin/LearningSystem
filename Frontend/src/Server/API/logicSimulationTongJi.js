const callPython = require("./callPython");

const pythonFilename = "jieshou_logic_moniceshi.py";

module.exports = ( req, res ) => {
  const { username , question_id , RightOrWrong } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${question_id} ${RightOrWrong}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
