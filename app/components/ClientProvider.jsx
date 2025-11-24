"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export default function ClientProvider({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      <div className="min-h-screen">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </SessionProvider>
  );
}
