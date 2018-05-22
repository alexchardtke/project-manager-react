import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastItem extends Component {

  render() {
    if (!this.props.forecast) {
      return null;
    }
    const data = this.props.forecast;

    console.log('Forecast item: ', data);
    const high = data.high.fahrenheit;
    const low = data.low.fahrenheit;
    const weekday = data.date.weekday;
    const month = data.date.monthname_short;
    const day = data.date.day;
    const icon = data.icon;
    const iconUrl = data.icon_url;
    const conditions = data.conditions;
    const precipChance = data['pop'];
    const windSpeed = data.maxwind.mph;
    const windDirection = data.maxwind.dir;
    const humidity = data.avehumidity;


    return (
      <tr>
        <th scope="row">
          {weekday}<br/>
          {month} {day}
        </th>
        <td>
          <img src={iconUrl} alt={icon} width="50" height="50"/><br/>
          {conditions}
        </td>
        <td>
          {high}°/{low}°
        </td>
        <td>
          {precipChance}%
        </td>
        <td>
          {windSpeed}mph {windDirection}
        </td>
        <td>
          {humidity}%
        </td>
      </tr>
    );
  }
}

ForecastItem.propTypes = {
  forecastItem: PropTypes.object,
}

export default ForecastItem;
