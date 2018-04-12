import {
  __ASYNC_LOAD_BUTTON_CONTENTS,
  __SET_BUTTON_CHOICE
} from 'actionTypes';
import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

let setButtonChoiceCounter = 0;
export const setButtonChoice = ( choice ) => ({
    type: __SET_BUTTON_CHOICE,
    payload: {
      choice
    },
    id: setButtonChoiceCounter++
});

let loadButtonContentsCounter = 0;
const loadButtonContentsStart = () => ({
    type: __ASYNC_LOAD_BUTTON_CONTENTS.pending,
    payload: {

    },
    id: loadButtonContentsCounter
});
const loadButtonContentsResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_BUTTON_CONTENTS.resolved,
    payload: {
      response,
      initState
    },
    id: loadButtonContentsCounter
});
const loadButtonContentsRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_BUTTON_CONTENTS.rejected,
    payload: {
      reason,
      detail
    },
    id: loadButtonContentsCounter
});


export const loadButtonContents = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadButtonContentsCounter;
    const dispatchLastest = action => {
      if( reqId === loadButtonContentsCounter ){
        dispatch( action );
      }
    }
    dispatch( loadButtonContentsStart() );
    if( typeof body === "object" ){
      body = jsonToUrlencoded( body );
    }
    fetch( url , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          ...headers
        },
        body: body
    })
  .then( response => {
    if( !response.ok ){
      dispatchLastest( loadButtonContentsRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadButtonContentsResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadButtonContentsRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadButtonContentsRejected( "network" , err ) );
 });
};
