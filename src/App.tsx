import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import RouteLoader from './components/rootLoader'

function App() {


  return (
      <RouteLoader>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about/" element={<About/>} />
      </Routes>
      </RouteLoader>
  )
}

export default App
