const callPython = require("./callPython");

const pythonFilename = "show_chart.py";

module.exports = ( req, res ) => {
  const { username , aid  } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${aid}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
