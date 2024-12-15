import Link from "next/link";

export default function Orders() {
  return (
    <div className="flex justify-center py-14">
      {" "}
      <main className="flex flex-col items-center w-10/12  ">
        <h3 className="text-[#111111] font-bold text-[20px] py-3">
          View or Manage Your Order
        </h3>
        <p className="text-[#111111] text-center sm:w-6/12  lg:w-4/12">
          To check the status of your order, or to start a return, please enter
          ypur order number and email address.{" "}
        </p>
        <input

          type="text"
          placeholder="Order Number*"
          className="text-[#757575]  p-4 border border-[#757575] rounded-lg mt-8 mb-3"
        />
        <input
        
          type="text"
          placeholder="Email address*"
          className="text-[#757575]  p-4 border border-[#757575] rounded-lg mb-8 mt-3"
        />
        <button className="text-[#757575] bg-[#e5e5e5] px-[90px] py-4 rounded-full">Submit</button>
        <p className="text-[#111111] py-6">
          Already a member?{" "}
          <span>
            <Link href={"/signin"} className="font-bold">
              {" "}
              Sign in
            </Link>
          </span>
        </p>
      </main>
    </div>
  );
}
