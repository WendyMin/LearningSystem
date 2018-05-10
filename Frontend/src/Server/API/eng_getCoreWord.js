const callPython = require("./callPython");

const pythonFilename = "offer_core_word.py";

module.exports = ( req, res ) => {
  const { articleId } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${articleId}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
