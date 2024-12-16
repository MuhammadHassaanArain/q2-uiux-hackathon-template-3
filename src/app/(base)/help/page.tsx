import Image from "next/image";
import SearchIcon from "../../../../public/images/Header/SearchIcon.png";
import Link from "next/link";
import Button from "../../../components/usable/Button";
import LikeThum from "../../../../public/images/Icons/likethum.png";
import DisLikeThum from "../../../../public/images/Icons/dislikethumb.png";
import PhoneImage from "../../../../public/images/help/phone.png";
import MessageIcon from "../../../../public/images/help/message.png";
import ChatIcon from "../../../../public/images/help/chat.png";
import StoreLocation from "../../../../public/images/help/storelocation.png";

export default function Help() {
  return (
    <main className="text-[#111111]">
      {/*responsive  heading and search bar */}
      <section className=" flex flex-col items-center">
        <h3 className="font-bold text-[18px] md:text-[20px] lg:text-[23px] xl:text-[25px] py-3">
          GET HELP
        </h3>
        <div className="border text-[#757575] flex  justify-between rounded-md w-10/12 sm:w-6/12 md:w-4/12  px-5 py-2 items-center ">
          <p>What can we help you with?</p>
          <Image
            src={SearchIcon}
            alt="Search Icon"
            className="h-[15px] w-auto text-[#757575] "
          ></Image>
        </div>
      </section>
      {/*  */}
      <section className="py-5  flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-start">
        <div className="w-10/12 lg:w-7/12  ">
          {/*  */}
          <h4 className="font-bold text-[16px] md:text-[18px] lg:text-[21px] xl:text-[23px] py-3">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h4>
          <p>
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <br />
          <p>
            Visa, Mastercard, Diners Club, Discover, American Express, Visa
            Electron, Maestro
            <br />
            <br />
            If you enter your PAN information at checkout, you&apos;ll be able to pay
            for your order with PayTM or a local credit or debit card. <br />
            Apple Pay <br />
            <br />
            <span className="font-bold underline">Nike Members</span> can store
            multiple debit or credit cards in their profile for faster checkout.
            If you&apos;re not already a Member,{" "}
            <span className="font-bold underline">
              <Link href={"/joinus"}>join us</Link>
            </span>{" "}
            today
            <br />
            <br />
          </p>
          <div className="flex  justify-evenly pb-6 ">
            <div className="w-4/12 flex justify-center">
              <Button input="JOIN US"></Button>
            </div>

            <div className="w-5/12 flex justify-center">
              <Button input="SHOP NIKE"></Button>
            </div>
          </div>
          {/*  */}
          <h4 className="font-bold text-[16px] md:text-[18px] lg:text-[21px] xl:text-[23px] py-6">
            FAQs
          </h4>
          <p className="font-bold">
            Does my card need international purchases enabled?
          </p>
          <p>
            Yes, we recommend asking your bank to enable international purchases
            on your card. You will be notified at checkout if international
            purchases need to be enabled.
          </p>
          <br />
          <p>
            Please note, some banks may charge{" "}
            <span className="font-bold underline">a small transaction fee</span>{" "}
            for international orders.{" "}
          </p>
          <br />
          <p className="font-bold">
            Can I pay for my order with multiple methods?
          </p>
          <p>
            No, payment for Nike orders can&apos;t be split between multiple payment
            methods.
          </p>
          <br />
          <p className="font-bold">
            What payment method is accepted for SNKRS orders?
          </p>
          <p>
            You can use any accepted credit card to pay for your SNKRS order.
          </p>
          <br />
          <p className="font-bold">Why don&apos;t I see Apple Pay as an option?</p>
          <p>
            To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll
            need to use a compatible Apple device running the latest OS, be
            signed in to your iCloud account and have a supported card in your
            Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on
            Nike.com.
          </p>
          <br />
          <p>Was this answer helpful?</p>

          <div className="flex py-2  w-3/12 justify-around">
            <Image
              src={LikeThum}
              alt="like thum"
              className="w-[23px] h-auto"
            ></Image>
            <Image
              src={DisLikeThum}
              alt="Dislike thum"
              className="w-[23px] h-auto"
            ></Image>
          </div>

          <p className="text-[#757575] py-3">RELATED</p>
          <p className="font-bold underline">
            WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
          </p>
          <p className="font-bold underline">
            HOW DO I GET FREE DELIVERY ON NIKE ORDER?
          </p>
          {/*  */}
        </div>
        <hr />
        <hr />
        {/* right  */}

        <div className="flex  flex-col py-10  items-center space-y-10   ">
          <h4 className="font-bold text-[16px] md:text-[18px] lg:text-[21px] xl:text-[23px] py-3">
            CONTACT US
          </h4>
          <div className="flex flex-col items-center">
            <Image
              src={PhoneImage}
              alt="Phone Image"
              className="h-[75px] w-[75px]"
            ></Image>
            <p>000 800 919 0566</p>
            <p>Products & Orders: 24 hours a day,</p>
            <p>7 days a week</p>
            <p>Company Info & Enquiries: 07:30 -</p>
            <p>16:30. Monday - Friday</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={MessageIcon}
              alt="Message  Icon"
              className="h-[75px] w-[75px]"
            ></Image>
            <p>24 hours a day</p>
            <p>7 days a week</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={ChatIcon}
              alt="Message Icon"
              className="h-[75px] w-[75px]"
            ></Image>
            <p>We&apos;ll reply within</p>
            <p>five business days</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={StoreLocation}
              alt="Location Icon"
              className="h-[75px] w-[75px]"
            ></Image>
            <p>STORE LOCATOR</p>
            <p>Find Nike retail stores near you</p>
          </div>
        </div>
        {/*  */}
      </section>
    </main>
  );
};
