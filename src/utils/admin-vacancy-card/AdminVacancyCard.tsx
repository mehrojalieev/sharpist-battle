import { FaCalendarAlt } from "react-icons/fa"
import "./AdminVacancyCard.scss"
import { IoMdTime } from "react-icons/io"
import { GiMoneyStack } from "react-icons/gi"
import { Link } from "react-router-dom"
import { useState } from "react"
const AdminVacancyCard = ({adminVacancy}: any) => {

  const [isDeleted, setIsDeleted] = useState<boolean>(false)

  return isDeleted ? null : (
    <div  className="admin__vacancy-card">
        <h3 className="job-title">{adminVacancy.job_title}</h3>
        <div className="date-action">
            <div className="day-item">
                <i><FaCalendarAlt /></i>
                <span>{adminVacancy.from_day}</span>
                <span>-</span>
                <span>{adminVacancy.to_day}</span>
            </div>
            <div className="day-item">
                <i><IoMdTime /></i>
                <span>{adminVacancy.from_time}</span>
                <span>-</span>
                <span>{adminVacancy.to_time}</span>
            </div>
        </div>
        <div className="salary-action">
        <p> <i className="money-icon"><GiMoneyStack /></i>  Maosh:</p>
            <span className="salary">{adminVacancy.salary}</span>
        </div>
        <div className="card-action">
          <Link to={`result/${adminVacancy.id}`} className="more-btn">Batafsil</Link>
          <button onClick={() => setIsDeleted(true)}  className="delete-btn">O'chirish</button>
        </div>
    </div>
  )
}

export default AdminVacancyCard
