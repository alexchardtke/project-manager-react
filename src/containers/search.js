import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchConditions, fetchForecast } from '../actions/index';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchCity: '',
      searchState: '',
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchCity: event.target.value });
  }

  onSelectChange(event) {
    this.setState({ searchState: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    const { searchCity, searchState } = this.state;

    // Fetch weather
    if (searchCity === '') {
      return alert('Please enter a city.');
    }

    if (searchState === '') {
      return alert('Please select a state.');
    }
    this.props.fetchConditions(searchCity, searchState);
    this.props.fetchForecast(searchCity, searchState);
    this.setState({ searchCity: '', searchState: '' });
  }

  render() {
    return (
      <div className="search-container container container-fluid">
        <h3 className="forecast-header">Search</h3>
        <form className="form-inline" onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label forhtml="search-input">City:</label>
            <input
              id="search-input"
              className="form-control"
              value={this.state.searchCity}
              onChange={this.onInputChange}
              type="text"
              ref="searchCity"/>
          </div>
          <div className="form-group">
            <label forhtml="state-select">State:</label>
            <select id="state-select" className="form-control" ref="searchState" value={this.state.searchState} onChange={this.onSelectChange}>
              <option value=""></option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Deleware</option>
              <option value="DC">District of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <button id="submit-button" type="submit" className="btn btn-secondary">Submit</button>
        </form>
        <hr />
      </div>
    );
  }
}

Search.propTypes = {
  onFormSubmit: PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchConditions, fetchForecast }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
