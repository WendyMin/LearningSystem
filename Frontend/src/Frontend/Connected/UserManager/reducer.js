import {
  LOGIN,
  GET_USER_INFO,
  __SET_USER
} from 'actionTypes';

export default ( state = {
    logined: false,
    logining: false,
    rememberPassword: false,
    name: '',
    id: '',
    token: '',
    uid: 0,
    password: '',
    failed: false,
    networkError: false,
    serverError: false,
    validName: false,
    newTo: [],
} , { type , payload , id } ) => {
  const { content } = state;
  switch( type ){
    case __SET_USER:{
      let {username,logined} = payload;
      console.log(username,logined)
      return{
        ...state,
        name: username,
        logined: logined
      }
    }

    case GET_USER_INFO.pending:
      return {
        ...state,
        logining: true,
        name: payload.username,
        password: payload.password,
        networkError: false,
        serverError: false,
        failed: false,
        validName: false
      };

    case GET_USER_INFO.resolved:
      let { username , userid } = payload;
      console.log(username,userid)
      // switch( payload.response.state ){
      // switch( payload.response ){
        // case "success":

          return {
            ...state,
            name: userid ,
            id : username ,
            // name: username ,
            // userid : userid ,
            logined: userid == 0 && username=="" ? false : true
          };
          // console.log(username)

    case GET_USER_INFO.rejected:
      if( payload.reason === "network" ){
        return {
          ...state,
          networkError: true,
          logining: false
        };
      }
      else {
        return {
          ...state,
          logining: false,
          serverError: true
        }
      }

    case LOGIN.pending:
      return {
        ...state,
        logining: true,
        name: payload.username,
        password: payload.password,
        networkError: false,
        serverError: false,
        failed: false,
        validName: false
      };

    case LOGIN.resolved:
      // switch( payload.response.state ){
      switch( payload.response ){
        case "success":
          return {
            ...state,
            logined: true,
            logining: false,
            validName: true,
            newTo: payload.response.newto
            //newTo: payload.response.newTo
          };
        case "none":
          return {
            ...state,
            logining: false,
            validName: false,
            failed: true
          };
        case "wrong":
          return {
            ...state,
            logining: false,
            validName: true,
            failed: true
          };
        default:
          return {
            ...state,
            networkError: true
          };
      }
    case LOGIN.rejected:
      if( payload.reason === "network" ){
        return {
          ...state,
          networkError: true,
          logining: false
        };
      }
      else {
        return {
          ...state,
          logining: false,
          serverError: true
        }
      }
    default:
      return state;
  }
}
