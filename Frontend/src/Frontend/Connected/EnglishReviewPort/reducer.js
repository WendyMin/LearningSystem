import {
  __ASYNC_LOAD_REVIEW_LIST,
  __ASYNC_LOAD_HARD_WORD,
  __ASYNC_LOAD_HARD_SENTENCE,
  // __ASYNC_LOAD_PORT_CONTENT4,
  // __ASYNC_LOAD_PORT_CONTENT5,
} from 'actionTypes';

export default ( state = {
    reviewlist: "",
    hardword: [],
    hardsentence: [],
    // content4: [],
    // content5: [],
    name2: [],
    name3: [],

    loadState: {
      pending: 0,
      resolved: 0,
      rejected: 0,
      lastFailed: false,
      failedReason: "network", // "json" , "server"
      failedDetail: null
    },
} , { type , payload , id } ) => {
  const { content } = state;
  //console.log(content)
  switch( type ){
    case __ASYNC_LOAD_REVIEW_LIST.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_REVIEW_LIST.resolved: {
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
        reviewlist: response,
        name2: response.section_name2,
        name3: response.section_name3,
      };
    }
    case __ASYNC_LOAD_REVIEW_LIST.rejected: {
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



    case __ASYNC_LOAD_HARD_WORD.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_HARD_WORD.resolved: {
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
        hardword: response,
      };
    }
    case __ASYNC_LOAD_HARD_WORD.rejected: {
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




    case __ASYNC_LOAD_HARD_SENTENCE.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_HARD_SENTENCE.resolved: {
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
        hardsentence: response,
      };
    }
    case __ASYNC_LOAD_HARD_SENTENCE.rejected: {
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




    // case __ASYNC_LOAD_PORT_CONTENT4.pending: {
    //   let loadState = {...state.loadState };
    //   loadState.lastFailed = false;
    //   loadState.pending++;
    //   return {
    //     ...state,
    //     loadState
    //   };
    // }
    // case __ASYNC_LOAD_PORT_CONTENT4.resolved: {
    //   let { response , initState } = payload;
    //   initState = initState || {
    //     lock: false,
    //     show: false,
    //     choice: -1
    //   };
    //   let loadState = {...state.loadState };
    //   loadState.resolved++;
    //   loadState.pending--;
    //   return {
    //     ...state,
    //     loadState,
    //     content4: response,
    //   };
    // }
    // case __ASYNC_LOAD_PORT_CONTENT4.rejected: {
    //   let { reason , detail } = payload;
    //   let loadState = {...state.loadState };
    //   loadState.rejected++;
    //   loadState.pending--;
    //   loadState.lastFailed = true;
    //   loadState.failedReason = reason;
    //   loadState.failedDetail = detail;
    //   return {
    //     ...state,
    //     loadState
    //   };
    // }
    //
    // case __ASYNC_LOAD_PORT_CONTENT5.pending: {
    //   let loadState = {...state.loadState };
    //   loadState.lastFailed = false;
    //   loadState.pending++;
    //   return {
    //     ...state,
    //     loadState
    //   };
    // }
    // case __ASYNC_LOAD_PORT_CONTENT5.resolved: {
    //   let { response , initState } = payload;
    //   initState = initState || {
    //     lock: false,
    //     show: false,
    //     choice: -1
    //   };
    //   let loadState = {...state.loadState };
    //   loadState.resolved++;
    //   loadState.pending--;
    //   return {
    //     ...state,
    //     loadState,
    //     content5: response,
    //   };
    // }
    // case __ASYNC_LOAD_PORT_CONTENT5.rejected: {
    //   let { reason , detail } = payload;
    //   let loadState = {...state.loadState };
    //   loadState.rejected++;
    //   loadState.pending--;
    //   loadState.lastFailed = true;
    //   loadState.failedReason = reason;
    //   loadState.failedDetail = detail;
    //   return {
    //     ...state,
    //     loadState
    //   };
    // }



    default:
      return state;
  }
}
