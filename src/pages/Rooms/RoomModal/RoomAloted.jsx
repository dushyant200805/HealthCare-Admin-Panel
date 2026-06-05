import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
function RoomAloted() {
  useEffect(() => {
    if ($("#allotnewroom").length > 0) {
      $("#allotnewroom").validate({
        rules: {
          room_no: "required",

          room_type: {
            required: true,
          },

          allotedpatient: "required",

          allot_date: "required",

          discharge_date: "required",
        },

        messages: {
          room_no: "Room number is required",

          room_type: "Room type is required",

          allotedpatient: "Patient name is required",

          allot_date: "Please select allot date",

          discharge_date: "Please select discharge date",
        },

        errorElement: "small",

        errorClass: "text-danger mt-1 d-block",

        errorPlacement: function (error, element) {
          if (element.closest(".input-group").length) {
            error.insertAfter(element.closest(".input-group"));
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
        id="roomallot"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog  rounded-10 modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="text-dark text-capitalize mb-0 p-3 text-gray">
                add room allotment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="allotnewroom">
                <div className="mb-3 input-main">
                  <label htmlFor="room_no" className="mb-2">
                    Room No
                    <sup>
                      <span className="required">*</span>
                    </sup>
                  </label>
                  <input
                    type="number"
                    name="room_no"
                    required
                    id="room_no"
                    autoComplete="off"
                    className="form-control rounded"
                  />
                </div>
                <div className="mb-3 input-main">
                  <label htmlFor="room_type" className="mb-2">
                    Room Type
                    <sup>
                      <span className="required">*</span>
                    </sup>
                  </label>
                  <select
                    name="room_type"
                    required
                    id="room_type"
                    className="form-select"
                  >
                    <option value="">Select</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Super Deluxe">Super Deluxe</option>
                    <option value="ICU">ICU</option>
                  </select>
                </div>
                <div className="mb-3 input-main">
                  <label htmlFor="allotedpatient" className="mb-2">
                    Patient Name
                    <sup>
                      <span className="required">*</span>
                    </sup>
                  </label>
                  <input
                    type="text"
                    name="allotedpatient"
                    required
                    id="allotedpatient"
                    className="form-control rounded"
                  />
                </div>
                <div className="mb-3 input-main">
                  <label htmlFor="date" className="mb-2">
                    Allotment Date
                    <sup>
                      <span className="required">*</span>
                    </sup>
                  </label>
                  <div
                    className="input-group date border rounded custom-err"
                    id="allot_date_main"
                  >
                    <input
                      type="text"
                      className="form-control border-0"
                      name="allot_date"
                      id="date"
                      autoComplete="off"
                    />
                    <span className="input-group-append">
                      <span className="input-group-text date-btn d-block">
                        <i className="fa fa-calendar"></i>{" "}
                        <FontAwesomeIcon icon="fa-solid fa-calendar" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="mb-3 input-main">
                  <label htmlFor="discharge_date" className="mb-2">
                    Discharge Date
                    <sup>
                      <span className="required">*</span>
                    </sup>
                  </label>
                  <div
                    className="input-group date border rounded custom-err"
                    id="discharge_date_main"
                  >
                    <input
                      type="text"
                      className="form-control border-0"
                      name="discharge_date"
                      id="discharge_date"
                      autoComplete="off"
                    />
                    <span className="input-group-append">
                      <span className="input-group-text date-btn d-block">
                        <i className="fa fa-calendar"></i>{" "}
                        <FontAwesomeIcon icon="faCalendar" />
                      </span>
                    </span>
                  </div>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RoomAloted;
