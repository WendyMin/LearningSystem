const callPython = require("./callPython");

const pythonFilename = "storage_word.py";

module.exports = ( req, res ) => {
  const {  all_words, username, article_id } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${article_id} ${all_words}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
