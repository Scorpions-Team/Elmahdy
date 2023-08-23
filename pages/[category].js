import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import ItemCard from "@components/ItemCard";
import { motion } from "framer-motion";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const contactVariants = {
  hide: {},
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};
export const formVariants = {
  hide: {
    opacity: 0,
    y: 50,
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
    y: 50,
  },
};

export default function Category() {
  const router = useRouter();
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, isLoading, error } = useSWR(
    `/api/category/${router.query.category}`,
    fetcher
  );

  return (
    <motion.section
      variants={contactVariants}
      initial="hide"
      animate="show"
      exit="exit"
      className="min-h-screen pt-36 pb-20 background relative"
    >
      <Navbar />
      {isLoading ? (
        <motion.h1
          variants={formVariants}
          className="text-center md:text-7xl text-5xl"
        >
          جاري التحميل...
        </motion.h1>
      ) : (
        <>
          <motion.h1
            variants={formVariants}
            className="text-center md:text-7xl text-5xl"
          >
            السلع المتاحة
          </motion.h1>

          <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 py-10 px-20">
            {data.map((cat) => (
              <motion.div variants={formVariants} key={cat.sys.id}>
                <ItemCard {...cat.fields} />
              </motion.div>
            ))}
          </div>
        </>
      )}
      <Footer />
    </motion.section>
  );
}
