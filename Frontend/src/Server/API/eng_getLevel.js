const callPython = require("./callPython");

const pythonFilename = "user_if_test.py";

module.exports = ( req, res ) => {
  const { username } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}