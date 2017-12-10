import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import logo from './logo.svg';
import './App.css';

import GridBoard from './components/grid'
import SpaceView from './components/canvas'
import OutsideAlerter from './components/outsideClick'

export const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div className="game-container">
            <GridBoard />
            <SpaceView />
            <OutsideAlerter />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
