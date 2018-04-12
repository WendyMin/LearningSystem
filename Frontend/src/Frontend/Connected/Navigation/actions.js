import __SELECT_OPTION from 'actionTypes';
//import jsonToUrlencoded from 'Algorithm/jsonToUrlencoded';

let selectOptionCounter = 0;
export const selectOption = ( option ) => ({
  type: __SELECT_OPTION,
  payload: {
    option ,
  },
  id: selectOptionCounter++
});
