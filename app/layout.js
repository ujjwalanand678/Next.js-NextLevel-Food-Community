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
      <body className="bg-[radial-gradient(circle_at_center,rgba(88,28,135,1)_0%,rgba(40,10,80,1)_25%,rgba(5,0,20,1)_75%,rgba(0,0,0,1)_100%)] bg-fixed">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
