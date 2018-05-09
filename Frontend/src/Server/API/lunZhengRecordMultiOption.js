const callPython = require("./callPython");

const pythonFilename = "jieshou_xiezuo_user_duoxuanti.py";

module.exports = ( req, res ) => {
  const { username , chapter_name , xuanxiang } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${chapter_name} ${xuanxiang}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
