import React from "react";
export default {
  socket: {

  },
  persistentState: {
    UserManager: {
      logined: true,
      name: true,
      password: true,
      newTo: true
    }
  },
  onAppWillMount( socket , dispatch ){

  },
  onAppWillClose( state , persistentState , socket ){

  },
  onUIErrorShowErrorMessage: true,
  UIErrorMessage: (
    <div>
      a bug happened
    </div>
  ),
  UIErrorHandler( error , info ){
    console.log( error , info );
  }
};
