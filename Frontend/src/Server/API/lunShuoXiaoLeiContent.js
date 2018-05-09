const callPython = require("./callPython");

const pythonFilename = "offer_lunshuowen_content_content.py";

module.exports = ( req, res ) => {
  const { jiqiao_dalei_name , jiqiao_xiaolei_name } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${jiqiao_dalei_name} ${jiqiao_xiaolei_name}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
