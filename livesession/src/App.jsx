import Brands from "./components/Brands"
import Features from "./components/Features"
import Help from "./components/Help"
import Hero from "./components/Hero"
import Integrate from "./components/Integrate"
import Navbar from "./components/Navbar"
import Private from "./components/Private"
import Brand from "./components/Brand"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"
import FooterLinks from "./components/FooterLinks"

function App() {

  return (
    <div className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-[30px] py-[40px]">
        <Navbar />
        <Hero />
        <Brands />


      </div>
      <Help />
      <div className="max-w-7xl mx-auto px-[30px] py-[40px]">
        <Features />
      </div>
      <Private />
      <div className="max-w-7xl mx-auto px-[30px] py-[40px]">
        <Brand />
      </div>
      <div className="max-w-7xl mx-auto px-[30px] py-[40px]">
        <Integrate />
      </div>

      <div className="max-w-7xl mx-auto px-[30px] py-[40px]">
        <Testimonial />
        <FooterLinks />
      </div>

      <Footer />

    </div>
  )
}

export default App
