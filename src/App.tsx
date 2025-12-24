import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import RouteLoader from './components/rootLoader'
import Contact from './Pages/Contact'

function App() {


  return (
      <RouteLoader>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about/" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
      </Routes>
      </RouteLoader>
  )
}

export default App
