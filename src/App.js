import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

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
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${this.state.zip}&days=5&units=I&key=${REACT_APP_APIKEY}`
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
        <h2>Weather for: {this.props.weather.city_name}</h2>  
        <div className="row">
          <Day 
          day="Today" 
          condition={this.props.weather.data[0].weather.description}
          icon={this.props.weather.data[0].weather.icon}
          alt={this.props.weather.data[0].weather.description}
          currenttemp={this.props.weather.data[0].temp}
          rain={this.props.weather.data[0].pop}
          high={this.props.weather.data[0].high_temp}
          low={this.props.weather.data[0].low_temp}
          />
          <Day 
          day="Tomorrow" 
          condition={this.props.weather.data[1].weather.description}
          icon={this.props.weather.data[1].weather.icon}
          alt={this.props.weather.data[1].weather.description}
          currenttemp={this.props.weather.data[1].temp}
          rain={this.props.weather.data[1].pop}
          high={this.props.weather.data[1].high_temp}
          low={this.props.weather.data[1].low_temp}
          />
          <Day 
          day={this.state.daysArr[this.state.dayNum + 2]}
          condition={this.props.weather.data[2].weather.description}
          icon={this.props.weather.data[2].weather.icon}
          alt={this.props.weather.data[2].weather.description}
          currenttemp={this.props.weather.data[2].temp}
          rain={this.props.weather.data[2].pop}
          high={this.props.weather.data[2].high_temp}
          low={this.props.weather.data[2].low_temp}
          />
          <Day 
          day={this.state.daysArr[this.state.dayNum + 3]}
          condition={this.props.weather.data[3].weather.description}
          icon={this.props.weather.data[3].weather.icon}
          alt={this.props.weather.data[3].weather.description}
          currenttemp={this.props.weather.data[3].temp}
          rain={this.props.weather.data[3].pop}
          high={this.props.weather.data[3].high_temp}
          low={this.props.weather.data[3].low_temp}
          />
          <Day 
          day={this.state.daysArr[this.state.dayNum + 4]}
          condition={this.props.weather.data[4].weather.description}
          icon={this.props.weather.data[4].weather.icon}
          alt={this.props.weather.data[4].weather.description}
          currenttemp={this.props.weather.data[4].temp}
          rain={this.props.weather.data[4].pop}
          high={this.props.weather.data[4].high_temp}
          low={this.props.weather.data[4].low_temp}
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
              <img src={`https://www.weatherbit.io/static/img/icons/${this.props.icon}.png`} alt={this.props.alt} />
              <h3 className="card-title">{this.props.currenttemp} °F</h3>
              <p className="card-subtitle">Chance of Rain: {this.props.rain}%</p>
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
