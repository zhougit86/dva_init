/**
 * Created by Administrator on 2017-06-15.
 */

import {Router,Route} from 'dva/router';

export default mainRoute = ({history}) =>
  <Router history={history}>
    <Route path="/" component={HomePage}/>
  </Router>

