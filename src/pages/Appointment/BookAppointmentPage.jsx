import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/Common-Sections/PageTitle";
function BookAppointmentPage() {
  useEffect(() => {
    if ($("#book_appointment").length > 0) {
      $("#book_appointment").validate({
        rules: {
          fname: "required",

          lname: "required",

          gender: "required",

          mobile: {
            required: true,
            minlength: 10,
          },

          email: {
            required: true,
            email: true,
          },

          address: "required",

          bk_apnt_date: "required",

          from: "required",

          to: "required",

          consultingdoctor: "required",

          treatment: "required",
        },

        messages: {
          fname: "Please enter first name",

          lname: "Please enter last name",

          gender: "Please select gender",

          mobile: {
            required: "Please enter mobile number",
            minlength: "Enter valid mobile number",
          },

          email: {
            required: "Please enter email",
            email: "Please enter valid email",
          },

          address: "Please enter address",

          bk_apnt_date: "Please select appointment date",

          from: "Please select start time",

          to: "Please select end time",

          consultingdoctor: "Please select doctor",

          treatment: "Please enter treatment",
        },

        errorElement: "small",

        errorClass: "text-danger mt-1 d-block",

        errorPlacement: function (error, element) {
          if (element.closest(".input-group").length) {
            error.insertAfter(element.closest(".input-group"));
          } else if (element.attr("type") === "radio") {
            error.appendTo(element.closest(".custom-err"));
          } else {
            error.insertAfter(element);
          }
        },

        highlight: function (element) {
          $(element).addClass("border-danger");
        },

        unhighlight: function (element) {
          $(element).removeClass("border-danger");
        },
      });
    }
  }, []);
  return (
    <>
      <PageTitle title="HC-ERP-Book Appointment" />
      <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">
          Book Appointment
        </h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-600 text-dark-primary">
              <Link to="/">Home</Link>
            </p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 fw-600 text-dark">
              <Link to="/appointmentlist">Appointment List</Link>
            </p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Book Appointment</p>
          </div>
          <Link
            to="/appointmentlist"
            className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize"
          >
            Back To Appointment List{" "}
            <i className="fa-solid fa-right-to-bracket ms-2"></i>{" "}
          </Link>
        </div>
        <div className="mb-4  rounded-10">
          <div className="border-0 shadow-sm py-3 h-100 bg-white  rounded-10">
            <div className="card-body p-4 poppins">
              <form id="book_appointment">
                <div className="row">
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label htmlFor="fname" className="mb-2 text-dark fw-600">
                      First Name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="form-control rounded "
                    />
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label htmlFor="lname" className="mb-2 text-dark fw-600">
                      Last Name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      className="form-control rounded "
                    />
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label className="mb-2 text-dark fw-600">
                      Gender
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div className="d-flex gap-2 custom-err">
                      <input type="radio" name="gender" id="male" />
                      <label htmlFor="male">Male</label>
                      <input type="radio" name="gender" id="female" />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                  <div className="col-sm-6 px-3 mb-3">
                    <label htmlFor="mobile" className="mb-2 text-dark fw-600">
                      Mobile
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      className="form-control rounded "
                    />
                  </div>
                  <div className="col-sm-6 px-3 mb-3">
                    <label htmlFor="email" className="mb-2 text-dark fw-600">
                      Email
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control rounded "
                    />
                  </div>
                  <div className="col-12 px-3 mb-3">
                    <label htmlFor="address" className="mb-2 text-dark fw-600">
                      Address
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <textarea
                      name="address"
                      id="address"
                      cols="30"
                      rows="5"
                      className="form-control  rounded-10"
                    ></textarea>
                  </div>
                  <div className="col-12 px-3 my-3">
                    <h5 className="text-dark text-capitalize text-dark fw-600 mb-0">
                      {" "}
                      Appointment Details
                    </h5>
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label htmlFor="bk_apnt_date" className="mb-2 text-dark fw-600">
                      Date Of Appointment
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div
                      className="input-group date border custom-err rounded mb-3"
                      id="bk_apnt_dtmain"
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        name="bk_apnt_date"
                        id="bk_apnt_date"
                        autoComplete="off"
                      />
                      <span className="input-group-append">
                        <span className="input-group-text date-btn d-block">
                          <i className="fa fa-calendar"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label htmlFor="from" className="mb-2 text-dark fw-600">
                      From
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      name="from"
                      id="from"
                    />
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label htmlFor="to" className="mb-2 text-dark fw-600">
                      To
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="time"
                      className="form-control rounded "
                      id="to"
                      name="to"
                    />
                  </div>
                  <div className="col-sm-6 px-3 mb-3">
                    <label
                      htmlFor="consultingdoctor"
                      className="mb-2 text-dark fw-600"
                    >
                      Consulting Doctor
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <select
                      name="consultingdoctor"
                      id="consultingdoctor"
                      className="form-select"
                    >
                      <option defaultValue="">Select doctor</option>
                      <option defaultValue="Andrew">Andrew</option>
                      <option defaultValue="Symond">Symond</option>
                    </select>
                  </div>
                  <div className="col-sm-6 px-3 mb-3">
                    <label htmlFor="treatment" className="mb-2 text-dark fw-600">
                      Treatment
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded "
                      name="treatment"
                      id="treatment"
                    />
                  </div>
                  <div className="col-12 px-3 mb-3">
                    <label
                      htmlFor="notes"
                      className="mb-2 text-dark fw-600 text-dark fw-600"
                    >
                      Notes
                    </label>
                    <textarea
                      name="notes"
                      id="notes"
                      cols="30"
                      rows="5"
                      className="form-control  rounded-10"
                    ></textarea>
                  </div>
                  <div className="col-sm-6 px-3 mb-3">
                    <label htmlFor="avatar" className="mb-2 text-dark fw-600">
                      Avatar
                    </label>
                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      className="form-control rounded "
                    />
                  </div>
                  <div className="col-12 px-3 mb-3 text-end">
                    <button
                      type="reset"
                      className="btn btn-outline-dark me-2 mw-120 rounded-pill py-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="btn btn-primary text-white rounded-pill mw-120 py-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BookAppointmentPage;
