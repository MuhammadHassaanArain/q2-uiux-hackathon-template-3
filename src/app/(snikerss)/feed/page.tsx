import Image from "next/image";
import LearnMoreImage1 from "../../../../public/images/snkrs/FeedImages/Feedlearnmoreimage/image1.png";
import LearnMoreImage2 from "../../../../public/images/snkrs/FeedImages/Feedlearnmoreimage/image2.png";
import LearnMoreImage3 from "../../../../public/images/snkrs/FeedImages/Feedlearnmoreimage/image3.png";
import LearnMoreImage4 from "../../../../public/images/snkrs/FeedImages/Feedlearnmoreimage/image4.png";

import product1 from "../../../../public/images/snkrs/FeedImages/Feedproducts/product1.png";
import product2 from "../../../../public/images/snkrs/FeedImages/Feedproducts/product2.png";
import product3 from "../../../../public/images/snkrs/FeedImages/Feedproducts/product3.png";
import product4 from "../../../../public/images/snkrs/FeedImages/Feedproducts/product4.png";
import product5 from "../../../../public/images/snkrs/FeedImages/Feedproducts/product5.png";
import product6 from "../../../../public/images/snkrs/FeedImages/Feedproducts/product6.png";
import product7 from "../../../../public/images/snkrs/FeedImages/Feedproducts/product7.png";

import { StaticImageData } from "next/image";

interface LearnMore {
  image: string | StaticImageData;
}
interface FeedProduct {
  image: string | StaticImageData;
  name: string;
  model: string;
}

function FeedLearnMoreComponent({ image }: LearnMore) {
  return (
    <main className="flex flex-col items-center text-[#111111] ">
      <Image src={image} alt={"LearnMore Image"} className="w-10/12"></Image>
      <div className="py-4">
        <button className="text-white bg-[#111111] rounded-full px-3 py-1">
          Learn More
        </button>
      </div>
    </main>
  );
}
function FeedProductComponent({ image, name, model }: FeedProduct) {
  return (
    <main className="text-[#111111] flex flex-col items-center  ">
      <Image src={image} alt={"product Image"} className="w-10/12"></Image>
      <div className="pt-4 pb-10">
        <p className="font-semibold text-[14px]">{name}</p>
        <h3 className="font-bold text-[22px]">{model}</h3>
      </div>
    </main>
  );
}

export default function Feed() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10">
      <FeedLearnMoreComponent image={LearnMoreImage1} />
      <FeedProductComponent
        image={product1}
        name="Air Max 1 86 OG G"
        model="University Red"
      />
      <FeedProductComponent
        image={product2}
        name="Air Max 1 86 Original"
        model="Big Bubble"
      />
      <FeedProductComponent
        image={product3}
        name="Air Max 1"
        model="Corduroy"
      />
      <FeedLearnMoreComponent image={LearnMoreImage2} />
      <FeedProductComponent
        image={product4}
        name="Women's Air Max 1 87"
        model="Great Indoors"
      />
      <FeedProductComponent
        image={product5}
        name="Air Max 1"
        model="Shima Shima"
      />
      <FeedLearnMoreComponent image={LearnMoreImage3} />
      <FeedProductComponent
        image={product2}
        name="Women's Air Max 1 86 Original"
        model="Big Bubble"
      />
      <FeedLearnMoreComponent image={LearnMoreImage4} />
      <FeedProductComponent
        image={product6}
        name="Women's Dunk Low"
        model="Blue Suede"
      />
      <FeedProductComponent
        image={product7}
        name="Air Jordan 2 Low"
        model="Melon Tint"
      />
    </main>
  );
}
