import {
  __ASYNC_LOAD_BUTTON_CONTENTS,
  __SET_BUTTON_CHOICE
} from 'actionTypes';

export default ( state = {
    content: [],
    choice: "",
    showContent: false,
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

  case __SET_BUTTON_CHOICE:
    let {choice} = payload;
    return {
      ...state,
      content: content,
      choice: choice,
      //choice: Object.entries(content).map(([key,value]) =>
      //  value==choice? choice:null
      //),
      showContent: true
    };

    case __ASYNC_LOAD_BUTTON_CONTENTS.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_BUTTON_CONTENTS.resolved: {
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
        content: response
      };
    }
    case __ASYNC_LOAD_BUTTON_CONTENTS.rejected: {
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
