import {
  __ASYNC_LOAD_ALL_ZHENTI_TONGJI,
  __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_NAME,
  __SET_KNOWLEDGE_NAME,
  __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_CONTENT,
  __ASYNC_LOAD_RECOMMAND_ARTICLE,
  __SET_ARTICLE_NAME
} from 'actionTypes';

 /*加载所有做过的真题的统计数据，包括错选次数，漏选次数*/
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

/* 加载推荐知识点的名称 */
let loadTuijianZhishidianNameCounter = 0;
const loadTuijianZhishidianNameStart = () => ({
    type: __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_NAME.pending,
    payload: {

    },
    id: loadTuijianZhishidianNameCounter
});
const loadTuijianZhishidianNameResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_NAME.resolved,
    payload: {
      response,
      initState
    },
    id: loadTuijianZhishidianNameCounter
});
const loadTuijianZhishidianNameRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_NAME.rejected,
    payload: {
      reason,
      detail
    },
    id: loadTuijianZhishidianNameCounter
});


export const loadTuijianZhishidianName = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadTuijianZhishidianNameCounter;
    const dispatchLastest = action => {
      if( reqId === loadTuijianZhishidianNameCounter ){
        dispatch( action );
      }
    }
    dispatch( loadTuijianZhishidianNameStart() );
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
      dispatchLastest( loadTuijianZhishidianNameRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadTuijianZhishidianNameResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadTuijianZhishidianNameRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadTuijianZhishidianNameRejected( "network" , err ) );
 });
};
 /* 设置用户点击的知识点的名称 */
let SetZhishidianNameCounter = 0;
export const SetZhishidianName = ( choice ) => ({
  type: __SET_KNOWLEDGE_NAME,
  payload: {
    choice
  },
  id: SetZhishidianNameCounter++
});
/* 加载推荐知识点的具体内容 */
let loadTuijianZhishidianContentCounter = 0;
const loadTuijianZhishidianContentStart = () => ({
    type: __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_CONTENT.pending,
    payload: {

    },
    id: loadTuijianZhishidianContentCounter
});
const loadTuijianZhishidianContentResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_CONTENT.resolved,
    payload: {
      response,
      initState
    },
    id: loadTuijianZhishidianContentCounter
});
const loadTuijianZhishidianContentRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_CONTENT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadTuijianZhishidianContentCounter
});


export const loadTuijianZhishidianContent = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadTuijianZhishidianContentCounter;
    const dispatchLastest = action => {
      if( reqId === loadTuijianZhishidianContentCounter ){
        dispatch( action );
      }
    }
    dispatch( loadTuijianZhishidianContentStart() );
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
      dispatchLastest( loadTuijianZhishidianContentRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadTuijianZhishidianContentResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadTuijianZhishidianContentRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadTuijianZhishidianContentRejected( "network" , err ) );
 });
};
/* 加载推荐的文章名称 */
let loadTuijianArticleCounter = 0;
const loadTuijianArticleStart = () => ({
    type: __ASYNC_LOAD_RECOMMAND_ARTICLE.pending,
    payload: {

    },
    id: loadTuijianArticleCounter
});
const loadTuijianArticleResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_RECOMMAND_ARTICLE.resolved,
    payload: {
      response,
      initState
    },
    id: loadTuijianArticleCounter
});
const loadTuijianArticleRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_RECOMMAND_ARTICLE.rejected,
    payload: {
      reason,
      detail
    },
    id: loadTuijianArticleCounter
});


export const loadTuijianArticle = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadTuijianArticleCounter;
    const dispatchLastest = action => {
      if( reqId === loadTuijianArticleCounter ){
        dispatch( action );
      }
    }
    dispatch( loadTuijianArticleStart() );
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
      dispatchLastest( loadTuijianArticleRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( loadTuijianArticleResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadTuijianArticleRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( loadTuijianArticleRejected( "network" , err ) );
 });
};

/* 设置用户点击的文章的名称 */
let SetArticleNameCounter = 0;
export const SetArticleName = ( choice ) => ({
 type: __SET_ARTICLE_NAME,
 payload: {
   choice
 },
 id: SetArticleNameCounter++
});
