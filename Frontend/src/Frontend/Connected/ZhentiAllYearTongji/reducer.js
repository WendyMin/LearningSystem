import {
  __ASYNC_LOAD_ALL_ZHENTI_TONGJI,
  __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_NAME,
  __SET_KNOWLEDGE_NAME,
  __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_CONTENT,
  __ASYNC_LOAD_RECOMMAND_ARTICLE,
  __SET_ARTICLE_NAME
} from 'actionTypes';

export default ( state = {
    tongji: [],
    tuijianZhishidian: [],
    chosed_zhishidianName: "",
    tuijianZhishidianContent_fenxi: [],
    tuijianZhishidianContent_liti: [],
    TuijianArticle: [],
    chosed_articleName: "",

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
    /* 加载统计数据 */
    case __ASYNC_LOAD_ALL_ZHENTI_TONGJI.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_ALL_ZHENTI_TONGJI.resolved: {
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
    case __ASYNC_LOAD_ALL_ZHENTI_TONGJI.rejected: {
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

    /* 加载推荐的知识点名称 */
    case __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_NAME.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_NAME.resolved: {
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
        tuijianZhishidian: response.xuanxiang,
      };
    }
    case __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_NAME.rejected: {
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

    /* 设置用户所选择的知识点名称 */
    case __SET_KNOWLEDGE_NAME:
      return{
        ...state,
        chosed_zhishidianName: payload.choice
      }
    /* 加载知识点的具体内容 */
    case __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_CONTENT.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_CONTENT.resolved: {
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
        tuijianZhishidianContent_fenxi: response.fenxi,
        tuijianZhishidianContent_liti: response.liti
      };
    }
    case __ASYNC_LOAD_RECOMMAND_KNOWLEDGE_CONTENT.rejected: {
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
    /* 加载推荐文章 */
    case __ASYNC_LOAD_RECOMMAND_ARTICLE.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_RECOMMAND_ARTICLE.resolved: {
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
        TuijianArticle: response,
      };
    }
    case __ASYNC_LOAD_RECOMMAND_ARTICLE.rejected: {
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

    /* 设置用户所选择的文章名称 */
    case __SET_ARTICLE_NAME:
      return{
        ...state,
        chosed_articleName: payload.choice
      }


    default:
      return state;
  }
}
