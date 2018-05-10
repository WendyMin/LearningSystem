const callPython = require("./callPython");

const pythonFilename = "word_test_new.py";

module.exports = ( req, res ) => {
  const [ errCode, result ] = callPython(
    pythonFilename,
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
