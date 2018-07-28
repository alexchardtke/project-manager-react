import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Conditions extends Component {

  render() {
    const { conditions } = this.props;

    if (!conditions) return null;

    console.log('Current Observation: ', conditions);
    const location = conditions.display_location.full;
    const weather = conditions.weather;
    const icon = conditions.icon_url;
    const iconAlt = conditions.icon;
    const temperature = conditions.temp_f;
    const dewpoint = conditions.dewpoint_f;
    const feelsLike = conditions.feelslike_f;
    const wind = conditions.wind_mph;
    const windDirection = conditions.wind_dir;

    return (
      <div className="conditions-container">
        <h4 className="location">{location}</h4>
        <div className="conditions-content">
          <div className="tempAndWeather-container">
            <p className="temperature">{temperature}°F</p>
            <div className="weather-container">
              <img src={icon} alt={iconAlt} width="50" height="50"/>
              <p className="weather">{weather}</p>
            </div>
          </div>
          <div className="condition-details-container">
            <p><strong>Dew Point</strong>: {dewpoint}°F</p>
            <p><strong>Feels Like</strong>: {feelsLike}°F</p>
            <p><strong>Wind</strong>: {wind}mph {windDirection}</p>
          </div>
        </div>
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
