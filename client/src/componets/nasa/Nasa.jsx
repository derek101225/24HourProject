import React from 'react';

const NasaApi = () => {
    let baseURL = `https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=J1LXfP9K2ekiYTvQgoGoV31535pfrXOS4sODfq9f`
 return (
        <div>
        <img src={baseURL} width='500px' height='500px' alt='NasaImage'/>
        </div>
    );
};

export default NasaApi;