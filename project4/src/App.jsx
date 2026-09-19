import './App.css'
import Navbar from './components/Navbar'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help' 


function App() {
  

  return (
    <>

   <Navbar/> 
   
      
    <Routes>


      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/help' element={<Help />} />
    </Routes>


      
    </>
  )
}

export default App
