import React, { Component } from 'react';
import $ from 'jquery';
import Search from './components/search';
import Conditions from './components/conditions';
import Forecast from './components/forecast';
import forecastData from './data';
import scrapeForecast from './ninety-day';
import './App.css';

const API_KEY = 'b27c7b2b62069587';

class App extends Component {
  constructor() {
    super();
    this.state = {
      conditions: []
    }
  }

  getLocation(location) {
    console.log(location);
    if(typeof location !== 'string') throw new Error('Location is not a string.');
    scrapeForecast();

    location = location.trim();

    var formattedLocation = {};

    var comma = location.indexOf(',');

    formattedLocation.city = location.slice(0, comma);
    formattedLocation.city = formattedLocation.city.replace(' ', '_');

    formattedLocation.state = location.substr(comma + 2);
    this.getConditions(formattedLocation);
  }

  getConditions(location) {
    // console.log(this.state);
    $.ajax({
      url: `http://api.wunderground.com/api/${API_KEY}/conditions/q/${location.state}/${location.city}.json`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ conditions: data.current_observation }, function() {
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getForecast() {
    this.setState({forecast: forecastData});
  }

  handleLocation(location) {
    // console.log('location = ', location);
    this.setState({locationName: location});
    this.getLocation(location);
  }

  componentWillMount() {
    this.handleLocation('Minneapolis, MN');
    this.getForecast();
  }

  componentDidMount() {
    // this.getForecast();
  }

  render() {
    return (
      <div className="App">
        <Search getLocation={this.handleLocation.bind(this)} />
        <Conditions conditions={this.state.conditions} />
        <Forecast forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
