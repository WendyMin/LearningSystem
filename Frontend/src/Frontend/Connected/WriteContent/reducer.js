import {
  __ASYNC_LOAD_WRITE_CONTENTS
} from 'actionTypes';

export default ( state = {
  title: [], // 写作部分，论证或论说的题目模块 ，题目
  title_article: [], // 错误文章，用来做多选，找出文章的错误之处
  name: [], // 参考范文的题目
  example_article: [],  // 参考范文

  loadState: {
    pending: 0,
    resolved: 0,
    rejected: 0,
    lastFailed: false,
    failedReason: "network", // "json" , "server"
    failedDetail: null
  },
} , { type , payload , id } ) => {
  //const { content } = state;

  switch( type ){
    case __ASYNC_LOAD_WRITE_CONTENTS.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_WRITE_CONTENTS.resolved: {
      let { response , initState } = payload;
      initState = initState

      let loadState = {...state.loadState };
      loadState.resolved++;
      loadState.pending--;
      return {
        ...state,
        loadState,
        title: response.title,
        title_article: response.title_article,
        name: response.name,
        example_article: response.content
      };
    }
    case __ASYNC_LOAD_WRITE_CONTENTS.rejected: {
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
