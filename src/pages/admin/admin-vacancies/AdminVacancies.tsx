import DashboardContentHeader from "../../../utils/dashboard-content-header/DashboardContentHeader"
import { IoSearch } from "react-icons/io5";
import "./AdminVacancies.scss"
import AdminVacancyCard from "../../../utils/admin-vacancy-card/AdminVacancyCard";
import { ChangeEvent, useEffect, useState } from "react";
import AddAdminVacancyModal from "../../../utils/add-admin-vacancy-modal/AddAdminVacancyModal";
const CreateVacancy = () => {
  const VacanciesData = [
    {
      id: 1,
      job_title: "Backend Developer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "10 000 000 - 25 000 000",
    },
    {
      id: 2,
      job_title: "Frontend Developer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "8 000 000 - 20 000 000",
    },
    {
      id: 3,
      job_title: "Mobile Developer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "9 000 000 - 22 000 000",
    },
    {
      id: 4,
      job_title: "Graphics Designer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "6 000 000 - 15 000 000",
    },
    {
      id: 5,
      job_title: "Full Stack Developer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "12 000 000 - 30 000 000",
    },
    {
      id: 6,
      job_title: "UI/UX Designer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "7 000 000 - 18 000 000",
    },
    {
      id: 7,
      job_title: "Android Developer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "9 500 000 - 23 000 000",
    },
    {
      id: 8,
      job_title: "iOS Developer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "9 500 000 - 23 000 000",
    },
    {
      id: 9,
      job_title: "React Developer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "10 000 000 - 25 000 000",
    },
    {
      id: 10,
      job_title: "Node.js Developer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "10 000 000 - 25 000 000",
    },
    {
      id: 11,
      job_title: "PHP Developer",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "8 000 000 - 20 000 000",
    },
    {
      id: 12,
      job_title: "Graphics Illustrator",
      from_day: "DUSHANBA",
      to_day: "JUMA",
      from_time: "09:00",
      to_time: "18:00",
      salary: "6 000 000 - 15 000 000",
    }
  ];



  const [searchValue, setSearchValue] = useState<string>("")
  const [AllVacancies, setAllVacancies] = useState<any>([])
const [openAddVacancyModal, setOpenAddVacancyModal] = useState<boolean>(false)
  useEffect(() => {
    if (searchValue.length > 0) {
      const searchedVacancies = VacanciesData.filter((vacancy) => vacancy.job_title.toLowerCase().includes(searchValue.toLowerCase()))
      setAllVacancies(searchedVacancies)
    }
    else {
      setAllVacancies(VacanciesData)
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
          <button onClick={() => setOpenAddVacancyModal(true)} className="add__vacancy-btn" type="button">Qo'shish +</button>
          <AddAdminVacancyModal openAddVacancyModal={openAddVacancyModal} setOpenAddVacancyModal={setOpenAddVacancyModal}/>
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

export default CreateVacancy
