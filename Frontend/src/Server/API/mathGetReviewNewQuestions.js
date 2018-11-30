const callPython = require("./callPython");

const pythonFilename = "offer_math_new_type.py";

module.exports = ( req, res ) => {
  const { username , chapter_name , zhishidian } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${chapter_name} ${zhishidian}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
