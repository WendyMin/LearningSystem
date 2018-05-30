import {
  __LOAD_ALL_SUBMIT_TEXT,
  __RECORD_USER_CHOSED_WHICH_TEXT_TO_VIEW,
  __RESET_USER_CHOSED_WHICH_TEXT_TO_VIEW
} from 'actionTypes';

/* 加载用户所有提交过的文本 */
let loadAllSubmitTextCounter = 0;
const loadAllSubmitTextStart = () => ({
    type: __LOAD_ALL_SUBMIT_TEXT.pending,
    payload: {

    },
    id: loadAllSubmitTextCounter
});
const loadAllSubmitTextResolved = ( response ) => ({
    type: __LOAD_ALL_SUBMIT_TEXT.resolved,
    payload: {
      response
    },
    id: loadAllSubmitTextCounter
});
const loadAllSubmitTextRejected = ( reason , detail ) => ({
    type: __LOAD_ALL_SUBMIT_TEXT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadAllSubmitTextCounter
});

export const loadAllSubmitText = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++loadAllSubmitTextCounter;
  const dispatchLastest = action => {
    if( reqId === loadAllSubmitTextCounter ){
      dispatch( action );
    }
  }
  dispatch( loadAllSubmitTextStart() );
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
    dispatchLastest( loadAllSubmitTextRejected( "server" , response.status ) );
    return;
  }
 response.json()
  .then( json => dispatchLastest( loadAllSubmitTextResolved(  json  , initState ) ) )
  .catch( err => {
    dispatchLastest( loadAllSubmitTextRejected( "json" , err ) )
});
})
.catch( err => {
    dispatchLastest( loadAllSubmitTextRejected( "network" , err ) );
});
};

 /* 记录用户想查看第几次提交的文本 */
let recordUserChosedWhichTextToViewCounter = 0;
export const recordUserChosedWhichTextToView = ( time ) => ({
  type: __RECORD_USER_CHOSED_WHICH_TEXT_TO_VIEW,
  payload: {
    time
  },
  id: recordUserChosedWhichTextToViewCounter
});

/* 重置想查看第几次提交的文本，设为空，回到初始状态、列表状态*/
let resetUserChosedWhichTextToViewCounter = 0;
export const resetUserChosedWhichTextToView = () => ({
 type: __RESET_USER_CHOSED_WHICH_TEXT_TO_VIEW,
 payload: {

 },
 id: resetUserChosedWhichTextToViewCounter
});
