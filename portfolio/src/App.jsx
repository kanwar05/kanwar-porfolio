import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Prjoect from "./components/sections/Prjoect";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Fotter from "./components/layout/Fotter";
import Certifications from "./components/sections/Certifications";
import Education from "./components/sections/Education";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Navbar/>
        <main>
          <Hero/>
          <About/>
          <Education/>
          <Skills/>
          <Prjoect/>
          <Services/>
          <Certifications/>
          {/* <Testimonials/> */}
          <Contact/>
        </main>
          <ScrollToTop
            smooth
            style={{backgroundColor: "#F39C12", color: "#060606", border: "none",paddingLeft:'6px', borderRadius: "8px"}}
          />
        <Fotter/>
      </div>
    </>
  )
}

export default App
