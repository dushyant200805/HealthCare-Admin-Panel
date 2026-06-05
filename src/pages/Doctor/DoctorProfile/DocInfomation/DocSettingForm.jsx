import { useEffect, useRef } from "react";
import $ from "jquery";
window.$ = $;
window.jQuery = $;
import "jquery-validation";
function DocSettingForm () {
      const formRef = useRef(null);

  useEffect(() => {
    if ($(formRef.current).length > 0) {
      $(formRef.current).validate({
        rules: {
          username: "required",

          mobile: {
            required: true,
            minlength: 10,
          },

          email: {
            required: true,
            email: true,
          },

          pass: "required",

          newpass: {
            required: true,
            minlength: 6,
          },

          repeatpass: {
            required: true,
            equalTo: "#newpass",
          },

          address: "required",
        },

        messages: {
          username: "Please enter username",

          mobile: {
            required: "Please enter mobile number",
            minlength: "Enter valid mobile number",
          },

          email: {
            required: "Please enter email",
            email: "Please enter valid email",
          },

          pass: "Please enter current password",

          newpass: {
            required: "Please enter new password",
            minlength: "Minimum 6 characters required",
          },

          repeatpass: {
            required: "Please confirm password",
            equalTo: "Passwords do not match",
          },

          address: "Please enter address",
        },

        errorElement: "small",

        errorClass: "text-danger fw-500 fs-6 mt-1 d-block",

        highlight: function (element) {
          $(element).addClass("border-danger");
        },

        unhighlight: function (element) {
          $(element).removeClass("border-danger");
        },
      });
    }
  }, []);
    return(
        <>
             <div className="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password">
                  <div className="p-4">
                    <form id="edit_doctor_profile"  ref={formRef}>
                      <div className="mb-4">
                        <label htmlFor="username" className="text-dark mb-2">User Name <sup><span
                              className="required">*</span></sup></label>
                        <input type="text" className="border form-control rounded" name="username" id="username"
                          defaultValue="Michaelle"/>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="mobile" className="text-dark mb-2">Mobile<sup><span
                              className="required">*</span></sup></label>
                        <input type="text" className="border form-control rounded" name="mobile" id="mobile"
                          defaultValue="+01-919999999"/>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="text-dark mb-2">Email<sup><span
                              className="required">*</span></sup></label>
                        <input type="email" className="border form-control rounded" name="email" id="email"
                          defaultValue="michaelle@gmail.com"/>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="address" className="text-dark mb-2">Address<sup><span
                              className="required">*</span></sup></label>
                        <textarea name="address" id="address" rows="5" className="form-control rounded"></textarea>
                      </div>
                      <h4 className="text-dark fw-600 my-4">Security Setting</h4>
                      <div className="mb-4 custom-err">
                        <label htmlFor="pass" className="text-dark mb-2">Current Password<sup><span
                              className="required">*</span></sup></label>
                        <input type="password" name="pass" id="pass" className="border form-control rounded"
                          defaultValue="admin@123"/>
                      </div>
                      <div className="mb-4 custom-err">
                        <label htmlFor="newpass" className="text-dark mb-2">New Password<sup><span
                              className="required">*</span></sup></label>
                        <input type="password" id="newpass" name="newpass" className="border form-control rounded"/>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="repeatpass" className="text-dark mb-2">Confirm Password<sup><span
                              className="required">*</span></sup></label>
                        <input type="text" id="repeatpass" name="repeatpass" className="border form-control rounded"/>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary mw-120 rounded-pill">Change</button>
                      </div>
                    </form>
                  </div>
                </div>
        </>
    );
}
export default DocSettingForm