import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecastItem from './forecast-item';

class Forecast extends Component {

  render() {
    if (!this.props.forecast) {
      return null;
    }

    const data = this.props.forecast.forecast.simpleforecast.forecastday;
    console.log('Forecast: ', data);

    const forecastItems = data.map(day => {
      // console.log(day);
        return (
          <ForecastItem key={day.date.day} forecast={day}/>
        );
    });

    return (
      <div className="forecast-container container container-fluid">
        <h3>10-Day Forecast</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">DAY</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">HIGH/LOW</th>
              <th scope="col">PRECIP</th>
              <th scope="col">WIND</th>
              <th scope="col">HUMIDITY</th>
            </tr>
          </thead>
          <tbody>
            {forecastItems}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { forecast: state.weather.forecast };
}

export default connect(mapStateToProps)(Forecast);
