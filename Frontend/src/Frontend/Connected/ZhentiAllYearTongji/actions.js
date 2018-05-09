import {
  __ASYNC_LOAD_ALL_ZHENTI_TONGJI
} from 'actionTypes';


let loadAllZhentiTongjiCounter = 0;
const loadAllZhentiTongjiStart = () => ({
    type: __ASYNC_LOAD_ALL_ZHENTI_TONGJI.pending,
    payload: {

    },
    id: loadAllZhentiTongjiCounter
});
const loadAllZhentiTongjiResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_ALL_ZHENTI_TONGJI.resolved,
    payload: {
      response,
      initState
    },
    id: loadAllZhentiTongjiCounter
});
const loadAllZhentiTongjiRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_ALL_ZHENTI_TONGJI.rejected,
    payload: {
      reason,
      detail
    },
    id: loadAllZhentiTongjiCounter
});


export const loadAllZhentiTongji = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadAllZhentiTongjiCounter;
    const dispatchLastest = action => {
      if( reqId === loadAllZhentiTongjiCounter ){
        dispatch( action );
      }
    }
    dispatch( loadAllZhentiTongjiStart() );
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
      dispatchLastest( loadAllZhentiTongjiRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadAllZhentiTongjiResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadAllZhentiTongjiRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadAllZhentiTongjiRejected( "network" , err ) );
 });
};
