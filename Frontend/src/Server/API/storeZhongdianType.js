const callPython = require("./callPython");

const pythonFilename = "storage_zhongdian_type.py";

module.exports = ( req, res ) => {
  const { username, type1, type2, timu_list, accuracy_list } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${type1} ${type2} ${timu_list} ${accuracy_list}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
