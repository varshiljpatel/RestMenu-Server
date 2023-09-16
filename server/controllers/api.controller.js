class apiController {
    static getHome(req, res) {
        return res.json({
            message: "Hello, world!",
            status: 200,
        });
    };
}

module.exports = apiController;