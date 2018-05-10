const callPython = require("./callPython");

const pythonFilename = "offer_hard_word.py";

module.exports = ( req, res ) => {
  const { username , ariticleId  } = req.body;
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
