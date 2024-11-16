import { FaCalendarAlt } from "react-icons/fa"
import "./AdminVacancyCard.scss"
import { IoMdTime } from "react-icons/io"
import { GiMoneyStack } from "react-icons/gi"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const AdminVacancyCard = ({adminVacancy}: any) => {

  const [isDeleted, setIsDeleted] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)

  const handleDeleteVacancy = () => {
    setTimeout(() => {
      setIsDeleted(true)
      setDeleteModal(false)
    }, 1000)
   
  }

  useEffect(() => {
    isDeleted && toast.success("Vakansiya o'chirildi", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    })
  }, [isDeleted])


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
          <button onClick={() => setDeleteModal(true)}  className="delete-btn">O'chirish</button>
        </div>
       

       {/*Delete Modal  */}
       <div style={deleteModal ?{transform: "scale(1)"}:{transform: "scale(0)"}} className="vacancy__delete-modal__overlay">
         <div className="vacancy__delete-modal">
           <h3 className="vacancy__delete-modal__title"> O'chirishni tasdiqlaysizmi?</h3>
           <div className="vacancy__delete-modal__buttons">
             <button onClick={() => setDeleteModal(false)} className="vacancy__delete-modal__cancel-btn">Bekor qilish</button>
             <button onClick={handleDeleteVacancy} className="vacancy__delete-modal__confirm-btn">O'chirish</button>
           </div>
         </div>
       </div>
    </div>
  )
}

export default AdminVacancyCard
