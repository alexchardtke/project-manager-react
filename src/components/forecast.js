import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './forecast-item';

class Forecast extends Component {

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
        <h3>90-Day Forecast</h3>
        {forecastItems}
      </div>
    );
  }
}

Forecast.propTypes = {
  forecast: PropTypes.object,
}

export default Forecast;
