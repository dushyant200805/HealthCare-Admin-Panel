import { Link, useLocation } from "react-router-dom";
// ================= UI Framework =================
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
// ================= Project CSS =================
import "../../includes/css/style.css";
function SideBar() {
  const { pathname } = useLocation();
  return (
    <>
      {/* <!-- sidebar starts here -->  */}
      <div className="sidebar h-100 bg-dark-primary close" id="sidebar-wrapper">
        <div className="sidebar-box text-center position-fixed slim-outer bg-dark-primary">
          <div className="sidebar-heading bg-dark d-flex align-items-center justify-content-between p-3 border-dark border-bottom">
            <Link to="/">
              <img src="public/healthcare-logo.png" width="200" alt="" />
            </Link>
            <button className="btn btn-primary rounded   closesidebar d-lg-none btn-sm">
              <i className="fa-solid fa-xmark text-white"></i>
            </button>
          </div>
          <div className="sidebar-box-data text-start px-3" id="sidebar-data">
            <div className="list-group list-group-flush mt-3">
              <div className="accordion" id="accordionExampleOne">
                <div className="accordion-item mb-4">
                  <Link
                    to="/"
                    className={`no-arrow rounded accordion-button p-2 fw-600 text-white mb-0 d-flex align-items-center ${pathname === "/" ? "active" : ""}`}
                  >
                    <i className="bi bi-grid-1x2-fill mx-2"></i>
                    <span>Dashboard</span>
                  </Link>
                </div>
                <div className="accordion-item mb-4">
                  <div className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button p-2 collapsed text-white mb-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="fa-solid fa-user-doctor mx-2"></i>
                      <span className="fw-600">Doctor</span>
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExampleOne"
                  >
                    <div className="accordion-body">
                      <ul className="navbar-nav d-block">
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/doctorlist" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/doctorlist"
                          >
                            Doctor's List
                          </Link>
                        </li>
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/adddoctor" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            aria-current="page"
                            to="/adddoctor"
                          >
                            Add doctor
                          </Link>
                        </li>
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/editdoctor" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            aria-current="page"
                            to="/editdoctor"
                          >
                            Edit doctor
                          </Link>
                        </li>
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/doctorprofile" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/doctorprofile"
                          >
                            Doctor profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4">
                  <div className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button p-2 collapsed text-white mb-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <i className="fa-solid fa-users mx-2"></i>
                      <span className="fw-600">Patient</span>
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExampleOne"
                  >
                    <div className="accordion-body">
                      <ul className="navbar-nav d-block">
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/patientlist" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/patientlist"
                          >
                            patient List
                          </Link>
                        </li>
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/addpatient" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            aria-current="page"
                            to="/addpatient"
                          >
                            Add patient
                          </Link>
                        </li>
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/editpatient" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/editpatient"
                          >
                            Edit patient
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4">
                  <Link
                    to="/stafflist"
                    className={`no-arrow rounded accordion-button p-2 fw-600 text-white mb-0 d-flex align-items-center ${pathname === "/stafflist" ? "active" : ""}`}
                  >
                    <i className="fa-regular fa-address-book mx-2"></i>Staff
                    list
                  </Link>
                </div>
                <div className="accordion-item mb-4">
                  <Link
                    to="/reports"
                    className={`no-arrow rounded accordion-button p-2 fw-600 text-white mb-0 d-flex align-items-center ${pathname === "/reports" ? "active" : ""}`}
                  >
                    <i className="bi bi-file-earmark-pdf-fill mx-2"></i>{" "}
                    <span>Reports</span>
                  </Link>
                </div>
                <div className="accordion-item mb-4">
                  <div className="accordion-header" id="headingEleven">
                    <button
                      className="accordion-button p-2 text-white mb-0 d-flex align-items-center collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEleven"
                      aria-expanded="true"
                      aria-controls="collapseEleven"
                    >
                      <i className="bi bi-boxes mx-2"></i>
                      Assets
                    </button>
                  </div>
                  <div
                    id="collapseEleven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEleven"
                    data-bs-parent="#collapseEleven"
                  >
                    <div className="accordion-body">
                      <ul className="navbar-nav d-block">
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/addassets" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/addassets"
                          >
                            add asset
                          </Link>
                        </li>
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/assetslist" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/assetslist"
                          >
                            view assets list
                          </Link>
                        </li>
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/allassets" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/allassets"
                          >
                            all asset
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4">
                  <div className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button p-2 collapsed text-white mb-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      <i className="fa-solid fa-calendar-days mx-2"></i>
                      Appointments
                    </button>
                  </div>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExampleOne"
                  >
                    <div className="accordion-body">
                      <ul className="navbar-nav d-block">
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/appointmentlist" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/appointmentlist"
                          >
                            appointment list
                          </Link>
                        </li>
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/bookappointment" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/bookappointment"
                          >
                            Book Appointment
                          </Link>
                        </li>
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/editappointment" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/editappointment"
                          >
                            Edit Appointment
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4">
                  <Link
                    to="/departmentlist"
                    className={`no-arrow rounded accordion-button p-2 fw-600 text-white mb-0 d-flex align-items-center ${pathname === "/departmentlist" ? "active" : ""}`}
                  >
                    <i className="fa-solid fa-timeline mx-2"></i>
                    Department
                  </Link>
                </div>
                <div className="accordion-item mb-4">
                  <Link
                    to="/allotedrooms"
                    className={`no-arrow rounded accordion-button p-2 fw-600 text-white mb-0 d-flex align-items-center ${pathname === "/allotedrooms" ? "active" : ""}`}
                  >
                    <i className="fa-solid fa-bed mx-2"></i>
                    Rooms / Beds
                  </Link>
                </div>
                <div className="accordion-item mb-4">
                  <div className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button p-2 collapsed text-white mb-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="true"
                      aria-controls="collapseFive"
                    >
                      <i className="fa-solid fa-file-invoice-dollar mx-2"></i>
                      Billing
                    </button>
                  </div>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExampleOne"
                  >
                    <div className="accordion-body">
                      <ul className="navbar-nav d-block">
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/paymentlist" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/paymentlist"
                          >
                            payment list
                          </Link>
                        </li>
                        <li
                          className={`nav-item mb-2 rounded-3 px-3 ${pathname === "/paymentinvoice" ? "active" : ""}`}
                        >
                          <Link
                            className="nav-link fs-14 text-white"
                            to="/paymentinvoice"
                          >
                            payment invoice
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4 d-block d-sm-none">
                  <div className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button p-2 collapsed text-white mb-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="true"
                      aria-controls="collapseSeven"
                    >
                      <i className="bi bi-bell-fill text-white mx-2"></i>
                      <span className="fw-600">Notification</span>
                    </button>
                  </div>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExampleTwo"
                  >
                    <div className="accordion-body">
                      <div className="slim-outer">
                        <div className="card border-0 shadow bg-white  rounded-2 overflow-hidden">
                          <ul className="list-unstyled text-dark-primary mb-0 click-menu">
                            <li className="rounded-end-3">
                              <Link to="#">
                                <div className="d-flex align-items-center notification-row py-2 px-1">
                                  <div className="text-center notification-user-img">
                                    <img
                                      src="includes/images/01.jpg"
                                      width="30"
                                      height="30"
                                      alt=""
                                    />
                                  </div>
                                  <div className="notification-content px-1">
                                    <div className="text-dark mb-0 fw-500 notification-msg">
                                      <span className="text-dark fw-bold mb-0 fs-12">
                                        {" "}
                                        Dr. Mark
                                      </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="fw-500 fs-10">
                                        1 New Notification
                                      </div>
                                      <p className="text-dark  text-end  mb-0 fs-10 fw-500">
                                        25 mins ago{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="rounded-end-3">
                              <Link to="#">
                                <div className="d-flex align-items-center notification-row py-2 px-1">
                                  <div className="text-center notification-user-img">
                                    <img
                                      src="includes/images/02.jpg"
                                      width="30"
                                      height="30"
                                      alt=""
                                    />
                                  </div>
                                  <div className="notification-content px-1">
                                    <div className="text-dark mb-0 fw-500 notification-msg">
                                      <span className="text-dark fw-bold mb-0 fs-12">
                                        {" "}
                                        Dr. Anna
                                      </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="fw-500 fs-10">
                                        5 New Notification
                                      </div>
                                      <p className="text-dark  text-end  mb-0 fs-10 fw-500">
                                        3mins ago{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="rounded-end-3">
                              <Link to="#">
                                <div className="d-flex align-items-center notification-row py-2 px-1">
                                  <div className="text-center notification-user-img">
                                    <img
                                      src="includes/images/03.jpg"
                                      width="30"
                                      height="30"
                                      alt=""
                                    />
                                  </div>
                                  <div className="notification-content px-1">
                                    <div className="text-dark mb-0 fw-500 notification-msg">
                                      <span className="text-dark fw-bold mb-0 fs-12">
                                        {" "}
                                        Dr.June
                                      </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="fw-500 fs-10">
                                        4New Notification
                                      </div>
                                      <p className="text-dark  text-end  mb-0 fs-10 fw-500">
                                        6 hrs ago
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4 d-block d-sm-none">
                  <div className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button p-2 collapsed text-white mb-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="true"
                      aria-controls="collapseEight"
                    >
                      <i className="bi bi-envelope-fill text-white mx-2"></i>
                      <span className="fw-600">Messages</span>
                    </button>
                  </div>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="slim-outer">
                        <div className="card border-0 shadow bg-white  rounded-2 overflow-hidden">
                          <ul className="list-unstyled text-dark-primary mb-0 click-menu">
                            <li className="rounded-end-3">
                              <Link to="#">
                                <div className="d-flex align-items-center notification-row py-2 px-1">
                                  <div className="text-center notification-user-img">
                                    <img
                                      src="includes/images/01.jpg"
                                      width="30"
                                      height="30"
                                      alt=""
                                    />
                                  </div>
                                  <div className="notification-content px-1">
                                    <div className="text-dark mb-0 fw-500 notification-msg">
                                      <span className="text-dark fw-bold mb-0 fs-12">
                                        {" "}
                                        Dr. Mark
                                      </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="fw-500 fs-10">
                                        1 New Notification
                                      </div>
                                      <p className="text-dark  text-end  mb-0 fs-10 fw-500">
                                        25 mins ago{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="rounded-end-3">
                              <Link to="#">
                                <div className="d-flex align-items-center notification-row py-2 px-1">
                                  <div className="text-center notification-user-img">
                                    <img
                                      src="includes/images/02.jpg"
                                      width="30"
                                      height="30"
                                      alt=""
                                    />
                                  </div>
                                  <div className="notification-content px-1">
                                    <div className="text-dark mb-0 fw-500 notification-msg">
                                      <span className="text-dark fw-bold mb-0 fs-12">
                                        {" "}
                                        Dr. Anna
                                      </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="fw-500 fs-10">
                                        5 New Notification
                                      </div>
                                      <p className="text-dark  text-end  mb-0 fs-10 fw-500">
                                        3mins ago{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="rounded-end-3">
                              <Link to="#">
                                <div className="d-flex align-items-center notification-row py-2 px-1">
                                  <div className="text-center notification-user-img">
                                    <img
                                      src="includes/images/03.jpg"
                                      width="30"
                                      height="30"
                                      alt=""
                                    />
                                  </div>
                                  <div className="notification-content px-1">
                                    <div className="text-dark mb-0 fw-500 notification-msg">
                                      <span className="text-dark fw-bold mb-0 fs-12">
                                        {" "}
                                        Dr.June
                                      </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="fw-500 fs-10">
                                        4New Notification
                                      </div>
                                      <p className="text-dark  text-end  mb-0 fs-10 fw-500">
                                        6 hrs ago
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4">
                  <div className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button p-2 collapsed text-white mb-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="true"
                      aria-controls="collapseSix"
                    >
                      <i className="fa-solid fa-user-shield mx-2"></i>
                      <span className="fw-600">Authentication</span>
                    </button>
                  </div>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExampleOne"
                  >
                    <div className="accordion-body">
                      <ul className="navbar-nav d-block">
                        <li className="nav-item mb-2 rounded-3 px-3">
                          <Link
                            className={`nav-link fs-14 text-white ${pathname === "/register" ? "active" : ""}`}
                            target="_blank"
                            to="/register"
                          >
                            Registration
                          </Link>
                        </li>
                        <li className="nav-item mb-2 rounded-3 px-3">
                          <Link
                            className={`nav-link fs-14 text-white ${pathname === "/login" ? "active" : ""}`}
                            target="_blank"
                            to="/login"
                          >
                            Login
                          </Link>
                        </li>
                        <li className="nav-item mb-2 rounded-3 px-3">
                          <Link
                            className={`nav-link fs-14 text-white ${pathname === "/resetpass" ? "active" : ""}`}
                            target="_blank"
                            to="/resetpass"
                          >
                            forgot password
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4">
                  <Link
                    to="/components"
                    className={`no-arrow rounded accordion-button fw-600  p-2 text-white mb-0 d-flex align-items-center ${pathname === "/components" ? "active" : ""}`}
                  >
                    <i className="fa-solid fa-toolbox mx-2"></i>
                    Components
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- sidebar ends here -->  */}
    </>
  );
}

export default SideBar;
