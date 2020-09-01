
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors  = require("cors");
const contentRoute = require("./routes/content.js")

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client/build")));

// use cors for client request
app.use(cors({
    origin: 'https://DigitalMedia.herokuapp.com/' || "http://localhost:8080",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
// app.use(cookieParser());

//route
// app.use("/", as);
app.use("/", contentRoute);

//404 route message
app.get("*", (req, res) => { res.status(404).json({ message: "route not found" }); });

app.use( (err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message, error: {} });
});

app.listen(port, (req, res) => {  console.log(`App listening to ${port}....`);
                          console.log('Press Ctrl+C to quit.'); });


module.exports = app;
