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
			});
		}
	};

	// Fetch pending orders
	static getPendingOrders = async (req, res) => {
		try {
			const orders = await Order.find({ isCompleted: false });
			res.status(200).json(orders);
		} catch (err) {
			return res.json({
				message: "Pending Orders Fetching Failure",
				status: 500,
			});
		}
	};
	
	// Complete order request
	static setCompletedOrder = async (req, res) => {
		try {
			if (req.body.orderId != null) {
				const orders = await Order.findOneAndUpdate(
					{ orderId: req.body.orderId, isCompleted: false },
					{ isCompleted: true },
					{ new: true }
				);
				if (orders.isCompleted == true) {
					res.status(200).json({
						message: "Order completed successfully!",
						status: 200,
					});
				}
			} else {
				return res.status(400).json({
					message: "Missing orderId in request body",
					status: 400,
				});
			}
		} catch (err) {
			return res.json({
				message: "Pending Orders Fetching Failure",
				status: 500,
			});
		}
	};
}

module.exports = apiController;
