import {
  __SET_LEARNING_TYPE,
  __ASYNC_LOAD_PORT_CONTENT
} from 'actionTypes';

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
    type: __ASYNC_LOAD_PORT_CONTENT.pending,
    payload: {

    },
    id: getChapterNameCounter
});
const getChapterNameResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_PORT_CONTENT.resolved,
    payload: {
      response,
      initState
    },
    id: getChapterNameCounter
});
const getChapterNameRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_PORT_CONTENT.rejected,
    payload: {
      reason,
      detail
    },
    id: getChapterNameCounter
});


export const getChapterName = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
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
