const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, versionKey: false },
);

userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(this.password, salt);
	this.password = hashedPassword;
	next();
});

const User = model("User", userSchema);
module.exports = User;
