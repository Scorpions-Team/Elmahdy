import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const navVariants = {
  hide: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};

export default function Navbar() {
  const router = useRouter();

  return (
    <motion.nav
      variants={navVariants}
      className={`justify-between absolute top-0 left-0 w-full items-center py-4 px-8 border-black shadow-md border-b bg-gray-200 ${
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
