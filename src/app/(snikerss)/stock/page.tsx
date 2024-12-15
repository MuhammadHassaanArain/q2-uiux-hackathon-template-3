import Image, { StaticImageData } from "next/image";

import Product1 from "../../../../public/images/snkrs/StocksImage/p1.png";
import Product2 from "../../../../public/images/snkrs/StocksImage/p2.png";
import Product3 from "../../../../public/images/snkrs/StocksImage/p3.png";
import Product4 from "../../../../public/images/snkrs/StocksImage/p4.png";
import Product5 from "../../../../public/images/snkrs/StocksImage/p5.png";
import Product6 from "../../../../public/images/snkrs/StocksImage/p6.png";
import Product7 from "../../../../public/images/snkrs/StocksImage/p7.png";
import Product8 from "../../../../public/images/snkrs/StocksImage/p8.png";
import Product9 from "../../../../public/images/snkrs/StocksImage/p9.png";
import Product10 from "../../../../public/images/snkrs/StocksImage/p10.png";
import Product11 from "../../../../public/images/snkrs/StocksImage/p11.png";
import Product12 from "../../../../public/images/snkrs/StocksImage/p12.png";
import Product13 from "../../../../public/images/snkrs/StocksImage/p13.png";
import Product14 from "../../../../public/images/snkrs/StocksImage/p14.png";
import Product15 from "../../../../public/images/snkrs/StocksImage/p15.png";
import Product16 from "../../../../public/images/snkrs/StocksImage/p16.png";
import Product17 from "../../../../public/images/snkrs/StocksImage/p17.png";
import Product18 from "../../../../public/images/snkrs/StocksImage/p18.png";
import Product19 from "../../../../public/images/snkrs/StocksImage/p19.png";
import Product20 from "../../../../public/images/snkrs/StocksImage/p20.png";
import Product21 from "../../../../public/images/snkrs/StocksImage/p21.png";
import Product22 from "../../../../public/images/snkrs/StocksImage/p22.png";
import Product23 from "../../../../public/images/snkrs/StocksImage/p23.png";
import Product24 from "../../../../public/images/snkrs/StocksImage/p24.png";

interface Stocks {
  image: string | StaticImageData;
}

function StockComponent({ image }: Stocks) {
  return (
    <main className="flex flex-col items-center">
      <Image src={image} alt="Product Image"></Image>
    </main>
  );
}

export default function Stocks() {
  return (
    <main className=" px-2 lg:px-3">
      <div className="grid  gap-2 grid-cols-2 py-10 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6">
        <StockComponent image={Product1} />
        <StockComponent image={Product2} />
        <StockComponent image={Product3} />
        <StockComponent image={Product4} />
        <StockComponent image={Product5} />
        <StockComponent image={Product6} />
        <StockComponent image={Product7} />
        <StockComponent image={Product8} />
        <StockComponent image={Product9} />
        <StockComponent image={Product10} />
        <StockComponent image={Product11} />
        <StockComponent image={Product12} />
        <StockComponent image={Product13} />
        <StockComponent image={Product14} />
        <StockComponent image={Product15} />
        <StockComponent image={Product16} />
        <StockComponent image={Product17} />
        <StockComponent image={Product18} />
        <StockComponent image={Product19} />
        <StockComponent image={Product20} />
        <StockComponent image={Product21} />
        <StockComponent image={Product22} />
        <StockComponent image={Product23} />
        <StockComponent image={Product24} />
      </div>
    </main>
  );
}
