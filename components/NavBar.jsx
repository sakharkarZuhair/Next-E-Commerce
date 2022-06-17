import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import {
  AiFillCloseSquare,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

function NavBar() {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <div className="shadow-md ">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto font-bold">
            <Link href={"/firebolt"}>
              <a className="mr-5 hover:text-gray-900 cursor-pointer">
                The Firebolt
              </a>
            </Link>
            <Link href={"/wands"}>
              <a className="mr-5 hover:text-gray-900 cursor-pointer">Wands</a>
            </Link>
            <Link href={"/invisibilitycloaks"}>
              <a className="mr-5 hover:text-gray-900 cursor-pointer">
                Invisibility Cloak
              </a>
            </Link>
            <Link href={"/maps"}>
              <a className="hover:text-gray-900 cursor-pointer">Maps</a>
            </Link>
          </nav>
          <Link href={"/"}>
            <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center cursor-pointer text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
              <Image src={"/logo.png"} alt={"Logo"} height={120} width={120} />
            </a>
          </Link>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button
              onClick={toggleCart}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Go to
              <FiShoppingCart style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </div>
      </header>
      <div
        ref={ref}
        className="w-72 h-full z-10 sideCart absolute bg-zinc-100 top-0 right-0 px-8 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-2xl text-center ">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl"
        >
          <AiFillCloseSquare />
        </span>
        <ol className="">
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">Order</div>
              <div className="flex items-center font-semibold justify-center w-1/3">
                <AiFillMinusCircle className="text-xl cursor-pointer" />
                <span className="mx-1 text-xl">1</span>
                <AiFillPlusCircle className="text-xl cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">Order</div>
              <div className="flex items-center font-semibold justify-center w-1/3">
                1
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">Order</div>
              <div className="flex items-center font-semibold justify-center w-1/3">
                1
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">Order</div>
              <div className="flex items-center font-semibold justify-center w-1/3">
                1
              </div>
            </div>
          </li>
        </ol>
        <button class="flex mx-auto mt-16 text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-700 rounded text-lg">
          <BsFillBagCheckFill className="m-1" />
          Checkout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
