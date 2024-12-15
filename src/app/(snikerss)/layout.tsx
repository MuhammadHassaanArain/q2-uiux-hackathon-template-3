import "../globals.css";
import TopHeader from "@/components/snkrs/TopHeader";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Root2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-white`}>
      
     <TopHeader />
     <hr />
        {children}
        <Footer />
      </body>
    </html>
  );
}
