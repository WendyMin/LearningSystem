import {
  __ASYNC_LOAD_LOGIC_TEST_RESULT,
  __ASYNC_LOAD_LOGIC_TEST_MEAN_RESULT
} from 'actionTypes';

export default ( state = {
  flag: "",  // 是否做过 , 0 未做过 1 做过
  count: "", // 做过几次
  this_rightRate: [],  // 本次正确率
  mean_rightRate: [],  // 平均正确率
  xingshi: [],  // 形式路线
  lunzheng: [],  // 论证路线

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
    case __ASYNC_LOAD_LOGIC_TEST_RESULT.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_LOGIC_TEST_RESULT.resolved: {
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
        flag: response.flag,
        this_rightRate: response.rate,
      };
    }
    case __ASYNC_LOAD_LOGIC_TEST_RESULT.rejected: {
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

    /* 平均正确率 */

    case __ASYNC_LOAD_LOGIC_TEST_MEAN_RESULT.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_LOGIC_TEST_MEAN_RESULT.resolved: {
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
        count: response.count,
        mean_rightRate: response.rate,
        lunzheng: response.lunzheng,
        xingshi: response.xingshi
      };
    }
    case __ASYNC_LOAD_LOGIC_TEST_MEAN_RESULT.rejected: {
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
