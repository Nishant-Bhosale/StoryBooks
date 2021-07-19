const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");

connectDB();
//Load Config
dotenv.config({ path: "/config/config.env" });

const app = express();

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use("/", require("./routes/index"));

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

const PORT = process.env.PORT || 5000;

app.listen(PORT);
