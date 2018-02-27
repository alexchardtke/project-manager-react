import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Conditions extends Component {

  render() {
    console.log('Conditions props = ', this.props);
    const weather = this.props.conditions.weather;
    const temperature = this.props.conditions.temperature_string;
    const dewpoint = this.props.conditions.dewpoint_string;
    const feelsLike = this.props.conditions.feelslike_string;

    return (
      <div className="Conditions">
        <h3>Current Conditions</h3>
        <p><strong>Current</strong>: {weather}</p>
        <p><strong>Temperature</strong>: {temperature}</p>
        <p><strong>Dew Point</strong>: {dewpoint}</p>
        <p><strong>Feels Like</strong>: {feelsLike}</p>
      </div>
    );
  }
}

Conditions.propTypes = {
  current: PropTypes.string,
  temperature: PropTypes.string,
  dewpoint: PropTypes.string,
  feelsLike: PropTypes.string
}

export default Conditions;
