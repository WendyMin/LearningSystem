const callPython = require("./callPython");

const pythonFilename = "offer_lunzheng_zhenti_error.py";

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
