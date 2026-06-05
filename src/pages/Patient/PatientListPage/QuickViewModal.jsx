function QuickViewModal() {
  return (
    <>
      <div
        className="modal fade"
        id="viewpatientmodal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog  rounded-10 modal-dialog-centered">
          <div className="modal-content border-0">
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
            <div className="modal-body p-0 py-4">
              <div className="d-flex justify-content-center">
                <div className="patient-img text-center mb-3">
                  <img
                    src="public/pexels-mart-production-7089401.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                </div>
              </div>
              <div className="patient-card-body">
                <h4 className="text-dark my-3 border-bottom px-4 py-3">
                  Patient Details
                </h4>
                <div className="row px-4">
                  <div className="col-sm-4  mb-2 fw-bold">Name:</div>
                  <div className="col-sm-8  mb-2">Travis</div>
                  <div className="col-sm-4  mb-2 fw-bold">Age:</div>
                  <div className="col-sm-8  mb-2">30</div>
                  <div className="col-sm-4  mb-2 fw-bold">Gender:</div>
                  <div className="col-sm-8  mb-2">Male</div>
                  <div className="col-sm-4  mb-2 fw-bold">Address:</div>
                  <div className="col-sm-8  mb-2 multi-ellip">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod excepturi quia quidem vero voluptas? Cupiditate.
                  </div>
                  <div className="col-sm-4  mb-2 fw-bold">Email:</div>
                  <div className="col-sm-8  mb-2">bin123@gmail.com</div>
                  <div className="col-sm-4  mb-2 fw-bold">Mobile Number:</div>
                  <div className="col-sm-8  mb-2">+1-919999999</div>
                  <div className="col-sm-4  mb-2 fw-bold">Birth Date:</div>
                  <div className="col-sm-8  mb-2">2/4/1990</div>
                  <div className="col-sm-4  mb-2 fw-bold">Blood Group:</div>
                  <div className="col-sm-8  mb-2">B+</div>
                  <div className="col-sm-4  mb-2 fw-bold">Treatment:</div>
                  <div className="col-sm-8  mb-2">
                    <span className="badge bg-info fw-600 rounded-pill px-2 fs-10">
                      Maleria
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default QuickViewModal;
