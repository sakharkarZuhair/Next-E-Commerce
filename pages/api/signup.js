import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async(req, res) => {
    if (req.method == "POST") {
        console.log(req.body);
        const { name, email, number } = req.body;
        let newUser = new User({
            name,
            email,
            number,
            password: CryptoJS.AES.encrypt(req.body.password, "secret123").toString(),
        });
        await newUser.save();

        res.status(200).json({ success: "SUCCESS" });
    } else {
        res.status(400).json({ error: "BAD REQUEST" });
    }
};

export default connectDb(handler);