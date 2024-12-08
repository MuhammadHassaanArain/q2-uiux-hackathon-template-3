import Image from "next/image";
import DontMissImage from "../../public/images/GerrUp/dontmiss.png";
import Button from "./usable/Button";
export default function DontMiss() {
  return (
    <div className="flex justify-center my-14">
      <main className="w-11/12">
        <p 
        className="font-bold text-[15px] lg:text-[17px] xl:text-[22px] text-black"
        
        >Don&apos;t Miss</p>
        <Image src={DontMissImage} alt="Men Image"></Image>
        <div className="flex justify-center">
          <section className="w-10/12 flex flex-col  items-center  text-center  space-y-2 lg:space-y-4 my-4">
            <p className="text-[#111111] font-bold text-[20px] lg:text-[35px]">
              FLIGHT ESSENTIALS
            </p>
            <p className="text-black text-[12px] md:text-[15px]">
              your built-to-last, all-weak-wears - but with style only Jordan
              Brand can deliver
            </p>

            <div className="py-4">
              <Button input="Shop" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
