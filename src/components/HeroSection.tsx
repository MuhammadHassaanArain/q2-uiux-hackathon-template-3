import Image from "next/image";
import HeroImage from "../../public/images/HeroSection/Hero.png";
import Button from "./usable/Button";

export default function HeroSection() {
  return (
    <div className=" lg:h-[940px] h-[600px] sm:h-[670px]">
      <section className="h-[68px] sm:h-[58px] bg-[#f5f5f5]">
        <div className="h-[44px] flex flex-col content-center items-center text-center text-[#111111]">
          <h3 className="font-bold text-[16px] lg:text-[18px]">
            Hello Nike App
          </h3>
          <p>
            Download the app to access everything Nike.{" "}
            <span className="font-bold underline">Get Your Great</span>
          </p>
        </div>
      </section>
      <section className="flex  flex-col items-center">
        <div>
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="h-[350px] lg:h-[550px]"
          ></Image>
        </div>
        <div className=" w-10/12  md:w-6/12 h-[150px]  text-[#111111] flex flex-col sm:py-20 py-10   items-center sm:space-y-4 space-x-2">
          <p className="text-xs font-bold lg:text-[13px]">First Look</p>
          <p className="text-2xl font-bold lg:text-[30px]">
            Nike Air Max Pulse
          </p>
          <p className="text-[10px]  text-center sm:text-[12px] md:text-[12px] lg:text-[17px]">
            Extreme Comfort. Hyper Durable. Max Volume. Introducing the Air Max
            Pulse - Design to push you pass your limits and help you go to the
            max.
          </p>
          <div className="flex space-x-2 py-4">
            <Button input="Notify Me" />
            <Button input="Shop Air Max" />
          </div>
        </div>
      </section>
    </div>
  );
}
