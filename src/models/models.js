/**
 * Created by Administrator on 2017-06-15.
 */

import {delay} from 'redux-saga'

let countModel = {
  namespace: 'count',
  state: {
    record: 0,
    current: 0,
  },
  reducers: {
    add(state,action) {
      const newCurrent = state.current + action.value;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state,action) {
      return {...state, current: state.current - action.value};
    },
  },

  effects: {
    *add(action, {call, put}) {
      yield call(delay, 2000);
      yield put({type: 'minus',value:action.value});
    },
  },
};

// function delay(timeout) {
//   return new Promise(resolve => {
//     setTimeout(resolve, timeout);
//   });
// }

export  {countModel}
