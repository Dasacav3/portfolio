require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connection to DB MongoDB Atlas
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.peqdu.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Base de datos conectada"))
	.catch((e) => console.error(e));

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

app.use("/projects", require("./routes/projects").router);

// Set 404 error
app.use((req, res, next) => {
	res.status(404).render("404");
});

// Set server port
app.listen(process.env.PORT, () => {
	console.log(`Listening at http://localhost:${process.env.PORT}`);
});
