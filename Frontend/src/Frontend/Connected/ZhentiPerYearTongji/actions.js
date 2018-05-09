import {
  __ASYNC_LOAD_ZHENTI_TONGJI
} from 'actionTypes';


let loadZhentiTongjiCounter = 0;
const loadZhentiTongjiStart = () => ({
    type: __ASYNC_LOAD_ZHENTI_TONGJI.pending,
    payload: {

    },
    id: loadZhentiTongjiCounter
});
const loadZhentiTongjiResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_ZHENTI_TONGJI.resolved,
    payload: {
      response,
      initState
    },
    id: loadZhentiTongjiCounter
});
const loadZhentiTongjiRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_ZHENTI_TONGJI.rejected,
    payload: {
      reason,
      detail
    },
    id: loadZhentiTongjiCounter
});


export const loadZhentiTongji = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadZhentiTongjiCounter;
    const dispatchLastest = action => {
      if( reqId === loadZhentiTongjiCounter ){
        dispatch( action );
      }
    }
    dispatch( loadZhentiTongjiStart() );
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
      dispatchLastest( loadZhentiTongjiRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadZhentiTongjiResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadZhentiTongjiRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadZhentiTongjiRejected( "network" , err ) );
 });
};
