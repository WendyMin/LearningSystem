const callPython = require("./callPython");

const pythonFilename = "offer_lunshuowen_zhenti_content.py";

module.exports = ( req, res ) => {
  const { requestQuestion } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${requestQuestion}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
