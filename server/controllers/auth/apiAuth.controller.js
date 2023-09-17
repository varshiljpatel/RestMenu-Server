const User = require("../../models/user.model");

class apiAuthController {
	// Controller for signup
	static signup = async (req, res) => {
		try {
			if (req.body != undefined && req.body != "undefined") {
				const user = new User({
					username: req.body.username,
					email: req.body.email,
					password: req.body.password,
				});
				await user.save();
				return res.status(201).json({
					status: 201,
					message: "Signup successful",
				});
			}
			return res.status(500).json({
				status: 500,
				message: "Internal Server Error",
			});
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: "Internal Server Error",
			});
		}
	};

	// Controller for admin
	static admin = async (req, res) => {
		try {
			if (req.body != undefined && req.body != "undefined") {
				const username = req.body.username;
				const password = req.body.password;
				if (
					username == process.env.ADMIN_USERNAME &&
					password == process.env.ADMIN_PASSWORD
				) {
					return res.status(200).json({
						status: 200,
						message: "Admin Authentication Successful",
					});
				} else {
					return res.status(500).json({
						status: 500,
						message: "Admin Authentication Credential Failure",
					});
				}
			}
			return res.status(500).json({
				status: 500,
				message: "Bad Request For Admin Authentication",
			});
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: "Bad Request For Admin Authentication",
			});
		}
	};
}

module.exports = apiAuthController;
