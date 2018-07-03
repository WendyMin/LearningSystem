import {
  __ASYNC_LOAD_QUESTIONS,
  __SET_CHOICE,
  __LOCK_AND_SHOW,
  __ASYNC_SUBMIT_QUESTIONS,
  __NEXT,
  __AUTO_NEXT,
  __CLEAR_AUTO_NEXT,
  __FORCE_END,
  __RECORD_WORD_TEST,
} from 'actionTypes';

//import jsonToUrlencoded from 'direct-core/Algorithm/jsonToUrlencoded';
export const forceEnd = () => ({
    type: __FORCE_END,
    payload: {
    }
});
export const forceNext = () => ( dispatch , getState ) => {
  const { EnglishWordTest: { clear } } = getState();
  clearTimeout( clear );
  dispatch( next() );
}
export const autoNext = ( cid , time = 1000 ) => ( dispatch , getState ) => {
  const { EnglishWordTest:{ nowAt: { level , num, rightnum } , content } } = getState();
  dispatch(setChoice_( level , num , cid ));
  dispatch(lockAndShow( level , num ));

  let clear = setTimeout(
    () => {
      dispatch(next());
    },
    time
  );
  dispatch({
    type: __AUTO_NEXT,
    payload: {
      clear
    }
  })
};

export const next = () => ({
  type: __NEXT
});

let lockAndShowCounter = 0;
export const lockAndShow = ( level , num ) => ({
    type: __LOCK_AND_SHOW,
    payload: {
      level,
      num
    },
    id: lockAndShowCounter++
});

let unlockAndHideCounter = 0;
export const unlockAndHide = ( level , num ) => ({
    type: __UNLOCK_AND_HIDE,
    payload: {
      level,
      num
    },
    id: unlockAndHideCounter++
});

let setChoiceCounter = 0;
export const setChoice_ = ( level , num , choice ) => ({
    type: __SET_CHOICE,
    payload: {
      level,
      num,
      //question,
      choice
    },
    id: setChoiceCounter++
});
/*let lockAndShowCounter = 0;
export const lockAndShow = ( questionId ) => ({
    type: __LOCK_AND_SHOW,
    payload: {
      questionId
    },
    id: lockAndShowCounter++
});*/

let submitQuestionsCounter = 0;
const submitQuestionsStart = () => ({
    type: __ASYNC_SUBMIT_QUESTIONS.pending,
    payload: {
    },
    id: submitQuestionsCounter
});
const submitQuestionsResolved = ( response ) => ({
    type: __ASYNC_SUBMIT_QUESTIONS.resolved,
    payload: {
      response
    },
    id: submitQuestionsCounter
});
const submitQuestionsRejected = ( reason , detail ) => ({
    type: __ASYNC_SUBMIT_QUESTIONS.rejected,
    payload: {
      reason,
      detail
    },
    id: submitQuestionsCounter
});

export const submitQuestions = ({ url , body , headers }) => ( dispatch , getState ) => {
  const reqId = ++submitQuestionsCounter;
  const dispatchLastest = action => {
    if( reqId === submitQuestionsCounter ){
      dispatch( action );
    }
  }
  dispatch( submitQuestionsStart() );
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
    if( response.ok ){
      dispatchLastest( submitQuestionsResolved() );
      return;
    }
  })
  .catch( err => {
      dispatchLastest( submitQuestionsRejected( "network" , err ) );
  });
};

let loadTestQuestionsCounter = 0;
const loadTestQuestionsStart = () => ({
    type: __ASYNC_LOAD_QUESTIONS.pending,
    payload: {

    },
    id: loadTestQuestionsCounter
});
const loadTestQuestionsResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_QUESTIONS.resolved,
    payload: {
      response,
      initState
    },
    id: loadTestQuestionsCounter
});
const loadTestQuestionsRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_QUESTIONS.rejected,
    payload: {
      reason,
      detail
    },
    id: loadTestQuestionsCounter
});

export const loadTestQuestions = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++loadTestQuestionsCounter;
  const dispatchLastest = action => {
    if( reqId === loadTestQuestionsCounter ){
      dispatch( action );
    }
  }
  dispatch( loadTestQuestionsStart() );
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
      dispatchLastest( loadTestQuestionsRejected( "server" , response.status ) );
      return;
    }
    response.json()
    //.then( json => dispatchLastest( loadTestQuestionsResolved( parser( json ) , initState ) ) )
    .then( json => dispatchLastest( loadTestQuestionsResolved( json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadTestQuestionsRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( loadTestQuestionsRejected( "network" , err ) );
  });
};



let recordWordTestCounter = 0;
const recordWordTestStart = () => ({
    type: __RECORD_WORD_TEST.pending,
    payload: {

    },
    id: recordWordTestCounter
});
const recordWordTestResolved = ( response , initState ) => ({
    type: __RECORD_WORD_TEST.resolved,
    payload: {
      response,
      initState
    },
    id: recordWordTestCounter
});
const recordWordTestRejected = ( reason , detail ) => ({
    type: __RECORD_WORD_TEST.rejected,
    payload: {
      reason,
      detail
    },
    id: recordWordTestCounter
});

export const recordWordTest = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++recordWordTestCounter;
  const dispatchLastest = action => {
    if( reqId === recordWordTestCounter ){
      dispatch( action );
    }
  }
  dispatch( recordWordTestStart() );
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
      dispatchLastest( recordWordTestRejected( "server" , response.status ) );
      return;
    }
    response.json()
    //.then( json => dispatchLastest( loadTestQuestionsResolved( parser( json ) , initState ) ) )
    .then( json => dispatchLastest( recordWordTestResolved( json  , initState ) ) )
    .catch( err => {
      dispatchLastest( recordWordTestRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( recordWordTestRejected( "network" , err ) );
  });
};
