import Image, { StaticImageData } from "next/image";
import Like from "../../../../public/images/Header/Like.png";
import Delete from "../../../../public/images/Header/delete.png";
import Product1 from "../../../../public/images/GerrUp/Mens1.png";
import Product2 from "../../../../public/images/BestShoes/shoe-1.png";
import Link from "next/link";

interface CartItem {
  name: string;
  description: string;
  quantity: number;
  size: string;
  price: string;
  image: string | StaticImageData;
}
function CartItemComponent({
  name,
  description,
  quantity,
  size,
  price,
  image,
}: CartItem) {
  return (
    <main className="w-10/12 sm:w-8/12 text-[#757575] space-y-4  lg:flex  lg:w-full lg:py-3 shadow-lg  ">
      <div className="lg:w-4/12 lg:px-2">
        <Image src={image} alt={name}></Image>
      </div>
      <div className="lg:w-5/12  ">
        <p className="font-bold text-[#111111]">{name}</p>
        <p>{description}</p>
        <div className="flex  justify-between py-2">
          <p>Size {size}</p>
          <p>Quantity {quantity}</p>
        </div>
        <div className=" w-3/12 py-4   flex  justify-between">
          <Image src={Like} alt="Like Icon" className="w-[25px] h-auto"></Image>
          <Image
            src={Delete}
            alt="Delete Icon"
            className="w-[25px] h-auto"
          ></Image>
        </div>
      </div>
      <div>
        <p className="font-bold text-[#111111]  pb-7">MRP : ₹ {price}</p>
      </div>
    </main>
  );
}

export default function Cart() {
  return (
    <div className="lg:flex lg:justify-center lg:pb-44">
      <main className=" lg:w-11/12 lg:flex lg:justify-center">
        <section className=" flex flex-col items-center lg:w-7/12   ">
          <div className="text-[#111111] w-full px-4  bg-[#f5f5f5] ">
            <p className="font-bold">Free Delivery</p>
            <p>
              Applies to order of ₹ 14000.00 or more.{" "}
              <span className="font-bold underline">view details</span>{" "}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold lg:text-left  lg:w-full text-[#111111] py-7 text-[25px]">
              Bag
            </p>
            <div className="flex flex-col items-center">
              <CartItemComponent
                name="Nike Dri-FIT ADV TechKnit Ultra"
                description="Men's Short-Sleeve Running Top Ashen Slate/Cobait Bliss"
                size="L"
                quantity={1}
                price="3895.00"
                image={Product1}
              />
              <CartItemComponent
                name="Nike Air Max 97 SE"
                description="Men's Shoes Flat Pewter/Light Bone/Black/White"
                size="8"
                quantity={1}
                price="16995.00"
                image={Product2}
              />
            </div>
          </div>
        </section>

        <section className="text-[#111111]  flex justify-center lg:w-3/12  py-14">
          <div className="w-10/12 sm:w-8/12 space-y-3">
            <p className="font-bold">Summary</p>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₹ 20890.00</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-3">
              <p>Total</p>
              <p>₹ 20 890.00</p>
            </div>
            <hr />

            <div>
              <Link href={"/checkout"}>
                <button className="bg-[#111111] text-white font-bold my-4 rounded-3xl p-3 w-full">
                  Member Checkout
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
