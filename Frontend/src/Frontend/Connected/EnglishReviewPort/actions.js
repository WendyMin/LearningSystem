import {
  __ASYNC_LOAD_REVIEW_LIST,
  __ASYNC_LOAD_HARD_WORD,
  __ASYNC_LOAD_HARD_SENTENCE,
  __ASYNC_LOAD_SHENGCI,
  __ASYNC_LOAD_NANJU,
} from 'actionTypes';

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





let loadHardWordCounter = 0;
const loadHardWordStart = () => ({
    type: __ASYNC_LOAD_HARD_WORD.pending,
    payload: {

    },
    id: loadHardWordCounter
});
const loadHardWordResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_HARD_WORD.resolved,
    payload: {
      response,
      initState
    },
    id: loadHardWordCounter
});
const loadHardWordRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_HARD_WORD.rejected,
    payload: {
      reason,
      detail
    },
    id: loadHardWordCounter
});


export const loadHardWord= ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadHardWordCounter;
    const dispatchLastest = action => {
      if( reqId === loadHardWordCounter ){
        dispatch( action );
      }
    }
    dispatch( loadHardWordStart() );
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
      dispatchLastest( loadHardWordRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadHardWordResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadHardWordRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadHardWordRejected( "network" , err ) );
 });
};





let loadHardSentenceCounter = 0;
const loadHardSentenceStart = () => ({
    type: __ASYNC_LOAD_HARD_SENTENCE.pending,
    payload: {

    },
    id: loadHardSentenceCounter
});
const loadHardSentenceResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_HARD_SENTENCE.resolved,
    payload: {
      response,
      initState
    },
    id: loadHardSentenceCounter
});
const loadHardSentenceRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_HARD_SENTENCE.rejected,
    payload: {
      reason,
      detail
    },
    id: loadHardSentenceCounter
});


export const loadHardSentence= ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadHardSentenceCounter;
    const dispatchLastest = action => {
      if( reqId === loadHardSentenceCounter ){
        dispatch( action );
      }
    }
    dispatch( loadHardSentenceStart() );
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
      dispatchLastest( loadHardSentenceRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadHardSentenceResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadHardSentenceRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadHardSentenceRejected( "network" , err ) );
 });
};



let loadShengciCounter = 0;
const loadShengciStart = () => ({
    type: __ASYNC_LOAD_SHENGCI.pending,
    payload: {

    },
    id: loadShengciCounter
});
const loadShengciResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_SHENGCI.resolved,
    payload: {
      response,
      initState
    },
    id: loadShengciCounter
});
const loadShengciRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_SHENGCI.rejected,
    payload: {
      reason,
      detail
    },
    id: loadShengciCounter
});


export const loadShengci= ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId4 = ++loadShengciCounter;
    const dispatchLastest4 = action => {
      if( reqId4 === loadShengciCounter ){
        dispatch( action );
      }
    }
    dispatch( loadShengciStart() );
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
      dispatchLastest4( loadShengciRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest4( loadShengciResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest4( loadShengciRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest4( loadShengciRejected( "network" , err ) );
 });
};


let loadNanjuCounter = 0;
const loadNanjuStart = () => ({
    type: __ASYNC_LOAD_NANJU.pending,
    payload: {

    },
    id: loadNanjuCounter
});
const loadNanjuResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_NANJU.resolved,
    payload: {
      response,
      initState
    },
    id: loadNanjuCounter
});
const loadNanjuRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_NANJU.rejected,
    payload: {
      reason,
      detail
    },
    id: loadNanjuCounter
});


export const loadNanju= ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId5 = ++loadNanjuCounter;
    const dispatchLastest5 = action => {
      if( reqId5 === loadNanjuCounter ){
        dispatch( action );
      }
    }
    dispatch( loadNanjuStart() );
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
      dispatchLastest5( loadNanjuRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest5( loadNanjuResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest5( loadNanjuRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest5( loadNanjuRejected( "network" , err ) );
 });
};
