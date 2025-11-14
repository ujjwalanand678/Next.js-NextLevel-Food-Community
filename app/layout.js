import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/component/MainHeader";

export const metadata = {
  title: "FOOD COMMUNITY",
  description: "Delicious Meals, Shared by a food loving community ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[radial-gradient(circle,rgba(55,10,140,1)_0%,rgba(0,0,0,1)_40%)]">
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
