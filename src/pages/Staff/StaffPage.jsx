import { Link } from "react-router"
import "bootstrap-icons/font/bootstrap-icons.css";
import StafListTable from "./StafListTable";
import EditModal from "./StafModal/EditModal";
import AddModal from "./StafModal/AddModal";
import DeleteModal from "./StafModal/DeleteModal";
import PageTitle from "../../components/Common-Sections/PageTitle";
function StaffPage () {
     return (
        <>
         <PageTitle title="HC-ERP-Staff List"/>
    <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">Staff List</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-bold text-dark-primary"><Link to="/">Home</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i> 
            <p className="mb-0 pb-0 text-dark">Staff List</p>
          </div>
          <Link to="#"
            className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize mw-120"
            data-bs-toggle="modal" data-bs-target="#addstaffmodal"> <i className="bi bi-plus-circle me-2"></i> Add staff</Link>
        </div>
        <div className="bg-white p-4  rounded-10 shadow-sm">
            <StafListTable/>
        </div>
      </div>
      <EditModal/>
      <AddModal/>
      <DeleteModal/>
        </>
     );
}
export default StaffPage