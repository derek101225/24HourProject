require("dotenv").config();
const express = require("express") // --> dependency
// require('./filepathwayname') --> file
const db = require("./db");
const app = express();


app.use(require('./middleware/headers'));

// Import controllers as a bundle
const controllers = require("./controllers");

// Parse the body of all requests as JSON
app.use(express.json());

// Setting up "/pies" as an endpoint into my pie controller
app.use("/nasa", controllers.nasacontroller);
app.use('/weather', controllers.weathercontroller);
app.use('/zomato', controllers.zomatocontroller);


db.authenticate()
.then(() => db.sync()) // => {force: true}
.then(() => {
  app.listen(process.env.PORT, () => console.log(`[Server: ] App is listening on Port ${process.env.PORT}`));
  })
  .catch((err) => {
    console.log("[Server: ] Server Crashed");
    console.error(err);
  })
//   app.listen(3000, function() {
//     console.log('app is listing on port 3000');
// })