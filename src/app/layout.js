import { Inter,  } from "next/font/google";
import Navbar from "@/component/navbar";
import Maps from "@/component/maps"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Belém",
  description: "site test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar></Navbar>
        {children}
      <Maps />
     
      </body>
    </html>
  );
}
