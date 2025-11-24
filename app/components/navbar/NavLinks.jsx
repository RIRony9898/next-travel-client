"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ isAuthenticated }) => {
  const pathname = usePathname();

  return (
    <>
      <li>
        <Link
          href={"/"}
          className={pathname === "/" ? "text-blue-500 font-bold" : ""}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/destinations"}
          className={
            pathname === "/destinations" ? "text-blue-500 font-bold" : ""
          }
        >
          Destinations
        </Link>
      </li>
      <li>
        <Link
          href={"/news"}
          className={pathname === "/news" ? "text-blue-500 font-bold" : ""}
        >
          News
        </Link>
      </li>
      {isAuthenticated && (
        <>
          <li>
            <Link
              href={"/add-destination"}
              className={
                pathname === "/add-destination" ? "text-blue-500 font-bold" : ""
              }
            >
              Add Destination
            </Link>
          </li>
          <li>
            <Link
              href={"/add-news"}
              className={
                pathname === "/add-news" ? "text-blue-500 font-bold" : ""
              }
            >
              Add News
            </Link>
          </li>
        </>
      )}
      <li>
        <Link
          href={"/about-us"}
          className={pathname === "/about-us" ? "text-blue-500 font-bold" : ""}
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href={"/contact-us"}
          className={
            pathname === "/contact-us" ? "text-blue-500 font-bold" : ""
          }
        >
          Contact Us
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
