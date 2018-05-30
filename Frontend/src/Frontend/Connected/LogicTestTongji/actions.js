import {
  __ASYNC_LOAD_LOGIC_TEST_RESULT,
  __ASYNC_LOAD_LOGIC_TEST_MEAN_RESULT
} from 'actionTypes';
//import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

let loadTestTongjiContentCounter = 0;
const loadTestTongjiContentStart = () => ({
    type: __ASYNC_LOAD_LOGIC_TEST_RESULT.pending,
    payload: {

    },
    id: loadTestTongjiContentCounter
});
const loadTestTongjiContentResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_LOGIC_TEST_RESULT.resolved,
    payload: {
      response,
      initState
    },
    id: loadTestTongjiContentCounter
});
const loadTestTongjiContentRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_LOGIC_TEST_RESULT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadTestTongjiContentCounter
});


export const loadTestTongjiContent = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadTestTongjiContentCounter;
    const dispatchLastest = action => {
      if( reqId === loadTestTongjiContentCounter ){
        dispatch( action );
      }
    }
    dispatch( loadTestTongjiContentStart() );
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
      dispatchLastest( loadTestTongjiContentRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadTestTongjiContentResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadTestTongjiContentRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadTestTongjiContentRejected( "network" , err ) );
 });
};

/* 加载平均正确率的统计 */
let loadTestMeanTongjiContentCounter = 0;
const loadTestMeanTongjiContentStart = () => ({
    type: __ASYNC_LOAD_LOGIC_TEST_MEAN_RESULT.pending,
    payload: {

    },
    id: loadTestMeanTongjiContentCounter
});
const loadTestMeanTongjiContentResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_LOGIC_TEST_MEAN_RESULT.resolved,
    payload: {
      response,
      initState
    },
    id: loadTestMeanTongjiContentCounter
});
const loadTestMeanTongjiContentRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_LOGIC_TEST_MEAN_RESULT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadTestMeanTongjiContentCounter
});


export const loadTestMeanTongjiContent = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadTestMeanTongjiContentCounter;
    const dispatchLastest = action => {
      if( reqId === loadTestMeanTongjiContentCounter ){
        dispatch( action );
      }
    }
    dispatch( loadTestMeanTongjiContentStart() );
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
      dispatchLastest( loadTestMeanTongjiContentRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadTestMeanTongjiContentResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadTestMeanTongjiContentRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadTestMeanTongjiContentRejected( "network" , err ) );
 });
};
