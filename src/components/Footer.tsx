import Image from "next/image";
import Twittter from "../../public/images/Icons/twitter.png";
import FaceBook from "../../public/images/Icons/facebook.png";
import YouTube from "../../public/images/Icons/youtube.png";
import Instagram from "../../public/images/Icons/instagram.png";
import Location from "../../public/images/Icons/location.png";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex  justify-center bg-[#111111]">
      <footer className=" py-3 w-11/12 ">
        <div className="lg:flex  lg:justify-between">
          <div className="space-y-4 sm:flex sm:space-x-6">
            <section className="text-white space-y-1">
              <p>FIND A STORE</p>
              <p>BECOME A MEMBER</p>
              <p>SIGN UP FOR EMAIL</p>
              <p>Send Us Feedback</p>
              <p>STUDENT DISCOUNTS</p>
            </section>
            <section className="text-[#7e7e7e]">
              <p className="text-white">GET HElP</p>
              <p>Order Status</p>
              <p>Delivery</p>
              <p>Returns</p>
              <p>Payment Options</p>
            </section>
            <section className="text-[#7e7e7e]">
              <p className="text-white">About NIKE</p>
              <p>News</p>
              <p>Careers</p>
              <p>Investers</p>
              <p>Sustainability</p>
            </section>
          </div>
          <nav className="flex w-[150px] h-auto space-x-3 py-3 ml-3">
            <a href="">
              <Image src={Twittter} alt="Twitter"></Image>
            </a>
            <a href="">
              {" "}
              <Image src={FaceBook} alt="FaceBook LOGO"></Image>
            </a>
            <a href="">
              <Image src={YouTube} alt="YouTube"></Image>
            </a>
            <a href="">
              <Image src={Instagram} alt="Instagram"></Image>
            </a>
          </nav>
        </div>
        <div className="lg:flex lg:items-center lg:py-3">
          <nav className="text-[#7e7e7e] space-x-3 py-2  w-11/12">
            <Link href={""}>Guides</Link>
            <Link href={""}>Terms of Sale</Link>
            <Link href={""}>Terms of Use</Link>
            <Link href={""}>NIKE Privacy Policy</Link>
          </nav>
          <div className="lg:flex lg:w-7/12 lg:items-center lg:justify-between">
            <div className="flex space-x-2">
              <Image
                src={Location}
                alt="location"
                className="w-[12px] "
              ></Image>
              <p>India</p>
            </div>
            <div>
              <p className="flex items-center ">
                <FaRegCopyright /> 2023 Nike, Inc. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
