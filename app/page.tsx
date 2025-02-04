"use client";
import Footer from "./Components/Organisms/Footer/Footer";
import Hero from "./Components/Organisms/HeroSection/HeroSection";
import Main from "./Components/Organisms/Main/Main";
import { useState } from "react";
const Page = () => {
  const [scroll, setScroll] = useState(false);

  return (
    <div className="w-full h-full scroll-container ">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default Page;
