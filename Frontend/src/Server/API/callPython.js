var execSync = require('child_process').execSync;

module.exports = ( name , args = "" ) => {
    name = __dirname + `/python/${name}`;
    console.log(`python ${name} ${args}`);
    var stdout;
    try {
      stdout = execSync( `python ${name} ${args}` );
    } catch ( err ){
      console.log( err );
      return [ 1 , err ];
    }
    return [ 0 , stdout.toString() ];
}
