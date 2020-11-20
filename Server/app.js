require('dotenv').config();

const express = require("express");  

const db = require("./db");

const app = express();

app.use(require('./middleware/headers'));

const controllers = require("./controllers");

app.use(express.json());

app.use("/nasa", controllers.nasacontroller);
app.use("/weather", controllers.weathercontroller);
app.use("/zomato", controllers.zomatocontroller);

db.authenticate()
.then(() => db.sync())
.then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server:] App is listening on Port ${process.env.PORT}`));
})
.catch((err) => {
    console.log("[Server:] Server Crashed");
    console.error(err);
})