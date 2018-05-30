import {
  __SET_ZHONGDIAN_SUBMIT_STATE,
  __SET_QIANGHUA_SUBMIT_STATE,
  __SET_UNITTEST_SUBMIT_STATE
} from 'actionTypes';

let setZhongdianSubmitStateCounter = 0;
export const setSubmitZhongdian = ( state ) => ({
    type: __SET_ZHONGDIAN_SUBMIT_STATE,
    payload: {
      zhongdianSubmitState: state
    },
    id: setZhongdianSubmitStateCounter++
});

let setQianghuaSubmitStateCounter = 0;
export const setSubmitQianghua = ( state ) => ({
    type: __SET_QIANGHUA_SUBMIT_STATE,
    payload: {
      qianghuaSubmitState: state
    },
    id: setQianghuaSubmitStateCounter++
});

let setUnittestSubmitStateCounter = 0;
export const setSubmitUnitTest = ( state ) => ({
    type: __SET_UNITTEST_SUBMIT_STATE,
    payload: {
      unittestSubmitState: state
    },
    id: setUnittestSubmitStateCounter++
});
