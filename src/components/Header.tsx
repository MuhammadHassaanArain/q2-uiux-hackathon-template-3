"use client";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import SerachIcon from "../../public/images/Header/SearchIcon.png";
import Like from "../../public/images/Header/Like.png";
import CartIcon from "../../public/images/Header/Cart.png";
import Nikee from "../../public/images/Header/Nike.png";
import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-[60px] bg-[#ffffff] my-3 lg:flex lg:items-center">
      <section className="flex justify-center  lg:w-8/12">
        <div className="flex w-11/12  justify-between ">
<Link href={"/"}><Image
            src={Nikee}
            alt="Nikee LOGO"
            className="h-[20px] w-auto"
          ></Image>
          </Link>
          <nav className="hidden  text-[#111111] space-x-4 sm:text-xs sm:justify-center sm:flex lg:text-[16px] xl:text-[18px]  w-8/12">
            <Link href={"/newfeatured"}>New & Featured</Link>
            <Link href={""}>Men</Link>
            <Link href={""}>Women</Link>
            <Link href={""}>Kids</Link>
            <Link href={""}>Sales</Link>
            <Link href={"/feed"}>SNKRs</Link>
          </nav>
          <div className="sm:hidden">
            {isMenuOpen ? (
              <IoClose onClick={handleMenuClick} className="text-black" />
            ) : (
              <TfiMenuAlt onClick={handleMenuClick} className="text-black" />
            )}
          </div>
          {/* nav for mobile */}
          {isMenuOpen && (
            <section className="bg-gray-900 px-2 rounded-md">
              <nav className="text-gray-100 flex flex-col">
                <Link href={"/newfeatured"}>New & Featured</Link>
                <Link href={""}>Men</Link>
                <Link href={""}>Women</Link>
                <Link href={""}>Kids</Link>
                <Link href={""}>Sales</Link>
                <Link href={"/feed"}>SNKRs</Link>
              </nav>
              <IoClose />
            </section>
          )}
          {/*  */}
        </div>
      </section>

      <div className="h-[40px] flex items-center  justify-evenly  lg:w-4/12">
        <div className="h-[30px] w-6/12 bg-[#F5F5F5] flex  items-center rounded-3xl ">
          <div className="w-3/6  flex justify-evenly">
            <Image
              src={SerachIcon}
              alt="Serach Icon"
              className="h-[20px] w-auto"
            ></Image>
            <p className="text-[#cccccc] ">Search</p>
          </div>
        </div>
        <div className="flex justify-between items-center  w-2/12">
          <Image
            src={Like}
            alt="LIke Button"
            className="h-[20px] w-auto"
          ></Image>
        <button>
          <Link href={"/orders"}>
          <Image
            src={CartIcon}
            alt="Cart Button"
            className="h-[20px] w-auto"
          ></Image>
          </Link>
        </button>
        </div>
      </div>
    </header>
  );
}
