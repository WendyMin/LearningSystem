import {
  __ASYNC_LOAD_WORD_RATE_ALL,
} from 'actionTypes';
//import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

let loadWordRateAllCounter = 0;
const loadWordRateAllStart = () => ({
    type: __ASYNC_LOAD_WORD_RATE_ALL.pending,
    payload: {

    },
    id: loadWordRateAllCounter
});
const loadWordRateAllResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_WORD_RATE_ALL.resolved,
    payload: {
      response,
      initState
    },
    id: loadWordRateAllCounter
});
const loadWordRateAllRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_WORD_RATE_ALL.rejected,
    payload: {
      reason,
      detail
    },
    id: loadWordRateAllCounter
});


export const loadWordRateAll = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadWordRateAllCounter;
    const dispatchLastest = action => {
      if( reqId === loadWordRateAllCounter ){
        dispatch( action );
      }
    }
    dispatch( loadWordRateAllStart() );
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
      dispatchLastest( loadWordRateAllRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadWordRateAllResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadWordRateAllRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadWordRateAllRejected( "network" , err ) );
 });
};
