import {
  __ASYNC_LOAD_ARTICLE_ID,
  __ASYNC_LOAD_SHENGCI,
  __ASYNC_LOAD_NANJU,
  // __ASYNC_LOAD_PORT_CONTENT4,
  // __ASYNC_LOAD_PORT_CONTENT5,
} from 'actionTypes';

export default ( state = {
    articleIds: [],
    shengci: [],
    nanju: [],
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
    case __ASYNC_LOAD_ARTICLE_ID.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_ARTICLE_ID.resolved: {
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
        articleIds: response,
        name2: response.section_name2,
        name3: response.section_name3,
      };
    }
    case __ASYNC_LOAD_ARTICLE_ID.rejected: {
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



    case __ASYNC_LOAD_SHENGCI.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_SHENGCI.resolved: {
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
        shengci: response,
      };
    }
    case __ASYNC_LOAD_SHENGCI.rejected: {
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




    case __ASYNC_LOAD_NANJU.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_NANJU.resolved: {
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
        nanju: response,
      };
    }
    case __ASYNC_LOAD_NANJU.rejected: {
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
