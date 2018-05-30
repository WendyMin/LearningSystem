import {
  __ASYNC_LOAD_REVIEW_CHAPTER,
  __SET_CHAPTER
} from 'actionTypes';
//import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';

let getLogicReviewChapterNameCounter = 0;
const getLogicReviewChapterNameStart = () => ({
    type: __ASYNC_LOAD_REVIEW_CHAPTER.pending,
    payload: {

    },
    id: getLogicReviewChapterNameCounter
});
const getLogicReviewChapterNameResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_REVIEW_CHAPTER.resolved,
    payload: {
      response,
      initState
    },
    id: getLogicReviewChapterNameCounter
});
const getLogicReviewChapterNameRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_REVIEW_CHAPTER.rejected,
    payload: {
      reason,
      detail
    },
    id: getLogicReviewChapterNameCounter
});


export const getLogicReviewChapterName = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++getLogicReviewChapterNameCounter;
    const dispatchLastest = action => {
      if( reqId === getLogicReviewChapterNameCounter ){
        dispatch( action );
      }
    }
    dispatch( getLogicReviewChapterNameStart() );
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
      dispatchLastest( getLogicReviewChapterNameRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( getLogicReviewChapterNameResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( getLogicReviewChapterNameRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( getLogicReviewChapterNameRejected( "network" , err ) );
 });
};

let setChapterCounter = 0;
export const setChapter = ( choice ) => ({
  type: __SET_CHAPTER,
  payload: {
    choice
  },
  id: setChapterCounter++
});
