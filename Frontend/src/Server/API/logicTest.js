const callPython = require("./callPython");

const pythonFilename = "logic_test_new1.py";

module.exports = ( req, res ) => {
  const [ errCode, result ] = callPython( pythonFilename );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
