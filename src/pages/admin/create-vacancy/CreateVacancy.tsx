import { ChangeEvent, useState } from "react";
import "./CreateVacancy.scss";
import DashboardContentHeader from "../../../utils/dashboard-content-header/DashboardContentHeader";
import RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";

const CreateVacancy = () => {
  const [phone, setPhone] = useState<string>("");
  const [startSalary, setStartSalary] = useState<string>("");
  const [toSalary, setToSalary] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [softSkills, setSoftSkills] = useState<string>("");
  const [time, setTime] = useState({ start: "", end: "" });
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [newTechnology, setNewTechnology] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
    console.log(selectedDays);
    console.log(phone);


    const formatSalary = (value: string) => {
      const numericValue = value.replace(/\D/g, ""); // Faqat raqamlar
      return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // 3 xonadan keyin nuqta
    };
  
    const handleStartSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStartSalary(formatSalary(e.target.value));
    };
    const handleToSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
      setToSalary(formatSalary(e.target.value));
    };
  
    
    
  const handleTimeChange = (e: any) => {
    const { name, value } = e.target;
    setTime({ ...time, [name]: value });
  };

  const handleDaysChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedDays((prev) =>
      checked ? [...prev, value] : prev.filter((day) => day !== value)
    );
  };

  const addTechnology = () => {
    if (newTechnology.trim() && !technologies.includes(newTechnology)) {
      setTechnologies([...technologies, newTechnology.trim()]);
      setNewTechnology("");
    }
  };

  const removeTechnology = (tech: string) => {
    setTechnologies(technologies.filter((t) => t !== tech));
  };


  const handleCreateVacancy = (e: any) => {
    e.preventDefault();
    const vacancyData = {
      job_title: jobTitle,
      phone_number: phone,
      start_salary: startSalary,
      to_salary: toSalary,
      soft_skills: softSkills,
      start_time: time.start,
      end_time: time.end,
      days: selectedDays,
      technologies: technologies,
    };
    console.log(vacancyData);
    
    }

  return (
    <div className="add-vacancy">
      <DashboardContentHeader title="Vakansiya yaratish" />
      <div className="vacancy__form-wrapper">
        <form onSubmit={handleCreateVacancy} className="admin__vacancy-form">
          <h3 className="form-title">Vakansiya yaratish</h3>

           <div className="form-item">
           <label className="form-label">
              Mas'ul Shaxs
              <input required type="text" placeholder="Mas'ul Shaxs nomi" />
            </label>
              {/* Job Title */}
          <label className="form-label">
            Job Title
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job Title (Frontend, Backend, etc.)"
            />
          </label>
           </div>
          <div className="form-item">
          <label className="form-label">
            Telefon raqam
            <RPNInput
              onChange={(value) => setPhone(value ?? "")}
              international
              flags={flags}
              placeholder="Telefon raqamni kiriting"
              defaultCountry="UZ"
              className="phone-input"
            />
          </label>
            <label htmlFor="" className="form-label">
              Elektron pochta
              <input type="email" placeholder="Elektron pochta" />
            </label>
          </div>


          {/* Ish turi va vaqti */}
          <div className="form-item">
            <label className="form-label">
              Ish joyi turi
              <select>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="on-site">On-site</option>
              </select>
            </label>
            <label className="form-label">
              Ish vaqti turi
              <select>
                <option value="full-time">Full time</option>
                <option value="part-time">Part time</option>
                <option value="contract">Contract</option>
              </select>
              
            </label>
            <label className="form-label">
              Maosh  boshlanish (so'mda)
              <input
                type="text"
                value={startSalary}
                onChange={handleStartSalaryChange}
                placeholder="Maoshni kiriting..."
              />
            </label>
            <label className="form-label">
              Maosh gacha...
              <input
                type="text"
                value={toSalary}
                onChange={handleToSalaryChange}
                placeholder="Maoshni kiriting..."
              />
            </label>
          </div>

          {/* Boshlanish va Tugash vaqti */}
          <div className="form-item">
            <label className="form-label">
              Boshlanish vaqti
                <input
                  type="time"
                  name="start"
                  value={time.start}
                  onChange={handleTimeChange}
                  required
                  />
                  </label>
                <span>-</span>
                <label htmlFor="" className="form-label">
                    Tugash vaqti
                <input
                  type="time"
                  name="end"
                  value={time.end}
                  onChange={handleTimeChange}
                  required
                  />
                  </label>
          </div>

          {/* Hafta kunlari */}
          <label className="form-label">
            Hafta kunlari
            <div className="weekdays">
              {["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"].map(
                (day) => (
                  <label key={day}>
                    <input
                      type="checkbox"
                      value={day}
                      onChange={handleDaysChange}
                    />
                    {day}
                  </label>
                )
              )}
            </div>
          </label>

          {/* Texnologiyalar */}
          <label className="form-label">
            Texnologiyalar
            <div className="technologies">
              <input
                type="text"
                value={newTechnology}
                onChange={(e) => setNewTechnology(e.target.value)}
                placeholder="Texnologiyani kiriting"
              />
              <button
                type="button"
                className="add-tech-btn"
                onClick={addTechnology}
              >
                Qo'shish +
              </button>
            </div>
            <div className="tech-list">
              {technologies.map((tech) => (
                <button
                  type="button"
                  key={tech}
                  className="tech-item"
                  onClick={() => removeTechnology(tech)}
                >
                  {tech} ✕
                </button>
              ))}
            </div>
          </label>

          {/* Soft Skills */}
          <label className="form-label">
            Soft Skills
            <textarea
              value={softSkills}
              onChange={(e) => setSoftSkills(e.target.value)}
              placeholder="Soft skills yozing..."
              rows={4}
            />
          </label>

          <button type="submit" className="create-btn">Yaratish +</button>
        </form>
      </div>
    </div>
  );
};
export default CreateVacancy;

