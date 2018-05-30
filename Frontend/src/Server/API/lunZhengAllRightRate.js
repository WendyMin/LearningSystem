const callPython = require("./callPython");

const pythonFilename = "offer_lunzheng_zhengquelv.py";

module.exports = ( req, res ) => {
  const { username , option , beforeData } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${option} ${beforeData}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
