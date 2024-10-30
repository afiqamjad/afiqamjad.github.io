import './App.css'
import Navbar from './Navbar.jsx'
import About from './About.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className='intro'>
        <h1>Hi, I'm Afiq.</h1>
        <h2>A web developer and self-proclaimed photographer.</h2>
      </div>
      <About />
    </>
  )
}

export default App
