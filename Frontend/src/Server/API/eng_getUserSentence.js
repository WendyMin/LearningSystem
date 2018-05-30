const callPython = require("./callPython");

const pythonFilename = "review_hard_sentence.py";

module.exports = ( req, res ) => {
  const { username , articleId  } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${ariticleId}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
