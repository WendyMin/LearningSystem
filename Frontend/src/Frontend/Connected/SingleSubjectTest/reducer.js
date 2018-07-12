import {
  __ASYNC_LOAD_QUESTIONS,
  __SET_CHOICE,
  __LOCK_AND_SHOW,
  __UNLOCK_AND_HIDE,
  __ASYNC_SUBMIT_QUESTIONS,
  __NEXT,
  __AUTO_NEXT,
  __FORCE_END
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
      qtype: "luojiyuyan",
      level: 1
    }
} , { type , payload , id } ) => {
  const { content } = state;
  //console.log(content)
  switch( type ){

/*  defineAsyncActionReducer __LOAD_QUESTIONS start  */
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

    case __LOCK_AND_SHOW:
    case __UNLOCK_AND_HIDE:
      const { qtype , level } = payload;
      const newContent = {...state.content};
      newContent[qtype][level].show = type === __LOCK_AND_SHOW;
      newContent[qtype][level].lock = __LOCK_AND_SHOW === type;

      return {
        ...state,
        content: newContent
      };

    case __SET_CHOICE: {
      const new_content = {...state.content};
      for(var key in new_content){
        if(key == payload.qtype){
          new_content[key].map((one , onekey) => {
            if(onekey == payload.level){
              new_content[key][onekey].choosed =payload.choice
            }
          })
        }
      }
     //console.log(new_content)
      return {
        ...state,
        content: new_content,
        //lock: true,
        //show: true
      };
    }


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
      let [ qtype , level , end , right_rate] = nextQuestion( list , state.nowAt.qtype , state.nowAt.level );
      return {
        ...state,
        nowAt: {
          qtype,
          level
        },
        testendState: end
      }
    }

//再测一次
    case __FORCE_END: {
      return {
        ...state,
        testendState: false,
        nowAt:{
          qtype: "luojiyuyan",
          level: 1
        },
      };
    };

    default:
      return state;
  }
}
