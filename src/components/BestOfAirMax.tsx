import Image from "next/image";
import LeftArrow from "../../public/images/HeroSection/leftarrrow.png";
import RightArrow from "../../public/images/HeroSection/RightArrow.png";

export default function BestOfAirMax() {
  return (
    <main className="h-[300px]  flex  flex-col items-center">
      <div className="flex text-[#111111] w-11/12  justify-between ">
        <p className="font-bold text-[13px] lg:text-[17px] xl:text-[22px]">
          Best of Air Max
        </p>
        <div className="flex justify-between w-4/12  sm:w-2/12">
          <p className="font-bold text-[13px] lg:text-[17px] xl:text-[22px]">
            Shop{" "}
          </p>
          <div className="flex w-5/12 justify-between">
            <Image
              src={LeftArrow}
              alt="Left Arrow"
              className="bg-[#f5f5f5] rounded-full p-2  w-[20px] lg:w-[25px] lg:h-auto xl:w-[30px] h-auto"
            ></Image>
            <Image
              src={RightArrow}
              alt="Right Arrow"
              className="bg-[#cccccc] rounded-full p-2  w-[20px] lg:w-[25px] lg:h-auto xl:w-[30px] h-auto"
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
