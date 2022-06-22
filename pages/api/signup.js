import User from "../../models/User";
import connectDb from "../../middleware/mongoose";

const handler = async(req, res) => {
    if (req.method == "POST") {
        console.log(req.body);
        let newUser = new User(req.body);
        await newUser.save();

        res.status(200).json({ success: "SUCCESS" });
    } else {
        res.status(400).json({ error: "BAD REQUEST" });
    }
};

export default connectDb(handler);