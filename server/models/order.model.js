const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
	{
		orderId: {
			type: String,
			required: true,
			default: Date.now(),
		},
		orderedTableNumber: {
			type: String,
			required: true,
		},
		totalPrice: {
			type: String,
		},
		isCompleted: {
			type: Boolean,
            default: false,
		},
		items: {
			type: [
				{
					itemName: String,
					itemQnty: String,
					itemPrice: String,
				},
			],
		},
		createdAt: {
			type: String,
			required: true,
			default: Date.now(),
		},
	},
	{ timestamps: false, versionKey: false }
);

orderSchema.pre("save", function (next) {
	let totalPrice = 0;
	if (this.items && this.items.length > 0) {
		for (let i = 0; i < this.items.length; i++) {
			const item = this.items[i];
			if (item.itemPrice && item.itemQnty > 0) {
				totalPrice += Number.parseInt(item.itemPrice * item.itemQnty);
			}
		}
	}
	this.totalPrice = totalPrice.toString(); // Convert to string
	next();
});

const Order = model("Order", orderSchema);
module.exports = Order;
