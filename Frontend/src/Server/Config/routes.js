const fs = require("fs");
const path = require("path");
const apiObj = {};
const requireAPI = ( api ) => require("../API/" + api );

const apiList = fs.readdirSync( path.resolve( __dirname , "../API/" ) );

for( let api of apiList ){
  if( api === "callPython" || api === "python" ){
    continue;
  }
  api = api.slice( 0 ,  api.length - 3 );
  console.log( api );
  apiObj[`/${api}`] = { api: requireAPI( api ) };
}
console.log( apiObj );
module.exports = apiObj;
