import {
  __ASYNC_LOAD_QUESTIONS,
  __SET_CHOICE,
  __LOCK_AND_SHOW,
  __ASYNC_SUBMIT_QUESTIONS,
  __NEXT,
  __AUTO_NEXT,
  __CLEAR_AUTO_NEXT,
  __FORCE_END,
  __RECORD_WORD_TEST_LEVEL,
  __RECORD_WORD_TEST_WORDS,
  __GET_LEVEL,
  __GET_RATE,
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



let recordWordTestLevelCounter = 0;
const recordWordTestLevelStart = () => ({
    type: __RECORD_WORD_TEST_LEVEL.pending,
    payload: {

    },
    id: recordWordTestLevelCounter
});
const recordWordTestLevelResolved = ( response , initState ) => ({
    type: __RECORD_WORD_TEST_LEVEL.resolved,
    payload: {
      response,
      initState
    },
    id: recordWordTestLevelCounter
});
const recordWordTestLevelRejected = ( reason , detail ) => ({
    type: __RECORD_WORD_TEST_LEVEL.rejected,
    payload: {
      reason,
      detail
    },
    id: recordWordTestLevelCounter
});

export const recordWordTestLevel = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++recordWordTestLevelCounter;
  const dispatchLastest = action => {
    if( reqId === recordWordTestLevelCounter ){
      dispatch( action );
    }
  }
  dispatch( recordWordTestLevelStart() );
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
      dispatchLastest( recordWordTestLevelRejected( "server" , response.status ) );
      return;
    }
    response.json()
    //.then( json => dispatchLastest( loadTestQuestionsResolved( parser( json ) , initState ) ) )
    .then( json => dispatchLastest( recordWordTestLevelResolved( json  , initState ) ) )
    .catch( err => {
      dispatchLastest( recordWordTestLevelRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( recordWordTestLevelRejected( "network" , err ) );
  });
};





let recordWordTestWordsCounter = 0;
const recordWordTestWordsStart = () => ({
    type: __RECORD_WORD_TEST_WORDS.pending,
    payload: {

    },
    id: recordWordTestWordsCounter
});
const recordWordTestWordsResolved = ( response , initState ) => ({
    type: __RECORD_WORD_TEST_WORDS.resolved,
    payload: {
      response,
      initState
    },
    id: recordWordTestWordsCounter
});
const recordWordTestWordsRejected = ( reason , detail ) => ({
    type: __RECORD_WORD_TEST_WORDS.rejected,
    payload: {
      reason,
      detail
    },
    id: recordWordTestWordsCounter
});

export const recordWordTestWords = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++recordWordTestWordsCounter;
  const dispatchLastest = action => {
    if( reqId === recordWordTestWordsCounter ){
      dispatch( action );
    }
  }
  dispatch( recordWordTestWordsStart() );
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
      dispatchLastest( recordWordTestWordsRejected( "server" , response.status ) );
      return;
    }
    response.json()
    //.then( json => dispatchLastest( loadTestQuestionsResolved( parser( json ) , initState ) ) )
    .then( json => dispatchLastest( recordWordTestWordsResolved( json  , initState ) ) )
    .catch( err => {
      dispatchLastest( recordWordTestWordsRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( recordWordTestWordsRejected( "network" , err ) );
  });
};





let getLevelCounter = 0;
const getLevelStart = () => ({
    type: __GET_LEVEL.pending,
    payload: {

    },
    id: getLevelCounter
});
const getLevelResolved = ( response , initState ) => ({
    type: __GET_LEVEL.resolved,
    payload: {
      response,
      initState
    },
    id: getLevelCounter
});
const getLevelRejected = ( reason , detail ) => ({
    type: __GET_LEVEL.rejected,
    payload: {
      reason,
      detail
    },
    id: getLevelCounter
});

export const getLevel = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++getLevelCounter;
  const dispatchLastest = action => {
    if( reqId === getLevelCounter ){
      dispatch( action );
    }
  }
  dispatch( getLevelStart() );
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
      dispatchLastest( getLevelRejected( "server" , response.status ) );
      return;
    }
    response.json()
    //.then( json => dispatchLastest( loadTestQuestionsResolved( parser( json ) , initState ) ) )
    .then( json => dispatchLastest( getLevelResolved( json  , initState ) ) )
    .catch( err => {
      dispatchLastest( getLevelRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( getLevelRejected( "network" , err ) );
  });
};






let getRateCounter = 0;
const getRateStart = () => ({
    type: __GET_RATE.pending,
    payload: {

    },
    id: getRateCounter
});
const getRateResolved = ( response , initState ) => ({
    type: __GET_RATE.resolved,
    payload: {
      response,
      initState
    },
    id: getRateCounter
});
const getRateRejected = ( reason , detail ) => ({
    type: __GET_RATE.rejected,
    payload: {
      reason,
      detail
    },
    id: getRateCounter
});

export const getRate = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++getRateCounter;
  const dispatchLastest = action => {
    if( reqId === getRateCounter ){
      dispatch( action );
    }
  }
  dispatch( getRateStart() );
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
      dispatchLastest( getRateRejected( "server" , response.status ) );
      return;
    }
    response.json()
    //.then( json => dispatchLastest( loadTestQuestionsResolved( parser( json ) , initState ) ) )
    .then( json => dispatchLastest( getRateResolved( json  , initState ) ) )
    .catch( err => {
      dispatchLastest( getRateRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( getRateRejected( "network" , err ) );
  });
};
