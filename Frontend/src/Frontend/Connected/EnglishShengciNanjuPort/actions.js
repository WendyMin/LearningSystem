import {
  __ASYNC_LOAD_ARTICLE_ID,
  __ASYNC_LOAD_SHENGCI,
  __ASYNC_LOAD_NANJU,
  // __ASYNC_LOAD_PORT_CONTENT4,
  // __ASYNC_LOAD_PORT_CONTENT5,
} from 'actionTypes';
//import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

let loadArticleIdCounter = 0;
const loadArticleIdStart = () => ({
    type: __ASYNC_LOAD_ARTICLE_ID.pending,
    payload: {

    },
    id: loadArticleIdCounter
});
const loadArticleIdResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_ARTICLE_ID.resolved,
    payload: {
      response,
      initState
    },
    id: loadArticleIdCounter
});
const loadArticleIdRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_ARTICLE_ID.rejected,
    payload: {
      reason,
      detail
    },
    id: loadArticleIdCounter
});


export const loadArticleId = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadArticleIdCounter;
    const dispatchLastest = action => {
      if( reqId === loadArticleIdCounter ){
        dispatch( action );
      }
    }
    dispatch( loadArticleIdStart() );
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
      dispatchLastest( loadArticleIdRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadArticleIdResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadArticleIdRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadArticleIdRejected( "network" , err ) );
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
    const reqId = ++loadShengciCounter;
    const dispatchLastest = action => {
      if( reqId === loadShengciCounter ){
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
      dispatchLastest( loadShengciRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadShengciResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadShengciRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadShengciRejected( "network" , err ) );
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
    const reqId = ++loadNanjuCounter;
    const dispatchLastest = action => {
      if( reqId === loadNanjuCounter ){
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
      dispatchLastest( loadNanjuRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadNanjuResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadNanjuRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadNanjuRejected( "network" , err ) );
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
