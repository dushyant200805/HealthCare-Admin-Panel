function EditRoom() {
  return (
    <>
      <div
        className="modal fade"
        id="editroomallot"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog  rounded-10 modal-dialog-centered ">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="text-dark text-capitalize mb-0 p-3 text-gray">
                Edit room allotment
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
                <form id="edit_roomallot">
                  <div className="mb-3">
                    <label htmlFor="edtroom_no" className="mb-2">
                      Room No
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded"
                      name="edtroom_no"
                      id="edtroom_no"
                      defaultValue="102"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edtroom_type" className="mb-2">
                      Room Type
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <select
                      name="edtroom_type"
                      id="edtroom_type"
                      className="form-select"
                    >
                      <option value="">Select</option>
                      <option value="Super Deluxe">Super Deluxe</option>
                      <option value="Deluxe" defaultValue>
                        Deluxe
                      </option>
                      <option value="ICU">ICU</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edtroom_patient" className="mb-2">
                      Patient Name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      name="edtroom_patient"
                      id="edtroom_patient"
                      className="form-control rounded"
                      defaultValue="Andrew"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="allot_date" className="mb-2">
                      Allotment Date
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div
                      className="input-group date border rounded custom-err"
                      id="edtroom_allotdate"
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        name="allot_date"
                        id="allot_date"
                        autoComplete="off"
                        defaultValue="2/10/2023"
                      />
                      <span className="input-group-append">
                        <span className="input-group-text date-btn d-block">
                          <i className="fa fa-calendar"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edt_dischdate" className="mb-2">
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
                        name="edt_dischdate"
                        id="edt_dischdate"
                        autoComplete="off"
                        defaultValue="12/11/2023"
                      />
                      <span className="input-group-append">
                        <span className="input-group-text date-btn d-block">
                          <i className="fa fa-calendar"></i>
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
      </div>
    </>
  );
}
export default EditRoom;
