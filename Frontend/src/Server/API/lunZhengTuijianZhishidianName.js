const callPython = require("./callPython");

const pythonFilename = "offer_lunzheng_zhishidian_mingcheng.py";

module.exports = ( req, res ) => {
  const { username } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
