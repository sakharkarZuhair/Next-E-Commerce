import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image height={100} width={100} src="/logo.png" alt="" />
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/firebolt">
            <a className="mr-5 hover:text-gray-900">The Firebolt</a>
          </Link>
          <Link href="/wands">
            <a className="mr-5 hover:text-gray-900">Wands</a>
          </Link>
          <Link href="/invisibilitycloaks">
            <a className="mr-5 hover:text-gray-900">Invisibility cloaks</a>
          </Link>
          <Link href="/maps">
            <a className="mr-5 hover:text-gray-900">The Marauder's Map</a>
          </Link>
        </nav>
        <div>
          <Link href="/">
            <FiShoppingCart className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
