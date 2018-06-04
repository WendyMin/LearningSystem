import {
  __SET_SUBJECT_FUNCTION
} from 'actionTypes';

export default( state = {
  choice: 0,
} , { type , payload , id }) => {
  switch( type ){
    case __SET_SUBJECT_FUNCTION:
      return{
        ...state,
        choice: payload.choice
      }


    default:
      return state;

  }

}
