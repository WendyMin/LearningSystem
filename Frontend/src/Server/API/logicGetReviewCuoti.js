const callPython = require("./callPython");

const pythonFilename = "offer_logic_fuxi_cuoti.py";

module.exports = ( req, res ) => {
  const { username , chapter_name } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${chapter_name}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
