import "./VacanciesResult.scss"
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { FaCalendarAlt, FaRegUser, FaUserTie } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import VacancyCard from "../../../../utils/vacancy-card/VacancyCard";
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
    const ResultData = {
        id: 1,
        job_title: "Backend Developer",
        from_day: "Dushanba",
        to_day: "Juma",
        from_time: "09:00",
        to_time: "18:00",
        salary: "10 000 000 - 25 000 000",
    }
    return (
        <div>
            <header className="result-header">
                <h3><i><FaRegUser /></i>{ResultData.job_title} </h3>
                <div className="recruiter-item">
                    <p> <i><FaUserTie /></i> Masul shaxs:</p>
                    <h6>Asilbek Dilboboev</h6>
                    </div>
                <div className="result__date-item">
                    <p> <i className="calendar-icon"><FaCalendarAlt /></i> Ish vaqti</p>
                    <h6>
                    {ResultData.from_day} - {ResultData.to_day} | {ResultData.from_time} - {ResultData.to_time}
                    </h6>
                    </div>
                <div className="result__salary-item">
                    <p> <i className="money-icon"><GiMoneyStack /></i> Maosh:</p>
                    <h6 className="salary">{ResultData.salary}</h6>
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
