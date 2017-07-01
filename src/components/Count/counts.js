/**
 * Created by Administrator on 2017-06-15.
 */

import styles from './index.less';
import React from 'react';
import {connect} from 'dva';

const CountApp = ({count, dispatch}) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => {
          dispatch({type: 'count/add',value:1});
        }}>+
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {count: state.count};
}
const HomePage = connect(
  mapStateToProps
)(CountApp);

export default HomePage
