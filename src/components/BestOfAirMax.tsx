import Image from "next/image";
import { StaticImageData } from "next/image";
import LeftArrow from "../../public/images/HeroSection/leftarrrow.png";
import RightArrow from "../../public/images/HeroSection/RightArrow.png";
// import Shoe1 from "../../public/images/BestShoes/shoe-1.png";
// import Shoe2 from "../../public/images/BestShoes/shoe-2.png";
import { client } from "@/sanity/lib/client";
interface ShoeProps {
  image: string | StaticImageData;
  name: string;
  price: number;
  categary: string;
}

export function BestShoeComponent({ image, name, price, categary }: ShoeProps) {
  return (
    <main className="bg-[#ffffff] w-[200px] md:w-[300px] lg:w-[400px]">
      <Image src={image} alt="Shoe Image" width={500} height={500}></Image>
      <div className="md:space-y-2">
        <div className="text-black md:flex md:justify-between">
          <p className="text-[12px] md:text-[15px] font-bold">{name}</p>
          <p className="text-[12px] md:text-[15px] font-bold">{price}</p>
        </div>
        <p className="text-[#757575] text-[12px] font-bold"> {categary}</p>
      </div>
    </main>
  );
}
interface TopProduct {
  price: number;
  category: string;
  imageUrl: string;
  productName: string;
  _id: string;
}
export default async function BestOfAirMax() {
  const querry = `*[_type=="product" && status=="Trending" ]{
  _id,
  productName,
  price,
  category,
 "imageUrl": image.asset -> url
}`;
  const topProducts = await client.fetch(querry);
  console.log(topProducts);
  return (
    <main className="h-[350px] md:h-[450px]  lg:h-[550px] xl:h-[600px] flex  flex-col items-center my-8">
      <div className="flex text-[#111111] w-11/12  justify-between  ">
        <p className="font-bold text-[13px] lg:text-[17px] xl:text-[22px]">
          Best of Air Max
        </p>
        <div className="flex justify-between w-4/12  sm:w-2/12">
          <p className="font-bold text-[13px] lg:text-[17px] xl:text-[22px]">
            Shop{" "}
          </p>
          <div className="flex w-5/12 justify-between">
            <Image
              src={LeftArrow}
              alt="Left Arrow"
              className="bg-[#f5f5f5] rounded-full p-2  w-[20px] lg:w-[25px] lg:h-auto xl:w-[30px] h-auto"
            ></Image>
            <Image
              src={RightArrow}
              alt="Right Arrow"
              className="bg-[#cccccc] rounded-full p-2  w-[20px] lg:w-[25px] lg:h-auto xl:w-[30px] h-auto"
            ></Image>
          </div>
        </div>
      </div>

      <section className="w-11/12 flex justify-center my-4  overflow-x-auto ">
        <div className="flex space-x-2 gap-4 ">
          {topProducts.map((product: TopProduct, index: number) => (
            <>
              {" "}
              <BestShoeComponent
                key={index}
                image={product.imageUrl}
                name={product.productName}
                price={product.price}
                categary={product.category}
              />
            </>
          ))}
        </div>
      </section>
    </main>
  );
}
