import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Dot from "./components/Dot/Dot"
import Footer from "./components/Footer/Footer"
import GoToTop from "./components/GoToTop/GoToTop"
import Hero from "./components/Hero/Hero"
import MyWork from "./components/MyWork/MyWork"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Skills from "./components/Skills/Skills"
// import SnakeLine from "./components/snakeline/Snakeline"

function App() {

  return (
    <>
      <Dot />
      {/* <SnakeLine /> */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
      <GoToTop />
    </>
  )
}

export default App
