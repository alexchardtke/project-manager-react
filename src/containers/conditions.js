import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Conditions extends Component {

  render() {
    if (!this.props.conditions) {
      return null;
    }
    const data = this.props.conditions.current_observation;

    console.log('Current Observation: ', data);
    const location = data.display_location.full;
    const weather = data.weather;
    const icon = data.icon_url;
    const iconAlt = data.icon;
    const temperature = data.temp_f;
    const dewpoint = data.dewpoint_f;
    const feelsLike = data.feelslike_f;
    const wind = data.wind_mph;
    const windDirection = data.wind_dir;

    return (
      <div className="conditions-container container container-fluid">
        <h3>Current Conditions</h3>
        <h4 className="location">{location}</h4>
        <p className="temperature">{temperature}°F</p>
        <img src={icon} alt={iconAlt} width="50" height="50"/>
        <p className="weather">{weather}</p>
        <p><strong>Dew Point</strong>: {dewpoint}°F</p>
        <p><strong>Feels Like</strong>: {feelsLike}°F</p>
        <p><strong>Wind</strong>: {wind}mph {windDirection}</p>
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

function mapStateToProps(state) {
  return { conditions: state.weather.conditions };
}

export default connect(mapStateToProps)(Conditions);
