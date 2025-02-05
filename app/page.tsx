import Footer from "./Components/Organisms/Footer/Footer";
import Hero from "./Components/Organisms/HeroSection/HeroSection";
import Main from "./Components/Organisms/Main/Main";
const Page = () => {
  return (
    <div className="w-full h-full scroll-container ">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default Page;
