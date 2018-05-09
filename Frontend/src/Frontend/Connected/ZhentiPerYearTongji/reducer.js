import {
  __ASYNC_LOAD_ZHENTI_TONGJI
} from 'actionTypes';

export default ( state = {
    tongji: [],

    loadState: {
      pending: 0,
      resolved: 0,
      rejected: 0,
      lastFailed: false,
      failedReason: "network", // "json" , "server"
      failedDetail: null
    },
} , { type , payload , id } ) => {
  const { tongji } = state;
  //console.log(content)
  switch( type ){
    case __ASYNC_LOAD_ZHENTI_TONGJI.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_ZHENTI_TONGJI.resolved: {
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
        tongji: response,
      };
    }
    case __ASYNC_LOAD_ZHENTI_TONGJI.rejected: {
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
