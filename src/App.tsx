import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import VacancyDetail from './pages/vacancy-detail/VacancyDetail'
import Admin from './pages/admin/Admin'
import VacanciesResult from './pages/admin/admin-vacancies/vacancies-result/VacanciesResult'

import CreateVacancy from './pages/admin/create-vacancy/CreateVacancy.tsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import AdminVacancies from './pages/admin/admin-vacancies/AdminVacancies.tsx'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vacancy-detail/:id' element={<VacancyDetail />} />


        <Route path='admin' element={<Admin />}>
          <Route index path='admin-vacancies' element={<AdminVacancies />} />
          <Route path='admin-vacancies/result/:id' element={<VacanciesResult />} />
          <Route path='create-vacancy' element={<CreateVacancy/>}/>
        </Route>

      </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
