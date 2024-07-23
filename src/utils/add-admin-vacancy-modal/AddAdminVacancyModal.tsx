import "./AddAdminVacancyModal.scss"
import { ChangeEvent, useState } from "react";
import { IoMdClose } from "react-icons/io";
const AddAdminVacancyModal = ({openAddVacancyModal, setOpenAddVacancyModal}: any) => {

    console.log(openAddVacancyModal);
    
    const [time, setTime] = useState({ hours: '', minutes: '' });
    const [salaryType, setSalaryType] = useState("maosh");
    const handleTimeChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'hours' && (value < 0 || value > 23)) return;
        if (name === 'minutes' && (value < 0 || value > 59)) return;
        setTime({ ...time, [name]: value });
    };

    const formatTime = (value: any) => {
        return value < 10 ? `0${value}` : value;
    };
    return (
        <div style={openAddVacancyModal ? {transform: "scale(1)"} : {transform: "scale(0)"}} className="add__admin-vacancy__overlay">
            <i className="close__modal-btn"><IoMdClose onClick={() => setOpenAddVacancyModal(false)} /></i>
            <form className="admin__vacancy-form">
                <h3 className="form-title">Vakansiya ya ratish</h3>
                <label className="form-label"> Mas'ul Shaxs
                    <input required type="text" placeholder="Mas'ul Shaxs nomi" />
                </label>
                <label className="form-label"> Telefon raqam
                    <input required type="number" placeholder="Telefon raqam: +998" />
                </label>
                <div className="form-item">
                    <label className="form-label">Ish joyi turi
                        <select>
                            <option value="remote">Remote</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="on-site">On-site</option>
                        </select>
                    </label>
                    <label className="form-label">Ish vaqti turi
                        <select>
                            <option value="remote">Full time</option>
                            <option value="hybrid">Part time</option>
                            <option value="on-site">Contract</option>
                        </select>
                    </label>
                </div>

                <div className="form-item">
                    <label className="form-label">Boshlanish kuni
                        <input required className="day-input" type="text" placeholder="Masalan: Dushanba" />
                    </label>
                    <label className="form-label">Tugash kuni
                        <input required className="day-input" type="text" placeholder="Masalan: Shanba" />
                    </label>
                </div>
                <div className="time-item">
                    <label className="form-label">  Soat:
                        <input required type="number" name="hours" value={time.hours} onChange={handleTimeChange} placeholder="HH" min="0" max="23" />
                    </label>
                    <label className="form-label"> Minut:
                        <input required type="number" name="minutes" value={time.minutes} onChange={handleTimeChange} placeholder="MM" min="0" max="59" />
                    </label>
                    <p> Ish vaqti: {formatTime(time.hours)}:{formatTime(time.minutes)}  </p>
                </div>
                <div className="form__salary-item">
                    <label htmlFor="">Maosh turi</label>
                    <div className="salary__item-select">
                        <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setSalaryType(e.target.value)}>
                            <option value="oylik">Oylik</option>
                            <option value="amaliyot">Amaliyot</option>
                        </select>
                        {
                            salaryType === "oylik" ?  <input required type="text" placeholder="Exp: 6 000 000 - 10 000 000" /> : null
                        }
                    </div>
                </div>
                <button className="create-btn">Yaratish + </button>
            </form>
        </div>
    )
}

export default AddAdminVacancyModal
