const authSignupRouter = require("express").Router();
const apiAuthController = require("../../controllers/auth/apiAuth.controller");

authSignupRouter.post("/signup", (req, res) =>
	apiAuthController.signup(req, res)
);

module.exports = authSignupRouter;
