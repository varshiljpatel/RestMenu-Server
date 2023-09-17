require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");
const router = require("./routes/api.route.js");
const authSignupRouter = require("./routes/auth/signup.route.js");
const connectDatabase = require("./utils/condb.js");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use("/", router);
app.use("/auth", authSignupRouter);

app.all("*", (req, res) =>
	res.status(404).json({
		message: "Not Found",
		status: 404,
	})
);

console.log(process.env.DATABASE_URI);

connectDatabase(process.env.DATABASE_URI || "mongodb://localhost:27017");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));