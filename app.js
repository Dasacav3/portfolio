require("dotenv").config();

const express = require("express");
const app = express();

// Express middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set public directory
app.use(express.static(__dirname + "/public"));

// Set view engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", __dirname + "/views");

// Web Routes
app.use("/", require("./routes/router").router);

// Set 404 error
app.use((req, res, next) => {
	res.status(404).render("404");
});

// Set server port
app.listen(process.env.PORT, () => {
	console.log(`Listening at http://localhost:${process.env.PORT}`);
});
