function HomeBottom() {
  return (
    <div className="w-full flex justify-center my-20">
      <main className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-10/12 md:w-7/12 xl:w-6/12 py-4 text-[#757575] space-y-2 sm:space-y-0 ">
        <section className="space-y-2 ">
          <p className="font-bold text-black">Icons</p>
          <p>Air Force 1</p>
          <p>Huarache</p>
          <p>Air Max 90</p>
          <p>Air Max 95</p>
        </section>
        <section className="space-y-2 ">
          <p className="font-bold text-black">Shoes</p>
          <p>All SHoes</p>
          <p>Custom Shoes</p>
          <p>Jordan Shoes</p>
          <p>Running Shoes</p>
        </section>
        <section className="space-y-2">
          <p className="font-bold text-black">Clothing</p>
          <p>All Clothing </p>
          <p>Modest Wear</p>
          <p>Hoodies & Pullovers</p>
          <p>Shirts & Tops</p>
        </section>
        <section className="space-y-2">
          <p className="font-bold text-black">Kids&apos;</p>
          <p>Infant & Toddler SHoes</p>
          <p>Kids&apos; Shoes</p>
          <p>Kids&apos; Jordan Shoes</p>
          <p>Kids&apos; Basketball Shoes</p>
        </section>
      </main>
    </div>
  );
}

export default HomeBottom;
