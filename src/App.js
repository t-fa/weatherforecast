import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zip: ''
    }
    this.getZip = this.getZip.bind(this);
  }

  getZip(event) {
    this.setState({
      zip: event.target.value
    });
  }

  render () {
    return (
      <div className="container">
        <h1>5 Day Weather Forecast</h1>
        <form>
          <div className="form-group">
            <label for="zipcode">Zip Code:</label>
            <input type="text" className="form-control w-50 p-3" value={this.state.zip} onChange={this.getZip}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
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
      <div>
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
          <Day 
          day="Tuesday" 
          condition="rainy"
          currenttemp="70"
          rain="22%"
          high="80"
          low="34"
          />
          <Day 
          day="Wednesday" 
          condition="cloudy"
          currenttemp="70"
          rain="22%"
          high="80"
          low="34"
          />
          <Day 
          day="Thursday" 
          condition="thunderstorm"
          currenttemp="70"
          rain="22%"
          high="80"
          low="34"
          />
          <Day 
          day="Friday" 
          condition="snow"
          currenttemp="70"
          rain="22%"
          high="80"
          low="34"
          />
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
          <div className="card-body">
            <h5 className="card-text">{this.props.day}</h5>
            <div className="card-subtitle">
              <p className="card-text">{this.props.condition}</p>
              <h3 className="card-title">{this.props.currenttemp}</h3>
              <p className="card-subtitle">Chance of rain: {this.props.rain}</p>
              <p className="card-text">
                High: {this.props.high} Low: {this.props.low}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
