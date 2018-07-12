import {
  __LOAD_DID_TEST,
} from 'actionTypes';


let loadDidTestCounter = 0;
const loadDidTestStart = () => ({
    type: __LOAD_DID_TEST.pending,
    payload: {

    },
    id: loadDidTestCounter
});
const loadDidTestResolved = ( response , initState ) => ({
    type: __LOAD_DID_TEST.resolved,
    payload: {
      response,
      initState
    },
    id: loadDidTestCounter
});
const loadDidTestRejected = ( reason , detail ) => ({
    type: __LOAD_DID_TEST.rejected,
    payload: {
      reason,
      detail
    },
    id: loadDidTestCounter
});

export const loadDidTest = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++loadDidTestCounter;
  const dispatchLastest = action => {
    if( reqId === loadDidTestCounter ){
      dispatch( action );
    }
  }
  dispatch( loadDidTestStart() );
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
      dispatchLastest( loadDidTestRejected( "server" , response.status ) );
      return;
    }
    response.json()
    //.then( json => dispatchLastest( loadTestQuestionsResolved( parser( json ) , initState ) ) )
    .then( json => dispatchLastest( loadDidTestResolved( json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadDidTestRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( loadDidTestRejected( "network" , err ) );
  });
};
