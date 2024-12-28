import Image from "next/image";
import Link from "next/link";
import Nikee from "../../../public/images/Header/Nike.png";
import Cart from "../../../public/images/Header/Cart.png";
import Message from "../../../public/images/Header/message.png";

export default function CheckOutHeader() {
  return (
    <main className="flex justify-center sm:justify-between px-2 w-full py-4">
      <div className=" w-3/12 flex justify-center ">
        <Link href={"/"}>
          <Image
            src={Nikee}
            alt="Nikee LOGO"
            className="h-[20px] w-auto"
          ></Image>
        </Link>
      </div>
      <div className="flex justify-between w-8/12 sm:w-4/12 lg:w-2/12  ">
        <p className="text-[#111111] font-bold ">000 800 100 9538</p>
        <Image
          src={Message}
          alt="Message Button"
          className="h-[20px] w-auto"
        ></Image>
        <Link href={"/cart"}>
          <Image
            src={Cart}
            alt="Cart Button"
            className="h-[20px] w-auto"
          ></Image>
        </Link>
      </div>
    </main>
  );
}
