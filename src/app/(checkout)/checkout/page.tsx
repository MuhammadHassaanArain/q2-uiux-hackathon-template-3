import Image, { StaticImageData } from "next/image";
import Product1 from "../../../../public/images/GerrUp/Mens1.png";
import Product2 from "../../../../public/images/BestShoes/shoe-1.png";
import Deliver from "../../../../public/images/checkout/deliver.png";
import Dot from "../../../../public/images/checkout/dot.png";
import DownArrow from "../../../../public/images/checkout/downarrow.png";

interface CartItem {
  name: string;
  quantity: number;
  size: string;
  price: string;
  image: string | StaticImageData;
}
function CartItemComponent({ name, quantity, size, price, image }: CartItem) {
  return (
    <main className="w-11/12 gap-2  rounded-md text-[#757575]  flex ">
      <div className=" w-7/12 h-full ">
        <Image src={image} alt={name}></Image>
      </div>
      <div className="w-4/12">
        <p className=" text-[#111111]">{name}</p>
        <div>
          <p>Size {size}</p>
          <p>Quantity {quantity}</p>
        </div>

        <div>
          <p>₹ {price}</p>
        </div>
      </div>
    </main>
  );
}

export default function Checkout() {
  return (
    <main className="mb-32 mt-5">
      <section className="text-[#111111]   flex flex-col items-center  pb-14">
        <div className="w-10/12  space-y-3 py-6">
          <p className="font-bold text-[25px]">order Summary</p>
          <div className="flex justify-between text-[#8d8d8d]">
            <p>Subtotal</p>
            <p>₹ 20890.00</p>
          </div>
          <div className="flex justify-between text-[#8d8d8d]">
            <p>Delivery/Shipping</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between font-bold py-3">
            <p>Total</p>
            <p>₹ 20 890.00</p>
          </div>
          <hr />
          <p className="text-[#8d8d8d]">
            (The total reflects the price of your order, including all dutis and
            taxes)
          </p>
        </div>
        <p className="font-bold  w-11/12 text-start py-3">
          Arrives Mon,27 Mar-Wed,12 Apr
        </p>

        <div className="flex flex-col items-center  space-y-6">
          <CartItemComponent
            name="Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top"
            size="L"
            quantity={1}
            price="3895.00"
            image={Product1}
          />
          <CartItemComponent
            name="Nike Air Max 97 SE Men's Shoes"
            size="8"
            quantity={1}
            price="16995.00"
            image={Product2}
          />
        </div>
      </section>
      <section className="flex justify-center">
        <main className="w-10/12">
          <div className="text-[#111111]">
            <p className=" font-bold">How would you like to get your order?</p>
            <p className="text-[#757575]">
              Customs regulation for India require a copy of the recipient&apos;s
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.{" "}
              <span className="font-bold underline">Learn More</span>
            </p>
            <div className="rounded-lg border border-black flex font-bold  p-5 gap-4 items-center my-8">
              <Image
                src={Deliver}
                alt="Delivery"
                className="w-[25px] h-auto"
              ></Image>{" "}
              Deliver It
            </div>
          </div>
          <div className="text-[#111111]">
            <p className="font-bold pb-5">Enter your name and address:</p>
            <div className="p-4 rounded-lg border border-[#cccccc] mb-4">
              First Name
            </div>
            <div className="p-4 rounded-lg border border-[#cccccc] mb-4">
              Last Name
            </div>
            <div className="text-[#757575] mb-2">
              <div className="text-[#111111] p-4 rounded-lg border border-[#cccccc]">
                Addresss Line 1
              </div>
              <p className="px-4"> We do not ship to P.0 boxes</p>
            </div>
            <div className="p-4 rounded-lg border border-[#cccccc] mb-4">
              Addresss Line 2
            </div>
            <div className="p-4 rounded-lg border border-[#cccccc] mb-4">
              Addresss Line 3
            </div>
            <div className="flex justify-between gap-4">
              <div className="p-4 w-6/12 rounded-lg border border-[#cccccc] mb-4">
                Postal Code
              </div>
              <div className="p-4  w-6/12 rounded-lg border border-[#cccccc] mb-4">
                Locality
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="p-4 flex justify-between  items-center w-6/12 rounded-lg border text-[#8d8d8d] border-[#cccccc] mb-4">
                State/Territory{" "}
                <Image
                  src={DownArrow}
                  alt="Dot"
                  className="w-[12px] h-[12px]"
                ></Image>
              </div>
              <div className="flex justify-between items-center p-4  w-6/12 rounded-lg border border-[#cccccc] mb-4">
                India{" "}
                <Image
                  src={Dot}
                  alt="Dot"
                  className="w-[12px] h-[12px]"
                ></Image>
              </div>
            </div>
          </div>
          <div className="text-[#111111] space-y-4 py-4">
            <p className="">
              <input type="checkbox" className="mr-2" />
              Save this address to my profile
            </p>
            <p className="">
              <input type="checkbox" className="mr-2" />
              Make this my preferred address
            </p>
          </div>
          <div>
            <p className="font-bold text-[#111111] py-4">
              What&apos;s your contact information?
            </p>
            <div className="text-[#757575] mb-2">
              <div className="text-[#111111] p-4 rounded-lg border border-[#cccccc]">
                Email
              </div>
              <p className="px-4">
                A confirmamtion email will be sent afteer checkout.
              </p>
            </div>
            <div className="text-[#757575] mb-2">
              <div className="text-[#111111] p-4 rounded-lg border border-[#cccccc]">
                Phone Number
              </div>
              <p className="px-4">
                A carrier might contact you to confirm delivery.
              </p>
            </div>
          </div>
          <div>
            <p className="font-bold text-[#111111] py-4">What&apos;s your PAN?</p>
            <div className="text-[#757575] mb-2">
              <div className="text-[#111111] p-4 rounded-lg border border-[#cccccc]">
                PAN
              </div>
              <p className="px-4">
                Enter your PAN to enable payment with UPI,Net Banking or local
                card methods
              </p>
            </div>
          </div>
          <div className="text-[#8d8d8d] py-3">
            <p>
              <input type="checkbox" className="mr-2" /> save PAN details to
              Nike Profile
            </p>
            <p className="py-14">
              <input type="checkbox" className="mr-2" /> I have read and consent
              to eShopWorld processing my information in accordance with the
              <span className="underline" > Privacy Statement</span> and <span className="underline" >Cookie Policy</span>. eShopWorld is a trusted Nike
              partner.
            </p>
            <button className="text-[#757575] bg-[#f5f5f5] w-full rounded-3xl py-4">Continue</button>
          </div>
          <div className="text-[#757575]">
            <hr />
            <p className="text-[#111111] pt-3">Delivery</p>
            <br />
            <hr />
            <p className="pt-3">Shipping</p>
            <br />
            <hr />
            <p className="pt-3">Billing</p>
            <br />
            <hr />
            <p className="pt-3">Payment</p>
          </div>
        </main>
      </section>
    </main>
  );
};
