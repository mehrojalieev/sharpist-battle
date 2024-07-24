import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import VacancyDetail from './pages/vacancy-detail/VacancyDetail'
import Admin from './pages/admin/Admin'
import CreateVacancy from './pages/admin/admin-vacancies/AdminVacancies'
import VacanciesResult from './pages/admin/admin-vacancies/vacancies-result/VacanciesResult'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vacancy-detail/:id' element={<VacancyDetail />} />
        <Route path='admin' element={<Admin />}>
          <Route index path='admin-vacancies' element={<CreateVacancy />} />
          <Route path='admin-vacancies/result/:id' element={<VacanciesResult />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
