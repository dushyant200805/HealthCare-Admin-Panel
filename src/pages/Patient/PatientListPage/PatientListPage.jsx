import PageTitle from "../../../components/Common-Sections/PageTitle";
import DeleteModal from "./DeleteModal";
import DetailPatientModal from "./DetailPatientModal";
import PatientDataTable from "./PatientDataTable";
import QuickViewModal from "./QuickViewModal";

function PatientListPage() {
    return (
        <>
        HC-ERP-Patient List
         <PageTitle title=" HC-ERP-Patient List"/>
        <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">Patient List</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-bold text-dark-primary"><a href="index.html">Home</a></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Patient List</p>
          </div>
          <a href="addpatient.html"
            className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize"> <i
              className="bi bi-plus-circle me-2"></i> add new patient</a>
        </div>

        <div className="bg-white  rounded-10 my-3 p-4">
          <PatientDataTable/>
        </div>
      </div>

    {/* patient modal */}
  <QuickViewModal/>
   <DetailPatientModal/>
   <DeleteModal/> 
        </>
    );
}
export default PatientListPage; 