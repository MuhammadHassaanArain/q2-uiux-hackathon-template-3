import Image from "next/image";
import LeftArrow from "../../../public/images/snkrs/leftArrow.png";
import Link from "next/link";
import ShopCart from "../../../public/images/snkrs/shopCat.png";
import Location from "../../../public/images/snkrs/location.png";
export default function TopHeader() {
  return (
    <main className="text-[#757575] flex justify-between items-center py-2 sm:px-3">
      <div className=" flex">
        <Image src={LeftArrow} className="h-[22px] md:mr-2" alt="Arrow"></Image>
      <Link href={"/"}>  <p>Visit Nike.com</p></Link>
      </div>
      <div>
        <nav className="flex gap-5">
          <Link href={""}>Join/LogIn</Link>
          <Link href={""}>Help</Link>
          <Link href={""}>
            {" "}
            <Image
              className="h-[22px]"
              src={ShopCart}
              alt="ShopCart"
            ></Image>{" "}
          </Link>
          <Link className="flex" href={""}>
            <Image
              className="h-[22px] md:pr-2"
              src={Location}
              alt="Location"
            ></Image>
            India
          </Link>
        </nav>
      </div>
    </main>
  );
}
