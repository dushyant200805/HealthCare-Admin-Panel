import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import $ from "jquery";
import { Dropdown } from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../includes/css/style.css";
// ================= UI Framework =================
import "bootstrap/dist/css/bootstrap.min.css";



// ================= Project CSS =================
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

function Header() {

  useEffect(() => {
  const dropdownButtons = document.querySelectorAll('[data-bs-toggle="dropdown"]');

  dropdownButtons.forEach((btn) => {
    Dropdown.getOrCreateInstance(btn);
  });
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = $(window).scrollTop();

      if (scroll > 150) {
        $(".header").removeClass("mt-0 mt-3 mx-2 mx-sm-4 rounded-10");
      } else if (scroll === 0) {
        $(".header").addClass("mt-0 mt-3 mx-2 mx-sm-4 rounded-10");
      }
    };

    // Initial check
    handleScroll();

    // Scroll listener
    $(window).on("scroll", handleScroll);

    // Cleanup
    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  // sider close function
  useEffect(() => {
    const sidebarToggleButtons = document.querySelectorAll(".sidebarToggle");

    // Sidebar toggle function
    const handleSidebarToggle = (event) => {
      event.preventDefault();

      document.body.classList.toggle("sb-sidenav-toggled");

      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled"),
      );
    };

    // Add click event to all toggle buttons
    sidebarToggleButtons.forEach((button) => {
      button.addEventListener("click", handleSidebarToggle);
    });

    // Event delegation
    const handleDocumentClick = (event) => {
      // Close sidebar
      if (event.target.closest(".closesidebar")) {
        document.querySelector(".sidebar")?.classList.toggle("close");

        document.querySelector(".sidebar-backdrop")?.classList.remove("active");
      }

      // Open sidebar
      if (event.target.closest(".sidebarToggle")) {
        document.querySelector(".sidebar")?.classList.remove("close");

        document.querySelector(".sidebar-backdrop")?.classList.add("active");
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Screen size checker
    const checkScreenSize = () => {
      if (window.innerWidth <= 991) {
        document.body.classList.add("sb-sidenav-toggled");
      } else {
        document.body.classList.remove("sb-sidenav-toggled");
      }
    };

    // Resize handler
    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        checkScreenSize();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    // Initial load
    checkScreenSize();

    // Cleanup
    return () => {
      sidebarToggleButtons.forEach((button) => {
        button.removeEventListener("click", handleSidebarToggle);
      });

      document.removeEventListener("click", handleDocumentClick);

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   Full Screen Functionality
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreen = () => {
    const docEl = document.documentElement;

    if (!isFullscreen) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <>
      {/* header Section */}
      <div className="row align-items-center">
        <div className="row flex-row-reverse justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="d-flex justify-content-lg-end justify-content-between align-items-center gap-2">
              <div className="d-block d-lg-none">
                <button className="btn shadow-0 focus-0 sidebar-btn rounded border-0 sidebarToggle">
                  <img src="public/menu-icons.svg" alt="" />
                </button>
                <Link to="/">
                  <img src="public/ERP-Logo(1).png" width="180" alt="" />
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <div className="maximize d-none d-lg-block">
                  <Link
                    className="badge-purple d-flex align-items-center text-primary"
                    onClick={handleFullscreen}
                    to="#"
                    id="fullscreen"
                  >
                    Go Fullscreen
                  </Link>
                </div>
                <div className="position-relative rounded d-lg-none">
                  <a
                    className="text-primary py-2 px-3 btn btn-transparent outline-0 focus-0 rounded btn-cust-sm"
                    data-bs-toggle="collapse"
                    href="#searchcollapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="searchcollapse"
                  >
                    <i className="bi bi-search"></i>
                  </a>
                  <div
                    className="collapse position-absolute top-100 mt-2 end-0 z-3 mw-250 mw-100"
                    id="searchcollapse"
                  >
                    <div className="card card-body">
                      <form>
                        <div className="border bg-light position-relative h-100 d-flex align-items-center header-search mw-100">
                          <button className="btn btn-transparent border-0 position-absolute ms-1">
                            <img src="public/search2.svg" alt="" />
                          </button>
                          <input
                            type="search"
                            className="form-control border-0 bg-transparent shadow-none ps-5 py-2"
                            placeholder="Search here.."
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="dropdown d-none d-sm-block">
                  <button
                    type="button"
                    className="btn rounded position-relative "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-envelope fs-5 text-success pb-0 mb-0"></i>
                    <span className="msg-lite">
                      <span className="circles cust_circle">
                        <span className="circle1"></span>
                        <span className="circle2"></span>
                        <span className="circle3"></span>
                      </span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-notification dropdown-menu-end dropdown-mega p-0 border-0  rounded-10 bg-transparent">
                    <div className="animate slideIn">
                      <div className="card border-0 shadow bg-white  rounded-10 overflow-hidden slim-outer slim-outer">
                        <div className="bg-light p-3">
                          <h6 className="text-center mb-0">Messages</h6>
                        </div>
                        <ul
                          className="list-unstyled text-dark-primary mb-0 click-menu px-2 py-3"
                          id="message_box"
                        >
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/01.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr. Mark
                                    </span>
                                  </div>
                                  <div className="d-flex justify-content-between">
                                    <div className="w-100 text-truncate fs-12 fw-500">
                                      added new task patient appointment booking
                                    </div>
                                    <p className="text-dark  text-end  mb-0 fs-12 fw-500 msg-time">
                                      25 mins ago{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/02.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr. Allen
                                    </span>
                                  </div>
                                  <div className="d-flex justify-content-between">
                                    <div className="w-100 text-truncate fs-12 fw-500">
                                      Lorem ipsum, dolor sit amet consectetur
                                      adipisicing elit. Suscipit sed, nostrum
                                      aut accusantium cumque quod quas ad,
                                      incidunt distinctio maiores ipsa? Magni
                                      odio quia, magnam adipisci facilis
                                      corporis commodi accusamus possimus
                                      explicabo mollitia est incidunt assumenda
                                      similique asperiores repellendus aliquid
                                      architecto? Reprehenderit error, assumenda
                                      quasi ut quibusdam sit ipsum temporibus!
                                    </div>
                                    <p className="text-dark  text-end  mb-0 fs-12 fw-500 msg-time">
                                      50 mins ago{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/03.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr.June
                                    </span>
                                  </div>
                                  <div className="d-flex justify-content-between">
                                    <div className="w-100 text-truncate fs-12 fw-500">
                                      added new task patient appointment booking
                                    </div>
                                    <p className="text-dark  text-end  mb-0 fs-12 fw-500 msg-time">
                                      6 hrs ago{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/01.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr. Mark
                                    </span>
                                  </div>
                                  <div className="d-flex justify-content-between">
                                    <div className="w-100 text-truncate fs-12 fw-500">
                                      added new task patient appointment booking
                                    </div>
                                    <p className="text-dark  text-end  mb-0 fs-12 fw-500 msg-time">
                                      2 Days ago{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/02.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr. Allen
                                    </span>
                                  </div>
                                  <div className="d-flex justify-content-between">
                                    <div className="w-100 text-truncate fs-12 fw-500">
                                      Lorem ipsum, dolor sit amet consectetur
                                      adipisicing elit. Suscipit sed, nostrum
                                      aut accusantium cumque quod quas ad,
                                      incidunt distinctio maiores ipsa? Magni
                                      odio quia, magnam adipisci facilis
                                      corporis commodi accusamus possimus
                                      explicabo mollitia est incidunt assumenda
                                      similique asperiores repellendus aliquid
                                      architecto? Reprehenderit error, assumenda
                                      quasi ut quibusdam sit ipsum temporibus!
                                    </div>
                                    <p className="text-dark  text-end  mb-0 fs-12 fw-500 msg-time">
                                      4 Days ago{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/03.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr.June
                                    </span>
                                  </div>
                                  <div className="d-flex justify-content-between">
                                    <div className="w-100 text-truncate fs-12 fw-500">
                                      added new task patient appointment booking
                                    </div>
                                    <p className="text-dark  text-end  mb-0 fs-12 fw-500 msg-time">
                                      6 Days ago{" "}
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
                <div className="dropdown d-none d-sm-block">
                  <button
                    type="button"
                    className="btn rounded position-relative "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-bell fs-5 text-orange pb-0 mb-0"></i>
                    <span className="notification-lite">
                      <span className="circles cust_circle">
                        <span className="circle1"></span>
                        <span className="circle2"></span>
                        <span className="circle3"></span>
                      </span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-notification dropdown-menu-end dropdown-mega p-0 border-0  rounded-10 bg-transparent">
                    <div className="animate slideIn">
                      <div className="card border-0 shadow bg-white  rounded-10 overflow-hidden slim-outer slim-outer">
                        <div className="bg-light p-3">
                          <h6 className="text-center mb-0">Notifications</h6>
                        </div>
                        <ul
                          className="list-unstyled text-dark-primary mb-0 click-menu px-2 py-3"
                          id="notification_box"
                        >
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/01.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr. Mark
                                    </span>
                                    <span className="fw-light fs-14 ">
                                      added new task patient appointment booking
                                    </span>
                                  </div>
                                  <p className="text-dark  text-end  mb-0 fs-12 fw-500">
                                    25 mins ago{" "}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/02.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr. Allen
                                    </span>
                                    <span className="fw-light fs-14 ">
                                      added new task patient appointment booking
                                    </span>
                                  </div>
                                  <p className="text-dark  text-end  mb-0 fs-12 fw-500">
                                    25 mins ago{" "}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/03.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr.June
                                    </span>
                                    <span className="fw-light fs-14 ">
                                      Deleted task patient appointment booking
                                    </span>
                                  </div>
                                  <p className="text-dark  text-end  mb-0 fs-12 fw-500">
                                    25 mins ago{" "}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/01.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr. Mark
                                    </span>
                                    <span className="fw-light fs-14 ">
                                      added new task patient appointment booking
                                    </span>
                                  </div>
                                  <p className="text-dark  text-end  mb-0 fs-12 fw-500">
                                    25 mins ago{" "}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/02.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr. Allen
                                    </span>
                                    <span className="fw-light fs-14 ">
                                      added new task patient appointment booking
                                    </span>
                                  </div>
                                  <p className="text-dark  text-end  mb-0 fs-12 fw-500">
                                    25 mins ago{" "}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="p-2 rounded-end-3">
                            <Link to="#">
                              <div className="d-flex align-items-center notification-row">
                                <div className="d-flex align-items-center text-center p-0 notification-user-img">
                                  <img
                                    src="public/03.jpg"
                                    width="48"
                                    height="48"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-content">
                                  <div className="text-dark mb-0 fw-500 notification-msg">
                                    <span className="text-dark fw-bold mb-0">
                                      {" "}
                                      Dr.June
                                    </span>
                                    <span className="fw-light fs-14 ">
                                      Deleted task patient appointment booking
                                    </span>
                                  </div>
                                  <p className="text-dark  text-end  mb-0 fs-12 fw-500">
                                    25 mins ago{" "}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown user">
                  <button
                    type="button"
                    className="pill-badge btn md-mw-150 me-xl-3 d-flex align-items-center text-start rounded px-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="public/01_2.png"
                      alt=""
                      className="border rounded"
                    />
                    <span className="justify-content-between align-items-center gap-4 px-2 w-100 d-none d-xl-flex">
                      <span className="my-0 py-0 lh-1">
                        <span className="pill-badge-msg lh-sm text-capitalize pb-0 mb-0 d-block">
                          Mark
                        </span>
                        <span className="fs-12 p-0 d-block">Admin</span>
                      </span>
                      <span className="my-0 py-0">
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end dropdown-mega p-0 border-0 rounded-3 bg-transparent">
                    <div className="animate slideIn">
                      <div className="card bg-white  rounded-10 shadow-sm overflow-hidden">
                        <div className="bg-light p-3">
                          <h6 className="mb-0 fs-14 fw-500 mb-1">Hello Mark</h6>
                          <p className="mb-0 fs-12 fw-500 text-success">
                            Available
                          </p>
                        </div>
                        <ul className="list-unstyled text-dark-primary mb-0 click-menu p-3">
                          <li className="py-3 px-2 rounded-end-3">
                            <Link to="/doctorprofile">
                              <div className="d-flex align-items-center">
                                <div className="rounded bg-light reward-circle d-flex align-items-center justify-content-center me-3 text-center">
                                  <i className="fa fa-user fs-5 text-primary"></i>
                                </div>
                                <div>
                                  <h6 className="text-dark fs-14 mb-0">
                                    My Profile
                                  </h6>
                                  <p className="text-light fs-12 mb-0">
                                    View Profile Details
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="py-3 px-2 rounded-end-3">
                            <Link to="/components">
                              <div className="d-flex align-items-center">
                                <div className="rounded bg-light reward-circle d-flex align-items-center justify-content-center me-3 text-center">
                                  <i className="fa-solid fa-toolbox text-primary fs-4"></i>
                                </div>
                                <div>
                                  <h6 className="text-dark fs-14 mb-0">
                                    Components
                                  </h6>
                                  <p className="text-light fs-12 mb-0">
                                    Explore Different Components
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                        <div className="mb-2 text-center">
                          <Link
                            className="btn btn-primary btn-15 rounded-pill mw-120"
                            to="/login"
                          >
                            Logout
                            <FontAwesomeIcon icon={faSignOut} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-lg-block">
            <div className="d-lg-flex align-items-center">
              <button className="btn shadow-0 focus-0 d-none d-lg-block sidebar-btn rounded border-0 sidebarToggle">
                <img src="public/menu-icons.svg" alt="" />
              </button>
              <form className="d-none d-lg-block mw-200">
                <div className="bg-light-blue position-relative h-100 d-flex align-items-center header-search rounded-10">
                  <button className="btn btn-transparent border-0 position-absolute top-0">
                    <img src="public/search2.svg" alt="" />
                  </button>
                  <input
                    type="search"
                    className="form-control border-0 bg-transparent shadow-none ps-5 py-2"
                    placeholder="Search here.."
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
