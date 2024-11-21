import DashboardContentHeader from "../../../utils/dashboard-content-header/DashboardContentHeader"
import { IoSearch } from "react-icons/io5";
import "./AdminVacancies.scss"
import AdminVacancyCard from "../../../utils/admin-vacancy-card/AdminVacancyCard";
import { ChangeEvent, useEffect, useState } from "react";
import VacanciesDB from "../../../db/vacancies.json"
const AdminVacancies = () => {

  const [searchValue, setSearchValue] = useState<string>("")
  const [AllVacancies, setAllVacancies] = useState<any>([])


  useEffect(() => {
    if (searchValue.length > 0) {
      const searchedVacancies = VacanciesDB.vacancies.filter((vacancy) => vacancy.job_title.toLowerCase().includes(searchValue.toLowerCase()))
      setAllVacancies(searchedVacancies)
    }
    else {
      setAllVacancies(VacanciesDB.vacancies)
    }
  }, [searchValue])


  return (
    <div>
      <DashboardContentHeader title="Barcha Vakansiyalar" />

      <main className="admin__vacancies-wrapper">
        {/* <h2 className="admin__vacancies-title">Barcha vakansiylar</h2> */}
        <header className="create__vacancy-header">
          <form className="search-form">
            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)} type="text" placeholder="Vakansiyalarni qidirish" />
            <button  type="submit"><IoSearch /></button>
          </form>
          {/* <button onClick={() => setOpenAddVacancyModal(true)} className="add__vacancy-btn" type="button">Qo'shish +</button> */}
        </header>
        <>
          {
            AllVacancies.length > 0 ?
              <div  className="admin__vacancies-cards">
                {
                  AllVacancies.map((vacancy: any) =>
                    <AdminVacancyCard key={vacancy.id} adminVacancy={vacancy} />
                  )
                }
              </div>
              :
              <div className="empty__vacancies-wrapper">
                <h3 className="empty__vacancies-title">
                  Vakansiyalar topilmadi !
                </h3>
              </div>
          }
        </>
      </main>
    </div>
  )
}

export default AdminVacancies
