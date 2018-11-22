import {
  __SET_PARSE_POSITION,
  __SET_PARSE_NUM,
  __SET_PARSE_DATA
} from 'actionTypes';

let setPositionCounter = 0;
export const setPosition = ( id ) => ({
  type: __SET_PARSE_POSITION,
  payload: {
    id
  },
  id: setPositionCounter++
});

let setNumCounter = 0;
export const setNum = ( ) => ({
  type: __SET_PARSE_NUM,
  payload: {
    
  },
  id: setNumCounter++
});

let setDataCounter = 0;
export const setData = ( data ) => ({
  type: __SET_PARSE_DATA,
  payload: {
    data
  },
  id: setDataCounter++
});
