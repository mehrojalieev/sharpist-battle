import VacancyCard from "../../utils/vacancy-card/VacancyCard"
import "./Vacancies.scss"
const Vacancies = () => {


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
    
    

  return (
    <main className="vacancies container">
        <div className="vacancy__cards-wrapper">
            {
                VacanciesData.map((vacancy) => 
                    <VacancyCard vacancy={vacancy}/>
                )
            }
        </div>
    </main>
  )
}

export default Vacancies
