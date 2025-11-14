import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white ">
      <h1>Hello this is Ujjwal Anand</h1>
    
      <p><Link href="/about">About</Link></p>
    </div>
  );
}
