import {
  __SET_PARSE_POSITION,
  __SET_PARSE_NUM,
  __SET_PARSE_DATA
} from 'actionTypes';

export default( state = {
  id: "",
  num: 0,
  data: "",
} , { type , payload , id }) => {
  switch( type ){
    case __SET_PARSE_POSITION:
      return{
        ...state,
        id: payload.id
      }

    case __SET_PARSE_NUM:
      return{
        ...state,
        num: state.num + 1
      }

    case __SET_PARSE_DATA:
      return{
        ...state,
        data: payload.data
      }


    default:
      return state;

  }

}
