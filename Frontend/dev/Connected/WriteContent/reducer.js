import {
  __ASYNC_LOAD_WRITE_CONTENTS
} from 'actionTypes';

export default ( state = {
    //content: {},
    title: [],
    title_article: [],
    name: [],
    example_article: [],
    example_comment: [],

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
        //content: response.title_article
        //content: {
          title: response.title,
          title_article: response.title_article,
          name: response.name,
          example_article: response.content,
          example_comment: response.comment
        //}
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
