import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastItem extends Component {

  render() {
    // console.log(this.props);
    let actualLow, actualHigh = null;

    if (!this.props.forecast.actualLow) {
      actualLow = '-';
    } else {
      actualLow = this.props.forecast.actualLow;
    }
    
    if (!this.props.forecast.actualHigh) {
      actualHigh = '-';
    } else {
      actualHigh = this.props.forecast.actualHigh;
    }
    return (
      <div>
        <div className="row">
          <li className="ForecastItem col-xs-4">
            <strong>{this.props.forecast.date}</strong>
          </li>
          <li className="ForecastItem col-xs-4">
            Forecast Hi: {this.props.forecast.high} <br/>
            Actual Hi: {actualHigh}
          </li>
          <li className="ForecastItem col-xs-4">
            Forecast Low: {this.props.forecast.low} <br/>
            Actual Low: {actualLow}
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
