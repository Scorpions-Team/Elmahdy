import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const homeVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    scale: 0,
    rotate: 180,
    transition: {
      duration: 0.5,
    },
  },
};

export const circleVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    scale: [1, 2, 2, 3, 1],
    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
    transition: {
      duration: 2.5,
    },
  },
};

export default function Home() {
  return (
    <motion.section
      variants={homeVariants}
      initial="hide"
      animate="show"
      exit="exit"
      className="flex justify-center items-center w-screen h-screen"
    >
      <motion.div
        variants={circleVariants}
        initial="hide"
        animate="show"
        className="absolute flex justify-center items-center -z-10"
      >
        <div className="absolute border border-black/50 dark:border-[#333] mobile:w-[250px] mobile:h-[250px]  w-[500px] h-[500px] rounded-full" />
        <div className="absolute border opacity-20 animate-pulse border-black/50 dark:border-[#333] mobile:w-[300px] mobile:h-[300px] w-[650px] h-[650px] rounded-full" />
        <div className="absolute border border-black/50 dark:border-[#333] mobile:w-[350px] mobile:h-[350px] w-[800px] h-[800px] rounded-full" />
      </motion.div>
      <div className="flex flex-col items-center">
        <div className="animate-bounce">
          <Image src="/Logo.png" width={200} height={200} alt="logo" />
        </div>
        <p className="text-4xl my-10">أهلا بكم في المهدي للمأكولات البحرية</p>
        <Link href="/menu">
          <button
            type="button"
            className="cursor-pointer text-3xl p-2 rounded-xl bg-primary hover:opacity-75 hover:scale-110 transition-all duration-300"
          >
            قائملة الاسعار
          </button>
        </Link>
      </div>
    </motion.section>
  );
}
