import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();

  return (
    <motion.nav
      // initial={{ opacity: 0, y: 100 }}
      // whileInView={{ opacity: 1, y: 0 }}
      className={`justify-between items-center py-4 px-8 border-black shadow-md border-b bg-gray-200 ${
        router.asPath === "/" ? "hidden" : "flex"
      }`}
    >
      <div>
        <Link href="/">
          <Image src="/Logo.png" width={60} height={60} alt="logo" />
        </Link>
      </div>
      <Link href="/menu">
        <p className="text-3xl p-2 bg-primary rounded-xl hover:opacity-70 transition-opacity duration-300">
          الاصناف
        </p>
      </Link>
    </motion.nav>
  );
}
