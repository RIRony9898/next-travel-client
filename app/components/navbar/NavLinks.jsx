"use client";

import Link from "next/link";

const NavLinks = () => (
  <>
    <li>
      <Link href={"/"}>Home</Link>
    </li>
    <li>
      <Link href={"/destinations"}>Destinations</Link>
    </li>
    <li>
      <Link href={"/news"}>News</Link>
    </li>
    <li>
      <Link href={"/about-us"}>About Us</Link>
    </li>
    <li>
      <Link href={"/contact-us"}>Contact Us</Link>
    </li>
  </>
);

export default NavLinks;
