const callPython = require("./callPython");

const pythonFilename = "jieshou_lunzheng_xiezuo.py";

module.exports = ( req, res ) => {
  const { username , choice , text , saveOrSubmit } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${choice} ${text} ${saveOrSubmit}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
