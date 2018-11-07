import {
  __ASYNC_LOAD_MATH_LEVEL_TEST_RESULT,
  __ASYNC_LOAD_MATH_LEVEL_TEST_MEAN_RESULT
} from 'actionTypes';
//import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

let loadMathLevelTestTongjiContentCounter = 0;
const loadMathLevelTestTongjiContentStart = () => ({
    type: __ASYNC_LOAD_MATH_LEVEL_TEST_RESULT.pending,
    payload: {

    },
    id: loadMathLevelTestTongjiContentCounter
});
const loadMathLevelTestTongjiContentResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_MATH_LEVEL_TEST_RESULT.resolved,
    payload: {
      response,
      initState
    },
    id: loadMathLevelTestTongjiContentCounter
});
const loadMathLevelTestTongjiContentRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_MATH_LEVEL_TEST_RESULT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadMathLevelTestTongjiContentCounter
});


export const loadMathLevelTestTongjiContent = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadMathLevelTestTongjiContentCounter;
    const dispatchLastest = action => {
      if( reqId === loadMathLevelTestTongjiContentCounter ){
        dispatch( action );
      }
    }
    dispatch( loadMathLevelTestTongjiContentStart() );
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
      dispatchLastest( loadMathLevelTestTongjiContentRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadMathLevelTestTongjiContentResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadMathLevelTestTongjiContentRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadMathLevelTestTongjiContentRejected( "network" , err ) );
 });
};

/* 加载平均正确率的统计 */
let loadMathLevelTestMeanTongjiContentCounter = 0;
const loadMathLevelTestMeanTongjiContentStart = () => ({
    type: __ASYNC_LOAD_MATH_LEVEL_TEST_MEAN_RESULT.pending,
    payload: {

    },
    id: loadMathLevelTestMeanTongjiContentCounter
});
const loadMathLevelTestMeanTongjiContentResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_MATH_LEVEL_TEST_MEAN_RESULT.resolved,
    payload: {
      response,
      initState
    },
    id: loadMathLevelTestMeanTongjiContentCounter
});
const loadMathLevelTestMeanTongjiContentRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_MATH_LEVEL_TEST_MEAN_RESULT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadMathLevelTestMeanTongjiContentCounter
});


export const loadMathLevelTestMeanTongjiContent = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadMathLevelTestMeanTongjiContentCounter;
    const dispatchLastest = action => {
      if( reqId === loadMathLevelTestMeanTongjiContentCounter ){
        dispatch( action );
      }
    }
    dispatch( loadMathLevelTestMeanTongjiContentStart() );
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
      dispatchLastest( loadMathLevelTestMeanTongjiContentRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadMathLevelTestMeanTongjiContentResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadMathLevelTestMeanTongjiContentRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadMathLevelTestMeanTongjiContentRejected( "network" , err ) );
 });
};
