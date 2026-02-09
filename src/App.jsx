import './App.css'
import Navbar from './component/common/navbar/Navbar'
import Footer from './component/common/footer/Fotter'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Location from './component/location/Location'
import HeroPage from './pages/hero/HeroPage'
import AboutPage from './pages/about/AboutPage'
import GalleryPage from './pages/gallery/GalleryPage'
import FacilitiesPage from './pages/facilities/FacilitiesPage'
import ContactPage from './pages/contact/Contact'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
      Aos.init({
        duration:1000,
        easing: 'ease-in-out'
      });

  },[])
  return (
    <>   
     <BrowserRouter>
     <Navbar />
     <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
