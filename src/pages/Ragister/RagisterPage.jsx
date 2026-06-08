import { useEffect } from "react";
import { Link } from "react-router";
import PageTitle from "../../components/Common-Sections/PageTitle";
function RagisterPage() {
  useEffect(() => {
    if ($(".registervalidate").length > 0) {
      $(".registervalidate").validate({
        rules: {
          fullname: "required",

          email: {
            required: true,
            email: true,
          },

          password: {
            required: true,
            minlength: 6,
          },

          cnfpass: {
            required: true,
            equalTo: "#password",
          },

          checkterms: {
            required: true,
          },
        },

        messages: {
          fullname: "Please enter full name",

          email: {
            required: "Please enter email",
            email: "Please enter valid email",
          },

          password: {
            required: "Please enter password",
            minlength: "Minimum 6 characters required",
          },

          cnfpass: {
            required: "Please confirm password",
            equalTo: "Passwords do not match",
          },

          checkterms: "Please accept terms and conditions",
        },

        errorElement: "small",

        errorClass: "text-danger mt-1 d-block",

        errorPlacement: function (error, element) {
          if (element.attr("type") === "checkbox") {
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
      <PageTitle title="HC-ERP-Register" />
      <div className="row px-0 mx-0">
        <div className="col-lg-6 bg-dark-primary min-vh-100 d-flex align-items-center justify-content-center auth-logo-main">
          <div className="auth-logo d-flex flex-column align-items-center">
            <img
              src="/mainlogo.png"
              alt=""
              className="mb-4 auth-logo-img w-100 "
            />
            <img
              src="/login-main.svg"
              alt=""
              className="w-100  auth-logo-doctor"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row align-items-center h-100 justify-content-center py-3 py-lg-0">
            <div className="bg-white p-4 shadow  rounded-10 col-sm-10 col-xxl-8 auth-form ">
              <h4 className="text-dark fw-600 mb-4">Register Account</h4>
              <span className="text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                officia nam repellat magni iusto labore.
              </span>
              <div className="text-center py-3">
                <button className="btn btn-outline-dark w-100 p-1 d-flex align-items-center justify-content-center">
                  <img src="/googlelogo.svg" alt="" /> Continue with Google
                </button>
              </div>
              <form className="registervalidate">
                <div className="mb-3">
                  <label htmlFor="fullname" className="text-dark mb-2">
                    Full name{" "}
                    <sup>
                      <span className="required">*</span>
                    </sup>
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="border form-control rounded"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="text-dark mb-2">
                    Email
                    <sup>
                      <span className="required">*</span>
                    </sup>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border form-control rounded"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="text-dark mb-2">
                    Password
                    <sup>
                      <span className="required">*</span>
                    </sup>
                  </label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="border form-control rounded"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cnfpass" className="text-dark mb-2">
                    Confirm Password
                    <sup>
                      <span className="required">*</span>
                    </sup>
                  </label>
                  <input
                    type="text"
                    id="cnfpass"
                    name="cnfpass"
                    className="border form-control rounded"
                  />
                </div>
                <div className="mb-3 d-flex ">
                  <input
                    type="checkbox"
                    className="form-check me-3"
                    name="checkterms"
                    defaultChecked
                  />
                  <span>
                    I Agree to the{" "}
                    <a
                      href="#"
                      className="text-primary text-decoration-underline fw-600"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-primary text-decoration-underline fw-600"
                    >
                      Privacy Policy
                    </a>{" "}
                  </span>
                </div>
                <div className="text-center mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary w-75 mw-120 rounded-pill py-2"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="mb-3 text-center">
                Already have an Account{" "}
                <Link
                  to="/login"
                  className="text-primary text-decoration-underline fw-600"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RagisterPage;
