const apiAuthController = require('../../controllers/auth/apiAuth.controller');
const authRouter = require('express').Router();

// admin routes
authRouter.post("/admin/login", (req, res) => apiAuthController.admin(req, res));

// user signup routes
authRouter.post("/signup", (req, res) => apiAuthController.signup(req, res));

module.exports = authRouter;