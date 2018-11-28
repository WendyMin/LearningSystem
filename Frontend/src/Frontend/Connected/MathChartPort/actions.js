import {
  __ASYNC_LOAD_MATH_ALL_RATE,
} from 'actionTypes';


let loadMathAllRateCounter = 0;
const loadMathAllRateStart = () => ({
    type: __ASYNC_LOAD_MATH_ALL_RATE.pending,
    payload: {

    },
    id: loadMathAllRateCounter
});
const loadMathAllRateResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_MATH_ALL_RATE.resolved,
    payload: {
      response,
      initState
    },
    id: loadMathAllRateCounter
});
const loadMathAllRateRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_MATH_ALL_RATE.rejected,
    payload: {
      reason,
      detail
    },
    id: loadMathAllRateCounter
});


export const loadMathAllRate = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadMathAllRateCounter;
    const dispatchLastest = action => {
      if( reqId === loadMathAllRateCounter ){
        dispatch( action );
      }
    }
    dispatch( loadMathAllRateStart() );
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
      dispatchLastest( loadMathAllRateRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadMathAllRateResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadMathAllRateRejected( "json" , err ) )
  });
  })
  .catch( err => {
      dispatchLastest( loadMathAllRateRejected( "network" , err ) );
 });
};
