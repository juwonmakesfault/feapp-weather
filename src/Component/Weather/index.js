import React from 'react';
import { Switch, Route} from 'react-router';

const API_CITES = 'http://192.168.1.114:8080/weather-crawler/available-cities';
const SELECT_CITE = 'http://192.168.1.114:8080/weather-crawler/current-weathers/by-city-name/';

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

    /*  console.log('CDM!!');
    /*setTimeout(() => {
        this.setState({
        foo: 'HELLO WORLD'
        });
      }, 2000);


      this.setState({
        foo: 'HELLO WORLD'
      });*/
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
          <Route path={`${match.path}/:cityId`} component={Weather} />
          <Route exact path={match.path} render={ ()=> cities.map(item => { return <p><a href={`${match.path}`}>{item}</a></p>;}) } />}
          />
        </Switch>
      </div>
    );
  }
}

export default Weather;
