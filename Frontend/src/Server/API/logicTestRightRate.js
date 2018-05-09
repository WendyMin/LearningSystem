const callPython = require("./callPython");

const pythonFilename = "jieshou_logic_user_test1.py";

module.exports = ( req, res ) => {
  const { username , right_rate0 , right_rate1 , right_rate2 , right_rate3 , right_rate4 , right_rate5 , right_rate6 , right_rate7 ,
          right_rate8 , right_rate9 , right_rate10 , right_rate11 , right_rate12 , right_rate13 , right_rate14 } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${right_rate0} ${right_rate1} ${right_rate2} ${right_rate3} ${right_rate4} ${right_rate5} ${right_rate6} ${right_rate7} ${right_rate8} ${right_rate9} ${right_rate10} ${right_rate11} ${right_rate12} ${right_rate13} ${right_rate14}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
