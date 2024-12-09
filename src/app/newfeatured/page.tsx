import Image from "next/image";
import { StaticImageData } from "next/image";
import product1 from "../../../public/images/NewFeatured/product1.png";
import product2 from "../../../public/images/NewFeatured/preduct2.png";
import product3 from "../../../public/images/NewFeatured/product3.png";

interface Product {
  type: string;
  name: string;
  categary: string;
  color: string;
  price: string;
  image: string | StaticImageData;
}

function ProductBox({ type, name, categary, color, price, image }: Product) {
  return (
    <main className="flex  justify-center">
      <section className="w-[350px] flex flex-col ">
        <Image src={image} alt="Product Image"></Image>
        <p className="text-[#9e3500]">{type}</p>
        <p className="font-bold">{name}</p>
        <p className="text-[#757575]">{categary}</p>
        <p className="text-[#757575]">{color}</p>
        <p className="text-[#111111] font-bold">MRP : ₹ {price}</p>
      </section>
    </main>
  );
}
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";

export default function NewFeatured() {
  return (
    <div>
      <section>
        <main className="my-20 max-w-[1300px] mx-auto flex gap-x-4 lg:gap-x-20 text-black">
          <section className="flex flex-col max-w-[200px]">
            <h1 className="font-semibold text-sm  md:text-2xl">New(500)</h1>
            <div className="font-medium text-[9px] lg:text-md max-w-[150px] space-y-2 mt-6 flex flex-col">
              <Link href={""}>Shoes</Link>
              <Link href={""}>Sports Bras</Link>
              <Link href={""}>Tops & T-Shirts</Link>
              <Link href={""}>Hoodies & Sweatshirts</Link>
              <Link href={""}>Jackets</Link>
              <Link href={""}>Trousers & Tights</Link>
              <Link href={""}>Shorts</Link>
              <Link href={""}>Tracksuits</Link>
              <Link href={""}>Jumpsuits & Rompers</Link>
              <Link href={""}>Skirts & Dresses</Link>
              <Link href={""}>Socks</Link>
              <Link href={""}>Accessories & Equipment</Link>
            </div>
            <div className="mt-10">
              <hr />
              <h1 className="font-semibold flex justify-between items-center text-sm mt-1">
                Gender
                <span>
                  <IoIosArrowUp />
                </span>
              </h1>
              <div className="mt-2 text-[9px] lg:text-sm">
                <h1 className="flex gap-2 items-center">Men</h1>
                <h1 className="flex gap-2 items-center">Women</h1>
                <h1 className="flex gap-2 items-center">Unisex</h1>
              </div>
            </div>
            <div className="mt-10">
              <hr />
              <h1 className="font-semibold flex justify-between text-sm items-center mt-1">
                Kids
                <span>
                  <IoIosArrowUp />
                </span>
              </h1>
              <div className="mt-2 text-[9px] lg:text-sm">
                <h1 className="flex gap-2 items-center">Boys</h1>
                <h1 className="flex gap-2 items-center">Girls</h1>
              </div>
            </div>
            <div className="mt-10">
              <hr />
              <h1 className="font-semibold flex text-[9px] lg:text-[12px] justify-between items-center mt-1">
                Sort By Price
                <span>
                  <IoIosArrowUp />
                </span>
              </h1>
              <div className="mt-2 text-[9px] lg:text-sm">
                <h1 className="flex gap-2 items-center">Under ₹ 2 500.00</h1>
                <h1 className="flex gap-2 items-center">
                  ₹ 2 501.00 - ₹ 7 500.00
                </h1>
              </div>
            </div>
          </section>
          <section className="max-w-[1000px] mx-auto overflow-clip">
            <div className="flex gap-4 ml-10 md:ml-[400px] lg:ml-[620px] xl:ml-[800px] overflow-clip">
              <h1 className="flex items-center gap-2 font-semibold text-sm">
                Hide Filters
                <span>
                  <FiFilter size={14} />
                </span>
              </h1>
              <h2 className="flex items-center gap-2 font-semibold text-sm">
                Sort By
                <span>
                  <RiArrowDropDownLine size={25} />
                </span>
              </h2>
            </div>
            <div className="mb-20">
              {/*  */}

              <main>
                <section className="text-black gap-4  justify-end grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 ">
                  <ProductBox
                    type="Just In"
                    categary="Men's Shoes"
                    image={product1}
                    color="Red"
                    name="Nike Air Force 1"
                    price="10 795.00"
                  />
                  <ProductBox
                    type="Just In"
                    categary="Men's Shoes"
                    image={product2}
                    color="Red"
                    name="Nike Court Vision"
                    price="4995"
                  />
                  <ProductBox
                    type="Just In"
                    categary="Women's SHoe"
                    image={product3}
                    color="Red"
                    name="Nike Air Force 1"
                    price="8695.00"
                  />
                </section>
                <section className="text-black gap-4  justify-end grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 ">
                  <ProductBox
                    type="Just In"
                    categary="Men's Shoes"
                    image={product1}
                    color="Red"
                    name="Nike Air Force 1"
                    price="10 795.00"
                  />
                  <ProductBox
                    type="Just In"
                    categary="Men's Shoes"
                    image={product2}
                    color="Red"
                    name="Nike Court Vision"
                    price="4995"
                  />
                  <ProductBox
                    type="Just In"
                    categary="Women's SHoe"
                    image={product3}
                    color="Red"
                    name="Nike Air Force 1"
                    price="8695.00"
                  />
                </section>
                <section className="text-black gap-4  justify-end grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 ">
                  <ProductBox
                    type="Just In"
                    categary="Men's Shoes"
                    image={product1}
                    color="Red"
                    name="Nike Air Force 1"
                    price="10 795.00"
                  />
                  <ProductBox
                    type="Just In"
                    categary="Men's Shoes"
                    image={product2}
                    color="Red"
                    name="Nike Court Vision"
                    price="4995"
                  />
                  <ProductBox
                    type="Just In"
                    categary="Women's SHoe"
                    image={product3}
                    color="Red"
                    name="Nike Air Force 1"
                    price="8695.00"
                  />
                </section>
              </main>
            </div>
            <hr />
            <section className="my-10">
              <h1 className="font-semibold text-xl">Related Categories</h1>
              <div className="space-x-2 space-y-2">
                <button className="bg-white text-black rounded-full border-[1px] shadow-none">
                  Best Selling Products
                </button>
                <button className="bg-white text-black rounded-full border-[1px] shadow-none">
                  Best Shoes
                </button>
                <button className="bg-white text-black rounded-full border-[1px] shadow-none">
                  New Basketball Shoes
                </button>
                <button className="bg-white text-black rounded-full border-[1px] shadow-none">
                  New Football Shoes
                </button>
                <button className="bg-white text-black rounded-full border-[1px] shadow-none">
                  New Men&apos;s Shoes
                </button>
                <button className="bg-white text-black rounded-full border-[1px] shadow-none">
                  New Running Shoes
                </button>
                <button className="bg-white text-black rounded-full border-[1px] shadow-none">
                  Best Men&apos;s Shoes
                </button>
                <button className="bg-white text-black rounded-full border-[1px] shadow-none">
                  New Jordan Shoes
                </button>
                <button className="bg-white text-black rounded-full border-[1px] shadow-none">
                  Best Women&apos;s Shoes
                </button>
                <button className="bg-white text-black rounded-full border-[1px] shadow-none">
                  Best Training & Gym
                </button>
              </div>
            </section>
          </section>
        </main>
        {/*  */}
      </section>
    </div>
  );
};
