import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router"
import Table1 from "./DocTables/Table1";
import Table2 from "./DocTables/Table2";
import Table3 from "./DocTables/Table3";
import Table4 from "./DocTables/Table4";
import DocInfo from "./DocInfomation/DocInfo";
import DocSettingForm from "./DocInfomation/DocSettingForm";
import PageTitle from "../../../components/Common-Sections/PageTitle";
function DoctorProfilePage(){
    return(
        <>
         <PageTitle title="HC-ERP-Doctor Profile"/>
      <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">Doctor profile</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-600 text-dark-primary"><Link to="/">Home</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 fw-600 text-dark"><Link to="/doctorlist">Doctor's List</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Doctor Profile</p>
          </div>
          <Link to="/doctorlist"
            className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize">Back To Doctor
            List <FontAwesomeIcon icon={faArrowRightToBracket} className="ms-2"/> </Link>
        </div>
        <div className="bg-white rounded-10 mb-4 overflow-hidden">
          <div className="doct-profile-banner"></div>
          <div className="row align-items-center py-3"> 
            <div className="col-lg-4  mb-4 mb-lg-0 ">
              <div className="d-flex flex-wrap px-4">
                <div className="doct-profile-img me-3">
                  <img src="public/01_2.png" alt="" width="100" height="100" className="rounded-circle"/>
                </div>
                <div className="doctor-name d-flex flex-column justify-content-center m-1">
                  <h5 className="text-primary mb-1">Dr.Michaelle</h5>
                  <span className="fs-14 text-light">Physician</span>

                </div>
              </div>

            </div>
            <div className="col-lg-8 px-4 px-lg-0">
              <div className="row align-items-center justify-content-end px-4">
                <div className="col-4 mb-4 mb-md-0 col-md-2">
                  <div>
                    <span className="text-gray pb-3">operation</span>
                    <h4 className="text-primary mb-0">850</h4>
                  </div>
                </div>
                <div className="col-4 mb-4 mb-md-0 col-md-2">
                  <div>
                    <span className="text-gray pb-3">Hospitals</span>
                    <h4 className="text-primary mb-0">200</h4>
                  </div>
                </div>
                <div className="col-4 mb-4 mb-md-0 col-md-2">
                  <div>
                    <span className="text-gray pb-3">Patients</span>
                    <h4 className="text-primary mb-0">350</h4>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="justify-content-md-end d-flex  flex-wrap gap-2">
                    <a href=""
                      className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize me-2"> <i
                        className="fa fa-user-edit me-2"></i> Edit Profile</a>
                    <button className="btn btn-secondary rounded-4 fw-500 py-2 rounded-pill px-4 text-capitalize me-2"> <i
                        className="fa fa-share-alt me-2"></i> Share Profile</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="border-0 shadow-sm py-3 mb-4 bg-white rounded-10 slim-outer px-3">
              <div className="card-header bg-transparent mb-3">
                <h5 className="text-dark text-capitalize text-gray">speciality</h5>
              </div>
              <div className="card-body" id="speciality_box">
                 <Table1/>
              </div>
            </div>
            <div className="border-0 shadow-sm py-3 mb-4 bg-white rounded-10 slim-outer px-3">
              <div className="card-header bg-transparent mb-3">
                <h5 className="text-dark text-capitalize text-gray">Activities</h5>
              </div>
              <div className="card-body px-2" id="activity_box">
                <div id="content">
                  <ul className="timeline-1 text-black">
                    <Table2/>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-0 shadow-sm py-3 mb-4 bg-white rounded-10 slim-outer px-3">
              <div className="card-header bg-transparent mb-3">
                <h5 className="text-dark text-capitalize text-gray">Patient Notes</h5>
              </div>
              <div className="card-body" id="pat_notes">
                <ul className="list-unstyled click-menu">
                  <Table3/>
                </ul>
              </div>
            </div>
            <div className="border-0 shadow-sm py-3 mb-4 bg-white rounded-10 slim-outer px-3">
              <div className="card-header bg-transparent mb-3">
                <h5 className="text-dark text-capitalize text-gray">schedule</h5>
              </div>
              <div className="card-body" id="schedule-box">
                <Table4/>
              </div>
            </div>

          </div>
          <div className="col-md-6 col-lg-8">
            <div className="bg-white shadow-sm  rounded-10 h-100 py-4">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="personal-tab" data-bs-toggle="tab" data-bs-target="#nav-personal"
                    type="button" role="tab" aria-controls="nav-personal" aria-selected="true">Personal
                    Information</button>
                  <button className="nav-link" id="password-tab" data-bs-toggle="tab" data-bs-target="#nav-password"
                    type="button" role="tab" aria-controls="nav-password" aria-selected="false">Account
                    Settings</button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                {/* <!-- personal information ui doctor profile --> */}
                <DocInfo/>
                {/* <!-- password ui doctor profile --> */}
               <DocSettingForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}
export default DoctorProfilePage;