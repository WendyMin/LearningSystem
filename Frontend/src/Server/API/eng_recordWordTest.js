const callPython = require("./callPython");

const pythonFilename = "jieshou_eng_iftest_result.py";

module.exports = ( req, res ) => {
  const { username, level } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${level}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
