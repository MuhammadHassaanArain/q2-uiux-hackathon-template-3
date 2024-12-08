import Image from "next/image";
import LeftArrow from "../../public/images/HeroSection/leftarrrow.png";
import RightArrow from "../../public/images/HeroSection/RightArrow.png";
import mens1 from "../../public/images/GerrUp/Mens1.png";
import mens2 from "../../public/images/GerrUp/mens2.png";
import women1 from "../../public/images/GerrUp/women1.png";
import women2 from "../../public/images/GerrUp/women2.png";
import { StaticImageData } from "next/image";
interface GearUpProps {
  image: string | StaticImageData;
  name: string;
  price: string;
  categary: string;
}
export function GearUpComponent({ image, name, price, categary }: GearUpProps) {
  return (
    <main className="bg-[#ffffff] w-[200px] md:w-[300px] lg:w-[400px]">
      <Image src={image} alt="Shoe Image"></Image>
      <div className="md:space-y-2 py-6">
        <div className="text-black md:flex md:justify-between">
          <p className="text-[12px] md:text-[15px] font-bold">{name}</p>
          <p className="text-[12px] md:text-[15px] font-bold">{price}</p>
        </div>
        <p className="text-[#757575] text-[12px] font-bold"> {categary}</p>
      </div>
    </main>
  );
}


export default function GearUp() {
  return (
    <div className="flex justify-center">
      <main className="w-11/12 ">
        <p className="font-bold text-[17px] text-[#111111]">Gear Up</p>

        <div className="  flex  justify-end ">
          <div className="lg:flex lg:justify-between gap-6 w-11/12">
            <section className="lg:w-[47%]">
              {/*  */}
              <div className="flex justify-end">
                {" "}
                <div className="flex justify-between w-4/12  sm:w-4/12">
                  <p className="font-bold text-[13px] lg:text-[17px] xl:text-[22px] text-black">
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
              {/*  */}
              <div className="flex flex-row py-3 overflow-x-auto">
                <main className="flex flex-row gap-4">
                  <GearUpComponent
                    name="Nike Dri-FIT ADV Techknit Ultra"
                    price="3895"
                    categary="Men's Short-sleeve Running Top"
                    image={mens1}
                  />

                  <GearUpComponent
                    name="Nike Dri-FIT Challenger"
                    price="2495"
                    categary="Men's 18cm (approx) 2-in-1 versatile Shorts"
                    image={mens2}
                  />
                </main>
              </div>
            </section>
            <section className="lg:w-[47%]">
              {/*  */}
              <div className="flex justify-end">
                {" "}
                <div className="flex justify-between w-4/12  sm:w-4/12">
                  <p className="font-bold text-[13px] lg:text-[17px] xl:text-[22px] text-black">
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
              {/*  */}
              <div className="flex flex-row py-3 overflow-x-auto">
                <main className="flex flex-row gap-4">
                  <GearUpComponent
                    name="Nike Dri-FIT ADV Run Division"
                    price="5295"
                    categary="Women's Long-sleeve Running Top"
                    image={women1}
                  />
                  <GearUpComponent
                    name="Nike Fast"
                    price="3795"
                    categary="Women's Mid Rise 7/8 Running Leggings With Pockets"
                    image={women2}
                  />
                </main>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
