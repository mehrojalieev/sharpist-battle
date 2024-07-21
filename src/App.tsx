import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
    </>
  )
}

export default App
