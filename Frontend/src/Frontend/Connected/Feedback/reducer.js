import {
  __ASYNC_SEND_FEEDBACK,
} from 'actionTypes';

export default ( state = {
    success: [],
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

    case __ASYNC_SEND_FEEDBACK.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }

    case __ASYNC_SEND_FEEDBACK.resolved: {
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
        success: response,
      };
    }

    case __ASYNC_SEND_FEEDBACK.rejected: {
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




    default:
      return state;
  }
}