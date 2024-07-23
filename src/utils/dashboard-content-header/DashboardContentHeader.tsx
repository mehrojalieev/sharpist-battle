import "./DashboardContentHeader.scss"
const DashboardContentHeader = ({title}: any) => {
  return (
    <div className="dashboard__content-header">
        <h2 className="title">{title}</h2>
    </div>
  )
}

export default DashboardContentHeader
