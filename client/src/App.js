import './App.css';
import React from 'react';
import {useEffect , useState} from 'react';

let zip = prompt('Please enter your US 5-digit zipcode')
let zipURL = `http://api.geonames.org/postalCodeSearchJSON?postalcode=${zip}&maxRows=1&country=US&username=nasmolen`;
let weatherURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=0ac88be212ac200a96fcb346dab99e5e&units=imperial`;

let lat = "";
let lng = "";



function App() {
  const LatLng = () => {
      let [location, setLocation] = useState('')
      useEffect (() => {
        fetch(zipURL)
            .then(response => response.json())
            .then(location => {
              setLocation(location)
              // console.log(location);
              lat = location.postalCodes[0].lat;
              lng = location.postalCodes[0].lng;
              console.log(lat, lng)
              // return{
              //   lat: lat,
              //   lng: lng
              // }
            })
          }, []);
      return (
        <div>
        </div>
      );
  }

  const WeatherAPI = () => {
      const [ data, setData ] = useState(null)
      useEffect (()  => {
      fetch(weatherURL)
          .then(response => response.json())
          .then(data => {
          setData(data)
          console.log(data);
          })
      }, []);
      return (
          <div>
              {data && <div>{data.main.temp}</div>} 
          </div>
      );
  };
  const NasaAPI = () => {


    let nasaURL = `https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=DEMO_KEY`;
  
    return(
        <div>
            <img src={nasaURL} width="500" height="500" alt=""></img>
        </div>
    )
  }
  return (
    <div className="App">
        <WeatherAPI />
        <NasaAPI />
        <LatLng />
    </div>
  );
}
export default App;

//lat=29.78
//lon=-95.33