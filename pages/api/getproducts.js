// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async(req, res) => {
    let products = await Product.find();
    let novels = {};

    for (let item of products) {
        if (item.title in novels) {
            if (!novels[item.title].color.includes(item.color) &&
                item.availableQty > 0
            ) {
                novels[item.title].color.push(item.color);
            }
            if (!novels[item.title].size.includes(item.size) &&
                item.availableQty > 0
            ) {
                novels[item.title].size.push(item.size);
            }
        } else {
            novels[item.title] = JSON.parse(JSON.stringify(item));
            if (item.availableQty > 0) {
                novels[item.title].color = [item.color];
                novels[item.title].size = [item.size];
            }
        }
    }

    res.status(200).json({ novels });
};

export default connectDb(handler);