import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Rf from './pages/Rf'



function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/registration" element={<Rf/>}/>
      </Routes>
      
    </>
  )
}

export default App
