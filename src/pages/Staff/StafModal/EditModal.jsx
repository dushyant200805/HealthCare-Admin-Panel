import { useEffect, useRef } from "react";
import $ from "jquery";
window.$ = $;
window.jQuery = $;
import "jquery-validation";
function EditModal() {
  useEffect(() => {
    if ($(".edtstaffvalidate").length > 0) {
      $(".edtstaffvalidate").validate({
        rules: {
          e_fname: "required",
          e_lname: "required",
          e_gender: "required",

          e_mobile: {
            required: true,
            minlength: 10,
          },

          e_email: {
            required: true,
            email: true,
          },

          e_address: "required",

          e_dob: "required",

          e_age: {
            required: true,
            number: true,
          },

          e_designation: "required",

          e_maritalstatus: "required",

          e_education: "required",
        },

        messages: {
          e_fname: "Please enter first name",

          e_lname: "Please enter last name",

          e_gender: "Please select gender",

          e_mobile: {
            required: "Please enter mobile number",
            minlength: "Enter valid mobile number",
          },

          e_email: {
            required: "Please enter email",
            email: "Please enter valid email",
          },

          e_address: "Please enter address",

          e_dob: "Please select date of birth",

          e_age: {
            required: "Please enter age",
            number: "Only numbers allowed",
          },

          e_designation: "Please enter designation",

          e_maritalstatus: "Please select marital status",

          e_education: "Please enter education",
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
      <div
        className="modal fade"
        id="editstaff"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered  rounded-10">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="text-dark text-capitalize mb-0 p-3 text-gray">
                Staff Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="edtstaffvalidate">
                <div className="row">
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="e_fname" className="text-dark mb-2">
                      First Name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_fname"
                      id="e_fname"
                      className="border form-control rounded"
                      defaultValue="Andria"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="e_lname" className="text-dark mb-2">
                      Last Name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_lname"
                      id="e_lname"
                      className="border form-control rounded"
                      defaultValue="Lalena"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="e_dob" className="text-dark mb-2">
                      Date Of Birth
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div
                      className="input-group date border rounded custom-err mb-3"
                      id="dob_main2"
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        name="e_dob"
                        id="e_dob"
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
                    <label htmlFor="e_gender" className="text-dark mb-2">
                      Gender
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_gender"
                      id="e_gender"
                      className="border form-control rounded"
                      defaultValue="Female"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="e_age" className="text-dark mb-2">
                      Age
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_age"
                      id="e_age"
                      className="border form-control rounded"
                      defaultValue="23"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="e_mobile" className="text-dark mb-2">
                      Mobile No
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_mobile"
                      id="e_mobile"
                      className="border form-control rounded"
                      defaultValue="+1-9666664555"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="e_email" className="text-dark mb-2">
                      Email
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_email"
                      id="e_email"
                      className="border form-control rounded"
                      defaultValue="andria@demogmail.com"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="e_designation" className="text-dark mb-2">
                      Designation
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_designation"
                      id="e_designation"
                      className="border form-control rounded"
                      defaultValue="Compounder"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="e_maritalstatus" className="text-dark mb-2">
                      Marital Status
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_maritalstatus"
                      id="e_maritalstatus"
                      className="border form-control rounded"
                      defaultValue="Single"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="e_profile" className="text-dark mb-2">
                      Upload Profile Picture
                    </label>
                    <input
                      type="file"
                      name="e_profile"
                      id="e_profile"
                      className="border form-control rounded"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="e_address" className="text-dark mb-2">
                      Address
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <textarea
                      name="e_address"
                      id="e_address"
                      rows="5"
                      className="rounded form-control"
                      defaultValue="Downtown Hills"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="e_education" className="text-dark mb-2">
                      Education
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <textarea
                      name="e_education"
                      id="e_education"
                      rows="5"
                      className="rounded form-control"
                      defaultValue="Compounder Course"
                    />
                  </div>
                  <div className="text-end">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="btn btn-outline-dark me-3 mw-120 rounded-pill py-2"
                    >
                      Cancel
                    </button>
                    <input
                      type="submit"
                      className="btn btn-primary mw-120 rounded-pill py-2"
                      defaultValue="submit"
                    />
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
export default EditModal;
