import DetailPatientModalFooter from "./DetailPatientModalFooter";
import DetailPatientModalHader from "./DetailPatientModalHader";

function DetailPatientModal() {
  return (
    <>
      <div
        className="modal fade"
        id="detailpatientmodal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl rounded-10 modal-dialog-centered">
          <div className="modal-content border-0 shadow-sm bg-white">
            <div className="modal-header">
              <h5 className="text-dark text-capitalize mb-0 p-3 text-gray">
                Patient Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <DetailPatientModalHader />
              <div className="bg-white border shadow-sm  mb-4 rounded-10">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="pat-history"
                      data-bs-toggle="tab"
                      data-bs-target="#pathistory-tab"
                      type="button"
                      role="tab"
                      aria-controls="pathistory-tab"
                      aria-selected="true"
                    >
                      Personal Information
                    </button>
                    <button
                      className="nav-link"
                      id="pat-setting"
                      data-bs-toggle="tab"
                      data-bs-target="#pat-settings"
                      type="button"
                      role="tab"
                      aria-controls="pat-settings"
                      aria-selected="false"
                    >
                      Other Details
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <DetailPatientModalFooter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailPatientModal;
