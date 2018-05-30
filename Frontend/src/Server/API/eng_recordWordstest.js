const callPython = require("./callPython");

const pythonFilename = "record_wordtest.py";

module.exports = ( req, res ) => {
  const { username, useList, wrongList, wordCount } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${useList} ${wrongList} ${wordCount}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
