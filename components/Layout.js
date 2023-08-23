import React from "react";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Elmahdy Seafood</title>
        <meta name="description" content="Elmahdy for all types of seafood" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <main>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </main>
    </>
  );
};

export default Layout;
