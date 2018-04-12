import callPython from 'API/callPython';

module.exports = ({ req, res}) => {
  const { name, password } = req.body;
  const[ errCode, res] = callPython("login.py", '${name}' '${password}' )
  if( errCode ){
    res.status(500).end():
  }
  else {
    res.send( res );
  }
}
