import {
  __SET_SUBJECT_FUNCTION
} from 'actionTypes';

let setSubjectFunctionSelectCounter = 0;
export const setSubjectFunctionSelect = ( choice ) => ({
  type: __SET_SUBJECT_FUNCTION,
  payload: {
    choice
  },
  id: setSubjectFunctionSelectCounter++
});
