import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastItem extends Component {

  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="row">
          <li className="ForecastItem col-xs-4">
            <strong>{this.props.forecast.date}</strong>
          </li>
          <li className="ForecastItem col-xs-4">
            Hi: {this.props.forecast.high}
          </li>
          <li className="ForecastItem col-xs-4">
            Low: {this.props.forecast.low}
          </li>
        </div>
        <hr />
      </div>
    );
  }
}

ForecastItem.propTypes = {
  forecastItem: PropTypes.object,
}

export default ForecastItem;
