import Link from "next/link";

interface Props {
    input : string
}
function Button({input}:Props) {
  return (
    <main className="bg-[#111111] rounded-3xl text-[#ffffff]">
        <button className="text-[12px] lg:text-[18px] px-5 xl:text-[20px] xl:py-1"><Link href={""}>{input}</Link></button>
    </main>
  );
};
export default Button;