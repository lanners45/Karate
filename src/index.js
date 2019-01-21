import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore'; // eslint-disable-line import/default
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadMembers } from './actions/memberActions';
import { loadClasses } from './actions/classActions';
import { loadBadges } from './actions/badgeActions';
import { loadStyles } from './actions/StylesActions';
import './Styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadMembers());
store.dispatch(loadClasses());
store.dispatch(loadBadges());
store.dispatch(loadStyles());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
