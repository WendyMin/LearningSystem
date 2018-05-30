import {
  __RECORD_USER_INPUT_TEXT,
  __SAVE_OR_SUMBIT_TEXT,
  __LOAD_LAST_SAVE_TEXT
} from 'actionTypes';

export default ( state = {
  userInputText: [],
  lastSaveText: [],
  allSubmitTextName: [],
  allSubmitText: [],
  whichTextToView: "",

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
    /* 记录用户输入到框里的文本 */
    case __RECORD_USER_INPUT_TEXT: {
      let { text } = payload;
      return {
        ...state,
        userInputText: text
      }
    }
    /* 暂存或提交文本 */
    case __SAVE_OR_SUMBIT_TEXT.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __SAVE_OR_SUMBIT_TEXT.resolved: {
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
        //content: response,
        //name2: response.section_name2,
        //name3: response.section_name3,
      };
    }
    case __SAVE_OR_SUMBIT_TEXT.rejected: {
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

    /* 加载最新一次保存的文本 */
    case __LOAD_LAST_SAVE_TEXT.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __LOAD_LAST_SAVE_TEXT.resolved: {
      let { response , initState } = payload;
      initState = initState;
      let loadState = {...state.loadState };
      loadState.resolved++;
      loadState.pending--;
      return {
        ...state,
        loadState,
        lastSaveText: response
      };
    }
    case __LOAD_LAST_SAVE_TEXT.rejected: {
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
