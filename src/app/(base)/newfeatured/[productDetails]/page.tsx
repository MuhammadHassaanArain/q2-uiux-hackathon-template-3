import Image from "next/image";
import product from "../../../../../public/images/NewFeatured/product3.png";
import Button from "../../../../components/usable/Button";

export default function ProductDetail() {
  return (
    <section className="flex justify-center">
      <main className="text-[#111111] w-10/12 py-10 flex flex-col  md:flex-row md:justify-between">
        <div className="md:w-6/12">
          <Image src={product} alt="Product Image" className="xl:h-4/5"></Image>
        </div>
        <div className="  flex flex-col  items-start md:w-5/12 xl:space-y-6 ">
          <p className="text-2xl font-bold lg:text-[30px] py-2">
            Nike Air Force 1 PLT.AF.ORM
          </p>
          <p className="text-[10px]   sm:text-[12px] md:text-[12px] lg:text-[17px] py-2">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its &quot;inside out&quot;-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release an
            artisan finish.
          </p>
          <p className="text-2xl font-bold lg:text-[30px] py-2 ">₹ 8695.00</p>

          <Button input="Add to Cart"></Button>
        </div>
      </main>
    </section>
  );
}
