const callPython = require("./callPython");

const pythonFilename = "query_sentence.py";

module.exports = ( req, res ) => {
  const { username , lock , articleId  } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${lock} ${articleId}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
