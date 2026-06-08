function DetailPatientModalHader() {
  return (
    <>
      <div className="bg-white border shadow-sm mb-4 py-2 rounded-10 overflow-hidden">
        <div className="d-flex justify-content-center">
          <div className="patient-img text-center mb-3">
            <img
              src="/pexels-mart-production-7089401.jpg"
              alt=""
              className="rounded-circle"
            />
          </div>
        </div>
        <div className="px-3 py-2">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <span className="text-dark-primary mb-1 fw-600 me-1">
                Patient Name:{" "}
              </span>
              <span className="fs-14 fw-500">Andrew</span>
            </div>
            <div className="col-lg-4 mb-4">
              <span className="text-dark-primary mb-1 fw-600 me-1">Age: </span>
              <span className="fs-14 fw-500">30</span>
            </div>
            <div className="col-lg-4 mb-4">
              <span className="text-dark-primary mb-1 fw-600 me-1">
                Gender:
              </span>
              <span className="fs-14 fw-500">Male</span>
            </div>
            <div className="col-lg-4 mb-4">
              <span className="text-dark-primary mb-1 fw-600 me-1">
                Address:
              </span>
              <span className="fs-14 fw-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                ipsum, earum, aut natus voluptatibus porro aspernatur quia
                voluptatem ducimus enim amet explicabo, quae minus sequi.
              </span>
            </div>
            <div className="col-lg-4 mb-4">
              <span className="text-dark-primary mb-1 fw-600 me-1">Email:</span>
              <span className="fs-14 fw-500">andrew0157@gmail.com</span>
            </div>
            <div className="col-lg-4 mb-4">
              <span className="text-dark-primary mb-1 fw-600 me-1">
                Mobile Number:
              </span>
              <span className="fs-14 fw-500">+1-100141242</span>
            </div>
            <div className="col-lg-4 mb-4">
              <span className="text-dark-primary mb-1 fw-600 me-1">
                Birth Date:{" "}
              </span>
              <span className="fs-14 fw-500">01/12/1992</span>
            </div>
            <div className="col-lg-4 mb-4">
              <span className="text-dark-primary mb-1 fw-600 me-1">
                Blood Group:
              </span>
              <span className="fs-14 fw-500">B+</span>
            </div>
            <div className="col-lg-4 mb-4">
              <span className="text-dark-primary mb-1 fw-600 me-1">
                Treatment:
              </span>
              <span className="badge bg-info fw-500 rounded-pill px-2 fs-10">
                Maleria
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailPatientModalHader;
