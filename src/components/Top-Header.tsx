import Image from "next/image";
import LOGO from "../../public/images/Header/image.png";
import Link from "next/link";
export default function TopHeader() {
  return (
    <header className="h-[36px] bg-[#F5F5F5] flex items-center justify-around p-1">
      <div className="w-4/12 lg:w-3/12 ">
        <Image src={LOGO} alt="LOGO" className="h-[30px]"></Image>
      </div>
      <div className="sm:flex   w-7/12 lg:w-8/12  h-[36px] sm:justify-evenly sm:items-center">
        <div className="h-[18px] lg:h-[26px] w-36  text-[#111111] bg-[#ffffff] flex  items-center justify-center shadow-sm">
          <p className="h-[16] text-[10px] lg:text-[12px] ">
            {" "}
            Skip to main content
          </p>
        </div>

        <nav className="text-[#111111] text-[10px] border-l  lg:text-[15px]">
          <Link href={""} className="border-black border-r px-2">
            Find a Store
          </Link>
          <Link href={""} className="border-black border-r px-2">
            Help
          </Link>
          <Link href={""} className="border-black border-r px-2">
            Join Us
          </Link>
          <Link href={""} className="px-2">
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}
