const callPython = require("./callPython");

const pythonFilename = "offer_writing.py";

module.exports = ( req, res ) => {
  const { username , ariticle_id  } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${ariticle_id}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
