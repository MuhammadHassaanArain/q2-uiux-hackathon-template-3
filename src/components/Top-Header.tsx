import Image from "next/image";
import LOGO from "../../public/images/Header/image.png";
import Link from "next/link";
export default function TopHeader() {
  return (
    <header className="h-[36px] bg-[#F5F5F5] flex items-center justify-around p-1">
      <Image src={LOGO} alt="LOGO" className="h-[30px]"></Image>

      <div>
        <div className="h-[18px] text-[#111111] bg-[#FFFFFF] flex  items-center justify-center">
          <p className="h-[16] text-[10px]"> Skip to main content</p>
        </div>

        <nav className="text-[#111111] text-[12px]">
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
