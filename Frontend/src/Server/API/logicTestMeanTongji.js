const callPython = require("./callPython");
const pythonFilename = "offer_logic_user_shuiping_mean.py";

///const pythonFilename = "offer_logic_tongji.py";

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
