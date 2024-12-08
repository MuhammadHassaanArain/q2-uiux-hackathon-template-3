import Image from "next/image";
import FeaturedImage from "../../public/images/Featured/Featured.png";
import Button from "./usable/Button";
export default function Featured() {
  return (
    <div className="flex justify-center">
      <main className="w-11/12">
        <p className="font-bold text-[17px] text-[#111111]">Featured</p>
        <Image src={FeaturedImage} alt="Featured Image"></Image>
        <div className="flex justify-center">
          <section className="w-10/12 flex flex-col  items-center  text-center  space-y-2 lg:space-y-4 my-4">
            <p className="text-[#111111] font-bold text-[20px] lg:text-[35px]">
              STEP INTO WHAT FEELS GOOD
            </p>
            <p className="text-black text-[12px] md:text-[15px]">
              cause everyone should know the feeling of running in that perfect
              pair
            </p>

            <div className="py-4">
              <Button input="Find Your Shoe" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
