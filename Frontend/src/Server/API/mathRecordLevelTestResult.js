const callPython = require("./callPython");

const pythonFilename = "jieshou_math_shuiping.py";

module.exports = ( req, res ) => {
  const { username , rightRate } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${rightRate}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
