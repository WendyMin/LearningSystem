import {
  __ASYNC_LOAD_QUESTIONS,
  __SET_CHOICE,
  __LOCK_AND_SHOW,
  __UNLOCK_AND_HIDE,
  __ASYNC_SUBMIT_QUESTIONS,
  __NEXT,
  __AUTO_NEXT,
  __FORCE_END,
  __RECORD_WORD_TEST_LEVEL,
  __RECORD_WORD_TEST_WORDS,
  __GET_LEVEL,
  __GET_RATE,
} from 'actionTypes';

import nextQuestion from "Algorithm/EngWordTestDecideNextWord";

export default ( state = {
    content: {},
    change: [],
    recordwords: [],
    recordFlagAndLevel: [],
    rightwords: [],
    wrongwords: [],
    rate: [],
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
      level: "basic",
      num: 0,
      xuhao: 1,
      rightnum: 0,
      rightword: [],
      wrongword: [],
    }
} , { type , payload , id } ) => {
  const { content, rightwords, wrongwords } = state;
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
        content: response,
        rightwords: [],
        wrongwords: [],
        nowAt:{
          level: "basic",
          num: 0,
          xuhao: 1,
          rightnum: 0,
          rightword: [],
          wrongword: [],
        }
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



    /*  defineAsyncActionReducer __RECORD_WORD_TEST_LEVEL start  */
    case __RECORD_WORD_TEST_LEVEL.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __RECORD_WORD_TEST_LEVEL.resolved: {
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
        change: response,
      };
    }
    case __RECORD_WORD_TEST_LEVEL.rejected: {
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





    /*  defineAsyncActionReducer __RECORD_WORD_TEST_WORDS start  */
    case __RECORD_WORD_TEST_WORDS.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __RECORD_WORD_TEST_WORDS.resolved: {
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
        recordwords: response,
      };
    }
    case __RECORD_WORD_TEST_WORDS.rejected: {
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




    /*  defineAsyncActionReducer __GET_LEVEL start  */
    case __GET_LEVEL.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __GET_LEVEL.resolved: {
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
        recordFlagAndLevel: response,
      };
    }
    case __GET_LEVEL.rejected: {
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





        /*  defineAsyncActionReducer __GET_RATE start  */
        case __GET_RATE.pending: {
          let loadState = {...state.loadState };
          loadState.lastFailed = false;
          loadState.pending++;
          return {
            ...state,
            loadState
          };
        }
        case __GET_RATE.resolved: {
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
            rate: response,
          };
        }
        case __GET_RATE.rejected: {
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
      const { level , num } = payload;
      const newContent = {...state.content};
      newContent[level][num].show = type === __LOCK_AND_SHOW;
      newContent[level][num].lock = __LOCK_AND_SHOW === type;

      return {
        ...state,
        content: newContent
      };

    case __SET_CHOICE: {
      const new_content = {...state.content};
      for(var key in new_content){
        if(key == payload.level){
          new_content[key].map((one , onekey) => {
            if(onekey == payload.num){
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
      let questions = state.content;
      let [ level , num , end , rightnum, rightword, wrongword] = nextQuestion( questions , state.nowAt.level , state.nowAt.num, state.nowAt.rightnum );
      // console.log(rightword, wrongword)
      if(rightword=="") { wrongwords.push(state.nowAt.level); wrongwords.push(wrongword) }
      else { rightwords.push(state.nowAt.level); rightwords.push(rightword) }
      return {
        ...state,
        rightwords,
        wrongwords,
        nowAt: {
          level,
          num,
          xuhao: state.nowAt.xuhao + 1,
          rightnum,
         rightword,
         wrongword
        },
        testendState: end,
      }

    }

    //再测一次，无用
    case __FORCE_END: {
      return {
        ...state,
        testendState: false,
        nowAt:{
          level: "basic",
          num: 0,
          rightnum: 0
        },
        //content: {}
      };
    };

    default:
      return state;
  }
}
