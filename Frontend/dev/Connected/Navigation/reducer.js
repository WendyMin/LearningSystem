import {
  __SELECT_OPTION,
} from  'actionTypes';

export default ( state = {
  option: "",
} , { type , payload , id }) => {
  switch( type ){
    case __SELECT_OPTION:
    let {option} = payload;
    return{
      ...state,
      option: payload
    }


    default:
      return state;
  }



}
