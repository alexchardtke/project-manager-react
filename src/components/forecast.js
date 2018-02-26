import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './forecast-item';

class Forecast extends Component {

  constructor() {
    super();
    this.state = {
      location: {}
    }
  }

  handleSubmit(event) {
    // console.log(this.refs.location.value);
    if (this.refs.location.value === '') {
      alert('Location is required.');
    } else {
      this.setState({
        location: this.refs.location.value
      }, function() {
        console.log(this.state);
        this.props.getLocation(this.state.location);
      });
    }
    event.preventDefault();
  }

  render() {
    // console.log('Forecast props = ', this.props);
    let forecastItems;

    if (this.props.forecast) {
      forecastItems = this.props.forecast.forecast.map(forecast => {
        return (
          <ForecastItem key={forecast.date} forecast={forecast}/>
        );
      });
    }

    return (
      <div className="Forecast">
        <h3 className="forecast-header">Forecast</h3>
        <form className="search-container" onSubmit={this.handleSubmit.bind(this)}>
          <label>Enter location:</label>
          <input id="search-input" type="text" ref="location"/>
          <input type="submit" value="Submit" />
        </form>
        <br />
        <div className="current-conditions-container">
          <h3>Current Conditions</h3>
          <p>{this.props.conditions.WeatherText}</p>
          <p></p>
        </div>
        <div className="forecast-container">
          <h3>90-Day Forecast</h3>
          {forecastItems}
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  forecast: PropTypes.object,
}

export default Forecast;
