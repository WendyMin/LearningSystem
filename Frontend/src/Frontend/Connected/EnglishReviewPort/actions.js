import {
  __ASYNC_LOAD_REVIEW_LIST,
  __ASYNC_LOAD_HARD_WORD,
  __ASYNC_LOAD_HARD_SENTENCE,
  // __ASYNC_LOAD_PORT_CONTENT4,
  // __ASYNC_LOAD_PORT_CONTENT5,
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



// let loadPortContentCounter4 = 0;
// const loadPortContentStart4 = () => ({
//     type: __ASYNC_LOAD_PORT_CONTENT4.pending,
//     payload: {
//
//     },
//     id: loadPortContentCounter4
// });
// const loadPortContentResolved4 = ( response , initState ) => ({
//     type: __ASYNC_LOAD_PORT_CONTENT4.resolved,
//     payload: {
//       response,
//       initState
//     },
//     id: loadPortContentCounter4
// });
// const loadPortContentRejected4 = ( reason , detail ) => ({
//     type: __ASYNC_LOAD_PORT_CONTENT4.rejected,
//     payload: {
//       reason,
//       detail
//     },
//     id: loadPortContentCounter4
// });
//
//
// export const loadPortContent4= ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
// //export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
//     const reqId4 = ++loadPortContentCounter4;
//     const dispatchLastest4 = action => {
//       if( reqId4 === loadPortContentCounter4 ){
//         dispatch( action );
//       }
//     }
//     dispatch( loadPortContentStart4() );
//     if( typeof body === "object" ){
//       body = JSON.stringify( body );
//     }
//     fetch( url , {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           ...headers
//         },
//         body: body
//     })
//   .then( response => {
//     if( !response.ok ){
//       dispatchLastest4( loadPortContentRejected4( "server" , response.status ) );
//       return;
//     }
//    response.json()
//     .then( json => dispatchLastest4( loadPortContentResolved4(  json  , initState ) ) )
//     .catch( err => {
//       dispatchLastest4( loadPortContentRejected4( "json" , err ) )
//     //console.log(response)
//   });
//   })
//   .catch( err => {
//       dispatchLastest4( loadPortContentRejected4( "network" , err ) );
//  });
// };
//
//
// let loadPortContentCounter5 = 0;
// const loadPortContentStart5 = () => ({
//     type: __ASYNC_LOAD_PORT_CONTENT5.pending,
//     payload: {
//
//     },
//     id: loadPortContentCounter5
// });
// const loadPortContentResolved5 = ( response , initState ) => ({
//     type: __ASYNC_LOAD_PORT_CONTENT5.resolved,
//     payload: {
//       response,
//       initState
//     },
//     id: loadPortContentCounter5
// });
// const loadPortContentRejected5 = ( reason , detail ) => ({
//     type: __ASYNC_LOAD_PORT_CONTENT5.rejected,
//     payload: {
//       reason,
//       detail
//     },
//     id: loadPortContentCounter5
// });
//
//
// export const loadPortContent5= ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
// //export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
//     const reqId5 = ++loadPortContentCounter5;
//     const dispatchLastest5 = action => {
//       if( reqId5 === loadPortContentCounter5 ){
//         dispatch( action );
//       }
//     }
//     dispatch( loadPortContentStart5() );
//     if( typeof body === "object" ){
//       body = JSON.stringify( body );
//     }
//     fetch( url , {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           ...headers
//         },
//         body: body
//     })
//   .then( response => {
//     if( !response.ok ){
//       dispatchLastest5( loadPortContentRejected5( "server" , response.status ) );
//       return;
//     }
//    response.json()
//     .then( json => dispatchLastest5( loadPortContentResolved5(  json  , initState ) ) )
//     .catch( err => {
//       dispatchLastest5( loadPortContentRejected5( "json" , err ) )
//     //console.log(response)
//   });
//   })
//   .catch( err => {
//       dispatchLastest5( loadPortContentRejected5( "network" , err ) );
//  });
// };
