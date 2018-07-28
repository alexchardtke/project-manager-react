import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchConditions, fetchForecast } from '../actions/index';
import { STATES_ABBREVIATIONS } from '../constants';
import Cookies from 'universal-cookie';

class Search extends Component {

  constructor(props) {
    super(props);
    this.cookies = new Cookies();

    this.state = {
      searchCity: '',
      searchState: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    const searchCity = this.cookies.get('search_city');
    const searchState = this.cookies.get('search_state');

    if (searchCity && searchState) {
      this.getWeatherFromCookies();
    }
  }

  setCookies() {
    const { searchCity, searchState } = this.state;
    if (!searchCity || !searchState) return null;
    this.cookies.set('search_city', searchCity, { path: '/' });
    this.cookies.set('search_state', searchState, { path: '/' });
    console.log('search_city', this.cookies.get('search_city'));
    console.log('search_state', this.cookies.get('search_state'));
    return this.cookies;
  }

  getCookies() {
    let hasCityCookie = false;
    let hasStateCookie = false;

    if (this.cookies.get('search_city')) {
      hasCityCookie = true;
    }

    if (this.cookies.get('search_state')) {
      hasStateCookie = true;
    }

    if (hasCityCookie && hasStateCookie) {
      console.log('has cookies')
      return true;
    }

    return false;
  }

  onInputChange(event) {
    this.setState({ searchCity: event.target.value });
  }

  onSelectChange(event) {
    this.setState({ searchState: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    const { searchCity, searchState } = this.state;

    // Fetch weather
    if (searchCity === '') return alert('Please enter a city.');
    if (searchState === '') return alert('Please select a state.');

    this.setCookies();

    this.props.fetchConditions(searchCity, searchState);
    this.props.fetchForecast(searchCity, searchState);

    this.setState({ searchCity: '', searchState: '' });
  }

  getWeatherFromCookies() {
    const searchCity = this.cookies.get('search_city');
    const searchState = this.cookies.get('search_state');

    console.log('Fetching weather from cookies...');
    this.props.fetchConditions(searchCity, searchState);
    this.props.fetchForecast(searchCity, searchState);
    this.setState({ searchCity: '', searchState: '' });
  }

  getWeather() {
    // check if search cookies are there
    const { searchCity, searchState } = this.state;

    console.log('Fetching weather from state...');
    this.props.fetchConditions(searchCity, searchState);
    this.props.fetchForecast(searchCity, searchState);

    this.setState({ searchCity: '', searchState: '' });
  }

  render() {
    return (
      <div className="search-container">
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline" onSubmit={this.onFormSubmit}>
            <input id="search-input" className="form-control mr-sm-2" ref="searchCity" onChange={this.onInputChange} value={this.state.searchCity} type="text" placeholder="City" aria-label="City Search" />
            <select id="state-select" className="form-control" ref="searchState" value={this.state.searchState} onChange={this.onSelectChange}>
              {STATES_ABBREVIATIONS.map((state, index) => {
                if (state.value === '') {
                  return <option key={index} className="disabled" value={state.value}>State</option>
                }
                return <option key={index} value={state.value}>{state.name}</option>
              })}
            </select>
            <button id="submit-button" className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
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
