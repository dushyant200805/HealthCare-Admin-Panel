import { Link } from "react-router"
import { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery-validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../../../components/Common-Sections/PageTitle";
function EditDoctorFormPage () {

 const formRef = useRef(null);

  useEffect(() => {
    if ($(formRef.current).length > 0) {
      $(formRef.current).validate({
        rules: {
          fname: "required",
          lname: "required",
          username: "required",
          gender: "required",
          mobile: "required",
          email: {
            required: true,
            email: true,
          },
          pass: "required",
          repeatpass: {
            required: true,
            equalTo: "#pass",
          },
          designation: "required",
          education: "required",
          department: "required",
          city: "required",
          state: "required",
          country: "required",
          pincode: "required",
          dob: "required",
          status: "required",
        },

        messages: {
          fname: "Please enter first name",
          lname: "Please enter last name",
          username: "Please enter username",
          mobile: "Please enter mobile number",
          email: "Please enter valid email",
          pass: "Please enter password",
          repeatpass: "Passwords do not match",
        },

        errorClass: "text-danger mt-1 fs-14",

        errorElement: "small",

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
         <PageTitle title="HC-ERP-Edit Doctor"/>
       <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">Edit doctor</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-600 text-dark-primary"><Link to="/">Home</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 fw-600 text-dark"><Link to="/doctorlist">Doctor's List</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Edit doctor</p>
          </div>
          <Link to="/doctorlist" className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize">Back To Doctor
            List <FontAwesomeIcon icon={faArrowRightToBracket} className="ms-2"/> </Link>
        </div>
        <div className="bg-white py-5 px-3  rounded-10">
          <div className="user-detail mb-4">
            <form id="add_doctor" ref={formRef}>
              <div className="row">
                <div className="col-sm-6 col-lg-4 mb-2">
                  <label htmlFor="fname" className="text-dark-primary mb-2">First Name<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" name="fname" id="fname" defaultValue="John" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-3">
                  <label htmlFor="lname" className="text-dark-primary mb-2">Last Name<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" name="lname" id="lname" defaultValue="Doe" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-2">
                  <label htmlFor="username" className="text-dark-primary mb-2">User Name<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" name="username" id="username" defaultValue="johndoe@123" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-3">
                  <label htmlFor="mobile" className="text-dark-primary mb-2">Mobile Number<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" id="mobile" name="mobile" defaultValue="+1-101111911" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-2">
                  <label htmlFor="email" className="text-dark-primary mb-2">Email<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" id="email" name="email" defaultValue="john@gmail.com" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-2 custom-err">
                  <label htmlFor="pass" className="text-dark-primary mb-2">Password<sup><span
                        className="required">*</span></sup></label>
                  <input type="password" id="pass" name="pass" defaultValue="admin@123" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-2 custom-err">
                  <label htmlFor="repeatpass" className="text-dark-primary mb-2">Confirm Password<sup><span
                        className="required">*</span></sup></label>
                  <input type="password" id="repeatpass" name="repeatpass"  defaultValue="admin@123" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-3">
                  <label htmlFor="education" className="text-dark-primary mb-2">Education<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" id="education" name="education"  defaultValue="Physician" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-2">
                  <label htmlFor="designation" className="text-dark-primary mb-2">Designation<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" id="designation" name="designation"  defaultValue="Assistant Physician" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-2">
                  <label htmlFor="department" className="text-dark-primary mb-2">Department<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" id="department" name="department"  defaultValue="Physician" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-3">
                  <label htmlFor="city" className="text-dark-primary mb-2">City<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" id="city" name="city" defaultValue="Serbia" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-2">
                  <label htmlFor="state" className="text-dark-primary mb-2">State<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" id="state" name="state" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-3">
                  <label htmlFor="country" className="text-dark-primary mb-2">Country<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" id="country" name="country" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-3">
                  <label htmlFor="postalcode" className="text-dark-primary mb-2">Postal Code<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" id="postalcode" name="pincode" defaultValue="21517" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 mb-3">
                  <label htmlFor="dob" className="text-dark-primary mb-2">Date Of Birth<sup><span
                        className="required">*</span></sup></label>
                  <input type="text" name="dob" id="dob" defaultValue="21-04-1996" className="border form-control rounded"/>
                </div>
                <div className="col-sm-6 col-lg-4 px-3 mb-3">
                  <label className="mb-2 text-dark fw-600">Gender<sup><span className="required">*</span></sup></label>
                  <div className="d-flex gap-2 custom-err">
                    <span>
                      <input type="radio" name="gender" defaultChecked/>
                      <span className="ms-1">Male</span>
                    </span>
                    <span>
                      <input type="radio" name="gender"/>
                      <span className="ms-1">Female</span>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="about" className="text-dark-primary mb-2">About</label>
                  <textarea name="about" id="about" cols="30" rows="5" className="form-control rounded"></textarea>
                </div>
                <div className="px-3 mb-3 ">
                  <label className="mb-2 text-dark fw-600">Status<sup><span className="required">*</span></sup></label>
                  <div className="d-flex gap-2 custom-err">
                    <span>
                      <input type="radio" name="status" defaultChecked/>
                      <span className="ms-1">Active</span>
                    </span>
                    <span>
                      <input type="radio" name="status"/>
                      <span className="ms-1">NotActive</span>
                    </span>
                  </div>
                </div>
                <div className="px-3 mb-3 col-4">
                  <label htmlFor="avatar" className="mb-2 text-dark fw-600">Avatar</label>
                  <input type="file" id="avatar" className="form-control rounded"/>
                </div>
                <div className="text-end">
                  <button type="reset" data-bs-dismiss="modal" aria-label="Close"
                    className="btn btn-outline-dark me-3 mw-120 rounded-pill py-2" >Cancel</button>
                  <button type="submit" className="btn btn-primary mw-120 rounded-pill py-2" >Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
       </div>
        </>
    );
}
export default EditDoctorFormPage 