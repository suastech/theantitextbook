import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Explanation from './pages/Explanation'
import Example from './pages/Example'

function App() {
  <nav>
  <NavLink to="/">Explanation</NavLink> | 
  <NavLink to="/home"> Home Page Simulation</NavLink> | 
  <NavLink to="/example"> Myth Example</NavLink>
</nav>

  return (
    <>
      <nav>
  <NavLink to="/">Explanation</NavLink> | 
  <NavLink to="/home">Home Page Simulation</NavLink> | 
  <NavLink to="/example">Myth Example</NavLink>
</nav>
     
     <Routes>
        <Route path="/" element={<Explanation/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/example" element={<Example/>}/>
     </Routes>
     
    </>
  )
}

export default App
