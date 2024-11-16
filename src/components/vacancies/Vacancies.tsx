import Aos from "aos"
import VacancyCard from "../../utils/vacancy-card/VacancyCard"
import "./Vacancies.scss"
import { useEffect } from "react"
import VacanciesDB from "../../db/vacancies.json"
const Vacancies = () => {
    useEffect(() => {
        Aos.init()
      }, [])

       
  return (
    <main className="vacancies container">
        <div data-aos-delay="700" data-aos-duration="850" data-aos="fade-right" className="vacancy__cards-wrapper">
            {
                VacanciesDB.vacancies.map((vacancy) => 
                    <VacancyCard vacancy={vacancy}/>
                )
            }
        </div>
    </main>
  )
}

export default Vacancies
