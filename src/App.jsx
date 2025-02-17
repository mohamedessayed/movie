import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import Home from './components/Landing/Home'
import Movie from './components/Movie/Movie'
import People from './components/People/People'
import Tv from './components/Tv/Tv'
import { MovieContextProvider } from './context/MovieContext'

function App() {

  return <>
    <Navbar />
    <Routes>
      <Route index element={<MovieContextProvider><Home /></MovieContextProvider>} />
      <Route path='/movie' element={<MovieContextProvider><Movie /></MovieContextProvider>} />
      <Route path='/people' element={<People />} />
      <Route path='/tv' element={<Tv />} />
    </Routes>
    <Footer />
  </>

}

export default App
