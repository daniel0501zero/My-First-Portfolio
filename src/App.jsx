import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import MyWork from "./Components/MyWork/MyWork"
import Footer from "./Components/Footer/Footer"
import ThemeToggle from "./Components/ThemeToggle/ThemeToggle"
import { StarBackground } from "./Components/StarBackground"
import { Skills } from "./Components/Skills/Skills"

const App = () => {

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground/>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <MyWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
};
export default App;
