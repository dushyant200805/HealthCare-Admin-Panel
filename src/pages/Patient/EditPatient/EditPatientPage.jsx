import { Link } from "react-router";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery-validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../../../components/Common-Sections/PageTitle";
function EditPatientPage() {
  const formRef = useRef(null);
  useEffect(() => {
    if ($(formRef.current).length > 0) {
      $(formRef.current).validate({
        rules: {
          fname: "required",
          lname: "required",
          username: "required",
          gender: "required",
          mobile: {
            required: true,
            minlength: 10,
          },

          email: {
            required: true,
            email: true,
          },

          pass: {
            required: true,
            minlength: 6,
          },

          repeatpass: {
            required: true,
            equalTo: "#pass",
          },

          designation: "required",
          education: "required",
          department: "required",
          address: "required",
          city: "required",
          state: "required",
          country: "required",
          pincode: "required",
          dob: "required",
          status: "required",
          maritalstatus: "required",
          blood: "required",
          bloodpress: "required",
          sugar: "required",
          injury: "required",
          age: "required",
        },

        messages: {
          fname: "Please enter first name",
          lname: "Please enter last name",
          username: "Please enter username",
          maritalstatus: "Please select marital status",
          blood: "Please select blood group",
          age: "Please enter age",
          mobile: {
            required: "Please enter mobile number",
            minlength: "Enter valid mobile number",
          },

          email: {
            required: "Please enter email",
            email: "Please enter valid email",
          },

          pass: {
            required: "Please enter password",
            minlength: "Minimum 6 characters required",
          },

          repeatpass: {
            required: "Please confirm password",
            equalTo: "Passwords do not match",
          },

          gender: "Please select gender",
          status: "Please select status",
        },

        errorElement: "small",

        errorClass: "text-danger mt-1 d-block",

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
      <PageTitle title="HC-ERP-Edit Patient" />
      <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">
          Edit patient
        </h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-bold text-dark-primary">
              <Link to="/">Home</Link>
            </p>
            <i className="bi bi-chevron-right pagination-arrow text-dark"></i>
            <p className="mb-0 pb-0 fw-600 text-dark">
              <Link to="/patientlist">Patient List</Link>
            </p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Edit patient</p>
          </div>
          <Link
            to="/patientlist"
            className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize"
          >
            Back To Patient List
            <FontAwesomeIcon
              icon={faArrowRightToBracket}
              className="ms-2"
            />{" "}
          </Link>
        </div>
        <div className="mb-4  rounded-10">
          <div className="border-0 shadow-sm py-3 h-100 bg-white  rounded-10">
            <div className="card-body p-4  ">
              <form id="edit_patient" ref={formRef}>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="fname" className="text-dark mb-2">
                      First Name{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      defaultValue="john"
                      className="border form-control rounded"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="lname" className="text-dark mb-2">
                      Last Name{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      defaultValue="loe"
                      className="border form-control rounded"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="dob" className="text-dark mb-2">
                      Date of birth{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>

                    <div
                      className="input-group date border rounded custom-err mb-3"
                      id="dob_main"
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        name="dob"
                        id="dob"
                        autoComplete="off"
                      />
                      <span className="input-group-append">
                        <span className="input-group-text date-btn d-block">
                          <i className="fa fa-calendar"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="text-dark mb-2">
                      Gender{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div className="d-flex gap-2 custom-err">
                      <span>
                        <input type="radio" name="gender" defaultChecked />
                        <span className="ms-1">Male</span>
                      </span>
                      <span>
                        <input type="radio" name="gender" />
                        <span className="ms-1">Female</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="age" className="text-dark mb-2">
                      Age{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="age"
                      id="age"
                      defaultValue="40"
                      className="border form-control rounded"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="mobile" className="text-dark mb-2">
                      Mobile No{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      defaultValue="+12011111"
                      className="border form-control rounded"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="email" className="text-dark mb-2">
                      Email{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      defaultValue="john@demogmail.com"
                      className="border form-control rounded"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="address" className="text-dark mb-2">
                      Address{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <textarea
                      name="address"
                      id="address"
                      cols="30"
                      defaultValue="john doe common address "
                      rows="3"
                      className="rounded form-control"
                    ></textarea>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="maritalstatus" className="text-dark mb-2">
                      Marital Status
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <select
                      name="maritalstatus"
                      id="maritalstatus"
                      className="form-select"
                      defaultValue="Single"
                    >
                      <option value="">select</option>
                      <option value="Single">
                        Single
                      </option>
                      <option value="Marrie">Married</option>
                    </select>
                  </div>

                  <div className="col-lg-6 mb-3">
                    <label htmlFor="patimage" className="text-dark mb-2">
                      Upload Picture
                    </label>
                    <input
                      type="file"
                      id="patimage"
                      name="patimage"
                      className="border form-control rounded"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="blood" className="text-dark mb-2">
                      Blood Group{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <select name="blood" id="blood" className="form-select" defaultValue="B+">
                      <option value="">select</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">
                        B+
                      </option>
                      <option value="B-">B-</option>
                      <option value="O+">o+</option>
                      <option value="O-">o-</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="bloodpress" className="text-dark mb-2">
                      Blood Pressure{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="bloodpress"
                      id="bloodpress"
                      defaultValue="NA"
                      className="border form-control rounded"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="sugar" className="text-dark mb-2">
                      Sugar{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="sugar"
                      id="sugar"
                      defaultValue="NA"
                      className="border form-control rounded"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="injury" className="text-dark mb-2">
                      Injury/Condition{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="injury"
                      name="injury"
                      defaultValue="heartissue"
                      className="border form-control rounded"
                    />
                  </div>
                  <div className="col-12 mb-3 text-end">
                    <button
                      type="reset"
                      className="btn btn-outline-dark mw-120 me-3 rounded-pill "
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary text-white rounded-pill mw-120 py-2"
                    >
                      Save
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

export default EditPatientPage;
