import Image from "next/image";
import Product1 from "../../../../public/images/snkrs/upcomming/p1.png";
import Product2 from "../../../../public/images/snkrs/upcomming/p2.png";
import Product3 from "../../../../public/images/snkrs/upcomming/p3.png";
import Product4 from "../../../../public/images/snkrs/upcomming/p4.png";
import Product5 from "../../../../public/images/snkrs/upcomming/p5.png";
import Product6 from "../../../../public/images/snkrs/upcomming/p6.png";
import { StaticImageData } from "next/image";
interface Upcomming {
  image: string | StaticImageData;
  name: string;
  model: string;
}

function UpcommingComponent({ image, name, model }: Upcomming) {
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

export default function Upcomming() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10">
      <UpcommingComponent
        image={Product1}
        name="Air Jordan 2 Low"
        model="Melon Tint"
      />
      <UpcommingComponent
        image={Product2}
        name="Air Jordan 1 Low Golf"
        model="Midnight Navy"
      />
      <UpcommingComponent
        image={Product3}
        name="Air Maz 1 86 Original"
        model="Big Bubble"
      />
      <UpcommingComponent
        image={Product4}
        name="Women's Air Max 1 86 Original"
        model="Big Bubble"
      />
      <UpcommingComponent
        image={Product5}
        name="Air Max 1 86 OG G"
        model="University Red"
      />
      <UpcommingComponent
        image={Product6}
        name="Women's Dunk Low"
        model="Blue Suede"
      />
    </main>
  );
}
