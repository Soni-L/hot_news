import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import HomePage from './components/HomePage/HomePage';
import NewsDashboard from './components/NewsDashboard/NewsDashboard';
import NewArticle from './components/NewArticle/NewArticle';
import EditArticle from './components/EditArticle/EditArticle';

import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/news" component={NewsDashboard} />
              <Route exact path="/news/create" component={NewArticle} />
              <Route exact path="/news/:id" component={EditArticle} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
