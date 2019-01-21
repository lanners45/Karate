import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ActiveMembersPage from './components/Members/ActiveMembersPage';
import ManageMemberPage from './components/Members/ManageMemberPage'; //eslint-disable-line import/no-named-as-default
import ClassPage from'./components/Classes/ClassPage'; //eslint-disable-line import/no-named-as-default
import StylePage from'./components/Styles/StylePage'; //eslint-disable-line import/no-named-as-default
import BadgePage from'./components/Badges/BadgePage'; //eslint-disable-line import/no-named-as-default
import ManageSummaryPage from './components/Members/ManageSummaryPage'; //eslint-disable-line import/no-named-as-default
import ManageClassPage from'./components/Classes/ManageClassPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="activeMembers" component={ActiveMembersPage} />
    <Route path="member" component={ManageMemberPage} />
    <Route path="member/:id" component={ManageMemberPage} />
    <Route path="classPage" component={ClassPage} />
    <Route path="styles" component={StylePage} />
    <Route path="badges" component={BadgePage} />
    <Route path="summary/:id" component={ManageSummaryPage} />
    <Route path="ManageClassPage" component={ManageClassPage} />
        
  </Route>
);
