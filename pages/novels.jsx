import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "../models/Product";

const Notebook = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center flex-wrap -m-4">
            {Object.keys(products).map((item) => {
              return (
                <Link
                  key={products[item]._id}
                  href={`/product/${products[item].slug}`}
                >
                  <div
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border m-4 shadow-md"
                    style={{ cursor: "pointer" }}
                  >
                    <a className="block relative overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-[50vh] block"
                        src={products[item].img}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {products[item].title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].desc}
                      </h2>
                      <p className="mt-1">₹{products[item].price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "notebook" });
  let novels = {};

  for (let item of products) {
    if (item.title in novels) {
      if (
        !novels[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        novels[item.title].color.push(item.color);
      }
      if (
        !novels[item.title].size.includes(item.size) &&
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
  return {
    props: { products: JSON.parse(JSON.stringify(novels)) },
  };
}

export default Notebook;
