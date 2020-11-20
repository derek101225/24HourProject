import React from 'react';
import {useEffect , useState} from 'react';


const WeatherAPI = () => {
  let zip = 46148
  let baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=0ac88be212ac200a96fcb346dab99e5e&units=imperial`
  const [ data, setData] = useState(null)

  useEffect (()  => {
   fetch(baseURL)
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




export default WeatherAPI;