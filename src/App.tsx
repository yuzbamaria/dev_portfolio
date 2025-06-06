import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Action from './components/Action';
import Footer from './components/Footer';

function App() {

   return (
    <>
      <Header navItems={["Home", "About", "Projects", "Contact"]}/>
      <Hero />
      <About />
      <Projects />
      <Action />
      <Footer />
    </>
  )
}

export default App;
