import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastItem extends Component {

  render() {
    // console.log(this.props);
    return (
      <li className="ForecastItem">
        <strong>{this.props.forecast.date}</strong>: Hi: {this.props.forecast.high}, Low: {this.props.forecast.low}
      </li>
    );
  }
}

ForecastItem.propTypes = {
  forecastItem: PropTypes.object,
}

export default ForecastItem;
