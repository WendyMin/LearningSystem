import {
  __ASYNC_LOAD_CH_TO_ENG,
} from 'actionTypes';
//import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

let loadChtoEngCounter = 0;
const loadChtoEngStart = () => ({
    type: __ASYNC_LOAD_CH_TO_ENG.pending,
    payload: {

    },
    id: loadChtoEngCounter
});
const loadChtoEngResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_CH_TO_ENG.resolved,
    payload: {
      response,
      initState
    },
    id: loadChtoEngCounter
});
const loadChtoEngRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_CH_TO_ENG.rejected,
    payload: {
      reason,
      detail
    },
    id: loadChtoEngCounter
});


export const loadChtoEng = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadChtoEngCounter;
    const dispatchLastest = action => {
      if( reqId === loadChtoEngCounter ){
        dispatch( action );
      }
    }
    dispatch( loadChtoEngStart() );
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
      dispatchLastest( loadChtoEngRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadChtoEngResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadChtoEngRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadChtoEngRejected( "network" , err ) );
 });
};
