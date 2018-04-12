var exec = require('child_process').exec;

module.exports = ( name , args ) => {
    name = __dirname + "/name";
    exec(`python ${name} ${args}` , function( err , stdout , stderr ){
      if( err ){
        return [1,err];
      }
      if( stdout ){
        return [0,stdout];
      }
    });
}
