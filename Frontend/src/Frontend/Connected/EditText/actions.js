import {
  __RECORD_USER_INPUT_TEXT,
  __SAVE_OR_SUMBIT_TEXT,
  __LOAD_LAST_SAVE_TEXT
} from 'actionTypes';

 /* 保存记录用户输入到文本框里边的内容 */
 let recordUserInputTextCounter = 0;
 export const recordUserInputText = ( text ) => ({
   type: __RECORD_USER_INPUT_TEXT,
   payload: {
     text
   },
   id: recordUserInputTextCounter
 });

 /* 暂存或者提交文件 */
 let saveOrSubmitTextCounter = 0;
 const saveOrSubmitTextStart = () => ({
     type: __SAVE_OR_SUMBIT_TEXT.pending,
     payload: {

     },
     id: saveOrSubmitTextCounter
 });
 const saveOrSubmitTextResolved = ( response , initState ) => ({
     type: __SAVE_OR_SUMBIT_TEXT.resolved,
     payload: {
       response,
       initState
     },
     id: saveOrSubmitTextCounter
 });
 const saveOrSubmitTextRejected = ( reason , detail ) => ({
     type: __SAVE_OR_SUMBIT_TEXT.rejected,
     payload: {
       reason,
       detail
     },
     id: saveOrSubmitTextCounter
 });


 export const saveOrSubmitText = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
     const reqId = ++saveOrSubmitTextCounter;
     const dispatchLastest = action => {
       if( reqId === saveOrSubmitTextCounter ){
         dispatch( action );
       }
     }
     dispatch( saveOrSubmitTextStart() );
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
       dispatchLastest( saveOrSubmitTextRejected( "server" , response.status ) );
       return;
     }
    response.json()
     .then( json => dispatchLastest( saveOrSubmitTextResolved(  json  , initState ) ) )
     .catch( err => {
       dispatchLastest( saveOrSubmitTextRejected( "json" , err ) )
   });
   })
   .catch( err => {
       dispatchLastest( saveOrSubmitTextRejected( "network" , err ) );
  });
 };

/* 加载用户最新一次保存的文本 */
let loadLastSaveTextCounter = 0;
const loadLastSaveTextStart = () => ({
    type: __LOAD_LAST_SAVE_TEXT.pending,
    payload: {

    },
    id: loadLastSaveTextCounter
});
const loadLastSaveTextResolved = ( response ) => ({
    type: __LOAD_LAST_SAVE_TEXT.resolved,
    payload: {
      response
    },
    id: loadLastSaveTextCounter
});
const loadLastSaveTextRejected = ( reason , detail ) => ({
    type: __LOAD_LAST_SAVE_TEXT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadLastSaveTextCounter
});

export const loadLastSaveText = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++loadLastSaveTextCounter;
  const dispatchLastest = action => {
    if( reqId === loadLastSaveTextCounter ){
      dispatch( action );
    }
  }
  dispatch( loadLastSaveTextStart() );
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
    dispatchLastest( loadLastSaveTextRejected( "server" , response.status ) );
    return;
  }
 response.json()
  .then( json => dispatchLastest( loadLastSaveTextResolved(  json  , initState ) ) )
  .catch( err => {
    dispatchLastest( loadLastSaveTextRejected( "json" , err ) )
});
})
.catch( err => {
    dispatchLastest( loadLastSaveTextRejected( "network" , err ) );
});
};
