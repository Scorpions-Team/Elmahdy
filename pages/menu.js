import React from "react";
import useSWR from "swr";
import CatCard from "@components/CatCard";
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

export default function menu() {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const {
    data: status,
    isLoading: loadingStatus,
    error: errorStatus,
  } = useSWR("/api/status", fetcher);
  const { data, isLoading, error } = useSWR(
    status?.fields.open && status?.fields.show ? "/api/categories" : null,
    fetcher,
    { refreshInterval: 1000 }
  );

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>error</div>;

  return (
    <motion.section
      variants={contactVariants}
      initial="hide"
      animate="show"
      exit="exit"
      className="min-h-screen pt-36 pb-20 background relative"
    >
      <Navbar />
      {loadingStatus ? (
        <motion.h1
          variants={formVariants}
          className="text-center md:text-7xl text-5xl"
        >
          جاري التحميل...
        </motion.h1>
      ) : status.fields.open ? (
        status.fields.show ? (
          isLoading ? (
            <h1 className="text-center md:text-7xl text-5xl">
              جاري التحميل...
            </h1>
          ) : (
            <>
              <motion.h1
                variants={formVariants}
                className="text-center md:text-7xl text-5xl"
              >
                جميع الاصناف
              </motion.h1>

              <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 py-10 px-20">
                {data.map((cat) => (
                  <motion.div variants={formVariants} key={cat.sys.id}>
                    <CatCard {...cat.fields} />
                  </motion.div>
                ))}
              </div>
            </>
          )
        ) : (
          <motion.h1
            variants={formVariants}
            className="text-center md:text-7xl text-5xl mt-20"
          >
            لم يتم تحديث الاسعار بعد
          </motion.h1>
        )
      ) : (
        <motion.h1
          variants={formVariants}
          className="text-center md:text-7xl text-5xl mt-20"
        >
          المحل مغلق
        </motion.h1>
      )}
      <Footer />
    </motion.section>
  );
}
