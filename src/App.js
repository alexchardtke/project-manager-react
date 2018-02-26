import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/projects';
import AddProject from './components/add-project';
import Todos from './components/todos';
import Forecast from './components/forecast';
import forecastData from './data';
import './App.css';

const API_KEY = 'a8kIAbbdAbZuAeGes7BGg7UDgTmTdty1';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      conditions: []
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ todos: data }, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  getLocation(location) {
    console.log(location);
    $.ajax({
      url: `http://dataservice.accuweather.com/locations/v1/cities/search?q=${location}&apikey=${API_KEY}`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ location: data[0] }, function() {
          // console.log(this.state.location.Key);
          const key = this.state.location.Key;
          this.getAccuweather(key);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getAccuweather(key) {
    // console.log(this.state);
    $.ajax({
      url: `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ conditions: data[0] }, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getForecast() {
    this.setState({forecast: forecastData});
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
    this.getForecast();
  }

  componentDidMount() {
    this.getTodos();
    this.getForecast();
  }

  handleAddProject(project) {
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects
    });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects: projects
    });
  }

  handleLocation(location) {
    // console.log('location = ', location);
    this.setState({locationName: location});
    this.getLocation(location);
  }

  render() {
    return (
      <div className="App">
        {/* <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr />
        <Todos todos={this.state.todos} /> */}
        <Forecast getLocation={this.handleLocation.bind(this)} forecast={this.state.forecast} conditions={this.state.conditions}/>
      </div>
    );
  }
}

export default App;
