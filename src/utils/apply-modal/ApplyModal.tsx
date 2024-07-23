import { ChangeEvent, useState } from "react";
import "./ApplyModal.scss"
import { Modal } from 'antd';
import { FaLink } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import { TiArrowSortedDown } from "react-icons/ti";
const ApplyModal = ({openApplyModal, setOpenApplyModal} : any) => {
  const [number, setNumber] = useState<string>("")
  const [showSelectJobs, setShowSelectJobs] = useState(false);
  const [selectedJob, setSelectedJob] = useState('Frontend Developer');
;

  const jobsoption = [
    "Backend Developer",
    "Frontend Developer",
    "Mobile Developer",
    "Fullstack Developer",
  ]
  return (
    <Modal className="apply-modal" open={openApplyModal} footer={null} onCancel={() => setOpenApplyModal(false)} cancelText="none" cancelButtonProps={{ style: { display: 'none' } }} >
      <i onClick={() => setOpenApplyModal(false)} className="close__modal-icon"><IoMdClose /></i>
      <form className="modal__content-form">
        <div className="form-item">
          <label htmlFor="name">F.I.SH
            <input type="text" id="name" placeholder="Ismingizni kiriting" />
          </label>
          <label className="number-label" htmlFor="number">Elektron pochta
            <input className="number-input" placeholder="Elektron pochtangiz" value={number} onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)} type="email" id="name" />
          </label>
        </div>

        <div className="form-item">
          <div onClick={() => setShowSelectJobs(!showSelectJobs)} className="select-job">
            <p>{selectedJob}</p>
            <i style={showSelectJobs ? { transform: "rotate(-180deg)", marginTop: "-8px" } : {}} className="arrow-icon"><TiArrowSortedDown /></i>
            <div style={showSelectJobs ? { display: "block" } : { display: "none" }} className="select__job-dropdown">
              {
                jobsoption.map((item, index) => (
                  <p onClick={() => setSelectedJob(item)} key={index}>{item}</p>
                ))
              }
            </div>
          </div>
          <label className="upload-label" htmlFor="file" >
          <input  className="upload-input" type="file" id="file"  />
          <i className="upload-icon"><FaLink /></i>
          </label>
        </div>


        <button className="send-btn">Ariza yuborish <i><IoRocketSharp /></i></button>
      </form>
    </Modal>

  )
}

export default ApplyModal
