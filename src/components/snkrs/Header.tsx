import Image from "next/image";
import Link from "next/link";
import snkrLogo from "../../../public/images/snkrs/snkrslogo.png";
import snkrmenu from "../../../public/images/snkrs/menu.png";
export default function Header() {
  return (
    <main className="flex items-center justify-between mx-3 h-[55px] ">
      <div className="">
        <Image className="h-[32px] w-[52px] lg:h-[40px] lg:w-[62px]" src={snkrLogo} alt="Snkrs"></Image>
      </div>
      <div className="">
        <nav className="flex gap-2 md:gap-4 text-[#111111] text-[14px] sm:text-[18px] lg:text-[20px] ">
          <Link className="hover:border-b border-[#757575]" href={"/feed"}>Feed</Link>
          <Link className="hover:border-b border-[#757575]" href={"/stock"}>In Stock</Link>
          <Link className="hover:border-b border-[#757575]" href={"/upcomming"}>Upcomming</Link>
        </nav>
      </div>
      <div className="">
        <Image className="h-[22px] w-[22px] lg:h-[32px] lg:w-[32px]"  src={snkrmenu} alt="Menu"></Image>
      </div>
    </main>
  );
}
