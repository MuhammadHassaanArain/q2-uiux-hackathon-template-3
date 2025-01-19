import Image from "next/image";
// import product from "../../../../../public/images/NewFeatured/product3.png";
import Button from "../../../../components/usable/Button";
import { client } from "@/sanity/lib/client";
type ID = {
  productDetails: string;
};

export default async function ProductDetail({
  params,
}: {
  params: Promise<ID>;
}) {
  const { productDetails } = await params;
  const querry = `*[_type=="product" && _id=="${productDetails}"]{
    _id,
    productName,
    description,
    price,
     "imageUrl": image.asset -> url
  }`;
  const data = await client.fetch(querry);

  return (
    <section className="flex justify-center">
      <main className="text-[#111111] w-10/12 py-10 flex flex-col  md:flex-row md:justify-between">
        <div className="md:w-6/12">
          <Image
            src={data[0].imageUrl}
            alt="Product Image"
            className="xl:h-4/5"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="  flex flex-col  items-start md:w-5/12 xl:space-y-6 ">
          <p className="text-2xl font-bold lg:text-[30px] py-2">
            {data[0].productName}
          </p>
          <p className="text-[10px]   sm:text-[12px] md:text-[12px] lg:text-[17px] py-2">
            {data[0].description}
          </p>
          <p className="text-2xl font-bold lg:text-[30px] py-2 ">
            ₹ {data[0].price}
          </p>

          <Button input="Add to Cart"></Button>
        </div>
      </main>
    </section>
  );
}
