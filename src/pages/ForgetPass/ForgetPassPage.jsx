import { Link } from "react-router";
import { useEffect } from "react";
import PageTitle from "../../components/Common-Sections/PageTitle";
function ForgetPassPage() {
    useEffect(() => {
  if ($(".resetvalidate").length > 0) {
    $(".resetvalidate").validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
      },

      messages: {
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address",
        },
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
        <PageTitle title="Reset Password"/>
            <div className="row align-items-center mx-0 px-0">
                <div
                    className="col-lg-6 bg-dark-primary min-vh-100 d-flex align-items-center justify-content-center auth-logo-main">
                    <div className="auth-logo d-flex flex-column align-items-center">
                        <img src="public/mainlogo.png" alt="" className="mb-4 auth-logo-img w-100 "/>
                        <img src="public/login-main.svg" alt="" className="w-100  auth-logo-doctor"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row align-items-center h-100 justify-content-center p-3 py-lg-0">
                        <div className="bg-white p-4 shadow  rounded-10 col-sm-10 col-xxl-8 auth-form">
                            <h4 className="text-dark fw-600 mb-4">Reset Password</h4>
                            <form className="resetvalidate">
                                <div className="mb-3">
                                    <label htmlFor="email" className="text-dark mb-2">Email<sup><span
                                                className="required">*</span></sup></label>
                                    <input type="email" id="email" name="email" className="border form-control rounded"/>
                                </div>
                                <div className="text-center mb-3">
                                    <button type="submit" className="btn btn-primary mw-120 rounded-pill py-2 w-75">Reset</button>
                                </div>
                            </form>
                            <div className="mb-3 text-center">
                                Don't have an Account <Link to="/register"
                                    className="text-primary text-decoration-underline fw-600">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ForgetPassPage;