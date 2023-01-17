import Navbar from "@/components/Navbar";
import { Fragment } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}
