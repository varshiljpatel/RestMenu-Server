const apiAuthController = require("../../controllers/auth/apiAuth.controller");
const authRouter = require("express").Router();

// admin routes
authRouter.post("/admin/login", apiAuthController.admin);

// user signup routes
authRouter.post("/signup", apiAuthController.signup);

module.exports = authRouter;
