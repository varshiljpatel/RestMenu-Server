const User = require("../../models/user.model");

class apiAuthController {
	static signup = async (req, res) => {
		if (req.body != undefined && req.body != "undefined") {
			const user = new User({
				username: req.body.username,
				email: req.body.email,
				password: req.body.password,
			});
			await user.save();
			console.log("User craeted successfully");
			return res.status(201).json({
				status: 201,
				message: "Signup successful",
			});
		}
		return res.status(500).json({
			status: 500,
			message: "Internal Server Error",
		});
	};
}

module.exports = apiAuthController;
