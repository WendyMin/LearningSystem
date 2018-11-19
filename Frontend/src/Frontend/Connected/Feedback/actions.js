import {
  __ASYNC_SEND_FEEDBACK
} from 'actionTypes';


let loadFeedbackCounter = 0;
const loadFeedbackStart = () => ({
    type: __ASYNC_SEND_FEEDBACK.pending,
    payload: {

    },
    id: loadFeedbackCounter
});
const loadFeedbackResolved = ( response , initState ) => ({
    type: __ASYNC_SEND_FEEDBACK.resolved,
    payload: {
      response,
      initState
    },
    id: loadFeedbackCounter
});
const loadFeedbackRejected = ( reason , detail ) => ({
    type: __ASYNC_SEND_FEEDBACK.rejected,
    payload: {
      reason,
      detail
    },
    id: loadFeedbackCounter
});


export const loadFeedback = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadFeedbackCounter;
    const dispatchLastest = action => {
      if( reqId === loadFeedbackCounter ){
        dispatch( action );
      }
    }
    dispatch( loadFeedbackStart() );
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
      dispatchLastest( loadFeedbackRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadFeedbackResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadFeedbackRejected( "json" , err ) )
  });
  })
  .catch( err => {
      dispatchLastest( loadFeedbackRejected( "network" , err ) );
 });
};
