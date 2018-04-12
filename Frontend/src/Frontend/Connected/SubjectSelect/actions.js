import {
  __SET_SUBJECT
} from 'actionTypes';

let setSubjectCounter = 0;
export const setSubject = ( choice ) => ({
  type: __SET_SUBJECT,
  payload: {
    choice
  },
  id: setSubjectCounter++
});
