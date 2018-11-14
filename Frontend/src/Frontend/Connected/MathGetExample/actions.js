import {
  __ASYNC_LOAD_MATH_EXAMPLE
} from 'actionTypes';


let loadMathExampleCounter = 0;
const loadMathExampleStart = () => ({
    type: __ASYNC_LOAD_MATH_EXAMPLE.pending,
    payload: {

    },
    id: loadMathExampleCounter
});
const loadMathExampleResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_MATH_EXAMPLE.resolved,
    payload: {
      response,
      initState
    },
    id: loadMathExampleCounter
});
const loadMathExampleRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_MATH_EXAMPLE.rejected,
    payload: {
      reason,
      detail
    },
    id: loadMathExampleCounter
});


export const loadMathExample = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadMathExampleCounter;
    const dispatchLastest = action => {
      if( reqId === loadMathExampleCounter ){
        dispatch( action );
      }
    }
    dispatch( loadMathExampleStart() );
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
      dispatchLastest( loadMathExampleRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadMathExampleResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadMathExampleRejected( "json" , err ) )
  });
  })
  .catch( err => {
      dispatchLastest( loadMathExampleRejected( "network" , err ) );
 });
};
