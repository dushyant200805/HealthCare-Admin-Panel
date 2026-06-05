function DocInfo () {
    return (
        <>
             <div className="tab-pane fade show active" id="nav-personal" role="tabpanel" aria-labelledby="personal-tab">
                  <div className="row my-4 px-3">
                    <div className="col-sm-6 mb-3 mb-xxl-0 col-xxl-3">
                      <h6 className="text-dark mb-2">Full Name</h6>
                      <span className="text-gray"><i className="bi bi-person-fill"></i>&nbsp; Dr. Michaelle Williams</span>
                    </div>
                    <div className="col-sm-6 mb-3 mb-xxl-0 col-xxl-3">
                      <h6 className="text-dark mb-2">Mobile</h6>
                      <span className="text-gray"><i className="bi bi-telephone-fill"></i>&nbsp; +01-919999999</span>
                    </div>
                    <div className="col-sm-6 mb-3 mb-xxl-0 col-xxl-3">
                      <h6 className="text-dark mb-2">Email</h6>
                      <span className="text-gray"><i className="bi bi-envelope-fill"></i>&nbsp; Michalle@gmail.com</span>
                    </div>
                    <div className="col-sm-6 mb-3 mb-xxl-0 col-xxl-3">
                      <h6 className="text-dark mb-2">Location</h6>
                      <span className="text-gray"><i className="bi bi-geo-alt-fill"></i>&nbsp; Downtown</span>
                    </div>
                  </div>
                  <div className="text-gray mb-4 px-3">
                    Lorem ipsuLorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repudiandae eveniet
                    harum.m dolor sit amet, consectetur adipisicing elit. Delectus repudiandae eveniet harum.Lorem
                    ipsuLorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repudiandae eveniet harum.m
                    dolor sit amet, consectetur adipisicing elit. Delectus repudiandae eveniet harum.
                  </div>
                  <div className="education-table">
                    <h5 className="border-bottom  p-3">Education</h5>
                    <div className="table-responsive">
                      <table className="table table-no-bg">
                        <thead>
                          <tr>
                            <td className="text-dark fw-600">Year</td>
                            <td className="text-dark fw-600">Degree</td>
                            <td className="text-dark fw-600">Institute</td>
                            <td className="text-dark fw-600">Result</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2010</td>
                            <td>MBBS, MD</td>
                            <td>University of Wyoming</td>
                            <td>
                              <span
                                className="custom-badge badge bg-secondary text-white align-items-center rounded-pill text-capitalize me-2">Distinction</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                  <div className="experiencee-table border-bottom">
                    <h5 className="border-bottom p-3">Experience</h5>
                    <div className="table-responsive">
                      <table className="table table-no-bg">
                        <thead>
                          <tr>
                            <td className="text-dark fw-600">Year</td>
                            <td className="text-dark fw-600">Department</td>
                            <td className="text-dark fw-600">Position</td>
                            <td className="text-dark fw-600">Hospital</td>
                            <td className="text-dark fw-600">Feedback</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2010</td>
                            <td>MBBS, MD</td>
                            <td>University of Wyoming</td>
                            <td>Midtown Medical Clinic</td>
                            <td>
                              <span
                                className="custom-badge badge bg-success text-white align-items-center rounded-pill text-capitalize me-2">Good</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2010</td>
                            <td>MBBS, MD</td>
                            <td>University of Wyoming</td>
                            <td>Midtown Medical Clinic</td>
                            <td>
                              <span
                                className="custom-badge badge bg-success text-white align-items-center rounded-pill text-capitalize me-2">Excellent</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="other-data">
                    <h5 className="px-3 my-3">Conferences, Cources & Workshop Attended</h5>
                    <p className="text-gray px-3">Lorem ipsuLorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus repudiandae eveniet harum.m dolor sit amet, consectetur adipisicing elit. Delectus
                      repudiandae eveniet harum.Lorem ipsuLorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus repudiandae eveniet harum.m dolor sit amet, consectetur adipisicing elit. Delectus
                      repudiandae eveniet harum.Lorem ipsuLorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectu</p>
                    <p className="text-gray px-3">repudiandae eveniet harum.m dolor sit amet, consectetur adipisicing elit.
                      Delectus repudiandae eveniet harum.Lorem ipsuLorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Delectus repudiandae eveniet harum.m dolor sit amet, consectetur adipisicing elit. Delectus
                      repudiandae eveniet harum.Lorem ipsuLorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus repudiandae eveniet harum.m dolor sit amet, consectetur adipisicing elit. Delectus
                      repudiandae eveniet harum.Lorem ipsuLorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus repudiandae eveniet harum.m dolor sit amet, consectetur adipisicing elit. Delectus
                      repudiandae eveniet</p>
                  </div>
                </div>
        </>
    );
}
export default DocInfo;