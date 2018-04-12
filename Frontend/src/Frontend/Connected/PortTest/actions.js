import {
  __ASYNC_LOAD_PORT_CONTENT
} from 'actionTypes';
import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

let loadPortContentCounter = 0;
const loadPortContentStart = () => ({
    type: __ASYNC_LOAD_PORT_CONTENT.pending,
    payload: {

    },
    id: loadPortContentCounter
});
const loadPortContentResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_PORT_CONTENT.resolved,
    payload: {
      response,
      initState
    },
    id: loadPortContentCounter
});
const loadPortContentRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_PORT_CONTENT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadPortContentCounter
});


export const loadPortContent = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadPortContentCounter;
    const dispatchLastest = action => {
      if( reqId === loadPortContentCounter ){
        dispatch( action );
      }
    }
    dispatch( loadPortContentStart() );
    if( typeof body === "object" ){
      body = jsonToUrlencoded( body );
    }
    fetch( url , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          ...headers
        },
        body: body
    })
  .then( response => {
    if( !response.ok ){
      dispatchLastest( loadPortContentRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadPortContentResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadPortContentRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadPortContentRejected( "network" , err ) );
 });
};
