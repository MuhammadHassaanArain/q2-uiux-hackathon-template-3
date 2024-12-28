import Link from "next/link";
import Image from "next/image";
import payment from "../../../public/images/checkout/footer.png";
import India from "../../../public/images/checkout/locationIndia.png";
import { FaRegCopyright } from "react-icons/fa";

export default function CheckoutFooter() {
  return (
    <main className="text-[#8d8d8d] bg-[#111111] flex flex-col-reverse  xl:flex-row xl:justify-around   py-7">
      <section className="flex flex-col-reverse lg:flex-row items-center xl:w-6/12 ">
        <div className=" flex justify-around  sm:w-10/12 w-11/12 xl:justify-around ">
          <Image src={India} alt="Location" className=" w-2/12"></Image>
          <p className="flex items-center sm:justify-end w-10/12 sm:w-7/12 xl:w-9/12  px-2 gap-1">
            <FaRegCopyright /> 2023 Nike, Inc. All Rights Reserved
          </p>
        </div>
        <nav className="text-[#8d8d8d]  flex justify-around sm:w-8/12 w-11/12 ">
          <Link href={""}>Terms of Use</Link>
          <Link href={""}>Terms of Sale</Link>
          <Link href={""}>Privacy Policy</Link>
        </nav>
      </section>
      <section className=" flex justify-center py-2  xl:w-5/12 ">
        <Image src={payment} alt="Payment company" className="w-11/12"></Image>
      </section>
    </main>
  );
}
