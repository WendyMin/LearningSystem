import {
  __ASYNC_LOAD_PORT_CONTENT,
  __ASYNC_LOAD_PORT_CONTENT2,
  __ASYNC_LOAD_PORT_CONTENT3,
} from 'actionTypes';
//import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

let loadPortContentCounter = 0;
const loadPortContentStart = () => ({
    type: __ASYNC_LOAD_PORT_CONTENT.pending,
    payload: {

    },
    id: loadPortContentCounter
});
const loadPortContentResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_PORT_CONTENT.resolved,
    payload: {
      response,
      initState
    },
    id: loadPortContentCounter
});
const loadPortContentRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_PORT_CONTENT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadPortContentCounter
});


export const loadPortContent = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadPortContentCounter;
    const dispatchLastest = action => {
      if( reqId === loadPortContentCounter ){
        dispatch( action );
      }
    }
    dispatch( loadPortContentStart() );
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
      dispatchLastest( loadPortContentRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadPortContentResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadPortContentRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadPortContentRejected( "network" , err ) );
 });
};







let loadPortContentCounter2 = 0;
const loadPortContentStart2 = () => ({
    type: __ASYNC_LOAD_PORT_CONTENT2.pending,
    payload: {

    },
    id: loadPortContentCounter2
});
const loadPortContentResolved2 = ( response , initState ) => ({
    type: __ASYNC_LOAD_PORT_CONTENT2.resolved,
    payload: {
      response,
      initState
    },
    id: loadPortContentCounter2
});
const loadPortContentRejected2 = ( reason , detail ) => ({
    type: __ASYNC_LOAD_PORT_CONTENT2.rejected,
    payload: {
      reason,
      detail
    },
    id: loadPortContentCounter2
});


export const loadPortContent2= ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId2 = ++loadPortContentCounter2;
    const dispatchLastest2 = action => {
      if( reqId2 === loadPortContentCounter2 ){
        dispatch( action );
      }
    }
    dispatch( loadPortContentStart2() );
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
      dispatchLastest2( loadPortContentRejected2( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest2( loadPortContentResolved2(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest2( loadPortContentRejected2( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest2( loadPortContentRejected2( "network" , err ) );
 });
};





let loadPortContentCounter3 = 0;
const loadPortContentStart3 = () => ({
    type: __ASYNC_LOAD_PORT_CONTENT3.pending,
    payload: {

    },
    id: loadPortContentCounter3
});
const loadPortContentResolved3 = ( response , initState ) => ({
    type: __ASYNC_LOAD_PORT_CONTENT3.resolved,
    payload: {
      response,
      initState
    },
    id: loadPortContentCounter3
});
const loadPortContentRejected3 = ( reason , detail ) => ({
    type: __ASYNC_LOAD_PORT_CONTENT3.rejected,
    payload: {
      reason,
      detail
    },
    id: loadPortContentCounter3
});


export const loadPortContent3= ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId3 = ++loadPortContentCounter3;
    const dispatchLastest3 = action => {
      if( reqId3 === loadPortContentCounter3 ){
        dispatch( action );
      }
    }
    dispatch( loadPortContentStart3() );
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
      dispatchLastest3( loadPortContentRejected3( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest3( loadPortContentResolved3(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest3( loadPortContentRejected3( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest3( loadPortContentRejected3( "network" , err ) );
 });
};
