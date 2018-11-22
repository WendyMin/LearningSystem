import {
  __ASYNC_SEND_FEEDBACK
} from 'actionTypes';


let sendFeedbackCounter = 0;
const sendFeedbackStart = () => ({
    type: __ASYNC_SEND_FEEDBACK.pending,
    payload: {

    },
    id: sendFeedbackCounter
});
const sendFeedbackResolved = ( response , initState ) => ({
    type: __ASYNC_SEND_FEEDBACK.resolved,
    payload: {
      response,
      initState
    },
    id: sendFeedbackCounter
});
const sendFeedbackRejected = ( reason , detail ) => ({
    type: __ASYNC_SEND_FEEDBACK.rejected,
    payload: {
      reason,
      detail
    },
    id: sendFeedbackCounter
});


export const sendFeedback = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++sendFeedbackCounter;
    const dispatchLastest = action => {
      if( reqId === sendFeedbackCounter ){
        dispatch( action );
      }
    }
    dispatch( sendFeedbackStart() );
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
      dispatchLastest( sendFeedbackRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( sendFeedbackResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( sendFeedbackRejected( "json" , err ) )
  });
  })
  .catch( err => {
      dispatchLastest( sendFeedbackRejected( "network" , err ) );
 });
};
