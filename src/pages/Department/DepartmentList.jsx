import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import DeleteModal from "./DepartmentModal/DeleteModal";
import AddDepartmentModal from "./DepartmentModal/AddDepartmentModal";
import EditDepartmentModal from "./DepartmentModal/EditDepartmentModal";
import PageTitle from "../../components/Common-Sections/PageTitle";

window.$ = $;
window.jQuery = $;
function DepartmentList() {
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
          id:1,
          Department: "Cardiology",
           DepartmentHead: "Dr. Andrea Lalema",
          Description: "Investigates and treats heart problems",
          status: "active",
          statusClass: "bg-primary"
        },
        {
          id:2,
          Department: "Skin Care",
           DepartmentHead: "Dr. Jacob",
          Description: "Senior Skin Care Doctor",
          status: "not active",
          statusClass: "bg-orange"
        },
        {
          id:3,
          Department: "Physician",
           DepartmentHead: "Dr. Sarah Johnson",
          Description: "Junior Physician",
          status: "active",
          statusClass: "bg-primary"
        },
         {
          id:4,
          Department: "Physician",
           DepartmentHead: "Dr.Head",
          Description: "Senior Physician",
          status: "not active",
          statusClass: "bg-orange"
        },
         {
          id:5,
          Department: "Cardiology",
           DepartmentHead: "Dr.Mike",
          Description: "Senior Cardiology Doctor",
          status: "active",
          statusClass: "bg-primary"
        },
         {
          id:6,
          Department: "Dental Care",
           DepartmentHead: "Dr.August",
          Description: "Senior Dental Doctor",
          status: "active",
          statusClass: "bg-primary"
        },
        
           ];

  return (
    <>
    
     <PageTitle title="HC-ERP-Department List"/>
      <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">Department List</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-bold text-dark-primary"><Link to="/">Home</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Department List</p>
          </div>
          <button className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize"
            data-bs-toggle="modal" data-bs-target="#adddepartment"><i className="bi bi-plus-circle me-2"></i> Add
            Department</button>
        </div>
        <div className="bg-white rounded-10 my-3">
          <div className="p-4">
            <table className="table custom-data-table" ref={tableRef} id="adddepartmentdt">
              <thead>
                <tr>
                  <td className="text-dark-primary   no-sort ">
                    <input type="checkbox" className="" name="check" value="check"/>
                  </td>
                  <td className="text-dark-primary    ">
                    Department
                  </td>
                  <td className="text-dark-primary    ">
                    Department Head
                  </td>
                  <td className="text-dark-primary    ">
                    Description
                  </td>
                  <td className="text-dark-primary    ">
                    Status
                  </td>
                  <td className="text-dark-primary   no-sort">
                    Action
                  </td>
                </tr>
              </thead>
              <tbody>
                {data.map((item,index)=>{
                    return (
                      <tr key={index}>
                        <td><input type="checkbox"/></td>
                        <td>{item.Department}</td>
                        <td>{item.DepartmentHead}</td>
                        <td>{item.Description}</td>
                        <td>
                          <span className={`custom-badge badge ${item.statusClass} text-white align-items-center rounded-pill text-capitalize`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="position-relative">
                          <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#editdepartment"><i
                              className=" bi bi-pencil-square"></i></a>
                          <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#deleteconf"><i
                              className=" bi bi-trash"></i></button>
                        </td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
       <DeleteModal/>
       <AddDepartmentModal/>
       <EditDepartmentModal/>
    </>
  );
}

export default DepartmentList;