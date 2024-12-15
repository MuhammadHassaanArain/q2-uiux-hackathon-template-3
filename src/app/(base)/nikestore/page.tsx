import Image from "next/image";
import Map from "../../../../public/images/FindStore/map.png";
import SearchIcon from "../../../../public/images/Header/SearchIcon.png";
import Filterbtn from "../../../../public/images/FindStore/filter.png";


export default function FindStore() {
  return (
    <div  className="flex  sm:flex-row flex-col justify-center items-center">
      <section className="md:w-6/12">
        <div>
          <p className="text-[#111111] font-bold ">Find a Nike Store</p>
          <div className="border border-[#757575] rounded-lg flex  space-x-4 items-center pl-3">
            <Image src={SearchIcon} alt="Search Icon" className="w-[15px] h-[15px]"></Image>
            <p className="text-[#757575]">Search Location </p>
          </div>
          <div className="flex w-10/12  justify-between my-2">
            <p className="text-[#757575] text-[10px]">15 Stores Near You</p>
            <Image src={Filterbtn} alt="Filter BTN" className="w-[50px] h-[20px]"></Image>
          </div>
        </div>

<main>
    <p className="text-[#111111]">Nike NYC-House of Innovation 000</p>
    <p className="text-[#757575]" >650 5th Ave</p>
    <p className="text-[#757575]"  >New York, NY, 10019, US</p>
    <p className="text-[#111111]"><span className="text-red-600">Closed</span> Opens at 11:00 am</p>
</main>
<hr /> 
<br />
<main>
    <p className="text-[#111111]">Nike NYC-House of Innovation 000</p>
    <p className="text-[#757575]" >650 5th Ave</p>
    <p className="text-[#757575]"  >New York, NY, 10019, US</p>
    <p className="text-[#111111]"><span className="text-red-600">Closed</span> Opens at 11:00 am</p>
</main>
<hr />
<br />
<main>
    <p className="text-[#111111]">Nike NYC-House of Innovation 000</p>
    <p className="text-[#757575]" >650 5th Ave</p>
    <p className="text-[#757575]"  >New York, NY, 10019, US</p>
    <p className="text-[#111111]"><span className="text-red-600">Closed</span> Opens at 11:00 am</p>
</main>
<br />




      </section>
      <section className="flex justify-center  md:w-6/12">
        <div className="w-10/12">
          <Image src={Map} alt="Map" ></Image>
        </div>
      </section>
      <br />
    </div>
  );
}
