import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import FoodProcessing from './pages/FoodProcessing.jsx'
import Manufacturing from './pages/Manufacturing.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/food-processing" element={<FoodProcessing />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App