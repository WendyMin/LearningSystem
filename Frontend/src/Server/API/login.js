const callPython = require("./callPython");

const pythonFilename = "new_login.py";

module.exports = ( req, res ) => {
  const { password , username } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${password}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
