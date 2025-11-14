import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png"

const MainHeader = () => {
  return (<header>
    <Link href="/">
    <Image src={logo} alt="Logo"  />
    NextLevel Food Community
    </Link>
    <nav>
      <ul>
        <li><Link href="/meals">Browse Meals</Link></li>
        <li><Link href="/community">Community</Link></li>
      </ul>
    </nav>
    </header>);
};

export default MainHeader;
