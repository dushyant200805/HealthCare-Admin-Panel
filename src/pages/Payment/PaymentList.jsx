import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import DeleteModal from "./PaymentModal/DeleteModal";
import AddBillModal from "./PaymentModal/AddBillModal";
import EditBillModal from "./PaymentModal/EditBillModal";
import PageTitle from "../../components/Common-Sections/PageTitle";
function PaymentList() {
  const tableRef = useRef(null);
  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
      pageLength: 5,
      lengthMenu: [5, 15, 20, 25],
      ordering: true,
      searching: true,
      info: true,
      paging: true,
      pagingType: "simple_numbers",
      language: {
        search: "",
        searchPlaceholder: "Search Operation",
        paginate: {
          previous: "Previous",
          next: "Next",
        },
        info: "Showing _START_ To _END_ Of _TOTAL_ Entries",
      },
      dom: '<"d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3"lf>rt<"d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3"ip>',
    });

    return () => {
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        table.destroy();
      }
    };
  }, []);

  const data = [
    {
      id: 1,
      image: "/05.jpg",
      patientName: "Andria lalena",
      admissionId: "Hgyou675",
      doctorName: "Dr. Samantha",
      statusclass: "bg-orange",
      status: "unpaid",
      date: "22/10/2023",
      tax: "10%",
      discount: "5%",
      total: "$40",
    },
    {
      id: 2,
      image: "/05.jpg",
      patientName: "John",
      admissionId: "Hgyou679",
      doctorName: "Dr.James",
      statusclass: "bg-secondary",
      status: "paid",
      date: "26/10/2023",
      tax: "5%",
      discount: "15%",
      total: "$90",
    },
  ];
  return (
    <>
      <PageTitle title="HC-ERP-Payment Invoice" />
      <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">
          Payment List
        </h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-bold text-dark-primary">
              <Link to="/">Home</Link>
            </p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Payment List</p>
          </div>
          <Link
            to="#"
            className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize"
            data-bs-toggle="modal"
            data-bs-target="#addbill"
          >
            <i className="bi bi-plus-circle me-2"></i> add new Payment
          </Link>
        </div>
        <div className="bg-white  rounded-10 my-3 p-4">
          <table className="table custom-data-table" id="paymntdt">
            <thead>
              <tr>
                <td className="text-dark-primary no-sort  ">
                  <input type="checkbox" className="" />
                </td>
                <td className="text-dark-primary  ">Patient Name</td>
                <td className="text-dark-primary  ">Admission Id</td>
                <td className="text-dark-primary  ">Doctor Name</td>
                <td className="text-dark-primary  ">Status</td>
                <td className="text-dark-primary  ">Date</td>
                <td className="text-dark-primary  ">Tax</td>
                <td className="text-dark-primary  ">Discount</td>
                <td className="text-dark-primary  ">Total</td>
                <td className="text-dark-primary no-sort  ">Action</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>
                      {" "}
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div className="d-flex">
                        <img
                          src={item.image}
                          alt=""
                          width="25"
                          height="25"
                          className="rounded-circle"
                        />
                        <div className="ms-2 text-dark">{item.patientName}</div>
                      </div>
                    </td>
                    <td>{item.admissionId}</td>
                    <td>{item.doctorName}</td>
                    <td>
                      <span
                        className={`custom-badge badge ${item.statusclass} text-white align-items-center rounded-pill text-capitalize`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>{item.date}</td>
                    <td>{item.tax}</td>
                    <td>{item.discount}</td>
                    <td>{item.total}</td>
                    <td>
                      <a
                        href="#"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#editbill"
                      >
                        <i className=" bi bi-pencil-square"></i>
                      </a>
                      <a
                        href="#"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteconf"
                      >
                        <i className=" bi bi-trash"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <DeleteModal />
      <AddBillModal />
      <EditBillModal />
    </>
  );
}
export default PaymentList;
