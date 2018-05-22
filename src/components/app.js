import React, { Component } from 'react';
import Search from '../containers/search';
import Conditions from '../containers/conditions';
import Forecast from '../containers/forecast';

export default class App extends Component {

  render() {
    return (
      <div>
        <Search />
        <Conditions />
        <Forecast />
      </div>
    );
  }
}
