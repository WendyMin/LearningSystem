import {
  __ASYNC_LOAD_WRITE_CONTENTS
} from 'actionTypes';

let loadWriteContentsCounter = 0;
const loadWriteContentsStart = () => ({
    type: __ASYNC_LOAD_WRITE_CONTENTS.pending,
    payload: {

    },
    id: loadWriteContentsCounter
});
const loadWriteContentsResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_WRITE_CONTENTS.resolved,
    payload: {
      response,
      initState
    },
    id: loadWriteContentsCounter
});
const loadWriteContentsRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_WRITE_CONTENTS.rejected,
    payload: {
      reason,
      detail
    },
    id: loadWriteContentsCounter
});


export const loadWriteContents = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadWriteContentsCounter;
    const dispatchLastest = action => {
      if( reqId === loadWriteContentsCounter ){
        dispatch( action );
      }
    }
    dispatch( loadWriteContentsStart() );
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
      dispatchLastest( loadWriteContentsRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadWriteContentsResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadWriteContentsRejected( "json" , err ) )
  });
  })
  .catch( err => {
      dispatchLastest( loadWriteContentsRejected( "network" , err ) );
 });
};
