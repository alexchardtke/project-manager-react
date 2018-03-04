import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Conditions extends Component {

  render() {
    console.log('Conditions props = ', this.props);
    const weather = this.props.conditions.weather;
    const temperature = this.props.conditions.temp_f;
    const dewpoint = this.props.conditions.dewpoint_f;
    const feelsLike = this.props.conditions.feelslike_f;
    const location = Object(this.props.conditions.display_location);
    console.log(location.full);

    return (
      <div className="Conditions container container-fluid">
        <h3>Current Conditions</h3>
        <h4 className="lead">{location.full}</h4>
        <p className="temperature">{temperature}°F</p>
        <p className="weather">{weather}</p>
        <p><strong>Dew Point</strong>: {dewpoint}°F</p>
        <p><strong>Feels Like</strong>: {feelsLike}°F</p>
        <hr />
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
