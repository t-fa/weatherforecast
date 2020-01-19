import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    weather: []
  }
  render () {
    return (
      <div className="container">
        <h1>5 Day Weather Forecast</h1>
        <Weather />
      </div>
    );
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <form>
        <div className="form-group">
          <label for="zipcode">Zip Code:</label>
          <input type="text" className="form-control w-50 p-3" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  };
}

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Input />
        <h2>Location Name</h2>
        <div className="row">
          <Day 
          day="Monday" 
          condition="sunny"
          currenttemp="70"
          rain="22%"
          high="80"
          low="34"
          />
          <Day day="Tuesday" condition="rainy"/>
          <Day day="Wednesday" condition="cloudy"/>
          <Day day="Thursday" condition="thunderstorm"/>
          <Day day="Friday" condition="snow"/>
        </div>
      </div>
    );
  };
}

class Day extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="col">
        <div className="card">
          {this.props.day}
          <div className="card-subtitle">
            {this.props.condition}
            {this.props.currenttemp}
            {this.props.rain}
            {this.props.high}
            {this.props.low}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
