const callPython = require("./callPython");

const pythonFilename = "offer_lunzheng_per_tongji.py";

module.exports = ( req, res ) => {
  const { chapter_name , xuanxiang } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${chapter_name} ${xuanxiang}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
