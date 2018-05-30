const callPython = require("./callPython");

const pythonFilename = "offer_lunshuowen_xiezuo_tijiao.py";

module.exports = ( req, res ) => {
  const { username , choice } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${choice}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
