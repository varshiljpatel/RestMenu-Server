const mongoose = require("mongoose");

const connectDatabase = async (uri) => {
	try {
		await mongoose.connect(uri);
		console.log("Connected to database :", uri);
	} catch (error) {
		console.log(`Connect Failed on DB : ${uri}`);
	}
};

module.exports = connectDatabase;
