import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import VacancyDetail from './pages/vacancy-detail/VacancyDetail'

function App() {

  return (
    <>
      <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/vacancy-detail/:id' element={<VacancyDetail/>}/>
   </Routes>
    </>
  )
}

export default App
