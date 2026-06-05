import { Link } from "react-router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import DocCard from "./DocCard";
import DataTable2 from "../../../components/Common-Sections/datatables/DataTable2";
import PageTitle from "../../../components/Common-Sections/PageTitle";
function DoctorListPage () {
   const [view, setView] = useState("grid");
    return (
        <>
         <PageTitle title="HC-ERP-Doctor List"/>
       <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">Doctor's List</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-bold text-dark-primary"><Link to="/">Home</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Doctor's List </p>
          </div>
          <div className="d-flex justify-content-start gap-1 flex-wrap">
            <Link to="/adddoctor" className="btn btn-primary me-1 mw-120 py-2 px-4 rounded-pill text-capitalize me-1">
             <i className="bi bi-plus-circle me-2"></i>   Add New doctor</Link>
            <button className="btn btn-danger rounded-pill rounded-pill px-4 me-1" onClick={() => setView("grid")} id="grid">
              <i className="bi bi-grid-1x2-fill px-2"></i>
            </button>
            <button className="btn btn-success me-1 rounded-pill px-4" onClick={() => setView("list")} id="list">
                <FontAwesomeIcon icon={faListUl} className="fs-18" />
            </button>
          </div>
        </div>

        {/* <!-- list view --> */}
        <div className={ `${view === "list" ? "list-show" : "list-show d-none"} bg-white rounded-10 my-3 p-4`}>
           <DataTable2/>
        </div>

        {/* <!-- grid view --> */}
          <div className={ `${view === "grid" ? "list-hide" : "list-hide d-none"} doctor-list my-3 py-4 `}>
            <div className="row">
              <DocCard/>
            </div>
        </div>
      </div>
        </>
    );
}
export default DoctorListPage;