import {
  __ASYNC_LOAD_USER_INFO
} from 'actionTypes';


let loadUserInfoCounter = 0;
const loadUserInfoStart = () => ({
    type: __ASYNC_LOAD_USER_INFO.pending,
    payload: {

    },
    id: loadUserInfoCounter
});
const loadUserInfoResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_USER_INFO.resolved,
    payload: {
      response,
      initState
    },
    id: loadUserInfoCounter
});
const loadUserInfoRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_USER_INFO.rejected,
    payload: {
      reason,
      detail
    },
    id: loadUserInfoCounter
});


export const loadUserInfo = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadUserInfoCounter;
    const dispatchLastest = action => {
      if( reqId === loadUserInfoCounter ){
        dispatch( action );
      }
    }
    dispatch( loadUserInfoStart() );
    if( typeof body === "object" ){
      body = JSON.stringify( body );
    }
    fetch( url , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: body
    })
  .then( response => {
    if( !response.ok ){
      dispatchLastest( loadUserInfoRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadUserInfoResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadUserInfoRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadUserInfoRejected( "network" , err ) );
 });
};
