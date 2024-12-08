import Image from "next/image";
import Mens from "../../public/images/TheEssentials/mens.png";
// import Womens from "../../public/images/TheEssentials/womens.png";
import Kids from "../../public/images/TheEssentials/kids.png";

interface Button {
  input: string;
}
export function ButtonForEssentials({ input }: Button) {
  return (
    <main className=" flex justify-center items-center text-black rounded-3xl w-3/12   absolute bottom-10 left-10 bg-white  p-1 ">
      <button className="text-[12px] lg:text-[18px] px-5 xl:text-[20px] xl:py-1">
        {input}
      </button>
    </main>
  );
};  

export default function TheEssentials() {
  return (
    <main className="flex justify-center">
      <div className="w-11/12 ">
        <p className="font-bold text-[15px] lg:text-[17px] xl:text-[22px] text-black pb-8">
          The Essentials
        </p>
<div className="flex justify-center">
            <div className="grid w-9/12 md:w-11/12  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <section className=" gap-3 relative">
            <Image src={Mens} alt="Mens Essentials" className="w-full h-auto" />
            <ButtonForEssentials input="Men's" />
           

          </section>
          <section className=" gap-3 relative">
            <Image src={Mens} alt="Womens Essentials"></Image>
            <ButtonForEssentials input="Women's" />
          </section>
          <section className=" gap-3 relative">
            <Image src={Kids} alt="Kids Essentials"></Image>
            <ButtonForEssentials input="kids" />
          </section>
        </div>
        </div>

      </div>
    </main>
  );
};

