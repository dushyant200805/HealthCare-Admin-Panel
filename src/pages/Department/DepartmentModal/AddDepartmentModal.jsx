import { useEffect } from "react";
function AddDepartmentModal() {
  useEffect(() => {
    if ($("#adddepartmentfm").length > 0) {
      $("#adddepartmentfm").validate({
        rules: {
          departmentname: "required",

          departmenthead: "required",

          departmentdate: "required",

          status: "required",
        },

        messages: {
          departmentname: "Please enter department name",

          departmenthead: "Please enter department head",

          departmentdate: "Please select department date",

          status: "Please select status",
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
      <div
        className="modal fade"
        id="adddepartment"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog  rounded-10 modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark text-capitalize mb-0 p-3 text-gray">
                Add Department
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="px-4  ">
                <form id="adddepartmentfm">
                  <div className="mb-3">
                    <label htmlFor="departmentname" className="mb-2 text-dark">
                      Department Name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded "
                      name="departmentname"
                      id="departmentname"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="departmenthead" className="mb-2 text-dark">
                      Department Head
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded "
                      name="departmenthead"
                      id="departmenthead"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="mb-2 text-dark">
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="3"
                      className="form-control"

                    />
                  </div>
                  <div className="mb-5  d-flex flex-column justify-content-center">
                    <label className="text-dark">
                      Status
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div className="d-flex gap-2 align-items-center custom-err">
                      <span>
                        <input type="radio" name="status" />
                        <span className="ms-1">Active</span>
                      </span>
                      <span>
                        <input type="radio" name="status" />
                        <span className="ms-1">In Active</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-end">
                    <button
                      type="reset"
                      className="btn btn-outline-dark me-2 mw-120 rounded-pill py-2"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize text-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddDepartmentModal;
