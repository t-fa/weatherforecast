import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="App">
        <h1>5 Day Weather Forecast</h1>
        <Weather />
      </div>
    );
  }
}

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2>Location Name</h2>
      <div className="container">
        <div className="row">
          <Day day="Monday" condition="sunny"/>
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
          </div>
          {this.props.currenttemp}
          {this.props.rain}
          {this.props.high}
          {this.props.low}
        </div>
      </div>
    );
  }
}

export default App;
