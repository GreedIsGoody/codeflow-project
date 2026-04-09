import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
