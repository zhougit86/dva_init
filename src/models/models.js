/**
 * Created by Administrator on 2017-06-15.
 */

// import React from 'react';

var countModel = {
  namespace: 'count',
  state: {
    record: 0,
    current: 0,
  },
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return {...state, current: state.current - 1};
    },
  },

  effects: {
    *add(action, {call, put}) {
      yield call(delay, 1000);
      yield put({type: 'minus'});
    },
  },
};

function delay(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default countModel
