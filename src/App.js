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
          <div className="col border">
            1 of 3
          </div>
          <div className="col border">
            2 of 3
          </div>
          <div className="col border">
            3 of 3
          </div>
          <div className="col border">
            4 of 3
          </div>
          <div className="col border">
            5 of 3
          </div>
        </div>
      </div>
    );
  };
}

export default App;
