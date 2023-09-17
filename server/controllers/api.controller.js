const Order = require("../models/order.model");

class apiController {
	static getHome(req, res) {
		return res.json({
			message: "Hello, world!",
			status: 200,
		});
	}

	// Create an new Oder Controller
	static createOrder = async (req, res) => {
		try {
			const tableNumber = req.body.orderedTableNumber;
			const items = req.body.items;

			const order = new Order({
				orderedTableNumber: tableNumber,
				items: items,
			});
			await order.save();
			return res.json({
				message: "Order Created Successfully!",
				status: 201,
			});
		} catch (error) {
			return res.json({
				message: "Order Failure",
				status: 500,
			});
		}
	};

	// Fetch all Orders
	static getOrders = async (req, res) => {
		try {
			const orders = await Order.find({});
            res.status(200).json(orders);
		} catch (err) {
			return res.json({
				message: "Order Fetching Failure",
				status: 500,
				error: err.message,
			});
		}
	};
}

module.exports = apiController;
