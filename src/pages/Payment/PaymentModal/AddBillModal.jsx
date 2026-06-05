import { useEffect } from "react";
function AddBillModal() {
  useEffect(() => {
    if ($(".addbillvalidate").length > 0) {
      $(".addbillvalidate").validate({
        rules: {
          billnumber: "required",

          adm_id: "required",

          patient_name: "required",

          doctor_name: "required",

          addadmit_date: "required",

          adddischarge_date: "required",

          discount: {
            required: true,
            number: true,
          },

          total_amount: {
            required: true,
            number: true,
          },

          payment_method: "required",

          payment_status: "required",
        },

        messages: {
          billnumber: "Please enter bill number",

          adm_id: "Please enter admission ID",

          patient_name: "Please enter patient name",

          doctor_name: "Please enter doctor name",

          addadmit_date: "Please select admit date",

          adddischarge_date: "Please select discharge date",

          discount: {
            required: "Please enter discount",
            number: "Only numbers allowed",
          },

          total_amount: {
            required: "Please enter total amount",
            number: "Only numbers allowed",
          },

          payment_method: "Please select payment method",

          payment_status: "Please select payment status",
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
      <div className="modal fade" id="addbill" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg  rounded-10 modal-dialog-centered ">
          <div className="modal-content border-0">
            <div className="modal-header px-4">
              <h5 className="text-dark text-capitalize text-gray">Add Bill</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-4">
              <form className="addbillvalidate">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="billnumber" className="mb-2">
                      Bill Number
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="billnumber"
                      name="billnumber"
                      className="form-control rounded"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="adm_id" className="mb-2">
                      Admission Id
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="adm_id"
                      id="adm_id"
                      className="form-control rounded"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="patient_name" className="mb-2">
                      Patient Name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="patient_name"
                      name="patient_name"
                      className="form-control rounded"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="doctor_name" className="mb-2">
                      Doctor Name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="doctor_name"
                      name="doctor_name"
                      className="form-control rounded"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="addadmit_date" className="mb-2">
                      Admit Date
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div
                      className="input-group date border rounded custom-err"
                      id="edtroom_adddate"
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        id="addadmit_date"
                        name="addadmit_date"
                        autoComplete="off"
                      />
                      <span className="input-group-append">
                        <span className="input-group-text date-btn d-block">
                          <i className="fa fa-calendar"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="adddischarge_date" className="mb-2">
                      Discharge Date
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div
                      className="input-group date border rounded custom-err"
                      id="edtroom_dischdate"
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        name="adddischarge_date"
                        id="adddischarge_date"
                        autoComplete="off"
                      />
                      <span className="input-group-append">
                        <span className="input-group-text date-btn d-block">
                          <i className="fa fa-calendar"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="discount" className="mb-2">
                      Discount
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="discount"
                      name="discount"
                      className="form-control rounded"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="total_amount" className="mb-2">
                      Total Amount
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="total_amount"
                      id="total_amount"
                      className="form-control rounded"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="payment_method" className="mb-2">
                      Payment Method
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="payment_method"
                      id="payment_method"
                      className="form-control rounded"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="payment_status" className="mb-2">
                      Payment Status
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="payment_status"
                      id="payment_status"
                      className="form-control rounded"
                    />
                  </div>
                  <div className="mb-3 text-end">
                    <button
                      type="reset"
                      className="btn btn-outline-dark me-2 rounded-pill py-2 mw-120"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      id="submit"
                      className="btn btn-primary mw-120 rounded-pill py-2"
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
export default AddBillModal;
