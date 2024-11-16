import "./VacanciesResult.scss"
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { FaCalendarAlt, FaRegUser, FaUserTie } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import VacancyCard from "../../../../utils/vacancy-card/VacancyCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VacanciesDB from "../../../../db/vacancies.json"
const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Muvaffaqiyatli qabul qilingalar',
        children: <VacancyCard/>,
    },
    {
        key: '2',
        label: 'Rezyume qabul qilinmaganlar',
        children: 'Content of Tab Pane 2',
    },

];
const VacanciesResult = () => {

    const {id} = useParams()

    const [vacancyResult, setVacancyResult] = useState<any>(null)

    console.log(vacancyResult);
    

    useEffect(() => {
        const filteredVacancy = VacanciesDB?.vacancies?.filter((vacancy: any) => vacancy.id == id)
        setVacancyResult(filteredVacancy[0])
    }, [id])


    return (
        <div>
            <header className="result-header">
                <h3><i><FaRegUser /></i>{vacancyResult?.job_title} </h3>
                <div className="recruiter-item">
                    <p> <i><FaUserTie /></i> Masul shaxs:</p>
                    <h6>Asilbek Dilboboev</h6>
                    </div>
                <div className="result__date-item">
                    <p> <i className="calendar-icon"><FaCalendarAlt /></i> Ish vaqti</p>
                    <h6>
                    {vacancyResult?.from_day} - {vacancyResult?.to_day} | {vacancyResult?.from_time} - {vacancyResult?.to_time}
                    </h6>
                    </div>
                <div className="result__salary-item">
                    <p> <i className="money-icon"><GiMoneyStack /></i> Maosh:</p>
                    <h6 className="salary">{vacancyResult?.salary}</h6>
                </div>
            </header>


            <main className="result-main">
                <h3 className="main-title">Topshirgan Foydalanuvchilar ro'yxati</h3>
            </main>

            <Tabs  items={items} />
        </div>
    )
}

export default VacanciesResult
