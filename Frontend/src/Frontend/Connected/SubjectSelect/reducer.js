import {
  __SET_SUBJECT
} from 'actionTypes';

export default( state = {
  choice: 0,
} , { type , payload , id }) => {
  switch( type ){
    case __SET_SUBJECT:
      return{
        ...state,
        choice: payload.choice
      }


    default:
      return state;

  }

}
