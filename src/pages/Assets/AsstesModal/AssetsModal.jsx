import { useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-responsive-bs5";
import InventoryTable from "./InventoryTable";
import DepartmentTable from "./DepartmentTable";
function AssetsModal() {
  useEffect(() => {
    const initializeDataTable = (tableId, placeholderText) => {
      if (!$.fn.DataTable.isDataTable(tableId)) {
        $(tableId).DataTable({
          responsive: true,
          order: [],
          lengthMenu: [5, 10, 15],
          columnDefs: [
            {
              targets: "no-sort",
              orderable: false,
            },
          ],
        });

        $(`${tableId}_filter input`).attr("placeholder", placeholderText);
      } else {
        $(tableId).DataTable().columns.adjust().responsive.recalc();
      }
    };

    const handleModalShown = () => {
      $(".modal-preloader").show();
      $(".datatable-container").addClass("d-none");

      setTimeout(() => {
        initializeDataTable("#distributedtd", "Search Inventory");
        initializeDataTable("#addedtd", "Search Inventory");

        $(".modal-preloader").fadeOut(300, function () {
          $(".datatable-container").removeClass("d-none");

          $("#distributedtd, #addedtd")
            .DataTable()
            .columns.adjust()
            .responsive.recalc();
        });
      }, 500);
    };

    $("#productinventory").on("shown.bs.modal", handleModalShown);

    return () => {
      $("#productinventory").off("shown.bs.modal", handleModalShown);
    };
  }, []);

  return (
    <>
      <div
        className="modal fade productinventory"
        id="productinventory"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="productinventory"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="fw-600 text-dark-primary text-capitalize modal-title">
                Stethoscope
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- Preloader --> */}
              <div className="modal-preloader text-center my-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <div className="datatable-container d-none">
                <div className="row g-3">
                  <div className="col-lg-4">
                    <img
                      src="/inv-img.webp"
                      className="w-100 h-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="bg-light p-3 border">
                      <h4 className="fw-600 mb-3 text-dark-primary text-capitalize modal-title">
                        purchasing / added in inventory
                      </h4>
                      <div className="table-responsive">
                        <InventoryTable />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="bg-light p-3 border">
                      <h4 className="fw-600 mb-3 text-dark-primary text-capitalize modal-title">
                        distributed to the doctor / department
                      </h4>
                      <div className="table-responsive">
                        <DepartmentTable />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AssetsModal;
