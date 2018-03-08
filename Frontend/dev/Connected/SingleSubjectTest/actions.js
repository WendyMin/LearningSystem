/*   Antinux Innovation
**   Author: Eric Deng*/
import {
  __ASYNC_LOAD_QUESTIONS,
  __SET_CHOICE,
  __LOCK_AND_SHOW,
  __ASYNC_SUBMIT_QUESTIONS,
  __NEXT,
  __AUTO_NEXT,
  __CLEAR_AUTO_NEXT
} from 'actionTypes';

import jsonToUrlencoded from 'Algorithm/jsonToUrlencoded';

export const forceNext = () => ( dispatch , getState ) => {
  const { SingleSubjectTest: { clear } } = getState();
  clearTimeout( clear );
  dispatch( next() );
}
export const autoNext = ( cid , time = 1000 ) => ( dispatch , getState ) => {
  const { SingleSubjectTest:{ nowAt: { level , index } , content } } = getState();
  dispatch(lockAndShow( level , index ));
  dispatch(setChoice_( content[level][index].question , cid ));
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
export const lockAndShow = ( level , index ) => ({
    type: __LOCK_AND_SHOW,
    payload: {
       level , index
    },
    id: lockAndShowCounter++
});

let unlockAndHideCounter = 0;
export const unlockAndHide = ( level , index ) => ({
    type: __UNLOCK_AND_HIDE,
    payload: {
       level , index
    },
    id: unlockAndHideCounter++
});

let setChoiceCounter = 0;
export const setChoice_ = ( question, choice ) => ({
    type: __SET_CHOICE,
    payload: {
      question,
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
    if( response.ok ){
      dispatchLastest( submitQuestionsResolved() );
      return;
    }
  })
  .catch( err => {
      dispatchLastest( submitQuestionsRejected( "network" , err ) );
  });
};

let loadQuestionsCounter = 0;
const loadQuestionsStart = () => ({
    type: __ASYNC_LOAD_QUESTIONS.pending,
    payload: {

    },
    id: loadQuestionsCounter
});
const loadQuestionsResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_QUESTIONS.resolved,
    payload: {
      response,
      initState
    },
    id: loadQuestionsCounter
});
const loadQuestionsRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_QUESTIONS.rejected,
    payload: {
      reason,
      detail
    },
    id: loadQuestionsCounter
});

export const loadQuestions = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++loadQuestionsCounter;
  const dispatchLastest = action => {
    if( reqId === loadQuestionsCounter ){
      dispatch( action );
    }
  }
  dispatch( loadQuestionsStart() );
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
      dispatchLastest( loadQuestionsRejected( "server" , response.status ) );
      return;
    }
    response.json()
    //.then( json => dispatchLastest( loadQuestionsResolved( parser( json ) , initState ) ) )
    .then( json => dispatchLastest( loadQuestionsResolved( json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadQuestionsRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( loadQuestionsRejected( "network" , err ) );
  });
};
