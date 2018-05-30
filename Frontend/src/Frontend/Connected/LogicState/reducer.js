import {
  __SET_ZHONGDIAN_SUBMIT_STATE,
  __SET_QIANGHUA_SUBMIT_STATE,
  __SET_UNITTEST_SUBMIT_STATE
} from 'actionTypes';

export default ( state = {
  submitZhongdian: false,
  submitQianghua: false,
  submitUnitTest: false
} , { type , payload , id } ) => {
  const { content } = state;
  //console.log(content)
  switch( type ){
    case __SET_ZHONGDIAN_SUBMIT_STATE: {
      let {state} = payload.zhongdianSubmitState;
      return {
        ...state,
        submitZhongdian: state
      };
    }

    case __SET_QIANGHUA_SUBMIT_STATE: {
      let {state} = payload.qianghuaSubmitState;
      return {
        ...state,
        submitQianghua: state
      };
    }

    case __SET_UNITTEST_SUBMIT_STATE: {
      let {state} = payload.unittestSubmitState;
      return {
        ...state,
        submitUnitTest: state
      };
    }

    default:
      return state;
  }
}
