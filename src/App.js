import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import NewsDashboard from './components/NewsDashboard/NewsDashboard';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={NewsDashboard} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
