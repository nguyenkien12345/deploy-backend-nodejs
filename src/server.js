require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();

//config view Engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

app.get('/hoidanit', (req, res) => {
   setTimeout(function () {
   throw new Error('We crashed!!!!!');
   }, 10);
})

let port = process.env.PORT || 8080;

app.listen(port, () => {
   console.log(`HoiDanIT app is running at the port ${port}`);
});
