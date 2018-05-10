const callPython = require("./callPython");

const pythonFilename = "storage_hard_sentence.py";

module.exports = ( req, res ) => {
  const { username , article_id , hard_sentence_ids } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${article_id} ${hard_sentence_ids}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
