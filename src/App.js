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
      <div className="container">
        <div className="row">
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
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
    <div className="col border">
            Lorem Ipsum
    </div>
    );
  }
}

export default App;
