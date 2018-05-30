import {
  __LOAD_ALL_SUBMIT_TEXT,
  __RECORD_USER_CHOSED_WHICH_TEXT_TO_VIEW,
  __RESET_USER_CHOSED_WHICH_TEXT_TO_VIEW
} from 'actionTypes';

export default ( state = {
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
    /* 加载所有提交过的文本 */
    case __LOAD_ALL_SUBMIT_TEXT.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __LOAD_ALL_SUBMIT_TEXT.resolved: {
      let { response , initState } = payload;
      initState = initState;
      let loadState = {...state.loadState };
      loadState.resolved++;
      loadState.pending--;
      return {
        ...state,
        loadState,
        allSubmitTextName: response.index,
        allSubmitText: response.content
      };
    }
    case __LOAD_ALL_SUBMIT_TEXT.rejected: {
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

    /* 记录用户想要查看第几次提交的文本 */
    case __RECORD_USER_CHOSED_WHICH_TEXT_TO_VIEW: {
      let { time } = payload;
      return {
        ...state,
        whichTextToView: time
      }
    }

    /* 重置用户想要查看第几次提交的文本，设置为空，初始状态 */
    case __RESET_USER_CHOSED_WHICH_TEXT_TO_VIEW: {
      return {
        ...state,
        whichTextToView: ""
      }
    }


    default:
      return state;
  }
}
