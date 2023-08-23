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
      className="flex flex-col justify-center items-center w-screen h-screen relative overflow-hidden"
    >
      <motion.div
        variants={circleVariants}
        initial="hide"
        animate="show"
        className="absolute flex justify-center items-center -z-10"
      >
        <div className="absolute border border-black/50  mobile:w-[250px] mobile:h-[250px]  w-[500px] h-[500px] rounded-full" />
        <div className="absolute border opacity-20 animate-pulse border-black/50  mobile:w-[300px] mobile:h-[300px] w-[650px] h-[650px] rounded-full" />
        <div className="absolute border border-black/50  mobile:w-[350px] mobile:h-[350px] w-[800px] h-[800px] rounded-full" />
      </motion.div>
      <div className="flex flex-col items-center">
        <div className="animate-bounce">
          <Image
            src="/Logo.png"
            width={200}
            height={200}
            alt="logo"
            className="w-[100px] h-[100px] md:w-auto md:h-auto"
          />
        </div>
        <p className="md:text-4xl text-xl my-10">
          أهلا بكم في المهدي للمأكولات البحرية
        </p>
        <Link href="/menu">
          <button
            type="button"
            className="cursor-pointer md:text-3xl text-lg p-2 rounded-xl bg-primary hover:opacity-75 hover:scale-110 transition-all duration-300"
          >
            قائملة الاسعار
          </button>
        </Link>
      </div>
      <p className="absolute bottom-0 left-0 w-full p-4 text-center">
        شارع زين العابدين بجوار البان خوخة:{" "}
        <a href="tel:033907291">033907291</a> -{" "}
        <a href="tel:01030106740">01030106740</a> -{" "}
        <a href="tel:01229130557">01229130557</a> -{" "}
        <a href="tel:01555338818">01555338818</a>
      </p>
    </motion.section>
  );
}
