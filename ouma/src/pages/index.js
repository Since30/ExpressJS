import React from "react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Project from "@/components/Project";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Project />
      <Donate />
      <Footer />
    </>
  );
}
