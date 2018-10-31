const callPython = require("./callPython");

const pythonFilename = "math_test.py";

module.exports = ( req, res ) => {
  const { type , chapter_name , title } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${type} ${chapter_name} ${title}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
