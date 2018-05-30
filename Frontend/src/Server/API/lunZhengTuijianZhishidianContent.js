const callPython = require("./callPython");

const pythonFilename = "offer_lunzheng_zhishidian_content.py";

module.exports = ( req, res ) => {
  const { zhishidianName } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${zhishidianName}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
