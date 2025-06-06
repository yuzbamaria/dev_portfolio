import './App.css'
import Header from './components/Header';

function App() {

   return (
    <>
      <Header navItems={["Home", "About", "Projects", "Contact"]}/>
      <h1>Portfolio</h1>
    </>
  )
}

export default App;
