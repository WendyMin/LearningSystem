import {
  __ASYNC_LOAD_ARTICLE_ID,
  __ASYNC_LOAD_EXTRA_ARTICLE,
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





let loadExtraArticleCounter = 0;
const loadExtraArticleStart = () => ({
    type: __ASYNC_LOAD_EXTRA_ARTICLE.pending,
    payload: {
    },
    id: loadExtraArticleCounter
});
const loadExtraArticleResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_EXTRA_ARTICLE.resolved,
    payload: {
      response,
      initState
    },
    id: loadExtraArticleCounter
});
const loadExtraArticleRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_EXTRA_ARTICLE.rejected,
    payload: {
      reason,
      detail
    },
    id: loadExtraArticleCounter
});


export const loadExtraArticle = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadExtraArticleCounter;
    const dispatchLastest = action => {
      if( reqId === loadExtraArticleCounter ){
        dispatch( action );
      }
    }
    dispatch( loadExtraArticleStart() );
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
      dispatchLastest( loadExtraArticleRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadExtraArticleResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadExtraArticleRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadExtraArticleRejected( "network" , err ) );
 });
};
