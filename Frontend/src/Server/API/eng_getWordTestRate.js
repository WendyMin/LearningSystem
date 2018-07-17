const callPython = require("./callPython");

const pythonFilename = "offer_word_test_result.py";

module.exports = ( req, res ) => {
  const { username } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} `
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
