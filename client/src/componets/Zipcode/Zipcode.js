// let zip = prompt('Please enter your US 5-digit zipcode')
// let lat = "";
// let lng = "";
//   const LatLng = () => {
//       let zipURL = `http://api.geonames.org/postalCodeSearchJSON?postalcode=${zip}&maxRows=1&country=US&username=nasmolen`;
//       let [location, setLocation] = useState()
//       useEffect (() => {
//         fetch(zipURL)
//             .then(response => response.json())
//             .then(location => {
//               setLocation(location)
//               console.log(location);
//               lat = location.postalCodes[0].lat;
//               lng = location.postalCodes[0].lng;
//               console.log(lat, lng)
//               // return{
//               //   lat: lat,
//               //   lng: lng
//               // }
//             })
//           }, []);
//       return (
//         <div>
//         </div>
//       );
//   }