import {
  __SELECT_WORD,
  __SELECT_SENTNCE,
  __TRANSLATE_SENTENCES,
  __TRANSLATE_ALL,
  __HIDE_TRANSLATE,
  __ASYNC_TRANSLATE_WORDS,
  __HIDE_ALL,
  __ASYNC_LOAD_CONTENT,
  __GET_UNIT_AND_COURSE,
} from 'actionTypes';

/*
defineSyncActionCreator hideAllTranslate start
*/
let hideAllTranslateCounter = 0;
export const hideAllTranslate = () => ({
    type: __HIDE_ALL,
    payload: {
    },
    id: hideAllTranslateCounter++
});
/*
defineSyncActionCreator hideAllTranslate end
*/

/*
defineSyncActionCreator hideTranslate start
*/
let hideTranslateCounter = 0;
export const hideTranslate = () => ({
    type: __HIDE_TRANSLATE,
    payload: {
    },
    id: hideTranslateCounter++
});
/*
defineSyncActionCreator hideTranslate end
*/
let selectWordCounter = 0;
export const selectWord = ( word ) => ({
    type: __SELECT_WORD,
    payload: {
      word,
    },
    id: selectWordCounter++
});

let selectSentenceCounter = 0;
export const selectSentence = ( sentenceId ) => ({
    type: __SELECT_SENTNCE,
    payload: {
      sentenceId,
    },
    id: selectSentenceCounter++
});

/*
defineSyncActionCreator translateSentence start
*/
let translateSentencesCounter = 0;
export const translateSentences = () => ({
    type: __TRANSLATE_SENTENCES,
    payload: {

    },
    id: translateSentencesCounter++
});
/*
defineSyncActionCreator translateSentence end
*/
let translateAllCounter = 0;
export const translateAll = () => ({
    type: __TRANSLATE_ALL,
    payload: {
    },
    id: translateAllCounter++
});

let translateWordsCounter = 0;
const translateWordsStart = () => ({
    type: __ASYNC_TRANSLATE_WORDS.pending,
    payload: {

    },
    id: translateWordsCounter
});
const translateWordsResolved = ( response ) => ({
    type: __ASYNC_TRANSLATE_WORDS.resolved,
    payload: {
      response
    },
    id: translateWordsCounter
});
const translateWordsRejected = ( reason , detail ) => ({
    type: __ASYNC_TRANSLATE_WORDS.rejected,
    payload: {
      reason,
      detail
    },
    id: translateWordsCounter
});

export const translateWords = () => ( dispatch , getState ) => {
  const oldState = getState();
  const reqId = ++translateWordsCounter;
  const dispatchLastest = action => {
    if( reqId === translateWordsCounter ){
      dispatch( action );
    }
  }
  dispatch( translateWordsStart() );
  fetch( '/api/eng_getWordAndRecord' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Content-Type': 'application/x-www-form-urlencoded',

      },
      // body: 'query_words=' + oldState.EnglishArticle.choosedWords.toArray().join(' ')
      body: JSON.stringify({
         all_words: oldState.EnglishArticle.choosedWords.toArray().join(' '),
         username: oldState.UserManager.name,
         article_id: oldState.EnglishArticle.articleId
      })
  })
  .then( response => {
    if( !response.ok ){
      dispatchLastest( translateWordsRejected( "server" , response.status ) );
      return;
    }
    response.json()
    .then( json => dispatchLastest( translateWordsResolved( json ) ) )
    .catch( err => {
      dispatchLastest( translateWordsRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( translateWordsRejected( "network" , err ) );
  });
}

let translateSentenceCounter = 0;
export const translateSentence = () => ({
    type: __TRANSLATE_SENTENCES,
    payload: {
    },
    id: translateSentenceCounter++
});

let loadContentCounter = 0;
const loadContentStart = () => ({
    type: __ASYNC_LOAD_CONTENT.pending,
    payload: {

    },
    id: loadContentCounter
});
const loadContentResolved = ( response ) => ({
    type: __ASYNC_LOAD_CONTENT.resolved,
    payload: {
      response
    },
    id: loadContentCounter
});
const loadContentRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_CONTENT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadContentCounter
});

export const loadContent = ({body}) => ( dispatch , getState ) => {
  const oldState = getState();
  const reqId = ++loadContentCounter;
  const dispatchLastest = action => {
    if( reqId === loadContentCounter ){
      dispatch( action );
    }
  }
  dispatch( loadContentStart() );
  if( typeof body === "object" ){
    body = JSON.stringify( body );
  }
  fetch( '/api/eng_getSentence' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //    username: oldState.UserManager.name,
      //    lock:0,
      //    articleId:0
      // })
      body: body
  })
  .then( response => {
    if( !response.ok ){
      dispatchLastest( loadContentRejected( "server" , response.status ) );
      return;
    }
    response.json()
    .then( json => dispatchLastest( loadContentResolved( json ) ) )
    .catch( err => {
      dispatchLastest( loadContentRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( loadContentRejected( "network" , err ) );
  });
}



let getUnitAndCourseCounter = 0;
const getUnitAndCourseStart = () => ({
    type: __GET_UNIT_AND_COURSE.pending,
    payload: {

    },
    id: getUnitAndCourseCounter
});
const getUnitAndCourseResolved = ( response , initState ) => ({
    type: __GET_UNIT_AND_COURSE.resolved,
    payload: {
      response,
      initState
    },
    id: getUnitAndCourseCounter
});
const getUnitAndCourseRejected = ( reason , detail ) => ({
    type: __GET_UNIT_AND_COURSE.rejected,
    payload: {
      reason,
      detail
    },
    id: getUnitAndCourseCounter
});


export const getUnitAndCourse= ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
//export const loadButtonContents = ({ url , body ,headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++getUnitAndCourseCounter;
    const dispatchLastest = action => {
      if( reqId === getUnitAndCourseCounter ){
        dispatch( action );
      }
    }
    dispatch( getUnitAndCourseStart() );
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
      dispatchLastest( getUnitAndCourseRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( getUnitAndCourseResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( getUnitAndCourseRejected( "json" , err ) )
    //console.log(response)
  });
  })
  .catch( err => {
      dispatchLastest( getUnitAndCourseRejected( "network" , err ) );
 });
};
