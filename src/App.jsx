import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
