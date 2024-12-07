import Image from "next/image";
import SerachIcon from "../../public/images/Header/SearchIcon.png";
import Like from "../../public/images/Header/Like.png";
import CartIcon from "../../public/images/Header/Cart.png";
export default function Header() {
  return (
    <header className="h-[60px] bg-[#ffffff]">
      <div className="h-[40px] flex items-center  justify-evenly">
        <div className="h-[30px] w-6/12 bg-[#F5F5F5] flex  items-center rounded-3xl ">
          <div className="w-3/6  flex justify-evenly">
            <Image
              src={SerachIcon}
              alt="Serach Icon"
              className="h-[20px] w-auto"
            ></Image>
            <p className="text-[#cccccc] ">Search</p>
          </div>
        </div>
        <div className="flex justify-between items-center  w-2/12">
          <Image
            src={Like}
            alt="LIke Button"
            className="h-[20px] w-auto"
          ></Image>
          <Image
            src={CartIcon}
            alt="Cart Button"
            className="h-[20px] w-auto"
          ></Image>
        </div>
      </div>
    </header>
  );
}
