const callPython = require("./callPython");

const pythonFilename = "get_test_wrongrate.py";

module.exports = ( req, res ) => {
  const { username, type_list, wrong_rate_list } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${type_list} ${wrong_rate_list}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
