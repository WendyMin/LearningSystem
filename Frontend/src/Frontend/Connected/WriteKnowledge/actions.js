import {
  __ASYNC_LOAD_WRITE_KNOWLEDGE
} from 'actionTypes';
import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

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
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadWriteKnowledgeCounter;
    const dispatchLastest = action => {
      if( reqId === loadWriteKnowledgeCounter ){
        dispatch( action );
      }
    }
    dispatch( loadWriteKnowledgeStart() );
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
      dispatchLastest( loadWriteKnowledgeRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadWriteKnowledgeResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadWriteKnowledgeRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadWriteKnowledgeRejected( "network" , err ) );
 });
};
