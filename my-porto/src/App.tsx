// import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

function App() {

  return (
    <div className="font-sans w-full h-screen ">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>

  )
}

export default App
