import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import VacancyDetail from './pages/vacancy-detail/VacancyDetail'
import Admin from './pages/admin/Admin'
import CreateVacancy from './pages/admin/create-vacancy/CreateVacancy'

function App() {

  return (
    <>
      <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/vacancy-detail/:id' element={<VacancyDetail/>}/>
    <Route path='admin' element={<Admin/>}>
        <Route index path='create-vacancy' element={<CreateVacancy/>}/>
    </Route>
   </Routes>
    </>
  )
}

export default App
