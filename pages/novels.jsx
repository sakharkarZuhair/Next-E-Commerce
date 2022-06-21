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
            {products.map((item) => {
              return (
                <Link key={item._id} href={`/product/${item.slug}`}>
                  <div
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border m-4 shadow-md"
                    style={{ cursor: "pointer" }}
                  >
                    <a className="block relative overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-[50vh] block"
                        src={item.img}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.desc}
                      </h2>
                      <p className="mt-1">₹{item.price}</p>
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
  let products = await Product.find();
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Notebook;
