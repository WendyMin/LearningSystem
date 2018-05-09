const callPython = require("./callPython");

const pythonFilename = "offer_lunshuowen_sucaibaodian_mingcheng.py";

module.exports = ( req, res ) => {
  const [ errCode, result ] = callPython( pythonFilename );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
