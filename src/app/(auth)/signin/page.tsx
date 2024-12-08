import Image from "next/image";
import NIKE from "../../../../public/images/Header/Nike.png";
import CheckBox from "../../../../public/images/Icons/checkbox.png";
export default function SignIn() {
  return (
   <div className="flex justify-center py-10">
     <main className="w-10/12 sm:w-7/12 md:w-5/12 lg:w-4/12">
    <section className="flex justify-center ">
    <div className="w-6/12  flex flex-col  items-center text-center">
     <Image src={NIKE} alt="NIKE LOGO" className="w-[60px] py-2" ></Image>
     <p className="text-[#111111] font-bold  md:text-[20px] xl:text-[25px]">YOUR ACCOUNT FOR EVERYTHING NIKE</p>
     </div>
    </section>
   <div className="space-y-2 my-3">
   <input type="text"  placeholder="Email Address"  className="w-full border border-[#cccccc] p-2 " />
    <input type="password" placeholder="Password"  className="w-full border border-[#cccccc] p-2 " />

   </div>
      <div className="flex justify-between">
<div className="flex ">
<Image src={CheckBox} alt="Check bod"  className="w-[16px] h-auto mr-2" ></Image>
<p className="text-[#8D8D8D] text-[13px]">Keep me signed in</p>
</div>
        <p className="text-[#CCCCCC] text-[13px]">Forgottem Your Password?</p>
      </div>
      <p className="text-[#8D8D8D] text-center py-11 ">
        by logging in,you agree to Nike&apos;s{" "}
        <span className="underline">Privacy police</span> and{" "}
        <span className="underline">Term of Use</span>
      </p>
      <div className="bg-[#111111] text-center rounded-sm p-1">
        <button className="text-white">SIGN IN</button>
      </div>
      <p className="text-[#8D8D8D] py-4 text-center">
        Not a Member? <span className="text-[#111111]">Join Us</span>
      </p>
    </main>
   </div>
  );
}
