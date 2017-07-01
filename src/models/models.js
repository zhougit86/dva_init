/**
 * Created by Administrator on 2017-06-15.
 */

import {delay} from 'redux-saga'
import key from 'keymaster'

let countModel = {
  namespace: 'count',
  state: {
    record: 0,
    current: 0,
  },
  reducers: {
    add(state, action) {
      const newCurrent = state.current + action.value;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state, action) {
      return {...state, current: state.current - action.value};
    },
  },
  effects: {
    *add(action, {call, put}) {
      yield call(delay, 1000);
      yield put({type: 'minus', value: action.value});
    },
  },
  subscriptions: {
    keyboardWatcher({dispatch}) {
      key('⌘+up, ctrl+up', () => {
        dispatch({type: 'add',value: 2})
      });
    },
  }
};

// function delay(timeout) {
//   return new Promise(resolve => {
//     setTimeout(resolve, timeout);
//   });
// }

export  {countModel}
