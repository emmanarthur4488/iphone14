import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Store from './Components/Pages/Store/Store'
import Mac from './Components/Pages/Mac/Mac'
import Ipad from './Components/Pages/Ipad/Ipad'
import Iphone from './Components/Pages/Iphone/Iphone'
import Watch from './Components/Pages/Watch/Watch'
import Airpods from './Components/Pages/Airpods/Airpod'
import Tv from './Components/Pages/Tv/Tv'
import Apple from './Components/Pages/Apple/Apple'
import Accessories from './Components/Pages/Accessories/Accessories'
import Support from './Components/Pages/Support/Support'
import Wow from './Components/Wow/Wow'
import Card from './Components/Card/Card'
import IphoneCard from './Components/IphoneCard/IphoneCard'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Gallery from './Components/Gallery/Gallery'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/store' element={<Store/>}/>
          <Route path='/mac' element={<Mac/>}/>
          <Route path='/ipod' element={<Ipad/>}/>
          <Route path='/iphone' element={<Iphone/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='/airpods' element={<Airpods/>}/>
          <Route path='/tv' element={<Tv/>}/>
          <Route path='/apple' element={<Apple/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path='/support' element={<Support/>}/>
          
        </Routes>
        <Hero/>
        <Wow/>
        <Card/>
        <IphoneCard/>
        <Gallery/>
      </BrowserRouter>
    </>
  )
}

export default App
