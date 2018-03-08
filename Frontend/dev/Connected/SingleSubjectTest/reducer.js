/*
**   Antinux Innovation
**   Author: Eric Deng
*/
import {
  __SET_CHOICE,
  __ASYNC_LOAD_QUESTIONS,
  __ASYNC_SUBMIT_QUESTIONS,
  __NEXT,
  __LOCK_AND_SHOW,
  __UNLOCK_AND_HIDE,
  __AUTO_NEXT
} from 'actionTypes';

import nextQuestion from "Algorithm/decideNextQuestion";

export default ( state = {
    content: {},
    submitState: {
      pending: 0,
      resolved: 0,
      rejected: 0,
      lastFailed: false,
      failedReason: "network", // "json" , "server"
      failedDetail: null
    },
    loadState: {
      pending: 0,
      resolved: 0,
      rejected: 0,
      lastFailed: false,
      failedReason: "network", // "json" , "server"
      failedDetail: null
    },
    testendState: false,
    nowAt:{
      level: "easy",
      index: 0
    }
} , { type , payload , id } ) => {
  const { content } = state;
  console.log(content)
  switch( type ){

    case __LOCK_AND_SHOW:
    case __UNLOCK_AND_HIDE:
      const {  level , index } = payload;
      const newContent = {...state.content};
      newContent[level][index].show = type === __LOCK_AND_SHOW;
      newContent[level][index].lock = __LOCK_AND_SHOW === type;
      return {
        ...state,
        content: newContent
        };


    case __SET_CHOICE:
      return {
        ...state,
        content: {
          easy: content.easy.map(q => q.question === payload.question ?
              { ...q , choosed: payload.choice, lock: true, show: true} : q ),
          meddium: content.meddium.map(q => q.question === payload.question ?
              { ...q , choosed: payload.choice, lock: true, show: true } : q ),
          hard: content.hard.map(q => q.question === payload.question ?
              { ...q , choosed: payload.choice, lock: true, show: true } : q )
        },
        //lockAndShow: true
        lock: true,
        show: true
      };

    /*  case __LOCK_AND_SHOW:

        return {
          ...state,
          content: content.map(
            q => q.questionId === payload.questionId ?
              { ...q,
                show : type === __LOCK_AND_SHOW,
                lock : __LOCK_AND_SHOW === type
              }
              :q
            )
          };*/

    case __ASYNC_SUBMIT_QUESTIONS.pending: {
      let submitState = {...state.submitState};
      submitState.pending++;
      submitState.lastFailed = false;
      return { ...state,
        submitState
      };
    }
    case __ASYNC_SUBMIT_QUESTIONS.resolved: {
      let submitState = {...state.submitState};
      submitState.pending--;
      submitState.resolved++;
      return { ...state,
        submitState
      };
    }
    case __ASYNC_SUBMIT_QUESTIONS.rejected: {
      let submitState = {...state.submitState};
      submitState.pending--;
      submitState.rejected++;
      submitState.lastFailed = true;
      return { ...state,
        submitState
      };
    }

    /*
    defineAsyncActionReducer __LOAD_QUESTIONS start
    */
    case __ASYNC_LOAD_QUESTIONS.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_QUESTIONS.resolved: {
      let { response , initState } = payload;
      initState = initState || {
        lock: false,
        show: false,
        choice: -1
      };
      let loadState = {...state.loadState };
      loadState.resolved++;
      loadState.pending--;
      return {
        ...state,
        loadState,
        content: response
        //.map( q => ({
          //...q,
        //  lock: initState.lock,
        //  show: initState.show,
        //  choice: initState
      //  }))
      };
    }
    case __ASYNC_LOAD_QUESTIONS.rejected: {
      let { reason , detail } = payload;
      let loadState = {...state.loadState };
      loadState.rejected++;
      loadState.pending--;
      loadState.lastFailed = true;
      loadState.failedReason = reason;
      loadState.failedDetail = detail;
      return {
        ...state,
        loadState
      };
    }
    /*
    defineAsyncActionReducer __LOAD_QUESTIONS end
    */

    case __AUTO_NEXT: {
      let { clear } = payload;
      return {
        ...state,
        clear
      };
    };

    case __NEXT: {
      let list = state.content;
      let [ level , index ] = nextQuestion( list );
      let table = {
        0 : "easy",
        1 : "meddium",
        2 : "hard"
      };
      const convert = ( num ) => {
        return table[num];
      };
      level = convert( level );
      return {
        ...state,
        nowAt: {
          level,
          index
        }
      }
    }
    default:
      return state;
  }
}
