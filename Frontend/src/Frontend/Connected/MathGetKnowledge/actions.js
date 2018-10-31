import {
  __ASYNC_LOAD_MATH_KNOWLEDGE
} from 'actionTypes';


let loadMathKnowledgeCounter = 0;
const loadMathKnowledgeStart = () => ({
    type: __ASYNC_LOAD_MATH_KNOWLEDGE.pending,
    payload: {

    },
    id: loadMathKnowledgeCounter
});
const loadMathKnowledgeResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_MATH_KNOWLEDGE.resolved,
    payload: {
      response,
      initState
    },
    id: loadMathKnowledgeCounter
});
const loadMathKnowledgeRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_MATH_KNOWLEDGE.rejected,
    payload: {
      reason,
      detail
    },
    id: loadMathKnowledgeCounter
});


export const loadMathKnowledge = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadMathKnowledgeCounter;
    const dispatchLastest = action => {
      if( reqId === loadMathKnowledgeCounter ){
        dispatch( action );
      }
    }
    dispatch( loadMathKnowledgeStart() );
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
      dispatchLastest( loadMathKnowledgeRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadMathKnowledgeResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadMathKnowledgeRejected( "json" , err ) )
  });
  })
  .catch( err => {
      dispatchLastest( loadMathKnowledgeRejected( "network" , err ) );
 });
};
