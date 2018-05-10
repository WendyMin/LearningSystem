import {
  __SET_LEARNING_TYPE,
  __ASYNC_LOAD_PORT_CONTENT
} from 'actionTypes';

export default( state = {
  learningType: "",
  loadState: {
    pending: 0,
    resolved: 0,
    rejected: 0,
    lastFailed: false,
    failedReason: "network", // "json" , "server"
    failedDetail: null
  },
} , { type , payload , id }) => {
  switch( type ){
    case __SET_LEARNING_TYPE:
      return{
        ...state,
        learningType: payload.learningType
      }

      case __ASYNC_LOAD_PORT_CONTENT.pending: {
        let loadState = {...state.loadState };
        loadState.lastFailed = false;
        loadState.pending++;
        return {
          ...state,
          loadState
        };
      }
      case __ASYNC_LOAD_PORT_CONTENT.resolved: {
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
          content: response,
          name2: response.section_name2,
          name3: response.section_name3,
          //content: response
          //content: {
            //title: response.title,
            //title_article: response.title_article,
            //name: response.name,
            //example_article: response.content
          //}
        };
      }
      case __ASYNC_LOAD_PORT_CONTENT.rejected: {
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
