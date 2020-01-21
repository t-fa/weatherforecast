import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const APIKEY = require('./config.js');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zip: '',
      ajax: false,
      weather: []
    }
    this.getZip = this.getZip.bind(this);
    this.submitZip = this.submitZip.bind(this);
  }

  getZip(event) {
    this.setState({
      zip: event.target.value
    });
  }

  submitZip(event){
    event.preventDefault();
    let url = `http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zip},us&units=imperial&cnt=5&APPID=${APIKEY.APIKEY}`
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ weather: data })
      this.setState({ ajax: true })
    })
    .catch(console.log)
  }

  render () {
    return (
      <div className="container">
        <h1>5 Day Weather Forecast</h1>
        <form>
          <div className="form-group">
            <label htmlFor="zipcode">Zip Code:</label>
            <input type="text" className="form-control w-50 p-3" value={this.state.zip} onChange={this.getZip}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.submitZip}>Submit</button>
        </form>
        {this.state.ajax 
        ? <Weather weather={this.state.weather} />
        : <h2>Type your zip to get started</h2> }
      </div>
    );
  }
}

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      daysArr: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNum: new Date().getDay()
    }
  }
  
  render() {
    return (
      <div>
        <h2>Weather for: {this.props.weather.city.name}</h2>  
        <div className="row">
          <Day 
          day="Today" 
          condition={this.props.weather.list[0].weather[0].main}
          icon={this.props.weather.list[0].weather[0].icon}
          alt={this.props.weather.list[0].weather[0].description}
          currenttemp={this.props.weather.list[0].main.temp}
          humidity={this.props.weather.list[0].main.humidity}
          high={this.props.weather.list[0].main.temp_max}
          low={this.props.weather.list[0].main.temp_min}
          />
          <Day 
          day="Tomorrow" 
          condition={this.props.weather.list[1].weather[0].main}
          icon={this.props.weather.list[1].weather[0].icon}
          alt={this.props.weather.list[1].weather[0].description}
          currenttemp={this.props.weather.list[1].main.temp}
          humidity={this.props.weather.list[1].main.humidity}
          high={this.props.weather.list[1].main.temp_max}
          low={this.props.weather.list[1].main.temp_min}
          />
          <Day 
          day={this.state.daysArr[this.state.dayNum + 2]}
          condition={this.props.weather.list[2].weather[0].main}
          icon={this.props.weather.list[2].weather[0].icon}
          alt={this.props.weather.list[2].weather[0].description}
          currenttemp={this.props.weather.list[2].main.temp}
          humidity={this.props.weather.list[2].main.humidity}
          high={this.props.weather.list[2].main.temp_max}
          low={this.props.weather.list[2].main.temp_min}
          />
          <Day 
          day={this.state.daysArr[this.state.dayNum + 3]}
          condition={this.props.weather.list[3].weather[0].main}
          icon={this.props.weather.list[3].weather[0].icon}
          alt={this.props.weather.list[3].weather[0].description}
          currenttemp={this.props.weather.list[3].main.temp}
          humidity={this.props.weather.list[3].main.humidity}
          high={this.props.weather.list[3].main.temp_max}
          low={this.props.weather.list[3].main.temp_min}
          />
          <Day 
          day={this.state.daysArr[this.state.dayNum + 4]}
          condition={this.props.weather.list[4].weather[0].main}
          icon={this.props.weather.list[4].weather[0].icon}
          alt={this.props.weather.list[4].weather[0].description}
          currenttemp={this.props.weather.list[4].main.temp}
          humidity={this.props.weather.list[4].main.humidity}
          high={this.props.weather.list[4].main.temp_max}
          low={this.props.weather.list[4].main.temp_min}
          />
        </div>
      </div>
    );
  };
}

class Day extends React.Component {
  render() {
    return(
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-text">{this.props.day}</h5>
            <div className="card-subtitle">
              <p className="card-text">{this.props.condition}</p>
              <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt={this.props.alt} />
              <h3 className="card-title">{this.props.currenttemp} °F</h3>
              <p className="card-subtitle">Humidity: {this.props.humidity}%</p>
              <p className="card-text">High: {this.props.high} °F</p>
              <p className="card-text">Low: {this.props.low} °F</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
