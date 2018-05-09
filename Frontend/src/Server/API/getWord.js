const callPython = require("./callPython");

const pythonFilename = "query_word.py";

module.exports = ( req, res ) => {
  var { query_words } = req.body;
  // query_words = query_words || "";
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${query_words}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
