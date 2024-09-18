import { useEffect, useState } from "react"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import DarkModeToggle from "./components/DarkModeToggle"
import Dot from "./components/Dot/Dot"
import Footer from "./components/Footer/Footer"
import GoToTop from "./components/GoToTop/GoToTop"
import Hero from "./components/Hero/Hero"
import MyWork from "./components/MyWork/MyWork"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Skills from "./components/Skills/Skills"
import { ThemeContext } from "./context/theme"
// import SnakeLine from "./components/snakeline/Snakeline"

function App() {

  const [themeMode, setThemeMode] = useState('dark')
  const darkMode = () => {
    setThemeMode('dark')
  }
  const lightMode = () => {
    setThemeMode('light')
  }

  useEffect( () => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode] )


  return (
    <ThemeContext.Provider value={ {themeMode, darkMode, lightMode} } >
      <Dot />
      {/* <SnakeLine /> */}
      <DarkModeToggle />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
      <GoToTop />
    </ThemeContext.Provider>
  )
}

export default App
