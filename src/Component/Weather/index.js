import React from 'react';
import { Switch, Route} from 'react-router';
import './weather.css';

const API_CITES = 'http://192.168.1.114:8080/weather-crawler/available-cities';
const API_WEATHER = 'http://192.168.1.114:8080/weather-crawler/current-weathers/by-city-name';

class CityWeather extends React.Component {
    state = {
      weather: null
    };

    async componentDidMount() {
      const { cityId } = await this.props.match.params;
      const api = `${API_WEATHER}/${cityId}`;

      const weather = await fetch(api)
        .then(res => res.json())
        .then(data => data);

      this.setState({
        weather
      });
    }

    render() {
      const { cityId } = this.props.match.params;

      const { weather } = this.state;

      if (!weather) {
      return <div>Loading...</div>;
      }

      const celsius = (weather.main.temp - 273.15).toFixed(2); // kelvin to celsius
      const weatherMain = weather.weather[0].main;
      const iconId = weather.weather[0].id;

      return (
        <div className="weather-today">
          <h2 className="weather-city">{cityId}</h2>

          <div className="weather-today-meta">
            <h3 className="weather-main">{weatherMain}</h3>
            <div className="weather-temp">{celsius}°</div>
          </div>
        </div>
      );
    }
}


class Weather extends React.Component{
  state = {
    cities: null
  };

  async componentDidMount() {
    const city_list = await fetch(API_CITES)
      .then(res => res.json())
      .then(data => data);

    console.log({city_list});

    this.setState({
      cities: city_list
    });
  }

  render() {
    const { match } = this.props;
    const { cities } = this.state;

    if (!cities){
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Switch>
          <Route path={`${match.path}/:cityId`} component={CityWeather} />
          <Route exact path={match.path} render={ ()=> cities.map(item => { return <p> <a class="cityName" href={match.path+"/"+item}>{item}</a></p>;}) } />} />
        </Switch>
      </div>
    );
  }
}

export default Weather;
