import {
  __ASYNC_LOAD_WRITE_KNOWLEDGE
} from 'actionTypes';

export default ( state = {
    content: [],  // 知识点的所有内容
    name2: [],  // 二级标题
    name3: [],  // 三级标题

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
    case __ASYNC_LOAD_WRITE_KNOWLEDGE.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_WRITE_KNOWLEDGE.resolved: {
      let { response , initState } = payload;
      initState = initState;
      let loadState = {...state.loadState };
      loadState.resolved++;
      loadState.pending--;
      return {
        ...state,
        loadState,
        content: response.all_content,
        name2: response.section_name2,
        name3: response.section_name3
      };
    }
    case __ASYNC_LOAD_WRITE_KNOWLEDGE.rejected: {
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
