import React from 'react';


//const API_CITES = 'http://localhost:8080/weather-crawler/available-cities';
const API_CITES = 'http://192.168.1.114:8080/weather-crawler/available-cities';
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
    const { cities } = this.state;

    if (!cities){
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul>
          {cities.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Weather;
