import React from "react";
import logo from "../../../public/images/Header/Nike.png";
import Image from "next/image";
import Link from "next/link";
// import Button from "../components/Button";

const page = () => {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col items-center py-10 sm:w-10/12 md:w-7/12  lg:w-5/12">
        <Image className="pb-5" src={logo} width={40} height={10} alt="Logo" />
        <h2 className=" text-center font-bold pb-5 lg:text-[25px] text-[#111111]">
          BECOME A NIKE MEMBER
        </h2>
        <p className="w-10/12 text-center text-[#8d8d8d] pb-5">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
        <form action="" className="flex flex-col w-10/12 ">
          <input
            className=" border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Email Address"
          />
          <input
            className=" border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Password"
          />
          <input
            className=" border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="First Name"
          />
          <input
            className=" border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Last Name"
          />
          <input
            className=" border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Date of Birth"
          />
          <p className="pb-3 text-text-secondary-gray text-sm text-center">
            Get a Nike Member Reward every year on your Birthday.
          </p>
          <select
            className=" border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            name=""
            id=""
          >
            <option className="text-[#8d8d8d]" value="">
              India
            </option>
            <option className="text-[#8d8d8d]" value="">
              United States
            </option>
            <option className="text-[#8d8d8d]" value="">
              United Kingdom
            </option>
            <option className="text-[#8d8d8d]" value="">
              Pakistan
            </option>
            <option className="text-[#8d8d8d]" value="">
              Canada
            </option>
          </select>
          <div className="flex gap-5 mt-1">
            <div className="border-[#E5E5E5] rounded-md py-4 border-[2px] w-2/4 text-center text-[#8d8d8d]">
              Male
            </div>
            <div className="border-[#E5E5E5] rounded-md py-4 border-[2px] w-2/4 text-center text-[#8d8d8d]">
              Female
            </div>
          </div>
          <div className="flex justify-between items-center py-7">
            <div>
              <input type="checkbox" id="remember" />
              <label
                className="ml-2 pl-2 cursor-pointer text-[#8d8d8d]"
                htmlFor="remember"
              >
                Sign up for emails to get updates from Nike on products, offers
                and your Member benefits
              </label>
            </div>
          </div>
          <p className="text-[#8d8d8d] text-center pb-6">
            By creating an account, you agree to Nike&apos;s{" "}
            <Link className="underline" href="#">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className="underline" href="#">
              Terms of Use
            </Link>
            .
          </p>
          <div className="bg-[#111111] text-center rounded-sm p-1">
            <button className="text-white">SIGN IN</button>
          </div>
          <p className="text-[#8D8D8D] py-4 text-center">
            already a member?{" "}
            <span className="text-[#111111] underline">Sign In</span>
          </p>
        </form>
      </div>
    </main>
  );
};

export default page;
