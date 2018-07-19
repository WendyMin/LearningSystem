const callPython = require("./callPython");

const pythonFilename = "test.py";

module.exports = ( req, res ) => {
  const { username, rightwords, wrongwords } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${rightwords} ${wrongwords}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
