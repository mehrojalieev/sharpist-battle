import "./VacancyCard.scss"
import { FaCalendarAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
const VacancyCard = ({ vacancy }: any) => {
    return (
        <div className="vacancy-card">
            <h3 className="job-title">{vacancy.job_title}</h3>
            <div className="date-action">
                <div className="day-item">
                    <i><FaCalendarAlt /></i>
                    <span>{vacancy.from_day}</span>
                    <span>-</span>
                    <span>{vacancy.to_day}</span>
                </div>
                <div className="day-item">
                    <i><FaCalendarAlt /></i>
                    <span>{vacancy.from_time}</span>
                    <span>-</span>
                    <span>{vacancy.to_time}</span>
                </div>
            </div>

            <div className="salary-item">
                <i className="money-icon"><GiMoneyStack /></i>
                <p className="salary">{vacancy.salary}</p>
                <i className="arrow-icon"><FaArrowRightLong /></i>
            </div>
        </div>
    )
}

export default VacancyCard