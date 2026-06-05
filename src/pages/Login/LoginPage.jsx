import { useEffect } from "react";
import { Link } from "react-router";
import PageTitle from "../../components/Common-Sections/PageTitle";

function LoginPage() { 
    useEffect(() => {
  if ($(".loginvalidate").length > 0) {
    $(".loginvalidate").validate({
      rules: {
        email: {
          required: true,
          email: true,
        },

        password: {
          required: true,
          minlength: 6,
        },
      },

      messages: {
        email: {
          required: "Please enter email",
          email: "Please enter a valid email address",
        },

        password: {
          required: "Please enter password",
          minlength: "Password must be at least 6 characters",
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
          <PageTitle title="HC-ERP-Login"/>
             <div>
                    <div className="row align-items-center mx-0">
                        <div
                            className="col-lg-6 bg-dark-primary min-vh-100 d-flex align-items-center justify-content-center auth-logo-main">
                            <div className="auth-logo d-flex flex-column align-items-center">
                                <img src="public/mainlogo.png" alt="" className="mb-4 auth-logo-img w-100 "/>
                                <img src="public/login-main.svg" alt="" className="w-100  auth-logo-doctor"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row align-items-center h-100 justify-content-center py-3 py-lg-0">
                                <div className="bg-white p-4 shadow  rounded-10 col-sm-10 col-xxl-8 auth-form ">
                                    <h4 className="text-dark fw-600 mb-4">Login To Your Account</h4>
                                    <span className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia
                                        nam repellat magni iusto labore.</span>
                                    <div className="text-center py-3">
                                        <button
                                            className="btn btn-outline-dark w-100 p-1 d-flex align-items-center justify-content-center">
                                            <img src="public/googlelogo.svg" alt=""/> Continue with Google
                                        </button>
                                    </div>

                                    <form className="loginvalidate">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="text-dark mb-2">Email<sup><span
                                                        className="required">*</span></sup></label>
                                            <input type="email" id="email" name="email" className="border form-control rounded"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="text-dark mb-2">Password<sup><span
                                                        className="required">*</span></sup></label>
                                            <input type="password" id="password" name="password" className="border form-control rounded"/>
                                        </div>
                                        <div className="text-center mb-3">
                                            <button type="submit"
                                                className="btn btn-primary w-75 mw-120 rounded-pill py-2">Login</button>
                                        </div>
                                    </form>
                                    <div className="text-center fs-14 mb-2">
                                        Forgot Username or Password <Link to="/resetpass"
                                            className="text-primary text-decoration-underline fw-600 ps-2">Reset</Link>
                                    </div>
                                    <div className="text-center fs-18">
                                        Don't have an Account <Link to="/register"
                                            className="text-primary text-decoration-underline fw-600 ps-2">Register</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </>
    );
}
export default LoginPage;