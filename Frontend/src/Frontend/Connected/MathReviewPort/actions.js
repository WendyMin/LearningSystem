import {
  __ASYNC_LOAD_REVIEW_LIST,
} from 'actionTypes';
//import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

let loadReviewListCounter = 0;
const loadReviewListStart = () => ({
    type: __ASYNC_LOAD_REVIEW_LIST.pending,
    payload: {

    },
    id: loadReviewListCounter
});
const loadReviewListResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_REVIEW_LIST.resolved,
    payload: {
      response,
      initState
    },
    id: loadReviewListCounter
});
const loadReviewListRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_REVIEW_LIST.rejected,
    payload: {
      reason,
      detail
    },
    id: loadReviewListCounter
});


export const loadReviewList = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadReviewListCounter;
    const dispatchLastest = action => {
      if( reqId === loadReviewListCounter ){
        dispatch( action );
      }
    }
    dispatch( loadReviewListStart() );
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
      dispatchLastest( loadReviewListRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadReviewListResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadReviewListRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadReviewListRejected( "network" , err ) );
 });
};
