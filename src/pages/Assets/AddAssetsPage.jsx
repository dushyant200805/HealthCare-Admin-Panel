import { Link } from "react-router";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery-validation";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageTitle from "../../components/Common-Sections/PageTitle";
function AddAssetsPage() {
  const formRef = useRef(null);

  useEffect(() => {
    if ($(formRef.current).length > 0) {
      $(formRef.current).validate({
        rules: {
          asset_in_date: "required",
          asset_condition: "required",
          asset_warranty: "required",
          asset_name: "required",
          asset_type: "required",
          asset_id: "required",
          asset_desc: "required",
          asset_assignto: "required",
          asset_department: "required",
          asset_notes: "required",
        },

        messages: {
          asset_in_date: "Please select purchasing date",
          asset_condition: "Please select asset condition",
          asset_warranty: "Please enter asset warranty",
          asset_name: "Please enter asset name",
          asset_type: "Please enter asset type",
          asset_id: "Please enter asset unique id",
          asset_desc: "Please enter description",
          asset_assignto: "Please select doctor",
          asset_department: "Please enter department",
          asset_notes: "Please enter notes",
        },

        errorElement: "small",
        errorClass: "text-danger mt-1 d-block",

        errorPlacement: function (error, element) {
          if (element.attr("type") === "radio") {
            error.appendTo(element.closest(".custom-err"));
          } else if (element.closest(".input-group").length) {
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
      <PageTitle title="HC-ERP-Assets" />
      <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">add asset</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-600 text-dark-primary">
              <Link to="/">Home</Link>
            </p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0">Add asset</p>
          </div>
          <Link
            to="/assetslist"
            className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize"
          >
            {" "}
            Assets list <i className="fa-solid fa-eye ms-2"></i>{" "}
          </Link>
        </div>
        <div className="mb-4  rounded-10">
          <div className="border-0 shadow-sm h-100 bg-white  rounded-10">
            <div className="card-body p-4 poppins">
              <form id="addasset_form" ref={formRef}>
                <div className="row">
                  <div className="col-12 px-3 mb-3">
                    <h5 className="text-dark text-capitalize text-dark fw-600 mb-0">
                      {" "}
                      Asset Details
                    </h5>
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label
                      htmlFor="bk_apnt_date"
                      className="mb-2 text-dark fw-600 text-capitalize "
                    >
                      Date Of purchasing
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div
                      className="input-group date border custom-err rounded mb-3"
                      id="bk_apnt_dtmain"
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        name="asset_in_date"
                        id="bk_apnt_date"
                        autoComplete="off"
                        required
                      />
                      <span className="input-group-append">
                        <span className="input-group-text date-btn d-block">
                          <i className="fa fa-calendar"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label className="mb-2 text-dark fw-600 text-capitalize">
                      asset condition
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <div className="d-flex gap-2 custom-err">
                      <input
                        type="radio"
                        name="asset_condition"
                        id="new"
                        required
                      />
                      <label className="text-capitalize" htmlFor="male">
                        new{" "}
                      </label>
                      <input
                        type="radio"
                        name="asset_condition"
                        id="old"
                        required
                      />
                      <label className="text-capitalize" htmlFor="female">
                        old
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label
                      htmlFor="bk_apnt_date"
                      className="mb-2 text-dark fw-600 text-capitalize "
                    >
                      asset warranty
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="asset_warranty"
                      name="asset_warranty"
                      className="form-control rounded "
                      required
                    />
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label
                      htmlFor="asset_name"
                      className="mb-2 text-dark fw-600 text-capitalize"
                    >
                      asset name
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="asset_name"
                      name="asset_name"
                      className="form-control rounded "
                      required
                    />
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label
                      htmlFor="asset_type"
                      className="mb-2 text-dark fw-600 text-capitalize"
                    >
                      asset type
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="asset_type"
                      name="asset_type"
                      className="form-control rounded "
                      required
                    />
                  </div>
                  <div className="col-sm-6 col-md-4 px-3 mb-3">
                    <label
                      htmlFor="asset_id"
                      className="mb-2 text-dark fw-600 text-capitalize"
                    >
                      {" "}
                      asset unique id{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="asset_id"
                      name="asset_id"
                      className="form-control rounded "
                      required
                    />
                  </div>
                  <div className="col-12 px-3 mb-3">
                    <label
                      htmlFor="asset_desc"
                      className="mb-2 text-dark fw-600"
                    >
                      Description
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <textarea
                      name="asset_desc"
                      id="asset_desc"
                      cols="30"
                      rows="5"
                      className="form-control  rounded-10"
                      required
                    ></textarea>
                  </div>

                  <div className="col-sm-6 px-3 mb-3">
                    <label
                      htmlFor="asset_assignto"
                      className="mb-2 text-dark fw-600 text-capitalize"
                    >
                      Assign to{" "}
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <select
                      name="asset_assignto"
                      id="asset_assignto"
                      className="form-select"
                      required
                    >
                      <option value="">Select doctor</option>
                      <option value="Andrew">Andrew</option>
                      <option value="Symond">Symond</option>
                    </select>
                  </div>
                  <div className="col-sm-6 px-3 mb-3">
                    <label
                      htmlFor="asset_department"
                      className="mb-2 text-dark fw-600"
                    >
                      Department
                      <sup>
                        <span className="required">*</span>
                      </sup>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded "
                      name="asset_department"
                      id="asset_department"
                      required
                    />
                  </div>
                  <div className="col-12 px-3 mb-3">
                    <label
                      htmlFor="asset_notes"
                      className="mb-2 text-dark fw-600 text-dark fw-600"
                    >
                      Notes
                    </label>
                    <textarea
                      name="asset_notes"
                      id="asset_notes"
                      cols="30"
                      rows="5"
                      className="form-control  rounded-10"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 px-3 mb-3 text-end">
                    <button
                      type="button"
                      className="btn btn-outline-dark me-2 mw-120 rounded-pill py-2"
                    >
                      cancel
                    </button>
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      className="btn btn-primary text-white rounded-pill mw-120 py-2"
                      defaultValue="Submit"
                    />
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
export default AddAssetsPage;
