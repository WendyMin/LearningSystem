const callPython = require("./callPython");

const pythonFilename = "jieshou_logic_finish_chapter.py";

module.exports = ( req, res ) => {
  const { username , chapter_name , whetherEnterNextChapter } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${chapter_name} ${whetherEnterNextChapter}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
