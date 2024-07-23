import "./VacancyDetail.scss"
import { FaFacebookF,   FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCalendarAlt , FaLongArrowAltRight} from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import ApplyModal from "../../utils/apply-modal/ApplyModal";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const VacancyDetail = () => {
    const VacancyDetail = {
        id: 1,
        job_title: "Backend Developer",
        from_day: "DUSHANBA",
        to_day: "JUMA",
        from_time: "09:00",
        to_time: "18:00",
        salary: "10 000 000 - 25 000 000",
        demanding_content: [
            "Kengaytiriladigan interfeys komponentlarini yaratish va qo'llab-quvvatlash;",
            "Frontend qismini backend xizmatlari va API bilan birlashtirish;",
            "Ishlashni optimallashtirish va foydalanuvchi tajribasini yaxshilash;",
            "Loyihaning umumiy maqsadlariga erishish uchun dizaynerlar va boshqa jamoa a'zolari bilan yaqin hamkorlik."
        ],
        skills:[
            "Node.js,",
            "React.js,",
            "Angular,",
            "Express.js,",
            "MongoDB,",
            "PostgreSQL,",
            "Nest.js,",
            "Next.js,",
            "GraphQL,",
            "REST API"
        ]

    }
    
    const [openApplyModal, setOpenApplyModal] = useState<boolean>(false)
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <div>

        <div className="vacancy-detail container">
            <header className="detail-header">
                <h2 className="title">{VacancyDetail.job_title}</h2>
                <div className="header-action">
                            <div className="social-item">
                                <i><FaFacebookF/></i>
                                <i><FaXTwitter/></i>
                                <i><FaTelegramPlane/></i>
                            </div>
                            <div className="date-action">
                <div className="day-item">
                    <i><FaCalendarAlt /></i>
                    <span>{VacancyDetail.from_day}</span>
                    <span>-</span>
                    <span>{VacancyDetail.to_day}</span>
                </div>
                <div className="day-item">
                    <i><IoMdTime /></i>
                    <span>{VacancyDetail.from_time}</span>
                    <span>-</span>
                    <span>{VacancyDetail.to_time}</span>
                </div>
            </div>
                </div>
            </header>

            <div className="detail-body">
                <div className="demanding-contents">
                    <h4 className="demanding-title">Talablar</h4>
                    <div className="demanding-content">
                        {
                            VacancyDetail.demanding_content.map((item, index) => {
                                return (
                                    <p key={index}>{item}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="demanding-contents">
                    <h4 className="demanding-title">Talablar</h4>
                    <div className="demanding-content skill-content">
                        {
                            VacancyDetail.skills.map((item, index) => {
                                return (
                                    <p key={index}>{item}</p>
                                )
                            })
                        }
                    </div>
                </div>

                <button onClick={() => setOpenApplyModal(true)} className="resume__send-btn">
                    Rezyume yuborish
                    <i><FaLongArrowAltRight/></i>
                </button>
            </div>
        </div>
                        <ApplyModal openApplyModal={openApplyModal} setOpenApplyModal={setOpenApplyModal} />
        </div>

    )
}

export default VacancyDetail
