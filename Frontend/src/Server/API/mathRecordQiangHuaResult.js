const callPython = require("./callPython");

const pythonFilename = "jieshou_math_qianghua.py";

module.exports = ( req, res ) => {
  const { username , chapter_name , zhishidian , timu_id , rightOrWrong } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${chapter_name} ${zhishidian} ${timu_id} ${rightOrWrong}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
