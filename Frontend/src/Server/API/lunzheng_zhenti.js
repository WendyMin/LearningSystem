import callPython from 'API/callPython';

module.exports = ({ res}) => {
  const[ errCode, res] = callPython("offer_lunzheng_all_year.py" )
  if( errCode ){
    res.status(500).end():
  }
  else {
    res.send( res );
  }
}
