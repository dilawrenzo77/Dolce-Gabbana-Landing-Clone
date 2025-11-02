import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";
import MobileHero from "./components/MobileHero";
import Mobile5 from "./components/Mobile5";



export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <MobileHero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Mobile5 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
      <MobileFooter />
    </main>
  );
}
