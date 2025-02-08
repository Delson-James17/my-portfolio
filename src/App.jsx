import Home from './pages/Home';
import NavBar from './components/Navbar';
import Skills from './components/Skills';
import Expireince from './components/Experience';
import Contact from './pages/Contact';
import Footer from './components/Footer'
import Project from './components/Projects'
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Skills/>
      <Expireince/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
