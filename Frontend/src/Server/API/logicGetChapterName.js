const callPython = require("./callPython");

const pythonFilename = "offer_logic_chapter_name.py";

module.exports = ( req, res ) => {
  const { username , xingshi } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${xingshi}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
