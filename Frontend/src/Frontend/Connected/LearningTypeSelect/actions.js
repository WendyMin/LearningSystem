import {
  __RECORD_XINGSHI_OR_LUNZHENG,
  __SET_LEARNING_TYPE,
  __ASYNC_LOAD_CHAPTER_NAME,
  __ASYNC_SUBMIT_WHETHER_NEXT
} from 'actionTypes';

let recodXingshiOrLunzhengCounter = 0;
export const recordXingshiOrLunzheng = ( learningAllType ) => ({
  type: __RECORD_XINGSHI_OR_LUNZHENG,
  payload: {
    learningAllType
  },
  id: recodXingshiOrLunzhengCounter++
});

let setLearningTypeCounter = 0;
export const setLearningType = ( learningType ) => ({
  type: __SET_LEARNING_TYPE,
  payload: {
    learningType
  },
  id: setLearningTypeCounter++
});


let getChapterNameCounter = 0;
const getChapterNameStart = () => ({
    type: __ASYNC_LOAD_CHAPTER_NAME.pending,
    payload: {

    },
    id: getChapterNameCounter
});
const getChapterNameResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_CHAPTER_NAME.resolved,
    payload: {
      response,
      initState
    },
    id: getChapterNameCounter
});
const getChapterNameRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_CHAPTER_NAME.rejected,
    payload: {
      reason,
      detail
    },
    id: getChapterNameCounter
});


export const getChapterName = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//exCHAPTER const loadButtonNAMEs = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++getChapterNameCounter;
    const dispatchLastest = action => {
      if( reqId === getChapterNameCounter ){
        dispatch( action );
      }
    }
    dispatch( getChapterNameStart() );
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
      dispatchLastest( getChapterNameRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( getChapterNameResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( getChapterNameRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( getChapterNameRejected( "network" , err ) );
 });
};


let getRecordWhetherNextCounter = 0;
const getRecordWhetherNextStart = () => ({
    type: __ASYNC_SUBMIT_WHETHER_NEXT.pending,
    payload: {

    },
    id: getRecordWhetherNextCounter
});
const getRecordWhetherNextResolved = ( response , initState ) => ({
    type: __ASYNC_SUBMIT_WHETHER_NEXT.resolved,
    payload: {
      response,
      initState
    },
    id: getRecordWhetherNextCounter
});
const getRecordWhetherNextRejected = ( reason , detail ) => ({
    type: __ASYNC_SUBMIT_WHETHER_NEXT.rejected,
    payload: {
      reason,
      detail
    },
    id: getRecordWhetherNextCounter
});
export const getRecordWhetherNext = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//exCHAPTER const loadButtonNAMEs = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++getRecordWhetherNextCounter;
    const dispatchLastest = action => {
      if( reqId === getRecordWhetherNextCounter ){
        dispatch( action );
      }
    }
    dispatch( getRecordWhetherNextStart() );
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
      dispatchLastest( getRecordWhetherNextRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( getRecordWhetherNextResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( getRecordWhetherNextRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( getRecordWhetherNextRejected( "network" , err ) );
 });
};

/*export const getRecordWhetherNext = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++getChapterNameCounter;
    const dispatchLastest = action => {
      if( reqId === getChapterNameCounter ){
        dispatch( action );
      }
    }
    dispatch( getRecordWhetherNextStart() );
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
      dispatchLastest( getRecordWhetherNextRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( getRecordWhetherNextResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( getRecordWhetherNextRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( getRecordWhetherNextRejected( "network" , err ) );
 });
};*/
