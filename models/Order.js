const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [{
        productId: { type: String },
        quantity: { type: Number, default: 1 },
    }, ],
    address: { type: String, required: true },
    amount: { type: Number, default: 1 },
    status: { type: String, default: "Pending", required: true },
}, { timestamps: true });

export default mongoose.model("Product", ProductSchema);