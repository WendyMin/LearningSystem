import {
  __ASYNC_LOAD_WRITE_KNOWLEDGE
} from 'actionTypes';


let loadWriteKnowledgeCounter = 0;
const loadWriteKnowledgeStart = () => ({
    type: __ASYNC_LOAD_WRITE_KNOWLEDGE.pending,
    payload: {

    },
    id: loadWriteKnowledgeCounter
});
const loadWriteKnowledgeResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_WRITE_KNOWLEDGE.resolved,
    payload: {
      response,
      initState
    },
    id: loadWriteKnowledgeCounter
});
const loadWriteKnowledgeRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_WRITE_KNOWLEDGE.rejected,
    payload: {
      reason,
      detail
    },
    id: loadWriteKnowledgeCounter
});


export const loadWriteKnowledge = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadWriteKnowledgeCounter;
    const dispatchLastest = action => {
      if( reqId === loadWriteKnowledgeCounter ){
        dispatch( action );
      }
    }
    dispatch( loadWriteKnowledgeStart() );
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
      dispatchLastest( loadWriteKnowledgeRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadWriteKnowledgeResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadWriteKnowledgeRejected( "json" , err ) )
  });
  })
  .catch( err => {
      dispatchLastest( loadWriteKnowledgeRejected( "network" , err ) );
 });
};
