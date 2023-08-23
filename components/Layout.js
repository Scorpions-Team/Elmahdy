import React from "react";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>المهدي للمأكولات البحرية</title>
        <meta name="description" content="المهدي لجميع المأكولات البحرية" />
        <meta
          name="google-site-verification"
          content="OMH7wWSmsl7zK8fchGabFF0v5n4NVUoq7vkhYPNmr7Q"
        />
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
