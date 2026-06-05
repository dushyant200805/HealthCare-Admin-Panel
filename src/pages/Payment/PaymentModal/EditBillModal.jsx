import { useEffect } from "react";
function EditBillModal() {
  useEffect(() => {
    if ($(".edtbillvalidate").length > 0) {
      $(".edtbillvalidate").validate({
        rules: {
          e_billnumber: "required",

          e_adm_id: "required",

          e_patient_name: "required",

          e_doctor_name: "required",

          e_edtadmit_date: "required",

          e_edtdischarge_date: "required",

          e_discount: {
            required: true,
            number: true,
          },

          e_total_amount: {
            required: true,
            number: true,
          },

          e_payment_method: "required",

          e_payment_status: "required",
        },

        messages: {
          e_billnumber: "Please enter bill number",

          e_adm_id: "Please enter admission ID",

          e_patient_name: "Please enter patient name",

          e_doctor_name: "Please enter doctor name",

          e_edtadmit_date: "Please select admit date",

          e_edtdischarge_date: "Please select discharge date",

          e_discount: {
            required: "Please enter discount",
            number: "Only numbers allowed",
          },

          e_total_amount: {
            required: "Please enter total amount",
            number: "Only numbers allowed",
          },

          e_payment_method: "Please select payment method",

          e_payment_status: "Please select payment status",
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
        id="editbill"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg  rounded-10 modal-dialog-centered ">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="text-dark text-capitalize px-3  m-0 text-gray">
                Edit Bill
              </h5>
              <button
                type="button"
                className="btn-close me-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="px-3 edtbillvalidate">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="e_billnumber" className="mb-2">
                      Bill Number
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded"
                      name="e_billnumber"
                      id="e_billnumber"
                      defaultValue="0321ad"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="e_adm_id" className="mb-2">
                      Admission Id
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_adm_id"
                      id="e_adm_id"
                      className="form-control rounded"
                      defaultValue="Hgyou675"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="e_patient_name" className="mb-2">
                      Patient Name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_patient_name"
                      id="e_patient_name"
                      className="form-control rounded"
                      defaultValue="Andria Lalena"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="e_doctor_name" className="mb-2">
                      Doctor Name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_doctor_name"
                      id="e_doctor_name"
                      className="form-control rounded"
                      defaultValue="Dr.Samantha"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="e_edtadmit_date" className="mb-2">
                      Admit Date
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div
                      className="input-group date border rounded custom-err"
                      id="edtroom_adddate2"
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        name="e_edtadmit_date"
                        id="e_edtadmit_date"
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
                    <label htmlFor="e_edtdischarge_date" className="mb-2">
                      Discharge Date
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div
                      className="input-group date border rounded custom-err"
                      id="edtroom_dischdate2"
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        name="e_edtdischarge_date"
                        id="e_edtdischarge_date"
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
                    <label htmlFor="e_discount" className="mb-2">
                      Discount
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_discount"
                      id="e_discount"
                      className="form-control rounded"
                      defaultValue="205"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="e_total_amount" className="mb-2">
                      Total Amount
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_total_amount"
                      id="e_total_amount"
                      className="form-control rounded"
                      defaultValue="9680"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="e_payment_method" className="mb-2">
                      Payment Method
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_payment_method"
                      id="e_payment_method"
                      className="form-control rounded"
                      defaultValue="Cash"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="e_payment_status" className="mb-2">
                      Payment status
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="e_payment_status"
                      id="e_payment_status"
                      className="form-control rounded"
                      defaultValue="Unpaid"
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
export default EditBillModal;
