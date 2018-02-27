import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      location: {}
    }
  }

  handleSubmit(event) {
    // console.log(this.refs.location.value);
    if (this.refs.location.value === '') {
      alert('Location is required.');
    } else {
      this.setState({
        location: this.refs.location.value
      }, function() {
        console.log(this.state);
        this.props.getLocation(this.state.location);
      });
    }
    event.preventDefault();
  }

  render() {
    // console.log('Search props = ', this.props);

    return (
      <div className="Search">
        <h3 className="forecast-header">Forecast</h3>
        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label forhtml="search-input">Enter location:</label>
            <input id="search-input" className="form-control" type="text" ref="location"/>
          </div>
          <input id="submit-button" type="submit" className="btn btn-default" value="Submit" />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  handleSubmit: PropTypes.func,
}

export default Search;
