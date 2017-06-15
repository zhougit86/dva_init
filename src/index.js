import dva from 'dva';
import { Route, Router} from 'dva/router';
import React from 'react';
import countModel from './models/models.js'
import HomePage from './components/Count/counts.js'
import './index.html';

// 1. Initialize
const app = dva();

// 2. Model
// Remove the comment and define your model.
//app.model({});
app.model(countModel);

// 3. Router
// const HomePage = () => <div>Hello Dva.</div>;

app.router(({history}) =>
  <Router history={history}>
    <Route path="/" component={HomePage}/>
  </Router>
);

// 4. Start
app.start('#root');



