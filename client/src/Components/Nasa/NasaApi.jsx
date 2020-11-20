import React from 'react';
// import {useEffect , useState} from 'react';

// let zip = 46033


const NasaAPI = () => {
    let baseURL = `https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=DEMO_KEY`;
    return(
        <div>
            <img src={baseURL} width="500" height="500"></img>
        </div>
    )
}

export default NasaAPI;